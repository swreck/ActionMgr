import { useState, useEffect, useCallback } from 'react'
import { Container, Urgency, CONTAINER_LABELS, URGENCY_LABELS } from '../types'
import { searchActions, SearchResultAction } from '../api/client'

interface SearchProps {
  onClose: () => void
  onSelectAction: (actionId: number) => void
}

export default function Search({ onClose, onSelectAction }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResultAction[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  // Filters
  const [container, setContainer] = useState<Container | ''>('')
  const [urgency, setUrgency] = useState<Urgency | ''>('')
  const [includeArchived, setIncludeArchived] = useState(false)
  const [archiveOnly, setArchiveOnly] = useState(false)

  const performSearch = useCallback(async (reset = true) => {
    setLoading(true)
    try {
      const result = await searchActions({
        q: query || undefined,
        container: container || undefined,
        urgency: urgency || undefined,
        includeArchived,
        archiveOnly,
        limit: 20,
        offset: reset ? 0 : results.length
      })

      if (reset) {
        setResults(result.actions)
      } else {
        setResults(prev => [...prev, ...result.actions])
      }
      setTotal(result.total)
      setHasMore(result.hasMore)
    } catch (err) {
      console.error('Search failed:', err)
    } finally {
      setLoading(false)
    }
  }, [query, container, urgency, includeArchived, archiveOnly, results.length])

  // Debounced search on query change
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, container, urgency, includeArchived, archiveOnly])

  function formatDate(dateStr: string | null): string {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  function handleLoadMore() {
    performSearch(false)
  }

  return (
    <div className="search-overlay">
      <div className="search-container">
        <div className="search-header">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search actions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button
                className="search-clear"
                onClick={() => setQuery('')}
              >
                ✕
              </button>
            )}
          </div>
          <button className="search-close" onClick={onClose}>
            Cancel
          </button>
        </div>

        <div className="search-filters">
          <select
            className="search-filter"
            value={container}
            onChange={(e) => setContainer(e.target.value as Container | '')}
          >
            <option value="">All Containers</option>
            {Object.entries(CONTAINER_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <select
            className="search-filter"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value as Urgency | '')}
          >
            <option value="">All Urgency</option>
            {Object.entries(URGENCY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <label className="search-checkbox">
            <input
              type="checkbox"
              checked={includeArchived}
              onChange={(e) => {
                setIncludeArchived(e.target.checked)
                if (e.target.checked) setArchiveOnly(false)
              }}
            />
            Include archived
          </label>

          <label className="search-checkbox">
            <input
              type="checkbox"
              checked={archiveOnly}
              onChange={(e) => {
                setArchiveOnly(e.target.checked)
                if (e.target.checked) setIncludeArchived(false)
              }}
            />
            Archive only
          </label>
        </div>

        <div className="search-results">
          {loading && results.length === 0 ? (
            <div className="search-loading">Searching...</div>
          ) : results.length === 0 ? (
            <div className="search-empty">
              {query ? 'No actions found' : 'Start typing to search'}
            </div>
          ) : (
            <>
              <div className="search-count">
                {total} result{total !== 1 ? 's' : ''}
              </div>

              {results.map((action) => (
                <div
                  key={action.id}
                  className={`search-result ${action.isArchived ? 'archived' : ''}`}
                  onClick={() => onSelectAction(action.id)}
                >
                  <div className={`result-urgency ${action.urgency.toLowerCase()}`} />
                  <div className="result-content">
                    <div className="result-description">{action.description}</div>
                    <div className="result-meta">
                      <span className="result-container">
                        {CONTAINER_LABELS[action.container]}
                      </span>
                      {action.dueDate && (
                        <span className="result-date">
                          Due {formatDate(action.dueDate)}
                        </span>
                      )}
                      {action.isArchived && (
                        <span className="result-archived">Archived</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {hasMore && (
                <button
                  className="search-load-more"
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Load more'}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        .search-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-primary);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .search-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding-top: env(safe-area-inset-top);
        }
        .search-header {
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-card);
          border-radius: 8px;
          padding: 0 12px;
        }
        .search-icon {
          font-size: 14px;
          opacity: 0.5;
        }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 16px;
          padding: 10px 0;
          outline: none;
        }
        .search-input::placeholder {
          color: var(--text-secondary);
        }
        .search-clear {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
        }
        .search-close {
          background: none;
          border: none;
          color: var(--accent);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
        }
        .search-filters {
          display: flex;
          gap: 8px;
          padding: 12px 16px;
          overflow-x: auto;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .search-filter {
          background: var(--bg-card);
          border: none;
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 13px;
          padding: 6px 10px;
          flex-shrink: 0;
        }
        .search-checkbox {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .search-checkbox input {
          margin: 0;
        }
        .search-results {
          flex: 1;
          overflow-y: auto;
          padding: 8px 16px;
        }
        .search-loading,
        .search-empty {
          text-align: center;
          padding: 48px 16px;
          color: var(--text-secondary);
        }
        .search-count {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .search-result {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: var(--bg-card);
          border-radius: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: transform 0.1s;
        }
        .search-result:active {
          transform: scale(0.98);
        }
        .search-result.archived {
          opacity: 0.6;
        }
        .result-urgency {
          width: 4px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .result-urgency.critical { background: var(--urgency-critical); }
        .result-urgency.high { background: var(--urgency-high); }
        .result-urgency.medium { background: var(--urgency-medium); }
        .result-urgency.low { background: var(--urgency-low); }
        .result-content {
          flex: 1;
          min-width: 0;
        }
        .result-description {
          font-size: 15px;
          margin-bottom: 4px;
          line-height: 1.4;
        }
        .result-meta {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: var(--text-secondary);
        }
        .result-archived {
          color: var(--warning);
        }
        .search-load-more {
          width: 100%;
          padding: 12px;
          background: var(--bg-card);
          border: none;
          border-radius: 8px;
          color: var(--accent);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 8px;
        }
        .search-load-more:disabled {
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}
