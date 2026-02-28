import { anthropic, AI_CONFIG, trackTokens } from './client'
import { prisma } from '../../index'

interface GoalCluster {
  suggestedName: string
  reasoning: string
  actionIds: number[]
}

const detectGoalsTool = {
  name: 'detect_goal_relationships',
  description: 'Identify groups of actions that are steps toward the same goal or outcome',
  input_schema: {
    type: 'object' as const,
    properties: {
      groups: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            suggestedName: {
              type: 'string',
              description: 'A short, clear name for the goal these actions share (e.g., "Eye care follow-up", "Kitchen renovation")'
            },
            reasoning: {
              type: 'string',
              description: 'One sentence explaining why these actions are related at a goal level'
            },
            actionNumbers: {
              type: 'array',
              items: { type: 'number' },
              description: 'The numbers of the related actions from the list'
            }
          },
          required: ['suggestedName', 'reasoning', 'actionNumbers']
        },
        description: 'Groups of actions that share a common goal. Only include groups where the relationship is meaningful — actions that are genuinely steps toward the same outcome. Return an empty array if no clear goal relationships exist.'
      }
    },
    required: ['groups']
  }
}

const SYSTEM_PROMPT = `You are analyzing a personal task list to find actions that are steps toward the same goal.

IMPORTANT RULES:
- Only group actions that are genuinely part of the same real-world goal or project.
- Keyword overlap alone is NOT a relationship. "Send Mom a birthday card" and "Send quarterly report" share the word "send" but are completely unrelated.
- Each group should have 2-5 actions.
- An action should only appear in one group.
- If no clear goal-level relationships exist, return an empty array. It's better to suggest nothing than to suggest false groupings.
- The suggested name should describe the shared GOAL, not a shared word.

Examples of real goal relationships:
- "Get Dr. Smith's referral form" + "Schedule follow-up with Dr. Smith" → goal: "Dr. Smith medical care"
- "Research kitchen countertop materials" + "Get quotes from contractors" + "Pick cabinet colors" → goal: "Kitchen renovation"
- "Buy concert tickets" + "Book hotel for concert weekend" → goal: "Concert trip planning"

Examples that are NOT goal relationships:
- "Call Mom" + "Call dentist" → both involve calling, but different goals
- "Review Q1 budget" + "Review insurance policy" → both involve reviewing, but unrelated
- "Send birthday gift" + "Send quarterly report" → keyword overlap only`

/**
 * Run goal relationship detection on ungrouped actions.
 * Creates GoalSuggestion records for any detected clusters.
 */
