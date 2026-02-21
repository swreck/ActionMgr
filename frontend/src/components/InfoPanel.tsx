import { ActionEvent, EventType } from '../types'

interface InfoPanelProps {
  events: ActionEvent[]
  aiReasoning: string | null
}

const EVENT_LABELS: Record<EventType, string> = {
  CREATED: 'Created',
  CONTAINER_CHANGE: 'Moved',
  EDITED: 'Edited',
  MERGED: 'Merged',
  TRIGGER_FIRED: 'Trigger fired',
  AI_REPARSED: 'AI re-parsed',
  COMPLETED: 'Completed',
  ARCHIVED: 'Archived',
  FOLLOW_UP_SENT: 'Follow-up sent'
}

export default function InfoPanel({ events, aiReasoning }: InfoPanelProps) {
  function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  function getEventDescription(event: ActionEvent): string {
    const label = EVENT_LABELS[event.type]

    if (event.type === 'CONTAINER_CHANGE' && event.fromContainer && event.toContainer) {
      return `${label} from ${event.fromContainer} to ${event.toContainer}`
    }

    if (event.details) {
      try {
        const details = JSON.parse(event.details)
        if (details.source) {
          return `${label} via ${details.source}`
        }
        if (details.fields) {
          return `${label}: ${details.fields.join(', ')}`
        }
      } catch {
        // Ignore parse errors
      }
    }

    return label
  }

  return (
    <div className="info-panel">
      {aiReasoning && (
        <div className="info-section">
          <h4 className="info-section-title">AI Reasoning</h4>
          <p className="info-reasoning">{aiReasoning}</p>
        </div>
      )}

      <div className="info-section">
        <h4 className="info-section-title">History</h4>
        <div className="info-timeline">
          {events.map((event) => (
            <div key={event.id} className="timeline-item">
              <span className="timeline-time">{formatDate(event.createdAt)}</span>
              <span className="timeline-description">{getEventDescription(event)}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .info-panel {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .info-section {
          margin-bottom: 16px;
        }
        .info-section-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .info-reasoning {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          padding: 12px;
          background: var(--bg-card);
          border-radius: 8px;
        }
        .info-timeline {
          background: var(--bg-card);
          border-radius: 8px;
          padding: 8px 12px;
        }
        .timeline-item {
          display: flex;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 13px;
        }
        .timeline-item:last-child {
          border-bottom: none;
        }
        .timeline-time {
          color: var(--text-secondary);
          flex-shrink: 0;
          width: 100px;
        }
        .timeline-description {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  )
}
