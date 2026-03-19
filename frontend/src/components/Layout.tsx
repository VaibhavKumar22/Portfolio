import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/portfolioData'

type LayoutProps = {
  children: ReactNode
}

const navItems = [
  { label: 'Home', to: '/', kind: 'route' as const },
  { label: 'Skills', to: '/skills', kind: 'route' as const },
  { label: 'Projects', to: '/projects', kind: 'route' as const },
  { label: 'Certifications', to: '/certifications', kind: 'route' as const },
  { label: 'Achievements', to: '/#achievements', kind: 'hash' as const },
  { label: 'Contact', to: '/contact', kind: 'route' as const },
]

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          {profile.brandName}
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={isMobileMenuOpen ? 'nav-right nav-right-open' : 'nav-right'}>
          <nav className="nav">
            {navItems.map((item) => {
              if (item.kind === 'route') {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              }

              const targetHash = item.to.split('#')[1] ?? ''
              const isHashActive =
                location.pathname === '/' && location.hash === `#${targetHash}`
              return (
                <a
                  key={item.to}
                  href={item.to}
                  className={isHashActive ? 'nav-link nav-link-active' : 'nav-link'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="resume-download-btn"
          >
            Resume Download
          </a>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
