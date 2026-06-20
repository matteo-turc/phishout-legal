import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

// Remonte en haut de page à chaque changement de route.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const navLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <span className="brand-badge" aria-hidden="true">🛡️</span>
            <span>{site.appName}</span>
          </NavLink>
          <nav className="site-nav" aria-label="Navigation principale">
            <NavLink to="/confidentialite" className={navLinkClass}>
              Confidentialité
            </NavLink>
            <NavLink to="/support" className={navLinkClass}>
              Support
            </NavLink>
            <NavLink to="/conditions" className={navLinkClass}>
              Conditions
            </NavLink>
            <NavLink to="/credits" className={navLinkClass}>
              Crédits
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="site-footer">
        <div className="container">
          <p>
            {site.appName}, édité par {site.editor} ({site.country}).
          </p>
          <p className="footer-links">
            <NavLink to="/confidentialite">Confidentialité</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/conditions">Conditions d'utilisation</NavLink>
            <NavLink to="/credits">Crédits</NavLink>
          </p>
          <p className="muted">
            Contact :{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="muted">© {new Date().getFullYear()} {site.editor}. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  )
}
