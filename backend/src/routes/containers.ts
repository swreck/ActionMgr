import { Router, Request, Response, NextFunction } from 'express'
import { Container } from '@prisma/client'
import { prisma } from '../index'

const router = Router()

// GET /api/containers/counts - Get item counts for all containers
router.get('/counts', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const counts = await prisma.action.groupBy({
      by: ['container'],
      where: {
        archivedAt: null
      },
      _count: {
        id: true
      }
    })

    const result: Record<string, number> = {
      ACTIONABLE_NOW: 0,
      CANDIDATES: 0,
      AMBIGUITY: 0,
      WAITING: 0,
      TUNING: 0  // kept for backward compat, always 0
    }

    for (const row of counts) {
      // TUNING container is deprecated — don't count it
      if (row.container === 'TUNING') continue
      result[row.container] = row._count.id
    }

    res.json(result)
  } catch (err) {
    next(err)
  }
})

// GET /api/containers/flag-counts - Get counts of flagged actions
router.get('/flag-counts', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const [needsClarification, needsTuning] = await Promise.all([
      prisma.action.count({
        where: {
          archivedAt: null,
          needsClarification: true
        }
      }),
      prisma.action.count({
        where: {
          archivedAt: null,
          needsTuning: true
        }
      })
    ])

    res.json({ needsClarification, needsTuning })
  } catch (err) {
    next(err)
  }
})

// GET /api/containers/:container - Get actions in specific container
router.get('/:container', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const container = req.params.container as Container

    const validContainers: Container[] = [
      'ACTIONABLE_NOW',
      'CANDIDATES',
      'AMBIGUITY',
      'WAITING',
      'TUNING'
    ]

    if (!validContainers.includes(container)) {
      return res.status(400).json({ message: 'Invalid container' })
    }

    const actions = await prisma.action.findMany({
      where: {
        container,
        archivedAt: null
      },
      include: {
        source: true,
        triggers: true
      },
      orderBy: [
        { urgency: 'asc' },
        { dueDate: 'asc' },
        { createdAt: 'desc' }
      ]
    })

    res.json(actions)
  } catch (err) {
    next(err)
  }
})

export default router
