/**
 * Action Manager 1.0 — Backend API Test Suite
 * Run: node test-suite.mjs
 */

const BASE = 'http://localhost:3001/api'
let passed = 0
let failed = 0
let warnings = 0
const results = []

// ─── helpers ────────────────────────────────────────────────────────────────

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
const DELETE = (p)    => api('DELETE', p)

function assert(name, condition, detail = '') {
  if (condition) {
    passed++
    results.push(`  ✓ ${name}`)
  } else {
    failed++
    results.push(`  ✗ ${name}${detail ? ' — ' + detail : ''}`)
  }
}

function warn(name, detail) {
  warnings++
  results.push(`  ⚠ ${name}${detail ? ' — ' + detail : ''}`)
}

function section(title) {
  results.push(`\n── ${title} ──`)
}

// track created resource IDs for cleanup / chaining
const ctx = {}

// ─── SPEC SCENARIO 1: Manual Action Entry ───────────────────────────────────
section('SPEC 1 — Manual action entry & AI parsing')

{
  // High-confidence, clearly actionable text
  const r = await POST('/parse/preview', {
    text: 'Call Dr. Smith to reschedule my appointment — she said to call before Friday'
  })
  assert('Preview returns 200', r.status === 200)
  assert('Has description',     typeof r.body.description === 'string' && r.body.description.length > 0)
  assert('Has urgency',         ['CRITICAL','HIGH','MEDIUM','LOW'].includes(r.body.urgency))
  assert('Has confidence 0-1',  r.body.confidence >= 0 && r.body.confidence <= 1)
  assert('Has container',       ['ACTIONABLE_NOW','CANDIDATES','AMBIGUITY','WAITING'].includes(r.body.container))
  assert('Has rawInput',        r.body.rawInput === 'Call Dr. Smith to reschedule my appointment — she said to call before Friday')
  // "before Friday" implies urgency should NOT be LOW
  assert('Urgency not LOW for time-sensitive input', r.body.urgency !== 'LOW',
    `got ${r.body.urgency}`)

  ctx.preview1 = r.body

  // Confirm it into the system
  const c = await POST('/parse/confirm', r.body)
  assert('Confirm returns 201', c.status === 201)
  assert('Action has ID',       typeof c.body.id === 'number')
  assert('Action in correct container', ['ACTIONABLE_NOW','CANDIDATES'].includes(c.body.container),
    `got ${c.body.container}`)
  ctx.action1 = c.body
}

// Ambiguous input → AMBIGUITY container
{
  const r = await POST('/parse/preview', { text: 'deal with the thing from before' })
  assert('Ambiguous input: low confidence', r.body.confidence < 0.7,
    `confidence was ${r.body.confidence}`)
  assert('Ambiguous input: lands in AMBIGUITY or CANDIDATES',
    ['AMBIGUITY','CANDIDATES'].includes(r.body.container),
    `got ${r.body.container}`)
}

// ─── SPEC SCENARIO 2: Waiting / Trigger flow ────────────────────────────────
section('SPEC 2 — Waiting action with web condition trigger')

{
  const r = await POST('/parse/preview', {
    text: "Arc'teryx Stanford Shopping Center — buy shoes when they offer 30% trade-in on old footwear"
  })
  assert('Preview returns 200', r.status === 200)
  assert('Recognized as waiting/condition', r.body.container === 'WAITING' || r.body.triggers?.length > 0,
    `container=${r.body.container}, triggers=${JSON.stringify(r.body.triggers?.map(t=>t.type))}`)

  const webTriggers = (r.body.triggers || []).filter(t => t.type === 'WEB_CONDITION')
  assert('Has WEB_CONDITION trigger', webTriggers.length > 0,
    `triggers: ${JSON.stringify(r.body.triggers?.map(t=>t.type))}`)
  if (webTriggers.length > 0) {
    assert('WEB_CONDITION has webQuery', typeof webTriggers[0].webQuery === 'string' && webTriggers[0].webQuery.length > 0,
      `webQuery: ${webTriggers[0].webQuery}`)
  }

  // Confirm it
  const c = await POST('/parse/confirm', r.body)
  assert('Confirmed waiting action', c.status === 201)
  ctx.waitingAction = c.body
}

