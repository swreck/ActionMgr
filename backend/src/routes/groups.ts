import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'

const router = Router()

// GET /api/groups - List all action groups
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const groups = await prisma.actionGroup.findMany({
      include: {
        actions: {
          where: { archivedAt: null },
          select: {
            id: true,
            description: true,
            container: true,
            urgency: true,
            completedAt: true
          }
        }
      },
      orderBy: { updatedAt: 'desc' }
    })

    // Calculate group stats
    const result = groups.map(group => {
      const activeActions = group.actions.filter(a => !a.completedAt)
      const highestUrgency = activeActions.reduce((highest, action) => {
        const urgencyOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 }
        return urgencyOrder[action.urgency] < urgencyOrder[highest]
          ? action.urgency
          : highest
      }, 'LOW' as 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW')

      return {
        id: group.id,
        name: group.name,
        description: group.description,
        actionCount: group.actions.length,
        activeCount: activeActions.length,
        highestUrgency,
        actions: group.actions
      }
    })

    res.json(result)
  } catch (err) {
    next(err)
  }
})

// GET /api/groups/:id - Get single group with actions
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    const group = await prisma.actionGroup.findUnique({
      where: { id },
      include: {
        actions: {
          include: {
            source: true,
            triggers: true
          },
          orderBy: [
            { urgency: 'asc' },
            { createdAt: 'desc' }
          ]
        }
      }
    })

    if (!group) {
      return res.status(404).json({ message: 'Group not found' })
    }

    res.json(group)
  } catch (err) {
    next(err)
  }
})

// POST /api/groups - Create new group
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, actionIds } = req.body

    if (!name) {
      return res.status(400).json({ message: 'Name is required' })
    }

    const group = await prisma.actionGroup.create({
      data: {
        name,
        description
      }
    })

    // Add actions to group if provided
    if (actionIds && Array.isArray(actionIds) && actionIds.length > 0) {
      await prisma.action.updateMany({
        where: { id: { in: actionIds } },
        data: { groupId: group.id }
      })
    }

    const fullGroup = await prisma.actionGroup.findUnique({
      where: { id: group.id },
      include: { actions: true }
    })

    res.status(201).json(fullGroup)
  } catch (err) {
    next(err)
  }
})

// PUT /api/groups/:id - Update group
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { name, description } = req.body

    const group = await prisma.actionGroup.update({
      where: { id },
      data: { name, description },
      include: { actions: true }
    })

    res.json(group)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/groups/:id - Delete group (ungroups actions)
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)

    // Ungroup all actions first
    await prisma.action.updateMany({
      where: { groupId: id },
      data: { groupId: null }
    })

    await prisma.actionGroup.delete({ where: { id } })

    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/groups/:id/actions - Add actions to group
router.post('/:id/actions', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { actionIds } = req.body

    if (!actionIds || !Array.isArray(actionIds)) {
      return res.status(400).json({ message: 'actionIds array is required' })
    }

    await prisma.action.updateMany({
      where: { id: { in: actionIds } },
      data: { groupId: id }
    })

    const group = await prisma.actionGroup.findUnique({
      where: { id },
      include: { actions: true }
    })

    res.json(group)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/groups/:id/actions/:actionId - Remove action from group
router.delete('/:id/actions/:actionId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const groupId = parseInt(req.params.id as string)
    const actionId = parseInt(req.params.actionId as string)

    await prisma.action.update({
      where: { id: actionId },
      data: { groupId: null }
    })

    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/groups/suggest - Suggest groupings based on similarity
router.post('/suggest', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // Get ungrouped actions
    const actions = await prisma.action.findMany({
      where: {
        groupId: null,
        archivedAt: null
      },
      select: {
        id: true,
        description: true,
        rawInput: true
      }
    })

    // Simple keyword-based grouping suggestions
    const suggestions: Array<{
      reason: string
      actionIds: number[]
      suggestedName: string
    }> = []

    // Group by common keywords
    const keywordGroups: Record<string, number[]> = {}

    for (const action of actions) {
      const words = action.description.toLowerCase().split(/\s+/)
      for (const word of words) {
        // Skip common words
        if (word.length < 4 || ['with', 'the', 'and', 'for', 'from', 'this', 'that', 'about'].includes(word)) {
          continue
        }

        if (!keywordGroups[word]) {
          keywordGroups[word] = []
        }
        if (!keywordGroups[word].includes(action.id)) {
          keywordGroups[word].push(action.id)
        }
      }
    }

    // Find keywords that appear in multiple actions
    for (const [keyword, ids] of Object.entries(keywordGroups)) {
      if (ids.length >= 2 && ids.length <= 5) {
        // Check if this group isn't a subset of an existing suggestion
        const isSubset = suggestions.some(s =>
          ids.every(id => s.actionIds.includes(id))
        )

        if (!isSubset) {
          suggestions.push({
            reason: `Related to "${keyword}"`,
            actionIds: ids,
            suggestedName: keyword.charAt(0).toUpperCase() + keyword.slice(1)
          })
        }
      }
    }

    // Limit to top 5 suggestions
    res.json({ suggestions: suggestions.slice(0, 5) })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/:id/merge - Merge two actions
router.post('/merge', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { primaryId, secondaryId } = req.body

    if (!primaryId || !secondaryId) {
      return res.status(400).json({ message: 'primaryId and secondaryId are required' })
    }

    const [primary, secondary] = await Promise.all([
      prisma.action.findUnique({ where: { id: primaryId } }),
      prisma.action.findUnique({ where: { id: secondaryId } })
    ])

    if (!primary || !secondary) {
      return res.status(404).json({ message: 'One or both actions not found' })
    }

    // Merge description
    const mergedDescription = `${primary.description}\n\n(Merged: ${secondary.description})`

    // Update primary with merged content
    const merged = await prisma.action.update({
      where: { id: primaryId },
      data: {
        description: mergedDescription,
        rawInput: `${primary.rawInput}\n---\n${secondary.rawInput}`,
        version: { increment: 1 }
      }
    })

    // Archive secondary
    await prisma.action.update({
      where: { id: secondaryId },
      data: {
        archivedAt: new Date(),
        version: { increment: 1 }
      }
    })

    // Log merge events
    await prisma.actionEvent.create({
      data: {
        actionId: primaryId,
        type: 'MERGED',
        details: JSON.stringify({ mergedFrom: secondaryId })
      }
    })

    await prisma.actionEvent.create({
      data: {
        actionId: secondaryId,
        type: 'ARCHIVED',
        details: JSON.stringify({ mergedInto: primaryId })
      }
    })

    res.json(merged)
  } catch (err) {
    next(err)
  }
})

export default router
