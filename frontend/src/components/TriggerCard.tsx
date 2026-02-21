import { useState } from 'react'
import { Trigger, TRIGGER_TYPE_LABELS } from '../types'
import { fireTrigger, checkTrigger, deleteTrigger } from '../api/client'

interface TriggerCardProps {
  trigger: Trigger
  onUpdate: () => void
}

export default function TriggerCard({ trigger, onUpdate }: TriggerCardProps) {
  const [loading, setLoading] = useState(false)

  function formatDate(dateStr: string | null): string {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  function formatRelativeDate(dateStr: string | null): string {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const now = new Date()
    const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return `${Math.abs(diffDays)}d ago`
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays < 7) return `In ${diffDays}d`
    return formatDate(dateStr)
  }

  function getTriggerInfo(): string {
    switch (trigger.type) {
      case 'DATE_EXACT':
        return formatRelativeDate(trigger.triggerDate)
      case 'DATE_WINDOW':
        return `${formatDate(trigger.dateWindowStart)} - ${formatDate(trigger.dateWindowEnd)}`
      case 'EMAIL_REPLY':
        return trigger.emailPattern || 'Waiting for reply'
      case 'MANUAL_CHECK':
        return trigger.eventDescription || 'Check condition'
      case 'WEB_CONDITION':
        return trigger.webQuery || 'Monitoring web for condition'
      default:
        return ''
    }
  }

  async function handleFire() {
    if (!confirm('Fire this trigger now? The action will move to Actionable Now.')) return

    setLoading(true)
    try {
      await fireTrigger(trigger.id)
      onUpdate()
    } catch (err) {
      console.error('Failed to fire trigger:', err)
      alert('Failed to fire trigger')
    } finally {
      setLoading(false)
    }
  }

  async function handleCheck(conditionMet: boolean) {
    setLoading(true)
    try {
      const result = await checkTrigger(trigger.id, conditionMet)
      if (result.fired) {
        alert('Condition met! Action moved to Actionable Now.')
      }
      onUpdate()
    } catch (err) {
      console.error('Failed to check trigger:', err)
      alert('Failed to check trigger')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete() {
    if (!confirm('Delete this trigger?')) return

    setLoading(true)
    try {
      await deleteTrigger(trigger.id)
      onUpdate()
    } catch (err) {
      console.error('Failed to delete trigger:', err)
      alert('Failed to delete trigger')
    } finally {
      setLoading(false)
    }
  }

  if (trigger.isTriggered) {
    return (
      <div className="trigger-card fired">
        <div className="trigger-icon">✓</div>
        <div className="trigger-content">
          <div className="trigger-type">{TRIGGER_TYPE_LABELS[trigger.type]}</div>
          <div className="trigger-info">Fired {formatRelativeDate(trigger.triggeredAt)}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="trigger-card">
      <div className="trigger-icon">⏳</div>
      <div className="trigger-content">
        <div className="trigger-type">{TRIGGER_TYPE_LABELS[trigger.type]}</div>
        <div className="trigger-info">{getTriggerInfo()}</div>
        {trigger.description && (
          <div className="trigger-description">{trigger.description}</div>
        )}
        {trigger.type === 'WEB_CONDITION' && trigger.webCheckResult && (
          <div className="trigger-description">Last check: {trigger.webCheckResult}</div>
        )}
        {trigger.type === 'WEB_CONDITION' && trigger.lastChecked && (
          <div className="trigger-description" style={{ opacity: 0.6 }}>
            Checked {formatRelativeDate(trigger.lastChecked)} · {trigger.checkCount} checks
          </div>
        )}
      </div>
      <div className="trigger-actions">
        {trigger.type === 'MANUAL_CHECK' ? (
          <>
            <button
              className="trigger-btn check"
              onClick={() => handleCheck(true)}
              disabled={loading}
              title="Condition met"
            >
              ✓
            </button>
            <button
              className="trigger-btn skip"
              onClick={() => handleCheck(false)}
              disabled={loading}
              title="Not yet"
            >
              ↻
            </button>
          </>
        ) : (
          <button
            className="trigger-btn fire"
            onClick={handleFire}
            disabled={loading}
            title="Fire now"
          >
            ▶
          </button>
        )}
        <button
          className="trigger-btn delete"
          onClick={handleDelete}
          disabled={loading}
          title="Delete"
        >
          ✕
        </button>
      </div>

      <style>{`
        .trigger-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          background: var(--bg-card);
          border-radius: 8px;
          margin-top: 8px;
        }
        .trigger-card.fired {
          opacity: 0.6;
        }
        .trigger-icon {
          font-size: 16px;
          width: 24px;
          text-align: center;
          flex-shrink: 0;
        }
        .trigger-content {
          flex: 1;
          min-width: 0;
        }
        .trigger-type {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .trigger-info {
          font-size: 14px;
          margin-top: 2px;
        }
        .trigger-description {
          font-size: 13px;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .trigger-actions {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        .trigger-btn {
          width: 28px;
          height: 28px;
          border-radius: 14px;
          border: none;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
        }
        .trigger-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .trigger-btn.fire,
        .trigger-btn.check {
          background: var(--success);
          color: var(--bg-primary);
        }
        .trigger-btn.skip {
          background: var(--bg-secondary);
          color: var(--text-secondary);
        }
        .trigger-btn.delete {
          background: transparent;
          color: var(--text-secondary);
        }
        .trigger-btn.delete:hover {
          color: var(--urgency-critical);
        }
      `}</style>
    </div>
  )
}
