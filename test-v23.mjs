/**
 * Action Manager v2.3 — New Feature Test Suite
 * Tests: dedup detection, auto-archive groups, shortDescription, group suggestions
 * Run: node test-v23.mjs (backend must be running on port 3001)
 */

const BASE = 'http://localhost:3001/api'
let passed = 0
let failed = 0
const results = []

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

// ─── TEST 1: Short Description in AI Parsing ──────────────────────────────────
section('Short Description — AI generates compact summary')

{
  const r = await POST('/parse/preview', {
    text: 'Call John at Acme Corp to discuss the Q2 project timeline review before next Wednesday'
  })
  assert('Preview returns 200', r.status === 200)
  assert('Has shortDescription field', 'shortDescription' in r.body,
    `keys: ${Object.keys(r.body).join(', ')}`)
  assert('shortDescription is a string', typeof r.body.shortDescription === 'string')
  assert('shortDescription is shorter than description',
    r.body.shortDescription && r.body.shortDescription.length < r.body.description.length,
    `short=${r.body.shortDescription?.length}, full=${r.body.description?.length}`)
  assert('shortDescription is concise (under 80 chars)',
    r.body.shortDescription && r.body.shortDescription.length <= 80,
    `length: ${r.body.shortDescription?.length}: "${r.body.shortDescription}"`)

  // Confirm and verify it's stored
  const c = await POST('/parse/confirm', r.body)
  assert('Confirm with shortDescription returns 201', c.status === 201)
  assert('Stored shortDescription on action', typeof c.body.shortDescription === 'string',
    `got: ${c.body.shortDescription}`)

  // GET it back
  const get = await GET(`/actions/${c.body.id}`)
  assert('GET returns shortDescription', typeof get.body.shortDescription === 'string')

  // Clean up
  await DEL(`/actions/${c.body.id}`)
}

// ─── TEST 2: Duplicate Detection via parse/confirm ──────────────────────────
section('Dedup Detection — flags potential duplicates on confirm')

{
  // Create an initial action
  const a1 = await POST('/actions', {
    description: 'Schedule dentist appointment for annual checkup',
    urgency: 'MEDIUM'
  })
  assert('Created first action', a1.status === 201)

  // Now parse and confirm something very similar
  const preview = await POST('/parse/preview', {
    text: 'Schedule dentist appointment for annual checkup cleaning'
  })
  assert('Similar preview returns 200', preview.status === 200)

  const confirm = await POST('/parse/confirm', {
    ...preview.body,
    rawInput: 'Schedule dentist appointment for annual checkup cleaning'
  })
  assert('Similar confirm returns 201', confirm.status === 201)

  // Check that the duplicate was flagged
  const action2 = await GET(`/actions/${confirm.body.id}`)
  const hasDupFlag = action2.body.needsClarification === true
  const missingInfo = action2.body.missingInfo ? JSON.parse(action2.body.missingInfo) : []
  const hasDupNote = missingInfo.some(m => m.includes('Possible duplicate'))
  assert('Duplicate flagged with needsClarification', hasDupFlag,
    `needsClarification: ${action2.body.needsClarification}`)
  assert('missingInfo mentions duplicate', hasDupNote,
    `missingInfo: ${JSON.stringify(missingInfo)}`)

  // Clean up both
  await DEL(`/actions/${a1.body.id}`)
  await DEL(`/actions/${confirm.body.id}`)
}

// ─── TEST 3: Dedup does NOT flag unrelated actions ──────────────────────────
section('Dedup Detection — does not flag unrelated actions')

{
  const a1 = await POST('/actions', {
    description: 'Buy new running shoes at the mall',
    urgency: 'LOW'
  })
  assert('Created unrelated action 1', a1.status === 201)

  const preview = await POST('/parse/preview', {
    text: 'Call the plumber about the kitchen sink leak'
  })
  const confirm = await POST('/parse/confirm', {
    ...preview.body,
    rawInput: 'Call the plumber about the kitchen sink leak'
  })
  assert('Unrelated confirm returns 201', confirm.status === 201)

  // Should NOT be flagged as duplicate
  const action2 = await GET(`/actions/${confirm.body.id}`)
  const missingInfo = action2.body.missingInfo ? JSON.parse(action2.body.missingInfo) : []
  const hasDupNote = missingInfo.some(m => m.includes('Possible duplicate'))
  assert('Unrelated action NOT flagged as duplicate', !hasDupNote,
    `missingInfo: ${JSON.stringify(missingInfo)}`)

  await DEL(`/actions/${a1.body.id}`)
  await DEL(`/actions/${confirm.body.id}`)
}

