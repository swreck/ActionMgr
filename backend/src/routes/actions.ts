import { Router, Request, Response, NextFunction } from 'express'
import { Container, Urgency, Prisma } from '@prisma/client'
import { prisma } from '../index'
import { calculateNextDate, suggestLeadTimeDays } from '../services/recurrence'

const router = Router()

const VALID_BULK_CONTAINERS: Container[] = ['ACTIONABLE_NOW', 'CANDIDATES', 'AMBIGUITY', 'WAITING']

/**
 * Create the next occurrence of a recurring action after completion.
 * Returns the new action or null if not recurring.
 */
async function createNextOccurrence(completedAction: {
  id: number
  description: string
  suggestedAction: string | null
  urgency: Urgency
  rawInput: string
  recurrenceRule: string | null
  leadTimeDays: number
  dueDate: Date | null
  sourceId: number
  aiReasoning: string | null
  confidence: number
  commitmentConfidence: number | null
}) {
  if (!completedAction.recurrenceRule) return null

  try {
    // Pass the completed action's dueDate so the next occurrence is after it
    const nextDueDate = calculateNextDate(
      completedAction.recurrenceRule,
      completedAction.dueDate || undefined
    )
    const now = new Date()

    // Determine trigger date based on lead time
    const triggerDate = new Date(nextDueDate)
    triggerDate.setDate(triggerDate.getDate() - completedAction.leadTimeDays)

    // If trigger date is already past, put directly in ACTIONABLE_NOW
    const container: Container = triggerDate <= now ? 'ACTIONABLE_NOW' : 'WAITING'

    // Create source for the new occurrence
    const source = await prisma.source.create({
      data: {
        type: 'MANUAL',
        manualNote: `Recurring: ${completedAction.description}`
      }
    })

    const nextAction = await prisma.action.create({
      data: {
        description: completedAction.description,
        suggestedAction: completedAction.suggestedAction,
        rawInput: completedAction.rawInput,
        urgency: completedAction.urgency,
        dueDate: nextDueDate,
        recurrenceRule: completedAction.recurrenceRule,
        leadTimeDays: completedAction.leadTimeDays,
        container,
        confidence: completedAction.confidence,
        commitmentConfidence: completedAction.commitmentConfidence,
        aiReasoning: completedAction.aiReasoning,
        sourceId: source.id
      },
      include: { source: true, triggers: true }
    })

    // Create DATE_EXACT trigger if going to WAITING
    if (container === 'WAITING') {
      await prisma.trigger.create({
        data: {
          actionId: nextAction.id,
          type: 'DATE_EXACT',
          description: `Auto-reminder: due ${nextDueDate.toISOString().split('T')[0]}`,
          triggerDate: triggerDate > now ? triggerDate : nextDueDate
        }
      })
    }

    // Log creation event
    await prisma.actionEvent.create({
      data: {
        actionId: nextAction.id,
        type: 'CREATED',
        toContainer: container,
        details: JSON.stringify({
          source: 'RECURRENCE',
          previousActionId: completedAction.id,
          recurrenceRule: completedAction.recurrenceRule
        })
      }
    })

    return nextAction
  } catch (err) {
    console.error(`Failed to create next occurrence for action ${completedAction.id}:`, err)
    return null
  }
}
const BULK_LIMIT = 50

