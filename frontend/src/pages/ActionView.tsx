import { useEffect, useState } from 'react'
import { Action, Urgency, Container, Trigger, CONTAINER_LABELS, URGENCY_LABELS } from '../types'
import { getAction, updateAction, completeAction, moveAction, getTriggers, submitTuningFeedback, reparseAction, createTrigger, mergeActions, acknowledgeFollowUp, purgeAction, deleteAction, FeedbackType } from '../api/client'
import InfoPanel from '../components/InfoPanel'
import TriggerCard from '../components/TriggerCard'
import AddTriggerModal from '../components/AddTriggerModal'
import ConfirmModal from '../components/ConfirmModal'
import { formatRecurrenceLabel } from '../utils/recurrence'

interface ActionViewProps {
  actionId: number
  onClose: () => void
  onUpdate: () => void
}

type ConfirmState =
  | null
  | { type: 'delete' }
  | { type: 'archive' }
  | { type: 'merge-id' }
  | { type: 'merge-confirm'; primaryId: number }
  | { type: 'text-correction' }

export default function ActionView({ actionId, onClose, onUpdate }: ActionViewProps) {
  const [action, setAction] = useState<Action | null>(null)
  const [triggers, setTriggers] = useState<Trigger[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [showAddTrigger, setShowAddTrigger] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [nextCreatedMsg, setNextCreatedMsg] = useState<string | null>(null)
  const [editingLeadTime, setEditingLeadTime] = useState(false)
  const [leadTimeValue, setLeadTimeValue] = useState('')
  const [confirmState, setConfirmState] = useState<ConfirmState>(null)

  // Edit form state
  const [description, setDescription] = useState('')
  const [urgency, setUrgency] = useState<Urgency>('MEDIUM')
  const [dueDate, setDueDate] = useState('')
  const [saving, setSaving] = useState(false)
  const [reparsing, setReparsing] = useState(false)
  const [showReclassify, setShowReclassify] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState<'defer' | 'reschedule' | null>(null)
  const [datePickerValue, setDatePickerValue] = useState('')
  const [feedbackPicker, setFeedbackPicker] = useState<'urgency' | 'container' | null>(null)
  const [feedbackPickerValue, setFeedbackPickerValue] = useState('')
  const [showRecurrencePicker, setShowRecurrencePicker] = useState(false)

  useEffect(() => {
    loadAction()
  }, [actionId])

  // Tap anywhere outside a menu/picker to dismiss it
  useEffect(() => {
    const anyOpen = showMenu || showReclassify || showFeedback || showRecurrencePicker
    if (!anyOpen) return
    function handleClick() {
      setShowMenu(false)
      setShowReclassify(false)
      setShowFeedback(false)
      setShowRecurrencePicker(false)
      setFeedbackPicker(null)
    }
    const timer = setTimeout(() => document.addEventListener('click', handleClick), 0)
    return () => { clearTimeout(timer); document.removeEventListener('click', handleClick) }
  }, [showMenu, showReclassify, showFeedback, showRecurrencePicker])

  async function loadAction() {
    try {
      const [actionData, triggerData] = await Promise.all([
        getAction(actionId),
        getTriggers({ actionId })
      ])
      setAction(actionData)
      setTriggers(triggerData)
      setDescription(actionData.description)
      setUrgency(actionData.urgency)
      setDueDate(actionData.dueDate ? actionData.dueDate.split('T')[0] : '')
    } catch (err) {
      console.error('Failed to load action:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleSave() {
    if (!action) return

    setSaving(true)
    try {
      await updateAction(action.id, {
        description,
        urgency,
        dueDate: dueDate || null,
        version: action.version
      })
      setEditing(false)
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to save:', err)
    } finally {
      setSaving(false)
    }
  }

  function handleCancelEdit() {
    if (!action) return
    setDescription(action.description)
    setUrgency(action.urgency)
    setDueDate(action.dueDate ? action.dueDate.split('T')[0] : '')
    setEditing(false)
  }

  async function handleReparse() {
    if (!action) return

    setReparsing(true)
    try {
      await reparseAction(action.id)
      setEditing(false)
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to reparse:', err)
    } finally {
      setReparsing(false)
    }
  }

  async function handleComplete() {
    if (!action) return

    try {
      const result = await completeAction(action.id)

      if (result.nextAction) {
        const nextDue = result.nextAction.dueDate
          ? new Date(result.nextAction.dueDate).toLocaleDateString()
          : 'scheduled'
        setNextCreatedMsg(`Marked complete. Next occurrence scheduled for ${nextDue}.`)
        setTimeout(() => {
          onUpdate()
          onClose()
        }, 3000)
      } else {
        onUpdate()
        onClose()
      }
    } catch (err) {
      console.error('Failed to complete:', err)
    }
  }

  async function handleSaveLeadTime() {
    if (!action) return
    const days = parseInt(leadTimeValue)
    if (isNaN(days) || days < 0 || days > 90) return

    try {
      await updateAction(action.id, { leadTimeDays: days, version: action.version })
      setEditingLeadTime(false)
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to update lead time:', err)
    }
  }

  async function handleConfirm() {
    if (!action) return

    try {
      await moveAction(action.id, 'ACTIONABLE_NOW')
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to confirm:', err)
    }
  }

  function handleTriggerUpdate() {
    loadAction()
    onUpdate()
  }

  async function handleFeedback(feedbackType: FeedbackType, correction?: string) {
    if (!action) return

    try {
      await submitTuningFeedback(action.id, feedbackType, correction)
      setShowFeedback(false)
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to submit feedback:', err)
    }
  }

  function handleDefer() {
    setShowDatePicker('defer')
    setDatePickerValue('')
    setShowMenu(false)
  }

  async function confirmDefer() {
    if (!action || !datePickerValue) return

    try {
      await createTrigger({
        actionId: action.id,
        type: 'DATE_EXACT',
        description: `Deferred until ${datePickerValue}`,
        triggerDate: datePickerValue
      })
      setShowDatePicker(null)
      setDatePickerValue('')
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to defer action:', err)
    }
  }

  function handleReclassify() {
    setShowReclassify(true)
    setShowMenu(false)
  }

  async function doReclassify(container: Container) {
    if (!action) return
    try {
      await moveAction(action.id, container)
      setShowReclassify(false)
      loadAction()
      onUpdate()
    } catch (err) {
      console.error('Failed to reclassify action:', err)
    }
  }

  function handleDeleteClick() {
    setShowMenu(false)
    setConfirmState({ type: 'delete' })
  }

  async function executeDelete() {
    if (!action) return
    try {
      await purgeAction(action.id)
      onUpdate()
      onClose()
    } catch (err) {
      console.error('Failed to delete action:', err)
    }
    setConfirmState(null)
  }

  function handleMergeClick() {
    setShowMenu(false)
    setConfirmState({ type: 'merge-id' })
  }

  async function executeMerge(primaryId: number) {
    if (!action) return
    try {
      await mergeActions(primaryId, action.id)
      onUpdate()
      onClose()
    } catch (err) {
      console.error('Failed to merge actions:', err)
    }
    setConfirmState(null)
  }

  async function executeArchive() {
    if (!action) return
    try {
      await deleteAction(action.id)
      onUpdate()
      onClose()
    } catch (err) {
      console.error('Failed to archive action:', err)
    }
    setConfirmState(null)
  }

  function handleConfirmAction(inputValue?: string) {
    if (!confirmState) return

    if (confirmState.type === 'delete') {
      executeDelete()
    } else if (confirmState.type === 'archive') {
      executeArchive()
    } else if (confirmState.type === 'merge-id') {
      const id = parseInt(inputValue || '')
      if (isNaN(id)) return
      setConfirmState({ type: 'merge-confirm', primaryId: id })
    } else if (confirmState.type === 'merge-confirm') {
      executeMerge(confirmState.primaryId)
    } else if (confirmState.type === 'text-correction') {
      if (inputValue?.trim()) {
        handleFeedback('parsed_wrong', inputValue.trim())
      }
      setConfirmState(null)
    }
  }

  // Containers available for reclassify and feedback — same grid buttons in both
  const containerOptions: Container[] = ['ACTIONABLE_NOW', 'CANDIDATES', 'AMBIGUITY', 'WAITING']
  const urgencyOptions: Urgency[] = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']

  if (loading) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!action) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>Action not found</p>
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }

  const pendingTriggers = triggers.filter(t => !t.isTriggered)
  const firedTriggers = triggers.filter(t => t.isTriggered)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content action-view" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {editing ? 'Edit Action' : 'Action Details'}
          </h2>
          <div className="action-view-actions">
            <button
              className="action-info-btn"
              onClick={() => setShowInfo(!showInfo)}
              title="View history"
            >
              i
            </button>
            <div className="menu-wrapper">
              <button
                className="action-info-btn"
                onClick={() => setShowMenu(!showMenu)}
                title="More options"
              >
                ⋯
              </button>
              {showMenu && (
                <div className="action-menu" onClick={e => e.stopPropagation()}>
                  <button className="action-menu-item" onClick={handleDefer}>Defer</button>
                  <button className="action-menu-item" onClick={handleReclassify}>Reclassify</button>
                  <button className="action-menu-item" onClick={handleMergeClick}>Merge</button>
                  <button className="action-menu-item" onClick={() => { setShowAddTrigger(true); setShowMenu(false) }}>Add to Waiting</button>
                  <button className="action-menu-item action-menu-item--danger" onClick={handleDeleteClick}>Delete</button>
                </div>
              )}
            </div>
            <button className="modal-close" onClick={onClose}>&times;</button>
          </div>
        </div>

        {editing ? (
          <div className="action-edit-form">
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Urgency</label>
              <select
                className="form-select"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as Urgency)}
              >
                {Object.entries(URGENCY_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-input"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div className="action-edit-buttons">
              <button
                className="btn btn-secondary"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleReparse}
                disabled={reparsing || saving}
              >
                {reparsing ? 'Parsing...' : 'Re-parse'}
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSave}
                disabled={saving || reparsing}
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="action-detail-content">
              <div className="action-detail-description">{action.description}</div>

              {action.needsClarification && (
                <div className="clarification-banner">
                  <div className="clarification-title">I categorized this the best I could, but I'm not confident about:</div>
                  {action.missingInfo ? (
                    <ul className="clarification-list">
                      {(JSON.parse(action.missingInfo) as string[]).map((item, i) => (
                        <li key={i} className="clarification-item">{item}</li>
                      ))}
                    </ul>
                  ) : action.aiReasoning ? (
                    <div className="clarification-detail">{action.aiReasoning}</div>
                  ) : (
                    <div className="clarification-detail">Review this action and edit any fields that seem off.</div>
                  )}
                </div>
              )}

              {/* Waiting summary — shows the AI's routing plan at a glance */}
              {action.container === 'WAITING' && (action.recurrenceRule || pendingTriggers.length > 0) && (
                <div className="waiting-summary">
                  {[
                    action.recurrenceRule && `↻ ${formatRecurrenceLabel(action.recurrenceRule)}`,
                    pendingTriggers.length > 0 && pendingTriggers[0].triggerDate &&
                      `Waiting until ${new Date(pendingTriggers[0].triggerDate).toLocaleDateString()}`,
                    action.dueDate && `Due ${new Date(action.dueDate).toLocaleDateString()}`
                  ].filter(Boolean).join('  ·  ')}
                </div>
              )}

              {/* Source attribution */}
              <div className="action-detail-source">
                {action.source?.type === 'GMAIL' ? (
                  <>
                    <div className="source-row">
                      <span className="detail-label">From</span>
                      <span className="detail-value">{action.source.emailFrom || 'Unknown'}</span>
                    </div>
                    <div className="source-row">
                      <span className="detail-label">Subject</span>
                      <span className="detail-value">{action.source.emailSubject || 'No subject'}</span>
                    </div>
                    {action.source.emailDate && (
                      <div className="source-row">
                        <span className="detail-label">Date</span>
                        <span className="detail-value">{new Date(action.source.emailDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    {action.source.emailId && (
                      <div className="source-row">
                        <a
                          href={`https://mail.google.com/mail/u/0/#inbox/${action.source.emailId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="source-gmail-link"
                        >
                          View in Gmail
                        </a>
                      </div>
                    )}
                  </>
                ) : action.source?.type === 'SIRI' ? (
                  <div className="source-row">
                    <span className="detail-label">Source</span>
                    <span className="detail-value">Via Siri</span>
                  </div>
                ) : (
                  <div className="source-row">
                    <span className="detail-label">Source</span>
                    <span className="detail-value">Manually entered</span>
                  </div>
                )}
              </div>

              {action.suggestedAction && (
                <div className="action-detail-suggested">
                  <span className="detail-label">Next step:</span>
                  {action.suggestedAction}
                </div>
              )}

              <div className="action-detail-meta">
                <div className="detail-row">
                  <span className="detail-label">Container</span>
                  <span className="detail-value">{CONTAINER_LABELS[action.container]}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Urgency</span>
                  <span className={`detail-value urgency-${action.urgency.toLowerCase()}`}>
                    {URGENCY_LABELS[action.urgency]}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Confidence</span>
                  <span className="detail-value">{Math.round(action.confidence * 100)}%</span>
                </div>
                {action.dueDate && (
                  <div className="detail-row">
                    <span className="detail-label">Due</span>
                    <span className="detail-value">
                      {new Date(action.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                <div className="detail-row">
                  <span className="detail-label">Repeats</span>
                  <span
                    className="detail-value detail-value-editable"
                    onClick={() => setShowRecurrencePicker(!showRecurrencePicker)}
                  >
                    {action.recurrenceRule
                      ? `↻ ${formatRecurrenceLabel(action.recurrenceRule)}`
                      : 'None'}
                  </span>
                </div>
                {showRecurrencePicker && (
                  <div className="recurrence-picker-inline" onClick={e => e.stopPropagation()}>
                    <div className="picker-grid picker-grid--3col">
                      {([
                        { label: 'Weekly', rule: 'FREQ=WEEKLY;INTERVAL=1', lead: 1 },
                        { label: 'Biweekly', rule: 'FREQ=WEEKLY;INTERVAL=2', lead: 1 },
                        { label: 'Monthly', rule: 'FREQ=MONTHLY;INTERVAL=1', lead: 3 },
                        { label: 'Quarterly', rule: 'FREQ=MONTHLY;INTERVAL=3', lead: 7 },
                        { label: 'Yearly', rule: 'FREQ=YEARLY;INTERVAL=1', lead: 21 },
                        { label: 'None', rule: null as string | null, lead: 21 },
                      ] as const).map(opt => (
                        <button
                          key={opt.label}
                          className={`picker-grid-btn${action.recurrenceRule === opt.rule ? ' picker-grid-btn--current' : ''}`}
                          disabled={action.recurrenceRule === opt.rule || (!action.recurrenceRule && opt.rule === null)}
                          onClick={async () => {
                            try {
                              await updateAction(action.id, {
                                recurrenceRule: opt.rule,
                                version: action.version
                              })
                              setShowRecurrencePicker(false)
                              loadAction()
                              onUpdate()
                            } catch (err) {
                              console.error('Failed to update recurrence:', err)
                            }
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {action.recurrenceRule && (
                  <div className="detail-row">
                    <span className="detail-label">Lead time</span>
                    {editingLeadTime ? (
                      <span className="detail-value lead-time-edit">
                        <input
                          type="number"
                          min="0"
                          max="90"
                          className="lead-time-input"
                          value={leadTimeValue}
                          onChange={(e) => setLeadTimeValue(e.target.value)}
                          autoFocus
                        />
                        <span className="lead-time-unit">days</span>
                        <button className="lead-time-save" onClick={handleSaveLeadTime}>Save</button>
                        <button className="lead-time-cancel" onClick={() => setEditingLeadTime(false)}>Cancel</button>
                      </span>
                    ) : (
                      <span
                        className="detail-value detail-value-editable"
                        onClick={() => { setLeadTimeValue(String(action.leadTimeDays)); setEditingLeadTime(true) }}
                      >
                        {action.leadTimeDays} days
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Triggers Section */}
              {(action.container === 'WAITING' || triggers.length > 0) && (
                <div className="triggers-section">
                  <div className="triggers-header">
                    <h3>Triggers</h3>
                    <button
                      className="add-trigger-btn"
                      onClick={() => setShowAddTrigger(true)}
                    >
                      + Add
                    </button>
                  </div>

                  {pendingTriggers.length === 0 && firedTriggers.length === 0 ? (
                    <p className="no-triggers">No triggers set. Add one to defer this action.</p>
                  ) : (
                    <>
                      {pendingTriggers.map(trigger => (
                        <TriggerCard
                          key={trigger.id}
                          trigger={trigger}
                          onUpdate={handleTriggerUpdate}
                        />
                      ))}
                      {firedTriggers.length > 0 && pendingTriggers.length > 0 && (
                        <div className="triggers-divider" />
                      )}
                      {firedTriggers.map(trigger => (
                        <TriggerCard
                          key={trigger.id}
                          trigger={trigger}
                          onUpdate={handleTriggerUpdate}
                        />
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>

            {showInfo && action.events && (
              <InfoPanel events={action.events} aiReasoning={action.aiReasoning} />
            )}

            {action.needsFollowUp && (
              <div className="followup-nudge-section">
                <div className="followup-nudge-title">Still important?</div>
                <div className="followup-nudge-subtitle">This action hasn't been touched in a while.</div>
                <div className="followup-nudge-buttons">
                  <button
                    className="btn btn-secondary followup-nudge-btn"
                    onClick={async () => {
                      await acknowledgeFollowUp(action.id)
                      loadAction()
                      onUpdate()
                    }}
                  >
                    Still relevant
                  </button>
                  <button
                    className="btn btn-secondary followup-nudge-btn"
                    onClick={() => {
                      setShowDatePicker('reschedule')
                      setDatePickerValue('')
                    }}
                  >
                    Reschedule
                  </button>
                  <button
                    className="btn btn-secondary followup-nudge-btn followup-archive-btn"
                    onClick={() => setConfirmState({ type: 'archive' })}
                  >
                    Archive
                  </button>
                </div>
              </div>
            )}

            {showDatePicker && (
              <div className="date-picker-inline">
                <span className="date-picker-label">
                  {showDatePicker === 'defer' ? 'Defer until:' : 'Reschedule to:'}
                </span>
                <input
                  type="date"
                  className="form-input"
                  value={datePickerValue}
                  onChange={(e) => setDatePickerValue(e.target.value)}
                  style={{ padding: '8px 10px', fontSize: '13px', flex: 1, minWidth: 0 }}
                />
                <button
                  className="btn btn-primary btn-sm"
                  disabled={!datePickerValue}
                  onClick={async () => {
                    if (showDatePicker === 'defer') {
                      await confirmDefer()
                    } else if (showDatePicker === 'reschedule' && action) {
                      try {
                        await updateAction(action.id, { dueDate: datePickerValue, version: action.version })
                        setShowDatePicker(null)
                        setDatePickerValue('')
                        loadAction()
                        onUpdate()
                      } catch (err) {
                        console.error('Failed to reschedule:', err)
                      }
                    }
                  }}
                >
                  Confirm
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => { setShowDatePicker(null); setDatePickerValue('') }}
                >
                  Cancel
                </button>
              </div>
            )}

            <div className="action-view-buttons">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              {action.needsTuning && (
                <button className="btn btn-primary" onClick={async () => {
                  await updateAction(action.id, { needsTuning: false, version: action.version })
                  onUpdate?.()
                }}>
                  Looks Good
                </button>
              )}
              {action.needsClarification && (
                <button className="btn btn-primary" onClick={async () => {
                  await updateAction(action.id, { needsClarification: false, version: action.version })
                  onUpdate?.()
                }}>
                  Looks Good
                </button>
              )}
              {action.container === 'CANDIDATES' && (
                <button className="btn btn-primary" onClick={handleConfirm}>
                  Move to Now
                </button>
              )}
              <button className="btn btn-secondary" onClick={() => setEditing(true)}>
                Edit
              </button>
              <button className="btn btn-success" onClick={handleComplete}>
                Mark Complete{action.recurrenceRule ? ' & Next' : ''}
              </button>
            </div>

            {nextCreatedMsg && (
              <div className="next-created-banner">
                {nextCreatedMsg}
              </div>
            )}

            <button
              className="feedback-btn"
              onClick={() => setShowFeedback(!showFeedback)}
            >
              AI parsed incorrectly?
            </button>

            {showFeedback && (
              <div className="feedback-panel" onClick={e => e.stopPropagation()}>
                <p className="feedback-title">What was wrong?</p>
                <div className="feedback-options">
                  {feedbackPicker === 'urgency' ? (
                    <div className="feedback-picker-inline">
                      <label className="feedback-picker-label">Correct urgency:</label>
                      <div className="picker-grid">
                        {urgencyOptions.map(u => (
                          <button
                            key={u}
                            className={`picker-grid-btn${feedbackPickerValue === u ? ' picker-grid-btn--selected' : ''}${action.urgency === u ? ' picker-grid-btn--current' : ''}`}
                            onClick={() => setFeedbackPickerValue(u)}
                            disabled={action.urgency === u}
                          >
                            {URGENCY_LABELS[u]}
                          </button>
                        ))}
                      </div>
                      <div className="feedback-picker-actions">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => { setFeedbackPicker(null); setFeedbackPickerValue('') }}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          disabled={!feedbackPickerValue}
                          onClick={() => {
                            handleFeedback('urgency_incorrect', feedbackPickerValue)
                            setFeedbackPicker(null)
                            setFeedbackPickerValue('')
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="feedback-option"
                      onClick={() => { setFeedbackPicker('urgency'); setFeedbackPickerValue('') }}
                    >
                      Wrong urgency level
                    </button>
                  )}
                  {feedbackPicker === 'container' ? (
                    <div className="feedback-picker-inline">
                      <label className="feedback-picker-label">Correct container:</label>
                      <div className="picker-grid">
                        {containerOptions.map(c => (
                          <button
                            key={c}
                            className={`picker-grid-btn${feedbackPickerValue === c ? ' picker-grid-btn--selected' : ''}${action.container === c ? ' picker-grid-btn--current' : ''}`}
                            onClick={() => setFeedbackPickerValue(c)}
                            disabled={action.container === c}
                          >
                            {CONTAINER_LABELS[c]}
                          </button>
                        ))}
                      </div>
                      <div className="feedback-picker-actions">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => { setFeedbackPicker(null); setFeedbackPickerValue('') }}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          disabled={!feedbackPickerValue}
                          onClick={() => {
                            handleFeedback('container_incorrect', feedbackPickerValue)
                            setFeedbackPicker(null)
                            setFeedbackPickerValue('')
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="feedback-option"
                      onClick={() => { setFeedbackPicker('container'); setFeedbackPickerValue('') }}
                    >
                      Wrong container
                    </button>
                  )}
                  <button
                    className="feedback-option"
                    onClick={() => setConfirmState({ type: 'text-correction' })}
                  >
                    Parsed text is wrong
                  </button>
                </div>
              </div>
            )}

            {showReclassify && (
              <div className="reclassify-panel" onClick={e => e.stopPropagation()}>
                <p className="feedback-title">Move to container:</p>
                <div className="picker-grid">
                  {containerOptions.map(c => (
                    <button
                      key={c}
                      className={`picker-grid-btn${action.container === c ? ' picker-grid-btn--current' : ''}`}
                      disabled={action.container === c}
                      onClick={() => doReclassify(c)}
                    >
                      {CONTAINER_LABELS[c]}
                    </button>
                  ))}
                </div>
                <button
                  className="btn btn-secondary btn-block"
                  style={{ marginTop: 8 }}
                  onClick={() => setShowReclassify(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </>
        )}

        {showAddTrigger && (
          <AddTriggerModal
            actionId={actionId}
            onClose={() => setShowAddTrigger(false)}
            onCreated={handleTriggerUpdate}
          />
        )}

        {confirmState && confirmState.type === 'delete' && (
          <ConfirmModal
            title="Delete Action"
            message={`Permanently delete "${action.description.substring(0, 60)}"? This cannot be undone.`}
            confirmLabel="Delete"
            danger
            onConfirm={() => handleConfirmAction()}
            onCancel={() => setConfirmState(null)}
          />
        )}

        {confirmState && confirmState.type === 'archive' && (
          <ConfirmModal
            title="Archive Action"
            message="Archive this action? You can find it later in search."
            confirmLabel="Archive"
            onConfirm={() => handleConfirmAction()}
            onCancel={() => setConfirmState(null)}
          />
        )}

        {confirmState && confirmState.type === 'merge-id' && (
          <ConfirmModal
            title="Merge Action"
            message="Enter the ID of the action to merge this into."
            confirmLabel="Next"
            inputMode
            inputPlaceholder="Action ID"
            inputLabel="Target action ID:"
            onConfirm={(val) => handleConfirmAction(val)}
            onCancel={() => setConfirmState(null)}
          />
        )}

        {confirmState && confirmState.type === 'merge-confirm' && (
          <ConfirmModal
            title="Confirm Merge"
            message={`Merge this action into action #${confirmState.primaryId}? This cannot be undone.`}
            confirmLabel="Merge"
            danger
            onConfirm={() => handleConfirmAction()}
            onCancel={() => setConfirmState(null)}
          />
        )}

        {confirmState && confirmState.type === 'text-correction' && (
          <ConfirmModal
            title="Correct Description"
            message="What should the parsed text say?"
            confirmLabel="Submit"
            inputMode
            inputPlaceholder="Corrected description..."
            inputLabel="Correct text:"
            onConfirm={(val) => handleConfirmAction(val)}
            onCancel={() => setConfirmState(null)}
          />
        )}

        <style>{`
          .action-view {
            max-height: 85vh;
          }
          .action-view-actions {
            display: flex;
            gap: 8px;
            align-items: center;
          }
          .menu-wrapper {
            position: relative;
          }
          .action-menu {
            position: absolute;
            top: 36px;
            right: 0;
            background: var(--bg-secondary);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 8px;
            z-index: 10;
            min-width: 140px;
            overflow: hidden;
          }
          .action-menu-item {
            display: block;
            width: 100%;
            padding: 16px 20px;
            background: none;
            border: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            color: var(--text-primary);
            font-size: 16px;
            text-align: left;
            cursor: pointer;
          }
          .action-menu-item:last-child {
            border-bottom: none;
          }
          .action-menu-item:hover {
            background: rgba(255,255,255,0.05);
          }
          .action-menu-item--danger {
            color: var(--urgency-critical);
          }
          .action-menu-item--danger:hover {
            background: rgba(239, 68, 68, 0.1);
          }
          .action-info-btn {
            width: 38px;
            height: 38px;
            border-radius: 19px;
            border: 1px solid var(--text-secondary);
            background: transparent;
            color: var(--text-secondary);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
          .action-detail-content {
            margin-bottom: 16px;
          }
          .action-detail-description {
            font-size: 17px;
            line-height: 1.5;
            margin-bottom: 12px;
          }
          .clarification-banner {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 12px;
          }
          .clarification-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--warning);
            margin-bottom: 4px;
          }
          .clarification-list {
            margin: 4px 0 0 0;
            padding-left: 20px;
          }
          .clarification-item {
            font-size: 16px;
            color: var(--text-primary);
            line-height: 1.6;
          }
          .clarification-detail {
            font-size: 16px;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          .action-detail-suggested {
            font-size: 16px;
            color: var(--text-secondary);
            padding: 12px;
            background: var(--bg-card);
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .action-detail-meta {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 8px 12px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            color: var(--text-secondary);
            font-size: 16px;
          }
          .detail-value {
            font-weight: 500;
            font-size: 16px;
          }
          .urgency-critical { color: var(--urgency-critical); }
          .urgency-high { color: var(--urgency-high); }
          .urgency-medium { color: var(--urgency-medium); }
          .urgency-low { color: var(--urgency-low); }
          .triggers-section {
            margin-top: 16px;
          }
          .triggers-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          }
          .triggers-header h3 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-secondary);
          }
          .add-trigger-btn {
            background: none;
            border: none;
            color: var(--accent);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
          .no-triggers {
            font-size: 16px;
            color: var(--text-secondary);
            padding: 12px;
            background: var(--bg-card);
            border-radius: 8px;
            text-align: center;
          }
          .triggers-divider {
            height: 1px;
            background: rgba(255,255,255,0.1);
            margin: 8px 0;
          }
          .detail-value-editable {
            cursor: pointer;
            border-bottom: 1px dashed var(--text-secondary);
          }
          .detail-value-editable:hover {
            color: var(--accent);
            border-bottom-color: var(--accent);
          }
          .lead-time-edit {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .lead-time-input {
            width: 60px;
            padding: 6px 8px;
            font-size: 16px;
            border: 1px solid var(--separator);
            border-radius: 4px;
            background: var(--bg-elevated);
            color: var(--text-primary);
            text-align: center;
          }
          .lead-time-unit {
            font-size: 16px;
            color: var(--text-secondary);
          }
          .lead-time-save, .lead-time-cancel {
            padding: 6px 12px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .lead-time-save {
            background: var(--accent);
            color: white;
          }
          .lead-time-cancel {
            background: transparent;
            color: var(--text-secondary);
          }
          .next-created-banner {
            background: rgba(52, 199, 89, 0.15);
            border: 1px solid rgba(52, 199, 89, 0.3);
            border-radius: 8px;
            padding: 14px 16px;
            margin-top: 12px;
            font-size: 16px;
            color: var(--success);
            text-align: center;
            font-weight: 500;
          }
          .followup-nudge-section {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-top: 16px;
          }
          .followup-nudge-title {
            font-size: 15px;
            font-weight: 600;
            color: var(--warning);
            margin-bottom: 4px;
          }
          .followup-nudge-subtitle {
            font-size: 16px;
            color: var(--text-secondary);
            margin-bottom: 10px;
          }
          .followup-nudge-buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .followup-nudge-btn {
            flex: 1;
            min-width: 80px;
            padding: 12px 16px;
            font-size: 16px;
          }
          .followup-archive-btn {
            color: var(--text-secondary);
          }
          .action-view-buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
            flex-wrap: wrap;
          }
          .action-view-buttons .btn {
            flex: 1;
            min-width: 80px;
          }
          .action-edit-buttons {
            display: flex;
            gap: 8px;
          }
          .action-edit-buttons .btn {
            flex: 1;
          }
          .feedback-btn {
            display: block;
            width: 100%;
            text-align: center;
            margin-top: 16px;
            padding: 12px;
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 16px;
            cursor: pointer;
          }
          .feedback-btn:hover {
            color: var(--text-primary);
          }
          .feedback-panel {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
          }
          .feedback-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          .feedback-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .feedback-option {
            padding: 14px 16px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: var(--text-primary);
            font-size: 16px;
            text-align: left;
            cursor: pointer;
            transition: background 0.2s;
          }
          .feedback-option:hover {
            background: rgba(255,255,255,0.1);
          }
          .reclassify-panel {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
          }
          .picker-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 4px;
          }
          .picker-grid--3col {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .recurrence-picker-inline {
            padding: 8px 0 4px;
          }
          .picker-grid-btn {
            padding: 16px;
            border: 1px solid var(--separator);
            border-radius: 8px;
            background: var(--bg-elevated);
            color: var(--text-primary);
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            font-family: inherit;
            transition: all 0.15s;
          }
          .picker-grid-btn:hover:not(:disabled) {
            background: rgba(0, 122, 255, 0.1);
            border-color: var(--color-now);
          }
          .picker-grid-btn--current {
            opacity: 0.35;
            cursor: default;
          }
          .picker-grid-btn--selected {
            background: rgba(0, 122, 255, 0.15);
            border-color: var(--accent);
            color: var(--accent);
          }
          .action-detail-source {
            background: var(--bg-card);
            border-radius: 8px;
            padding: 8px 12px;
            margin-bottom: 12px;
          }
          .source-row {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .source-row:last-child {
            border-bottom: none;
          }
          .source-gmail-link {
            color: var(--accent);
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
          }
          .source-gmail-link:hover {
            text-decoration: underline;
          }
          .date-picker-inline {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            background: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            margin-top: 12px;
          }
          .date-picker-label {
            font-size: 16px;
            color: var(--text-secondary);
            white-space: nowrap;
          }
          .btn-sm {
            padding: 10px 16px;
            font-size: 16px;
          }
          .feedback-picker-inline {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 10px 12px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
          }
          .feedback-picker-label {
            font-size: 16px;
            color: var(--text-secondary);
          }
          .feedback-picker-actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
          }
          .waiting-summary {
            background: rgba(50, 173, 230, 0.1);
            border: 1px solid rgba(50, 173, 230, 0.3);
            border-radius: 8px;
            padding: 12px 14px;
            margin-bottom: 12px;
            font-size: 15px;
            font-weight: 500;
            color: var(--color-waiting);
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  )
}
