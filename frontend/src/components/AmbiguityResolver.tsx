import { useState, useEffect } from 'react'
import { Action } from '../types'
import { getAction, parseClarify, parseConfirm, ParsedActionPreview } from '../api/client'

interface AmbiguityResolverProps {
  actionId: number
  onClose: () => void
  onResolved: () => void
}

export default function AmbiguityResolver({ actionId, onClose, onResolved }: AmbiguityResolverProps) {
  const [action, setAction] = useState<Action | null>(null)
  const [preview, setPreview] = useState<ParsedActionPreview | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [step, setStep] = useState<'loading' | 'questions' | 'preview' | 'saving'>('loading')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadAction()
  }, [actionId])

  async function loadAction() {
    try {
      const data = await getAction(actionId)
      setAction(data)

      // Generate initial questions based on the action
      const initialPreview: ParsedActionPreview = {
        description: data.description,
        shortDescription: data.shortDescription,
        suggestedAction: data.suggestedAction,
        urgency: data.urgency,
        dueDate: data.dueDate,
        confidence: data.confidence,
        reasoning: data.aiReasoning || '',
        parties: [],
        triggers: [],
        missingInfo: [],
        container: data.container,
        questions: generateQuestionsFromAction(data),
        rawInput: data.rawInput,
        recurrenceRule: null
      }

      setPreview(initialPreview)
      setStep('questions')
    } catch (err) {
      setError('Failed to load action')
      console.error(err)
    }
  }

  function generateQuestionsFromAction(action: Action): string[] {
    const questions: string[] = []

    // If no due date
    if (!action.dueDate) {
      questions.push('When does this need to be done?')
    }

    // If description is vague
    if (action.description.length < 20) {
      questions.push('Can you provide more details about what needs to be done?')
    }

    // If low confidence
    if (action.confidence < 0.5) {
      questions.push('What is the specific outcome you want to achieve?')
    }

    // Default question if none
    if (questions.length === 0) {
      questions.push('Is there anything else we should know about this action?')
    }

    return questions.slice(0, 3)
  }

  async function handleSubmitAnswers() {
    if (!preview || Object.keys(answers).length === 0) return

    setStep('loading')
    setError(null)

    try {
      const result = await parseClarify(preview.rawInput, answers)
      setPreview(result)

      if (result.container === 'AMBIGUITY' && result.questions.length > 0) {
        setAnswers({})
        setStep('questions')
      } else {
        setStep('preview')
      }
    } catch (err) {
      setError('Failed to process answers')
      setStep('questions')
      console.error(err)
    }
  }

  async function handleConfirm() {
    if (!preview) return

    setStep('saving')
    setError(null)

    try {
      await parseConfirm(preview)
      onResolved()
    } catch (err) {
      setError('Failed to save')
      setStep('preview')
      console.error(err)
    }
  }

  if (step === 'loading') {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Clarify Action</h2>
            <button className="modal-close" onClick={onClose}>&times;</button>
          </div>
          <div className="ambiguity-loading">
            <div className="spinner" />
            <p>Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Clarify Action</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        {action && (
          <div className="ambiguity-original">
            <span className="ambiguity-label">Original:</span>
            <p>{action.rawInput}</p>
          </div>
        )}

        {step === 'questions' && preview && (
          <div>
            <p className="ambiguity-intro">
              Please answer these questions to clarify this action:
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

            {error && <div className="ambiguity-error">{error}</div>}

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleSubmitAnswers}
              disabled={Object.keys(answers).length === 0}
            >
              Submit Answers
            </button>
          </div>
        )}

        {step === 'preview' && preview && (
          <div>
            <div className="ambiguity-preview">
              <div className="form-group">
                <label className="form-label">Clarified Description</label>
                <p className="ambiguity-description">{preview.description}</p>
              </div>

              {preview.suggestedAction && (
                <div className="form-group">
                  <label className="form-label">Next Step</label>
                  <p className="ambiguity-suggestion">{preview.suggestedAction}</p>
                </div>
              )}

              <div className="ambiguity-meta">
                <span>Will go to: <strong>{preview.container.replace('_', ' ')}</strong></span>
                <span>Confidence: <strong>{Math.round(preview.confidence * 100)}%</strong></span>
              </div>
            </div>

            {error && <div className="ambiguity-error">{error}</div>}

            <div className="ambiguity-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setAnswers({})
                  setStep('questions')
                }}
              >
                Add More Info
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        )}

        {step === 'saving' && (
          <div className="ambiguity-loading">
            <div className="spinner" />
            <p>Saving...</p>
          </div>
        )}

        <style>{`
          .ambiguity-original {
            background: var(--bg-card);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .ambiguity-original .ambiguity-label {
            font-size: 11px;
            color: var(--text-secondary);
            text-transform: uppercase;
          }
          .ambiguity-original p {
            margin-top: 4px;
            font-size: 14px;
          }
          .ambiguity-intro {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 16px;
          }
          .ambiguity-loading {
            text-align: center;
            padding: 32px;
          }
          .ambiguity-error {
            color: var(--urgency-critical);
            margin-bottom: 16px;
            font-size: 14px;
          }
          .ambiguity-preview {
            background: var(--bg-card);
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 16px;
          }
          .ambiguity-description {
            font-size: 15px;
            margin-top: 4px;
          }
          .ambiguity-suggestion {
            font-size: 14px;
            color: var(--text-secondary);
            margin-top: 4px;
          }
          .ambiguity-meta {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            font-size: 13px;
            color: var(--text-secondary);
          }
          .ambiguity-buttons {
            display: flex;
            gap: 8px;
          }
          .ambiguity-buttons .btn {
            flex: 1;
          }
        `}</style>
      </div>
    </div>
  )
}