// ─── TEST 4: Siri endpoint includes shortDescription and dedup ──────────────
section('Siri Endpoint — shortDescription and dedup support')

{
  const r = await POST('/parse/siri', {
    text: 'Remind me to pick up the dry cleaning on Tuesday afternoon'
  })
  assert('Siri returns 201', r.status === 201)
  assert('Siri returns id', typeof r.body.id === 'number')
  assert('Siri returns description', typeof r.body.description === 'string')
  assert('Siri returns container', typeof r.body.container === 'string')

  // Verify shortDescription was stored (need to fetch full action)
  const full = await GET(`/actions/${r.body.id}`)
  assert('Siri action has shortDescription', typeof full.body.shortDescription === 'string',
    `got: ${full.body.shortDescription}`)

  await DEL(`/actions/${r.body.id}`)
}

// ─── TEST 5: Auto-Archive Group on All Complete ─────────────────────────────
section('Auto-Archive Group — archives when all actions complete')

{
  // Create a group
  const group = await POST('/groups', { name: 'Test Auto-Archive Group' })
  assert('Group created', group.status === 201 || group.status === 200,
    `status: ${group.status}, body: ${JSON.stringify(group.body)}`)
  const groupId = group.body.id

  // Create two actions in the group
  const a1 = await POST('/actions', {
    description: 'Auto-archive test action 1',
    urgency: 'LOW',
    groupId
  })
  const a2 = await POST('/actions', {
    description: 'Auto-archive test action 2',
    urgency: 'LOW',
    groupId
  })
  assert('Created action 1 in group', a1.status === 201)
  assert('Created action 2 in group', a2.status === 201)

  // Complete action 1 — group should NOT be archived yet
  const c1 = await POST(`/actions/${a1.body.id}/complete`)
  assert('Complete action 1 ok', c1.status === 200)

  // Check group is NOT archived
  const g1 = await GET(`/groups/${groupId}`)
  assert('Group not archived after partial complete',
    g1.body.archivedAt === null || g1.body.archivedAt === undefined,
    `archivedAt: ${g1.body.archivedAt}`)

  // Complete action 2 — group SHOULD be archived now
  const c2 = await POST(`/actions/${a2.body.id}/complete`)
  assert('Complete action 2 ok', c2.status === 200)

  // Check group IS archived
  const g2 = await GET(`/groups/${groupId}`)
  assert('Group archived after all actions complete',
    g2.body.archivedAt !== null && g2.body.archivedAt !== undefined,
    `archivedAt: ${g2.body.archivedAt}`)

  // Clean up
  await DEL(`/actions/${a1.body.id}`)
  await DEL(`/actions/${a2.body.id}`)
}

// ─── TEST 6: Bulk Complete Auto-Archives Group ──────────────────────────────
section('Bulk Complete — auto-archives group when all done')

{
  const group = await POST('/groups', { name: 'Bulk Archive Test Group' })
  const groupId = group.body.id

  const a1 = await POST('/actions', {
    description: 'Bulk archive test 1',
    urgency: 'LOW',
    groupId
  })
  const a2 = await POST('/actions', {
    description: 'Bulk archive test 2',
    urgency: 'LOW',
    groupId
  })

  // Bulk complete both
  const bulk = await POST('/actions/bulk/complete', {
    ids: [a1.body.id, a2.body.id]
  })
  assert('Bulk complete returns 200', bulk.status === 200,
    `status: ${bulk.status}, body: ${JSON.stringify(bulk.body)}`)

  // Check group is archived
  const g = await GET(`/groups/${groupId}`)
  assert('Group archived after bulk complete',
    g.body.archivedAt !== null && g.body.archivedAt !== undefined,
    `archivedAt: ${g.body.archivedAt}`)

  await DEL(`/actions/${a1.body.id}`)
  await DEL(`/actions/${a2.body.id}`)
}

// ─── TEST 7: Group Suggestions Endpoint ─────────────────────────────────────
section('Group Suggestions — endpoint works')

{
  const r = await GET('/groups/suggestions')
  assert('Suggestions returns 200', r.status === 200)
  assert('Returns suggestions object', r.body && typeof r.body === 'object',
    `type: ${typeof r.body}`)
  assert('Has suggestions array', Array.isArray(r.body.suggestions),
    `keys: ${Object.keys(r.body || {}).join(', ')}`)
}

// ─── TEST 8: Reparse includes shortDescription ─────────────────────────────
section('Reparse — updates shortDescription')