// POST /api/actions/bulk/complete - Bulk complete actions
router.post('/bulk/complete', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ids } = req.body

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'ids must be a non-empty array' })
    }
    if (ids.length > BULK_LIMIT) {
      return res.status(400).json({ message: `Maximum ${BULK_LIMIT} ids per request` })
    }

    const now = new Date()
    let completed = 0
    const nextActions: Array<{ id: number; description: string; dueDate: string | null }> = []

    for (const id of ids) {
      const numId = typeof id === 'string' ? parseInt(id) : id
      try {
        const action = await prisma.action.update({
          where: { id: numId },
          data: {
            completedAt: now,
            archivedAt: now,
            version: { increment: 1 }
          }
        })
        await prisma.actionEvent.create({
          data: {
            actionId: numId,
            type: 'COMPLETED'
          }
        })
        completed++

        // Auto-create next occurrence for recurring actions
        if (action.recurrenceRule) {
          const next = await createNextOccurrence(action)
          if (next) {
            nextActions.push({
              id: next.id,
              description: next.description,
              dueDate: next.dueDate?.toISOString() || null
            })
          }
        }
      } catch {
        // Skip actions that don't exist
      }
    }

    // Auto-archive groups where all actions are now complete
    const affectedGroupIds = new Set<number>()
    const completedActions = await prisma.action.findMany({
      where: { id: { in: ids.map((id: string | number) => typeof id === 'string' ? parseInt(id) : id) } },
      select: { groupId: true }
    })
    for (const a of completedActions) {
      if (a.groupId) affectedGroupIds.add(a.groupId)
    }
    for (const groupId of affectedGroupIds) {
      // Query all group actions (not just unarchived — completing sets archivedAt)
      const groupActions = await prisma.action.findMany({
        where: { groupId },
        select: { completedAt: true }
      })
      if (groupActions.length > 0 && groupActions.every(a => a.completedAt !== null)) {
        await prisma.actionGroup.update({
          where: { id: groupId },
          data: { archivedAt: new Date() }
        })
      }
    }

    res.json({ completed, nextActions })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/bulk/delete - Bulk soft-delete (archive) actions
router.post('/bulk/delete', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ids } = req.body

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'ids must be a non-empty array' })
    }
    if (ids.length > BULK_LIMIT) {
      return res.status(400).json({ message: `Maximum ${BULK_LIMIT} ids per request` })
    }

    const now = new Date()
    let deleted = 0

    for (const id of ids) {
      const numId = typeof id === 'string' ? parseInt(id) : id
      try {
        await prisma.action.update({
          where: { id: numId },
          data: {
            archivedAt: now,
            version: { increment: 1 }
          }
        })
        await prisma.actionEvent.create({
          data: {
            actionId: numId,
            type: 'ARCHIVED'
          }
        })
        deleted++
      } catch {
        // Skip actions that don't exist
      }
    }

    res.json({ deleted })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/bulk/move - Bulk move actions to a different container
router.post('/bulk/move', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ids, container } = req.body

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'ids must be a non-empty array' })
    }
    if (ids.length > BULK_LIMIT) {
      return res.status(400).json({ message: `Maximum ${BULK_LIMIT} ids per request` })
    }
    if (!container || !VALID_BULK_CONTAINERS.includes(container as Container)) {
      return res.status(400).json({
        message: `container must be one of: ${VALID_BULK_CONTAINERS.join(', ')}`
      })
    }

    let moved = 0

    for (const id of ids) {
      const numId = typeof id === 'string' ? parseInt(id) : id
      try {
        const existing = await prisma.action.findUnique({ where: { id: numId } })
        if (!existing) continue

        const updateData: Prisma.ActionUpdateInput = {
          container: container as Container,
          version: { increment: 1 }
        }
        if (existing.needsClarification) {
          updateData.needsClarification = false
        }

        await prisma.action.update({
          where: { id: numId },
          data: updateData
        })
        await prisma.actionEvent.create({
          data: {
            actionId: numId,
            type: 'CONTAINER_CHANGE',
            fromContainer: existing.container,
            toContainer: container as Container
          }
        })
        moved++
      } catch {
        // Skip actions that don't exist or fail
      }
    }

    res.json({ moved })
  } catch (err) {
    next(err)
  }
})

