import Anthropic from '@anthropic-ai/sdk'

// Use a fresh client instance so we can pass the beta header
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  defaultHeaders: {
    'anthropic-beta': 'web-search-2025-03-05'
  }
})

export interface WebCheckResult {
  conditionMet: boolean
  reasoning: string
  confidence: number
}

/**
 * Check whether a natural-language condition is currently true,
 * using Anthropic's built-in web search tool.
 */
export async function checkWebCondition(
  conditionDescription: string
): Promise<WebCheckResult> {
  const response = await (client.messages.create as Function)({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    tools: [{ type: 'web_search_20250305', name: 'web_search' }],
    messages: [
      {
        role: 'user',
        content: `Search the web to determine whether this condition is currently true:

"${conditionDescription}"

After searching, respond with ONLY a JSON object (no other text) in this exact format:
{
  "conditionMet": true or false,
  "reasoning": "brief explanation of what you found",
  "confidence": 0.0 to 1.0
}`
      }
    ]
  })

  // Find the final text block (after any tool use turns)
  const textBlock = response.content.find((b: { type: string }) => b.type === 'text') as
    | { type: 'text'; text: string }
    | undefined

  if (!textBlock) {
    throw new Error('No text response from web condition check')
  }

  const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error(`Could not parse JSON from response: ${textBlock.text}`)
  }

  const result = JSON.parse(jsonMatch[0])

  return {
    conditionMet: result.conditionMet === true,
    reasoning: typeof result.reasoning === 'string' ? result.reasoning : 'No reasoning provided',
    confidence: typeof result.confidence === 'number' ? result.confidence : 0.5
  }
}
