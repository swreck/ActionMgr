import { Action, Container, ContainerCounts, FlagCounts, Urgency } from '../types'

const API_BASE = '/api'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    ...options
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(error.message || `HTTP ${response.status}`)
  }

  return response.json()
}

export async function getContainerCounts(): Promise<ContainerCounts> {
  return request<ContainerCounts>('/containers/counts')
}

export async function getActions(container?: Container | null): Promise<Action[]> {
  const params = new URLSearchParams()
  if (container) {
    params.set('container', container)
  }
  const query = params.toString()
  return request<Action[]>(`/actions${query ? `?${query}` : ''}`)
}

export async function getAction(id: number): Promise<Action> {
  return request<Action>(`/actions/${id}`)
}

export interface CreateActionInput {
  description: string
  urgency?: Urgency
  dueDate?: string | null
}

export async function createAction(input: CreateActionInput): Promise<Action> {
  return request<Action>('/actions', {
    method: 'POST',
    body: JSON.stringify(input)
  })
}

export interface UpdateActionInput {
  description?: string
  suggestedAction?: string | null
  urgency?: Urgency
  dueDate?: string | null
  container?: Container
  leadTimeDays?: number
  recurrenceRule?: string | null
  needsTuning?: boolean
  needsClarification?: boolean
  version: number
}

export async function updateAction(id: number, input: UpdateActionInput): Promise<Action> {
  return request<Action>(`/actions/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  })
}

export interface CompleteActionResult extends Action {
  nextAction?: Action | null
}

export async function completeAction(id: number): Promise<CompleteActionResult> {
  return request<CompleteActionResult>(`/actions/${id}/complete`, {
    method: 'POST'
  })
}

export async function moveAction(id: number, container: Container): Promise<Action> {
  return request<Action>(`/actions/${id}/move`, {
    method: 'POST',
    body: JSON.stringify({ container })
  })
}

export async function deleteAction(id: number): Promise<void> {
  await request(`/actions/${id}`, {
    method: 'DELETE'
  })
}

export async function purgeAction(id: number): Promise<void> {
  await request(`/actions/${id}/purge`, {
    method: 'DELETE'
  })
}

export async function notAnAction(id: number): Promise<{ success: boolean; learned: string[] }> {
  return request(`/actions/${id}/not-an-action`, {
    method: 'POST'
  })
}

export async function acknowledgeFollowUp(id: number): Promise<void> {
  await request(`/actions/${id}/acknowledge`, {
    method: 'POST'
  })
}

export interface SystemHealth {
  status: 'ok' | 'error'
  lastGmailScan: string | null
  gmailConnected: boolean
  errors: string[]
}

export async function getSystemHealth(): Promise<SystemHealth> {
  return request<SystemHealth>('/system/health')
}

export async function runFollowUpCheck(): Promise<{ success: boolean; message: string }> {
  return request<{ success: boolean; message: string }>('/system/run-followups', { method: 'POST' })
}

export async function runTriggerCheck(): Promise<{ success: boolean; message: string }> {
  return request<{ success: boolean; message: string }>('/system/run-triggers', { method: 'POST' })
}

// Parse endpoints
export interface ParsedActionPreview {
  description: string
  shortDescription: string | null
  suggestedAction: string | null
  urgency: Urgency
  dueDate: string | null
  confidence: number
  reasoning: string
  parties: Array<{ name: string; email?: string }>
  triggers: Array<{ type: string; description: string }>
  missingInfo: string[]
  container: Container
  questions: string[]
  rawInput: string
  recurrenceRule: string | null
  leadTimeDays?: number
}

export async function parsePreview(text: string): Promise<ParsedActionPreview> {
  return request<ParsedActionPreview>('/parse/preview', {
    method: 'POST',
    body: JSON.stringify({ text })
  })
}

export async function parseConfirm(parsed: ParsedActionPreview): Promise<Action> {
  return request<Action>('/parse/confirm', {
    method: 'POST',
    body: JSON.stringify(parsed)
  })
}

export async function parseClarify(
  rawInput: string,
  answers: Record<string, string>
): Promise<ParsedActionPreview> {
  return request<ParsedActionPreview>('/parse/clarify', {
    method: 'POST',
    body: JSON.stringify({ rawInput, answers })
  })
}

export async function reparseAction(id: number): Promise<Action> {
  return request<Action>(`/parse/${id}/reparse`, {
    method: 'POST'
  })
}

// Gmail endpoints
export interface GmailStatus {
  connected: boolean
  lastScan: string | null
  lastSuccess: string | null
  lastError: string | null
  itemsScanned: number
  actionsCreated: number
}

export async function getGmailStatus(): Promise<GmailStatus> {
  return request<GmailStatus>('/sources/gmail/status')
}

export async function getGmailAuthUrl(): Promise<{ url: string }> {
  return request<{ url: string }>('/sources/gmail/auth-url')
}

export async function disconnectGmail(): Promise<void> {
  await request('/sources/gmail/disconnect', {
    method: 'POST'
  })
}

export interface ScanResult {
  success: boolean
  emailsScanned: number
  actionsCreated: number
  errors: string[]
}

export async function triggerGmailScan(): Promise<ScanResult> {
  return request<ScanResult>('/sources/gmail/scan', {
    method: 'POST'
  })
}

// Trigger endpoints
export type TriggerType = 'DATE_EXACT' | 'DATE_WINDOW' | 'EMAIL_REPLY' | 'MANUAL_CHECK' | 'WEB_CONDITION'

export interface Trigger {
  id: number
  actionId: number
  type: TriggerType
  description: string | null
  triggerDate: string | null
  dateWindowStart: string | null
  dateWindowEnd: string | null
  eventDescription: string | null
  emailPattern: string | null
  webQuery: string | null
  webCheckResult: string | null
  lastChecked: string | null
  checkCount: number
  failedChecks: number
  isTriggered: boolean
  triggeredAt: string | null
  createdAt: string
  action?: Action
}

export async function getTriggers(params?: {
  actionId?: number
  pending?: boolean
}): Promise<Trigger[]> {
  const searchParams = new URLSearchParams()
  if (params?.actionId) searchParams.set('actionId', params.actionId.toString())
  if (params?.pending) searchParams.set('pending', 'true')
  const query = searchParams.toString()
  return request<Trigger[]>(`/triggers${query ? `?${query}` : ''}`)
}

export async function getTrigger(id: number): Promise<Trigger> {
  return request<Trigger>(`/triggers/${id}`)
}

export interface CreateTriggerInput {
  actionId: number
  type: TriggerType
  description?: string
  triggerDate?: string
  dateWindowStart?: string
  dateWindowEnd?: string
  eventDescription?: string
}

export async function createTrigger(input: CreateTriggerInput): Promise<Trigger> {
  return request<Trigger>('/triggers', {
    method: 'POST',
    body: JSON.stringify(input)
  })
}

export async function updateTrigger(
  id: number,
  input: Partial<CreateTriggerInput>
): Promise<Trigger> {
  return request<Trigger>(`/triggers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  })
}

