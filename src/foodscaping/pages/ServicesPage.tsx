import { Link } from 'react-router-dom'
import {
  DETAILED_PACKAGES,
  SERVICES_HERO,
  SERVICES_PAGE_INTRO,
  SERVICES_TESTIMONIAL,
  SITE_SERVICES,
} from '../content/packages'
import './PageShell.css'
import './ServicesPage.css'

export function ServicesPage() {
  return (
    <div className="page-shell">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="svc-hero">
        <img
          src={SERVICES_HERO.image.src}
          alt={SERVICES_HERO.image.alt}
          className="svc-hero-image"
          loading="eager"
          decoding="async"
        />
        <div className="svc-hero-overlay">
          <p className="svc-hero-subtext">{SERVICES_HERO.subtext}</p>
          <h1 className="svc-hero-headline">{SERVICES_HERO.headline}</h1>
          <a
            href={SERVICES_HERO.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {SERVICES_HERO.ctaLabel}
          </a>
        </div>
      </section>

      {/* ── Intro copy ───────────────────────────────────────────────── */}
      <section className="page-section">
        <div className="page-prose">
          <div className="section-label">{SERVICES_PAGE_INTRO.label}</div>
          <h2>{SERVICES_PAGE_INTRO.title}</h2>
          {SERVICES_PAGE_INTRO.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── Core service categories ──────────────────────────────────── */}
      {SITE_SERVICES.map((svc, i) => (
        <section
          key={svc.id}
          className={`page-section svc-category-section${i % 2 === 1 ? ' svc-reverse' : ''}`}
        >
          <div className="svc-category-wrap">
            <div className="svc-category-image-wrap">
              <img
                src={svc.image.src}
                alt={svc.image.alt}
                className="svc-category-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="svc-category-body">
              <h2 className="svc-category-name">{svc.name}</h2>
              <p className="svc-category-text">{svc.body}</p>
              {svc.pricing && (
                <div className="svc-category-pricing">{svc.pricing}</div>
              )}
              {svc.footnote && (
                <p className="svc-category-footnote">{svc.footnote}</p>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── Testimonial ──────────────────────────────────────────────── */}
      <section className="page-section svc-testimonial-section">
        <figure className="svc-testimonial-figure">
          <img
            src={SERVICES_TESTIMONIAL.image.src}
            alt={SERVICES_TESTIMONIAL.image.alt}
            className="svc-testimonial-image"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <blockquote className="svc-testimonial-quote">
          <p>"{SERVICES_TESTIMONIAL.quote}"</p>
          <cite>— {SERVICES_TESTIMONIAL.author}</cite>
        </blockquote>
      </section>

      {/* ── Maintenance packages intro ───────────────────────────────── */}
      <section className="page-section">
        <div className="page-prose page-detail-intro">
          <div className="section-label">Maintenance packages</div>
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
          <a
            href={SERVICES_HERO.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a consultation
          </a>
        </div>
      </section>
    </div>
  )
}
