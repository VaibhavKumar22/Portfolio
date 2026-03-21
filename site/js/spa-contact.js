/**
 * Single-page portfolio: contact form → same backend as contact.js
 * Set window.API_BASE_URL if you use a different Render URL.
 */
;(function () {
  var API_BASE_URL = (
    window.API_BASE_URL || 'https://portfolio-backend-33ii.onrender.com'
  ).replace(/\/$/, '')

  function getInboxEmail() {
    var a = document.querySelector('a.contact-link.email[href^="mailto:"]')
    if (a && a.href) {
      var m = a.href.replace(/^mailto:/i, '').split('?')[0]
      if (m) return decodeURIComponent(m)
    }
    var d = document.querySelector('[data-contact-email]')
    if (d && d.getAttribute('data-contact-email')) return d.getAttribute('data-contact-email').trim()
    return ''
  }

  function isValidEmail(value) {
    var email = value.trim()
    var basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!basicPattern.test(email)) return false
    if (email.includes('..')) return false
    return true
  }

  function showStatus(message, type) {
    var el = document.getElementById('contact-form-status')
    if (!el) return
    el.textContent = message || ''
    el.style.color = type === 'success' ? '#86efac' : '#ff8b8b'
    el.hidden = !message
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form')
    if (!form) return

    form.removeAttribute('action')
    form.removeAttribute('method')
    form.setAttribute('novalidate', 'novalidate')

    var inboxEmail = getInboxEmail()
    var emailInput = document.getElementById('email')
    var emailError = document.getElementById('emailError')

    function validateEmailField() {
      if (!emailInput || !emailError) return true
      var currentValue = emailInput.value.trim()
      if (!currentValue) {
        emailError.textContent = ''
        emailInput.setCustomValidity('')
        return false
      }
      var ok = isValidEmail(currentValue)
      if (!ok) {
        emailError.textContent = 'Please enter a valid email (example: name@gmail.com)'
        emailInput.setCustomValidity('Invalid email')
      } else {
        emailError.textContent = ''
        emailInput.setCustomValidity('')
      }
      return ok
    }

    if (emailInput) {
      emailInput.addEventListener('blur', validateEmailField)
      emailInput.addEventListener('input', function () {
        if (emailError && emailError.textContent) validateEmailField()
      })
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault()

      var fd = new FormData(form)
      var payload = {
        name: String(fd.get('name') || '').trim(),
        email: String(fd.get('email') || '').trim(),
        subject: String(fd.get('subject') || '').trim(),
        message: String(fd.get('message') || '').trim(),
      }

      if (!payload.name || !payload.email || !payload.subject || !payload.message) {
        showStatus('Please fill in all required fields.', 'error')
        return
      }

      if (!validateEmailField()) {
        if (emailInput) emailInput.focus()
        return
      }

      var btn = form.querySelector('button[type="submit"]')
      if (btn) btn.disabled = true
      showStatus('', '')

      try {
        var res = await fetch(API_BASE_URL + '/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        })
        var data = null
        try {
          data = await res.json()
        } catch (_) {}

        if (!res.ok) {
          showStatus(
            (data && data.error) || 'Unable to send message right now. Please try again.',
            'error',
          )
          return
        }

        showStatus('Message sent successfully. I will get back to you soon.', 'success')
        form.reset()
        if (emailError) emailError.textContent = ''
      } catch (err) {
        console.error(err)
        showStatus(
          'Could not reach the mail server. Email me directly' +
            (inboxEmail ? ' at ' + inboxEmail : '') +
            ' or try again later.',
          'error',
        )
      } finally {
        if (btn) btn.disabled = false
      }
    })
  })
})()
