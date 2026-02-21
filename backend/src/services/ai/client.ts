import Anthropic from '@anthropic-ai/sdk'

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

// Model configuration - use Haiku for cost efficiency
export const AI_CONFIG = {
  model: 'claude-haiku-4-5-20251001',
  maxTokens: 2000,
  // For more complex reasoning (ambiguity resolution)
  complexModel: 'claude-sonnet-4-6'
}

// Token usage tracking for budget monitoring
interface TokenUsage {
  inputTokens: number
  outputTokens: number
  timestamp: Date
}

const tokenHistory: TokenUsage[] = []

export function trackTokens(input: number, output: number): void {
  tokenHistory.push({
    inputTokens: input,
    outputTokens: output,
    timestamp: new Date()
  })

  // Keep only last 1000 entries
  if (tokenHistory.length > 1000) {
    tokenHistory.shift()
  }
}

export function getTokenUsageToday(): { input: number; output: number } {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const todayUsage = tokenHistory.filter(t => t.timestamp >= today)

  return {
    input: todayUsage.reduce((sum, t) => sum + t.inputTokens, 0),
    output: todayUsage.reduce((sum, t) => sum + t.outputTokens, 0)
  }
}

export function estimateCost(inputTokens: number, outputTokens: number): number {
  // Haiku pricing (as of 2024): $0.25/M input, $1.25/M output
  const inputCost = (inputTokens / 1_000_000) * 0.25
  const outputCost = (outputTokens / 1_000_000) * 1.25
  return inputCost + outputCost
}

export { anthropic }
