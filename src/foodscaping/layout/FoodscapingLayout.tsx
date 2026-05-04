import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../sections/Navbar/Navbar'
import { SiteFooter } from '../sections/SiteFooter/SiteFooter'
import '../styles/tokens.css'
import '../styles/shared.css'
import '../styles/responsive.css'
import './FoodscapingLayout.css'

export function FoodscapingLayout() {
  const location = useLocation()
  const rootRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 },
    )

    root.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onScroll = () => {
      nav.style.boxShadow =
        window.scrollY > 40 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="coopers-foodscaping" ref={rootRef}>
      <Navbar navRef={navRef} />
      <main className="foodscaping-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
