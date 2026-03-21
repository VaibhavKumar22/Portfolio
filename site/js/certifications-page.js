;(function () {
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function certCard(item) {
    const dateStr = new Date(item.issuedOn).toLocaleDateString()
    const idLine = item.credentialId
      ? '<span class="cert-id">ID: ' + escapeHtml(item.credentialId) + '</span>'
      : ''
    return (
      '<a href="' +
      escapeHtml(item.credentialUrl) +
      '" target="_blank" rel="noreferrer" class="cert-card-link">' +
      '<article class="card stack certification-card">' +
      '<div class="cert-top-row">' +
      '<p class="cert-date">' +
      escapeHtml(dateStr) +
      '</p>' +
      idLine +
      '</div>' +
      '<h3>' +
      escapeHtml(item.title) +
      '</h3>' +
      '<p class="cert-issuer">' +
      escapeHtml(item.issuer) +
      '</p>' +
      '<div class="btn btn-secondary">View Credential</div>' +
      '</article></a>'
    )
  }

  document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('certifications-grid')
    if (!grid || !window.PORTFOLIO_DATA) return
    const sorted = PORTFOLIO_DATA.certifications.slice().sort(function (a, b) {
      return Date.parse(b.issuedOn) - Date.parse(a.issuedOn)
    })
    grid.innerHTML = sorted.map(certCard).join('')
  })
})()