export async function deleteTrigger(id: number): Promise<void> {
  await request(`/triggers/${id}`, {
    method: 'DELETE'
  })
}

export async function fireTrigger(id: number): Promise<{ success: boolean; action: Action }> {
  return request<{ success: boolean; action: Action }>(`/triggers/${id}/fire`, {
    method: 'POST'
  })
}

export async function checkTrigger(
  id: number,
  conditionMet: boolean
): Promise<{ success: boolean; fired: boolean; message: string }> {
  return request<{ success: boolean; fired: boolean; message: string }>(
    `/triggers/${id}/check`,
    {
      method: 'POST',
      body: JSON.stringify({ conditionMet })
    }
  )
}

// Search endpoints
export interface SearchParams {
  q?: string
  container?: Container
  urgency?: Urgency
  includeArchived?: boolean
  archiveOnly?: boolean
  limit?: number
  offset?: number
}

export interface SearchResultAction {
  id: number
  description: string
  suggestedAction: string | null
  container: Container
  urgency: Urgency
  confidence: number
  dueDate: string | null
  createdAt: string
  completedAt: string | null
  archivedAt: string | null
  isArchived: boolean
}

export interface SearchResult {
  actions: SearchResultAction[]
  total: number
  hasMore: boolean
}

export async function searchActions(params: SearchParams): Promise<SearchResult> {
  const searchParams = new URLSearchParams()
  if (params.q) searchParams.set('q', params.q)
  if (params.container) searchParams.set('container', params.container)
  if (params.urgency) searchParams.set('urgency', params.urgency)
  if (params.includeArchived) searchParams.set('includeArchived', 'true')
  if (params.archiveOnly) searchParams.set('archiveOnly', 'true')
  if (params.limit) searchParams.set('limit', params.limit.toString())
  if (params.offset) searchParams.set('offset', params.offset.toString())

  const query = searchParams.toString()
  return request<SearchResult>(`/search${query ? `?${query}` : ''}`)
}

