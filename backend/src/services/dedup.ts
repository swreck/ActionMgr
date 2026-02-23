import { PrismaClient } from '@prisma/client'

/**
 * Check if a new action might be a duplicate of an existing active action.
 * Returns the potential duplicate if found, null otherwise.
 *
 * Uses simple word overlap similarity — no AI calls needed.
 */
export async function findPotentialDuplicate(
  prisma: PrismaClient,
  description: string,
  emailFrom?: string | null,
  emailSubject?: string | null,
  excludeId?: number
): Promise<{ actionId: number; description: string; similarity: string } | null> {
  // Get active (non-archived, non-completed) actions, excluding the just-created one
  const activeActions = await prisma.action.findMany({
    where: {
      archivedAt: null,
      completedAt: null,
      ...(excludeId ? { id: { not: excludeId } } : {})
    },
    select: {
      id: true,
      description: true,
      source: {
        select: {
          emailFrom: true,
          emailSubject: true
        }
      }
    }
  })

  if (activeActions.length === 0) return null

  const newWords = extractSignificantWords(description)

  for (const existing of activeActions) {
    // Check email sender+subject match (strong signal for gmail scans)
    if (emailFrom && emailSubject && existing.source) {
      if (
        existing.source.emailFrom === emailFrom &&
        existing.source.emailSubject === emailSubject
      ) {
        return {
          actionId: existing.id,
          description: existing.description,
          similarity: 'Same email sender and subject'
        }
      }
    }

    // Check description word overlap
    const existingWords = extractSignificantWords(existing.description)
    const overlap = wordOverlap(newWords, existingWords)

    if (overlap >= 0.6 && newWords.size >= 3) {
      return {
        actionId: existing.id,
        description: existing.description,
        similarity: 'Similar description'
      }
    }
  }

  return null
}

// Common words to ignore in similarity checks
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been',
  'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from',
  'and', 'or', 'but', 'not', 'no', 'so', 'if', 'do', 'does',
  'did', 'will', 'would', 'could', 'should', 'may', 'might',
  'this', 'that', 'these', 'those', 'it', 'its', 'my', 'your',
  'his', 'her', 'our', 'their', 'i', 'you', 'he', 'she', 'we',
  'they', 'me', 'him', 'us', 'them', 'about', 'up', 'out',
  'can', 'has', 'have', 'had', 'get', 'got', 'make', 'need'
])

function extractSignificantWords(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2 && !STOP_WORDS.has(w))
  )
}

function wordOverlap(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0
  let shared = 0
  for (const word of a) {
    if (b.has(word)) shared++
  }
  const smaller = Math.min(a.size, b.size)
  return shared / smaller
}
