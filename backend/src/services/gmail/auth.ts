import { google } from 'googleapis'
import { prisma } from '../../index'

// OAuth2 client configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
)

// Scopes required for Gmail access
const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.labels'
]

/**
 * Generate OAuth URL for user to authorize Gmail access
 */
export function getAuthUrl(): string {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline', // Get refresh token
    scope: SCOPES,
    prompt: 'consent' // Force consent to get refresh token
  })
}

/**
 * Exchange authorization code for tokens and store them
 */
export async function handleCallback(code: string): Promise<void> {
  const { tokens } = await oauth2Client.getToken(code)

  if (!tokens.refresh_token) {
    throw new Error('No refresh token received. Please revoke access and try again.')
  }

  // Store tokens in database
  await prisma.gmailAuth.deleteMany() // Remove old auth
  await prisma.gmailAuth.create({
    data: {
      accessToken: tokens.access_token || '',
      refreshToken: tokens.refresh_token,
      expiresAt: new Date(tokens.expiry_date || Date.now() + 3600000),
      scope: tokens.scope || SCOPES.join(' ')
    }
  })

  // Initialize scan status if not exists
  await prisma.scanStatus.upsert({
    where: { sourceType: 'GMAIL' },
    update: {},
    create: {
      sourceType: 'GMAIL',
      itemsScanned: 0,
      actionsCreated: 0
    }
  })
}

/**
 * Get authenticated OAuth2 client with valid tokens
 */
export async function getAuthenticatedClient(): Promise<typeof oauth2Client | null> {
  const auth = await prisma.gmailAuth.findFirst({
    orderBy: { createdAt: 'desc' }
  })

  if (!auth) {
    return null
  }

  oauth2Client.setCredentials({
    access_token: auth.accessToken,
    refresh_token: auth.refreshToken,
    expiry_date: auth.expiresAt.getTime()
  })

  // Check if token needs refresh
  if (auth.expiresAt <= new Date()) {
    try {
      const { credentials } = await oauth2Client.refreshAccessToken()

      // Update stored tokens
      await prisma.gmailAuth.update({
        where: { id: auth.id },
        data: {
          accessToken: credentials.access_token || auth.accessToken,
          expiresAt: new Date(credentials.expiry_date || Date.now() + 3600000)
        }
      })

      oauth2Client.setCredentials(credentials)
    } catch (error) {
      console.error('Failed to refresh Gmail token:', error)
      return null
    }
  }

  return oauth2Client
}

/**
 * Check if Gmail is connected
 */
export async function isGmailConnected(): Promise<boolean> {
  const auth = await prisma.gmailAuth.findFirst()
  return !!auth
}

/**
 * Disconnect Gmail (revoke and delete tokens)
 */
export async function disconnectGmail(): Promise<void> {
  const auth = await prisma.gmailAuth.findFirst()

  if (auth) {
    try {
      oauth2Client.setCredentials({
        access_token: auth.accessToken,
        refresh_token: auth.refreshToken
      })
      await oauth2Client.revokeCredentials()
    } catch (error) {
      console.error('Failed to revoke Gmail credentials:', error)
    }

    await prisma.gmailAuth.deleteMany()
  }

  // Reset scan status
  await prisma.scanStatus.update({
    where: { sourceType: 'GMAIL' },
    data: {
      lastScanAt: null,
      lastSuccessAt: null,
      lastError: null,
      consecutiveFailures: 0
    }
  }).catch(() => {})
}

export { oauth2Client }
