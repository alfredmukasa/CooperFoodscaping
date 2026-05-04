import { Link } from 'react-router-dom'

const LOGO_SRC = '/cooper_logo.webp'

export function BrandLogoLink() {
  return (
    <Link to="/" className="nav-logo">
      <img
        src={LOGO_SRC}
        alt=""
        className="nav-logo-mark"
        width={48}
        height={48}
        decoding="async"
      />
      <span className="nav-logo-wordmark">
        Cooper&apos;s <span>Foodscaping</span>
      </span>
    </Link>
  )
}
