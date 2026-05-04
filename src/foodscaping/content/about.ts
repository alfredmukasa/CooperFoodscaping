export const ABOUT_TAGS = [
  'Permaculture',
  'Organic Farming',
  'Food Forests',
  'Green Roofing',
  'Native Plants',
  'Soil Health',
] as const

export const ABOUT_PORTRAIT = {
  src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612885011598-CZBW8N6GFXOTH1AGK5WF/DSC04264%2520%281%29.JPG?format=2500w',
  alt: "Jeremy Cooper — Cooper's Foodscaping",
} as const

/** Garden scene shown alongside Meet Jeremy on the live homepage */
export const ABOUT_GARDEN_IMAGE = {
  src: 'https://images.squarespace-cdn.com/content/v1/5f8617b37551972932f5e331/1612885011598-CZBW8N6GFXOTH1AGK5WF/DSC04264%20(1).JPG',
  alt: 'Edible garden beds with mulch and structured plantings',
} as const

/** Wording aligned with https://www.coopersfoodscaping.com/ */
export const ABOUT_INTRO_PARAGRAPHS = [
  "Cooper's Foodscaping, based in Georgina Township in York Region, was started in 2019 by Jeremy Cooper to bring the biodiversity and abundance of nature to your home or property. As a seasoned gardener, organic farmer, green roofer, and landscaper, Jeremy has transformed dozens of yards into food forests, gardens, and edible landscapes — and helped many clients get the most from their space. He is especially fond of permaculture, and uses a variety of techniques to work within nature's patterns.",
  "Cooper's Foodscaping offers a path to grow delicious, nutritious food from your own beautiful yard — with practical support and plenty of hyper-local, organic harvests.",
  'Focusing on edible, native, and non-invasive species.',
] as const

export const TESTIMONIAL = {
  quote:
    '"Jeremy has worked with me on installing 3 of my urban permaculture food forest projects for the past 3 years and has done an excellent job managing the execution of the project with good attention to detail and in an efficient way. He has learned a good deal about installation and maintenance of permaculture systems. My clients have been very happy with his professionalism and performance. I would highly recommend him for any project."',
  attribution: '— Leila Mireskandari, Urban Guilds Permaculture',
} as const

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
