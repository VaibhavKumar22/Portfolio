document.addEventListener('DOMContentLoaded', function () {
  var p = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile
  if (!p) return

  var set = function (id, text) {
    var el = document.getElementById(id)
    if (el) el.textContent = text
  }

  set('hero-name', p.name)
  set('hero-role', p.role)
  set('hero-intro', p.intro)

  var avatar = document.getElementById('hero-avatar')
  if (avatar) {
    avatar.textContent = p.name
      .split(/\s+/)
      .filter(Boolean)
      .map(function (part) {
        return part[0] ? part[0].toUpperCase() : ''
      })
      .slice(0, 2)
      .join('')
  }

  var chips = document.getElementById('hero-skills')
  if (chips) {
    chips.innerHTML = p.skills
      .map(function (s) {
        return '<span class="chip">' + s.replace(/</g, '&lt;') + '</span>'
      })
      .join('')
  }

  set('fact-location', p.location)
  set('fact-education', p.education)
  set('journey-text', p.journey)
  set('approach-text', p.approach)

  var hobbyList = document.getElementById('hobby-list')
  if (hobbyList) {
    hobbyList.innerHTML = p.hobbies
      .map(function (h) {
        return '<li><span class="icon-badge">◇</span><span>' + h.replace(/</g, '&lt;') + '</span></li>'
      })
      .join('')
  }

  var ach = document.getElementById('achievements-list')
  if (ach) {
    ach.innerHTML = p.achievements
      .map(function (a) {
        return (
          '<li><span class="icon-badge">★</span><span>' + a.replace(/</g, '&lt;') + '</span></li>'
        )
      })
      .join('')
  }

  var le = document.getElementById('contact-linkedin')
  if (le) {
    le.href = p.contact.linkedin
    le.textContent = p.contact.linkedin
  }
  var gh = document.getElementById('contact-github')
  if (gh) {
    gh.href = p.contact.github
    gh.textContent = p.contact.github
  }
  var mail = document.getElementById('contact-email-link')
  if (mail) {
    mail.href = 'mailto:' + p.contact.email
    mail.textContent = p.contact.email
  }
  var tel = document.getElementById('contact-phone-link')
  if (tel) {
    tel.href = 'tel:' + p.contact.phone.replace(/\s/g, '')
    tel.textContent = p.contact.phone
  }

  if (typeof window.renderProjectCardsInto === 'function') {
    window.renderProjectCardsInto('projects-grid-home')
  }
})
