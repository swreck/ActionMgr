import { useState } from 'react'

interface PostponePopoverProps {
  onPostpone: (date: string) => void
  onClose: () => void
}

export default function PostponePopover({ onPostpone, onClose }: PostponePopoverProps) {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [customDate, setCustomDate] = useState('')

  function getTomorrow(): string {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  }

  function getNextWeek(): string {
    const d = new Date()
    // Next Monday
    const daysUntilMonday = (8 - d.getDay()) % 7 || 7
    d.setDate(d.getDate() + daysUntilMonday)
    return d.toISOString().split('T')[0]
  }

  function getMinDate(): string {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  }

  return (
    <div className="postpone-overlay" onClick={onClose}>
      <div className="postpone-popover" onClick={e => e.stopPropagation()}>
        <div className="postpone-title">Push forward to...</div>
        <button className="postpone-option" onClick={() => onPostpone(getTomorrow())}>
          Tomorrow
        </button>
        <button className="postpone-option" onClick={() => onPostpone(getNextWeek())}>
          Next week
        </button>
        {!showDatePicker ? (
          <button className="postpone-option" onClick={() => setShowDatePicker(true)}>
            Pick a date...
          </button>
        ) : (
          <div className="postpone-date-row">
            <input
              type="date"
              className="postpone-date-input"
              value={customDate}
              min={getMinDate()}
              onChange={e => setCustomDate(e.target.value)}
              autoFocus
            />
            <button
              className="postpone-date-confirm"
              disabled={!customDate}
              onClick={() => customDate && onPostpone(customDate)}
            >
              Go
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
