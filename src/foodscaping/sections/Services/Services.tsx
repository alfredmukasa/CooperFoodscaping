import { Link } from 'react-router-dom'
import { MAINTENANCE_PACKAGES } from '../../content/packages'
import './Services.css'

export function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div>
          <div className="section-label">Maintenance packages</div>
          <h2 className="section-title">
            Choose Your
            <br />
            <em>Growing Plan</em>
          </h2>
        </div>
        <p className="services-aside">
          Season runs April–October. All packages include special additions — ask
          us about them. See the{' '}
          <Link to="/services">Services page</Link> for a full breakdown.
        </p>
      </div>
      <div className="packages-grid">
        {MAINTENANCE_PACKAGES.map((pkg) => (
          <div
            className={`package-card fade-up${pkg.featured ? ' featured' : ''}`}
            key={pkg.id}
          >
            <div className="package-image-wrap">
              <img
                src={pkg.image.src}
                alt={pkg.image.alt}
                className="package-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            {pkg.badge ? (
              <div className="package-badge">{pkg.badge}</div>
            ) : null}
            <div className="package-body">
              <div className="package-name">{pkg.name}</div>
              <div className="package-visits">{pkg.visitsLabel}</div>
              <ul className="package-features">
                {pkg.features.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link to="/contact" className="package-cta">
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="services-footnote">
        * Design fees, KM charges, and purchased materials/plants not included
        unless noted. Custom services available — reach out to discuss your
        needs.
      </p>
    </section>
  )
}