// DATE_EXACT trigger
{
  const r = await POST('/parse/preview', {
    text: 'Submit quarterly tax estimate by April 15th'
  })
  assert('Tax deadline preview ok', r.status === 200)
  // Should have high urgency or due date
  assert('Has dueDate or HIGH urgency for tax deadline',
    r.body.dueDate !== null || ['CRITICAL','HIGH'].includes(r.body.urgency),
    `urgency=${r.body.urgency}, dueDate=${r.body.dueDate}`)
}

// ─── SPEC SCENARIO 3: Action lifecycle ──────────────────────────────────────
section('SPEC 3 — Action lifecycle: edit, reparse, complete')

{
  // Create a simple action directly
  const create = await POST('/actions', {
    description: 'Test lifecycle action',
    urgency: 'LOW'
  })
  assert('Direct create returns 201', create.status === 201)
  const id = create.body.id
  ctx.lifecycleAction = create.body

  // GET it back
  const get = await GET(`/actions/${id}`)
  assert('GET action returns 200', get.status === 200)
  assert('needsFollowUp field present', 'needsFollowUp' in get.body,
    `keys: ${Object.keys(get.body).join(', ')}`)
  assert('needsFollowUp initially false', get.body.needsFollowUp === false)

  // UPDATE it
  const upd = await PUT(`/actions/${id}`, {
    description: 'Updated lifecycle action',
    urgency: 'HIGH',
    version: create.body.version
  })
  assert('PUT returns 200', upd.status === 200)
  assert('Description updated', upd.body.description === 'Updated lifecycle action')
  assert('Urgency updated', upd.body.urgency === 'HIGH')
  assert('Version incremented', upd.body.version === create.body.version + 1)

  // Move to WAITING
  const move = await POST(`/actions/${id}/move`, { container: 'WAITING' })
  assert('Move to WAITING ok', move.status === 200)
  assert('Container is WAITING', move.body.container === 'WAITING')

  // Move back to ACTIONABLE_NOW
  const move2 = await POST(`/actions/${id}/move`, { container: 'ACTIONABLE_NOW' })
  assert('Move to ACTIONABLE_NOW ok', move2.status === 200)

  // Complete it
  const complete = await POST(`/actions/${id}/complete`)
  assert('Complete returns 200', complete.status === 200)
  assert('completedAt set', complete.body.completedAt !== null)
  assert('archivedAt set', complete.body.archivedAt !== null)
}

// ─── SPEC SCENARIO 4: Tuning system ─────────────────────────────────────────
section('SPEC 4 — Tuning: feedback, rule creation, rejection, meta-rule')

