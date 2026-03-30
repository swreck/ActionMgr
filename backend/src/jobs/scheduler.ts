import cron from 'node-cron'
import { prisma } from '../index'
import { scanGmail } from '../services/gmail/scanner'
import { isGmailConnected } from '../services/gmail/auth'
import { checkWebCondition } from '../services/ai/web-checker'
import { sendPushNotification } from '../services/notifications'
import { runGoalDetection } from '../services/ai/goal-detector'
import { composeMorningBrief } from '../services/morning-brief'
import { queueOrSendNotification, drainQueue } from '../services/notification-queue'

/**
 * Initialize all scheduled jobs
 */
export function initializeScheduler(): void {
  console.log('Initializing job scheduler...')

  // Gmail scan: every 4 hours
  cron.schedule('0 */4 * * *', async () => {
    console.log('Running scheduled Gmail scan...')
    await runGmailScan()
  })

  // Trigger check: every 6 hours (was hourly — too frequent for a lightweight app)
  cron.schedule('0 */6 * * *', async () => {
    console.log('Running trigger check...')
    await checkTriggers()
  })

  // Follow-up check + WAITING safety net + missed recurrence: daily at 9 AM
  cron.schedule('0 9 * * *', async () => {
    console.log('Running follow-up check...')
    await checkFollowUps()
    console.log('Running WAITING safety net check...')
    await checkWaitingSafety()
    console.log('Running missed recurrence trigger check...')
    await checkMissedRecurrenceTriggers()
    console.log('Running goal relationship detection...')
    await runGoalDetection()
  })

  // Morning/evening brief dispatcher: check every 15 minutes
  cron.schedule('*/15 * * * *', async () => {
    await checkAndSendBriefs()
  })

  console.log('Scheduler initialized with jobs:')
  console.log('  - Gmail scan: every 4 hours')
  console.log('  - Trigger check: every 6 hours')
  console.log('  - Follow-up check + WAITING safety net + missed recurrence + goal detection: 9 AM daily')
  console.log('  - Morning/evening brief dispatcher: every 15 minutes')
}

/**
 * Run Gmail scan with error handling
 */
async function runGmailScan(): Promise<void> {
  try {
    const connected = await isGmailConnected()
    if (!connected) {
      console.log('Gmail not connected, skipping scan')
      return
    }

    const result = await scanGmail()
    console.log(`Gmail scan complete: ${result.emailsScanned} scanned, ${result.actionsCreated} actions created`)

    if (result.errors.length > 0) {
      console.error('Gmail scan errors:', result.errors)
    }
  } catch (err) {
    console.error('Gmail scan failed:', err)
  }
}

/**
 * Check and fire due triggers
 */
