import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'
import { triggerFollowUpCheck, triggerTriggerCheck, triggerGoalDetection } from '../jobs/scheduler'

const router = Router()

// GET /api/system/health - System health check
router.get('/health', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // Get Gmail scan status
    const gmailStatus = await prisma.scanStatus.findUnique({
      where: { sourceType: 'GMAIL' }
    })

    // Get Gmail auth status
    const gmailAuth = await prisma.gmailAuth.findFirst({
      orderBy: { createdAt: 'desc' }
    })

    const errors: string[] = []

    // Check for Gmail connection issues
    if (gmailStatus && gmailStatus.consecutiveFailures >= 3) {
      errors.push(`Gmail scanning failed ${gmailStatus.consecutiveFailures} times: ${gmailStatus.lastError}`)
    }

    // Only flag auth as broken if there's no refresh token (truly disconnected)
    // Expired access tokens are normal — the scanner refreshes them automatically

    res.json({
      status: errors.length > 0 ? 'error' : 'ok',
      lastGmailScan: gmailStatus?.lastScanAt?.toISOString() || null,
      gmailConnected: !!gmailAuth,
      errors
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/system/stats - Dashboard statistics
router.get('/stats', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const [totalActions, completedToday, pendingCount] = await Promise.all([
      prisma.action.count({
        where: { archivedAt: null }
      }),
      prisma.action.count({
        where: {
          completedAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      }),
      prisma.action.count({
        where: {
          container: 'CANDIDATES',
          archivedAt: null
        }
      })
    ])

    res.json({
      totalActions,
      completedToday,
      pendingReview: pendingCount
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/settings - Get user settings
router.get('/settings', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const settings = await prisma.systemSetting.findMany()

    const result: Record<string, string> = {}
    for (const s of settings) {
      result[s.key] = s.value
    }

    // Return defaults if not set
    res.json({
      scanFrequency: result.scanFrequency || '2x_daily',
      notificationsEnabled: result.notificationsEnabled || 'true',
      urgentThreshold: result.urgentThreshold || '48',
      ...result
    })
  } catch (err) {
    next(err)
  }
})

// PUT /api/settings - Update settings
router.put('/settings', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updates = req.body

    for (const [key, value] of Object.entries(updates)) {
      await prisma.systemSetting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) }
      })
    }

    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/system/run-followups - Manually run the follow-up nudge check
router.post('/run-followups', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await triggerFollowUpCheck()
    res.json(result)
  } catch (err) {
    next(err)
  }
})

// POST /api/system/run-triggers - Manually run date trigger + web condition checks
router.post('/run-triggers', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await triggerTriggerCheck()
    res.json(result)
  } catch (err) {
    next(err)
  }
})

// POST /api/system/run-goal-detection - Manually run AI goal relationship detection
router.post('/run-goal-detection', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await triggerGoalDetection()
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
