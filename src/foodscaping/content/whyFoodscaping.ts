/** Full-bleed backdrop used on the live site behind the “Are you…” topics */
export const WHY_SECTION_BACKDROP = {
  src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1613752043813-0YPZIGMPRW3LTIRAT6O2/IMG-8294.jpg',
} as const

export type WhyCard = {
  icon: string
  title: string
  description: string
}

export const WHY_CARDS: WhyCard[] = [
  {
    icon: '🥦',
    title: 'Grow Your Own Food',
    description:
      'Save hundreds annually while eating fresh, hyper-local, organic produce from your own yard.',
  },
  {
    icon: '🌍',
    title: 'Sequester Carbon',
    description:
      'Healthy soil and biodiverse plantings actively remove carbon and support local ecosystems.',
  },
  {
    icon: '💸',
    title: 'Cut Lawn Costs',
    description:
      'Alternative ground covers need less water, fertilizer, and maintenance than monoculture grass.',
  },
  {
    icon: '🌿',
    title: 'Permaculture Design',
    description:
      "Work with nature's patterns — food forests, guilds, and companion planting that thrive together.",
  },
]
