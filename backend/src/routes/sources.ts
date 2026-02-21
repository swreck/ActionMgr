import { Router, Request, Response, NextFunction } from 'express'
import { prisma } from '../index'
import { parseActionText } from '../services/ai/parser'
import {
  getAuthUrl,
  handleCallback,
  isGmailConnected,
  disconnectGmail
} from '../services/gmail/auth'
import { scanGmail } from '../services/gmail/scanner'

const router = Router()

// POST /api/sources/siri - Receive action from Siri Shortcut
router.post('/siri', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text } = req.body

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ message: 'Text is required' })
    }

    // Parse with AI
    const parsed = await parseActionText(text)

    // Create source record
    const source = await prisma.source.create({
      data: {
        type: 'SIRI',
        siriText: text,
        siriDate: new Date()
      }
    })

    // Create action with AI-parsed data
    const action = await prisma.action.create({
      data: {
        description: parsed.description,
        suggestedAction: parsed.suggestedAction,
        rawInput: text,
        container: parsed.container,
        urgency: parsed.urgency,
        confidence: parsed.confidence,
        aiReasoning: parsed.reasoning,
        dueDate: parsed.dueDate ? new Date(parsed.dueDate) : null,
        sourceId: source.id
      }
    })

    // Log creation
    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'CREATED',
        toContainer: action.container,
        details: JSON.stringify({
          source: 'SIRI',
          aiParsed: true,
          confidence: parsed.confidence
        })
      }
    })

    res.status(201).json({
      success: true,
      actionId: action.id,
      container: action.container,
      confidence: action.confidence,
      message: `Created: ${parsed.description.substring(0, 50)}${parsed.description.length > 50 ? '...' : ''}`
    })
  } catch (err) {
    next(err)
  }
})

// POST /api/sources/manual - Quick manual capture (alternative to /api/actions)
router.post('/manual', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text } = req.body

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ message: 'Text is required' })
    }

    const source = await prisma.source.create({
      data: {
        type: 'MANUAL',
        manualNote: text
      }
    })

    const action = await prisma.action.create({
      data: {
        description: text,
        rawInput: text,
        container: 'ACTIONABLE_NOW',
        urgency: 'MEDIUM',
        confidence: 1.0,
        sourceId: source.id
      }
    })

    await prisma.actionEvent.create({
      data: {
        actionId: action.id,
        type: 'CREATED',
        toContainer: 'ACTIONABLE_NOW',
        details: JSON.stringify({ source: 'MANUAL' })
      }
    })

    res.status(201).json(action)
  } catch (err) {
    next(err)
  }
})

// ============ Gmail OAuth Routes ============

// GET /api/sources/gmail/status - Check if Gmail is connected
router.get('/gmail/status', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const connected = await isGmailConnected()
    const scanStatus = await prisma.scanStatus.findUnique({
      where: { sourceType: 'GMAIL' }
    })

    res.json({
      connected,
      lastScan: scanStatus?.lastScanAt?.toISOString() || null,
      lastSuccess: scanStatus?.lastSuccessAt?.toISOString() || null,
      lastError: scanStatus?.lastError || null,
      itemsScanned: scanStatus?.itemsScanned || 0,
      actionsCreated: scanStatus?.actionsCreated || 0
    })
  } catch (err) {
    next(err)
  }
})

// GET /api/sources/gmail/auth - Start OAuth flow
router.get('/gmail/auth', (_req: Request, res: Response) => {
  const authUrl = getAuthUrl()
  res.redirect(authUrl)
})

// GET /api/sources/gmail/auth-url - Get OAuth URL without redirect
router.get('/gmail/auth-url', (_req: Request, res: Response) => {
  const authUrl = getAuthUrl()
  res.json({ url: authUrl })
})

// GET /api/sources/gmail/callback - OAuth callback
router.get('/gmail/callback', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = req.query.code as string

    if (!code) {
      return res.status(400).send('Authorization code missing')
    }

    await handleCallback(code)

    // Redirect to frontend settings page with success message
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
    res.redirect(`${frontendUrl}?gmail=connected`)
  } catch (err) {
    console.error('Gmail OAuth callback error:', err)
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
    res.redirect(`${frontendUrl}?gmail=error`)
  }
})

// POST /api/sources/gmail/disconnect - Disconnect Gmail
router.post('/gmail/disconnect', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    await disconnectGmail()
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

// POST /api/sources/gmail/scan - Trigger manual Gmail scan
router.post('/gmail/scan', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const connected = await isGmailConnected()
    if (!connected) {
      return res.status(400).json({ message: 'Gmail not connected' })
    }

    const result = await scanGmail()
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
