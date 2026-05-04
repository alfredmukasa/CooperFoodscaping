import { Link } from 'react-router-dom'
import { ServiceArea } from '../sections/ServiceArea/ServiceArea'
import './PageShell.css'

export function ServiceAreaPage() {
  return (
    <div className="page-shell">
      <header className="page-hero">
        <div className="section-label">Service area</div>
        <h1>
          Where we <em>travel</em>
        </h1>
        <p className="page-hero-lead">
          Based in Georgina, we work across York Region and the GTA. Not sure if
          you are in range? Get in touch — we will confirm travel and timing
          together.
        </p>
      </header>
      <ServiceArea />
      <section className="page-section">
        <div className="page-prose page-cta-row">
          <Link to="/contact" className="btn-primary">
            Check your area
          </Link>
        </div>
      </section>
    </div>
  )
}
