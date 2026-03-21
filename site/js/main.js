document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-toggle')
  const navRight = document.querySelector('.nav-right')
  if (!btn || !navRight) return

  btn.addEventListener('click', function () {
    const open = navRight.classList.toggle('nav-right-open')
    btn.setAttribute('aria-expanded', open ? 'true' : 'false')
  })

  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      navRight.classList.remove('nav-right-open')
      btn.setAttribute('aria-expanded', 'false')
    })
  })
})
