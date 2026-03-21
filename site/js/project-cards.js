;(function () {
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function projectCardHtml(project) {
    const badge = project.featured ? '<span class="badge">Featured</span>' : ''
    const tags = project.tags
      .map(function (t) {
        return '<span class="chip">' + escapeHtml(t) + '</span>'
      })
      .join('')
    return (
      '<article class="card stack">' +
      badge +
      '<h3>' +
      escapeHtml(project.title) +
      '</h3>' +
      '<p>' +
      escapeHtml(project.description) +
      '</p>' +
      '<div class="skills">' +
      tags +
      '</div>' +
      '<div class="actions">' +
      '<a href="' +
      escapeHtml(project.liveDemo) +
      '" target="_blank" rel="noreferrer" class="btn btn-primary">Live Demo</a>' +
      '<a href="' +
      escapeHtml(project.sourceCode) +
      '" target="_blank" rel="noreferrer" class="btn btn-secondary">Source Code</a>' +
      '</div>' +
      '</article>'
    )
  }

  window.renderProjectCardsInto = function (containerId) {
    const el = document.getElementById(containerId)
    if (!el || !window.PORTFOLIO_DATA) return
    el.innerHTML = PORTFOLIO_DATA.projects.map(projectCardHtml).join('')
  }
})()
