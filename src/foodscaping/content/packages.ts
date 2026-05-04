import { type PackageImage, PACKAGE_IMAGES } from './packageImages'

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
