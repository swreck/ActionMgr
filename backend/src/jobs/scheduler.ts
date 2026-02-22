import cron from 'node-cron'
import { prisma } from '../index'
import { scanGmail } from '../services/gmail/scanner'
import { isGmailConnected } from '../services/gmail/auth'
import { checkWebCondition } from '../services/ai/web-checker'
import { sendPushNotification } from '../services/notifications'

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

  // Trigger check: every hour
  cron.schedule('0 * * * *', async () => {
    console.log('Running trigger check...')
    await checkTriggers()
  })

  // Follow-up check + WAITING safety net: daily at 9 AM
  cron.schedule('0 9 * * *', async () => {
    console.log('Running follow-up check...')
    await checkFollowUps()
    console.log('Running WAITING safety net check...')
    await checkWaitingSafety()
  })

  console.log('Scheduler initialized with jobs:')
  console.log('  - Gmail scan: every 4 hours')
  console.log('  - Trigger check: every hour')
  console.log('  - Follow-up check + WAITING safety net: 9 AM daily')
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

          await sendPushNotification(
            'Action Ready',
            `"${trigger.action.description.substring(0, 60)}" is now actionable`
          )
          console.log(`Trigger fired for action ${trigger.actionId}: ${trigger.description}`)
        }
      } catch (err) {
        console.error(`Error firing trigger ${trigger.id}:`, err)
      }
    }

    // Update check count for manual triggers (so we can track monitoring)
    await prisma.trigger.updateMany({
      where: {
        type: 'MANUAL_CHECK',
        isTriggered: false
      },
      data: {
        lastChecked: now,
        checkCount: { increment: 1 }
      }
    })

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

            await sendPushNotification(
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

    // Find stale actions in ACTIONABLE_NOW
    const staleActions = await prisma.action.findMany({
      where: {
        container: 'ACTIONABLE_NOW',
        archivedAt: null,
        completedAt: null
      }
    })

    let followUpCount = 0

    for (const action of staleActions) {
      const interval = intervals[action.urgency]
      const staleSince = new Date(now.getTime() - interval)

      // Check if action hasn't been updated within its urgency interval
      if (action.updatedAt < staleSince) {
        // Check if we already sent a recent follow-up
        const recentFollowUp = await prisma.actionEvent.findFirst({
          where: {
            actionId: action.id,
            type: 'FOLLOW_UP_SENT',
            createdAt: { gte: staleSince }
          }
        })

        if (!recentFollowUp) {
          // Log follow-up event
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
          await sendPushNotification(
            'Still important?',
            `"${action.description.substring(0, 60)}" needs your attention`
          ).catch(() => {})
          console.log(`Follow-up needed for action ${action.id}: ${action.description.substring(0, 50)}`)
        }
      }
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
