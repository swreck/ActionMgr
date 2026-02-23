# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Action Manager 1.0 — a personal PWA for tracking commitments. You speak naturally ("Call Mom before Friday"), the AI parses it into a structured action, and the app routes it to the right place and reminds you when it's actionable.

## Running the app

Both servers must run simultaneously. Open two terminal tabs:

```bash
# Backend (port 3001)
cd backend && npm run dev

# Frontend (port 5173)
cd frontend && npm run dev
```

Frontend proxies `/api/*` to the backend via Vite config.

## Railway (production)

Railway CLI is installed and linked to the "exciting-solace" project. Use `railway logs`, `railway status`, etc. directly — don't ask the user to check the dashboard or copy logs.

## Key commands

```bash
# Type-check (run from the respective directory)
cd backend && npx tsc --noEmit
cd frontend && npx tsc --noEmit

# Database
cd backend && npm run db:push       # push schema changes to Neon
cd backend && npm run db:studio     # open Prisma Studio

# Run the API test suite (backend must be running)
node test-suite.mjs                 # from project root
```

## Architecture

**Backend**: Express 5 + TypeScript + Prisma ORM → PostgreSQL (Neon cloud).
`backend/src/index.ts` is the entry point. All routes are in `backend/src/routes/`, services in `backend/src/services/`.

**Frontend**: React 19 + TypeScript + Vite. Single-page app. Pages in `frontend/src/pages/`, reusable components in `frontend/src/components/`, all API calls go through `frontend/src/api/client.ts`.

**AI**: Anthropic SDK. `claude-haiku-4-5-20251001` for parsing, `claude-sonnet-4-6` for web condition checks. Parser lives in `backend/src/services/ai/parser.ts`. All real parses go through `backend/src/services/ai/tuning-parser.ts` which injects active tuning rules and tracks shadow rule outcomes.

## Container system

Actions flow through named containers (never deleted, only moved):
- `CANDIDATES` — newly parsed, awaiting user confirmation ("unconfirmed" in UI)
- `ACTIONABLE_NOW` — confirmed, ready to act on
- `WAITING` — blocked on a trigger (date, web condition, email reply)
- `AMBIGUITY` — AI couldn't parse confidently, needs user clarification
- `TUNING` — flagged for AI feedback/correction

Soft delete (`DELETE /api/actions/:id`) sets `archivedAt`. Hard delete (`DELETE /api/actions/:id/purge`) permanently removes with cascades.

## AI parsing flow

1. `QuickCapture` component calls `POST /api/parse/preview` — returns structured preview with description, urgency, container, due date, confidence, AI reasoning
2. User reviews; if questions exist, `POST /api/parse/clarify` refines
3. On confirm: `POST /api/parse/confirm` saves the action
4. Optionally: `POST /api/parse/:id/reparse` re-runs AI on existing action

The AI does **not** receive today's day-of-week — only the date. Known issue: it sometimes miscalculates the day name, affecting relative date parsing ("before Friday"). Fix: inject `dayName` alongside `currentDate` in the system prompt.

## Tuning / shadow mode

`TuningRule` has 4 statuses: `SHADOW → PROPOSED → ACTIVE | REJECTED`.

- `SHADOW`: rule runs silently alongside real parses; outcomes tracked
- `PROPOSED`: reached threshold with ≥80% success rate; shown to user for approval
- `ACTIVE`: injected into the AI system prompt for every parse
- `REJECTED`: ignored; 3+ rejections in same category auto-creates a "stop suggesting X" meta-rule

Shadow tracking uses keyword matching (not extra AI calls) in `tuning-parser.ts`.

## Triggers

Five types in `TriggerType` enum: `DATE_EXACT`, `DATE_WINDOW`, `EMAIL_REPLY`, `MANUAL_CHECK`, `WEB_CONDITION`.

Scheduler (`backend/src/jobs/scheduler.ts`) runs:
- Trigger check: every hour — fires due date triggers, checks web conditions (max once per 4h per trigger)
- Follow-up check: 9 AM daily — nudges stale ACTIONABLE_NOW actions by urgency interval
- Gmail scan: every 4 hours

