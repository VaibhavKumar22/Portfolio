;(function () {
  var API_BASE_URL = (
    window.API_BASE_URL || 'https://portfolio-backend-33ii.onrender.com'
  ).replace(/\/$/, '')
  var inboxEmail = ''

  function showStatus(form, type, message) {
    var el = document.getElementById('contact-form-status')
    var hint = document.getElementById('contact-mailto-hint')
    var mailA = document.getElementById('contact-mailto-href')
    if (!el) return
    el.textContent = message || ''
    el.className = 'form-status ' + (type === 'success' ? 'success' : 'error')
    el.hidden = !message
    if (hint) hint.hidden = type !== 'error'
    if (mailA && inboxEmail) {
      mailA.href = 'mailto:' + inboxEmail
      mailA.textContent = inboxEmail
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form')
    if (!form) return

    inboxEmail =
      (PORTFOLIO_DATA && PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.contact.email) || ''

    form.addEventListener('submit', async function (e) {
      e.preventDefault()
      var fd = new FormData(form)
      var payload = {
        name: String(fd.get('name') || '').trim(),
        email: String(fd.get('email') || '').trim(),
        subject: String(fd.get('subject') || '').trim(),
        message: String(fd.get('message') || '').trim(),
      }

      var btn = form.querySelector('button[type="submit"]')
      if (btn) btn.disabled = true
      showStatus(form, 'error', '')

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
            form,
            'error',
            (data && data.error) || 'Unable to send message right now. Please try again.',
          )
          return
        }

        showStatus(form, 'success', 'Message sent successfully. I will get back to you soon.')
        form.reset()
      } catch (err) {
        console.error(err)
        showStatus(
          form,
          'error',
          'Could not reach the mail server from this page. Email me directly at ' +
            inboxEmail +
            ' or try again in a moment.',
        )
      } finally {
        if (btn) btn.disabled = false
      }
    })
  })
})()
