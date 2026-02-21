import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'
import { TuningStatus } from '@prisma/client'

const router = Router()

// GET /api/tuning - List all tuning rules
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const rules = await prisma.tuningRule.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(rules)
  } catch (err) {
    next(err)
  }
})

// GET /api/tuning/pending - Get rules ready for review
router.get('/pending', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const rules = await prisma.tuningRule.findMany({
      where: {
        status: 'PROPOSED'
      },
      orderBy: { shadowSuccesses: 'desc' }
    })
    res.json(rules)
  } catch (err) {
    next(err)
  }
})

// GET /api/tuning/shadow - Get shadow mode rules
router.get('/shadow', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const rules = await prisma.tuningRule.findMany({
      where: {
        status: 'SHADOW'
      },
      orderBy: { createdAt: 'desc' }
    })
    res.json(rules)
  } catch (err) {
    next(err)
  }
})

// GET /api/tuning/stats - Get tuning statistics  [must be before /:id]
router.get('/stats', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const [shadow, proposed, active, rejected] = await Promise.all([
      prisma.tuningRule.count({ where: { status: 'SHADOW' } }),
      prisma.tuningRule.count({ where: { status: 'PROPOSED' } }),
      prisma.tuningRule.count({ where: { status: 'ACTIVE' } }),
      prisma.tuningRule.count({ where: { status: 'REJECTED' } })
    ])

    const activeRules = await prisma.tuningRule.findMany({
      where: { status: 'ACTIVE' },
      select: { shadowCount: true, shadowSuccesses: true }
    })

    const avgSuccessRate = activeRules.length > 0
      ? activeRules.reduce((acc, r) => acc + (r.shadowSuccesses / (r.shadowCount || 1)), 0) / activeRules.length
      : 0

    res.json({
      counts: { shadow, proposed, active, rejected },
      avgSuccessRate: Math.round(avgSuccessRate * 100)
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/tuning/:id - Get single rule
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const rule = await prisma.tuningRule.findUnique({
      where: { id }
    })

    if (!rule) {
      return res.status(404).json({ message: 'Tuning rule not found' })
    }

    res.json(rule)
  } catch (err) {
    next(err)
  }
})

// POST /api/tuning - Create new tuning rule
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { description, category, condition, transformation, shadowThreshold } = req.body

    if (!description || !category || !condition || !transformation) {
      return res.status(400).json({
        message: 'description, category, condition, and transformation are required'
      })
    }

    const rule = await prisma.tuningRule.create({
      data: {
        description,
        category,
        condition,
        transformation,
        shadowThreshold: shadowThreshold || 5
      }
    })

    res.status(201).json(rule)
  } catch (err) {
    next(err)
  }
})

// PUT /api/tuning/:id - Update rule
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { description, category, condition, transformation, shadowThreshold } = req.body

    const rule = await prisma.tuningRule.update({
      where: { id },
      data: {
        description,
        category,
        condition,
        transformation,
        shadowThreshold
      }
    })

    res.json(rule)
  } catch (err) {
    next(err)
  }
})

// POST /api/tuning/:id/record - Record shadow result
router.post('/:id/record', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { success } = req.body

    const rule = await prisma.tuningRule.findUnique({
      where: { id }
    })

    if (!rule) {
      return res.status(404).json({ message: 'Tuning rule not found' })
    }

    if (rule.status !== 'SHADOW') {
      return res.status(400).json({ message: 'Rule is not in shadow mode' })
    }

    const newShadowCount = rule.shadowCount + 1
    const newShadowSuccesses = success ? rule.shadowSuccesses + 1 : rule.shadowSuccesses

    // Check if rule has reached threshold
    let newStatus: TuningStatus = 'SHADOW'
    if (newShadowCount >= rule.shadowThreshold) {
      // Propose if success rate is above 80%
      const successRate = newShadowSuccesses / newShadowCount
      if (successRate >= 0.8) {
        newStatus = 'PROPOSED'
      }
    }

    const updated = await prisma.tuningRule.update({
      where: { id },
      data: {
        shadowCount: newShadowCount,
        shadowSuccesses: newShadowSuccesses,
        status: newStatus
      }
    })

    res.json({
      rule: updated,
      promoted: newStatus === 'PROPOSED',
      successRate: newShadowSuccesses / newShadowCount
    })
  } catch (err) {
    next(err)
  }
})

