/**
 * Recurrence engine for RRULE-format recurrence rules.
 *
 * Supported RRULE fields:
 *   FREQ     — DAILY | WEEKLY | MONTHLY | YEARLY
 *   INTERVAL — positive integer (default 1)
 *   BYMONTHDAY — 1-31
 *   BYMONTH    — 1-12
 *   BYDAY      — MO TU WE TH FR SA SU
 */

export interface RecurrenceConfig {
  freq: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  interval: number
  byMonthDay?: number
  byMonth?: number
  byDay?: string // e.g. "MO", "FR"
}

const DAY_MAP: Record<string, number> = {
  SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6
}

const DAY_NAMES: Record<string, string> = {
  SU: 'Sunday', MO: 'Monday', TU: 'Tuesday', WE: 'Wednesday',
  TH: 'Thursday', FR: 'Friday', SA: 'Saturday'
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

/**
 * Parse an RRULE string like "FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=1"
 * into a structured config object.
 */
export function parseRecurrenceRule(rule: string): RecurrenceConfig | null {
  if (!rule) return null

  const parts: Record<string, string> = {}
  for (const segment of rule.split(';')) {
    const [key, value] = segment.split('=')
    if (key && value) parts[key.trim()] = value.trim()
  }

  const freq = parts.FREQ as RecurrenceConfig['freq']
  if (!freq || !['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'].includes(freq)) {
    return null
  }

  return {
    freq,
    interval: parts.INTERVAL ? parseInt(parts.INTERVAL) || 1 : 1,
    byMonthDay: parts.BYMONTHDAY ? parseInt(parts.BYMONTHDAY) : undefined,
    byMonth: parts.BYMONTH ? parseInt(parts.BYMONTH) : undefined,
    byDay: parts.BYDAY || undefined
  }
}

/**
 * Calculate the next occurrence date.
 *
 * Strategy: start from `notBefore` (the just-completed action's due date)
 * and advance by one interval. If the result is still in the past,
 * keep advancing until it's after today. This avoids backlogs when
 * catching up on missed occurrences, while giving the correct "next"
 * date when completing on time or early.
 *
 * All arithmetic uses UTC to avoid timezone issues.
 */
export function calculateNextDate(rule: string, notBefore?: Date): Date {
  const config = parseRecurrenceRule(rule)
  if (!config) throw new Error(`Invalid recurrence rule: ${rule}`)

  const now = new Date()
  const todayY = now.getUTCFullYear()
  const todayM = now.getUTCMonth() + 1 // 1-indexed
  const todayD = now.getUTCDate()
  const todayVal = todayY * 10000 + todayM * 100 + todayD

  // Start from notBefore if provided, otherwise today
  let startY: number, startM: number, startD: number
  if (notBefore) {
    startY = notBefore.getUTCFullYear()
    startM = notBefore.getUTCMonth() + 1
    startD = notBefore.getUTCDate()
  } else {
    startY = todayY; startM = todayM; startD = todayD
  }

  // Helper: last day of a month
  const lastDayOf = (y: number, m: number) =>
    new Date(Date.UTC(y, m, 0)).getUTCDate()

  const toVal = (y: number, m: number, d: number) =>
    y * 10000 + m * 100 + d

  let ny: number, nm: number, nd: number

  switch (config.freq) {
    case 'DAILY': {
      const base = new Date(Date.UTC(startY, startM - 1, startD))
      do {
        base.setUTCDate(base.getUTCDate() + config.interval)
        ny = base.getUTCFullYear(); nm = base.getUTCMonth() + 1; nd = base.getUTCDate()
      } while (toVal(ny, nm, nd) < todayVal)
      break
    }

    case 'WEEKLY': {
      const base = new Date(Date.UTC(startY, startM - 1, startD))
      if (config.byDay && DAY_MAP[config.byDay] !== undefined) {
        // Advance to next matching day of week after start
        const targetDay = DAY_MAP[config.byDay]
        let daysUntil = targetDay - base.getUTCDay()
        if (daysUntil <= 0) daysUntil += 7
        base.setUTCDate(base.getUTCDate() + daysUntil)
      } else {
        base.setUTCDate(base.getUTCDate() + 7 * config.interval)
      }
      ny = base.getUTCFullYear(); nm = base.getUTCMonth() + 1; nd = base.getUTCDate()
      // Keep advancing if still in the past
      while (toVal(ny, nm, nd) < todayVal) {
        base.setUTCDate(base.getUTCDate() + 7 * config.interval)
        ny = base.getUTCFullYear(); nm = base.getUTCMonth() + 1; nd = base.getUTCDate()
      }
      break
    }

    case 'MONTHLY': {
      // Advance start by one interval
      const totalMonths = (startY * 12 + startM - 1) + config.interval
      ny = Math.floor(totalMonths / 12)
      nm = (totalMonths % 12) + 1
      nd = config.byMonthDay
        ? Math.min(config.byMonthDay, lastDayOf(ny, nm))
        : Math.min(startD, lastDayOf(ny, nm))
      // Keep advancing if in the past
      while (toVal(ny, nm, nd) < todayVal) {
        const t = (ny * 12 + nm - 1) + config.interval
        ny = Math.floor(t / 12)
        nm = (t % 12) + 1
        nd = config.byMonthDay
          ? Math.min(config.byMonthDay, lastDayOf(ny, nm))
          : Math.min(startD, lastDayOf(ny, nm))
      }
      break
    }

    case 'YEARLY': {
      ny = startY + config.interval
      nm = config.byMonth || startM
      nd = config.byMonthDay
        ? Math.min(config.byMonthDay, lastDayOf(ny, nm))
        : (config.byMonth ? 1 : startD)
      // Keep advancing if in the past
      while (toVal(ny, nm, nd) < todayVal) {
        ny += config.interval
        nd = config.byMonthDay
          ? Math.min(config.byMonthDay, lastDayOf(ny, nm))
          : (config.byMonth ? 1 : startD)
      }
      break
    }
  }

  return new Date(Date.UTC(ny, nm - 1, nd))
}

/**
 * Human-readable label for a recurrence rule.
 * Examples: "Monthly on the 15th", "Every 3 months", "Yearly in November"
 */
export function formatRecurrenceLabel(rule: string): string {
  const config = parseRecurrenceRule(rule)
  if (!config) return rule

  const ordinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  switch (config.freq) {
    case 'DAILY':
      if (config.interval === 1) return 'Daily'
      return `Every ${config.interval} days`

    case 'WEEKLY':
      if (config.interval === 1) {
        if (config.byDay && DAY_NAMES[config.byDay]) return `Weekly on ${DAY_NAMES[config.byDay]}`
        return 'Weekly'
      }
      if (config.interval === 2) return 'Biweekly'
      return `Every ${config.interval} weeks`

    case 'MONTHLY':
      if (config.interval === 1) {
        if (config.byMonthDay) return `Monthly on the ${ordinal(config.byMonthDay)}`
        return 'Monthly'
      }
      if (config.interval === 3) {
        if (config.byMonthDay) return `Quarterly on the ${ordinal(config.byMonthDay)}`
        return 'Quarterly'
      }
      if (config.interval === 6) return 'Every 6 months'
      return `Every ${config.interval} months`

    case 'YEARLY':
      if (config.byMonth) {
        const monthName = MONTH_NAMES[config.byMonth - 1]
        if (config.byMonthDay) return `Yearly on ${monthName} ${ordinal(config.byMonthDay)}`
        return `Yearly in ${monthName}`
      }
      if (config.interval === 1) return 'Yearly'
      return `Every ${config.interval} years`
  }
}

/**
 * Suggest a default lead time (days before due date to surface the action)
 * based on recurrence frequency.
 */
export function suggestLeadTimeDays(rule: string): number {
  const config = parseRecurrenceRule(rule)
  if (!config) return 21

  switch (config.freq) {
    case 'DAILY':
      return 0
    case 'WEEKLY':
      return 1
    case 'MONTHLY':
      if (config.interval <= 1) return 3
      if (config.interval <= 3) return 7
      return 14
    case 'YEARLY':
      return 21
    default:
      return 21
  }
}
