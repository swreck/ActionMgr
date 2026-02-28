import { anthropic, AI_CONFIG, trackTokens } from './client'
import { Container, Urgency } from '@prisma/client'
import { suggestLeadTimeDays } from '../recurrence'

// Parsed action result from AI
export interface ParsedAction {
  description: string
  shortDescription: string | null
  suggestedAction: string | null
  urgency: Urgency
  dueDate: string | null // ISO date string
  confidence: number // Alias for commitmentConfidence (backward compat)
  commitmentConfidence: number // 0-1: Is this actually something the user needs to act on?
  parseConfidence: number // 0-1: Given it IS a commitment, how confident in the parsed fields?
  reasoning: string
  parties: Array<{ name: string; email?: string }>
  triggers: Array<{ type: string; description: string; webQuery?: string }>
  missingInfo: string[] // What info is needed for clarity
  container: Container
  recurrenceRule: string | null // RRULE format: FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=15
  leadTimeDays: number // Days before dueDate to surface action (0-90)
  autoTrigger?: { type: string; triggerDate: string } // Auto-created for WAITING items with future dueDate
}

// Tool definition for structured extraction
const extractActionTool = {
  name: 'extract_action',
  description: 'Extract actionable commitment details from text input',
  input_schema: {
    type: 'object' as const,
    properties: {
      hasAction: {
        type: 'boolean',
        description: 'Whether the text contains an actionable commitment'
      },
      description: {
        type: 'string',
        description: 'Clear, concise description of what needs to be done'
      },
      shortDescription: {
        type: 'string',
        description: 'A 6-10 word summary of the action for compact display. Focus on the core task, drop context. Example: description "Call John at Acme Corp to discuss the Q2 project timeline review" → shortDescription "Call John re Q2 timeline"'
      },
      suggestedAction: {
        type: 'string',
        description: 'Specific next step to take (e.g., "Call John at 555-1234")'
      },
      urgency: {
        type: 'string',
        enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'],
        description: 'CRITICAL=today, HIGH=this week, MEDIUM=this month, LOW=someday'
      },
      dueDate: {
        type: 'string',
        description: 'ISO date (YYYY-MM-DD) if a deadline is mentioned or implied'
      },
      commitment_confidence: {
        type: 'number',
        minimum: 0,
        maximum: 1,
        description: 'How confident you are that this text represents a real actionable commitment the user needs to act on (0-1). Newsletter/marketing = 0.1, unsolicited asks = 0.2, vague mentions = 0.4, clear personal commitment = 0.9, explicit task with deadline = 0.95.'
      },
      parse_confidence: {
        type: 'number',
        minimum: 0,
        maximum: 1,
        description: 'Given that this IS a real commitment, how confident are you in the accuracy of the parsed fields (description, urgency, dueDate, parties, etc.)? High when all details are explicit in the text, lower when you had to infer or guess fields.'
      },
      reasoning: {
        type: 'string',
        description: 'Brief explanation of your interpretation'
      },
      parties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string' }
          },
          required: ['name']
        },
        description: 'People involved in this action'
      },
      triggers: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['DATE_EXACT', 'DATE_WINDOW', 'EMAIL_REPLY', 'MANUAL_CHECK', 'WEB_CONDITION']
            },
            description: { type: 'string' },
            webQuery: {
              type: 'string',
              description: 'For WEB_CONDITION triggers: the natural language condition to check via web search (e.g., "Arc\'teryx is currently offering 30% trade-in value on footwear"). Only set for WEB_CONDITION type.'
            }
          },
          required: ['type', 'description']
        },
        description: 'Conditions that should trigger this action (for waiting items). Use WEB_CONDITION when the trigger depends on a real-world state that can be verified via web search (e.g., a promotion period, a product release, a price change).'
      },
      missingInfo: {
        type: 'array',
        items: { type: 'string' },
        description: 'What information is missing or unclear (e.g., "specific date", "contact info")'
      },
      isWaiting: {
        type: 'boolean',
        description: 'Whether this action should wait for a trigger/condition before becoming active'
      },
      recurrenceRule: {
        type: 'string',
        description: 'Set only if the action explicitly repeats. Use RRULE format with FREQ, INTERVAL, BYMONTHDAY, BYMONTH, BYDAY fields. Examples: "FREQ=WEEKLY;INTERVAL=1" (weekly), "FREQ=WEEKLY;INTERVAL=2;BYDAY=MO" (biweekly on Monday), "FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=15" (monthly on the 15th), "FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=1" (quarterly on the 1st), "FREQ=MONTHLY;INTERVAL=6" (every 6 months), "FREQ=YEARLY;INTERVAL=1;BYMONTH=11" (yearly in November), "FREQ=DAILY;INTERVAL=90" (every 90 days). Only set when recurrence is clearly stated; omit if unsure.'
      },
      leadTimeDays: {
        type: 'number',
        minimum: 0,
        maximum: 90,
        description: 'Days before the due date to surface this action for the user. Only set when recurrenceRule is set. Defaults: weekly=1, monthly=3, quarterly=7, yearly=21. Set 0 for tasks due on the day itself.'
      }
    },
    required: ['hasAction', 'description', 'urgency', 'commitment_confidence', 'parse_confidence', 'reasoning', 'missingInfo']
  }
}

