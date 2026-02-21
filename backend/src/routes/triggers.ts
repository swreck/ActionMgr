import { Router, Request, Response, NextFunction } from 'express'
import { TriggerType } from '@prisma/client'
import { prisma } from '../index'

const router = Router()

// GET /api/triggers - List triggers with optional filters
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { actionId, pending, type } = req.query

    const where: {
      actionId?: number
      isTriggered?: boolean
      type?: TriggerType
    } = {}

    if (actionId) {
      where.actionId = parseInt(actionId as string)
    }

    if (pending === 'true') {
      where.isTriggered = false
    }

    if (type) {
      where.type = type as TriggerType
    }

    const triggers = await prisma.trigger.findMany({
      where,
      include: {
        action: {
          select: {
            id: true,
            description: true,
            container: true,
            urgency: true
          }
        }
      },
      orderBy: [
        { isTriggered: 'asc' },
        { triggerDate: 'asc' },
        { createdAt: 'desc' }
      ]
    })

    res.json(triggers)
  } catch (err) {
    next(err)
  }
})

// GET /api/triggers/:id - Get single trigger
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const trigger = await prisma.trigger.findUnique({
      where: { id },
      include: {
        action: true
      }
    })

    if (!trigger) {
      return res.status(404).json({ message: 'Trigger not found' })
    }

    res.json(trigger)
  } catch (err) {
    next(err)
  }
})

// POST /api/triggers - Create new trigger
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      actionId,
      type,
      description,
      triggerDate,
      dateWindowStart,
      dateWindowEnd,
      eventDescription,
      emailPattern
    } = req.body

    if (!actionId || !type) {
      return res.status(400).json({ message: 'actionId and type are required' })
    }

    // Validate action exists
    const action = await prisma.action.findUnique({ where: { id: actionId } })
    if (!action) {
      return res.status(404).json({ message: 'Action not found' })
    }

    // Create trigger
    const trigger = await prisma.trigger.create({
      data: {
        actionId,
        type: type as TriggerType,
        description,
        triggerDate: triggerDate ? new Date(triggerDate) : null,
        dateWindowStart: dateWindowStart ? new Date(dateWindowStart) : null,
        dateWindowEnd: dateWindowEnd ? new Date(dateWindowEnd) : null,
        eventDescription,
        emailPattern
      },
      include: {
        action: true
      }
    })

    // Move action to WAITING if not already
    if (action.container !== 'WAITING') {
      await prisma.action.update({
        where: { id: actionId },
        data: {
          container: 'WAITING',
          version: { increment: 1 }
        }
      })

      await prisma.actionEvent.create({
        data: {
          actionId,
          type: 'CONTAINER_CHANGE',
          fromContainer: action.container,
          toContainer: 'WAITING',
          details: JSON.stringify({
            reason: 'Trigger added',
            triggerId: trigger.id
          })
        }
      })
    }

    res.status(201).json(trigger)
  } catch (err) {
    next(err)
  }
})

// PUT /api/triggers/:id - Update trigger
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const {
      type,
      description,
      triggerDate,
      dateWindowStart,
      dateWindowEnd,
      eventDescription,
      emailPattern
    } = req.body

    const existing = await prisma.trigger.findUnique({ where: { id } })
    if (!existing) {
      return res.status(404).json({ message: 'Trigger not found' })
    }

    const trigger = await prisma.trigger.update({
      where: { id },
      data: {
        type: type as TriggerType | undefined,
        description,
        triggerDate: triggerDate ? new Date(triggerDate) : undefined,
        dateWindowStart: dateWindowStart ? new Date(dateWindowStart) : undefined,
        dateWindowEnd: dateWindowEnd ? new Date(dateWindowEnd) : undefined,
        eventDescription,
        emailPattern
      },
      include: {
        action: true
      }
    })

    res.json(trigger)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/triggers/:id - Delete trigger
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const trigger = await prisma.trigger.findUnique({
      where: { id },
      include: { action: true }
    })

    if (!trigger) {
      return res.status(404).json({ message: 'Trigger not found' })
    }

    await prisma.trigger.delete({ where: { id } })

    // Check if action has any remaining triggers
    const remainingTriggers = await prisma.trigger.count({
      where: { actionId: trigger.actionId }
    })

    // If no triggers left and action is in WAITING, move to CANDIDATES
    if (remainingTriggers === 0 && trigger.action.container === 'WAITING') {
      await prisma.action.update({
        where: { id: trigger.actionId },
        data: {
          container: 'CANDIDATES',
          version: { increment: 1 }
        }
      })

      await prisma.actionEvent.create({
        data: {
          actionId: trigger.actionId,
          type: 'CONTAINER_CHANGE',
          fromContainer: 'WAITING',
          toContainer: 'CANDIDATES',
          details: JSON.stringify({
            reason: 'All triggers removed'
          })
        }
      })
    }

    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/triggers/:id/fire - Manually fire a trigger
