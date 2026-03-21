;(function () {
  function renderHeader() {
    const page = window.__PAGE__ || 'home'
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    const achievementsActive = page === 'home' && hash === '#achievements'

    const profile = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile
    const brand = profile ? profile.brandName : 'VK Portfolio'
    const resumeUrl = profile ? profile.resumeUrl : '#'

    const items = [
      { key: 'home', href: 'index.html', label: 'Home' },
      { key: 'skills', href: 'skills.html', label: 'Skills' },
      { key: 'projects', href: 'projects.html', label: 'Projects' },
      { key: 'certifications', href: 'certifications.html', label: 'Certifications' },
      { key: 'achievements', href: 'index.html#achievements', label: 'Achievements', isHash: true },
      { key: 'contact', href: 'contact.html', label: 'Contact' },
    ]

    const navHtml = items
      .map((item) => {
        let active = false
        if (item.isHash) active = achievementsActive
        else active = page === item.key
        const cls = active ? 'nav-link nav-link-active' : 'nav-link'
        return '<a href="' + item.href + '" class="' + cls + '">' + item.label + '</a>'
      })
      .join('')

    return (
      '<header class="topbar">' +
      '<a href="index.html" class="brand">' +
      brand +
      '</a>' +
      '<button type="button" class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">' +
      '<span></span><span></span><span></span>' +
      '</button>' +
      '<div class="nav-right">' +
      '<nav class="nav">' +
      navHtml +
      '</nav>' +
      '<a href="' +
      resumeUrl +
      '" target="_blank" rel="noreferrer" class="resume-download-btn">Resume Download</a>' +
      '</div>' +
      '</header>'
    )
  }

  function mount() {
    const root = document.getElementById('root')
    if (!root) return
    root.insertAdjacentHTML('afterbegin', renderHeader())
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount)
  } else {
    mount()
  }
})()
