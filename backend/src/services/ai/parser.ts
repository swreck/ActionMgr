import { anthropic, AI_CONFIG, trackTokens } from './client'
import { Container, Urgency } from '@prisma/client'

// Parsed action result from AI
export interface ParsedAction {
  description: string
  suggestedAction: string | null
  urgency: Urgency
  dueDate: string | null // ISO date string
  confidence: number
  reasoning: string
  parties: Array<{ name: string; email?: string }>
  triggers: Array<{ type: string; description: string; webQuery?: string }>
  missingInfo: string[] // What info is needed for clarity
  container: Container
  recurrenceRule: string | null // e.g. YEARLY_11, MONTHLY, WEEKLY, EVERY_6_MONTHS
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
      confidence: {
        type: 'number',
        minimum: 0,
        maximum: 1,
        description: 'How confident you are in this extraction (0-1)'
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
        description: 'Set only if the action explicitly repeats. Use one of: YEARLY (same date each year), YEARLY_MM (specific month, e.g. YEARLY_11 for every November), MONTHLY (every month), WEEKLY (every week), EVERY_6_MONTHS, EVERY_90_DAYS. Only set when recurrence is clearly stated; omit if unsure.'
      }
    },
    required: ['hasAction', 'description', 'urgency', 'confidence', 'reasoning', 'missingInfo']
  }
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
7. Be honest about confidence - lower it when details are ambiguous
8. List what information is missing if the action is unclear
9. Detect recurrence patterns and set recurrenceRule:
   - "every year in November" or "annually in November" → YEARLY_11
   - "every year" or "annually" (no specific month) → YEARLY
   - "every month" or "monthly" → MONTHLY
   - "every week" or "weekly" → WEEKLY
   - "every 6 months" or "twice a year" → EVERY_6_MONTHS
   - "every quarter" or "every 90 days" → EVERY_90_DAYS
   - Only set recurrenceRule when recurrence is explicitly stated

Today's date is ${new Date().toISOString().split('T')[0]}.`

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
      suggestedAction?: string
      urgency: string
      dueDate?: string
      confidence: number
      reasoning: string
      parties?: Array<{ name: string; email?: string }>
      triggers?: Array<{ type: string; description: string; webQuery?: string }>
      missingInfo: string[]
      isWaiting?: boolean
      recurrenceRule?: string
    }

    // Determine container based on confidence and completeness
    const container = determineContainer(result)

    return {
      description: result.description,
      suggestedAction: result.suggestedAction || null,
      urgency: result.urgency as Urgency,
      dueDate: result.dueDate || null,
      confidence: result.confidence,
      reasoning: result.reasoning,
      parties: result.parties || [],
      triggers: result.triggers || [],
      missingInfo: result.missingInfo || [],
      container,
      recurrenceRule: result.recurrenceRule || null
    }
  } catch (error) {
    console.error('AI parsing error:', error)

    // Fallback: return basic parsed result
    return {
      description: text,
      suggestedAction: null,
      urgency: 'MEDIUM',
      dueDate: null,
      confidence: 0.3,
      reasoning: 'AI parsing failed, using raw input',
      parties: [],
      triggers: [],
      missingInfo: ['AI parsing failed - please review manually'],
      container: 'CANDIDATES',
      recurrenceRule: null
    }
  }
}

function determineContainer(result: {
  confidence: number
  missingInfo: string[]
  isWaiting?: boolean
  hasAction: boolean
}): Container {
  // No actionable content
  if (!result.hasAction) {
    return 'CANDIDATES' // Let user decide
  }

  // Waiting for a trigger
  if (result.isWaiting) {
    return 'WAITING'
  }

  // Missing critical information
  if (result.missingInfo.length > 0 && result.confidence < 0.6) {
    return 'AMBIGUITY'
  }

  // High confidence and complete
  if (result.confidence >= 0.8 && result.missingInfo.length === 0) {
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
