import { google, gmail_v1 } from 'googleapis'
import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '../../index'
import { getAuthenticatedClient } from './auth'
import { ParsedAction } from '../ai/parser'
import { parseWithTuning } from '../ai/tuning-parser'
import { findPotentialDuplicate } from '../dedup'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Exponential backoff retry utility
async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error = new Error('Unknown error')
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err as Error
      if (attempt < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, attempt)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }
  throw lastError
}

interface EmailContent {
  id: string
  threadId: string
  from: string
  subject: string
  body: string
  date: Date
  labels: string[]
  listUnsubscribe: string
  listId: string
  precedence: string
}

interface ScanResult {
  success: boolean
  emailsScanned: number
  actionsCreated: number
  errors: string[]
}

/**
 * Main function to scan Gmail for actionable emails
 */
export async function scanGmail(): Promise<ScanResult> {
  const result: ScanResult = {
    success: false,
    emailsScanned: 0,
    actionsCreated: 0,
    errors: []
  }

  try {
    const auth = await withRetry(() => getAuthenticatedClient())
    if (!auth) {
      throw new Error('Gmail not authenticated')
    }

    const gmail = google.gmail({ version: 'v1', auth })

    // Get unread messages and messages with specific labels
    const emails = await withRetry(() => fetchRecentEmails(gmail))
    result.emailsScanned = emails.length

    // Filter out already processed emails
    const newEmails = await filterProcessedEmails(emails)

    // Process each email and check against waiting triggers
    for (const email of newEmails) {
      try {
        const action = await processEmail(email)
        if (action) {
          result.actionsCreated++
        }
        // Check if this email resolves any open waiting triggers
        await checkEmailAgainstTriggers(email)
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error'
        result.errors.push(`Failed to process email ${email.id}: ${errorMsg}`)
        console.error(`Error processing email ${email.id}:`, err)
      }
    }

    // Update scan status
    await prisma.scanStatus.update({
      where: { sourceType: 'GMAIL' },
      data: {
        lastScanAt: new Date(),
        lastSuccessAt: new Date(),
        lastError: null,
        consecutiveFailures: 0,
        itemsScanned: { increment: result.emailsScanned },
        actionsCreated: { increment: result.actionsCreated }
      }
    })

    result.success = true
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error'
    result.errors.push(errorMsg)

    // Update scan status with error
    await prisma.scanStatus.update({
      where: { sourceType: 'GMAIL' },
      data: {
        lastScanAt: new Date(),
        lastError: errorMsg,
        consecutiveFailures: { increment: 1 }
      }
    }).catch(() => {})
  }

  return result
}

/**
 * Fetch recent emails that might contain actions
 */
async function fetchRecentEmails(gmail: gmail_v1.Gmail): Promise<EmailContent[]> {
  const emails: EmailContent[] = []

  // Query: all inbox emails from last 14 days (read or unread)
  // Already-processed emails are skipped via Source.emailId dedup in the caller
  const fourteenDaysAgo = new Date()
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)
  const afterDate = Math.floor(fourteenDaysAgo.getTime() / 1000)

  const queries = [
    `in:inbox after:${afterDate}`,
    `label:ActionManager after:${afterDate}`
  ]

  for (const query of queries) {
    try {
      const response = await gmail.users.messages.list({
        userId: 'me',
        q: query,
        maxResults: 100
      })

      const messages = response.data.messages || []

      for (const msg of messages) {
        if (!msg.id) continue

        // Skip if already in our list
        if (emails.some(e => e.id === msg.id)) continue

        const fullMessage = await gmail.users.messages.get({
          userId: 'me',
          id: msg.id,
          format: 'full'
        })

        const email = parseEmailContent(fullMessage.data)
        if (email) {
          emails.push(email)
        }
      }
    } catch (err) {
      console.error(`Error fetching emails with query "${query}":`, err)
    }
  }

  return emails
}

/**
 * Parse Gmail message into our EmailContent format
 */
