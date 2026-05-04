import {
  ABOUT_INTRO_PARAGRAPHS,
  ABOUT_PORTRAIT,
  ABOUT_TAGS,
  TESTIMONIAL,
} from '../../content/about'
import './AboutJeremy.css'

type AboutJeremyProps = {
  sectionId?: string
}

export function AboutJeremy({ sectionId = 'about' }: AboutJeremyProps) {
  return (
    <section className="about-section" id={sectionId}>
      <div className="about-img-wrap">
        <div className="about-portrait-block">
          <img src={ABOUT_PORTRAIT.src} alt={ABOUT_PORTRAIT.alt} />
          <div className="about-years-badge">
            <span>6+</span>
            <span>Years Growing</span>
          </div>
        </div>
        {/* <img
          className="about-img-garden"
          src={ABOUT_GARDEN_IMAGE.src}
          alt={ABOUT_GARDEN_IMAGE.alt}
          loading="lazy"
          decoding="async"
        /> */}
      </div>
      <div className="about-content">
        <div className="section-label">The person behind the plants</div>
        <h2 className="section-title">
          Meet <em>Jeremy.</em>
        </h2>
        {ABOUT_INTRO_PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="about-tags">
          {ABOUT_TAGS.map((tag) => (
            <span className="about-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="testimonial-block">
          <p>{TESTIMONIAL.quote}</p>
          <cite>{TESTIMONIAL.attribution}</cite>
        </div>
      </div>
    </section>
  )
}
