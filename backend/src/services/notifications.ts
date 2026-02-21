import webpush from 'web-push'
import { prisma } from '../index'

let initialized = false

/**
 * Initialize VAPID keys from DB (generate once if not present)
 */
export async function initPushNotifications(): Promise<void> {
  try {
    let pubKey = await prisma.systemSetting.findUnique({ where: { key: 'vapid_public' } })
    let privKey = await prisma.systemSetting.findUnique({ where: { key: 'vapid_private' } })

    if (!pubKey || !privKey) {
      const keys = webpush.generateVAPIDKeys()
      await prisma.systemSetting.upsert({
        where: { key: 'vapid_public' },
        update: { value: keys.publicKey },
        create: { key: 'vapid_public', value: keys.publicKey }
      })
      await prisma.systemSetting.upsert({
        where: { key: 'vapid_private' },
        update: { value: keys.privateKey },
        create: { key: 'vapid_private', value: keys.privateKey }
      })
      pubKey = { key: 'vapid_public', value: keys.publicKey, updatedAt: new Date() }
      privKey = { key: 'vapid_private', value: keys.privateKey, updatedAt: new Date() }
      console.log('Generated new VAPID keys')
    }

    webpush.setVapidDetails(
      'mailto:kenrosen@gmail.com',
      pubKey.value,
      privKey.value
    )
    initialized = true
    console.log('Push notifications initialized')
  } catch (err) {
    console.error('Failed to initialize push notifications:', err)
  }
}

export async function getVapidPublicKey(): Promise<string> {
  const key = await prisma.systemSetting.findUnique({ where: { key: 'vapid_public' } })
  return key?.value || ''
}

/**
 * Send a push notification to all subscribed devices
 */
export async function sendPushNotification(title: string, body: string): Promise<void> {
  if (!initialized) return

  const subscriptions = await prisma.pushSubscription.findMany()
  if (subscriptions.length === 0) return

  const payload = JSON.stringify({ title, body })

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
        payload
      )
    } catch (err: any) {
      // Remove invalid/expired subscriptions
      if (err.statusCode === 410 || err.statusCode === 404) {
        await prisma.pushSubscription.delete({ where: { id: sub.id } }).catch(() => {})
        console.log(`Removed expired push subscription: ${sub.endpoint.substring(0, 50)}...`)
      } else {
        console.error('Push notification failed:', err.message)
      }
    }
  }
}
