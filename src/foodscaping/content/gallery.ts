import galleryFromSite from './galleryFromSite.json'

export type GalleryItem = {
  src: string
  alt: string
  caption: string
}

/** Home page gallery strip — first item uses the large featured layout. */
export const HOME_GALLERY_PREVIEW_COUNT = 6

type GalleryFromSiteRow = {
  src: string
  caption: string
}

/** Squarespace CDN: request a bounded width for faster loads. */
function sizedCdnUrl(url: string): string {
  const q = url.indexOf('?')
  const base = q === -1 ? url : url.slice(0, q)
  return `${base}?format=800w`
}

/**
 * Full gallery strip from the live site (order preserved).
 * https://www.coopersfoodscaping.com/gallery
 */
export const GALLERY_ITEMS: GalleryItem[] = (
  galleryFromSite as GalleryFromSiteRow[]
).map((row) => {
  const caption = row.caption.trim() || "Cooper's Foodscaping project"
  return {
    src: sizedCdnUrl(row.src),
    alt: caption,
    caption,
  }
})

export const GALLERY_PAGE_COPY = {
  label: 'Gallery',
  title: 'Foodscapes, gardens and greenery',
  lead:
    'Project photos from across the GTA and York Region — before and after installs, raised beds, food forests, patios, and seasonal growth. Captions match the live gallery where provided.',
} as const