function parseEmailContent(message: gmail_v1.Schema$Message): EmailContent | null {
  if (!message.id || !message.threadId) return null

  const headers = message.payload?.headers || []
  const getHeader = (name: string): string => {
    const header = headers.find(h => h.name?.toLowerCase() === name.toLowerCase())
    return header?.value || ''
  }

  const from = getHeader('From')
  const subject = getHeader('Subject')
  const dateStr = getHeader('Date')
  const date = dateStr ? new Date(dateStr) : new Date()

  // Extract body
  let body = ''
  if (message.payload?.body?.data) {
    body = Buffer.from(message.payload.body.data, 'base64').toString('utf-8')
  } else if (message.payload?.parts) {
    // Find text/plain or text/html part
    const textPart = message.payload.parts.find(
      p => p.mimeType === 'text/plain' || p.mimeType === 'text/html'
    )
    if (textPart?.body?.data) {
      body = Buffer.from(textPart.body.data, 'base64').toString('utf-8')
    }
  }

  // Clean HTML if present
  body = stripHtml(body)

  // Truncate very long bodies
  if (body.length > 2000) {
    body = body.substring(0, 2000) + '...'
  }

  const labels = message.labelIds || []
  const listUnsubscribe = getHeader('List-Unsubscribe')
  const listId = getHeader('List-Id')
  const precedence = getHeader('Precedence')

  return {
    id: message.id,
    threadId: message.threadId,
    from,
    subject,
    body,
    date,
    labels,
    listUnsubscribe,
    listId,
    precedence
  }
}

/**
 * Strip HTML tags from text
 */
function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Filter out emails that have already been processed
 */
async function filterProcessedEmails(emails: EmailContent[]): Promise<EmailContent[]> {
  const emailIds = emails.map(e => e.id)

  const existingSources = await prisma.source.findMany({
    where: {
      emailId: { in: emailIds }
    },
    select: { emailId: true }
  })

  const processedIds = new Set(existingSources.map(s => s.emailId))

  return emails.filter(e => !processedIds.has(e.id))
}

/**
 * Process a single email and create an action if actionable
 */
