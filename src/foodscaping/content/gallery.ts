import galleryFromSite from './galleryFromSite.json'

export type GalleryImageItem = {
  kind: 'image'
  src: string
  alt: string
  caption: string
}

export type GalleryVideoItem = {
  kind: 'video'
  youtubeId: string
  /** Custom tile image (like other gallery photos). Falls back to YouTube thumbnail if omitted. */
  posterSrc?: string
  alt: string
  caption: string
}

export type GalleryItem = GalleryImageItem | GalleryVideoItem

/** YouTube watch URL and poster thumbnail for gallery tiles. */
export function youtubeGalleryUrls(youtubeId: string) {
  const id = youtubeId.trim()
  return {
    watchUrl: `https://www.youtube.com/watch?v=${id}`,
    posterUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  }
}

/** Poster shown in the grid: custom image when set, otherwise YouTube default. */
export function galleryVideoPosterUrl(item: GalleryVideoItem): string {
  const custom = item.posterSrc?.trim()
  if (custom) {
    return sizedCdnUrl(custom)
  }
  return youtubeGalleryUrls(item.youtubeId).posterUrl
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
const galleryImages: GalleryImageItem[] = (
  galleryFromSite as GalleryFromSiteRow[]
).map((row) => {
  const caption = row.caption.trim() || "Cooper's Foodscaping project"
  return {
    kind: 'image' as const,
    src: sizedCdnUrl(row.src),
    alt: caption,
    caption,
  }
})

/** Same ID was provided twice in the brief; one tile avoids a duplicate in the grid. Add another `kind: 'video'` row when you have a second link. */
const galleryVideos: GalleryVideoItem[] = [
  {
    kind: 'video',
    youtubeId: 'Wc4z79GAFRw',
    posterSrc:
      'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612885011598-CZBW8N6GFXOTH1AGK5WF/DSC04264%20(1).JPG',
    caption: 'Video — see the work on YouTube',
    alt: "Featured image linking to Cooper's Foodscaping project video on YouTube",
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [...galleryImages, ...galleryVideos]

export const GALLERY_PAGE_COPY = {
  label: 'Gallery',
  title: 'Foodscapes, gardens and greenery',
  lead:
    'Project photos from across the GTA and York Region — before and after installs, raised beds, food forests, patios, and seasonal growth. Captions match the live gallery where provided.',
} as const