export async function runGoalDetection(): Promise<{ suggestionsCreated: number }> {
  // Check if we ran recently (within 24 hours)
  const lastRun = await prisma.systemSetting.findUnique({
    where: { key: 'lastGoalDetectionAt' }
  })

  if (lastRun) {
    const lastRunDate = new Date(lastRun.value)
    const hoursSinceLastRun = (Date.now() - lastRunDate.getTime()) / (1000 * 60 * 60)
    if (hoursSinceLastRun < 24) {
      console.log(`Goal detection skipped — last run ${hoursSinceLastRun.toFixed(1)}h ago`)
      return { suggestionsCreated: 0 }
    }
  }

  // Load ungrouped, non-archived, non-completed actions
  const actions = await prisma.action.findMany({
    where: {
      groupId: null,
      archivedAt: null,
      completedAt: null
    },
    select: {
      id: true,
      description: true,
      shortDescription: true
    }
  })

  if (actions.length < 3) {
    console.log(`Goal detection skipped — only ${actions.length} ungrouped actions (need 3+)`)
    await recordLastRun()
    return { suggestionsCreated: 0 }
  }

  // Filter out actions already in a pending suggestion
  const pendingSuggestionActionIds = await prisma.goalSuggestionAction.findMany({
    where: {
      suggestion: { status: 'pending' }
    },
    select: { actionId: true }
  })
  const pendingIds = new Set(pendingSuggestionActionIds.map(r => r.actionId))
  const eligibleActions = actions.filter(a => !pendingIds.has(a.id))

  if (eligibleActions.length < 3) {
    console.log(`Goal detection skipped — only ${eligibleActions.length} eligible actions after filtering`)
    await recordLastRun()
    return { suggestionsCreated: 0 }
  }

  // Load dismissed suggestions for dedup
  const dismissedSuggestions = await prisma.goalSuggestion.findMany({
    where: { status: 'dismissed' },
    include: { actions: { select: { actionId: true } } }
  })

  // Build the numbered action list for the AI
  const actionList = eligibleActions
    .map((a, i) => `${i + 1}. ${a.description}`)
    .join('\n')

  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.model,
      max_tokens: AI_CONFIG.maxTokens,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Here are the user's current ungrouped actions:\n\n${actionList}\n\nIdentify any actions that are steps toward the same goal.`
        }
      ],
      tools: [detectGoalsTool],
      tool_choice: { type: 'tool', name: 'detect_goal_relationships' }
    })

    trackTokens(
      response.usage?.input_tokens || 0,
      response.usage?.output_tokens || 0
    )

    const toolUse = response.content.find(block => block.type === 'tool_use')
    if (!toolUse || toolUse.type !== 'tool_use') {
      console.log('Goal detection: no tool use in AI response')
      await recordLastRun()
      return { suggestionsCreated: 0 }
    }

    const result = toolUse.input as {
      groups: Array<{
        suggestedName: string
        reasoning: string
        actionNumbers: number[]
      }>
    }

    if (!result.groups || result.groups.length === 0) {
      console.log('Goal detection: AI found no goal relationships')
      await recordLastRun()
      return { suggestionsCreated: 0 }
    }

    // Convert action numbers (1-indexed) to real IDs
    let suggestionsCreated = 0
    const usedActionIds = new Set<number>()

    for (const group of result.groups) {
      // Convert 1-indexed numbers to action IDs
      const actionIds = group.actionNumbers
        .filter(n => n >= 1 && n <= eligibleActions.length)
        .map(n => eligibleActions[n - 1].id)
        .filter(id => !usedActionIds.has(id))

      if (actionIds.length < 2) continue

      // Check if this combination was previously dismissed
      if (isDismissedCombination(actionIds, dismissedSuggestions)) {
        console.log(`Goal detection: skipping dismissed combination for "${group.suggestedName}"`)
        continue
      }

      // Create the suggestion
      await prisma.goalSuggestion.create({
        data: {
          suggestedName: group.suggestedName,
          reasoning: group.reasoning,
          actions: {
            create: actionIds.map(actionId => ({ actionId }))
          }
        }
      })

      for (const id of actionIds) usedActionIds.add(id)
      suggestionsCreated++
    }

    console.log(`Goal detection: created ${suggestionsCreated} suggestions`)
    await recordLastRun()
    return { suggestionsCreated }
  } catch (error) {
    console.error('Goal detection failed:', error)
    await recordLastRun()
    return { suggestionsCreated: 0 }
  }
}

/**
 * Check if a set of action IDs matches (or is a subset of) a previously dismissed suggestion.
 */
function isDismissedCombination(
  actionIds: number[],
  dismissed: Array<{ actions: Array<{ actionId: number }> }>
): boolean {
  const idSet = new Set(actionIds)

  for (const suggestion of dismissed) {
    const dismissedIds = new Set(suggestion.actions.map(a => a.actionId))
    // If every action in the proposed cluster was in a dismissed suggestion, skip it
    const allInDismissed = actionIds.every(id => dismissedIds.has(id))
    if (allInDismissed) return true
  }

  return false
}

async function recordLastRun(): Promise<void> {
  await prisma.systemSetting.upsert({
    where: { key: 'lastGoalDetectionAt' },
    update: { value: new Date().toISOString() },
    create: { key: 'lastGoalDetectionAt', value: new Date().toISOString() }
  })
}
