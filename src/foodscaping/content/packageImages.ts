/**
 * Package header images — same assets and order as
 * https://www.coopersfoodscaping.com/ (Seed → Perennial).
 */

export type PackageImage = {
  src: string
  alt: string
}

export const PACKAGE_IMAGES: Record<
  'seed' | 'sapling' | 'annual' | 'perennial',
  PackageImage
> = {
  seed: {
    src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612890194604-Q0NXREUZCADAPAQCVCI9/francesco-gallarotti-ruQHpukrN7c-unsplash.jpg',
    alt: 'Hands harvesting fresh greens from the soil',
  },
  sapling: {
    src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612890427829-XOL77T109QDPZ1TDU6U9/Untitled+design.png',
    alt: 'Illustrated garden and maintenance concept',
  },
  annual: {
    src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612888897632-1BM3ZEKFH1DVFXER0NIF/markus-spiske-Yy-dHQP-Ax0-unsplash.jpg',
    alt: 'Young vegetable seedlings in rich soil',
  },
  perennial: {
    src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612888945928-9N4SXNOM8XK21C8GRAA5/anna-kaminova-TyXm6yXY3EQ-unsplash.jpg',
    alt: 'Colourful flowering plants in a garden bed',
  },
} as const
