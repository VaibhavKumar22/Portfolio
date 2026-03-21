;(function () {
  const SKILL_STYLES = {
    'C++ (Major)': { color: '#00599C', bg: 'rgba(0, 89, 156, 0.18)', border: 'rgba(0, 89, 156, 0.4)', label: 'C++' },
    Java: { color: '#F89820', bg: 'rgba(248, 152, 32, 0.16)', border: 'rgba(248, 152, 32, 0.38)', label: 'Ja' },
    Python: { color: '#FFD43B', bg: 'rgba(255, 212, 59, 0.16)', border: 'rgba(255, 212, 59, 0.36)', label: 'Py' },
    C: { color: '#A8B9CC', bg: 'rgba(168, 185, 204, 0.16)', border: 'rgba(168, 185, 204, 0.36)', label: 'C' },
    JavaScript: { color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.16)', border: 'rgba(247, 223, 30, 0.35)', label: 'JS' },
    PHP: { color: '#777BB4', bg: 'rgba(119, 123, 180, 0.18)', border: 'rgba(119, 123, 180, 0.38)', label: 'PHP' },
    HTML: { color: '#E34F26', bg: 'rgba(227, 79, 38, 0.15)', border: 'rgba(227, 79, 38, 0.4)', label: 'H5' },
    CSS: { color: '#1572B6', bg: 'rgba(21, 114, 182, 0.16)', border: 'rgba(21, 114, 182, 0.4)', label: 'CSS' },
    'React.js': { color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.16)', border: 'rgba(97, 218, 251, 0.4)', label: 'Rx' },
    'Tailwind CSS': { color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.16)', border: 'rgba(6, 182, 212, 0.4)', label: 'TW' },
    Bootstrap: { color: '#7952B3', bg: 'rgba(121, 82, 179, 0.16)', border: 'rgba(121, 82, 179, 0.4)', label: 'BS' },
    'Node.js': { color: '#68A063', bg: 'rgba(104, 160, 99, 0.16)', border: 'rgba(104, 160, 99, 0.38)', label: 'N' },
    'Express.js': { color: '#EDEDED', bg: 'rgba(237, 237, 237, 0.12)', border: 'rgba(237, 237, 237, 0.32)', label: 'Ex' },
    'REST API Integration': { color: '#5EEAD4', bg: 'rgba(94, 234, 212, 0.16)', border: 'rgba(94, 234, 212, 0.35)', label: 'API' },
    Authentication: { color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.16)', border: 'rgba(56, 189, 248, 0.35)', label: 'Auth' },
    RBAC: { color: '#A78BFA', bg: 'rgba(167, 139, 250, 0.16)', border: 'rgba(167, 139, 250, 0.35)', label: 'RB' },
    'PHP (Backend)': { color: '#777BB4', bg: 'rgba(119, 123, 180, 0.18)', border: 'rgba(119, 123, 180, 0.38)', label: 'PHP' },
    MySQL: { color: '#00758F', bg: 'rgba(0, 117, 143, 0.16)', border: 'rgba(0, 117, 143, 0.35)', label: 'SQL' },
    MongoDB: { color: '#47A248', bg: 'rgba(71, 162, 72, 0.16)', border: 'rgba(71, 162, 72, 0.38)', label: 'M' },
    PostgreSQL: { color: '#336791', bg: 'rgba(51, 103, 145, 0.16)', border: 'rgba(51, 103, 145, 0.35)', label: 'Pg' },
    Git: { color: '#F05032', bg: 'rgba(240, 80, 50, 0.16)', border: 'rgba(240, 80, 50, 0.4)', label: 'Git' },
    GitHub: { color: '#E8E8E8', bg: 'rgba(232, 232, 232, 0.12)', border: 'rgba(232, 232, 232, 0.3)', label: 'GH' },
    XAMPP: { color: '#FB7A24', bg: 'rgba(251, 122, 36, 0.16)', border: 'rgba(251, 122, 36, 0.36)', label: 'X' },
    Cloudinary: { color: '#3448C5', bg: 'rgba(52, 72, 197, 0.16)', border: 'rgba(52, 72, 197, 0.35)', label: 'Cld' },
    Vercel: { color: '#EDEDED', bg: 'rgba(237, 237, 237, 0.12)', border: 'rgba(237, 237, 237, 0.32)', label: '▲' },
    Netlify: { color: '#00C7B7', bg: 'rgba(0, 199, 183, 0.16)', border: 'rgba(0, 199, 183, 0.35)', label: 'N' },
    'VS Code': { color: '#007ACC', bg: 'rgba(0, 122, 204, 0.16)', border: 'rgba(0, 122, 204, 0.35)', label: 'VS' },
    Postman: { color: '#FF6C37', bg: 'rgba(255, 108, 55, 0.16)', border: 'rgba(255, 108, 55, 0.35)', label: 'Pm' },
  }

  const defaultStyle = {
    color: '#9ed7b8',
    bg: 'rgba(158, 215, 184, 0.14)',
    border: 'rgba(158, 215, 184, 0.35)',
    label: '?',
  }

  function getStyle(name) {
    return SKILL_STYLES[name] || { ...defaultStyle, label: name.slice(0, 2) }
  }

  function renderCard(skill) {
    const st = getStyle(skill.name)
    return (
      '<article class="skill-card">' +
      '<div class="skill-card-head">' +
      '<span class="skill-icon" style="color:' +
      st.color +
      ';background:' +
      st.bg +
      ';border-color:' +
      st.border +
      '">' +
      '<span class="skill-icon-text">' +
      st.label +
      '</span></span>' +
      '<div class="skill-main">' +
      '<div class="skill-row"><h4>' +
      escapeHtml(skill.name) +
      '</h4><span>' +
      skill.level +
      '%</span></div>' +
      '<div class="skill-meter"><div class="skill-meter-fill" style="width:' +
      skill.level +
      '%"></div></div>' +
      '</div></div>' +
      '<p class="skill-category">' +
      escapeHtml(skill.category) +
      '</p>' +
      '</article>'
    )
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  function renderSkills(activeCategory) {
    const items = PORTFOLIO_DATA.skillItems
    const filtered =
      activeCategory === 'All Skills'
        ? items
        : items.filter(function (s) {
            return s.category === activeCategory
          })
    const grid = document.getElementById('skill-card-grid')
    if (!grid) return
    grid.innerHTML = filtered.map(renderCard).join('')
  }

  function init() {
    const items = PORTFOLIO_DATA.skillItems
    const categories = ['All Skills'].concat(
      Array.from(new Set(items.map(function (s) { return s.category }))),
    )
    const row = document.getElementById('skill-filter-row')
    if (!row) return

    let activeCategory = 'All Skills'

    row.innerHTML = categories
      .map(function (cat) {
        const active = cat === activeCategory ? 'skill-filter active-filter' : 'skill-filter'
        return (
          '<button type="button" class="' +
          active +
          '" data-category="' +
          escapeHtml(cat) +
          '">' +
          escapeHtml(cat) +
          '</button>'
        )
      })
      .join('')

    row.addEventListener('click', function (e) {
      const btn = e.target.closest('button[data-category]')
      if (!btn) return
      activeCategory = btn.getAttribute('data-category')
      row.querySelectorAll('button').forEach(function (b) {
        const on = b.getAttribute('data-category') === activeCategory
        b.classList.toggle('active-filter', on)
      })
      renderSkills(activeCategory)
    })

    renderSkills(activeCategory)
  }

  document.addEventListener('DOMContentLoaded', init)
})()
