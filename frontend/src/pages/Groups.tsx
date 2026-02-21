import { useState, useEffect } from 'react'
import {
  getGroups,
  getGroupSuggestions,
  createGroup,
  deleteGroup,
  ActionGroup,
  GroupSuggestion
} from '../api/client'
import { URGENCY_LABELS } from '../types'

interface GroupsProps {
  onClose: () => void
  onSelectAction: (actionId: number) => void
}

export default function Groups({ onClose, onSelectAction }: GroupsProps) {
  const [groups, setGroups] = useState<ActionGroup[]>([])
  const [suggestions, setSuggestions] = useState<GroupSuggestion[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const [newGroupDescription, setNewGroupDescription] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const [groupsData, suggestionsData] = await Promise.all([
        getGroups(),
        getGroupSuggestions()
      ])
      setGroups(groupsData)
      setSuggestions(suggestionsData.suggestions)
    } catch (err) {
      console.error('Failed to load groups:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreateGroup() {
    if (!newGroupName.trim()) return

    try {
      await createGroup({
        name: newGroupName.trim(),
        description: newGroupDescription.trim() || undefined
      })
      setNewGroupName('')
      setNewGroupDescription('')
      setShowCreateModal(false)
      loadData()
    } catch (err) {
      console.error('Failed to create group:', err)
    }
  }

  async function handleAcceptSuggestion(suggestion: GroupSuggestion) {
    try {
      await createGroup({
        name: suggestion.suggestedName,
        description: suggestion.reason,
        actionIds: suggestion.actionIds
      })
      loadData()
    } catch (err) {
      console.error('Failed to create group from suggestion:', err)
    }
  }

  async function handleDeleteGroup(groupId: number) {
    if (!confirm('Delete this group? Actions will be ungrouped.')) return

    try {
      await deleteGroup(groupId)
      loadData()
    } catch (err) {
      console.error('Failed to delete group:', err)
    }
  }

  function getUrgencyClass(urgency: string): string {
    return urgency.toLowerCase()
  }

  return (
    <div className="groups-overlay">
      <div className="groups-container">
        <div className="groups-header">
          <h2 className="groups-title">Action Groups</h2>
          <div className="groups-header-actions">
            <button
              className="btn btn-primary btn-small"
              onClick={() => setShowCreateModal(true)}
            >
              + New Group
            </button>
            <button className="groups-close" onClick={onClose}>
              Done
            </button>
          </div>
        </div>

        <div className="groups-content">
          {loading ? (
            <div className="groups-loading">Loading...</div>
          ) : (
            <>
              {suggestions.length > 0 && (
                <section className="groups-section">
                  <h3 className="section-title">Suggested Groups</h3>
                  <p className="section-subtitle">
                    Based on similar keywords in your ungrouped actions
                  </p>
                  {suggestions.map((suggestion, idx) => (
                    <div key={idx} className="suggestion-card">
                      <div className="suggestion-content">
                        <div className="suggestion-name">{suggestion.suggestedName}</div>
                        <div className="suggestion-reason">{suggestion.reason}</div>
                        <div className="suggestion-count">
                          {suggestion.actionIds.length} actions
                        </div>
                      </div>
                      <button
                        className="btn btn-secondary btn-small"
                        onClick={() => handleAcceptSuggestion(suggestion)}
                      >
                        Create
                      </button>
                    </div>
                  ))}
                </section>
              )}

              <section className="groups-section">
                <h3 className="section-title">Your Groups</h3>
                {groups.length === 0 ? (
                  <div className="groups-empty">
                    No groups yet. Create one or use a suggestion above.
                  </div>
                ) : (
                  groups.map(group => (
                    <div key={group.id} className="group-card">
                      <div className="group-header">
                        <div className="group-info">
                          <div className="group-name">{group.name}</div>
                          {group.description && (
                            <div className="group-description">{group.description}</div>
                          )}
                        </div>
                        <div className="group-stats">
                          <span className={`urgency-badge ${getUrgencyClass(group.highestUrgency)}`}>
                            {URGENCY_LABELS[group.highestUrgency]}
                          </span>
                          <span className="group-count">
                            {group.activeCount}/{group.actionCount} active
                          </span>
                        </div>
                      </div>

                      <div className="group-actions-list">
                        {group.actions.slice(0, 3).map(action => (
                          <div
                            key={action.id}
                            className={`group-action-item ${action.completedAt ? 'completed' : ''}`}
                            onClick={() => onSelectAction(action.id)}
                          >
                            <div className={`action-urgency-dot ${getUrgencyClass(action.urgency)}`} />
                            <span className="action-text">{action.description}</span>
                          </div>
                        ))}
                        {group.actions.length > 3 && (
                          <div className="group-more">
                            +{group.actions.length - 3} more
                          </div>
                        )}
                      </div>

                      <div className="group-footer">
                        <button
                          className="btn-link"
                          onClick={() => handleDeleteGroup(group.id)}
                        >
                          Delete Group
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </section>
            </>
          )}
        </div>
      </div>

      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Create Group</h3>
              <button
                className="modal-close"
                onClick={() => setShowCreateModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="form-group">
              <label className="form-label">Group Name</label>
              <input
                type="text"
                className="form-input"
                value={newGroupName}
                onChange={e => setNewGroupName(e.target.value)}
                placeholder="e.g., Project Alpha"
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description (optional)</label>
              <textarea
                className="form-textarea"
                value={newGroupDescription}
                onChange={e => setNewGroupDescription(e.target.value)}
                placeholder="What is this group about?"
                rows={2}
              />
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={handleCreateGroup}
              disabled={!newGroupName.trim()}
            >
              Create Group
            </button>
          </div>
        </div>
      )}

      <style>{`
        .groups-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .groups-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: env(safe-area-inset-top);
        }
        .groups-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .groups-title {
          font-size: 18px;
          font-weight: 600;
        }
        .groups-header-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .groups-close {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .groups-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        .groups-loading,
        .groups-empty {
          text-align: center;
          padding: 48px 16px;
          color: var(--text-secondary);
        }
        .groups-section {
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        .section-subtitle {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .suggestion-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-card);
          border-radius: 8px;
          margin-bottom: 8px;
          border-left: 3px solid var(--accent);
        }
        .suggestion-content {
          flex: 1;
        }
        .suggestion-name {
          font-weight: 600;
          margin-bottom: 2px;
        }
        .suggestion-reason {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .suggestion-count {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .group-card {
          background: var(--bg-card);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
        }
        .group-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .group-info {
          flex: 1;
        }
        .group-name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .group-description {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .group-stats {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }
        .urgency-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .urgency-badge.critical { background: rgba(239,68,68,0.2); color: var(--urgency-critical); }
        .urgency-badge.high { background: rgba(249,115,22,0.2); color: var(--urgency-high); }
        .urgency-badge.medium { background: rgba(234,179,8,0.2); color: var(--urgency-medium); }
        .urgency-badge.low { background: rgba(107,114,128,0.2); color: var(--urgency-low); }
        .group-count {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .group-actions-list {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 12px;
        }
        .group-action-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
          cursor: pointer;
        }
        .group-action-item.completed {
          opacity: 0.5;
          text-decoration: line-through;
        }
        .action-urgency-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .action-urgency-dot.critical { background: var(--urgency-critical); }
        .action-urgency-dot.high { background: var(--urgency-high); }
        .action-urgency-dot.medium { background: var(--urgency-medium); }
        .action-urgency-dot.low { background: var(--urgency-low); }
        .action-text {
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .group-more {
          font-size: 12px;
          color: var(--text-secondary);
          padding: 4px 0;
        }
        .group-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 12px;
          margin-top: 8px;
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 13px;
          cursor: pointer;
          padding: 0;
        }
        .btn-link:hover {
          color: var(--urgency-critical);
        }
        .btn-small {
          padding: 6px 12px;
          font-size: 13px;
        }
      `}</style>
    </div>
  )
}