// Helper to get day name from a Date
function getDayName(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

const SYSTEM_PROMPT = `You are an action extraction assistant for a personal task manager. Your job is to analyze text input and extract actionable commitments.

Guidelines:
1. Extract the core action - what specifically needs to be done
2. Suggest a concrete next step when possible
3. Determine urgency based on explicit or implied deadlines:
   - CRITICAL: Must do today, explicit urgent language
   - HIGH: This week, soon, important
   - MEDIUM: This month, no rush but should be done
   - LOW: Someday, nice to have, no timeline
4. Extract dates when mentioned (convert relative dates like "next Friday" to actual dates)
5. Identify people involved (parties)
6. Recognize "waiting" items - things deferred until a condition is met
   - If the condition can be verified via web search (e.g., a store promotion, a product launch, a price change), use WEB_CONDITION trigger type and set webQuery to a clear natural language description of the condition to check (e.g., "Arc'teryx is currently offering 30% trade-in value on footwear at US stores")
   - If the condition depends on receiving an email reply, use EMAIL_REPLY
   - If it depends on a specific date, use DATE_EXACT or DATE_WINDOW
   - Only fall back to MANUAL_CHECK if no other trigger type fits
7. Confidence scoring — you must return TWO separate confidence scores:
   - commitment_confidence (0-1): How likely is this text a real actionable commitment the user personally needs to act on?
     Examples: Newsletter/marketing email = 0.1, unsolicited donation request = 0.15, community broadcast = 0.1, promotional scarcity ("X remaining", "limited availability", "act now") = 0.1, vague "maybe I should..." = 0.3, someone asking user to do something = 0.7, user explicitly saying "I need to..." = 0.9, invoice with due date = 0.95.
     IMPORTANT: Promotional emails that use urgency or scarcity language ("limited spots", "only X left", "while supplies last", "available now") are MARKETING, not personal commitments. Score them 0.1 regardless of how urgent they sound.
   - parse_confidence (0-1): Given it IS a real commitment, how confident are you in the specific parsed fields (description, urgency, dueDate, parties)?
     High (0.9+) when all details are explicitly stated. Lower when you had to infer dates, guess urgency, or assume who's involved.
8. List what information is missing if the action itself is unclear or ambiguous. Only include things that make it impossible to know WHAT to do or WHEN — like "which project?" or "what date?". Do NOT include contact details (phone number, email address) as missing info — the user has their own contacts and would not include that in a task description. Do NOT include minor details that don't affect whether the action can be understood and acted on.
9. Detect recurrence patterns and set recurrenceRule using RRULE format:
   - "every week" or "weekly" → FREQ=WEEKLY;INTERVAL=1
   - "every two weeks" or "biweekly" → FREQ=WEEKLY;INTERVAL=2
   - "every Monday" → FREQ=WEEKLY;INTERVAL=1;BYDAY=MO
   - "every month" or "monthly" → FREQ=MONTHLY;INTERVAL=1
   - "monthly on the 15th" → FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=15
   - "quarterly" or "every 3 months" → FREQ=MONTHLY;INTERVAL=3
   - "quarterly on the 1st" → FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=1
   - "every 6 months" or "twice a year" → FREQ=MONTHLY;INTERVAL=6
   - "every year" or "annually" → FREQ=YEARLY;INTERVAL=1
   - "every year in November" → FREQ=YEARLY;INTERVAL=1;BYMONTH=11
   - "every 90 days" → FREQ=DAILY;INTERVAL=90
   - Set recurrenceRule when the text indicates a repeating pattern — whether stated as a command ("do this every month"), as a frequency word ("send quarterly statements", "monthly review", "weekly call"), or as an implied schedule. If the action describes something that happens on a recurring basis, set the rule.
   - When setting recurrenceRule, also set leadTimeDays: weekly=1, monthly=3, quarterly=7, yearly=21
10. Vague date resolution — when the user gives a vague time reference, resolve to the first day of that unit:
   - "April" → April 1 of the current year (or next year if April has already passed)
   - "2027" → January 1, 2027
   - "Fall" → September 21 of the current year (or next year if already past)
   - "Spring" → March 20, "Summer" → June 21, "Winter" → December 21
   - "next week" → next Monday
   - "this summer" → June 21 of the current year
   - "end of year" → December 31 of the current year
   Always return a specific date in the dueDate field when any time reference is given, even vague ones.
11. Location-based triggers: If the user's input mentions a specific location or place as a trigger (e.g., "when I'm at Costco", "next time I'm near the office"), note that this app cannot do location-based reminders. Set the suggestedAction to: "Set a location reminder in Apple Reminders: [location]" and include a brief note in reasoning explaining that geo-fencing is not supported in this web app.

Today is ${getDayName(new Date())}, ${new Date().toISOString().split('T')[0]}.`

export async function parseActionText(text: string, activeRuleInstructions: string[] = []): Promise<ParsedAction> {
  try {
    const rulesSection = activeRuleInstructions.length > 0
      ? `\n\nUser-defined customization rules (apply these to your extraction):\n${activeRuleInstructions.join('\n')}`
      : ''

    const response = await anthropic.messages.create({
      model: AI_CONFIG.model,
      max_tokens: AI_CONFIG.maxTokens,
      system: SYSTEM_PROMPT + rulesSection,
      messages: [
        {
          role: 'user',
          content: `Extract the actionable commitment from this text:\n\n"${text}"`
        }
      ],
      tools: [extractActionTool],
      tool_choice: { type: 'tool', name: 'extract_action' }
    })

    // Track token usage
    trackTokens(
      response.usage?.input_tokens || 0,
      response.usage?.output_tokens || 0
    )

    // Extract tool use result
    const toolUse = response.content.find(block => block.type === 'tool_use')
    if (!toolUse || toolUse.type !== 'tool_use') {
      throw new Error('No tool use in response')
    }

    const result = toolUse.input as {
      hasAction: boolean
      description: string
      shortDescription?: string
      suggestedAction?: string
      urgency: string
      dueDate?: string
      commitment_confidence: number
      parse_confidence: number
      reasoning: string
      parties?: Array<{ name: string; email?: string }>
      triggers?: Array<{ type: string; description: string; webQuery?: string }>
      missingInfo: string[]
      isWaiting?: boolean
      recurrenceRule?: string
      leadTimeDays?: number
    }

    const commitmentConfidence = result.commitment_confidence
    const parseConfidence = result.parse_confidence

    // Resolve leadTimeDays: AI suggestion > recurrence-based suggestion > default 21
    const leadTimeDays = result.leadTimeDays
      ?? (result.recurrenceRule ? suggestLeadTimeDays(result.recurrenceRule) : 21)

    // Determine container based on confidence and completeness
    const container = determineContainer({
      commitmentConfidence,
      missingInfo: result.missingInfo || [],
      isWaiting: result.isWaiting,
      hasAction: result.hasAction,
      dueDate: result.dueDate || null,
      leadTimeDays
    })

    // Auto-create trigger data for WAITING items with a future dueDate
    let autoTrigger: { type: string; triggerDate: string } | undefined
    if (container === 'WAITING' && result.dueDate) {
      const dueDate = new Date(result.dueDate)
      const now = new Date()
      const leadBefore = new Date(dueDate)
      leadBefore.setDate(leadBefore.getDate() - leadTimeDays)

      // If lead-time date is in the future, use it; otherwise use dueDate itself
      const triggerDate = leadBefore > now ? leadBefore : dueDate
      autoTrigger = {
        type: 'DATE_EXACT',
        triggerDate: triggerDate.toISOString().split('T')[0]
      }
    }

    return {
      description: result.description,
      shortDescription: result.shortDescription || null,
      suggestedAction: result.suggestedAction || null,
      urgency: result.urgency as Urgency,
      dueDate: result.dueDate || null,
      confidence: commitmentConfidence, // backward compat
      commitmentConfidence,
      parseConfidence,
      reasoning: result.reasoning,
      parties: result.parties || [],
      triggers: result.triggers || [],
      missingInfo: result.missingInfo || [],
      container,
      recurrenceRule: result.recurrenceRule || null,
      leadTimeDays,
      autoTrigger
    }
  } catch (error) {
    console.error('AI parsing error:', error)

    // Fallback: return basic parsed result
    return {
      description: text,
      shortDescription: null,
      suggestedAction: null,
      urgency: 'MEDIUM',
      dueDate: null,
      confidence: 0.3,
      commitmentConfidence: 0.3,
      parseConfidence: 0.3,
      reasoning: 'AI parsing failed, using raw input',
      parties: [],
      triggers: [],
      missingInfo: ['AI parsing failed - please review manually'],
      container: 'CANDIDATES',
      recurrenceRule: null,
      leadTimeDays: 21
    }
  }
}

function determineContainer(result: {
  commitmentConfidence: number
  missingInfo: string[]
  isWaiting?: boolean
  hasAction: boolean
  dueDate: string | null
  leadTimeDays: number
}): Container {
  // Low commitment confidence — probably not a real action
  if (result.commitmentConfidence < 0.3) {
    return 'CANDIDATES' // Will likely be filtered out
  }

  // Missing info with moderate-to-low commitment confidence → needs clarification
  if (result.missingInfo.length > 0 && result.commitmentConfidence < 0.6) {
    return 'AMBIGUITY'
  }

  // Waiting for a trigger
  if (result.isWaiting) {
    return 'WAITING'
  }

  // Due date is more than leadTimeDays in the future → park in WAITING
  if (result.dueDate) {
    const dueDate = new Date(result.dueDate)
    const now = new Date()
    const diffMs = dueDate.getTime() - now.getTime()
    const diffDays = diffMs / (1000 * 60 * 60 * 24)
    if (diffDays > result.leadTimeDays) {
      return 'WAITING'
    }
  }

  // High commitment confidence and complete → ready to act
  if (result.commitmentConfidence >= 0.8 && result.missingInfo.length === 0) {
    return 'ACTIONABLE_NOW'
  }

  // Default to candidates for review
  return 'CANDIDATES'
}

// Parse multiple texts in a batch (for email scanning)
export async function parseActionBatch(
  texts: Array<{ id: string; text: string; metadata?: Record<string, string> }>
): Promise<Map<string, ParsedAction>> {
  const results = new Map<string, ParsedAction>()

  // Process in parallel with concurrency limit
  const BATCH_SIZE = 3
  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE)
    const promises = batch.map(async ({ id, text }) => {
      const parsed = await parseActionText(text)
      results.set(id, parsed)
    })
    await Promise.all(promises)
  }

  return results
}