async function checkTriggers(): Promise<void> {
  try {
    const now = new Date()

    // Find triggers that should fire
    const dueTriggers = await prisma.trigger.findMany({
      where: {
        isTriggered: false,
        OR: [
          // Exact date triggers
          {
            type: 'DATE_EXACT',
            triggerDate: { lte: now }
          },
          // Date window triggers (start date reached)
          {
            type: 'DATE_WINDOW',
            dateWindowStart: { lte: now }
          }
        ]
      },
      include: {
        action: true
      }
    })

    for (const trigger of dueTriggers) {
      try {
        // Mark trigger as fired
        await prisma.trigger.update({
          where: { id: trigger.id },
          data: {
            isTriggered: true,
            triggeredAt: now,
            lastChecked: now
          }
        })

        // Move action from WAITING to ACTIONABLE_NOW
        if (trigger.action.container === 'WAITING') {
          await prisma.action.update({
            where: { id: trigger.actionId },
            data: {
              container: 'ACTIONABLE_NOW',
              version: { increment: 1 }
            }
          })

          // Log the trigger event
          await prisma.actionEvent.create({
            data: {
              actionId: trigger.actionId,
              type: 'TRIGGER_FIRED',
              fromContainer: 'WAITING',
              toContainer: 'ACTIONABLE_NOW',
              details: JSON.stringify({
                triggerId: trigger.id,
                triggerType: trigger.type,
                description: trigger.description
              })
            }
          })

          await queueOrSendNotification(
            'Promise Ready',
            `"${trigger.action.description.substring(0, 60)}" is now actionable`
          )
          console.log(`Trigger fired for action ${trigger.actionId}: ${trigger.description}`)
        }
      } catch (err) {
        console.error(`Error firing trigger ${trigger.id}:`, err)
      }
    }

    // Check web condition triggers (at most once every 4 hours per trigger)
    const fourHoursAgo = new Date(now.getTime() - 4 * 60 * 60 * 1000)
    const webTriggers = await prisma.trigger.findMany({
      where: {
        type: 'WEB_CONDITION',
        isTriggered: false,
        webQuery: { not: null },
        OR: [
          { lastChecked: null },
          { lastChecked: { lte: fourHoursAgo } }
        ]
      },
      include: { action: true }
    })

    for (const trigger of webTriggers) {
      try {
        console.log(`Checking web condition for action ${trigger.actionId}: ${trigger.webQuery}`)

        const result = await checkWebCondition(trigger.webQuery!)

        if (result.conditionMet && result.confidence >= 0.7) {
          // Condition confirmed — fire the trigger
          await prisma.trigger.update({
            where: { id: trigger.id },
            data: {
              isTriggered: true,
              triggeredAt: now,
              lastChecked: now,
              checkCount: { increment: 1 },
              webCheckResult: result.reasoning
            }
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
                  triggerType: 'WEB_CONDITION',
                  conditionMet: true,
                  reasoning: result.reasoning,
                  confidence: result.confidence
                })
              }
            })

            await queueOrSendNotification(
              'Condition Met',
              `"${trigger.action.description.substring(0, 60)}" is now actionable`
            )
            console.log(`Web condition met for action ${trigger.actionId}: ${result.reasoning}`)
          }
        } else {
          // Condition not yet met — record the check
          const newFailedChecks = result.confidence < 0.3
            ? trigger.failedChecks + 1
            : trigger.failedChecks

          await prisma.trigger.update({
            where: { id: trigger.id },
            data: {
              lastChecked: now,
              checkCount: { increment: 1 },
              failedChecks: newFailedChecks,
              webCheckResult: result.reasoning
            }
          })

          // After 20 failed checks, escalate to Actionable Now with an alert
          if (newFailedChecks >= 20 && trigger.action.container === 'WAITING') {
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
                  triggerType: 'WEB_CONDITION',
                  escalated: true,
                  reason: 'Monitoring lost track after repeated checks — please review manually'
                })
              }
            })

            console.log(`Web condition monitoring escalated for action ${trigger.actionId} after ${newFailedChecks} failed checks`)
          }

          console.log(`Web condition not yet met for action ${trigger.actionId}: ${result.reasoning}`)
        }
      } catch (err) {
        console.error(`Web condition check failed for trigger ${trigger.id}:`, err)
        await prisma.trigger.update({
          where: { id: trigger.id },
          data: {
            lastChecked: now,
            failedChecks: { increment: 1 }
          }
        })
      }
    }

    console.log(`Trigger check complete: ${dueTriggers.length} date triggers fired, ${webTriggers.length} web conditions checked`)
  } catch (err) {
    console.error('Trigger check failed:', err)
  }
}

/**
 * Check for actions that need follow-up
 */
async function checkFollowUps(): Promise<void> {
  try {
    const now = new Date()

    // Define follow-up intervals by urgency
    const intervals = {
      CRITICAL: 2 * 24 * 60 * 60 * 1000, // 2 days
      HIGH: 7 * 24 * 60 * 60 * 1000,     // 1 week
      MEDIUM: 30 * 24 * 60 * 60 * 1000,  // 1 month
      LOW: 60 * 24 * 60 * 60 * 1000      // 2 months
    }

    // Only fetch actions old enough for the shortest interval (CRITICAL = 2 days)
    const shortestInterval = intervals.CRITICAL
    const oldestPossibleStale = new Date(now.getTime() - shortestInterval)

    const staleActions = await prisma.action.findMany({
      where: {
        container: 'ACTIONABLE_NOW',
        archivedAt: null,
        completedAt: null,
        updatedAt: { lte: oldestPossibleStale }
      }
    })

    if (staleActions.length === 0) {
      console.log('Follow-up check complete: no stale actions')
      return
    }

    // Filter to actions actually stale per their urgency
    const needsFollowUp = staleActions.filter(action => {
      const interval = intervals[action.urgency]
      return action.updatedAt < new Date(now.getTime() - interval)
    })

    if (needsFollowUp.length === 0) {
      console.log('Follow-up check complete: no actions past their urgency interval')
      return
    }

    // Batch check: get all recent follow-up events for these actions in one query
    const recentFollowUps = await prisma.actionEvent.findMany({
      where: {
        actionId: { in: needsFollowUp.map(a => a.id) },
        type: 'FOLLOW_UP_SENT',
        createdAt: { gte: oldestPossibleStale }
      },
      select: { actionId: true, createdAt: true }
    })

    // Build a map of actionId → most recent follow-up date
    const followUpMap = new Map<number, Date>()
    for (const fu of recentFollowUps) {
      const existing = followUpMap.get(fu.actionId)
      if (!existing || fu.createdAt > existing) {
        followUpMap.set(fu.actionId, fu.createdAt)
      }
    }

    let followUpCount = 0

    for (const action of needsFollowUp) {
      const interval = intervals[action.urgency]
      const staleSince = new Date(now.getTime() - interval)
      const lastFollowUp = followUpMap.get(action.id)

      // Skip if we already sent a follow-up within this urgency interval
      if (lastFollowUp && lastFollowUp >= staleSince) continue

      await prisma.actionEvent.create({
        data: {
          actionId: action.id,
          type: 'FOLLOW_UP_SENT',
          details: JSON.stringify({
            reason: 'No activity since ' + action.updatedAt.toISOString(),
            urgency: action.urgency
          })
        }
      })

      followUpCount++
      await queueOrSendNotification(
        'Still important?',
        `"${action.description.substring(0, 60)}" needs your attention`
      ).catch(() => {})
      console.log(`Follow-up needed for action ${action.id}: ${action.description.substring(0, 50)}`)
    }

    console.log(`Follow-up check complete: ${followUpCount} actions need attention`)
  } catch (err) {
    console.error('Follow-up check failed:', err)
  }
}

