import { useState } from 'react'
import { URGENCY_LABELS, CONTAINER_LABELS, Container } from '../types'
import { parsePreview, parseConfirm, parseClarify, ParsedActionPreview } from '../api/client'
import { formatRecurrenceLabel } from '../utils/recurrence'

interface QuickCaptureProps {
  onClose: () => void
  onCreated: () => void
}

type Step = 'input' | 'parsing' | 'preview' | 'clarify'

export default function QuickCapture({ onClose, onCreated }: QuickCaptureProps) {
  const [step, setStep] = useState<Step>('input')
  const [rawText, setRawText] = useState('')
  const [preview, setPreview] = useState<ParsedActionPreview | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [error, setError] = useState<string | null>(null)

  async function handleParse() {
    if (!rawText.trim()) {
      setError('Please enter a description')
      return
    }

    setStep('parsing')
    setError(null)

    try {
      const result = await parsePreview(rawText.trim())
      setPreview(result)

      if (result.container === 'AMBIGUITY' && result.questions.length > 0) {
        setStep('clarify')
      } else {
        setStep('preview')
      }
    } catch (err) {
      setError('Failed to parse action')
      setStep('input')
      console.error(err)
    }
  }

  async function handleClarify() {
    if (!preview) return

    setStep('parsing')
    setError(null)

    try {
      const result = await parseClarify(preview.rawInput, answers)
      setPreview(result)

      if (result.container === 'AMBIGUITY' && result.questions.length > 0) {
        setAnswers({})
        setStep('clarify')
      } else {
        setStep('preview')
      }
    } catch (err) {
      setError('Failed to clarify')
      setStep('clarify')
      console.error(err)
    }
  }

  async function handleConfirm() {
    if (!preview) return

    setStep('parsing')
    setError(null)

    try {
      await parseConfirm(preview)
      onCreated()
    } catch (err) {
      setError('Failed to save action')
      setStep('preview')
      console.error(err)
    }
  }

  function handleEdit(field: keyof ParsedActionPreview, value: string) {
    if (!preview) return
    setPreview({
      ...preview,
      [field]: value
    })
  }

  function getConfidenceColor(): string {
    if (!preview) return 'var(--text-secondary)'
    if (preview.confidence >= 0.8) return 'var(--success)'
    if (preview.confidence >= 0.5) return 'var(--warning)'
    return 'var(--urgency-critical)'
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {step === 'input' && 'New Action'}
            {step === 'parsing' && 'Analyzing...'}
            {step === 'preview' && 'Review Action'}
            {step === 'clarify' && 'Need More Info'}
          </h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        {/* Step 1: Raw input */}
        {step === 'input' && (
          <div>
            <div className="form-group">
              <label className="form-label">What needs to be done?</label>
              <textarea
                className="form-textarea"
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="e.g., Call John about the project proposal by Friday"
                autoFocus
                rows={3}
              />
              <p className="form-hint">
                Include details like who, what, when - AI will extract the action
              </p>
            </div>

            {error && <div className="form-error">{error}</div>}

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleParse}
            >
              Parse with AI
            </button>
          </div>
        )}

        {/* Step 2: Loading */}
        {step === 'parsing' && (
          <div className="parsing-state">
            <div className="parsing-spinner" />
            <p>Analyzing your input...</p>
          </div>
        )}

        {/* Step 3: Preview parsed result */}
        {step === 'preview' && preview && (
          <div>
            <div className="preview-section">
              <div className="preview-confidence" style={{ color: getConfidenceColor() }}>
                {Math.round(preview.confidence * 100)}% confident
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  value={preview.description}
                  onChange={(e) => handleEdit('description', e.target.value)}
                  rows={2}
                />
              </div>

              {preview.suggestedAction && (
                <div className="form-group">
                  <label className="form-label">Suggested Next Step</label>
                  <input
                    type="text"
                    className="form-input"
                    value={preview.suggestedAction}
                    onChange={(e) => handleEdit('suggestedAction', e.target.value)}
                  />
                </div>
              )}

              <div className="preview-meta">
                <div className="preview-meta-item">
                  <span className="preview-meta-label">Container</span>
                  <select
                    className="form-select form-select-small"
                    value={preview.container}
                    onChange={(e) => handleEdit('container', e.target.value)}
                  >
                    {(['ACTIONABLE_NOW', 'CANDIDATES', 'WAITING', 'AMBIGUITY'] as Container[]).map(c => (
                      <option key={c} value={c}>{CONTAINER_LABELS[c]}</option>
                    ))}
                  </select>
                </div>
                <div className="preview-meta-item">
                  <span className="preview-meta-label">Urgency</span>
                  <select
                    className="form-select form-select-small"
                    value={preview.urgency}
                    onChange={(e) => handleEdit('urgency', e.target.value)}
                  >
                    {Object.entries(URGENCY_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
                {preview.dueDate && (
                  <div className="preview-meta-item">
                    <span className="preview-meta-label">Due</span>
                    <input
                      type="date"
                      className="form-input form-input-small"
                      value={preview.dueDate}
                      onChange={(e) => handleEdit('dueDate', e.target.value)}
                    />
                  </div>
                )}
              </div>

              {preview.parties.length > 0 && (
                <div className="preview-parties">
                  <span className="preview-meta-label">People:</span>
                  {preview.parties.map((p, i) => (
                    <span key={i} className="party-chip">{p.name}</span>
                  ))}
                </div>
              )}

              {preview.recurrenceRule && (
                <div className="preview-recurrence">
                  <span className="preview-meta-label">Repeats</span>
                  <span className="preview-recurrence-value">↻ {formatRecurrenceLabel(preview.recurrenceRule)}</span>
                  {preview.leadTimeDays !== undefined && (
                    <span className="preview-lead-time">(surfaces {preview.leadTimeDays} days before due)</span>
                  )}
                </div>
              )}

              {preview.reasoning && (
                <div className="preview-reasoning">
                  <span className="preview-meta-label">AI Reasoning</span>
                  <p>{preview.reasoning}</p>
                </div>
              )}
            </div>

            {error && <div className="form-error">{error}</div>}

            <div className="preview-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setStep('input')}
              >
                Edit Input
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirm}
              >
                Save Action
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Clarifying questions */}
        {step === 'clarify' && preview && (
          <div>
            <p className="clarify-intro">
              Please answer these questions to clarify your action:
            </p>

            {preview.questions.map((question, i) => (
              <div key={i} className="form-group">
                <label className="form-label">{question}</label>
                <input
                  type="text"
                  className="form-input"
                  value={answers[question] || ''}
                  onChange={(e) => setAnswers({ ...answers, [question]: e.target.value })}
                  placeholder="Your answer..."
                />
              </div>
            ))}

            {error && <div className="form-error">{error}</div>}

            <div className="preview-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setStep('input')}
              >
                Start Over
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClarify}
                disabled={Object.keys(answers).length === 0}
              >
                Submit Answers
              </button>
            </div>
          </div>
        )}

        <style>{`
          .form-hint {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 6px;
          }
          .form-error {
            color: var(--urgency-critical);
            margin-bottom: 16px;
            font-size: 14px;
          }
          .parsing-state {
            text-align: center;
            padding: 32px;
          }
          .parsing-spinner {
            width: 32px;
            height: 32px;
            border: 3px solid var(--bg-card);
            border-top-color: var(--accent);
            border-radius: 50%;
            margin: 0 auto 16px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .preview-section {
            margin-bottom: 16px;
          }
          .preview-confidence {
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .preview-meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 12px;
          }
          .preview-meta-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .preview-meta-label {
            font-size: 11px;
            color: var(--text-secondary);
            text-transform: uppercase;
          }
          .preview-meta-value {
            font-size: 14px;
            font-weight: 500;
          }
          .form-select-small,
          .form-input-small {
            padding: 6px 8px;
            font-size: 13px;
          }
          .preview-parties {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 12px;
            flex-wrap: wrap;
          }
          .party-chip {
            background: var(--bg-card);
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 13px;
          }
          .preview-recurrence {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 12px;
            padding: 10px 12px;
            background: var(--bg-card);
            border-radius: 8px;
          }
          .preview-recurrence-value {
            font-size: 14px;
            font-weight: 500;
          }
          .preview-lead-time {
            font-size: 12px;
            color: var(--text-secondary);
          }
          .preview-reasoning {
            margin-top: 16px;
            padding: 12px;
            background: var(--bg-card);
            border-radius: 8px;
          }
          .preview-reasoning p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
            line-height: 1.5;
          }
          .preview-buttons {
            display: flex;
            gap: 8px;
          }
          .preview-buttons .btn {
            flex: 1;
          }
          .clarify-intro {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 16px;
          }
        `}</style>
      </div>
    </div>
  )
}
