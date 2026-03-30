import { useEffect, useState } from 'react'
import { WeeklyReviewData, ActionWithParties } from '../types'
import { getWeeklyReview, deleteAction, updateAction, acknowledgeFollowUp, createTrigger } from '../api/client'
import { refreshCounts } from '../components/ContainerNav'
import PostponePopover from '../components/PostponePopover'

interface WeeklyReviewProps {
  onClose: () => void
}

export default function WeeklyReview({ onClose }: WeeklyReviewProps) {
  const [data, setData] = useState<WeeklyReviewData | null>(null)
  const [loading, setLoading] = useState(true)
  const [postponeActionId, setPostponeActionId] = useState<number | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const result = await getWeeklyReview()
      setData(result)
    } catch (err) {
      console.error('Failed to load weekly review:', err)
    } finally {
      setLoading(false)
    }
  }

  function getPersonLabel(action: ActionWithParties): string | undefined {
    if (action.parties && action.parties.length > 0) {
      return action.parties.map(p => p.name).slice(0, 2).join(' & ')
    }
    if (action.source?.type === 'GMAIL' && action.source.emailFrom) {
      return action.source.emailFrom.split('@')[0].replace(/[._]/g, ' ')
    }
    return undefined
  }

  async function handleRecommit(id: number) {
    try {
      await acknowledgeFollowUp(id)
      loadData()
    } catch (err) {
      console.error('Recommit failed:', err)
    }
  }

  async function handleLetGo(id: number) {
    try {
      await deleteAction(id)
      loadData()
      refreshCounts()
    } catch (err) {
      console.error('Archive failed:', err)
    }
  }

  async function handlePostpone(id: number, date: string) {
    try {
      const action = data?.atRisk.find(a => a.id === id)
      if (!action) return

      await updateAction(id, { dueDate: date, version: action.version })
      await createTrigger({
        actionId: id,
        type: 'DATE_EXACT',
        triggerDate: date,
        description: `Postponed to ${new Date(date).toLocaleDateString()}`
      })

      setPostponeActionId(null)
      loadData()
      refreshCounts()
    } catch (err) {
      console.error('Postpone failed:', err)
    }
  }

  function formatDueDate(dateStr: string | null): string {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return `${days[date.getDay()]}, ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
  }

  // Dismiss the weekly review for this week
  function handleDone() {
    localStorage.setItem('weeklyReviewDismissed', new Date().toISOString().split('T')[0])
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleDone}>
      <div className="modal-content weekly-review" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Weekly Check-in</h2>
          <button className="modal-close" onClick={handleDone}>&times;</button>
        </div>

        {loading ? (
          <div className="weekly-loading">Loading your week...</div>
        ) : data ? (
          <div className="weekly-sections">
            {/* Completed */}
            <div className="weekly-section">
              <h3 className="weekly-section-title weekly-section-kept">
                Completed this week
                {data.keptThisWeek.length > 0 && (
                  <span className="weekly-section-count">{data.keptThisWeek.length}</span>
                )}
              </h3>
              {data.keptThisWeek.length === 0 ? (
                <p className="weekly-empty">Nothing completed this week.</p>
              ) : (
                <div className="weekly-kept-list">
                  {data.keptThisWeek.map(action => {
                    const person = getPersonLabel(action)
                    return (
                      <div key={action.id} className="weekly-kept-item">
                        <svg className="weekly-kept-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <div className="weekly-kept-text">
                          <div className="weekly-kept-desc">{action.shortDescription || action.description}</div>
                          {person && <div className="weekly-kept-person">to {person}</div>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* At Risk */}
            {data.atRisk.length > 0 && (
              <div className="weekly-section">
                <h3 className="weekly-section-title weekly-section-risk">
                  At risk
                  <span className="weekly-section-count">{data.atRisk.length}</span>
                </h3>
                <p className="weekly-section-desc">These have been sitting a while. What would you like to do?</p>
                <div className="weekly-risk-list">
                  {data.atRisk.map(action => {
                    const person = getPersonLabel(action)
                    const daysAgo = Math.floor((Date.now() - new Date(action.updatedAt).getTime()) / (1000 * 60 * 60 * 24))
                    return (
                      <div key={action.id} className="weekly-risk-item">
                        <div className="weekly-risk-top">
                          <div className="weekly-risk-desc">{action.shortDescription || action.description}</div>
                          {person && <div className="weekly-risk-person">to {person}</div>}
                          <div className="weekly-risk-age">Untouched for {daysAgo} days</div>
                        </div>
                        <div className="weekly-risk-actions">
                          <button className="weekly-risk-btn recommit" onClick={() => handleRecommit(action.id)}>
                            Recommit
                          </button>
                          <button className="weekly-risk-btn postpone" onClick={() => setPostponeActionId(action.id)}>
                            Push forward
                          </button>
                          <button className="weekly-risk-btn letgo" onClick={() => handleLetGo(action.id)}>
                            Let go
                          </button>
                        </div>

                        {postponeActionId === action.id && (
                          <PostponePopover
                            onPostpone={(date) => handlePostpone(action.id, date)}
                            onClose={() => setPostponeActionId(null)}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Coming Up */}
            {data.comingUp.length > 0 && (
              <div className="weekly-section">
                <h3 className="weekly-section-title weekly-section-upcoming">
                  Coming up next week
                  <span className="weekly-section-count">{data.comingUp.length}</span>
                </h3>
                <div className="weekly-upcoming-list">
                  {data.comingUp.map(action => {
                    const person = getPersonLabel(action)
                    return (
                      <div key={action.id} className="weekly-upcoming-item">
                        <div className="weekly-upcoming-date">{formatDueDate(action.dueDate)}</div>
                        <div className="weekly-upcoming-desc">{action.shortDescription || action.description}</div>
                        {person && <div className="weekly-upcoming-person">to {person}</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        ) : null}

        <button className="btn btn-primary btn-block weekly-done-btn" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  )
}
