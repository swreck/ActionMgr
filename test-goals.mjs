/**
 * Action Manager — Goal Relationship Detection Test Suite
 * Tests: schema, API endpoints, AI detection, accept/dismiss flow, badge counts
 * Run: node test-goals.mjs (backend must be running on port 3002)
 */

const BASE = 'http://localhost:3002/api'
let passed = 0
let failed = 0
const results = []
const cleanup = [] // IDs to clean up at end

async function api(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  })
  const json = await res.json().catch(() => ({}))
  return { status: res.status, body: json }
}

const GET    = (p)    => api('GET',    p)
const POST   = (p, b) => api('POST',   p, b)
const PUT    = (p, b) => api('PUT',    p, b)
const DEL    = (p)    => api('DELETE', p)

function assert(name, condition, detail = '') {
  if (condition) {
    passed++
    results.push(`  ✓ ${name}`)
  } else {
    failed++
    results.push(`  ✗ ${name}${detail ? ' — ' + detail : ''}`)
  }
}

function section(title) {
  results.push(`\n── ${title} ──`)
}

// ─── TEST 1: Create test actions for goal detection ──────────────────────────
section('Setup — Create related test actions')

const testActions = []

// Group A: Medical care (clearly related)
const medicalActions = [
  "Get Dr. Moshfeghi's referral form from Stanford optometry",
  "Schedule 2-year follow-up appointment with Dr. Moshfeghi",
  "Pick up eye drop prescription from CVS for post-appointment care"
]

// Group B: Home renovation (clearly related)
const homeActions = [
  "Get quotes from three contractors for kitchen countertop replacement",
  "Pick cabinet color samples from Home Depot for kitchen remodel",
  "Schedule plumber to move kitchen sink drain for new layout"
]

// Unrelated actions (should NOT be grouped together)
const unrelatedActions = [
  "Call Mom on Sunday",
  "Renew car registration before March 15"
]

const allTestTexts = [...medicalActions, ...homeActions, ...unrelatedActions]

for (const text of allTestTexts) {
  const preview = await POST('/parse/preview', { text })
  assert(`Parse preview OK: "${text.substring(0, 40)}..."`, preview.status === 200)

  const confirm = await POST('/parse/confirm', preview.body)
  assert(`Confirm OK: action #${confirm.body.id}`, confirm.status === 201)
  testActions.push(confirm.body)
  cleanup.push(confirm.body.id)
}

assert('Created 8 test actions', testActions.length === 8, `got ${testActions.length}`)

// Make sure none are grouped yet
for (const action of testActions) {
  assert(`Action #${action.id} has no group`, action.groupId === null || action.groupId === undefined)
}

// ─── TEST 2: Suggestions endpoint starts empty (or with prior data) ──────────
section('Suggestions API — baseline state')

{
  const r = await GET('/groups/suggestions')
  assert('GET /groups/suggestions returns 200', r.status === 200)
  assert('Response has suggestions array', Array.isArray(r.body.suggestions))
  // Note: there may be pre-existing suggestions from prior runs; that's fine
}

// ─── TEST 3: Run goal detection (manual trigger) ────────────────────────────
section('Goal Detection — manual trigger')

{
  // Clear the lastGoalDetectionAt so it doesn't skip
  await PUT('/settings', { lastGoalDetectionAt: new Date(0).toISOString() })

  const r = await POST('/system/run-goal-detection')
  assert('POST /system/run-goal-detection returns 200', r.status === 200)
  assert('Response has success field', r.body.success === true, JSON.stringify(r.body))
  assert('Response has message', typeof r.body.message === 'string')
  console.log(`  → ${r.body.message}`)

  // The AI should find at least 1 suggestion (ideally 2 — medical + home)
  assert('Created at least 1 suggestion', r.body.suggestionsCreated >= 1,
    `got ${r.body.suggestionsCreated}`)
}

// ─── TEST 4: Verify suggestions appear in API ────────────────────────────────
section('Goal Detection — verify suggestions stored')