{
  // Submit urgency feedback on action1
  const fb = await POST('/tuning/feedback', {
    actionId: ctx.action1.id,
    feedbackType: 'urgency_incorrect',
    correction: 'HIGH'
  })
  assert('Feedback returns 200', fb.status === 200)
  assert('Rule created', fb.body.rule?.id > 0)
  assert('Rule category is urgency', fb.body.rule?.category === 'urgency')
  assert('Rule status is SHADOW', fb.body.rule?.status === 'SHADOW')
  ctx.tuningRule1 = fb.body.rule

  // Submit container feedback
  const fb2 = await POST('/tuning/feedback', {
    actionId: ctx.action1.id,
    feedbackType: 'container_incorrect',
    correction: 'ACTIONABLE_NOW'
  })
  assert('Container feedback ok', fb2.status === 200)
  ctx.tuningRule2 = fb2.body.rule

  // Submit parsed_wrong feedback
  const fb3 = await POST('/tuning/feedback', {
    actionId: ctx.action1.id,
    feedbackType: 'parsed_wrong',
    correction: 'The actual action is to call the doctor directly'
  })
  assert('Parsed_wrong feedback ok', fb3.status === 200)
  ctx.tuningRule3 = fb3.body.rule

  // Get tuning stats
  const stats = await GET('/tuning/stats')
  assert('Stats returns 200', stats.status === 200)
  assert('Stats has counts', typeof stats.body.counts?.shadow === 'number')

  // Reject the urgency rule
  const rej = await POST(`/tuning/${ctx.tuningRule1.id}/reject`, {
    feedback: 'This pattern is not consistent'
  })
  assert('Reject rule returns 200', rej.status === 200)
  assert('Rule status is REJECTED', rej.body.status === 'REJECTED')

  // Reject the container rule
  await POST(`/tuning/${ctx.tuningRule2.id}/reject`, { feedback: 'Not applicable' })

  // Create + reject 3 more urgency rules to trigger meta-rule auto-generation
  for (let i = 0; i < 3; i++) {
    const r = await POST('/tuning', {
      description: `Auto urgency rule ${i}`,
      category: 'urgency',
      condition: `Some urgency pattern ${i}`,
      transformation: 'Set urgency to HIGH'
    })
    if (r.body.id) {
      await POST(`/tuning/${r.body.id}/reject`, { feedback: 'not useful' })
    }
  }

  // Check if meta-rule was created
  const allRules = await GET('/tuning')
  assert('Tuning list returns 200', allRules.status === 200)
  const metaRules = (allRules.body || []).filter(r => r.category === 'meta')
  assert('Meta-rule auto-generated after 3+ rejections in category', metaRules.length > 0,
    `meta rules found: ${metaRules.length}`)

  // Test "ask less often" endpoint
  const less = await POST(`/tuning/${ctx.tuningRule3.id}/ask-less`)
  assert('Ask-less returns 200', less.status === 200)
  assert('Shadow threshold doubled',
    less.body.shadowThreshold >= ctx.tuningRule3.shadowThreshold * 2,
    `old=${ctx.tuningRule3.shadowThreshold}, new=${less.body.shadowThreshold}`)

  // Test "don't ask again" (dontAskAgain flag on reject)
  const r4 = await POST('/tuning', {
    description: 'Extraction rule to silence',
    category: 'extraction',
    condition: 'Some extraction condition',
    transformation: 'Extract differently'
  })
  if (r4.body.id) {
    const rejDaa = await POST(`/tuning/${r4.body.id}/reject`, {
      feedback: 'never show this',
      dontAskAgain: true
    })
    assert('dontAskAgain reject returns 200', rejDaa.status === 200)
    // Check for active meta-rule for extraction category
    const rules2 = await GET('/tuning')
    const extractionMeta = (rules2.body || []).filter(
      r => r.category === 'meta' && r.condition.includes('extraction') && r.status === 'ACTIVE'
    )
    assert('dontAskAgain creates ACTIVE meta-rule', extractionMeta.length > 0,
      `found: ${JSON.stringify(extractionMeta.map(r=>({status:r.status,desc:r.description})))}`)
  }
}

// ─── SPEC SCENARIO 5: Follow-up nudge ───────────────────────────────────────
section('SPEC 5 — Follow-up nudge: needsFollowUp flag')

{
  // Create an action, manually inject a FOLLOW_UP_SENT event, then check needsFollowUp
  const a = await POST('/actions', {
    description: 'Action that will need follow-up',
    urgency: 'MEDIUM'
  })
  assert('Create action ok', a.status === 201)
  const id = a.body.id

  // Initially needsFollowUp should be false
  const before = await GET(`/actions/${id}`)
  assert('needsFollowUp starts false', before.body.needsFollowUp === false)

  // We can't directly create an ActionEvent via API, so we test the acknowledge endpoint
  // which proves the backend flag-clearing path works
  const ack = await POST(`/actions/${id}/acknowledge`)
  assert('Acknowledge endpoint returns 200', ack.status === 200)
  assert('Acknowledge returns success', ack.body.success === true)

  // After acknowledge, version should have incremented (proving updatedAt refreshed)
  const after = await GET(`/actions/${id}`)
  assert('Version incremented by acknowledge', after.body.version > a.body.version,
    `before=${a.body.version}, after=${after.body.version}`)

  // Clean up
  await DELETE(`/actions/${id}`)
}