/**
 * WAITING safety net (P18): flag WAITING actions that have no active trigger
 * so the user can clarify what they're waiting for.
 */
async function checkWaitingSafety(): Promise<void> {
  try {
    // Find all non-archived, non-completed WAITING actions with their triggers
    const waitingActions = await prisma.action.findMany({
      where: {
        container: 'WAITING',
        archivedAt: null,
        completedAt: null
      },
      include: {
        triggers: true
      }
    })

    const toFlag: number[] = []

    for (const action of waitingActions) {
      if (action.triggers.length === 0) {
        // No triggers at all — needs clarification
        toFlag.push(action.id)
      } else {
        // Check if ALL triggers are date-based types with no dates set
        const allTriggersInvalid = action.triggers.every(t => {
          // WEB_CONDITION and MANUAL_CHECK are valid without dates
          if (t.type === 'WEB_CONDITION' || t.type === 'MANUAL_CHECK') {
            return false
          }
          // For date-based triggers, they need at least one date
          return t.triggerDate === null && t.dateWindowStart === null
        })

        if (allTriggersInvalid) {
          toFlag.push(action.id)
        }
      }
    }

    if (toFlag.length > 0) {
      await prisma.action.updateMany({
        where: { id: { in: toFlag } },
        data: { needsClarification: true }
      })
    }

    console.log(`Flagged ${toFlag.length} WAITING actions with no active trigger for clarification`)
  } catch (err) {
    console.error('WAITING safety net check failed:', err)
  }
}

/**
 * Catch WAITING recurring actions whose due date has passed
 * without their trigger firing. Moves them to ACTIONABLE_NOW.
 */
async function checkMissedRecurrenceTriggers(): Promise<void> {
  try {
    const now = new Date()

    // Find WAITING recurring actions with a past due date
    const missedActions = await prisma.action.findMany({
      where: {
        container: 'WAITING',
        archivedAt: null,
        completedAt: null,
        recurrenceRule: { not: null },
        dueDate: { lte: now }
      }
    })

    let movedCount = 0

    for (const action of missedActions) {
      await prisma.action.update({
        where: { id: action.id },
        data: {
          container: 'ACTIONABLE_NOW',
          version: { increment: 1 }
        }
      })

      await prisma.actionEvent.create({
        data: {
          actionId: action.id,
          type: 'CONTAINER_CHANGE',
          fromContainer: 'WAITING',
          toContainer: 'ACTIONABLE_NOW',
          details: JSON.stringify({
            reason: 'Missed recurrence trigger — due date passed while in WAITING'
          })
        }
      })

      movedCount++
    }

    console.log(`Missed recurrence check: moved ${movedCount} overdue recurring actions to ACTIONABLE_NOW`)
  } catch (err) {
    console.error('Missed recurrence trigger check failed:', err)
  }
}

/**
 * Run a manual Gmail scan (called from API endpoint)
 */
export async function triggerManualScan(): Promise<{ success: boolean; message: string }> {
  try {
    await runGmailScan()
    return { success: true, message: 'Scan completed' }
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : 'Scan failed' }
  }
}

/**
 * Manually run the follow-up check (for testing / on-demand use)
 */
export async function triggerFollowUpCheck(): Promise<{ success: boolean; message: string }> {
  try {
    await checkFollowUps()
    return { success: true, message: 'Follow-up check completed' }
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : 'Follow-up check failed' }
  }
}

/**
 * Manually run the trigger check (date triggers + web conditions)
 */
export async function triggerTriggerCheck(): Promise<{ success: boolean; message: string }> {
  try {
    await checkTriggers()
    return { success: true, message: 'Trigger check completed' }
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : 'Trigger check failed' }
  }
}

/**
 * Manually run goal relationship detection (for testing / on-demand use)
 */
