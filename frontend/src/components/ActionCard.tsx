import { Action } from '../types'

interface ActionCardProps {
  action: Action
  onClick: () => void
}

export default function ActionCard({ action, onClick }: ActionCardProps) {
  const urgencyClass = action.urgency.toLowerCase()

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

  const showUnconfirmed = action.container === 'CANDIDATES'
  const dueLabel = formatDueDate()

  return (
    <div className="action-card" onClick={onClick}>
      <div className={`action-urgency-bar ${urgencyClass}`} />
      <div className="action-content">
        {action.needsFollowUp && (
          <div className="action-followup-nudge">Still important? Tap to review.</div>
        )}
        <div className="action-description">{action.description}</div>
        {action.suggestedAction && (
          <div className="action-suggested">{action.suggestedAction}</div>
        )}
        <div className="action-meta">
          {showUnconfirmed && (
            <span className="badge badge-unconfirmed">Unconfirmed</span>
          )}
          {action.container === 'WAITING' && (
            <span className="badge badge-waiting">Waiting</span>
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
  )
}
