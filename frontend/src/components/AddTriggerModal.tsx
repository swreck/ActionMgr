import { useState } from 'react'
import { TriggerType, TRIGGER_TYPE_LABELS } from '../types'
import { createTrigger } from '../api/client'

interface AddTriggerModalProps {
  actionId: number
  onClose: () => void
  onCreated: () => void
}

export default function AddTriggerModal({ actionId, onClose, onCreated }: AddTriggerModalProps) {
  const [type, setType] = useState<TriggerType>('DATE_EXACT')
  const [description, setDescription] = useState('')
  const [triggerDate, setTriggerDate] = useState('')
  const [dateWindowStart, setDateWindowStart] = useState('')
  const [dateWindowEnd, setDateWindowEnd] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    // Validate based on type
    if (type === 'DATE_EXACT' && !triggerDate) {
      setError('Please select a date')
      return
    }
    if (type === 'DATE_WINDOW' && (!dateWindowStart || !dateWindowEnd)) {
      setError('Please select both start and end dates')
      return
    }
    if (type === 'MANUAL_CHECK' && !eventDescription) {
      setError('Please describe what to check for')
      return
    }

    setSaving(true)

    try {
      await createTrigger({
        actionId,
        type,
        description: description || undefined,
        triggerDate: type === 'DATE_EXACT' ? triggerDate : undefined,
        dateWindowStart: type === 'DATE_WINDOW' ? dateWindowStart : undefined,
        dateWindowEnd: type === 'DATE_WINDOW' ? dateWindowEnd : undefined,
        eventDescription: type === 'MANUAL_CHECK' ? eventDescription : undefined
      })
      onCreated()
      onClose()
    } catch (err) {
      setError('Failed to create trigger')
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  // Get tomorrow's date as default
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="trigger-modal-overlay" onClick={onClose}>
      <div className="trigger-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add Trigger</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Trigger Type</label>
            <div className="trigger-type-options">
              {(Object.keys(TRIGGER_TYPE_LABELS) as TriggerType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`trigger-type-btn ${type === t ? 'active' : ''}`}
                  onClick={() => setType(t)}
                >
                  {TRIGGER_TYPE_LABELS[t]}
                </button>
              ))}
            </div>
          </div>

          {type === 'DATE_EXACT' && (
            <div className="form-group">
              <label className="form-label">Trigger Date</label>
              <input
                type="date"
                className="form-input"
                value={triggerDate}
                onChange={(e) => setTriggerDate(e.target.value)}
                min={minDate}
              />
              <p className="form-hint">Action will move to Actionable Now on this date</p>
            </div>
          )}

          {type === 'DATE_WINDOW' && (
            <>
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={dateWindowStart}
                  onChange={(e) => setDateWindowStart(e.target.value)}
                  min={minDate}
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={dateWindowEnd}
                  onChange={(e) => setDateWindowEnd(e.target.value)}
                  min={dateWindowStart || minDate}
                />
              </div>
              <p className="form-hint">Action will become active when start date is reached</p>
            </>
          )}

          {type === 'EMAIL_REPLY' && (
            <div className="form-group">
              <label className="form-label">Description (optional)</label>
              <input
                type="text"
                className="form-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., Waiting for reply from John"
              />
              <p className="form-hint">You'll be prompted to manually check for the reply</p>
            </div>
          )}

          {type === 'MANUAL_CHECK' && (
            <div className="form-group">
              <label className="form-label">What to check for</label>
              <textarea
                className="form-textarea"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="e.g., 30% trade-in promotion period starts"
                rows={2}
              />
              <p className="form-hint">You'll be prompted periodically to check if this condition is met</p>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Note (optional)</label>
            <input
              type="text"
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a note about this trigger..."
            />
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="trigger-modal-buttons">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Adding...' : 'Add Trigger'}
            </button>
          </div>
        </form>

        <style>{`
          .trigger-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            padding: 16px;
          }
          .trigger-modal {
            background: var(--bg-secondary);
            border-radius: 12px;
            padding: 20px;
            width: 100%;
            max-width: 400px;
            max-height: 80vh;
            overflow-y: auto;
          }
          .trigger-type-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .trigger-type-btn {
            padding: 10px;
            background: var(--bg-card);
            border: 2px solid transparent;
            border-radius: 8px;
            color: var(--text-secondary);
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }
          .trigger-type-btn.active {
            border-color: var(--accent);
            color: var(--text-primary);
          }
          .trigger-type-btn:not(.active):hover {
            background: rgba(255,255,255,0.05);
          }
          .form-hint {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 6px;
          }
          .form-error {
            color: var(--urgency-critical);
            font-size: 14px;
            margin-bottom: 16px;
          }
          .trigger-modal-buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
          }
          .trigger-modal-buttons .btn {
            flex: 1;
          }
        `}</style>
      </div>
    </div>
  )
}
