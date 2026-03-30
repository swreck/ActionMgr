import { useEffect, useState } from 'react'
import { PromisesData, ActionWithParties, MorningBriefData } from '../types'
import { getPromisesToday, getMorningBrief, completeAction, updateAction, deleteAction, createTrigger } from '../api/client'
import ActionCard from '../components/ActionCard'
import ActionView from './ActionView'
import QuickCapture from '../components/QuickCapture'
import { refreshCounts } from '../components/ContainerNav'

interface PromisesViewProps {
  onShowFeed: () => void
  onShowWeeklyReview: () => void
  showWeeklyBanner: boolean
}

export default function PromisesView({ onShowFeed, onShowWeeklyReview, showWeeklyBanner }: PromisesViewProps) {
  const [data, setData] = useState<PromisesData | null>(null)
  const [brief, setBrief] = useState<MorningBriefData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedActionId, setSelectedActionId] = useState<number | null>(null)
  const [showCapture, setShowCapture] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const [promisesData, briefData] = await Promise.all([
        getPromisesToday(),
        getMorningBrief()
      ])
      setData(promisesData)
      setBrief(briefData)
    } catch (err) {
      console.error('Failed to load promises:', err)
    } finally {
      setLoading(false)
    }
  }

  function getPersonLabel(action: ActionWithParties): string | undefined {
    if (action.parties && action.parties.length > 0) {
      const names = action.parties.map(p => p.name).slice(0, 2)
      return `Promise to ${names.join(' & ')}`
    }
    if (action.source?.type === 'GMAIL' && action.source.emailFrom) {
      const email = action.source.emailFrom
      const name = email.split('<')[0].trim() || email.split('@')[0]
      return `From ${name}`
    }
    return undefined
  }

  async function handleComplete(id: number) {
    try {
      await completeAction(id)
      loadData()
      refreshCounts()
    } catch (err) {
      console.error('Complete failed:', err)
    }
  }

  async function handleDelete(id: number) {
    try {
      await deleteAction(id)
      loadData()
      refreshCounts()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  async function handlePostpone(id: number, date: string) {
    try {
      const action = data?.dueToday.find(a => a.id === id)
        || data?.becameReady.find(a => a.id === id)
        || data?.atRisk.find(a => a.id === id)
        || data?.comingUp.find(a => a.id === id)

      if (!action) return

      await updateAction(id, { dueDate: date, version: action.version })

      // Create a trigger so it surfaces at the right time
      await createTrigger({
        actionId: id,
        type: 'DATE_EXACT',
        triggerDate: date,
        description: `Postponed to ${new Date(date).toLocaleDateString()}`
      })

      loadData()
      refreshCounts()
    } catch (err) {
      console.error('Postpone failed:', err)
    }
  }

  function handleActionCreated() {
    setShowCapture(false)
    loadData()
    refreshCounts()
  }

  if (loading) {
    return (
      <div className="promises-view">
        <div className="promises-loading">Loading your day...</div>
      </div>
    )
  }

  const isEmpty = data &&
    data.dueToday.length === 0 &&
    data.becameReady.length === 0 &&
    data.atRisk.length === 0 &&
    data.comingUp.length === 0

  return (
    <div className="promises-view">
      {/* Morning brief card */}
      {brief && brief.summary && (
        <div className="promises-brief">
          <div className="brief-text">{brief.summary}</div>
          {brief.weekAhead > 0 && (
            <div className="brief-week">{brief.weekAhead} more coming this week</div>
          )}
        </div>
      )}

      {/* Weekly review banner */}
      {showWeeklyBanner && (
        <button className="weekly-review-banner" onClick={onShowWeeklyReview}>
          <span>Time for your weekly check-in</span>
          <span className="weekly-review-arrow">&rsaquo;</span>
        </button>
      )}

      {isEmpty ? (
        <div className="promises-empty">
          <svg className="promises-empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <div className="promises-empty-title">All clear</div>
          <div className="promises-empty-subtitle">No promises need attention today.</div>
        </div>
      ) : (
        <>
          {/* Due Today / Overdue */}
          {data && data.dueToday.length > 0 && (
            <PromisesSection
              title="Due Today"
              count={data.dueToday.length}
              accent="var(--urgency-high)"
            >
              {data.dueToday.map(action => (
                <ActionCard
                  key={action.id}
                  action={action}
                  personLabel={getPersonLabel(action)}
                  onClick={() => setSelectedActionId(action.id)}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                  onPostpone={handlePostpone}
                />
              ))}
            </PromisesSection>
          )}

          {/* Became Ready */}
          {data && data.becameReady.length > 0 && (
            <PromisesSection
              title="Became Ready"
              count={data.becameReady.length}
              accent="var(--success)"
            >
              {data.becameReady.map(action => (
                <ActionCard
                  key={action.id}
                  action={action}
                  personLabel={getPersonLabel(action)}
                  onClick={() => setSelectedActionId(action.id)}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                  onPostpone={handlePostpone}
                />
              ))}
            </PromisesSection>
          )}

          {/* At Risk */}
          {data && data.atRisk.length > 0 && (
            <PromisesSection
              title="At Risk"
              count={data.atRisk.length}
              accent="var(--urgency-critical)"
            >
              {data.atRisk.map(action => (
                <ActionCard
                  key={action.id}
                  action={action}
                  personLabel={getPersonLabel(action)}
                  onClick={() => setSelectedActionId(action.id)}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                  onPostpone={handlePostpone}
                />
              ))}
            </PromisesSection>
          )}

          {/* Coming Up */}
          {data && data.comingUp.length > 0 && (
            <PromisesSection
              title="Coming Up"
              count={data.comingUp.length}
              accent="var(--color-waiting)"
            >
              {data.comingUp.map(action => (
                <ActionCard
                  key={action.id}
                  action={action}
                  personLabel={getPersonLabel(action)}
                  onClick={() => setSelectedActionId(action.id)}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                  onPostpone={handlePostpone}
                />
              ))}
            </PromisesSection>
          )}
        </>
      )}

      {/* Link to full container view */}
      <button className="promises-show-all" onClick={onShowFeed}>
        View all actions
      </button>

      {/* FAB */}
      <button className="quick-capture" onClick={() => setShowCapture(true)}>+</button>

      {showCapture && (
        <QuickCapture
          onClose={() => setShowCapture(false)}
          onCreated={handleActionCreated}
        />
      )}

      {selectedActionId && (
        <ActionView
          actionId={selectedActionId}
          onClose={() => setSelectedActionId(null)}
          onUpdate={() => {
            loadData()
            refreshCounts()
            setSelectedActionId(null)
          }}
        />
      )}
    </div>
  )
}

// Section component
function PromisesSection({ title, count, accent, children }: {
  title: string
  count: number
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="promises-section">
      <div className="promises-section-header">
        <span className="promises-section-title">{title}</span>
        <span className="promises-section-count" style={{ color: accent }}>{count}</span>
      </div>
      <div className="promises-section-cards">
        {children}
      </div>
    </div>
  )
}