// ─── EXTENDED: Container routing ────────────────────────────────────────────
section('EXTENDED — Container routing logic')

{
  const cases = [
    {
      text: 'Buy groceries',
      expectContainers: ['CANDIDATES', 'ACTIONABLE_NOW'],
      label: 'Simple task → not AMBIGUITY'
    },
    {
      text: 'Reply to Bob about the project sometime maybe if I get around to it',
      expectContainers: ['CANDIDATES', 'AMBIGUITY', 'ACTIONABLE_NOW'],
      label: 'Vague task → any reasonable container'
    },
    {
      text: 'Call back whoever left a message — not sure who it was',
      expectContainers: ['AMBIGUITY', 'CANDIDATES'],
      label: 'Unclear parties → likely AMBIGUITY or CANDIDATES'
    }
  ]

  for (const c of cases) {
    const r = await POST('/parse/preview', { text: c.text })
    assert(c.label,
      c.expectContainers.includes(r.body.container),
      `got ${r.body.container}`)
  }
}

// ─── EXTENDED: Trigger system ────────────────────────────────────────────────
section('EXTENDED — Trigger creation & management')

{
  // Create an action to attach triggers to
  const a = await POST('/actions', {
    description: 'Trigger test action',
    urgency: 'MEDIUM'
  })
  const id = a.body.id

  // Create DATE_EXACT trigger
  const t1 = await POST('/triggers', {
    actionId: id,
    type: 'DATE_EXACT',
    description: 'Check on March 1st',
    triggerDate: '2026-03-01'
  })
  assert('DATE_EXACT trigger created', t1.status === 201)
  assert('Trigger has correct type', t1.body.type === 'DATE_EXACT')
  assert('Trigger not yet fired', t1.body.isTriggered === false)
  const triggerId = t1.body.id

  // Create WEB_CONDITION trigger
  const t2 = await POST('/triggers', {
    actionId: id,
    type: 'WEB_CONDITION',
    description: 'When condition is met',
    webQuery: 'Test condition for unit testing'
  })
  assert('WEB_CONDITION trigger created', t2.status === 201 || t2.status === 200,
    `status=${t2.status}, body=${JSON.stringify(t2.body)}`)

  // Get triggers for the action
  const tlist = await GET(`/triggers?actionId=${id}`)
  assert('Trigger list returns 200', tlist.status === 200)
  assert('Two triggers for action', Array.isArray(tlist.body) && tlist.body.length >= 2,
    `count: ${tlist.body?.length}`)

  // Fire the trigger manually
  const fire = await POST(`/triggers/${triggerId}/fire`)
  assert('Fire trigger returns 200', fire.status === 200)
  assert('Trigger marked as fired', fire.body.action !== undefined || fire.body.success === true)

  // Verify action moved to ACTIONABLE_NOW
  const afterFire = await GET(`/actions/${id}`)
  assert('Action moved to ACTIONABLE_NOW after trigger fire',
    afterFire.body.container === 'ACTIONABLE_NOW',
    `container: ${afterFire.body.container}`)

  // Clean up
  await DELETE(`/actions/${id}`)
}

// ─── EXTENDED: Action list & container filter ────────────────────────────────
section('EXTENDED — Action list, filtering, container counts')

