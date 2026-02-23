import { useRef, useState } from 'react'
import { Action } from '../types'
import { formatRecurrenceLabel } from '../utils/recurrence'

interface ActionCardProps {
  action: Action
  onClick: () => void
  onDelete?: (id: number) => void
  selectable?: boolean
  selected?: boolean
  onSelect?: (id: number) => void
}

export default function ActionCard({ action, onClick, onDelete, selectable, selected, onSelect }: ActionCardProps) {
  const urgencyClass = action.urgency.toLowerCase()
  const touchStartX = useRef<number | null>(null)
  const [swipeDelta, setSwipeDelta] = useState(0)
  const [swiping, setSwiping] = useState(false)

  function handleCardClick() {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) {
      return // Don't navigate when text is selected
    }
    if (swiping) return
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

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    setSwiping(false)
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.touches[0].clientX - touchStartX.current
    // Only allow leftward swipe (negative delta)
    if (delta < -10) {
      setSwiping(true)
      setSwipeDelta(Math.min(0, delta))
    }
  }

  function handleTouchEnd() {
    if (swipeDelta < -120 && onDelete) {
      // Swipe far enough — delete
      setSwipeDelta(-300) // animate off-screen
      setTimeout(() => {
        onDelete(action.id)
      }, 200)
    } else {
      // Snap back
      setSwipeDelta(0)
    }
    touchStartX.current = null
    // Delay resetting swiping so the click handler can check it
    setTimeout(() => setSwiping(false), 50)
  }

  const showUnconfirmed = action.container === 'CANDIDATES'
  const dueLabel = formatDueDate()

  return (
    <div className="action-card" onClick={handleCardClick}>
      <div className="action-card-delete-bg">Delete</div>
      <div
        className="action-card-inner"
        style={{
          transform: swipeDelta < 0 ? `translateX(${swipeDelta}px)` : undefined,
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
          <div className="action-description">{action.shortDescription || action.description}</div>
          {action.source?.type === 'GMAIL' && (action.source.emailFrom || action.source.emailSubject) && (
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
              <span className="badge badge-clarify">Clarify</span>
            )}
            {action.needsTuning && (
              <span className="badge badge-tuning">Tuning</span>
            )}
            {action.recurrenceRule && (
              <span className="badge badge-recurrence">↻ {formatRecurrenceLabel(action.recurrenceRule)}</span>
            )}
            {dueLabel && (
              <span className="action-due">{dueLabel}</span>
            )}
            <span className="action-confidence">
              <span className={`confidence-dot ${getConfidenceLevel()}`} />
              {Math.round(action.confidence * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
