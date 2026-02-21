import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'
import { getVapidPublicKey } from '../services/notifications'

const router = Router()

// GET /api/notifications/vapid-public-key
router.get('/vapid-public-key', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const key = await getVapidPublicKey()
    res.json({ key })
  } catch (err) {
    next(err)
  }
})

// POST /api/notifications/subscribe
router.post('/subscribe', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { endpoint, p256dh, auth } = req.body

    if (!endpoint || !p256dh || !auth) {
      return res.status(400).json({ message: 'endpoint, p256dh, and auth are required' })
    }

    await prisma.pushSubscription.upsert({
      where: { endpoint },
      update: { p256dh, auth },
      create: { endpoint, p256dh, auth }
    })

    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// DELETE /api/notifications/unsubscribe
router.delete('/unsubscribe', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { endpoint } = req.body
    if (endpoint) {
      await prisma.pushSubscription.deleteMany({ where: { endpoint } })
    }
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

export default router