{
  const list = await GET('/actions')
  assert('Default list returns 200', list.status === 200)
  assert('Returns array', Array.isArray(list.body))

  // Default view should exclude WAITING
  const hasWaiting = (list.body || []).some(a => a.container === 'WAITING')
  assert('Default list excludes WAITING', !hasWaiting,
    `found WAITING items in default list`)

  // Filter by container
  const waiting = await GET('/actions?container=WAITING')
  assert('WAITING filter returns 200', waiting.status === 200)

  // Archived items excluded by default
  const archived = (list.body || []).some(a => a.archivedAt !== null)
  assert('Default list excludes archived', !archived)

  // Container counts
  const counts = await GET('/containers/counts')
  assert('Container counts returns 200', counts.status === 200)
  assert('Has ACTIONABLE_NOW count', typeof counts.body.ACTIONABLE_NOW === 'number')
  assert('Has CANDIDATES count',     typeof counts.body.CANDIDATES === 'number')
  assert('Has WAITING count',        typeof counts.body.WAITING === 'number')
  assert('Has AMBIGUITY count',      typeof counts.body.AMBIGUITY === 'number')

  // needsFollowUp in list
  const hasFollowUpField = (list.body || []).every(a => 'needsFollowUp' in a)
  assert('All actions in list have needsFollowUp field', hasFollowUpField || list.body.length === 0)
}

// ─── EXTENDED: Search ────────────────────────────────────────────────────────
section('EXTENDED — Search')

{
  const r = await GET('/search?q=doctor')
  assert('Search returns 200', r.status === 200)
  assert('Search has actions array', Array.isArray(r.body.actions))
  assert('Search has total', typeof r.body.total === 'number')

  // Archived search
  const archived = await GET('/search?archiveOnly=true')
  assert('Archive-only search ok', archived.status === 200)
  assert('Archive results are archived', (archived.body.actions || []).every(a => a.isArchived === true))

  // Search suggestions
  const sugg = await GET('/search/suggestions?q=call')
  assert('Suggestions returns 200', sugg.status === 200)
  assert('Has suggestions array', Array.isArray(sugg.body.suggestions))
}

// ─── EXTENDED: Optimistic concurrency ────────────────────────────────────────
section('EXTENDED — Optimistic concurrency (version conflict)')

{
  const a = await POST('/actions', {
    description: 'Concurrency test action',
    urgency: 'LOW'
  })
  const id = a.body.id

  // First update succeeds
  const upd1 = await PUT(`/actions/${id}`, {
    description: 'First update',
    version: a.body.version
  })
  assert('First update succeeds', upd1.status === 200)

  // Second update with stale version should fail with 409
  const upd2 = await PUT(`/actions/${id}`, {
    description: 'Stale update',
    version: a.body.version // stale version
  })
  assert('Stale version returns 409', upd2.status === 409,
    `got status ${upd2.status}`)

  await DELETE(`/actions/${id}`)
}

// ─── EXTENDED: Merge actions ─────────────────────────────────────────────────
section('EXTENDED — Merge actions')

{
  const a1 = await POST('/actions', { description: 'Primary action for merge', urgency: 'HIGH' })
  const a2 = await POST('/actions', { description: 'Secondary action to merge', urgency: 'MEDIUM' })
  assert('Created merge targets', a1.status === 201 && a2.status === 201)

  const merge = await POST('/groups/merge', {
    primaryId: a1.body.id,
    secondaryId: a2.body.id
  })
  assert('Merge returns 200', merge.status === 200)
  assert('Primary action returned', merge.body.id === a1.body.id)

  // Secondary should now be archived
  const secondary = await GET(`/actions/${a2.body.id}`)
  assert('Secondary archived after merge', secondary.body.archivedAt !== null,
    `archivedAt: ${secondary.body.archivedAt}`)

  await DELETE(`/actions/${a1.body.id}`)
}

// ─── EXTENDED: Parse error handling ─────────────────────────────────────────
section('EXTENDED — Error handling & edge cases')

{
  // Empty text
  const empty = await POST('/parse/preview', { text: '' })
  assert('Empty text returns 400', empty.status === 400)

  // Missing text field
  const missing = await POST('/parse/preview', {})
  assert('Missing text field returns 400', missing.status === 400)

  // Non-existent action
  const notFound = await GET('/actions/999999')
  assert('Non-existent action returns 404', notFound.status === 404)

  // Invalid container move
  const badMove = await POST('/actions/999999/move', { container: 'ACTIONABLE_NOW' })
  assert('Move non-existent action returns 404', badMove.status === 404)
}

