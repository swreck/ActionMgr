export type Container =
  | 'ACTIONABLE_NOW'
  | 'CANDIDATES'
  | 'AMBIGUITY'
  | 'WAITING'
  | 'TUNING' // deprecated — kept for backward compat; will be removed when TUNING becomes a flag

export type Urgency = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

export type SourceType = 'GMAIL' | 'SIRI' | 'MANUAL'

export interface Action {
  id: number
  description: string
  shortDescription: string | null
  suggestedAction: string | null
  container: Container
  urgency: Urgency
  confidence: number
  dueDate: string | null
  rawInput: string
  aiReasoning: string | null
  recurrenceRule: string | null
  leadTimeDays: number
  createdAt: string
  updatedAt: string
  completedAt: string | null
  archivedAt: string | null
  version: number
  sourceId: number
  needsFollowUp?: boolean
  commitmentConfidence?: number
  needsClarification?: boolean
  needsTuning?: boolean
  parseConfidence?: number
  source?: Source
  events?: ActionEvent[]
}

export interface Source {
  id: number
  type: SourceType
  emailId: string | null
  emailFrom: string | null
  emailSubject: string | null
  emailDate: string | null
  siriText: string | null
  siriDate: string | null
  manualNote: string | null
  createdAt: string
}

export interface ActionEvent {
  id: number
  actionId: number
  type: EventType
  fromContainer: Container | null
  toContainer: Container | null
  details: string | null
  createdAt: string
}

export type EventType =
  | 'CREATED'
  | 'CONTAINER_CHANGE'
  | 'EDITED'
  | 'MERGED'
  | 'TRIGGER_FIRED'
  | 'AI_REPARSED'
  | 'COMPLETED'
  | 'ARCHIVED'
  | 'FOLLOW_UP_SENT'

export interface ContainerCounts {
  ACTIONABLE_NOW: number
  CANDIDATES: number
  AMBIGUITY: number
  WAITING: number
  TUNING: number // deprecated — kept for backward compat; always 0
}

export interface FlagCounts {
  needsClarification: number
  needsTuning: number
}

export const CONTAINER_LABELS: Record<Container, string> = {
  ACTIONABLE_NOW: 'Now',
  CANDIDATES: 'Review',
  AMBIGUITY: 'Clarify',
  WAITING: 'Waiting',
  TUNING: 'Tuning' // deprecated — not shown in nav; kept for backward compat
}

export const URGENCY_LABELS: Record<Urgency, string> = {
  CRITICAL: 'Critical',
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
}

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
  isTriggered: boolean
  triggeredAt: string | null
  createdAt: string
}

export const TRIGGER_TYPE_LABELS: Record<TriggerType, string> = {
  DATE_EXACT: 'On Date',
  DATE_WINDOW: 'Date Range',
  EMAIL_REPLY: 'Email Reply',
  MANUAL_CHECK: 'Manual Check',
  WEB_CONDITION: 'Web Monitor'
}
