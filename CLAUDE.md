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
5. **Source attribution missing in UI** — Action detail view doesn't show the email subject/sender it came from. User can't make good triage decisions without seeing the source. TODO: add source email metadata to ActionView.
6. **Thread deduplication** — Multiple emails from the same thread generate separate actions. Scanner should group by thread ID and only parse the most recent message per thread, or deduplicate by subject/sender.
9. **"No actionable commitment" bug** — Scanner creates an action even when the AI explicitly says no commitment was found, using that phrase as the description. Fix: in the scanner, skip action creation if `confidence < 0.3` or if description matches "no actionable commitment" (case-insensitive). This is a code bug, not a tuning issue.
8. **Newsletter/digest false positives** — Newsletters and digests contain no personal commitments but the AI parses their content as actions. Signal: no "next step" generated, sender is a mailing list or publication. Should be filtered before AI parsing, not after.
7. **Bulk actions** — User regularly selects 5-15 items at once in email triage.
10. **Date entry UX** — Defer, due date, and any other date inputs currently use a plain text prompt (type YYYY-MM-DD). Should be replaced with a native date picker throughout.
12. **Feedback input should be a picker** — Urgency correction prompt uses free text input. Should be a picker showing the 4 known urgency values. Same applies to container correction (show the 5 container options).
14. **Tuning rule title is generic** — Rules created from user feedback are titled "Feedback on action #N" instead of something meaningful like the action description. Should use the action description as context in the title.
15. **Tuning rule cards don't expand / no delete access** — Items in the Tuning page don't open a detail view, so there's no way to access the ⋯ menu or delete them from the UI. Need either an expand/detail view or inline delete on tuning rule cards.
13. **TUNING should be a flag, not a container** — Currently TUNING is a Container enum value, so flagging an action for AI feedback removes it from the user's active view. Correct fix: remove TUNING from the Container enum, add a boolean `isFlagged` field to Action, and apply the user's correction immediately (update urgency/container in place) while creating the tuning rule. The action stays visible and actionable. This is a schema change (migration required) and affects routes, frontend types, and ContainerNav.
11. **Container badge stale after move** — After reclassifying an action, the nav badge counts take ~10 seconds to update. Should invalidate and refetch counts immediately after any container change. Need a multi-select mode on the feed (checkbox per card, select-all, then bulk Complete / Delete / Move). This is especially important for post-scan triage sessions.
