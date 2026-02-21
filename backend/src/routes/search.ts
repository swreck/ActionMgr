import { Router, Request, Response, NextFunction } from 'express'
import { Container, Urgency, Prisma } from '@prisma/client'
import { prisma } from '../index'

const router = Router()

interface SearchResult {
  actions: Array<{
    id: number
    description: string
    suggestedAction: string | null
    container: Container
    urgency: Urgency
    confidence: number
    dueDate: Date | null
    createdAt: Date
    completedAt: Date | null
    archivedAt: Date | null
    isArchived: boolean
  }>
  total: number
  hasMore: boolean
}

// GET /api/search - Search actions
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      q,
      container,
      urgency,
      includeArchived,
      archiveOnly,
      limit = '20',
      offset = '0'
    } = req.query

    const take = Math.min(parseInt(limit as string) || 20, 100)
    const skip = parseInt(offset as string) || 0

    // Build where clause
    const where: Prisma.ActionWhereInput = {}

    // Text search
    if (q && typeof q === 'string' && q.trim()) {
      const searchTerm = q.trim()
      where.OR = [
        { description: { contains: searchTerm, mode: 'insensitive' } },
        { suggestedAction: { contains: searchTerm, mode: 'insensitive' } },
        { rawInput: { contains: searchTerm, mode: 'insensitive' } }
      ]
    }

    // Container filter
    if (container && typeof container === 'string') {
      where.container = container as Container
    }

    // Urgency filter
    if (urgency && typeof urgency === 'string') {
      where.urgency = urgency as Urgency
    }

    // Archive handling
    if (archiveOnly === 'true') {
      where.archivedAt = { not: null }
    } else if (includeArchived !== 'true') {
      where.archivedAt = null
    }

    // Get total count
    const total = await prisma.action.count({ where })

    // Get actions
    const actions = await prisma.action.findMany({
      where,
      select: {
        id: true,
        description: true,
        suggestedAction: true,
        container: true,
        urgency: true,
        confidence: true,
        dueDate: true,
        createdAt: true,
        completedAt: true,
        archivedAt: true
      },
      orderBy: [
        { archivedAt: 'asc' }, // Active items first
        { urgency: 'asc' },
        { createdAt: 'desc' }
      ],
      take,
      skip
    })

    const result: SearchResult = {
      actions: actions.map(a => ({
        ...a,
        isArchived: a.archivedAt !== null
      })),
      total,
      hasMore: skip + take < total
    }

    res.json(result)
  } catch (err) {
    next(err)
  }
})

// GET /api/search/suggestions - Get search suggestions based on recent/frequent terms
router.get('/suggestions', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q } = req.query

    if (!q || typeof q !== 'string' || q.length < 2) {
      return res.json({ suggestions: [] })
    }

    // Get actions that match the partial query
    const actions = await prisma.action.findMany({
      where: {
        description: { contains: q, mode: 'insensitive' }
      },
      select: {
        description: true
      },
      take: 5,
      distinct: ['description']
    })

    // Extract unique keywords/phrases
    const suggestions = actions.map(a => {
      // Return first 50 chars of description
      return a.description.substring(0, 50) + (a.description.length > 50 ? '...' : '')
    })

    res.json({ suggestions })
  } catch (err) {
    next(err)
  }
})

// GET /api/search/recent - Get recently viewed/modified actions
router.get('/recent', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const actions = await prisma.action.findMany({
      where: {
        archivedAt: null
      },
      select: {
        id: true,
        description: true,
        container: true,
        urgency: true,
        updatedAt: true
      },
      orderBy: { updatedAt: 'desc' },
      take: 10
    })

    res.json({ actions })
  } catch (err) {
    next(err)
  }
})

export default router