`needsFollowUp` is a **computed virtual field** (not stored in DB). It's calculated per-request by checking if the most recent `FOLLOW_UP_SENT` event is newer than `action.updatedAt`.

Manual triggers (for testing / on-demand): `POST /api/system/run-followups` and `POST /api/system/run-triggers`. Exposed as buttons in Settings UI.

## Key gotchas

- **Express route ordering**: static routes (`/stats`, `/pending`) must be defined before parameterized routes (`/:id`) or Express treats the static segment as the ID param.
- **Optimistic concurrency**: every `PUT /api/actions/:id` requires `version` in the body; returns 409 if stale.
- **Date timezone**: dates stored as UTC in Neon, displayed in browser local time — can appear one day earlier than intended for users in UTC-offset timezones. Not yet fixed.
- **VAPID keys**: auto-generated on first boot and stored in the `SystemSetting` table. Do not regenerate without also clearing all stored `PushSubscription` records.
- **Test suite creates real data**: after running `test-suite.mjs`, clean up with a targeted script or Prisma Studio. The test suite has been known to trigger the "3+ rejections → meta-rule" logic in tuning.
- **Gmail OAuth**: `GMAIL_CLIENT_ID` and `GMAIL_CLIENT_SECRET` must be set in `backend/.env` before Gmail integration works. These come from Google Cloud Console (OAuth 2.0 web application credentials with redirect URI `http://localhost:3001/api/sources/gmail/callback`).
- **Gmail scan scope**: Scans all inbox emails (read and unread) from the last 14 days, max 100 per query. Already-processed emails are skipped via `Source.emailId` deduplication — safe to re-scan.
- **Already-completed actions from scan**: Gmail scan has no way to know what the user already did. Accepted pattern: use the Complete button on scanned items that were already done before the system knew about them. Sequence is imperfect but the outcome (marked complete) is accurate.

## Known false positive patterns (future tuning rules to build)

These were observed during initial Gmail scan triage. Each should eventually become a tuning rule or parser improvement:

1. **Unsolicited asks** — donation requests, vendor marketing with imperative language ("review this," "update your settings"). Sender has no relationship with user. Signal: unknown sender + no prior thread.
2. **Community broadcasts** — Nextdoor, mailing lists, "does anyone know..." emails. Not directed at user specifically. Signal: mailing list headers, neighborhood/community sender domains.
3. **Self-addressed actions** — AI suggests "report issues to Ken at krosen@..." where Ken is the user. If the action recipient matches the user's own email, it's a misparse. Signal: suggested next step contains user's own email address.
4. **Already-completed thread actions** — Long email threads where commitments were made and fulfilled before the scan. No easy automated fix; requires user triage. Consider a post-scan review UI rather than dumping all into Candidates.
5. ~~**Source attribution missing in UI**~~ — DONE (v2). Detail view shows sender/subject/date + "View in Gmail" link.
6. ~~**Thread deduplication**~~ — DONE (v2). Scanner checks for existing action with same threadId or similar description/sender.
9. ~~**"No actionable commitment" bug**~~ — DONE (v2). Scanner skips if commitmentConfidence < 0.3 or description matches.
8. ~~**Newsletter/digest false positives**~~ — DONE (v2.3). Expanded pre-filter with mailing list headers (List-Unsubscribe, List-Id, Precedence), 28 skip patterns, automated sender prefixes.
7. ~~**Bulk actions**~~ — DONE (v2). Multi-select mode on feed with bulk Complete/Delete/Move.
10. ~~**Date entry UX**~~ — DONE (v2). Native date pickers throughout.
12. ~~**Feedback input should be a picker**~~ — DONE (v2). Dropdown for urgency (4 values) and container (4 containers).
14. ~~**Tuning rule title is generic**~~ — DONE (v2). Uses action description as title.
15. ~~**Tuning rule cards don't expand / no delete access**~~ — DONE (v2). Expandable detail view + inline delete.
13. ~~**TUNING should be a flag, not a container**~~ — DONE (v2). needsTuning boolean flag, action stays in its container.
11. ~~**Container badge stale after move**~~ — DONE (v2). Immediate refetch after container changes.

## v2 Punch List (approved for build)

Priority order: schema → categorization → flags → UI → groups. Each item marked [ ] pending, [x] done.

