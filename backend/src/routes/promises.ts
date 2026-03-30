import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'
import { composeMorningBrief } from '../services/morning-brief'

const router = Router()

// GET /api/promises/today — curated daily view
router.get('/today', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const now = new Date()
    const endOfToday = new Date(now)
    endOfToday.setHours(23, 59, 59, 999)

    const tomorrow = new Date(endOfToday)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const sevenDaysOut = new Date(now)
    sevenDaysOut.setDate(sevenDaysOut.getDate() + 7)

    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

    // Follow-up staleness intervals (same as scheduler)
    const intervals: Record<string, number> = {
      CRITICAL: 2 * 24 * 60 * 60 * 1000,
      HIGH: 7 * 24 * 60 * 60 * 1000,
      MEDIUM: 30 * 24 * 60 * 60 * 1000,
      LOW: 60 * 24 * 60 * 60 * 1000
    }

    const [dueToday, triggerEvents, allActionable, comingUp] = await Promise.all([
      // Due today or overdue
      prisma.action.findMany({
        where: {
          dueDate: { lte: endOfToday },
          archivedAt: null,
          completedAt: null
        },
        include: { parties: true, source: true },
        orderBy: [{ dueDate: 'asc' }, { urgency: 'asc' }]
      }),

      // Triggers that fired in the last 24h
      prisma.actionEvent.findMany({
        where: {
          type: 'TRIGGER_FIRED',
          createdAt: { gte: twentyFourHoursAgo }
        },
        include: {
          action: {
            include: { parties: true, source: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),

      // All actionable (for at-risk computation)
      prisma.action.findMany({
        where: {
          container: 'ACTIONABLE_NOW',
          archivedAt: null,
          completedAt: null
        },
        include: { parties: true, source: true }
      }),

      // Coming up in next 7 days (excluding today)
      prisma.action.findMany({
        where: {
          dueDate: { gt: endOfToday, lte: sevenDaysOut },
          archivedAt: null,
          completedAt: null
        },
        include: { parties: true, source: true },
        orderBy: { dueDate: 'asc' }
      })
    ])

    // Deduplicate triggered actions (in case same action triggered multiple times)
    const seenIds = new Set<number>()
    const becameReady = triggerEvents
      .filter(e => {
        if (!e.action || e.action.completedAt || e.action.archivedAt) return false
        if (seenIds.has(e.action.id)) return false
        seenIds.add(e.action.id)
        return true
      })
      .map(e => e.action)

    // Compute at-risk: actions untouched longer than their urgency interval
    const shortestInterval = intervals.CRITICAL
    const atRisk = allActionable.filter(action => {
      const interval = intervals[action.urgency] || intervals.MEDIUM
      const staleSince = new Date(now.getTime() - interval)
      return action.updatedAt < staleSince
    })

    // Remove duplicates: don't show in becameReady if already in dueToday
    const dueTodayIds = new Set(dueToday.map(a => a.id))
    const filteredBecameReady = becameReady.filter(a => !dueTodayIds.has(a.id))

    // Remove from atRisk if already in dueToday
    const filteredAtRisk = atRisk.filter(a => !dueTodayIds.has(a.id))

    res.json({
      dueToday,
      becameReady: filteredBecameReady,
      atRisk: filteredAtRisk,
      comingUp
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/promises/weekly — weekly review data
router.get('/weekly', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const now = new Date()
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const sevenDaysOut = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

    const intervals: Record<string, number> = {
      CRITICAL: 2 * 24 * 60 * 60 * 1000,
      HIGH: 7 * 24 * 60 * 60 * 1000,
      MEDIUM: 30 * 24 * 60 * 60 * 1000,
      LOW: 60 * 24 * 60 * 60 * 1000
    }

    const [keptThisWeek, allActionable, comingUp] = await Promise.all([
      prisma.action.findMany({
        where: {
          completedAt: { gte: sevenDaysAgo }
        },
        include: { parties: true, source: true },
        orderBy: { completedAt: 'desc' }
      }),

      prisma.action.findMany({
        where: {
          container: 'ACTIONABLE_NOW',
          archivedAt: null,
          completedAt: null
        },
        include: { parties: true, source: true }
      }),

      prisma.action.findMany({
        where: {
          dueDate: { lte: sevenDaysOut },
          archivedAt: null,
          completedAt: null
        },
        include: { parties: true, source: true },
        orderBy: { dueDate: 'asc' }
      })
    ])

    const atRisk = allActionable.filter(action => {
      const interval = intervals[action.urgency] || intervals.MEDIUM
      const staleSince = new Date(now.getTime() - interval)
      return action.updatedAt < staleSince
    })

    res.json({
      keptThisWeek,
      atRisk,
      comingUp,
      stats: {
        keptCount: keptThisWeek.length,
        totalActive: allActionable.length
      }
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/promises/brief — morning brief data
router.get('/brief', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const brief = await composeMorningBrief()
    res.json(brief)
  } catch (err) {
    next(err)
  }
})

export default router
