import { prisma } from '../../index'
import { parseActionText, ParsedAction } from './parser'

/**
 * Parse action text with active tuning rules applied and shadow rule tracking.
 * Use this instead of parseActionText for user-facing parses.
 */
export async function parseWithTuning(text: string): Promise<ParsedAction> {
  // Load active and shadow rules
  const rules = await prisma.tuningRule.findMany({
    where: {
      status: { in: ['ACTIVE', 'SHADOW'] },
      category: { not: 'meta' }
    }
  })

  const activeRules = rules.filter(r => r.status === 'ACTIVE')
  const shadowRules = rules.filter(r => r.status === 'SHADOW')

  // Build rule instructions to inject into the system prompt
  const ruleInstructions: string[] = activeRules.map(
    r => `- When: ${r.condition}\n  Then: ${r.transformation}`
  )

  // Parse with active rules applied
  const parsed = await parseActionText(text, ruleInstructions)

  // Track shadow rule outcomes (fire and forget)
  if (shadowRules.length > 0) {
    trackShadowRules(parsed, text, shadowRules).catch(err =>
      console.error('Shadow rule tracking failed:', err)
    )
  }

  return parsed
}

/**
 * Check each shadow rule against the parsed result and record outcomes.
 * A "success" means the AI's parse already aligns with what the rule would produce.
 */
async function trackShadowRules(
  parsed: ParsedAction,
  text: string,
  shadowRules: Array<{
    id: number
    condition: string
    transformation: string
    category: string
    shadowCount: number
    shadowSuccesses: number
    shadowThreshold: number
    status: string
  }>
): Promise<void> {
  const lowerText = text.toLowerCase()

  for (const rule of shadowRules) {
    // Quick relevance check: does the input contain significant words from the condition?
    const conditionWords = rule.condition.toLowerCase()
      .replace(/['"()]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 4) // ignore short words
    const matchScore = conditionWords.filter(w => lowerText.includes(w)).length
    const isRelevant = conditionWords.length > 0 && matchScore / conditionWords.length >= 0.2

    if (!isRelevant) continue

    // Check if the parse result aligns with the rule's transformation
    const transformLower = rule.transformation.toLowerCase()
    let success = false

    if (rule.category === 'urgency') {
      // Check if urgency matches what the rule recommends
      const urgencyMatch = ['critical', 'high', 'medium', 'low'].find(u =>
        transformLower.includes(u)
      )
      if (urgencyMatch) {
        success = parsed.urgency.toLowerCase() === urgencyMatch
      }
    } else if (rule.category === 'container') {
      // Check if container matches what the rule recommends
      const containerMatch = ['actionable_now', 'candidates', 'ambiguity', 'waiting'].find(c =>
        transformLower.includes(c.replace('_', ' ')) || transformLower.includes(c)
      )
      if (containerMatch) {
        success = parsed.container.toLowerCase() === containerMatch
      }
    } else {
      // For other categories, count it as potentially matching
      success = parsed.confidence >= 0.7
    }

    // Record the shadow test outcome
    const newCount = rule.shadowCount + 1
    const newSuccesses = success ? rule.shadowSuccesses + 1 : rule.shadowSuccesses
    const successRate = newSuccesses / newCount

    // Promote to PROPOSED if threshold reached with good success rate
    const newStatus = (newCount >= rule.shadowThreshold && successRate >= 0.8)
      ? 'PROPOSED'
      : 'SHADOW'

    await prisma.tuningRule.update({
      where: { id: rule.id },
      data: {
        shadowCount: newCount,
        shadowSuccesses: newSuccesses,
        status: newStatus as any
      }
    }).catch(err => console.error(`Failed to update shadow rule ${rule.id}:`, err))

    if (newStatus === 'PROPOSED') {
      console.log(`Shadow rule ${rule.id} promoted to PROPOSED (${Math.round(successRate * 100)}% success rate)`)
    }
  }
}
