import { useState, useEffect, useMemo } from 'react'
import {
  getGroups,
  getGroupSuggestions,
  getActions,
  createGroup,
  deleteGroup,
  addActionsToGroup,
  removeActionFromGroup,
  archiveGroup,
  ActionGroup,
  GroupSuggestion
} from '../api/client'
import { Action, URGENCY_LABELS } from '../types'
import ConfirmModal from '../components/ConfirmModal'

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
  const [suggestionsExpanded, setSuggestionsExpanded] = useState(false)
  const [addActionsGroupId, setAddActionsGroupId] = useState<number | null>(null)
  const [addActionsSearch, setAddActionsSearch] = useState('')
  const [allActions, setAllActions] = useState<Action[]>([])
  const [selectedActionIds, setSelectedActionIds] = useState<Set<number>>(new Set())
  const [originalActionIds, setOriginalActionIds] = useState<Set<number>>(new Set())
  const [addActionsLoading, setAddActionsLoading] = useState(false)
  const [deleteGroupId, setDeleteGroupId] = useState<number | null>(null)

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
    try {
      await deleteGroup(groupId)
      setDeleteGroupId(null)
      loadData()
    } catch (err) {
      console.error('Failed to delete group:', err)
    }
  }

  async function handleOpenAddActions(groupId: number) {
    setAddActionsGroupId(groupId)
    setAddActionsSearch('')
    setAddActionsLoading(true)
    try {
      const actions = await getActions()
      const nonArchived = actions.filter(a => !a.archivedAt && !a.completedAt)
      setAllActions(nonArchived)
      const group = groups.find(g => g.id === groupId)
      const existingIds = new Set(group?.actions.map(a => a.id) || [])
      setSelectedActionIds(new Set(existingIds))
      setOriginalActionIds(new Set(existingIds))
    } catch (err) {
      console.error('Failed to load actions:', err)
    } finally {
      setAddActionsLoading(false)
    }
  }

  async function handleSaveAddActions() {
    if (addActionsGroupId === null) return

    try {
      const newlyAdded = [...selectedActionIds].filter(id => !originalActionIds.has(id))
      const removed = [...originalActionIds].filter(id => !selectedActionIds.has(id))

      if (newlyAdded.length > 0) {
        await addActionsToGroup(addActionsGroupId, newlyAdded)
      }
      for (const actionId of removed) {
        await removeActionFromGroup(addActionsGroupId, actionId)
      }

      setAddActionsGroupId(null)
      loadData()
    } catch (err) {
      console.error('Failed to update group actions:', err)
    }
  }

  function toggleActionSelection(actionId: number) {
    setSelectedActionIds(prev => {
      const next = new Set(prev)
      if (next.has(actionId)) {
        next.delete(actionId)
      } else {
        next.add(actionId)
      }
      return next
    })
  }

  const filteredActions = useMemo(() => {
    if (!addActionsSearch.trim()) return allActions
    const q = addActionsSearch.toLowerCase()
    return allActions.filter(a => a.description.toLowerCase().includes(q))
  }, [allActions, addActionsSearch])

  async function handleRemoveAction(groupId: number, actionId: number) {
    try {
      await removeActionFromGroup(groupId, actionId)
      loadData()
    } catch (err) {
      console.error('Failed to remove action from group:', err)
    }
  }

  async function handleArchiveGroup(groupId: number) {
    try {
      await archiveGroup(groupId)
      loadData()
    } catch (err) {
      console.error('Failed to archive group:', err)
    }
  }

  function getCompletedCount(group: ActionGroup): number {
    return group.actions.filter(a => a.completedAt !== null).length
  }

  function isAllComplete(group: ActionGroup): boolean {
    return group.actions.length > 0 && getCompletedCount(group) === group.actions.length
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
              <section className="groups-section">
                <h3 className="section-title">Your Groups</h3>
                {groups.length === 0 ? (
                  <div className="groups-empty">
                    No groups yet. Create one or accept a suggestion below.
                  </div>
                ) : (
                  groups.map(group => (
                    <div key={group.id} className="group-card">
                      {isAllComplete(group) && (
                        <div className="group-archive-banner">
                          <span>All actions complete! Archive this group?</span>
                          <button
                            className="btn btn-secondary btn-small"
                            onClick={() => handleArchiveGroup(group.id)}
                          >
                            Archive
                          </button>
                        </div>
                      )}
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

                      <div className="group-progress">
                        <div className="progress-text">
                          {getCompletedCount(group)} of {group.actions.length} complete
                        </div>
                        <div className="progress-bar-track">
                          <div
                            className="progress-bar-fill"
                            style={{
                              width: group.actions.length > 0
                                ? `${(getCompletedCount(group) / group.actions.length) * 100}%`
                                : '0%'
                            }}
                          />
                        </div>
                      </div>

                      <div className="group-actions-list">
                        {group.actions.slice(0, 3).map(action => (
                          <div
                            key={action.id}
                            className={`group-action-item ${action.completedAt ? 'completed' : ''}`}
                          >
                            <div
                              className="group-action-clickable"
                              onClick={() => onSelectAction(action.id)}
                            >
                              <div className={`action-urgency-dot ${getUrgencyClass(action.urgency)}`} />
                              <span className="action-text">{action.description}</span>
                            </div>
                            <button
                              className="action-remove-btn"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleRemoveAction(group.id, action.id)
                              }}
                              title="Remove from group"
                            >
                              &times;
                            </button>
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
                          className="btn btn-secondary btn-small"
                          onClick={() => handleOpenAddActions(group.id)}
                        >
                          Add Actions
                        </button>
                        <button
                          className="btn-link"
                          onClick={() => setDeleteGroupId(group.id)}
                        >
                          Delete Group
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </section>

              {suggestions.length > 0 && (
                <section className="groups-section suggestions-section">
                  <button
                    className="suggestions-toggle"
                    onClick={() => setSuggestionsExpanded(!suggestionsExpanded)}
                  >
                    <h3 className="section-title" style={{ margin: 0 }}>
                      Suggested Groups ({suggestions.length})
                    </h3>
                    <span className="toggle-arrow">
                      {suggestionsExpanded ? '\u25B2' : '\u25BC'}
                    </span>
                  </button>
                  {suggestionsExpanded && (
                    <>
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
                    </>
                  )}
                </section>
              )}
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

      {addActionsGroupId !== null && (
        <div className="modal-overlay" onClick={() => setAddActionsGroupId(null)}>
          <div className="modal-content add-actions-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Add Actions to Group</h3>
              <button
                className="modal-close"
                onClick={() => setAddActionsGroupId(null)}
              >
                &times;
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                value={addActionsSearch}
                onChange={e => setAddActionsSearch(e.target.value)}
                placeholder="Search actions..."
                autoFocus
              />
            </div>
            {!addActionsLoading && filteredActions.length > 0 && (
              <div className="add-actions-select-all">
                <label className="select-all-label">
                  <input
                    type="checkbox"
                    checked={filteredActions.every(a => selectedActionIds.has(a.id))}
                    onChange={() => {
                      const allFilteredSelected = filteredActions.every(a => selectedActionIds.has(a.id))
                      setSelectedActionIds(prev => {
                        const next = new Set(prev)
                        for (const a of filteredActions) {
                          if (allFilteredSelected) {
                            next.delete(a.id)
                          } else {
                            next.add(a.id)
                          }
                        }
                        return next
                      })
                    }}
                  />
                  Select All ({filteredActions.length})
                </label>
              </div>
            )}
            <div className="add-actions-list">
              {addActionsLoading ? (
                <div className="groups-loading">Loading actions...</div>
              ) : filteredActions.length === 0 ? (
                <div className="groups-empty">No matching actions found.</div>
              ) : (
                filteredActions.map(action => (
                  <label key={action.id} className="add-action-row">
                    <input
                      type="checkbox"
                      checked={selectedActionIds.has(action.id)}
                      onChange={() => toggleActionSelection(action.id)}
                    />
                    <div className={`action-urgency-dot ${getUrgencyClass(action.urgency)}`} />
                    <span className="action-text">{action.description}</span>
                  </label>
                ))
              )}
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={handleSaveAddActions}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {deleteGroupId !== null && (
        <ConfirmModal
          title="Delete Group"
          message="Delete this group? Actions will be ungrouped but not deleted."
          confirmLabel="Delete"
          danger
          onConfirm={() => handleDeleteGroup(deleteGroupId)}
          onCancel={() => setDeleteGroupId(null)}
        />
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
        }
        .group-action-clickable {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
          cursor: pointer;
        }
        .group-action-item.completed .group-action-clickable {
          opacity: 0.5;
          text-decoration: line-through;
        }
        .action-remove-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 18px;
          cursor: pointer;
          padding: 0 4px;
          flex-shrink: 0;
          line-height: 1;
        }
        .action-remove-btn:hover {
          color: var(--urgency-critical);
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
          display: flex;
          align-items: center;
          gap: 16px;
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
        .group-progress {
          margin-bottom: 12px;
        }
        .progress-text {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        .progress-bar-track {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .group-archive-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.3);
          border-radius: 8px;
          padding: 10px 12px;
          margin-bottom: 12px;
          font-size: 13px;
          color: #22c55e;
        }
        .suggestions-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 8px 0;
        }
        .toggle-arrow {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .suggestions-section .section-subtitle {
          margin-top: 4px;
        }
        .add-actions-modal {
          max-height: 80vh;
          display: flex;
          flex-direction: column;
        }
        .add-actions-select-all {
          padding: 8px 12px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .add-actions-select-all .select-all-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .add-actions-list {
          flex: 1;
          overflow-y: auto;
          max-height: 50vh;
          margin-bottom: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
        }
        .add-action-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .add-action-row:last-child {
          border-bottom: none;
        }
        .add-action-row:hover {
          background: rgba(255,255,255,0.05);
        }
        .add-action-row input[type="checkbox"] {
          flex-shrink: 0;
        }
        .add-action-row .action-text {
          flex: 1;
          min-width: 0;
        }
      `}</style>
    </div>
  )
}
