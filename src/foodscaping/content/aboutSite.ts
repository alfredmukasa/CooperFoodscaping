/**
 * Editorial content mirrored from the live site
 * https://www.coopersfoodscaping.com/
 */

export const ABOUT_PAGE_HERO = {
  label: 'About',
  title: 'Creating Beautiful, Edible Landscapes',
  lead:
    'Based in Georgina, we happily serve the GTA, York Region, and the surrounding area. Edible landscapes are the future of landscaping — spaces that give back with more than beauty: abundance, connection, and food.',
} as const

/** Same photo paired with “Our Mission” on the live homepage */
export const ABOUT_MISSION_IMAGE = {
  src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612884757481-4780PM48K5PN8O1O45TT/DSC04291.JPG',
  alt: 'Garden path through edible and ornamental plantings',
} as const

export const ABOUT_MISSION = {
  title: 'Our mission',
  body: [
    'We help people across the Greater Toronto Area and York Region grow food, connect to land, develop sustainable habits, and support healthier routines. We hope to further conversations around ecology, a shifting climate, and food justice and security.',
    'We provide a practical way to help yourself and those around you move in a more balanced direction — one garden at a time. We endeavour to offer a path toward stability, hope, and self-determination by slowing down and returning to our roots. The big challenges out there feel more manageable with a healthy garden around you.',
    'We do not use synthetic chemicals and discourage monocultures of all kinds.',
  ],
} as const

export type AudienceQuestion = {
  title: string
  body: string
}

export const AUDIENCE_QUESTIONS: AudienceQuestion[] = [
  {
    title: 'Tired of spending money on flowers and lawn that produce nothing?',
    body:
      'Monoculture lawns are more trouble than they are worth. If you want green space to play and sit on, alternative lawns are the way to go — less money, water, and fertilizer, with the same green. If you are feeling more adventurous, the lawn can become a food forest. Ask us how.',
  },
  {
    title: 'Looking for ways to reduce your grocery bill?',
    body:
      'Growing your own food is like investing directly in your health while saving money. With thoughtful garden management you can save hundreds or thousands of dollars each year. The nutrition, movement, and connection that come from working your land are benefits too — and the best-tasting vegetables are often the ones from your own yard.',
  },
  {
    title: 'Wondering what to do about the climate crisis?',
    body:
      'Healthy soil sequesters carbon, and biodiverse gardens support local ecosystems and species. Connecting to nature helps us understand our role and how we can use our hands and hearts to shape the future. Join the growing movement of people growing food with their landscapes.',
  },
]
