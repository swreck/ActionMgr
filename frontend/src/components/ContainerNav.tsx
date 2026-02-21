import { useEffect, useState } from 'react'
import { Container, ContainerCounts, CONTAINER_LABELS } from '../types'
import { getContainerCounts } from '../api/client'

interface ContainerNavProps {
  activeContainer: Container | null
  onContainerChange: (container: Container | null) => void
}

export default function ContainerNav({ activeContainer, onContainerChange }: ContainerNavProps) {
  const [counts, setCounts] = useState<ContainerCounts>({
    ACTIONABLE_NOW: 0,
    CANDIDATES: 0,
    AMBIGUITY: 0,
    WAITING: 0,
    TUNING: 0
  })

  useEffect(() => {
    loadCounts()
    const interval = setInterval(loadCounts, 30000)
    return () => clearInterval(interval)
  }, [])

  async function loadCounts() {
    try {
      const data = await getContainerCounts()
      setCounts(data)
    } catch (err) {
      console.error('Failed to load counts:', err)
    }
  }

  function handleClick(container: Container) {
    if (container === 'TUNING') {
      // Tuning opens a modal — delegate to parent without changing active container
      onContainerChange('TUNING')
      return
    }
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
        {btn('TUNING', 'tuning')}
      </div>
    </div>
  )
}