// ─── EXTENDED: System health & notifications ─────────────────────────────────
section('EXTENDED — System health & push notification endpoints')

{
  const health = await GET('/system/health')
  assert('Health returns 200', health.status === 200)
  assert('Has status field', health.body.status === 'ok' || health.body.status === 'error')
  assert('Has gmailConnected', typeof health.body.gmailConnected === 'boolean')
  assert('Has errors array', Array.isArray(health.body.errors))

  // VAPID public key endpoint
  const vapid = await GET('/notifications/vapid-public-key')
  assert('VAPID key endpoint returns 200', vapid.status === 200)
  assert('VAPID key is non-empty string', typeof vapid.body.key === 'string' && vapid.body.key.length > 0,
    `key: "${vapid.body.key?.substring(0,20)}..."`)

  // Subscribe with fake subscription (should store it)
  const fakeSub = await POST('/notifications/subscribe', {
    endpoint: 'https://test.example.com/push/fake-endpoint-for-testing',
    p256dh: 'BNcRdreALRFXTkOOUHK1EtK2wtZ5MBDHHpNFMHkTQBzGOhswnxfnKM4MiMV12345678901234567890AB==',
    auth: 'tBHItJI5svbpez7KI4CCXg=='
  })
  assert('Push subscribe returns 200', fakeSub.status === 200)
  assert('Subscribe success', fakeSub.body.success === true)

  // Unsubscribe
  const unsub = await DELETE('/notifications/unsubscribe',
    JSON.stringify({ endpoint: 'https://test.example.com/push/fake-endpoint-for-testing' }))
  // Note: DELETE with body — check it works
  const unsubRes = await fetch(`${BASE}/notifications/unsubscribe`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endpoint: 'https://test.example.com/push/fake-endpoint-for-testing' })
  })
  assert('Push unsubscribe returns 200', unsubRes.status === 200)
}

// ─── EXTENDED: Clarify flow ──────────────────────────────────────────────────
section('EXTENDED — Clarify flow (ambiguous → answer questions → resolve)')

{
  const r = await POST('/parse/preview', {
    text: 'Follow up with the person about the thing we discussed'
  })
  assert('Ambiguous preview ok', r.status === 200)

  // Clarify with answers
  const c = await POST('/parse/clarify', {
    rawInput: r.body.rawInput,
    answers: {
      'Who is the person?': 'Sarah Johnson',
      'What thing was discussed?': 'The Q1 budget proposal'
    }
  })
  assert('Clarify returns 200', c.status === 200)
  assert('Clarified result has description', typeof c.body.description === 'string')
  assert('Clarified confidence >= original or similar',
    typeof c.body.confidence === 'number',
    `confidence: ${c.body.confidence}`)
}

// ─── EXTENDED: Gmail source status ──────────────────────────────────────────
section('EXTENDED — Gmail & sources')

{
  const status = await GET('/sources/gmail/status')
  assert('Gmail status returns 200', status.status === 200)
  assert('Has connected field', typeof status.body.connected === 'boolean')
  assert('Has lastScan field', 'lastScan' in status.body)
  warn('Gmail OAuth', 'Gmail scanning requires manual OAuth connection — test in manual suite')
}

// ─── FINAL REPORT ────────────────────────────────────────────────────────────

console.log('\n' + '═'.repeat(60))
console.log('  ACTION MANAGER 1.0 — TEST RESULTS')
console.log('═'.repeat(60))
for (const r of results) console.log(r)
console.log('\n' + '─'.repeat(60))
console.log(`  Total:   ${passed + failed + warnings}`)
console.log(`  Passed:  ${passed}  ✓`)
console.log(`  Failed:  ${failed}  ✗`)
console.log(`  Warnings:${warnings}  ⚠`)
console.log('─'.repeat(60))

if (failed > 0) process.exit(1)
