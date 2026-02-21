import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'
import {
  parseActionText,
  generateClarifyingQuestions,
  reparseWithContext,
  ParsedAction
} from '../services/ai/parser'
import { parseWithTuning } from '../services/ai/tuning-parser'

const router = Router()

// POST /api/parse/preview - Parse text without saving
router.post('/preview', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text } = req.body

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ message: 'Text is required' })
    }

    const parsed = await parseWithTuning(text)

    // If ambiguous, generate clarifying questions
    let questions: string[] = []
    if (parsed.container === 'AMBIGUITY' && parsed.missingInfo.length > 0) {
      questions = await generateClarifyingQuestions(
        parsed.description,
        parsed.missingInfo,
        parsed.reasoning
      )
    }

    res.json({
      ...parsed,
      questions,
      rawInput: text
    })
  } catch (err) {
    next(err)
  }
})

// POST /api/parse/confirm - Confirm parsed action and save
router.post('/confirm', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      rawInput,
      description,
      suggestedAction,
      urgency,
      dueDate,
      confidence,
      reasoning,
      container,
      parties,
      triggers,
      recurrenceRule
    } = req.body as ParsedAction & { rawInput: string }

    if (!rawInput || !description) {
      return res.status(400).json({ message: 'rawInput and description are required' })
    }

    // Create source record
    const source = await prisma.source.create({
      data: {
        type: 'MANUAL',
        manualNote: rawInput
      }
    })

    // Create action with parsed data
    const action = await prisma.action.create({
      data: {
        description,
        suggestedAction,
        rawInput,
        urgency: urgency || 'MEDIUM',
        dueDate: dueDate ? new Date(dueDate) : null,
        confidence: confidence || 0.5,
        aiReasoning: reasoning,
        container: container || 'CANDIDATES',
        recurrenceRule: recurrenceRule || null,
        sourceId: source.id
      },
      include: {
        source: true
      }
    })

    // Create parties if provided
    if (parties && parties.length > 0) {
      for (const party of parties) {
        const existingParty = party.email
          ? await prisma.party.findUnique({ where: { email: party.email } })
          : null

        if (existingParty) {
          await prisma.action.update({
            where: { id: action.id },
            data: {
              parties: { connect: { id: existingParty.id } }
            }
          })
        } else {
          await prisma.party.create({
            data: {
              name: party.name,
              email: party.email,
              actions: { connect: { id: action.id } }
            }
          })
        }
      }
    }

    // Create triggers if provided and going to WAITING
    if (triggers && triggers.length > 0 && container === 'WAITING') {
      for (const trigger of triggers) {
        await prisma.trigger.create({
          data: {
            actionId: action.id,
            type: trigger.type as 'DATE_EXACT' | 'DATE_WINDOW' | 'EMAIL_REPLY' | 'MANUAL_CHECK' | 'WEB_CONDITION',
            description: trigger.description,
            webQuery: trigger.webQuery || null
          }
        })
      }
    }

    // Log creation event
    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'CREATED',
        toContainer: action.container,
        details: JSON.stringify({
          source: 'MANUAL',
          aiParsed: true,
          confidence: action.confidence
        })
      }
    })

    // Fetch full action with relations
    const fullAction = await prisma.action.findUnique({
      where: { id: action.id },
      include: {
        source: true,
        parties: true,
        triggers: true
      }
    })

    res.status(201).json(fullAction)
  } catch (err) {
    next(err)
  }
})

// POST /api/parse/clarify - Re-parse with answers to clarifying questions
router.post('/clarify', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rawInput, answers } = req.body

    if (!rawInput || !answers) {
      return res.status(400).json({ message: 'rawInput and answers are required' })
    }

    const parsed = await reparseWithContext(rawInput, answers)

    // Generate new questions if still ambiguous
    let questions: string[] = []
    if (parsed.container === 'AMBIGUITY' && parsed.missingInfo.length > 0) {
      questions = await generateClarifyingQuestions(
        parsed.description,
        parsed.missingInfo,
        parsed.reasoning
      )
    }

    res.json({
      ...parsed,
      questions,
      rawInput
    })
  } catch (err) {
    next(err)
  }
})

// POST /api/actions/:id/reparse - Re-parse an existing action
router.post('/:id/reparse', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id as string)
    const { text } = req.body // optional: new text to use as rawInput

    const existing = await prisma.action.findUnique({ where: { id } })
    if (!existing) {
      return res.status(404).json({ message: 'Action not found' })
    }

    const inputText = text || existing.rawInput

    // Update rawInput if new text provided
    if (text && text !== existing.rawInput) {
      await prisma.action.update({
        where: { id },
        data: { rawInput: text }
      })
    }

    // Re-parse the input (applies active tuning rules)
    const parsed = await parseWithTuning(inputText)

    // Update action with new parsed data
    const action = await prisma.action.update({
      where: { id },
      data: {
        description: parsed.description,
        suggestedAction: parsed.suggestedAction,
        urgency: parsed.urgency,
        dueDate: parsed.dueDate ? new Date(parsed.dueDate) : null,
        confidence: parsed.confidence,
        aiReasoning: parsed.reasoning,
        container: parsed.container,
        recurrenceRule: parsed.recurrenceRule || null,
        parseVersion: { increment: 1 },
        version: { increment: 1 }
      },
      include: {
        source: true
      }
    })

    // Log reparse event
    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'AI_REPARSED',
        fromContainer: existing.container,
        toContainer: action.container,
        details: JSON.stringify({
          previousConfidence: existing.confidence,
          newConfidence: action.confidence
        })
      }
    })

    res.json(action)
  } catch (err) {
    next(err)
  }
})

// POST /api/parse/siri - Accept dictated text from iOS Shortcuts (no auth needed for local-only)
router.post('/siri', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text } = req.body

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ message: 'text is required' })
    }

    // Parse through the full tuning-aware pipeline
    const parsed = await parseWithTuning(text.trim())

    // Create SIRI source record
    const source = await prisma.source.create({
      data: {
        type: 'SIRI',
        siriText: text.trim(),
        siriDate: new Date()
      }
    })

    // Save the action
    const action = await prisma.action.create({
      data: {
        description: parsed.description,
        suggestedAction: parsed.suggestedAction,
        rawInput: text.trim(),
        urgency: parsed.urgency,
        dueDate: parsed.dueDate ? new Date(parsed.dueDate) : null,
        confidence: parsed.confidence,
        aiReasoning: parsed.reasoning,
        container: parsed.container,
        recurrenceRule: parsed.recurrenceRule || null,
        sourceId: source.id
      }
    })

    // Create triggers if going to WAITING
    if (parsed.triggers && parsed.triggers.length > 0 && parsed.container === 'WAITING') {
      for (const trigger of parsed.triggers) {
        await prisma.trigger.create({
          data: {
            actionId: action.id,
            type: trigger.type as 'DATE_EXACT' | 'DATE_WINDOW' | 'EMAIL_REPLY' | 'MANUAL_CHECK' | 'WEB_CONDITION',
            description: trigger.description,
            webQuery: trigger.webQuery || null
          }
        })
      }
    }

    // Log creation event
    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'CREATED',
        toContainer: action.container,
        details: JSON.stringify({ source: 'SIRI', confidence: action.confidence })
      }
    })

    // Return a minimal response suitable for Shortcuts notifications
    res.status(201).json({
      id: action.id,
      description: action.description,
      container: action.container,
      urgency: action.urgency
    })
  } catch (err) {
    next(err)
  }
})

export default router
