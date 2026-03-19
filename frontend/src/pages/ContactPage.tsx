import { useState, type FormEvent } from 'react'
import { profile } from '../data/portfolioData'

export function ContactPage() {
  const apiBaseUrl = (
    import.meta.env.VITE_API_BASE_URL || 'https://portfolio-backend-33ii.onrender.com'
  ).replace(/\/$/, '')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setStatusMessage('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'API unavailable')
      }

      setStatus('success')
      setStatusMessage('Message sent successfully. I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      const fallbackBody = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        '',
        formData.message,
      ].join('\n')

      window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
        formData.subject,
      )}&body=${encodeURIComponent(fallbackBody)}`

      setStatus('error')
      setStatusMessage(
        'I opened your email app as a fallback. Please send the drafted message from there.',
      )
    }
  }

  return (
    <div className="page">
      <section className="stack">
        <h1>Get In Touch</h1>
        <p className="lead">
          Have a question or want to work together? Fill out the form or use my
          direct contact details below.
        </p>
      </section>

      <section className="contact-grid">
        <article className="card stack">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              {profile.contact.linkedin}
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href={profile.contact.github} target="_blank" rel="noreferrer">
              {profile.contact.github}
            </a>
          </p>
        </article>

        <article className="card stack">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name *</label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email *</label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject *</label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, subject: event.target.value }))
                }
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, message: event.target.value }))
                }
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {statusMessage ? (
            <p className={status === 'success' ? 'form-status success' : 'form-status error'}>
              {statusMessage}
            </p>
          ) : null}
        </article>
      </section>
    </div>
  )
}