let suggestions = []
{
  const r = await GET('/groups/suggestions')
  assert('GET /groups/suggestions returns 200', r.status === 200)
  suggestions = r.body.suggestions
  assert('At least 1 pending suggestion', suggestions.length >= 1, `got ${suggestions.length}`)

  if (suggestions.length > 0) {
    const s = suggestions[0]
    assert('Suggestion has id', typeof s.id === 'number')
    assert('Suggestion has suggestedName', typeof s.suggestedName === 'string' && s.suggestedName.length > 0)
    assert('Suggestion has reasoning', typeof s.reasoning === 'string' && s.reasoning.length > 0)
    assert('Suggestion has actions array', Array.isArray(s.actions) && s.actions.length >= 2)

    if (s.actions.length > 0) {
      const a = s.actions[0]
      assert('Action in suggestion has id', typeof a.id === 'number')
      assert('Action in suggestion has description', typeof a.description === 'string')
    }

    console.log(`  → Suggestion: "${s.suggestedName}" (${s.actions.length} actions)`)
    console.log(`    Reasoning: ${s.reasoning}`)
  }
}

// ─── TEST 5: Goal suggestions appear in container counts ─────────────────────
section('Container Counts — goalSuggestions field')

{
  const r = await GET('/containers/counts')
  assert('GET /containers/counts returns 200', r.status === 200)
  assert('Response has goalSuggestions field', 'goalSuggestions' in r.body,
    `keys: ${Object.keys(r.body).join(', ')}`)
  assert('goalSuggestions is a number >= 1', typeof r.body.goalSuggestions === 'number' && r.body.goalSuggestions >= 1,
    `got ${r.body.goalSuggestions}`)
  console.log(`  → goalSuggestions count: ${r.body.goalSuggestions}`)
}

// ─── TEST 6: Accept a suggestion ─────────────────────────────────────────────
section('Accept Suggestion — creates group')

let acceptedGroupId = null
{
  if (suggestions.length >= 1) {
    const s = suggestions[0]
    const customName = 'Test Goal Group'

    const r = await POST(`/groups/suggestions/${s.id}/accept`, { name: customName })
    assert('POST accept returns 201', r.status === 201, `status: ${r.status}, body: ${JSON.stringify(r.body)}`)
    assert('Created group has id', typeof r.body.id === 'number')
    assert('Group name matches custom name', r.body.name === customName,
      `got "${r.body.name}"`)
    assert('Group has actions', Array.isArray(r.body.actions) && r.body.actions.length >= 2,
      `got ${r.body.actions?.length} actions`)
    acceptedGroupId = r.body.id

    // Verify suggestion is no longer pending
    const suggestions2 = await GET('/groups/suggestions')
    const stillPending = suggestions2.body.suggestions.find(x => x.id === s.id)
    assert('Accepted suggestion no longer in pending list', !stillPending)

    // Verify it's not double-acceptable
    const r2 = await POST(`/groups/suggestions/${s.id}/accept`, { name: 'Duplicate' })
    assert('Re-accepting returns 400', r2.status === 400)
  } else {
    results.push('  ⚠ Skipped accept tests — no suggestions available')
  }
}

// ─── TEST 7: Dismiss a suggestion ────────────────────────────────────────────
section('Dismiss Suggestion — remembers dismissal')

let dismissedSuggestionId = null
{
  // Refresh suggestions list
  const r = await GET('/groups/suggestions')
  const remaining = r.body.suggestions

  if (remaining.length >= 1) {
    const s = remaining[0]
    dismissedSuggestionId = s.id
    const dismissedActionIds = s.actions.map(a => a.id)

    const dr = await POST(`/groups/suggestions/${s.id}/dismiss`)
    assert('POST dismiss returns 200', dr.status === 200)
    assert('Dismiss response has success', dr.body.success === true)

    // Verify it's gone from pending
    const r2 = await GET('/groups/suggestions')
    const stillThere = r2.body.suggestions.find(x => x.id === s.id)
    assert('Dismissed suggestion no longer in pending list', !stillThere)

    // Verify re-dismissing fails
    const dr2 = await POST(`/groups/suggestions/${s.id}/dismiss`)
    assert('Re-dismissing returns 400', dr2.status === 400)

    console.log(`  → Dismissed suggestion #${s.id} with ${dismissedActionIds.length} actions`)
  } else {
    results.push('  ⚠ Skipped dismiss tests — no remaining suggestions')
  }
}

