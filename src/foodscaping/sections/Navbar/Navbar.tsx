import { useEffect, useState, type RefObject } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BrandLogoLink } from '../../components/BrandLogoLink'
import { NAV_ITEMS } from '../../content/navigation'
import './Navbar.css'

type NavbarProps = {
  navRef: RefObject<HTMLElement | null>
}

export function Navbar({ navRef }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  return (
    <nav id="navbar" ref={navRef} className={menuOpen ? 'nav--open' : undefined}>
      {menuOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <BrandLogoLink />
      <button
        type="button"
        className="nav-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
        <span className="nav-menu-toggle-bar" />
      </button>
      <ul id="nav-menu" className="nav-links" role="list">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                [
                  item.variant === 'cta' ? 'nav-cta' : undefined,
                  isActive ? 'nav-link-active' : undefined,
                ]
                  .filter(Boolean)
                  .join(' ')
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
