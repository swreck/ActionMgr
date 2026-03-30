import { useRef, useState } from 'react'
import { Action } from '../types'
import { formatRecurrenceLabel } from '../utils/recurrence'
import PostponePopover from './PostponePopover'

interface ActionCardProps {
  action: Action
  onClick: () => void
  onDelete?: (id: number) => void
  onComplete?: (id: number) => void
  onPostpone?: (id: number, date: string) => void
  selectable?: boolean
  selected?: boolean
  onSelect?: (id: number) => void
  personLabel?: string
}

export default function ActionCard({ action, onClick, onDelete, onComplete, onPostpone, selectable, selected, onSelect, personLabel }: ActionCardProps) {
  const urgencyClass = action.urgency.toLowerCase()
  const touchStartX = useRef<number | null>(null)
  const [swipeDelta, setSwipeDelta] = useState(0)
  const [swiping, setSwiping] = useState(false)
  const [completing, setCompleting] = useState(false)
  const [showPostpone, setShowPostpone] = useState(false)

  function handleCardClick() {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) return
    if (swiping) return
    if (completing) return
    onClick()
  }

  function getConfidenceLevel(): 'high' | 'medium' | 'low' {
    if (action.confidence >= 0.8) return 'high'
    if (action.confidence >= 0.5) return 'medium'
    return 'low'
  }

  function formatDueDate(): string | null {
    if (!action.dueDate) return null
    const date = new Date(action.dueDate)
    const now = new Date()
    const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return `${Math.abs(diffDays)}d overdue`
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays < 7) return `${diffDays}d`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  function getDaysUntilDue(): number | null {
    if (!action.dueDate) return null
    const date = new Date(action.dueDate)
    return Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  }

  function getWarmthClass(): string {
    const days = getDaysUntilDue()
    if (days === null) return ''
    if (days < 0) return 'card-overdue'
    if (days === 0) return 'card-due-today'
    if (days <= 2) return 'card-due-soon'
    return ''
  }

  function hasTextSelection(): boolean {
    const sel = window.getSelection()
    return !!(sel && sel.toString().length > 0)
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    if (hasTextSelection()) return
    const delta = e.touches[0].clientX - touchStartX.current

    if (delta < -10) {
      // Swipe left — delete
      setSwiping(true)
      setSwipeDelta(Math.min(0, delta))
    } else if (delta > 10 && onComplete) {
      // Swipe right — complete
      setSwiping(true)
      setSwipeDelta(Math.max(0, delta))
    }
  }

  function handleTouchEnd() {
    if (hasTextSelection()) {
      touchStartX.current = null
      return
    }

    if (swipeDelta < -120 && onDelete) {
      setSwipeDelta(-300)
      setTimeout(() => onDelete(action.id), 200)
    } else if (swipeDelta > 120 && onComplete) {
      // Trigger completion animation
      setCompleting(true)
      setSwipeDelta(0)
      setTimeout(() => onComplete(action.id), 700)
    } else {
      setSwipeDelta(0)
    }

    touchStartX.current = null
    setTimeout(() => setSwiping(false), 50)
  }

  function handlePostpone(date: string) {
    setShowPostpone(false)
    onPostpone?.(action.id, date)
  }

  const showUnconfirmed = action.container === 'CANDIDATES'
  const dueLabel = formatDueDate()
  const warmthClass = getWarmthClass()
  const isOverdue = (getDaysUntilDue() ?? 1) < 0

  return (
    <div className={`action-card ${completing ? 'action-card-completing' : ''}`} onClick={handleCardClick}>
      {/* Swipe backgrounds */}
      {swipeDelta > 10 && (
        <div className="action-card-complete-bg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
      )}
      {swipeDelta < -10 && <div className="action-card-delete-bg">Delete</div>}

      {/* Completion overlay */}
      {completing && (
        <div className="completion-overlay">
          <svg className="completion-check" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
      )}

      <div
        className={`action-card-inner ${warmthClass}`}
        style={{
          transform: swipeDelta !== 0 ? `translateX(${swipeDelta}px)` : undefined,
          transition: swiping ? 'none' : 'transform 0.2s ease'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {selectable && (
          <div className="action-checkbox-wrapper" onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              className="action-checkbox"
              checked={!!selected}
              onChange={() => onSelect?.(action.id)}
            />
          </div>
        )}
        <div className={`action-urgency-bar ${urgencyClass}`} />
        <div className="action-content">
          {action.needsFollowUp && (
            <div className="action-followup-nudge">Still important? Tap to review.</div>
          )}
          {personLabel && (
            <div className="action-person-label">{personLabel}</div>
          )}
          <div className="action-description">{action.shortDescription || action.description}</div>
          {action.source?.type === 'GMAIL' && (action.source.emailFrom || action.source.emailSubject) && !personLabel && (
            <div className="action-source-line">
              From: {action.source.emailFrom || 'Unknown'} &middot; {action.source.emailSubject || 'No subject'}
            </div>
          )}
          <div className="action-meta">
            {showUnconfirmed && (
              <span className="badge badge-unconfirmed">Unconfirmed</span>
            )}
            {action.container === 'WAITING' && (
              <span className="badge badge-waiting">Waiting</span>
            )}
            {action.needsClarification && (
              <span className="badge badge-clarify">
                {action.missingInfo
                  ? `Unclear: ${(JSON.parse(action.missingInfo) as string[]).slice(0, 2).join(', ')}`
                  : 'Clarify'}
              </span>
            )}
            {action.needsTuning && (
              <span className="badge badge-tuning">Tuning</span>
            )}
            {action.recurrenceRule && (
              <span className="badge badge-recurrence">↻ {formatRecurrenceLabel(action.recurrenceRule)}</span>
            )}
            {dueLabel && (
              <span className={`action-due ${isOverdue ? 'action-due-overdue' : ''}`}>{dueLabel}</span>
            )}
            {onPostpone && (
              <button
                className="postpone-clock-btn"
                onClick={(e) => { e.stopPropagation(); setShowPostpone(true) }}
                title="Push forward"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </button>
            )}
            <span className="action-confidence">
              <span className={`confidence-dot ${getConfidenceLevel()}`} />
              {Math.round(action.confidence * 100)}%
            </span>
          </div>
        </div>
      </div>

      {showPostpone && (
        <PostponePopover
          onPostpone={handlePostpone}
          onClose={() => setShowPostpone(false)}
        />
      )}
    </div>
  )
}
