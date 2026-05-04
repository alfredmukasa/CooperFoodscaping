import { HOME_GALLERY_PREVIEW_COUNT } from '../content/gallery'
import {
  AboutJeremy,
  Contact,
  CtaBanner,
  Gallery,
  Hero,
  ServiceArea,
  Services,
  WhyFoodscaping,
} from '../sections'
import { useConsultationForm } from '../hooks/useConsultationForm'

export function HomePage() {
  const { handleSubmit, submitLabel, submitDisabled, submitStyle } =
    useConsultationForm()

  return (
    <>
      <Hero />
      <WhyFoodscaping />
      <Services />
      <AboutJeremy />
      <Gallery
        maxItems={HOME_GALLERY_PREVIEW_COUNT}
        showViewAll
      />
      <ServiceArea />
      <CtaBanner />
      <Contact
        onSubmit={handleSubmit}
        submitLabel={submitLabel}
        submitDisabled={submitDisabled}
        submitStyle={submitStyle}
      />
    </>
  )
}
