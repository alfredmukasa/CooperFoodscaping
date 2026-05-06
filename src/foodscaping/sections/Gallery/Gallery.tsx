import { Link } from 'react-router-dom'
import {
  GALLERY_ITEMS,
  galleryVideoPosterUrl,
  youtubeGalleryUrls,
} from '../../content/gallery'
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
        {items.map((item, index) => {
          const key =
            item.kind === 'video'
              ? `${item.youtubeId}-${index}`
              : `${item.src}-${index}`
          let posterUrl: string
          let watchHref: string | undefined
          if (item.kind === 'video') {
            posterUrl = galleryVideoPosterUrl(item)
            watchHref = youtubeGalleryUrls(item.youtubeId).watchUrl
          } else {
            posterUrl = item.src
            watchHref = undefined
          }

          const media = (
            <img
              src={posterUrl}
              alt={item.alt}
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
            />
          )

          return (
            <div className="gallery-item" key={key}>
              {watchHref ? (
                <a
                  className="gallery-item-media gallery-item-media--video"
                  href={watchHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.caption} (opens YouTube in a new tab)`}
                >
                  {media}
                </a>
              ) : (
                <div className="gallery-item-media">{media}</div>
              )}
              <div className="gallery-item-overlay">
                <span className="gallery-caption">{item.caption}</span>
              </div>
            </div>
          )
        })}
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