export async function triggerGoalDetection(): Promise<{ success: boolean; message: string; suggestionsCreated?: number }> {
  try {
    const result = await runGoalDetection()
    return { success: true, message: `Goal detection completed: ${result.suggestionsCreated} suggestions created`, suggestionsCreated: result.suggestionsCreated }
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : 'Goal detection failed' }
  }
}

/**
 * Check if it's time to send morning or evening brief, and send if so.
 */
async function checkAndSendBriefs(): Promise<void> {
  try {
    // Get user's timezone
    const tzSetting = await prisma.systemSetting.findUnique({ where: { key: 'timezone' } })
    const tz = tzSetting?.value || 'America/New_York'

    const now = new Date()
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    const currentTime = formatter.format(now)

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    const todayStr = dateFormatter.format(now)

    // Morning brief
    const briefTimeSetting = await prisma.systemSetting.findUnique({ where: { key: 'morningBriefTime' } })
    const briefTime = briefTimeSetting?.value || '08:00'

    // Check if within the 15-minute window of brief time
    const briefHour = parseInt(briefTime.split(':')[0])
    const briefMinute = parseInt(briefTime.split(':')[1])
    const currentHour = parseInt(currentTime.split(':')[0])
    const currentMinute = parseInt(currentTime.split(':')[1])
    const briefMinutes = briefHour * 60 + briefMinute
    const currentMinutes = currentHour * 60 + currentMinute

    if (currentMinutes >= briefMinutes && currentMinutes < briefMinutes + 15) {
      // Check if already sent today
      const lastBrief = await prisma.systemSetting.findUnique({ where: { key: 'lastMorningBrief' } })
      if (!lastBrief || lastBrief.value !== todayStr) {
        const brief = await composeMorningBrief()
        const queued = await drainQueue()

        let message = brief.summary
        if (queued.length > 0) {
          message += ` (${queued.length} notification${queued.length !== 1 ? 's' : ''} queued overnight)`
        }

        await sendPushNotification('Morning Brief', message)

        await prisma.systemSetting.upsert({
          where: { key: 'lastMorningBrief' },
          update: { value: todayStr },
          create: { key: 'lastMorningBrief', value: todayStr }
        })

        console.log(`Morning brief sent: ${brief.summary}`)
      }
    }

    // Evening brief (if enabled)
    const eveningEnabled = await prisma.systemSetting.findUnique({ where: { key: 'eveningBriefEnabled' } })
    if (eveningEnabled?.value === 'true') {
      const eveningTimeSetting = await prisma.systemSetting.findUnique({ where: { key: 'eveningBriefTime' } })
      const eveningTime = eveningTimeSetting?.value || '18:00'
      const eveningHour = parseInt(eveningTime.split(':')[0])
      const eveningMinute = parseInt(eveningTime.split(':')[1])
      const eveningMinutes = eveningHour * 60 + eveningMinute

      if (currentMinutes >= eveningMinutes && currentMinutes < eveningMinutes + 15) {
        const lastEvening = await prisma.systemSetting.findUnique({ where: { key: 'lastEveningBrief' } })
        if (!lastEvening || lastEvening.value !== todayStr) {
          // Compose evening summary
          const startOfToday = new Date(now)
          startOfToday.setHours(0, 0, 0, 0)

          const [completedToday, createdToday, dueTomorrow] = await Promise.all([
            prisma.action.count({
              where: { completedAt: { gte: startOfToday } }
            }),
            prisma.action.count({
              where: { createdAt: { gte: startOfToday }, archivedAt: null }
            }),
            prisma.action.count({
              where: {
                dueDate: {
                  gte: new Date(now.getTime() + 24 * 60 * 60 * 1000 - now.getHours() * 3600000),
                  lt: new Date(now.getTime() + 48 * 60 * 60 * 1000 - now.getHours() * 3600000)
                },
                archivedAt: null,
                completedAt: null
              }
            })
          ])

          const parts: string[] = []
          if (completedToday > 0) parts.push(`You kept ${completedToday} promise${completedToday !== 1 ? 's' : ''} today`)
          if (createdToday > 0) parts.push(`${createdToday} new captured`)
          if (dueTomorrow > 0) parts.push(`${dueTomorrow} due tomorrow`)

          const eveningMsg = parts.length > 0
            ? parts.join('. ') + '.'
            : 'Quiet day. Nothing due tomorrow.'

          await sendPushNotification('Evening Wrap-up', eveningMsg)

          await prisma.systemSetting.upsert({
            where: { key: 'lastEveningBrief' },
            update: { value: todayStr },
            create: { key: 'lastEveningBrief', value: todayStr }
          })

          console.log(`Evening brief sent: ${eveningMsg}`)
        }
      }
    }
  } catch (err) {
    console.error('Brief dispatcher failed:', err)
  }
}
