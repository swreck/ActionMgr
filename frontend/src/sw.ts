/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope & typeof globalThis

// vite-plugin-pwa injectManifest with injectionPoint: undefined — no precaching needed

self.addEventListener('push', (event: PushEvent) => {
  const data = event.data?.json() as { title?: string; body?: string } | undefined
  const title = data?.title || 'Action Manager'
  const body = data?.body || ''

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/pwa-192x192.png',
      badge: '/pwa-192x192.png',
      tag: 'action-manager-notification',
    })
  )
})

self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close()

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus()
      }
      return self.clients.openWindow('/')
    })
  )
})