async function processEmail(email: EmailContent): Promise<ParsedAction | null> {
  // Combine subject and body for parsing
  const textToAnalyze = `From: ${email.from}\nSubject: ${email.subject}\n\n${email.body}`

  // Check if this looks like an action-worthy email
  if (isLikelyNotActionable(email)) {
    // Still record that we processed it to avoid re-processing
    await prisma.source.create({
      data: {
        type: 'GMAIL',
        emailId: email.id,
        emailFrom: email.from,
        emailSubject: email.subject,
        emailDate: email.date
      }
    })
    return null
  }

  // Parse with AI (applies active tuning rules, tracks shadow rules)
  const parsed = await parseWithTuning(textToAnalyze)

  // P12: Kill "no actionable commitment" bug — skip if AI says no real commitment
  const isNonCommitment =
    parsed.description.toLowerCase().includes('no actionable commitment') ||
    parsed.confidence < 0.3
  if (isNonCommitment) {
    console.log(`Skipping non-commitment email: ${email.subject}`)
    await prisma.source.create({
      data: {
        type: 'GMAIL',
        emailId: email.id,
        emailFrom: email.from,
        emailSubject: email.subject,
        emailDate: email.date
      }
    })
    return null
  }

  // P13: Thread deduplication — skip if an action already exists from the same thread
  const existingThreadAction = await findDuplicateAction(email, parsed.description)
  if (existingThreadAction) {
    console.log(`Skipping duplicate: similar to action #${existingThreadAction.id}`)
    // Still record the source for dedup so we don't re-process this email
    await prisma.source.create({
      data: {
        type: 'GMAIL',
        emailId: email.id,
        emailFrom: email.from,
        emailSubject: email.subject,
        emailDate: email.date
      }
    })
    return null
  }

  // Create source record
  const source = await prisma.source.create({
    data: {
      type: 'GMAIL',
      emailId: email.id,
      emailFrom: email.from,
      emailSubject: email.subject,
      emailDate: email.date
    }
  })

  // Create action
  const action = await prisma.action.create({
    data: {
      description: parsed.description,
      shortDescription: parsed.shortDescription || null,
      suggestedAction: parsed.suggestedAction,
      rawInput: textToAnalyze,
      container: parsed.container,
      urgency: parsed.urgency,
      confidence: parsed.confidence,
      commitmentConfidence: parsed.commitmentConfidence ?? null,
      aiReasoning: parsed.reasoning,
      missingInfo: parsed.missingInfo && parsed.missingInfo.length > 0 ? JSON.stringify(parsed.missingInfo) : null,
      needsClarification: parsed.missingInfo && parsed.missingInfo.length > 0 && parsed.confidence >= 0.3,
      dueDate: parsed.dueDate ? new Date(parsed.dueDate) : null,
      sourceId: source.id
    }
  })

  // Create parties if extracted
  for (const party of parsed.parties) {
    try {
      const existingParty = party.email
        ? await prisma.party.findUnique({ where: { email: party.email } })
        : null

      if (existingParty) {
        await prisma.action.update({
          where: { id: action.id },
          data: { parties: { connect: { id: existingParty.id } } }
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
    } catch (err) {
      console.error('Error creating party:', err)
    }
  }

  // Check for potential duplicates
  const duplicate = await findPotentialDuplicate(prisma, parsed.description, email.from, email.subject, action.id)
  if (duplicate) {
    const currentMissing = parsed.missingInfo && parsed.missingInfo.length > 0 ? parsed.missingInfo : []
    await prisma.action.update({
      where: { id: action.id },
      data: {
        needsClarification: true,
        missingInfo: JSON.stringify([
          ...currentMissing,
          `Possible duplicate of action #${duplicate.actionId}: "${duplicate.description.substring(0, 60)}" (${duplicate.similarity})`
        ])
      }
    })
  }

  // Log creation event
  await prisma.actionEvent.create({
    data: {
      actionId: action.id,
      type: 'CREATED',
      toContainer: action.container,
      details: JSON.stringify({
        source: 'GMAIL',
        emailId: email.id,
        subject: email.subject,
        aiParsed: true,
        confidence: parsed.confidence
      })
    }
  })

  return parsed
}

/**
 * Find an existing action that duplicates this email (same thread or very similar description from same sender).
 * Returns the matching action if found, null otherwise.
 */
async function findDuplicateAction(email: EmailContent, newDescription: string): Promise<{ id: number } | null> {
  // Normalize the subject to strip Re:/Fwd: prefixes for thread matching
  const normalizedSubject = email.subject
    .replace(/^(re|fwd?|fw):\s*/gi, '')
    .trim()
    .toLowerCase()

  // Find existing sources from the same sender with similar subjects (same thread)
  const candidateSources = await prisma.source.findMany({
    where: {
      type: 'GMAIL',
      emailFrom: { contains: email.from.split('<').pop()?.replace('>', '').trim() || email.from },
      actions: { some: { archivedAt: null } }
    },
    include: {
      actions: {
        where: { archivedAt: null },
        select: { id: true, description: true }
      }
    }
  })

  for (const source of candidateSources) {
    // Check 1: Same thread by normalized subject match
    const existingSubjectNormalized = (source.emailSubject || '')
      .replace(/^(re|fwd?|fw):\s*/gi, '')
      .trim()
      .toLowerCase()

    if (normalizedSubject && existingSubjectNormalized === normalizedSubject) {
      const action = source.actions[0]
      if (action) return { id: action.id }
    }

    // Check 2: Word overlap >60% with same sender
    for (const action of source.actions) {
      if (descriptionWordOverlap(action.description, newDescription) > 0.6) {
        return { id: action.id }
      }
    }
  }

  return null
}

/**
 * Calculate word overlap ratio between two descriptions.
 * Returns a value between 0 and 1 representing the fraction of shared words.
 */
function descriptionWordOverlap(a: string, b: string): number {
  const wordsA = new Set(a.toLowerCase().split(/\s+/).filter(w => w.length > 2))
  const wordsB = new Set(b.toLowerCase().split(/\s+/).filter(w => w.length > 2))
  if (wordsA.size === 0 || wordsB.size === 0) return 0
  const intersection = [...wordsA].filter(w => wordsB.has(w))
  const smaller = Math.min(wordsA.size, wordsB.size)
  return intersection.length / smaller
}

/**
 * Check if an incoming email resolves any open waiting triggers
 */
async function checkEmailAgainstTriggers(email: EmailContent): Promise<void> {
  const openTriggers = await prisma.trigger.findMany({
    where: {
      isTriggered: false,
      OR: [
        { type: 'EMAIL_REPLY' },
        { type: 'WEB_CONDITION' }
      ]
    },
    include: { action: true }
  })

  for (const trigger of openTriggers) {
    try {
      if (trigger.type === 'EMAIL_REPLY' && trigger.emailPattern) {
        const pattern = trigger.emailPattern.toLowerCase()
        const matches =
          email.from.toLowerCase().includes(pattern) ||
          email.subject.toLowerCase().includes(pattern)

        if (matches) {
          await fireTriggerFromEmail(trigger, email, `Email reply received from ${email.from}`)
        }
      } else if (trigger.type === 'WEB_CONDITION' && trigger.webQuery) {
        const result = await checkEmailResolvesCondition(
          `From: ${email.from}\nSubject: ${email.subject}\n\n${email.body}`,
          trigger.webQuery
        )
        if (result.conditionMet && result.confidence >= 0.7) {
          await fireTriggerFromEmail(trigger, email, result.reasoning)
        }
      }
    } catch (err) {
      console.error(`Error checking trigger ${trigger.id} against email:`, err)
    }
  }
}

async function fireTriggerFromEmail(
  trigger: { id: number; actionId: number; action: { container: string } },
  email: EmailContent,
  reason: string
): Promise<void> {
  const now = new Date()

  await prisma.trigger.update({
    where: { id: trigger.id },
    data: { isTriggered: true, triggeredAt: now, lastChecked: now }
  })

  if (trigger.action.container === 'WAITING') {
    await prisma.action.update({
      where: { id: trigger.actionId },
      data: { container: 'ACTIONABLE_NOW', version: { increment: 1 } }
    })

    await prisma.actionEvent.create({
      data: {
        actionId: trigger.actionId,
        type: 'TRIGGER_FIRED',
        fromContainer: 'WAITING',
        toContainer: 'ACTIONABLE_NOW',
        details: JSON.stringify({
          triggerId: trigger.id,
          source: 'EMAIL',
          emailSubject: email.subject,
          emailFrom: email.from,
          reason
        })
      }
    })

    console.log(`Trigger ${trigger.id} fired by email "${email.subject}": ${reason}`)
  }
}

async function checkEmailResolvesCondition(
  emailContent: string,
  condition: string
): Promise<{ conditionMet: boolean; reasoning: string; confidence: number }> {
  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 256,
    messages: [{
      role: 'user',
      content: `Does this email indicate that the following condition is now true?

Condition: "${condition}"

Email:
${emailContent.substring(0, 1000)}

Respond with ONLY a JSON object: {"conditionMet": true or false, "reasoning": "brief explanation", "confidence": 0.0 to 1.0}`
    }]
  })

  const textBlock = response.content.find(b => b.type === 'text') as { type: 'text'; text: string } | undefined
  if (!textBlock) return { conditionMet: false, reasoning: 'No response', confidence: 0 }

  const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) return { conditionMet: false, reasoning: 'Could not parse response', confidence: 0 }

  const result = JSON.parse(jsonMatch[0])
  return {
    conditionMet: result.conditionMet === true,
    reasoning: typeof result.reasoning === 'string' ? result.reasoning : '',
    confidence: typeof result.confidence === 'number' ? result.confidence : 0.5
  }
}