export async function getSearchSuggestions(q: string): Promise<{ suggestions: string[] }> {
  return request<{ suggestions: string[] }>(`/search/suggestions?q=${encodeURIComponent(q)}`)
}

// Group endpoints
export interface ActionGroup {
  id: number
  name: string
  description: string | null
  actionCount: number
  activeCount: number
  highestUrgency: Urgency
  actions: Array<{
    id: number
    description: string
    container: Container
    urgency: Urgency
    completedAt: string | null
  }>
}

export interface GroupDetail {
  id: number
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
  actions: Action[]
}

export async function getGroups(): Promise<ActionGroup[]> {
  return request<ActionGroup[]>('/groups')
}

export async function getGroup(id: number): Promise<GroupDetail> {
  return request<GroupDetail>(`/groups/${id}`)
}

export interface CreateGroupInput {
  name: string
  description?: string
  actionIds?: number[]
}

export async function createGroup(input: CreateGroupInput): Promise<GroupDetail> {
  return request<GroupDetail>('/groups', {
    method: 'POST',
    body: JSON.stringify(input)
  })
}

export async function updateGroup(
  id: number,
  input: { name?: string; description?: string; archivedAt?: string | null }
): Promise<GroupDetail> {
  return request<GroupDetail>(`/groups/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  })
}

export async function archiveGroup(id: number): Promise<GroupDetail> {
  return request<GroupDetail>(`/groups/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ archivedAt: new Date().toISOString() })
  })
}

export async function deleteGroup(id: number): Promise<void> {
  await request(`/groups/${id}`, {
    method: 'DELETE'
  })
}

export async function addActionsToGroup(
  groupId: number,
  actionIds: number[]
): Promise<GroupDetail> {
  return request<GroupDetail>(`/groups/${groupId}/actions`, {
    method: 'POST',
    body: JSON.stringify({ actionIds })
  })
}

export async function removeActionFromGroup(
  groupId: number,
  actionId: number
): Promise<void> {
  await request(`/groups/${groupId}/actions/${actionId}`, {
    method: 'DELETE'
  })
}

export interface GoalSuggestionAction {
  id: number
  description: string
  shortDescription: string | null
}

export interface GroupSuggestion {
  id: number
  suggestedName: string
  reasoning: string
  actions: GoalSuggestionAction[]
}

export async function getGroupSuggestions(): Promise<{ suggestions: GroupSuggestion[] }> {
  return request<{ suggestions: GroupSuggestion[] }>('/groups/suggestions')
}

export async function acceptGoalSuggestion(id: number, name?: string): Promise<unknown> {
  return request('/groups/suggestions/' + id + '/accept', {
    method: 'POST',
    body: JSON.stringify({ name })
  })
}

export async function dismissGoalSuggestion(id: number): Promise<void> {
  await request('/groups/suggestions/' + id + '/dismiss', {
    method: 'POST'
  })
}

export async function runGoalDetection(): Promise<{ success: boolean; message: string; suggestionsCreated?: number }> {
  return request('/system/run-goal-detection', { method: 'POST' })
}

export async function mergeActions(
  primaryId: number,
  secondaryId: number
): Promise<Action> {
  return request<Action>('/groups/merge', {
    method: 'POST',
    body: JSON.stringify({ primaryId, secondaryId })
  })
}

// Tuning endpoints
export type TuningStatus = 'SHADOW' | 'PROPOSED' | 'ACTIVE' | 'REJECTED'

export interface TuningRule {
  id: number
  description: string
  category: string
  condition: string
  transformation: string
  status: TuningStatus
  shadowCount: number
  shadowSuccesses: number
  shadowThreshold: number
  userFeedback: string | null
  createdAt: string
  activatedAt: string | null
  rejectedAt: string | null
}

