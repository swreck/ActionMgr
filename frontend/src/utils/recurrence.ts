/**
 * Frontend utility for formatting recurrence rules for display.
 * Mirrors backend/src/services/recurrence.ts formatRecurrenceLabel().
 */

interface RecurrenceConfig {
  freq: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  interval: number
  byMonthDay?: number
  byMonth?: number
  byDay?: string
}

const DAY_NAMES: Record<string, string> = {
  SU: 'Sunday', MO: 'Monday', TU: 'Tuesday', WE: 'Wednesday',
  TH: 'Thursday', FR: 'Friday', SA: 'Saturday'
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function parseRule(rule: string): RecurrenceConfig | null {
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

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

export function formatRecurrenceLabel(rule: string): string {
  const config = parseRule(rule)
  if (!config) return rule

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
