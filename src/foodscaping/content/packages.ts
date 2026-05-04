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

export type MaintenancePackage = {
  id: string
  name: string
  image: PackageImage
  visitsLabel: string
  features: string[]
  featured?: boolean
  badge?: string
}

export const MAINTENANCE_PACKAGES: MaintenancePackage[] = [
  {
    id: 'seed',
    name: 'Seed',
    image: PACKAGE_IMAGES.seed,
    visitsLabel: '3 visits / season',
    features: [
      'Up to 4 hours per visit',
      'Basic organic amendments + veg seeds',
      'Weeding, mulching, edging, trimming',
      'Guild & companion plantings',
      '2 × 30-min coaching calls',
      'Basic / recycled materials',
    ],
  },
  {
    id: 'sapling',
    name: 'Sapling',
    image: PACKAGE_IMAGES.sapling,
    visitsLabel: '6 visits / season',
    features: [
      'Up to 4 hours per visit',
      'All services except pruning',
      'All amendments included',
      'Soil testing included',
      'Bug netting, trellis, critter defence kit',
      '25% off straw · 10% off seedlings',
    ],
  },
  {
    id: 'annual',
    name: 'Annual',
    image: PACKAGE_IMAGES.annual,
    visitsLabel: '8 visits / season',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Up to 6 hours per visit',
      'All services available',
      'All amendments + soil testing',
      'Design fees for new gardens included',
      '$50 off edible perennials',
      '25% off straw · 15% off seedlings',
    ],
  },
  {
    id: 'perennial',
    name: 'Perennial',
    image: PACKAGE_IMAGES.perennial,
    visitsLabel: '16 visits / season',
    features: [
      '2 visits per month (up to 4 hrs)',
      'Everything in Annual package',
      'Free soil & vermicompost delivery',
      'KM to site included',
      '10% off all plants purchased',
      'Priority scheduling',
    ],
  },
]

export const SERVICES_PAGE_INTRO = {
  label: 'Services',
  title: 'Maintenance packages & edible landscapes',
  paragraphs: [
    'Our operating season for maintenance begins in April and runs through October. Weather permitting, we also offer initial and follow-up visits in March and November.',
    'Raised beds, arbours or trellises, stone patios, and machine work are not included by default. Every garden is unique, and so is every client — we pride ourselves on flexibility and adaptability.',
    'We focus on creating and maintaining edible landscapes: mixing perennial fruits and vegetables into traditional landscapes and carving out space for annual fruits and vegetables.',
    'All packages include a couple of special additions for those who are interested — contact us to learn more.',
  ],
} as const

export type DetailedPackage = {
  id: string
  name: string
  image: PackageImage
  subtitle?: string
  bullets: string[]
  footnote?: string
}

export const DETAILED_PACKAGES: DetailedPackage[] = [
  {
    id: 'seed',
    name: 'Seed',
    image: PACKAGE_IMAGES.seed,
    bullets: [
      '3 maintenance visits over the summer season (April–October)',
      'Each visit up to 4 hours',
      'Basic organic amendments (macronutrients) and vegetable seeds included',
      'Services available: weeding, mulching, fertilization and amendments, edging, trimming, guild and companion plantings, coaching, and more. Available with additional purchase: fruit tree pruning, disease control, soil testing',
      'Two 30-minute coaching calls',
      'Basic or recycled materials provided',
      'Kilometres to site not included',
      'Purchased materials and plants not included',
    ],
    footnote: 'Design fees not included.',
  },
  {
    id: 'sapling',
    name: 'Sapling',
    image: PACKAGE_IMAGES.sapling,
    bullets: [
      '6 maintenance visits over the summer season',
      'All services except pruning and removal of material are included; some items available with additional purchase',
      'Each visit up to 4 hours',
      'Two 30-minute coaching calls',
      'All amendments included (macro and micronutrients)',
      'Soil testing included',
      'Basic material kit provided (bug netting, trellis materials, critter defence)',
      '25% discount on straw for mulching',
      '10% discount on vegetable seedlings',
      'Kilometres to site not included',
      'Other purchased materials and plants not included',
    ],
    footnote: 'Design fees not included.',
  },
  {
    id: 'annual',
    name: 'Annual',
    image: PACKAGE_IMAGES.annual,
    bullets: [
      '8 maintenance visits over the summer season',
      'All services available',
      'Each visit up to 6 hours',
      'All amendments included',
      'Soil testing included',
      'Basic material kit included',
      '25% discount on straw and wood chip',
      '15% discount on vegetable seedlings',
      'Design fees for new gardens included',
      '$50 discount on edible perennials',
      'Kilometres to site not included',
      'Other purchased materials and plants not included',
      'Two 30-minute coaching calls',
    ],
  },
  {
    id: 'perennial',
    name: 'Perennial',
    image: PACKAGE_IMAGES.perennial,
    subtitle: 'Long-term maintenance',
    bullets: [
      '16 maintenance visits over the summer season (two per month)',
      'Everything from the Annual package; visits up to 4 hours',
      'Free delivery for soil and vermicompost',
      'Kilometres to site included',
      '10% discount on all plants purchased',
      'Other materials purchased not included',
    ],
  },
]