/**
 * Quick check to filter out obviously non-actionable emails
 */
function isLikelyNotActionable(email: EmailContent): boolean {
  const lowerSubject = email.subject.toLowerCase()
  const lowerFrom = email.from.toLowerCase()

  // Skip common non-actionable patterns
  const skipPatterns = [
    'unsubscribe',
    'newsletter',
    'no-reply',
    'noreply',
    'donotreply',
    'password reset',
    'verify your email',
    'welcome to',
    'thanks for signing up',
    'order confirmation',
    'shipping notification',
    'delivery notification',
    'digest',
    'weekly update',
    'monthly update',
    'daily summary',
    'notification',
    'automated',
    'auto-generated',
    'receipt',
    'invoice',
    'statement',
    'payment received',
    'subscription',
    'renewal',
    'billing',
    'your order',
    'track your',
    'tracking number',
    'security alert',
    'sign-in',
    'login attempt',
    'promo',
    'promotion',
    'sale',
    'discount',
    'coupon',
    'deal',
    'survey',
    'feedback request',
    'rate your',
    'review your experience'
  ]

  for (const pattern of skipPatterns) {
    if (lowerSubject.includes(pattern) || lowerFrom.includes(pattern)) {
      return true
    }
  }

  // Skip mailing list emails (List-Unsubscribe, List-Id, or Precedence: bulk/list)
  if (email.listUnsubscribe || email.listId) {
    return true
  }
  const lowerPrecedence = email.precedence.toLowerCase()
  if (lowerPrecedence === 'bulk' || lowerPrecedence === 'list') {
    return true
  }

  // Skip common automated sender prefixes
  const automatedSenderPrefixes = [
    'notifications@',
    'updates@',
    'news@',
    'marketing@',
    'support@',
    'info@',
    'hello@',
    'team@',
    'mailer-daemon',
    'postmaster'
  ]
  for (const prefix of automatedSenderPrefixes) {
    if (lowerFrom.includes(prefix)) {
      return true
    }
  }

  // Skip if body is too short (likely automated)
  if (email.body.length < 50) {
    return true
  }

  return false
}