// POST /api/tuning/:id/activate - Activate a proposed rule
router.post('/:id/activate', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const rule = await prisma.tuningRule.findUnique({
      where: { id }
    })

    if (!rule) {
      return res.status(404).json({ message: 'Tuning rule not found' })
    }

    if (rule.status !== 'PROPOSED' && rule.status !== 'SHADOW') {
      return res.status(400).json({ message: 'Rule must be in PROPOSED or SHADOW status to activate' })
    }

    const updated = await prisma.tuningRule.update({
      where: { id },
      data: {
        status: 'ACTIVE',
        activatedAt: new Date()
      }
    })

    res.json(updated)
  } catch (err) {
    next(err)
  }
})

// POST /api/tuning/:id/reject - Reject a rule
router.post('/:id/reject', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { feedback, dontAskAgain } = req.body

    const rule = await prisma.tuningRule.findUnique({ where: { id } })
    if (!rule) {
      return res.status(404).json({ message: 'Tuning rule not found' })
    }

    const updated = await prisma.tuningRule.update({
      where: { id },
      data: {
        status: 'REJECTED',
        rejectedAt: new Date(),
        userFeedback: feedback || null
      }
    })

    // Check for repeated rejections in same category (>= 3 triggers a meta-rule)
    const rejectedInCategory = await prisma.tuningRule.count({
      where: { category: rule.category, status: 'REJECTED' }
    })

    if (dontAskAgain || rejectedInCategory >= 3) {
      // Check if a meta-rule for this category already exists
      const existingMeta = await prisma.tuningRule.findFirst({
        where: {
          category: 'meta',
          condition: { contains: rule.category }
        }
      })

      if (!existingMeta) {
        await prisma.tuningRule.create({
          data: {
            description: `Stop suggesting ${rule.category} changes`,
            category: 'meta',
            condition: `User has rejected ${rejectedInCategory}+ ${rule.category} tuning rules`,
            transformation: `Skip auto-generating ${rule.category} tuning suggestions`,
            status: dontAskAgain ? 'ACTIVE' : 'PROPOSED',
            activatedAt: dontAskAgain ? new Date() : null,
            shadowThreshold: 1,
            shadowCount: 1,
            shadowSuccesses: 1
          }
        })
      }
    }

    res.json(updated)
  } catch (err) {
    next(err)
  }
})

// POST /api/tuning/:id/ask-less - Raise shadow threshold (ask less often)
router.post('/:id/ask-less', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const rule = await prisma.tuningRule.findUnique({ where: { id } })
    if (!rule) return res.status(404).json({ message: 'Rule not found' })

    const updated = await prisma.tuningRule.update({
      where: { id },
      data: { shadowThreshold: rule.shadowThreshold * 2 } // double the threshold
    })

    res.json(updated)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/tuning/:id - Delete rule
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    await prisma.tuningRule.delete({ where: { id } })
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/tuning/feedback - Submit feedback on an AI parse
router.post('/feedback', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { actionId, feedbackType, correction } = req.body

    if (!actionId || !feedbackType) {
      return res.status(400).json({ message: 'actionId and feedbackType are required' })
    }

    const action = await prisma.action.findUnique({
      where: { id: actionId }
    })

    if (!action) {
      return res.status(404).json({ message: 'Action not found' })
    }

    // Create a tuning rule based on the feedback
    let category = 'general'
    let condition = ''
    let transformation = ''

    if (feedbackType === 'urgency_incorrect') {
      category = 'urgency'
      condition = `Input contains similar patterns to: "${action.rawInput.substring(0, 100)}"`
      transformation = `Correct urgency: ${correction || 'needs review'}`
    } else if (feedbackType === 'container_incorrect') {
      category = 'container'
      condition = `Input type similar to: "${action.rawInput.substring(0, 100)}"`
      transformation = `Should route to: ${correction || 'needs review'}`
    } else if (feedbackType === 'parsed_wrong') {
      category = 'extraction'
      condition = `Raw input: "${action.rawInput.substring(0, 200)}"`
      transformation = correction || 'Manual correction needed'
    }

    const rule = await prisma.tuningRule.create({
      data: {
        description: `Feedback on action #${actionId}`,
        category,
        condition,
        transformation,
        userFeedback: correction
      }
    })

    // Move the action to Tuning container if not already there
    if (action.container !== 'TUNING') {
      await prisma.action.update({
        where: { id: actionId },
        data: { container: 'TUNING' }
      })

      await prisma.actionEvent.create({
        data: {
          actionId,
          type: 'CONTAINER_CHANGE',
          fromContainer: action.container,
          toContainer: 'TUNING',
          details: 'Moved to tuning for AI feedback'
        }
      })
    }

    res.json({ success: true, rule })
  } catch (err) {
    next(err)
  }
})

export default router
