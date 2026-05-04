import { Link } from 'react-router-dom'
import { GALLERY_PAGE_COPY } from '../content/gallerySite'
import { Gallery } from '../sections/Gallery/Gallery'
import './PageShell.css'

export function GalleryPage() {
  return (
    <div className="page-shell">
      <header className="page-hero">
        <div className="section-label">{GALLERY_PAGE_COPY.label}</div>
        <h1>{GALLERY_PAGE_COPY.title}</h1>
        <p className="page-hero-lead">{GALLERY_PAGE_COPY.lead}</p>
      </header>
      <Gallery />
      <section className="page-section">
        <div className="page-prose page-cta-row">
          <Link to="/contact" className="btn-outline">
            Ask about your project
          </Link>
        </div>
      </section>
    </div>
  )
}