// GET /api/actions - List actions with optional filters
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { container, urgency, search, archived, needsClarification, needsTuning } = req.query

    const where: Prisma.ActionWhereInput = {}

    // By default, exclude archived items unless explicitly requested
    if (archived !== 'true') {
      where.archivedAt = null
    }

    // Flag-based filters — when active, show from ALL containers
    const filterByFlags = needsClarification === 'true' || needsTuning === 'true'

    if (filterByFlags) {
      if (needsClarification === 'true') {
        where.needsClarification = true
      }
      if (needsTuning === 'true') {
        where.needsTuning = true
      }
      // Don't filter by container when filtering by flags
    } else if (container && typeof container === 'string') {
      // Filter by container
      where.container = container as Container
    } else if (!container) {
      // Default view: show Actionable, Candidates, Ambiguity (not Waiting/Tuning)
      where.container = {
        in: ['ACTIONABLE_NOW', 'CANDIDATES', 'AMBIGUITY']
      }
    }

    // Filter by urgency
    if (urgency && typeof urgency === 'string') {
      where.urgency = urgency as Urgency
    }

    // Search in description
    if (search && typeof search === 'string') {
      where.description = {
        contains: search,
        mode: 'insensitive'
      }
    }

    const actions = await prisma.action.findMany({
      where,
      include: {
        source: true,
        triggers: true
      },
      orderBy: [
        { urgency: 'asc' }, // CRITICAL first
        { dueDate: 'asc' },
        { createdAt: 'desc' }
      ]
    })

    // Compute needsFollowUp: true if a FOLLOW_UP_SENT event is newer than action.updatedAt
    const actionIds = actions.map(a => a.id)
    const followUpEvents = await prisma.actionEvent.findMany({
      where: { actionId: { in: actionIds }, type: 'FOLLOW_UP_SENT' },
      orderBy: { createdAt: 'desc' }
    })
    const latestFollowUp = new Map<number, Date>()
    for (const e of followUpEvents) {
      if (!latestFollowUp.has(e.actionId)) latestFollowUp.set(e.actionId, e.createdAt)
    }
    const result = actions.map(a => ({
      ...a,
      needsFollowUp: latestFollowUp.has(a.id) && latestFollowUp.get(a.id)! > a.updatedAt
    }))

    res.json(result)
  } catch (err) {
    next(err)
  }
})

// GET /api/actions/:id - Get single action with full details
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const action = await prisma.action.findUnique({
      where: { id },
      include: {
        source: true,
        triggers: true,
        events: {
          orderBy: { createdAt: 'desc' }
        },
        parties: true,
        group: true
      }
    })

    if (!action) {
      return res.status(404).json({ message: 'Action not found' })
    }

    // Compute needsFollowUp
    const latestFollowUp = await prisma.actionEvent.findFirst({
      where: { actionId: action.id, type: 'FOLLOW_UP_SENT' },
      orderBy: { createdAt: 'desc' }
    })
    const needsFollowUp = latestFollowUp !== null && latestFollowUp.createdAt > action.updatedAt

    res.json({ ...action, needsFollowUp })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions - Create new action (manual entry)
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { description, urgency, dueDate, suggestedAction, groupId } = req.body

    if (!description || typeof description !== 'string') {
      return res.status(400).json({ message: 'Description is required' })
    }

    // Create source record for manual entry
    const source = await prisma.source.create({
      data: {
        type: 'MANUAL',
        manualNote: description
      }
    })

    // Create the action
    const action = await prisma.action.create({
      data: {
        description,
        rawInput: description,
        urgency: urgency || 'MEDIUM',
        dueDate: dueDate ? new Date(dueDate) : null,
        suggestedAction: suggestedAction || null,
        container: 'ACTIONABLE_NOW', // Manual entries go directly to Actionable
        confidence: 1.0, // User-created = full confidence
        sourceId: source.id,
        groupId: groupId ?? null
      },
      include: {
        source: true
      }
    })

    // Log creation event
    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'CREATED',
        toContainer: action.container,
        details: JSON.stringify({ source: 'MANUAL' })
      }
    })

    res.status(201).json(action)
  } catch (err) {
    next(err)
  }
})

