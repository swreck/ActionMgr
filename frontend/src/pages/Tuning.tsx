import { useState, useEffect } from 'react'
import {
  getTuningRules,
  getTuningStats,
  activateTuningRule,
  rejectTuningRule,
  deleteTuningRule,
  askLessOften,
  TuningRule,
  TuningStats
} from '../api/client'
import ConfirmModal from '../components/ConfirmModal'

interface TuningProps {
  onClose: () => void
}

type TabType = 'proposed' | 'shadow' | 'active' | 'rejected'

type TuningConfirm =
  | null
  | { type: 'delete'; ruleId: number }
  | { type: 'reject-feedback'; ruleId: number }

export default function Tuning({ onClose }: TuningProps) {
  const [rules, setRules] = useState<TuningRule[]>([])
  const [stats, setStats] = useState<TuningStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('proposed')
  const [rejectingId, setRejectingId] = useState<number | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [tuningConfirm, setTuningConfirm] = useState<TuningConfirm>(null)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const [rulesData, statsData] = await Promise.all([
        getTuningRules(),
        getTuningStats()
      ])
      setRules(rulesData)
      setStats(statsData)
    } catch (err) {
      console.error('Failed to load tuning data:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleActivate(ruleId: number) {
    try {
      await activateTuningRule(ruleId)
      loadData()
    } catch (err) {
      console.error('Failed to activate rule:', err)
    }
  }

  async function handleReject(ruleId: number, dontAskAgain = false, feedback?: string) {
    try {
      await rejectTuningRule(ruleId, feedback, dontAskAgain)
      setRejectingId(null)
      setTuningConfirm(null)
      loadData()
    } catch (err) {
      console.error('Failed to reject rule:', err)
    }
  }

  async function handleAskLess(ruleId: number) {
    try {
      await askLessOften(ruleId)
      loadData()
    } catch (err) {
      console.error('Failed to update threshold:', err)
    }
  }

  async function handleDelete(ruleId: number) {
    try {
      await deleteTuningRule(ruleId)
      setTuningConfirm(null)
      loadData()
    } catch (err) {
      console.error('Failed to delete rule:', err)
    }
  }

  const filteredRules = rules.filter(r => {
    switch (activeTab) {
      case 'proposed': return r.status === 'PROPOSED'
      case 'shadow': return r.status === 'SHADOW'
      case 'active': return r.status === 'ACTIVE'
      case 'rejected': return r.status === 'REJECTED'
    }
  })

  function getStatusLabel(status: string): string {
    switch (status) {
      case 'SHADOW': return 'Testing'
      case 'PROPOSED': return 'Ready'
      case 'ACTIVE': return 'Active'
      case 'REJECTED': return 'Rejected'
      default: return status
    }
  }

  function getSuccessRate(rule: TuningRule): number {
    if (rule.shadowCount === 0) return 0
    return Math.round((rule.shadowSuccesses / rule.shadowCount) * 100)
  }

  return (
    <div className="tuning-overlay">
      <div className="tuning-container">
        <div className="tuning-header">
          <h2 className="tuning-title">AI Tuning</h2>
          <button className="tuning-close" onClick={onClose}>Done</button>
        </div>

        {stats && (
          <div className="tuning-stats">
            <div className="stat-item">
              <span className="stat-value">{stats.counts.active}</span>
              <span className="stat-label">Active Rules</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.counts.proposed}</span>
              <span className="stat-label">Pending Review</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.counts.shadow}</span>
              <span className="stat-label">Testing</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.avgSuccessRate}%</span>
              <span className="stat-label">Avg Success</span>
            </div>
          </div>
        )}

        <div className="tuning-tabs">
          <button
            className={`tuning-tab ${activeTab === 'proposed' ? 'active' : ''}`}
            onClick={() => setActiveTab('proposed')}
          >
            Pending {stats && stats.counts.proposed > 0 && `(${stats.counts.proposed})`}
          </button>
          <button
            className={`tuning-tab ${activeTab === 'shadow' ? 'active' : ''}`}
            onClick={() => setActiveTab('shadow')}
          >
            Testing
          </button>
          <button
            className={`tuning-tab ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button
            className={`tuning-tab ${activeTab === 'rejected' ? 'active' : ''}`}
            onClick={() => setActiveTab('rejected')}
          >
            Rejected
          </button>
        </div>

        <div className="tuning-content">
          {loading ? (
            <div className="tuning-loading">Loading...</div>
          ) : filteredRules.length === 0 ? (
            <div className="tuning-empty">
              {rules.length === 0 ? (
                <>
                  <p>No tuning rules yet.</p>
                  <p className="tuning-hint">
                    Tuning rules help the AI learn from your corrections. When you correct an action's urgency or container, the system creates rules to improve future parsing.
                  </p>
                </>
              ) : (
                <>
                  {activeTab === 'proposed' && 'No rules ready for review.'}
                  {activeTab === 'shadow' && 'No rules currently testing.'}
                  {activeTab === 'active' && 'No active tuning rules.'}
                  {activeTab === 'rejected' && 'No rejected rules.'}
                  <p className="tuning-hint">
                    Tuning rules are created when you provide feedback on AI-parsed actions.
                  </p>
                </>
              )}
            </div>
          ) : (
            filteredRules.map(rule => {
              const isExpanded = expandedId === rule.id
              return (
                <div key={rule.id} className={`rule-card ${isExpanded ? 'rule-card-expanded' : ''}`}>
                  <div
                    className="rule-collapsed"
                    onClick={() => setExpandedId(isExpanded ? null : rule.id)}
                  >
                    <div className="rule-collapsed-top">
                      <span className={`rule-category category-${rule.category}`}>
                        {rule.category}
                      </span>
                      <span className={`rule-status status-${rule.status.toLowerCase()}`}>
                        {getStatusLabel(rule.status)}
                      </span>
                      <span className="rule-expand-icon">{isExpanded ? '\u25B2' : '\u25BC'}</span>
                    </div>
                    <div className="rule-description-collapsed">
                      {isExpanded ? rule.description : (
                        rule.description.length > 60
                          ? rule.description.slice(0, 60) + '...'
                          : rule.description
                      )}
                    </div>
                    {!isExpanded && (rule.status === 'SHADOW' || rule.status === 'PROPOSED') && (
                      <div className="rule-progress">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${Math.min((rule.shadowCount / rule.shadowThreshold) * 100, 100)}%`
                            }}
                          />
                        </div>
                        <span className="progress-text">
                          {rule.shadowCount}/{rule.shadowThreshold} tests
                          ({getSuccessRate(rule)}% success)
                        </span>
                      </div>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="rule-expanded-body">
                      <div className="rule-details">
                        <div className="rule-detail">
                          <span className="detail-label">When:</span>
                          <span className="detail-text">{rule.condition}</span>
                        </div>
                        <div className="rule-detail">
                          <span className="detail-label">Then:</span>
                          <span className="detail-text">{rule.transformation}</span>
                        </div>
                      </div>

                      {(rule.status === 'SHADOW' || rule.status === 'PROPOSED') && (
                        <div className="rule-progress">
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{
                                width: `${Math.min((rule.shadowCount / rule.shadowThreshold) * 100, 100)}%`
                              }}
                            />
                          </div>
                          <span className="progress-text">
                            {rule.shadowCount}/{rule.shadowThreshold} tests
                            ({getSuccessRate(rule)}% success)
                          </span>
                        </div>
                      )}

                      {rule.userFeedback && (
                        <div className="rule-feedback">
                          <span className="detail-label">Feedback:</span>
                          {rule.userFeedback}
                        </div>
                      )}

                      <div className="rule-actions">
                        {rule.status === 'PROPOSED' && rejectingId !== rule.id && (
                          <>
                            <button
                              className="btn btn-success btn-small"
                              onClick={(e) => { e.stopPropagation(); handleActivate(rule.id) }}
                            >
                              Activate
                            </button>
                            <button
                              className="btn btn-secondary btn-small"
                              onClick={(e) => { e.stopPropagation(); setRejectingId(rule.id) }}
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {rule.status === 'PROPOSED' && rejectingId === rule.id && (
                          <div className="reject-options">
                            <button
                              className="btn btn-secondary btn-small"
                              onClick={(e) => { e.stopPropagation(); setTuningConfirm({ type: 'reject-feedback', ruleId: rule.id }) }}
                            >
                              Just reject
                            </button>
                            <button
                              className="btn btn-secondary btn-small reject-stop"
                              onClick={(e) => { e.stopPropagation(); handleReject(rule.id, true) }}
                            >
                              Stop {rule.category} suggestions
                            </button>
                            <button
                              className="btn btn-secondary btn-small"
                              onClick={(e) => { e.stopPropagation(); handleAskLess(rule.id); setRejectingId(null) }}
                            >
                              Ask less often
                            </button>
                            <button
                              className="btn-link"
                              onClick={(e) => { e.stopPropagation(); setRejectingId(null) }}
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                        {rule.status === 'SHADOW' && (
                          <button
                            className="btn btn-primary btn-small"
                            onClick={(e) => { e.stopPropagation(); handleActivate(rule.id) }}
                          >
                            Activate Early
                          </button>
                        )}
                        <button
                          className="btn-link danger"
                          onClick={(e) => { e.stopPropagation(); setTuningConfirm({ type: 'delete', ruleId: rule.id }) }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>

      {tuningConfirm?.type === 'delete' && (
        <ConfirmModal
          title="Delete Rule"
          message="Delete this tuning rule?"
          confirmLabel="Delete"
          danger
          onConfirm={() => handleDelete(tuningConfirm.ruleId)}
          onCancel={() => setTuningConfirm(null)}
        />
      )}

      {tuningConfirm?.type === 'reject-feedback' && (
        <ConfirmModal
          title="Reject Rule"
          message="Why are you rejecting this rule?"
          confirmLabel="Reject"
          inputMode
          inputPlaceholder="Reason (optional)"
          inputLabel="Feedback:"
          onConfirm={(val) => handleReject(tuningConfirm.ruleId, false, val || undefined)}
          onCancel={() => setTuningConfirm(null)}
        />
      )}

      <style>{`
        .tuning-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .tuning-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: env(safe-area-inset-top);
        }
        .tuning-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tuning-title {
          font-size: 18px;
          font-weight: 600;
        }
        .tuning-close {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .tuning-stats {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .stat-item {
          flex: 1;
          text-align: center;
          padding: 8px;
          background: var(--bg-card);
          border-radius: 8px;
        }
        .stat-value {
          display: block;
          font-size: 20px;
          font-weight: 600;
          color: var(--accent);
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-secondary);
        }
        .tuning-tabs {
          display: flex;
          padding: 0 16px;
          gap: 4px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tuning-tab {
          flex: 1;
          padding: 12px 8px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tuning-tab.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .tuning-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        .tuning-loading,
        .tuning-empty {
          text-align: center;
          padding: 48px 16px;
          color: var(--text-secondary);
        }
        .tuning-hint {
          margin-top: 12px;
          font-size: 13px;
        }
        .rule-card {
          background: var(--bg-card);
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .rule-card-expanded {
          border: 1px solid rgba(255,255,255,0.1);
        }
        .rule-collapsed {
          padding: 16px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .rule-collapsed:active {
          background: rgba(255,255,255,0.03);
        }
        .rule-collapsed-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .rule-expand-icon {
          margin-left: auto;
          font-size: 10px;
          color: var(--text-secondary);
        }
        .rule-description-collapsed {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .rule-expanded-body {
          padding: 0 16px 16px;
        }
        .rule-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .rule-category {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          background: rgba(255,255,255,0.1);
        }
        .category-urgency { background: rgba(249,115,22,0.2); color: var(--urgency-high); }
        .category-container { background: rgba(139,92,246,0.2); color: #a78bfa; }
        .category-extraction { background: rgba(59,130,246,0.2); color: #60a5fa; }
        .rule-status {
          font-size: 11px;
          font-weight: 500;
        }
        .status-shadow { color: var(--text-secondary); }
        .status-proposed { color: var(--warning); }
        .status-active { color: var(--success); }
        .status-rejected { color: var(--urgency-critical); }
        .rule-description {
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .rule-details {
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 12px;
        }
        .rule-detail {
          font-size: 13px;
          margin-bottom: 8px;
        }
        .rule-detail:last-child {
          margin-bottom: 0;
        }
        .detail-label {
          color: var(--text-secondary);
          margin-right: 8px;
        }
        .detail-text {
          color: var(--text-primary);
        }
        .rule-progress {
          margin-bottom: 12px;
        }
        .progress-bar {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 4px;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent);
          transition: width 0.3s;
        }
        .progress-text {
          font-size: 11px;
          color: var(--text-secondary);
        }
        .rule-feedback {
          font-size: 13px;
          padding: 8px;
          background: rgba(251,191,36,0.1);
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .rule-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
        }
        .btn-small {
          padding: 6px 12px;
          font-size: 13px;
        }
        .btn-link.danger {
          color: var(--urgency-critical);
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 13px;
          cursor: pointer;
          padding: 4px;
        }
        .reject-options {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }
        .reject-stop {
          color: var(--urgency-critical);
          border-color: rgba(239,68,68,0.3);
        }
        .category-meta {
          background: rgba(255,255,255,0.1);
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}
