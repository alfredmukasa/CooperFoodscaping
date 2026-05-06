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

// ─── Hero section ───────────────────────────────────────────────────────────
export const SERVICES_HERO = {
  image: {
    src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1613529700765-YDW22ECJ0SADXEXQX7LH/DSC04147.jpg',
    alt: `Freshly harvested vegetables including garlic, red onions, cucumbers, and potatoes — Cooper's Foodscaping`,
  },
  headline: 'We help you grow your own health, nutrition and support the environment.',
  subtext: "Here's How..",
  ctaLabel: 'Get Started',
  ctaUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeWayiWal8NslKP0Co-bBQpYx-ThynhykqXl1r-IqFBvArCGg/viewform',
} as const

// ─── Core service categories (from live site) ────────────────────────────────
export type SiteService = {
  id: string
  name: string
  image: PackageImage
  body: string
  footnote?: string
  pricing?: string
}

export const SITE_SERVICES: SiteService[] = [
  {
    id: 'edible-landscaping',
    name: 'Edible Landscaping',
    image: {
      src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1613749329277-1WSF1TS0SS9K6PGQRI54/IMG_20200806_124322637.jpg',
      alt: 'Herb spiral filled with parsley, basil, chives, rosemary, tarragon, and mint',
    },
    body:
      `Using Permaculture and Agriscaping methods and philosophy, these services will create beautiful and lush spaces with mixes of various edible and supporting plants. We create guilds and stack the functions of plants to create self-supporting ecosystems on any scale. The designs and wants of the clients will be worked out during the consultation process. We can tame a wild area to create a lovely and groomed space, or make a very tame space into a wild one! We can create paths and beds in any shape, size or pattern. We can also help you get the most out of the edible plants in your yard already! Let your creativity come out and let Cooper's Foodscaping guide you! Offerings include companion planting, vegetable and fruit disease management, soil testing, coaching and more.`,
    footnote:
      '* Consultation process only necessary when designing brand new landscapes. Additional garden beds, raised beds and changes to existing beds do not require a full consultation process.',
  },
  {
    id: 'raised-beds',
    name: 'Custom Built Raised Beds',
    image: {
      src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/15cd507e-9b74-4a5e-a833-2fc90c37de81/IMG_20230522_154356433.jpg',
      alt: 'U-shaped cedar raspberry raised bed on day of install',
    },
    body:
      'We offer a range of styles, from the more traditional cedar or pine boxes, to more unique designs, often using materials found on site. They can be any shape or size, and we will work with you to find what fits best! Options include stones, bricks, cedar logs in both vertical and horizontal orientation, and more. Design fees are included for this service. See more examples in the Gallery!',
  },
  {
    id: 'standard-landscaping',
    name: 'Standard (non-edible) Landscaping',
    image: {
      src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/0e01fa27-3909-46af-afc3-a0ff5eee0cbc/IMG_20200809_183641036.jpg',
      alt: 'Patio and wooden structures in a backyard landscape',
    },
    body:
      'This includes patios, benches, pathways, non-edible flower gardens, maintenance of existing spaces, yard clean-ups, pruning and removal of brush, non-edible tree planting, garden edging, soil testing and fertilizing, and more. We are happy to work with clients to meet their needs and desires — feel free to ask about your project!',
  },
  {
    id: 'wild-food-coaching',
    name: 'Wild Food Education & Coaching',
    image: {
      src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/caec0ab3-8dd9-451c-bef6-0ad30ab804f8/260.jpg',
      alt: 'Wild grape leaf wraps prepared from foraged ingredients',
    },
    body:
      'As an experienced nibbler, Jeremy has spent many years slowly learning and tasting various wild edible berries, vegetables and nuts. We offer education and coaching in flow with our other services. If clients choose to join us in the garden, we also offer 30-minute phone calls to discuss foraging, what to eat and how to find it, and general vegetable garden support.',
    pricing: '30 min call — $65 by e-transfer',
  },
]

// ─── Testimonial ─────────────────────────────────────────────────────────────
export const SERVICES_TESTIMONIAL = {
  quote:
    'Jeremy is incredibly knowledgeable, enthusiastic, and hard working. With his help we were able to turn our wild weed garden into a lush, beautiful garden full of food.',
  author: 'Allyson M.',
  image: {
    src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1614472453104-N4OTUW8STG90L1RJQ2N6/IMG-8291.jpg',
    alt: 'Nasturtiums and edible garden greens',
  },
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
