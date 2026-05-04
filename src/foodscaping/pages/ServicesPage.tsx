import { Link } from 'react-router-dom'
import { DETAILED_PACKAGES, SERVICES_PAGE_INTRO } from '../content/packages'
import './PageShell.css'

export function ServicesPage() {
  return (
    <div className="page-shell">
      <header className="page-hero">
        <div className="section-label">{SERVICES_PAGE_INTRO.label}</div>
        <h1>{SERVICES_PAGE_INTRO.title}</h1>
      </header>

      <section className="page-section">
        <div className="page-prose">
          {SERVICES_PAGE_INTRO.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-prose page-detail-intro">
          <h2>Package details</h2>
          <p>
            Summaries also appear on the{' '}
            <Link to="/" className="page-inline-link">
              home page
            </Link>
            . Below is the same offering with the line-item detail reflected on
            the original site.
          </p>
        </div>
        <div className="page-detail-grid">
          {DETAILED_PACKAGES.map((pkg) => (
            <article className="page-package-detail fade-up" key={pkg.id}>
              <div className="page-package-detail-image">
                <img
                  src={pkg.image.src}
                  alt={pkg.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{pkg.name}</h3>
              {pkg.subtitle ? (
                <p className="pkg-sub">{pkg.subtitle}</p>
              ) : null}
              <ul>
                {pkg.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {pkg.footnote ? (
                <p className="pkg-foot">{pkg.footnote}</p>
              ) : null}
            </article>
          ))}
        </div>
        <div className="page-prose page-cta-row">
          <Link to="/contact" className="btn-primary">
            Book a consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
