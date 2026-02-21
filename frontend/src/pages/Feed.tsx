import { useEffect, useState } from 'react'
import { Action, Container, CONTAINER_LABELS } from '../types'
import { getActions } from '../api/client'
import ActionCard from '../components/ActionCard'
import QuickCapture from '../components/QuickCapture'
import ActionView from './ActionView'

interface FeedProps {
  activeContainer: Container | null
}

export default function Feed({ activeContainer }: FeedProps) {
  const [actions, setActions] = useState<Action[]>([])
  const [loading, setLoading] = useState(true)
  const [showCapture, setShowCapture] = useState(false)
  const [selectedActionId, setSelectedActionId] = useState<number | null>(null)

  useEffect(() => {
    loadActions()
  }, [activeContainer])

  async function loadActions() {
    setLoading(true)
    try {
      const data = await getActions(activeContainer)
      setActions(data)
    } catch (err) {
      console.error('Failed to load actions:', err)
    } finally {
      setLoading(false)
    }
  }

  function getTitle(): string {
    if (activeContainer) {
      return CONTAINER_LABELS[activeContainer]
    }
    return 'All Actions'
  }

  function handleActionCreated() {
    setShowCapture(false)
    loadActions()
  }

  if (loading) {
    return (
      <div className="feed">
        <div className="feed-empty">Loading...</div>
      </div>
    )
  }

  return (
    <div className="feed">
      <div className="feed-header">
        <h1 className="feed-title">{getTitle()}</h1>
      </div>

      {actions.length === 0 ? (
        <div className="feed-empty">
          {activeContainer
            ? `No items in ${CONTAINER_LABELS[activeContainer]}`
            : 'No actions yet. Tap + to add one.'}
        </div>
      ) : (
        actions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            onClick={() => setSelectedActionId(action.id)}
          />
        ))
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
            setSelectedActionId(null)
          }}
        />
      )}
    </div>
  )
}
