/**
 * Extended service copy from the live site
 * https://www.coopersfoodscaping.com/
 */

import { type PackageImage, PACKAGE_IMAGES } from './packageImages'

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