### Schema changes
- [x] P1: Remove TUNING from Container enum
- [x] P2: Add `needsClarification` Boolean to Action (default false)
- [x] P3: Add `needsTuning` Boolean to Action (default false)
- [x] P4: Add `commitmentConfidence` Float to Action (alongside existing `confidence` which becomes parseConfidence)
- [x] P5: Add `archivedAt` DateTime? to ActionGroup (for completed groups)
- [x] P6: Run db:push after all schema changes

### Categorization / routing fixes
- [x] P7: Auto-route by due date: if dueDate >21 days out → WAITING + auto-create DATE_EXACT trigger (set triggerDate to 21 days before dueDate)
- [x] P8: Vague date resolution: "April" = April 1, "2027" = Jan 1, "Fall" = Sept 21, etc. — enforce in parser
- [x] P9: Enforce real triggerDate on all date triggers (no prose-only descriptions without computable date)
- [x] P10: Split confidence: AI returns commitmentConfidence + parseConfidence. Route/filter based on commitmentConfidence
- [x] P11: Manual input confirm → goes directly to AI-suggested container (not always CANDIDATES)
- [x] P12: Kill "no actionable commitment" bug: skip action creation in scanner if description matches or commitmentConfidence < 0.3
- [x] P13: Gmail thread deduplication: check for existing action with same threadId or similar description/sender before creating
- [ ] P14: Ongoing dedup detection: when new action looks like existing one, flag with needsClarification and ask user

### Clarify / Tuning flag migration
- [x] P15: Clarify = flag (needsClarification), not container. Action stays in NOW/WAITING. Clarify badge shows count of flagged actions
- [x] P16: Tuning = flag (needsTuning), not container. Action stays in its container. Tuning badge shows count of flagged actions
- [x] P17: Feedback on action: apply correction immediately (update urgency/container in place), set needsTuning=true, create tuning rule with action description as title
- [x] P18: WAITING safety net: scheduler checks for WAITING actions with no trigger or no triggerDate → set needsClarification=true

### UI fixes
- [x] P19: Source attribution: show sender/subject/date inline on Gmail-sourced action cards + "View in Gmail" link in detail view
- [x] P20: Bulk actions: multi-select mode on feed (checkbox per card, select-all, bulk Complete/Delete/Move)
- [x] P21: Date pickers: replace all YYYY-MM-DD text inputs with native date pickers
- [x] P22: Feedback pickers: dropdown for urgency correction (4 values) and container correction (4 containers)
- [x] P23: Badge staleness: refetch container counts immediately after any container change (not 30s polling)
- [x] P24: Tuning rule titles: use action description instead of "Feedback on action #N"
- [x] P25: Tuning rule cards: expandable detail view + inline delete button
- [ ] P26: Audit and fix inconsistent UI patterns (same action done multiple ways = bug)

### Action Groups enhancements
- [ ] P27: Accepted/manual groups at top, AI-suggested groups collapsed at bottom
- [ ] P28: Group suggestions appear as Review items (cards in CANDIDATES)
- [ ] P29: Add actions to group via searchable checklist modal
- [ ] P30: Quick remove (X) on actions within a group
- [ ] P31: Progress indicator per group ("3 of 6 complete")
- [ ] P32: Completing all actions → archive group (set archivedAt, preserve history)

### v2.3 additions (completed)
- [x] Gmail pre-filter: expanded skip patterns, mailing list header detection, automated sender prefixes
- [x] Feed card density: AI-generated `shortDescription` field, removed suggestedAction from feed cards
- [x] Text selection: user-select on description without triggering card navigation
- [x] Swipe left to delete: touch gesture on action cards
- [x] Location-aware parsing: location triggers suggest Apple Reminders
- [x] Intelligent clarification: `missingInfo` stored on Action, shown in detail view; parser excludes contact info from missingInfo
- [x] Nav cleanup: removed AMBIGUITY container button, flag badges appear only when count > 0

### Tuning Option A (FUTURE — do not build now, hold for next session)
- Behavioral learning: track reclassify/delete/urgency-change as learning signals
- Pattern detection: aggregate signals, surface suggestions ("stop creating Nextdoor actions?")
- Self-generating punch list: things tuning identifies but can't fix → exportable list for developer
