import { prisma } from '../index'
import { sendPushNotification } from './notifications'

interface QueuedNotification {
  title: string
  body: string
  timestamp: string
}

/**
 * Check if current time is within quiet hours.
 * Quiet hours default to 22:00 - 08:00.
 */
export async function isQuietHours(): Promise<boolean> {
  const quietStartSetting = await prisma.systemSetting.findUnique({ where: { key: 'notificationQuietStart' } })
  const quietEndSetting = await prisma.systemSetting.findUnique({ where: { key: 'notificationQuietEnd' } })

  const quietStart = quietStartSetting?.value || '22:00'
  const quietEnd = quietEndSetting?.value || '08:00'

  // Get current time in user's timezone (default America/New_York)
  const tzSetting = await prisma.systemSetting.findUnique({ where: { key: 'timezone' } })
  const tz = tzSetting?.value || 'America/New_York'

  const now = new Date()
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
  const currentTime = formatter.format(now)

  // Simple string comparison works for HH:MM format
  if (quietStart > quietEnd) {
    // Overnight range (e.g., 22:00 - 08:00)
    return currentTime >= quietStart || currentTime < quietEnd
  } else {
    // Same-day range
    return currentTime >= quietStart && currentTime < quietEnd
  }
}

/**
 * Either send notification immediately or queue it for the morning brief.
 */
export async function queueOrSendNotification(title: string, body: string): Promise<void> {
  const quiet = await isQuietHours()

  if (quiet) {
    // Queue for morning brief
    const existing = await prisma.systemSetting.findUnique({ where: { key: 'queuedNotifications' } })
    const queue: QueuedNotification[] = existing ? JSON.parse(existing.value) : []

    queue.push({ title, body, timestamp: new Date().toISOString() })

    await prisma.systemSetting.upsert({
      where: { key: 'queuedNotifications' },
      update: { value: JSON.stringify(queue) },
      create: { key: 'queuedNotifications', value: JSON.stringify(queue) }
    })
  } else {
    await sendPushNotification(title, body)
  }
}

/**
 * Drain queued notifications and return them.
 */
export async function drainQueue(): Promise<QueuedNotification[]> {
  const existing = await prisma.systemSetting.findUnique({ where: { key: 'queuedNotifications' } })
  if (!existing) return []

  const queue: QueuedNotification[] = JSON.parse(existing.value)

  // Clear the queue
  await prisma.systemSetting.update({
    where: { key: 'queuedNotifications' },
    data: { value: '[]' }
  })

  return queue
}