// PUT /api/actions/:id - Update action
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { version, description, suggestedAction, urgency, dueDate, container, needsClarification, needsTuning, leadTimeDays, recurrenceRule } = req.body

    // Check version for optimistic concurrency
    const existing = await prisma.action.findUnique({ where: { id } })
    if (!existing) {
      return res.status(404).json({ message: 'Action not found' })
    }

    if (version !== undefined && existing.version !== version) {
      return res.status(409).json({
        message: 'Conflict: action was modified',
        currentVersion: existing.version,
        currentData: existing
      })
    }

    const updateData: Prisma.ActionUpdateInput = {
      version: { increment: 1 },
      updatedAt: new Date()
    }

    if (description !== undefined) updateData.description = description
    if (suggestedAction !== undefined) updateData.suggestedAction = suggestedAction
    if (urgency !== undefined) updateData.urgency = urgency
    if (dueDate !== undefined) updateData.dueDate = dueDate ? new Date(dueDate) : null
    if (container !== undefined) updateData.container = container
    if (needsClarification !== undefined) updateData.needsClarification = needsClarification
    if (needsTuning !== undefined) updateData.needsTuning = needsTuning
    if (leadTimeDays !== undefined) updateData.leadTimeDays = leadTimeDays
    if (recurrenceRule !== undefined) {
      updateData.recurrenceRule = recurrenceRule || null
      // Auto-set leadTimeDays when recurrence changes (unless user explicitly set it in same request)
      if (leadTimeDays === undefined && recurrenceRule) {
        updateData.leadTimeDays = suggestLeadTimeDays(recurrenceRule)
      }
    }

    const action = await prisma.action.update({
      where: { id },
      data: updateData,
      include: { source: true }
    })

    // Log edit event
    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'EDITED',
        details: JSON.stringify({ fields: Object.keys(req.body).filter(k => k !== 'version') })
      }
    })

    res.json(action)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/actions/:id/purge - Hard delete (permanent)
router.delete('/:id/purge', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    // Cascades to triggers, events, group memberships via schema onDelete: Cascade
    await prisma.action.delete({ where: { id } })
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// DELETE /api/actions/:id - Archive action (soft delete)
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const action = await prisma.action.update({
      where: { id },
      data: {
        archivedAt: new Date(),
        version: { increment: 1 }
      }
    })

    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'ARCHIVED'
      }
    })

    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/:id/complete - Mark action as completed
router.post('/:id/complete', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const action = await prisma.action.update({
      where: { id },
      data: {
        completedAt: new Date(),
        archivedAt: new Date(),
        version: { increment: 1 }
      }
    })

    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'COMPLETED'
      }
    })

    // Auto-create next occurrence for recurring actions
    let nextAction = null
    if (action.recurrenceRule) {
      nextAction = await createNextOccurrence(action)
    }

    // Auto-archive group if all actions are now complete
    let groupArchived = false
    if (action.groupId) {
      // Query all group actions (not just unarchived — completing sets archivedAt)
      const groupActions = await prisma.action.findMany({
        where: { groupId: action.groupId },
        select: { completedAt: true }
      })
      const allComplete = groupActions.length > 0 && groupActions.every(a => a.completedAt !== null)
      if (allComplete) {
        await prisma.actionGroup.update({
          where: { id: action.groupId },
          data: { archivedAt: new Date() }
        })
        groupArchived = true
      }
    }

    res.json({ ...action, nextAction, groupArchived })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/:id/move - Move action to different container
router.post('/:id/move', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { container } = req.body

    if (!container) {
      return res.status(400).json({ message: 'Container is required' })
    }

    const existing = await prisma.action.findUnique({ where: { id } })
    if (!existing) {
      return res.status(404).json({ message: 'Action not found' })
    }

    const updateData: Prisma.ActionUpdateInput = {
      container: container as Container,
      version: { increment: 1 }
    }

    // Clear needsClarification flag when user takes action by moving
    if (existing.needsClarification) {
      updateData.needsClarification = false
    }

    const action = await prisma.action.update({
      where: { id },
      data: updateData
    })

    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'CONTAINER_CHANGE',
        fromContainer: existing.container,
        toContainer: container as Container
      }
    })

    res.json(action)
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/:id/acknowledge - Dismiss follow-up nudge (touches updatedAt)
router.post('/:id/acknowledge', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    await prisma.action.update({
      where: { id },
      data: { version: { increment: 1 } }
    })
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

export default router
