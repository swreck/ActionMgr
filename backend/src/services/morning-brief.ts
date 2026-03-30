import { prisma } from '../index'

export interface MorningBriefData {
  dueToday: number
  overdue: number
  becameReadyOvernight: number
  atRisk: number
  weekAhead: number
  summary: string
  peopleDueToday: string[]
}

export async function composeMorningBrief(): Promise<MorningBriefData> {
  const now = new Date()
  const startOfToday = new Date(now)
  startOfToday.setHours(0, 0, 0, 0)
  const endOfToday = new Date(now)
  endOfToday.setHours(23, 59, 59, 999)
  const sevenDaysOut = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
  const twelveHoursAgo = new Date(now.getTime() - 12 * 60 * 60 * 1000)

  const intervals: Record<string, number> = {
    CRITICAL: 2 * 24 * 60 * 60 * 1000,
    HIGH: 7 * 24 * 60 * 60 * 1000,
    MEDIUM: 30 * 24 * 60 * 60 * 1000,
    LOW: 60 * 24 * 60 * 60 * 1000
  }

  const [dueTodayActions, overdueCount, triggerEvents, actionableActions, weekAheadCount] = await Promise.all([
    // Due today with parties for people-centric message
    prisma.action.findMany({
      where: {
        dueDate: { gte: startOfToday, lte: endOfToday },
        archivedAt: null,
        completedAt: null
      },
      include: { parties: true, source: true }
    }),

    // Overdue
    prisma.action.count({
      where: {
        dueDate: { lt: startOfToday },
        archivedAt: null,
        completedAt: null
      }
    }),

    // Triggers fired overnight
    prisma.actionEvent.count({
      where: {
        type: 'TRIGGER_FIRED',
        createdAt: { gte: twelveHoursAgo }
      }
    }),

    // All actionable (for at-risk)
    prisma.action.findMany({
      where: {
        container: 'ACTIONABLE_NOW',
        archivedAt: null,
        completedAt: null
      },
      select: { urgency: true, updatedAt: true }
    }),

    // Coming up in next 7 days
    prisma.action.count({
      where: {
        dueDate: { gt: endOfToday, lte: sevenDaysOut },
        archivedAt: null,
        completedAt: null
      }
    })
  ])

  const atRiskCount = actionableActions.filter(action => {
    const interval = intervals[action.urgency] || intervals.MEDIUM
    return action.updatedAt < new Date(now.getTime() - interval)
  }).length

  // Extract people names for people-centric summary
  const peopleDueToday: string[] = []
  for (const action of dueTodayActions) {
    if (action.parties && action.parties.length > 0) {
      for (const party of action.parties) {
        if (!peopleDueToday.includes(party.name)) {
          peopleDueToday.push(party.name)
        }
      }
    } else if (action.source?.emailFrom) {
      const name = action.source.emailFrom.split('@')[0].replace(/[._]/g, ' ')
      if (!peopleDueToday.includes(name)) {
        peopleDueToday.push(name)
      }
    }
  }

  // Compose people-centric summary
  const parts: string[] = []
  const dueCount = dueTodayActions.length

  if (dueCount > 0) {
    let dueMsg = `${dueCount} due today`
    if (peopleDueToday.length > 0 && peopleDueToday.length <= 2) {
      dueMsg += ` (to ${peopleDueToday.join(' and ')})`
    }
    parts.push(dueMsg)
  }

  if (overdueCount > 0) {
    parts.push(`${overdueCount} overdue`)
  }

  if (triggerEvents > 0) {
    parts.push(`${triggerEvents} became ready overnight`)
  }

  if (atRiskCount > 0) {
    parts.push(`${atRiskCount} at risk of slipping`)
  }

  const summary = parts.length > 0
    ? `Good morning. ${parts.join('. ')}.`
    : 'Good morning. All clear — nothing needs attention today.'

  return {
    dueToday: dueCount,
    overdue: overdueCount,
    becameReadyOvernight: triggerEvents,
    atRisk: atRiskCount,
    weekAhead: weekAheadCount,
    summary,
    peopleDueToday
  }
}