export async function getTuningRules(): Promise<TuningRule[]> {
  return request<TuningRule[]>('/tuning')
}

export async function getPendingRules(): Promise<TuningRule[]> {
  return request<TuningRule[]>('/tuning/pending')
}

export async function getShadowRules(): Promise<TuningRule[]> {
  return request<TuningRule[]>('/tuning/shadow')
}

export async function getTuningRule(id: number): Promise<TuningRule> {
  return request<TuningRule>(`/tuning/${id}`)
}

export interface CreateTuningRuleInput {
  description: string
  category: string
  condition: string
  transformation: string
  shadowThreshold?: number
}

export async function createTuningRule(input: CreateTuningRuleInput): Promise<TuningRule> {
  return request<TuningRule>('/tuning', {
    method: 'POST',
    body: JSON.stringify(input)
  })
}

export async function updateTuningRule(
  id: number,
  input: Partial<CreateTuningRuleInput>
): Promise<TuningRule> {
  return request<TuningRule>(`/tuning/${id}`, {
    method: 'PUT',
    body: JSON.stringify(input)
  })
}

export async function activateTuningRule(id: number): Promise<TuningRule> {
  return request<TuningRule>(`/tuning/${id}/activate`, {
    method: 'POST'
  })
}

export async function rejectTuningRule(id: number, feedback?: string, dontAskAgain = false): Promise<TuningRule> {
  return request<TuningRule>(`/tuning/${id}/reject`, {
    method: 'POST',
    body: JSON.stringify({ feedback, dontAskAgain })
  })
}

export async function askLessOften(id: number): Promise<TuningRule> {
  return request<TuningRule>(`/tuning/${id}/ask-less`, {
    method: 'POST'
  })
}

export async function deleteTuningRule(id: number): Promise<void> {
  await request(`/tuning/${id}`, {
    method: 'DELETE'
  })
}

export interface TuningStats {
  counts: {
    shadow: number
    proposed: number
    active: number
    rejected: number
  }
  avgSuccessRate: number
}

export async function getTuningStats(): Promise<TuningStats> {
  return request<TuningStats>('/tuning/stats')
}

// Notification endpoints
export async function getVapidPublicKey(): Promise<{ key: string }> {
  return request<{ key: string }>('/notifications/vapid-public-key')
}

export async function subscribeToPush(endpoint: string, p256dh: string, auth: string): Promise<void> {
  await request('/notifications/subscribe', {
    method: 'POST',
    body: JSON.stringify({ endpoint, p256dh, auth })
  })
}

export async function unsubscribeFromPush(endpoint: string): Promise<void> {
  await request('/notifications/unsubscribe', {
    method: 'DELETE',
    body: JSON.stringify({ endpoint })
  })
}

export type FeedbackType = 'urgency_incorrect' | 'container_incorrect' | 'parsed_wrong'

export async function submitTuningFeedback(
  actionId: number,
  feedbackType: FeedbackType,
  correction?: string
): Promise<{ success: boolean; rule: TuningRule }> {
  return request<{ success: boolean; rule: TuningRule }>('/tuning/feedback', {
    method: 'POST',
    body: JSON.stringify({ actionId, feedbackType, correction })
  })
}

// Flag counts endpoint
export async function getFlagCounts(): Promise<FlagCounts> {
  return request<FlagCounts>('/containers/flag-counts')
}

// Flag-filtered actions
export async function getActionsByFlag(flag: 'needsClarification' | 'needsTuning'): Promise<Action[]> {
  return request<Action[]>(`/actions?${flag}=true`)
}

// Bulk action endpoints
export async function bulkCompleteActions(ids: number[]): Promise<{ completed: number }> {
  return request<{ completed: number }>('/actions/bulk/complete', {
    method: 'POST',
    body: JSON.stringify({ ids })
  })
}

export async function bulkDeleteActions(ids: number[]): Promise<{ deleted: number }> {
  return request<{ deleted: number }>('/actions/bulk/delete', {
    method: 'POST',
    body: JSON.stringify({ ids })
  })
}

export async function bulkMoveActions(ids: number[], container: string): Promise<{ moved: number }> {
  return request<{ moved: number }>('/actions/bulk/move', {
    method: 'POST',
    body: JSON.stringify({ ids, container })
  })
}
