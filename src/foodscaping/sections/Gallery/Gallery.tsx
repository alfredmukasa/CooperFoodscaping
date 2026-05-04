import { Link } from 'react-router-dom'
import { GALLERY_ITEMS } from '../../content/gallery'
import './Gallery.css'

type GalleryProps = {
  /** When set, only the first N items are shown (e.g. home preview). */
  maxItems?: number
  /** Shown below the grid; links to `/gallery`. */
  showViewAll?: boolean
}

export function Gallery({ maxItems, showViewAll }: GalleryProps = {}) {
  const items =
    maxItems != null
      ? GALLERY_ITEMS.slice(0, Math.min(maxItems, GALLERY_ITEMS.length))
      : GALLERY_ITEMS

  return (
    <section
      className={`gallery-section${maxItems != null ? ' gallery-section--preview' : ''}`}
      id="gallery"
    >
      <div className="section-label">Our work</div>
      <h2 className="section-title">
        Transformations That
        <br />
        <em>Grow & Produce</em>
      </h2>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-item" key={`${item.src}-${index}`}>
            <img
              src={item.src}
              alt={item.alt}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            <div className="gallery-item-overlay">
              <span className="gallery-caption">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>
      {showViewAll ? (
        <div className="gallery-actions">
          <Link to="/gallery" className="btn-outline gallery-view-all">
            View all
          </Link>
        </div>
      ) : null}
    </section>
  )
}
