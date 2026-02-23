import { useEffect, useState } from 'react'
import {
  getSystemHealth,
  SystemHealth,
  getGmailStatus,
  GmailStatus,
  getGmailAuthUrl,
  disconnectGmail,
  triggerGmailScan,
  ScanResult,
  getVapidPublicKey,
  subscribeToPush,
  unsubscribeFromPush,
  runFollowUpCheck,
  runTriggerCheck
} from '../api/client'
import ConfirmModal from '../components/ConfirmModal'

interface SettingsProps {
  onClose: () => void
}

export default function Settings({ onClose }: SettingsProps) {
  const [health, setHealth] = useState<SystemHealth | null>(null)
  const [gmailStatus, setGmailStatus] = useState<GmailStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [scanning, setScanning] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [notifPermission, setNotifPermission] = useState<NotificationPermission | 'unsupported'>('default')
  const [notifSubscribed, setNotifSubscribed] = useState(false)
  const [notifLoading, setNotifLoading] = useState(false)
  const [toolRunning, setToolRunning] = useState<string | null>(null)
  const [toolResult, setToolResult] = useState<{ key: string; message: string; success: boolean } | null>(null)
  const [showDisconnectConfirm, setShowDisconnectConfirm] = useState(false)

  useEffect(() => {
    loadData()
    checkNotificationStatus()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const [healthData, gmailData] = await Promise.all([
        getSystemHealth(),
        getGmailStatus()
      ])
      setHealth(healthData)
      setGmailStatus(gmailData)
    } catch (err) {
      console.error('Failed to load settings data:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleConnectGmail() {
    try {
      const { url } = await getGmailAuthUrl()
      window.location.href = url
    } catch (err) {
      console.error('Failed to get auth URL:', err)
      alert('Failed to start Gmail connection')
    }
  }

  async function handleDisconnectGmail() {
    try {
      await disconnectGmail()
      setShowDisconnectConfirm(false)
      await loadData()
    } catch (err) {
      console.error('Failed to disconnect Gmail:', err)
    }
  }

  async function handleScanNow() {
    setScanning(true)
    setScanResult(null)

    try {
      const result = await triggerGmailScan()
      setScanResult(result)
      await loadData()
    } catch (err) {
      console.error('Scan failed:', err)
      setScanResult({
        success: false,
        emailsScanned: 0,
        actionsCreated: 0,
        errors: ['Scan failed']
      })
    } finally {
      setScanning(false)
    }
  }

  async function checkNotificationStatus() {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      setNotifPermission('unsupported')
      return
    }
    setNotifPermission(Notification.permission)
    if (Notification.permission === 'granted') {
      const reg = await navigator.serviceWorker.ready.catch(() => null)
      if (reg) {
        const sub = await reg.pushManager.getSubscription()
        setNotifSubscribed(!!sub)
      }
    }
  }

  async function handleEnableNotifications() {
    setNotifLoading(true)
    try {
      const permission = await Notification.requestPermission()
      setNotifPermission(permission)
      if (permission !== 'granted') return

      const { key } = await getVapidPublicKey()
      if (!key) { alert('Server not configured for push notifications'); return }

      const reg = await navigator.serviceWorker.ready
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(key)
      })

      const json = sub.toJSON() as { endpoint: string; keys: { p256dh: string; auth: string } }
      await subscribeToPush(json.endpoint, json.keys.p256dh, json.keys.auth)
      setNotifSubscribed(true)
    } catch (err) {
      console.error('Failed to enable notifications:', err)
      alert('Failed to enable notifications')
    } finally {
      setNotifLoading(false)
    }
  }

  async function handleDisableNotifications() {
    setNotifLoading(true)
    try {
      const reg = await navigator.serviceWorker.ready
      const sub = await reg.pushManager.getSubscription()
      if (sub) {
        await unsubscribeFromPush(sub.endpoint)
        await sub.unsubscribe()
      }
      setNotifSubscribed(false)
    } catch (err) {
      console.error('Failed to disable notifications:', err)
    } finally {
      setNotifLoading(false)
    }
  }

  function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
    const rawData = window.atob(base64)
    const arr = new Uint8Array([...rawData].map(char => char.charCodeAt(0)))
    return arr.buffer as ArrayBuffer
  }

  async function runTool(key: string, fn: () => Promise<{ success: boolean; message: string }>) {
    setToolRunning(key)
    setToolResult(null)
    try {
      const result = await fn()
      setToolResult({ key, ...result })
    } catch {
      setToolResult({ key, success: false, message: 'Request failed' })
    } finally {
      setToolRunning(null)
    }
  }

  function formatRelativeTime(dateStr: string | null): string {
    if (!dateStr) return 'Never'
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    return `${diffDays}d ago`
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Settings</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        {loading ? (
          <div className="settings-loading">Loading...</div>
        ) : (
          <>
            {/* Gmail Section */}
            <div className="settings-section">
              <h3 className="settings-section-title">Gmail Integration</h3>

              <div className="settings-gmail">
                <div className="gmail-status-row">
                  <span className="gmail-status-label">Status</span>
                  <span className={`gmail-status-value ${gmailStatus?.connected ? 'connected' : 'disconnected'}`}>
                    {gmailStatus?.connected ? 'Connected' : 'Not Connected'}
                  </span>
                </div>

                {gmailStatus?.connected ? (
                  <>
                    <div className="gmail-status-row">
                      <span className="gmail-status-label">Last Scan</span>
                      <span className="gmail-status-value">
                        {formatRelativeTime(gmailStatus.lastScan)}
                      </span>
                    </div>

                    <div className="gmail-status-row">
                      <span className="gmail-status-label">Emails Scanned</span>
                      <span className="gmail-status-value">{gmailStatus.itemsScanned}</span>
                    </div>

                    <div className="gmail-status-row">
                      <span className="gmail-status-label">Actions Created</span>
                      <span className="gmail-status-value">{gmailStatus.actionsCreated}</span>
                    </div>

                    {gmailStatus.lastError && (
                      <div className="gmail-error">
                        <span className="gmail-error-label">Last Error</span>
                        <p>{gmailStatus.lastError}</p>
                      </div>
                    )}

                    {scanResult && (
                      <div className={`scan-result ${scanResult.success ? 'success' : 'error'}`}>
                        {scanResult.success
                          ? `Scanned ${scanResult.emailsScanned} emails, created ${scanResult.actionsCreated} actions`
                          : `Scan failed: ${scanResult.errors.join(', ')}`}
                      </div>
                    )}

                    <div className="gmail-buttons">
                      <button
                        className="btn btn-primary"
                        onClick={handleScanNow}
                        disabled={scanning}
                      >
                        {scanning ? 'Scanning...' : 'Scan Now'}
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setShowDisconnectConfirm(true)}
                      >
                        Disconnect
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="gmail-connect">
                    <p className="gmail-connect-text">
                      Connect your Gmail to automatically scan for actionable emails.
                    </p>
                    <button
                      className="btn btn-primary btn-block"
                      onClick={handleConnectGmail}
                    >
                      Connect Gmail
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Notifications Section */}
            <div className="settings-section">
              <h3 className="settings-section-title">Push Notifications</h3>
              <div className="settings-notifications">
                {notifPermission === 'unsupported' ? (
                  <p className="notif-note">
                    Push notifications require installing this app and iOS 16.4+.
                  </p>
                ) : notifPermission === 'denied' ? (
                  <p className="notif-note notif-denied">
                    Notifications blocked. Enable them in device Settings &gt; Safari.
                  </p>
                ) : notifSubscribed ? (
                  <>
                    <p className="notif-status notif-enabled">Notifications enabled</p>
                    <button
                      className="btn btn-secondary btn-block"
                      onClick={handleDisableNotifications}
                      disabled={notifLoading}
                    >
                      {notifLoading ? 'Disabling...' : 'Disable Notifications'}
                    </button>
                  </>
                ) : (
                  <>
                    <p className="notif-note">
                      Get notified when triggers fire or actions need attention.
                    </p>
                    <button
                      className="btn btn-primary btn-block"
                      onClick={handleEnableNotifications}
                      disabled={notifLoading}
                    >
                      {notifLoading ? 'Enabling...' : 'Enable Notifications'}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* System Health Section */}
            <div className="settings-section">
              <h3 className="settings-section-title">System Health</h3>

              <div className="settings-health">
                <div className="health-row">
                  <span className="health-label">Overall Status</span>
                  <span className={`health-value ${health?.status}`}>
                    {health?.status === 'ok' ? 'All Systems OK' : 'Issues Detected'}
                  </span>
                </div>

                {health?.errors && health.errors.length > 0 && (
                  <div className="health-errors">
                    <span className="health-errors-label">Errors</span>
                    {health.errors.map((error, i) => (
                      <p key={i} className="health-error">{error}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Scan Schedule Info */}
            <div className="settings-section">
              <h3 className="settings-section-title">Scan Schedule</h3>
              <div className="settings-schedule">
                <p>Automatic Gmail scans run every 4 hours.</p>
                <p className="schedule-note">
                  Trigger checks run hourly. Web conditions checked every 4 hours per trigger. Follow-up reminders sent daily at 9 AM.
                </p>
              </div>
            </div>

            {/* Testing Tools Section */}
            <div className="settings-section">
              <h3 className="settings-section-title">Testing Tools</h3>
              <div className="settings-tools">

                <div className="tool-item">
                  <div className="tool-text">
                    <div className="tool-label">Check for stale actions</div>
                    <div className="tool-desc">
                      Looks at all your active actions and flags ones you haven't touched
                      in a while with a "Still important?" prompt. Normally happens automatically
                      every morning at 9 AM.
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary tool-btn"
                    onClick={() => runTool('followups', runFollowUpCheck)}
                    disabled={toolRunning !== null}
                  >
                    {toolRunning === 'followups' ? 'Running…' : 'Run now'}
                  </button>
                </div>

                <div className="tool-item">
                  <div className="tool-text">
                    <div className="tool-label">Fire due triggers & check web conditions</div>
                    <div className="tool-desc">
                      Two things in one: (1) promotes any Waiting actions whose due date
                      has arrived into your active list, and (2) searches the web to see
                      if any real-world conditions you're watching — like a store sale or
                      product launch — have come true. Normally runs every hour / every 4 hours.
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary tool-btn"
                    onClick={() => runTool('triggers', runTriggerCheck)}
                    disabled={toolRunning !== null}
                  >
                    {toolRunning === 'triggers' ? 'Running…' : 'Run now'}
                  </button>
                </div>

                {toolResult && (
                  <div className={`tool-result ${toolResult.success ? 'success' : 'error'}`}>
                    {toolResult.success ? '✓' : '✗'} {toolResult.message}
                  </div>
                )}
              </div>
            </div>

            {/* About Section */}
            <div className="settings-section">
              <h3 className="settings-section-title">About</h3>
              <p className="settings-about">
                Action Manager v1.0
                <br />
                Your personal commitment tracker
              </p>
            </div>
          </>
        )}

        {showDisconnectConfirm && (
          <ConfirmModal
            title="Disconnect Gmail"
            message="Are you sure you want to disconnect Gmail? Automatic email scanning will stop."
            confirmLabel="Disconnect"
            danger
            onConfirm={handleDisconnectGmail}
            onCancel={() => setShowDisconnectConfirm(false)}
          />
        )}

        <style>{`
          .settings-modal {
            max-height: 85vh;
          }
          .settings-loading {
            text-align: center;
            padding: 32px;
            color: var(--text-secondary);
          }
          .settings-section {
            margin-bottom: 24px;
          }
          .settings-section-title {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
          }
          .settings-gmail,
          .settings-health {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
          }
          .gmail-status-row,
          .health-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .gmail-status-row:last-of-type,
          .health-row:last-of-type {
            border-bottom: none;
          }
          .gmail-status-label,
          .health-label {
            color: var(--text-secondary);
            font-size: 14px;
          }
          .gmail-status-value,
          .health-value {
            font-weight: 500;
            font-size: 14px;
          }
          .gmail-status-value.connected {
            color: var(--success);
          }
          .gmail-status-value.disconnected {
            color: var(--text-secondary);
          }
          .health-value.ok {
            color: var(--success);
          }
          .health-value.error {
            color: var(--urgency-critical);
          }
          .gmail-error {
            margin-top: 12px;
            padding: 12px;
            background: rgba(239, 68, 68, 0.1);
            border-radius: 6px;
          }
          .gmail-error-label {
            font-size: 11px;
            color: var(--urgency-critical);
            text-transform: uppercase;
          }
          .gmail-error p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
          }
          .scan-result {
            margin-top: 12px;
            padding: 12px;
            border-radius: 6px;
            font-size: 13px;
          }
          .scan-result.success {
            background: rgba(74, 222, 128, 0.1);
            color: var(--success);
          }
          .scan-result.error {
            background: rgba(239, 68, 68, 0.1);
            color: var(--urgency-critical);
          }
          .gmail-buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
          }
          .gmail-buttons .btn {
            flex: 1;
          }
          .gmail-connect {
            margin-top: 8px;
          }
          .gmail-connect-text {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .health-errors {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .health-errors-label {
            font-size: 11px;
            color: var(--urgency-critical);
            text-transform: uppercase;
          }
          .health-error {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
          }
          .settings-tools {
            background-color: var(--bg-card);
            border-radius: 8px;
            overflow: hidden;
          }
          .tool-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 12px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .tool-item:last-of-type {
            border-bottom: none;
          }
          .tool-text {
            flex: 1;
          }
          .tool-label {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 4px;
          }
          .tool-desc {
            font-size: 12px;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .tool-btn {
            flex-shrink: 0;
            padding: 8px 14px;
            font-size: 13px;
            white-space: nowrap;
            align-self: center;
          }
          .tool-result {
            margin: 0 12px 12px;
            padding: 10px 12px;
            border-radius: 6px;
            font-size: 13px;
          }
          .tool-result.success {
            background: rgba(74, 222, 128, 0.1);
            color: var(--success);
          }
          .tool-result.error {
            background: rgba(239, 68, 68, 0.1);
            color: var(--urgency-critical);
          }
          .settings-notifications {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
          }
          .notif-note {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .notif-denied {
            color: var(--urgency-critical);
          }
          .notif-status {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 12px;
          }
          .notif-enabled {
            color: var(--success);
          }
          .settings-schedule {
            background-color: var(--bg-card);
            border-radius: 8px;
            padding: 12px;
            font-size: 14px;
          }
          .settings-schedule ul {
            margin: 8px 0;
            padding-left: 20px;
          }
          .settings-schedule li {
            margin: 4px 0;
          }
          .schedule-note {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 8px;
          }
          .settings-about {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
          }
        `}</style>
      </div>
    </div>
  )
}
