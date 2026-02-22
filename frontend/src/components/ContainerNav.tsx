import { useEffect, useState, useCallback } from 'react'
import { Container, ContainerCounts, FlagCounts, CONTAINER_LABELS } from '../types'
import { getContainerCounts, getFlagCounts } from '../api/client'

interface ContainerNavProps {
  activeContainer: Container | null
  onContainerChange: (container: Container | null) => void
  onFlagFilter?: (flag: 'needsClarification' | 'needsTuning') => void
}

let _refreshCounts: (() => Promise<void>) | null = null

/** Call this from parent components to refresh container + flag counts after any action change. */
export function refreshCounts(): Promise<void> {
  if (_refreshCounts) return _refreshCounts()
  return Promise.resolve()
}

export default function ContainerNav({ activeContainer, onContainerChange, onFlagFilter }: ContainerNavProps) {
  const [counts, setCounts] = useState<ContainerCounts>({
    ACTIONABLE_NOW: 0,
    CANDIDATES: 0,
    AMBIGUITY: 0,
    WAITING: 0,
    TUNING: 0
  })

  const [flagCounts, setFlagCounts] = useState<FlagCounts>({
    needsClarification: 0,
    needsTuning: 0
  })

  const loadCounts = useCallback(async () => {
    try {
      const [data, flags] = await Promise.all([
        getContainerCounts(),
        getFlagCounts()
      ])
      setCounts(data)
      setFlagCounts(flags)
    } catch (err) {
      console.error('Failed to load counts:', err)
    }
  }, [])

  useEffect(() => {
    _refreshCounts = loadCounts
    loadCounts()
    return () => {
      _refreshCounts = null
    }
  }, [loadCounts])

  function handleClick(container: Container) {
    if (activeContainer === container) {
      onContainerChange(null)
    } else {
      onContainerChange(container)
    }
  }

  function btn(container: Container, variant: string) {
    const selected = activeContainer === container
    return (
      <button
        key={container}
        className={`grid-btn grid-btn--${variant}${selected ? ' selected' : ''}`}
        onClick={() => handleClick(container)}
      >
        <span className="grid-btn-label">{CONTAINER_LABELS[container]}</span>
        <span className="grid-btn-badge">{counts[container]}</span>
      </button>
    )
  }

  return (
    <div className="container-grid">
      {btn('ACTIONABLE_NOW', 'now')}
      <div className="grid-row">
        {btn('CANDIDATES', 'review')}
        {btn('AMBIGUITY', 'clarify')}
      </div>
      <div className="grid-row">
        {btn('WAITING', 'waiting')}
      </div>
      {(flagCounts.needsClarification > 0 || flagCounts.needsTuning > 0) && (
        <div className="flag-badges">
          {flagCounts.needsClarification > 0 && (
            <button
              className="flag-badge flag-badge--clarify"
              onClick={() => onFlagFilter?.('needsClarification')}
              title="Actions needing clarification"
            >
              <span className="flag-badge-icon">?</span>
              <span className="flag-badge-label">Clarify</span>
              <span className="flag-badge-count">{flagCounts.needsClarification}</span>
            </button>
          )}
          {flagCounts.needsTuning > 0 && (
            <button
              className="flag-badge flag-badge--tuning"
              onClick={() => onFlagFilter?.('needsTuning')}
              title="Actions flagged for tuning"
            >
              <span className="flag-badge-icon">&#x2699;</span>
              <span className="flag-badge-label">Tuning</span>
              <span className="flag-badge-count">{flagCounts.needsTuning}</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
