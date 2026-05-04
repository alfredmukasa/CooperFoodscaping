export type NavItem = {
  to: string
  label: string
  variant?: 'cta'
}

/** Primary navigation — aligns with [coopersfoodscaping.com](https://www.coopersfoodscaping.com/) IA */
export const NAV_ITEMS: NavItem[] = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/service-area', label: 'Service Area' },
  { to: '/contact', label: 'Book Consultation', variant: 'cta' },
]