// ─── TEST 8: Container counts update after accept/dismiss ────────────────────
section('Container Counts — updated after accept/dismiss')

{
  const r = await GET('/containers/counts')
  assert('Counts endpoint still works', r.status === 200)
  // After accepting and dismissing, count should be lower than before
  console.log(`  → goalSuggestions count now: ${r.body.goalSuggestions}`)
}

// ─── TEST 9: 24-hour cooldown check ─────────────────────────────────────────
section('Goal Detection — 24-hour cooldown')

{
  // Running again immediately should be skipped (we just ran it)
  const r = await POST('/system/run-goal-detection')
  assert('Second run returns 200', r.status === 200)
  assert('Second run created 0 suggestions (cooldown)', r.body.suggestionsCreated === 0,
    `got ${r.body.suggestionsCreated}`)
  console.log(`  → ${r.body.message}`)
}

// ─── TEST 10: Dismissed combination not re-suggested ─────────────────────────
section('Goal Detection — dismissed combos filtered')

{
  // Reset cooldown and run again
  await PUT('/settings', { lastGoalDetectionAt: new Date(0).toISOString() })

  const r = await POST('/system/run-goal-detection')
  assert('Third run returns 200', r.status === 200)
  console.log(`  → ${r.body.message}`)

  // Check that any new suggestions don't contain the exact dismissed set
  // (This is a behavioral test — the dismissed combo should be skipped)
  const newSuggestions = await GET('/groups/suggestions')
  if (dismissedSuggestionId) {
    const reDismissed = newSuggestions.body.suggestions.find(s => s.id === dismissedSuggestionId)
    assert('Dismissed suggestion not re-surfaced', !reDismissed)
  }
}

// ─── TEST 11: Invalid suggestion IDs ─────────────────────────────────────────
section('Edge Cases — invalid IDs')

{
  const r1 = await POST('/groups/suggestions/99999/accept', { name: 'Nope' })
  assert('Accept non-existent returns 404', r1.status === 404)

  const r2 = await POST('/groups/suggestions/99999/dismiss')
  assert('Dismiss non-existent returns 404', r2.status === 404)
}

// ─── TEST 12: Groups list shows accepted group ──────────────────────────────
section('Groups — accepted suggestion becomes a group')

{
  if (acceptedGroupId) {
    const r = await GET('/groups')
    assert('GET /groups returns 200', r.status === 200)
    const group = r.body.find(g => g.id === acceptedGroupId)
    assert('Accepted group appears in groups list', !!group,
      `looking for id ${acceptedGroupId}`)
    if (group) {
      assert('Group has correct name', group.name === 'Test Goal Group')
      assert('Group has 2+ actions', group.actions.length >= 2,
        `got ${group.actions.length}`)
      console.log(`  → Group "${group.name}": ${group.actions.length} actions`)
    }
  }
}

// ─── CLEANUP ─────────────────────────────────────────────────────────────────
section('Cleanup')

// Delete the accepted group
if (acceptedGroupId) {
  const r = await DEL(`/groups/${acceptedGroupId}`)
  assert('Delete accepted group', r.status === 200)
}

// Purge test actions
let cleanedUp = 0
for (const id of cleanup) {
  const r = await DEL(`/actions/${id}/purge`)
  if (r.status === 200) cleanedUp++
}
assert(`Purged ${cleanedUp}/${cleanup.length} test actions`, cleanedUp === cleanup.length,
  `only purged ${cleanedUp}`)

// ─── SUMMARY ─────────────────────────────────────────────────────────────────
console.log('\n' + results.join('\n'))
console.log(`\n═══════════════════════════════════════`)
console.log(`  Passed: ${passed}`)
console.log(`  Failed: ${failed}`)
console.log(`  Total:  ${passed + failed}`)
console.log(`═══════════════════════════════════════`)

if (failed > 0) process.exit(1)