// Generate clarifying questions for ambiguous items
export async function generateClarifyingQuestions(
  description: string,
  missingInfo: string[],
  reasoning: string
): Promise<string[]> {
  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.model,
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: `This action needs clarification:
Description: "${description}"
Missing info: ${missingInfo.join(', ')}
AI reasoning: ${reasoning}

Generate 1-3 specific, short questions to clarify this action. Each question should help determine what needs to be done, who is involved, or when it should happen. Format as a simple list.`
        }
      ]
    })

    trackTokens(
      response.usage?.input_tokens || 0,
      response.usage?.output_tokens || 0
    )

    const textBlock = response.content.find(block => block.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return missingInfo.map(info => `What is the ${info}?`)
    }

    // Parse questions from response
    const questions = textBlock.text
      .split('\n')
      .map(line => line.replace(/^[-*\d.)\s]+/, '').trim())
      .filter(line => line.length > 0 && line.endsWith('?'))
      .slice(0, 3)

    return questions.length > 0 ? questions : missingInfo.map(info => `What is the ${info}?`)
  } catch (error) {
    console.error('Failed to generate questions:', error)
    return missingInfo.map(info => `Please provide: ${info}`)
  }
}

// Re-parse with additional context (answers to questions)
export async function reparseWithContext(
  originalText: string,
  answers: Record<string, string>
): Promise<ParsedAction> {
  const context = Object.entries(answers)
    .map(([q, a]) => `Q: ${q}\nA: ${a}`)
    .join('\n')

  const enrichedText = `${originalText}\n\nAdditional context:\n${context}`

  return parseActionText(enrichedText)
}