router.post('/:id/fire', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const trigger = await prisma.trigger.findUnique({
      where: { id },
      include: { action: true }
    })

    if (!trigger) {
      return res.status(404).json({ message: 'Trigger not found' })
    }

    if (trigger.isTriggered) {
      return res.status(400).json({ message: 'Trigger already fired' })
    }

    // Mark trigger as fired
    await prisma.trigger.update({
      where: { id },
      data: {
        isTriggered: true,
        triggeredAt: new Date(),
        lastChecked: new Date()
      }
    })

    // Move action to ACTIONABLE_NOW
    const updatedAction = await prisma.action.update({
      where: { id: trigger.actionId },
      data: {
        container: 'ACTIONABLE_NOW',
        version: { increment: 1 }
      }
    })

    // Log the trigger event
    await prisma.actionEvent.create({
      data: {
        actionId: trigger.actionId,
        type: 'TRIGGER_FIRED',
        fromContainer: trigger.action.container,
        toContainer: 'ACTIONABLE_NOW',
        details: JSON.stringify({
          triggerId: trigger.id,
          triggerType: trigger.type,
          description: trigger.description,
          manuallyFired: true
        })
      }
    })

    res.json({
      success: true,
      action: updatedAction
    })
  } catch (err) {
    next(err)
  }
})

// POST /api/triggers/:id/check - Manually check a trigger (for MANUAL_CHECK type)
router.post('/:id/check', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { conditionMet } = req.body

    const trigger = await prisma.trigger.findUnique({
      where: { id },
      include: { action: true }
    })

    if (!trigger) {
      return res.status(404).json({ message: 'Trigger not found' })
    }

    if (trigger.isTriggered) {
      return res.status(400).json({ message: 'Trigger already fired' })
    }

    // Update check count
    await prisma.trigger.update({
      where: { id },
      data: {
        lastChecked: new Date(),
        checkCount: { increment: 1 }
      }
    })

    // If condition is met, fire the trigger
    if (conditionMet) {
      await prisma.trigger.update({
        where: { id },
        data: {
          isTriggered: true,
          triggeredAt: new Date()
        }
      })

      await prisma.action.update({
        where: { id: trigger.actionId },
        data: {
          container: 'ACTIONABLE_NOW',
          version: { increment: 1 }
        }
      })

      await prisma.actionEvent.create({
        data: {
          actionId: trigger.actionId,
          type: 'TRIGGER_FIRED',
          fromContainer: trigger.action.container,
          toContainer: 'ACTIONABLE_NOW',
          details: JSON.stringify({
            triggerId: trigger.id,
            triggerType: 'MANUAL_CHECK',
            description: trigger.description
          })
        }
      })

      return res.json({
        success: true,
        fired: true,
        message: 'Trigger condition met, action moved to Actionable Now'
      })
    }

    res.json({
      success: true,
      fired: false,
      message: 'Check recorded, condition not yet met'
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/triggers/pending/count - Get count of pending triggers
router.get('/pending/count', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const count = await prisma.trigger.count({
      where: { isTriggered: false }
    })

    res.json({ count })
  } catch (err) {
    next(err)
  }
})

export default router
