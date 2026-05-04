import { useEffect, useState, type RefObject } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
      <ul id="nav-menu" className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={item.variant === 'cta' ? 'nav-cta' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