{
  const a = await POST('/actions', {
    description: 'Reparse test: call the accountant about quarterly taxes due next month',
    urgency: 'MEDIUM'
  })
  assert('Created action for reparse', a.status === 201)

  // Reparse it
  const reparse = await POST(`/parse/${a.body.id}/reparse`, {
    text: 'Call the accountant about quarterly taxes due April 15th'
  })
  assert('Reparse returns 200', reparse.status === 200)
  assert('Reparse has shortDescription', typeof reparse.body.shortDescription === 'string',
    `got: ${reparse.body.shortDescription}`)

  await DEL(`/actions/${a.body.id}`)
}

// ─── TEST 9: Location-aware parsing ─────────────────────────────────────────
section('Location Parsing — suggests Apple Reminders for geo triggers')

{
  const r = await POST('/parse/preview', {
    text: 'Buy detergent when I am near Costco'
  })
  assert('Location preview returns 200', r.status === 200)
  assert('suggestedAction mentions location/Reminders',
    r.body.suggestedAction &&
    (r.body.suggestedAction.toLowerCase().includes('reminder') ||
     r.body.suggestedAction.toLowerCase().includes('location') ||
     r.body.reasoning?.toLowerCase().includes('location')),
    `suggestedAction: "${r.body.suggestedAction}", reasoning: "${r.body.reasoning?.substring(0,100)}"`)
}

// ─── TEST 10: Container counts include flag counts ──────────────────────────
section('Container Counts — include needsClarification and needsTuning counts')

{
  const counts = await GET('/containers/counts')
  assert('Counts returns 200', counts.status === 200)
  assert('Has needsClarification count', typeof counts.body.needsClarification === 'number',
    `keys: ${Object.keys(counts.body).join(', ')}`)
  assert('Has needsTuning count', typeof counts.body.needsTuning === 'number',
    `keys: ${Object.keys(counts.body).join(', ')}`)
}

// ─── TEST 11: Swipe delete still works (soft delete) ────────────────────────
section('Soft Delete — still works for swipe-to-delete')

{
  const a = await POST('/actions', {
    description: 'Swipe delete test action',
    urgency: 'LOW'
  })
  assert('Created action', a.status === 201)

  const del = await DEL(`/actions/${a.body.id}`)
  assert('Soft delete returns 200', del.status === 200)

  // Verify it's archived
  const after = await GET(`/actions/${a.body.id}`)
  assert('Archived after soft delete', after.body.archivedAt !== null,
    `archivedAt: ${after.body.archivedAt}`)
}

// ─── TEST 12: Feed filters by flag ──────────────────────────────────────────
section('Feed — flag filtering')

{
  // Create an action with needsClarification
  const a = await POST('/actions', {
    description: 'Clarification flag test action',
    urgency: 'LOW'
  })
  // Update to set needsClarification
  await PUT(`/actions/${a.body.id}`, {
    needsClarification: true,
    version: a.body.version
  })

  // Query with flag filter (uses needsClarification=true query param)
  const flagged = await GET('/actions?needsClarification=true')
  assert('Flag filter returns 200', flagged.status === 200)
  assert('Flag filter returns array', Array.isArray(flagged.body))
  // All results should have the flag
  const allFlagged = (flagged.body || []).every(a => a.needsClarification === true)
  assert('All flag-filtered results have needsClarification', allFlagged || flagged.body.length === 0)

  await DEL(`/actions/${a.body.id}`)
}

// ─── TEST 13: Expanded Gmail Pre-Filter Patterns ────────────────────────────
section('Gmail Pre-Filter — expanded pattern coverage')

{
  // We can't directly test the scanner without real emails,
  // but we can verify the endpoint still works
  const status = await GET('/sources/gmail/status')
  assert('Gmail status endpoint works', status.status === 200)

  // Test that manual scan trigger works (if connected)
  if (status.body.connected) {
    const scan = await POST('/system/run-triggers')
    assert('Run triggers returns 200', scan.status === 200)
  }
}

// ─── FINAL REPORT ──────────────────────────────────────────────────────────

console.log('\n' + '═'.repeat(60))
console.log('  ACTION MANAGER v2.3 — NEW FEATURE TEST RESULTS')
console.log('═'.repeat(60))
for (const r of results) console.log(r)
console.log('\n' + '─'.repeat(60))
console.log(`  Total:   ${passed + failed}`)
console.log(`  Passed:  ${passed}  ✓`)
console.log(`  Failed:  ${failed}  ✗`)
console.log('─'.repeat(60))

if (failed > 0) process.exit(1)
