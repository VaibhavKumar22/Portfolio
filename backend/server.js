import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 4000)
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
const smtpUser = process.env.SMTP_USER?.trim() || ''
const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '') || ''
const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim() || ''

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true)
      }

      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
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

  if (!smtpUser || !smtpPass || !contactToEmail) {
    return res.status(500).json({
      error: 'Server email is not configured.',
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    })

    return res.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
})

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
