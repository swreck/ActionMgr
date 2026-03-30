import { useEffect, useState } from 'react'
import { Action, Container, CONTAINER_LABELS } from '../types'
import { getActions, getActionsByFlag, deleteAction, completeAction, updateAction, createTrigger, bulkCompleteActions, bulkDeleteActions, bulkMoveActions } from '../api/client'
import ActionCard from '../components/ActionCard'
import { refreshCounts } from '../components/ContainerNav'
import QuickCapture from '../components/QuickCapture'
import ActionView from './ActionView'

const FLAG_LABELS: Record<string, string> = {
  needsClarification: 'Needs Clarification',
  needsTuning: 'Needs Tuning'
}

const MOVE_CONTAINERS: Container[] = ['ACTIONABLE_NOW', 'CANDIDATES', 'WAITING']

interface FeedProps {
  activeContainer: Container | null
  flagFilter?: 'needsClarification' | 'needsTuning'
  onDataChange?: () => void
  onOpenGroups?: () => void
}

export default function Feed({ activeContainer, flagFilter, onDataChange, onOpenGroups: _onOpenGroups }: FeedProps) {
  const [actions, setActions] = useState<Action[]>([])
  const [loading, setLoading] = useState(true)
  const [showCapture, setShowCapture] = useState(false)
  const [selectedActionId, setSelectedActionId] = useState<number | null>(null)

  // Bulk selection state
  const [selectionMode, setSelectionMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [showMoveDropdown, setShowMoveDropdown] = useState(false)
  const [bulkLoading, setBulkLoading] = useState(false)

  useEffect(() => {
    loadActions()
  }, [activeContainer, flagFilter])

  async function loadActions() {
    setLoading(true)
    try {
      let data: Action[]
      if (flagFilter) {
        data = await getActionsByFlag(flagFilter)
      } else {
        data = await getActions(activeContainer)
      }
      setActions(data)
      onDataChange?.()
    } catch (err) {
      console.error('Failed to load actions:', err)
    } finally {
      setLoading(false)
    }
  }

  function getTitle(): string {
    if (flagFilter) {
      return FLAG_LABELS[flagFilter] || flagFilter
    }
    if (activeContainer) {
      return CONTAINER_LABELS[activeContainer]
    }
    return 'All Actions'
  }

  function handleActionCreated() {
    setShowCapture(false)
    loadActions()
    refreshCounts()
  }

  // -- Bulk selection helpers --

  function toggleSelectionMode() {
    if (selectionMode) {
      // Exiting selection mode
      setSelectionMode(false)
      setSelectedIds(new Set())
      setShowMoveDropdown(false)
    } else {
      setSelectionMode(true)
    }
  }

  function toggleSelect(id: number) {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function toggleSelectAll() {
    if (selectedIds.size === actions.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(actions.map((a) => a.id)))
    }
  }

  async function handleBulkComplete() {
    if (selectedIds.size === 0) return
    setBulkLoading(true)
    try {
      await bulkCompleteActions(Array.from(selectedIds))
      exitSelectionAndRefresh()
    } catch (err) {
      console.error('Bulk complete failed:', err)
    } finally {
      setBulkLoading(false)
    }
  }

  async function handleBulkDelete() {
    if (selectedIds.size === 0) return
    setBulkLoading(true)
    try {
      await bulkDeleteActions(Array.from(selectedIds))
      exitSelectionAndRefresh()
    } catch (err) {
      console.error('Bulk delete failed:', err)
    } finally {
      setBulkLoading(false)
    }
  }

  async function handleBulkMove(container: Container) {
    if (selectedIds.size === 0) return
    setBulkLoading(true)
    setShowMoveDropdown(false)
    try {
      await bulkMoveActions(Array.from(selectedIds), container)
      exitSelectionAndRefresh()
    } catch (err) {
      console.error('Bulk move failed:', err)
    } finally {
      setBulkLoading(false)
    }
  }

  async function handleSwipeDelete(id: number) {
    try {
      await deleteAction(id)
      loadActions()
      refreshCounts()
    } catch (err) {
      console.error('Swipe delete failed:', err)
    }
  }

  async function handleSwipeComplete(id: number) {
    try {
      await completeAction(id)
      loadActions()
      refreshCounts()
    } catch (err) {
      console.error('Swipe complete failed:', err)
    }
  }

  async function handlePostpone(id: number, date: string) {
    try {
      const action = actions.find(a => a.id === id)
      if (!action) return
      await updateAction(id, { dueDate: date, version: action.version })
      await createTrigger({ actionId: id, type: 'DATE_EXACT', triggerDate: date })
      loadActions()
      refreshCounts()
    } catch (err) {
      console.error('Postpone failed:', err)
    }
  }

  function exitSelectionAndRefresh() {
    setSelectionMode(false)
    setSelectedIds(new Set())
    setShowMoveDropdown(false)
    loadActions()
    refreshCounts()
  }

  if (loading) {
    return (
      <div className="feed">
        <div className="feed-empty">Loading...</div>
      </div>
    )
  }

  const selectionCount = selectedIds.size
  const allSelected = actions.length > 0 && selectedIds.size === actions.length

  return (
    <div className="feed">
      <div className="feed-header">
        <h1 className="feed-title">{getTitle()}</h1>
        {actions.length > 0 && (
          <button
            className="feed-select-toggle"
            onClick={toggleSelectionMode}
          >
            {selectionMode ? 'Cancel' : 'Select'}
          </button>
        )}
      </div>

      {/* Group suggestion banner disabled — keyword matching produces low-quality suggestions.
         Will be replaced with AI-powered relationship detection in a future version. */}

      {selectionMode && actions.length > 0 && (
        <div className="feed-select-all">
          <label className="select-all-label">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleSelectAll}
            />
            Select All ({actions.length})
          </label>
        </div>
      )}

      {actions.length === 0 ? (
        <div className="feed-empty">
          {flagFilter
            ? `No items ${FLAG_LABELS[flagFilter] ? 'flagged as ' + FLAG_LABELS[flagFilter].toLowerCase() : ''}`
            : activeContainer
              ? `No items in ${CONTAINER_LABELS[activeContainer]}`
              : 'No actions yet. Tap + to add one.'}
        </div>
      ) : (
        actions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            onDelete={handleSwipeDelete}
            onComplete={handleSwipeComplete}
            onPostpone={handlePostpone}
            selectable={selectionMode}
            selected={selectedIds.has(action.id)}
            onSelect={toggleSelect}
            onClick={() => {
              if (!selectionMode) {
                setSelectedActionId(action.id)
              } else {
                toggleSelect(action.id)
              }
            }}
          />
        ))
      )}

      {selectionMode && selectionCount > 0 && (
        <div className="bulk-toolbar">
          <button
            className="bulk-btn bulk-complete"
            onClick={handleBulkComplete}
            disabled={bulkLoading}
          >
            Kept ({selectionCount})
          </button>
          <button
            className="bulk-btn bulk-delete"
            onClick={handleBulkDelete}
            disabled={bulkLoading}
          >
            Delete ({selectionCount})
          </button>
          <div className="bulk-move-wrapper">
            <button
              className="bulk-btn bulk-move"
              onClick={() => setShowMoveDropdown(!showMoveDropdown)}
              disabled={bulkLoading}
            >
              Move ({selectionCount})
            </button>
            {showMoveDropdown && (
              <div className="bulk-move-dropdown">
                {MOVE_CONTAINERS.map((c) => (
                  <button
                    key={c}
                    className="bulk-move-option"
                    onClick={() => handleBulkMove(c)}
                  >
                    {CONTAINER_LABELS[c]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <button className="quick-capture" onClick={() => setShowCapture(true)}>
        +
      </button>

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
            loadActions()
            refreshCounts()
            setSelectedActionId(null)
          }}
        />
      )}
    </div>
  )
}
