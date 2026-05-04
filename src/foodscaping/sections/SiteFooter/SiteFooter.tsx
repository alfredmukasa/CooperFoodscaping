import { Link } from 'react-router-dom'
import { BrandLogoLink } from '../../components/BrandLogoLink'
import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <BrandLogoLink />
          <p>
            Edible landscapes for the GTA & York Region. Growing food,
            connecting people to land, and building a more sustainable future —
            one garden at a time.
          </p>
        </div>
        <div className="footer-col">
          <h5>Navigate</h5>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/service-area">Service Area</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link to="/services">Seed Package</Link>
            </li>
            <li>
              <Link to="/services">Sapling Package</Link>
            </li>
            <li>
              <Link to="/services">Annual Package</Link>
            </li>
            <li>
              <Link to="/services">Perennial Package</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <Link to="/contact">Book a Consultation</Link>
            </li>
            <li>
              <a
                href="https://www.coopersfoodscaping.com/contact"
                target="_blank"
                rel="noreferrer"
              >
                Original Site
              </a>
            </li>
            <li>
              <a href="mailto:info@coopersfoodscaping.com">Email Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Cooper&apos;s Foodscaping. All rights reserved.</span>
        <span>
          Based in Georgina, Ontario ·{' '}
          <a href="https://www.coopersfoodscaping.com">coopersfoodscaping.com</a>
        </span>
      </div>
    </footer>
  )
}
