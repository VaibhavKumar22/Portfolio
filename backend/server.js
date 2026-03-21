import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 4000)
const corsSegments = (process.env.CORS_ORIGIN ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const allowAllCors =
  corsSegments.includes('*') ||
  process.env.CORS_ALLOW_ALL === '1' ||
  process.env.CORS_ALLOW_ALL === 'true'

const allowedOrigins = corsSegments.filter((o) => o !== '*')

const extraAllowedOrigins = (process.env.CORS_EXTRA_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

function normalizeOrigin(origin) {
  if (!origin) return ''
  return origin.replace(/\/$/, '')
}

/** Allow any Vercel deployment URL (preview + production). */
function isAllowedVercelOrigin(origin) {
  try {
    const { hostname, protocol } = new URL(origin)
    return (
      (protocol === 'https:' || protocol === 'http:') &&
      (hostname.endsWith('.vercel.app') || hostname === 'vercel.app')
    )
  } catch {
    return false
  }
}

function isOriginAllowed(origin) {
  if (!origin) return true
  if (allowAllCors) return true

  const n = normalizeOrigin(origin)

  if (allowedOrigins.length === 0) {
    return true
  }

  const normalizedList = allowedOrigins.map(normalizeOrigin)
  if (normalizedList.includes(n)) return true

  if (extraAllowedOrigins.map(normalizeOrigin).includes(n)) return true

  if (isAllowedVercelOrigin(origin)) return true

  return false
}
const smtpUser = process.env.SMTP_USER?.trim() || ''
const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '') || ''
const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim() || ''
const resendApiKey = process.env.RESEND_API_KEY?.trim() || ''

function buildMailPayload(name, email, subject, message) {
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].join('\n')
  const html = `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `
  return { text, html }
}

/** HTTPS-only (port 443) — works when outbound SMTP to Gmail times out on Render. */
async function sendViaResend(name, email, subject, message) {
  const { text, html } = buildMailPayload(name, email, subject, message)
  const from = process.env.RESEND_FROM_EMAIL?.trim() || 'onboarding@resend.dev'

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Portfolio Contact <${from}>`,
      to: [contactToEmail],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const errBody = await response.text()
    throw new Error(`Resend API error: ${response.status} ${errBody}`)
  }
}

/**
 * Gmail SMTP — explicit host + port 465 + IPv4.
 * Render (and other clouds) often time out with `service: 'gmail'` due to IPv6 / routing.
 */
function createGmailTransport() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: 60_000,
    greetingTimeout: 30_000,
    socketTimeout: 60_000,
    // Prefer IPv4 — fixes many ETIMEDOUT errors to smtp.gmail.com from cloud hosts
    family: 4,
  })
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) {
        return callback(null, true)
      }
      // Do not pass Error — that throws in Express and spams logs; false = deny CORS quietly.
      return callback(null, false)
    },
  }),
)
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body ?? {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const hasSmtp = smtpUser && smtpPass
  if (!contactToEmail || (!resendApiKey && !hasSmtp)) {
    return res.status(500).json({
      error: 'Server email is not configured.',
    })
  }

  try {
    if (resendApiKey) {
      await sendViaResend(name, email, subject, message)
    } else {
      const { text, html } = buildMailPayload(name, email, subject, message)
      const transporter = createGmailTransport()
      await transporter.sendMail({
        from: `"Portfolio Contact" <${smtpUser}>`,
        to: contactToEmail,
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text,
        html,
      })
    }

    return res.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
})

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
