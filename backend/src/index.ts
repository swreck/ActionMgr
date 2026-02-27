import 'dotenv/config'
import express from 'express'
import path from 'path'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import actionsRouter from './routes/actions'
import containersRouter from './routes/containers'
import sourcesRouter from './routes/sources'
import systemRouter from './routes/system'
import parseRouter from './routes/parse'
import triggersRouter from './routes/triggers'
import searchRouter from './routes/search'
import groupsRouter from './routes/groups'
import tuningRouter from './routes/tuning'
import notificationsRouter from './routes/notifications'
import { initializeScheduler } from './jobs/scheduler'
import { initPushNotifications } from './services/notifications'

const app = express()
const port = process.env.PORT || 3001

export const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/actions', actionsRouter)
app.use('/api/containers', containersRouter)
app.use('/api/sources', sourcesRouter)
app.use('/api/system', systemRouter)
app.use('/api/parse', parseRouter)
app.use('/api/triggers', triggersRouter)
app.use('/api/search', searchRouter)
app.use('/api/groups', groupsRouter)
app.use('/api/tuning', tuningRouter)
app.use('/api/notifications', notificationsRouter)

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Serve frontend static files in production
app.use(express.static(path.join(__dirname, '../public')))

// SPA fallback — serve index.html for any non-API GET request
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/') || req.path === '/health') {
    return next()
  }
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({ message: err.message || 'Internal server error' })
})

async function main() {
  await prisma.$connect()
  console.log('Connected to database')

  // Initialize push notifications (VAPID keys)
  await initPushNotifications()

  // Initialize background job scheduler
  initializeScheduler()

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

main().catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await prisma.$disconnect()
  process.exit(0)
})
// deploy 1772176224
