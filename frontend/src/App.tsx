import { useState, useEffect } from 'react'
import ContainerNav, { refreshCounts } from './components/ContainerNav'
import Feed from './pages/Feed'
import PromisesView from './pages/PromisesView'
import WeeklyReview from './pages/WeeklyReview'
import Settings from './pages/Settings'
import Search from './pages/Search'
import Groups from './pages/Groups'
import Tuning from './pages/Tuning'
import ActionView from './pages/ActionView'
import { Container } from './types'
import { getSystemHealth, SystemHealth, getContainerCounts } from './api/client'

type ViewMode = 'today' | 'all'

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('today')
  const [activeContainer, setActiveContainer] = useState<Container | null>('ACTIONABLE_NOW')
  const [flagFilter, setFlagFilter] = useState<'needsClarification' | 'needsTuning' | undefined>(undefined)
  const [showSettings, setShowSettings] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showGroups, setShowGroups] = useState(false)
  const [showTuning, setShowTuning] = useState(false)
  const [showWeeklyReview, setShowWeeklyReview] = useState(false)
  const [selectedActionId, setSelectedActionId] = useState<number | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const [health, setHealth] = useState<SystemHealth | null>(null)
  const [goalSuggestionCount, setGoalSuggestionCount] = useState(0)

  useEffect(() => {
    checkHealth()
    loadGoalCount()
    const interval = setInterval(() => { checkHealth(); loadGoalCount() }, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  async function checkHealth() {
    try {
      const h = await getSystemHealth()
      setHealth(h)
    } catch {
      // silent fail
    }
  }

  async function loadGoalCount() {
    try {
      const counts = await getContainerCounts()
      setGoalSuggestionCount(counts.goalSuggestions || 0)
    } catch {
      // silent fail
    }
  }

  // Check if we should show the weekly review banner
  function shouldShowWeeklyBanner(): boolean {
    const now = new Date()
    const day = now.getDay() // 0 = Sunday
    if (day !== 0) return false // Default: Sunday

    const dismissed = localStorage.getItem('weeklyReviewDismissed')
    if (!dismissed) return true

    const dismissedDate = new Date(dismissed)
    const daysSince = Math.floor((now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24))
    return daysSince >= 6 // Show again after 6 days
  }

  const hasErrors = health && health.errors.length > 0

  function handleRefresh() {
    setRefreshKey(k => k + 1)
    refreshCounts()
    loadGoalCount()
  }

  function handleSearchSelect(actionId: number) {
    setShowSearch(false)
    setSelectedActionId(actionId)
  }

  function handleContainerChange(container: Container | null) {
    if (container === 'TUNING') {
      setShowTuning(true)
    } else {
      setFlagFilter(undefined)
      setActiveContainer(container)
    }
  }

  function handleFlagFilter(flag: 'needsClarification' | 'needsTuning') {
    setActiveContainer(null)
    setFlagFilter(flag)
  }

  return (
    <div className="app">
      <header className="app-header">
        {/* View toggle */}
        <div className="view-toggle">
          <button
            className={`view-toggle-btn ${viewMode === 'today' ? 'active' : ''}`}
            onClick={() => setViewMode('today')}
          >
            Today
          </button>
          <button
            className={`view-toggle-btn ${viewMode === 'all' ? 'active' : ''}`}
            onClick={() => setViewMode('all')}
          >
            All
          </button>
        </div>

        <div className="header-actions">
          <button
            className="search-btn"
            onClick={() => setShowSearch(true)}
            title="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button
            className="search-btn groups-btn"
            onClick={() => setShowGroups(true)}
            title="Groups"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            {goalSuggestionCount > 0 && (
              <span className="groups-badge">{goalSuggestionCount}</span>
            )}
          </button>
          <button
            className={`settings-btn ${hasErrors ? 'has-errors' : ''}`}
            onClick={() => setShowSettings(true)}
            title="Settings"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </div>
      </header>

      {hasErrors && (
        <div className="error-banner" onClick={() => setShowSettings(true)}>
          System issue detected — tap to view in Settings
        </div>
      )}

      <main className="main-content">
        {viewMode === 'today' ? (
          <PromisesView
            key={refreshKey}
            onShowFeed={() => setViewMode('all')}
            onShowWeeklyReview={() => setShowWeeklyReview(true)}
            showWeeklyBanner={shouldShowWeeklyBanner()}
          />
        ) : (
          <>
            <ContainerNav
              activeContainer={activeContainer}
              onContainerChange={handleContainerChange}
              onFlagFilter={handleFlagFilter}
            />
            <Feed
              key={refreshKey}
              activeContainer={activeContainer}
              flagFilter={flagFilter}
              onOpenGroups={() => setShowGroups(true)}
            />
          </>
        )}
      </main>

      {showSettings && <Settings onClose={() => setShowSettings(false)} />}

      {showSearch && (
        <Search
          onClose={() => setShowSearch(false)}
          onSelectAction={handleSearchSelect}
        />
      )}

      {showGroups && (
        <Groups
          onClose={() => setShowGroups(false)}
          onSelectAction={(actionId) => {
            setShowGroups(false)
            setSelectedActionId(actionId)
          }}
        />
      )}

      {showTuning && (
        <Tuning onClose={() => setShowTuning(false)} />
      )}

      {showWeeklyReview && (
        <WeeklyReview onClose={() => setShowWeeklyReview(false)} />
      )}

      {selectedActionId && (
        <ActionView
          actionId={selectedActionId}
          onClose={() => setSelectedActionId(null)}
          onUpdate={() => {
            handleRefresh()
            setSelectedActionId(null)
          }}
        />
      )}
    </div>
  )
}

export default App
