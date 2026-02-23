/**
 * One-time migration: convert old recurrenceRule values to RRULE format.
 *
 * Run after db:push:
 *   npx ts-node scripts/migrate-recurrence.ts
 *
 * Old format → New RRULE format:
 *   MONTHLY        → FREQ=MONTHLY;INTERVAL=1
 *   WEEKLY         → FREQ=WEEKLY;INTERVAL=1
 *   YEARLY         → FREQ=YEARLY;INTERVAL=1
 *   YEARLY_11      → FREQ=YEARLY;INTERVAL=1;BYMONTH=11
 *   EVERY_6_MONTHS → FREQ=MONTHLY;INTERVAL=6
 *   EVERY_90_DAYS  → FREQ=DAILY;INTERVAL=90
 */

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CONVERSIONS: Record<string, string> = {
  'MONTHLY': 'FREQ=MONTHLY;INTERVAL=1',
  'WEEKLY': 'FREQ=WEEKLY;INTERVAL=1',
  'YEARLY': 'FREQ=YEARLY;INTERVAL=1',
  'EVERY_6_MONTHS': 'FREQ=MONTHLY;INTERVAL=6',
  'EVERY_90_DAYS': 'FREQ=DAILY;INTERVAL=90',
}

async function migrate() {
  const actions = await prisma.action.findMany({
    where: {
      recurrenceRule: { not: null }
    },
    select: { id: true, recurrenceRule: true }
  })

  console.log(`Found ${actions.length} actions with recurrenceRule`)

  let updated = 0
  let skipped = 0

  for (const action of actions) {
    const rule = action.recurrenceRule!

    // Skip if already in RRULE format
    if (rule.startsWith('FREQ=')) {
      skipped++
      continue
    }

    let newRule: string | null = null

    // Check direct mapping
    if (CONVERSIONS[rule]) {
      newRule = CONVERSIONS[rule]
    }
    // Check YEARLY_MM pattern (e.g. YEARLY_11)
    else if (rule.match(/^YEARLY_(\d+)$/)) {
      const month = parseInt(rule.split('_')[1])
      if (month >= 1 && month <= 12) {
        newRule = `FREQ=YEARLY;INTERVAL=1;BYMONTH=${month}`
      }
    }

    if (newRule) {
      await prisma.action.update({
        where: { id: action.id },
        data: { recurrenceRule: newRule }
      })
      console.log(`  Action #${action.id}: "${rule}" → "${newRule}"`)
      updated++
    } else {
      console.log(`  Action #${action.id}: unknown rule "${rule}" — skipped`)
      skipped++
    }
  }

  console.log(`\nDone: ${updated} updated, ${skipped} skipped`)
}

migrate()
  .catch((err) => {
    console.error('Migration failed:', err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
