import { Link } from 'react-router-dom'
import {
  ABOUT_PAGE_HERO,
  ABOUT_MISSION,
  ABOUT_MISSION_IMAGE,
  AUDIENCE_QUESTIONS,
} from '../content/aboutSite'
import { AboutJeremy } from '../sections/AboutJeremy/AboutJeremy'
import './PageShell.css'

export function AboutPage() {
  return (
    <div className="page-shell">
      <header className="page-hero">
        <div className="section-label">{ABOUT_PAGE_HERO.label}</div>
        <h1>{ABOUT_PAGE_HERO.title}</h1>
        <p className="page-hero-lead">{ABOUT_PAGE_HERO.lead}</p>
      </header>

      <section className="page-section page-mission-section">
        <div className="page-mission-split">
          <div className="page-prose">
            <h2>{ABOUT_MISSION.title}</h2>
            {ABOUT_MISSION.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <figure className="page-mission-figure">
            <img
              src={ABOUT_MISSION_IMAGE.src}
              alt={ABOUT_MISSION_IMAGE.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="page-section">
        <div className="page-prose">
          <div className="section-label">Are you…</div>
          <h2>Questions we hear every day</h2>
        </div>
        <div className="page-audience-grid">
          {AUDIENCE_QUESTIONS.map((item) => (
            <article className="page-audience-card fade-up" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <AboutJeremy sectionId="meet-jeremy" />

      <section className="page-section">
        <div className="page-prose page-cta-row">
          <Link to="/contact" className="btn-primary">
            Let&apos;s get you started
          </Link>
        </div>
      </section>
    </div>
  )
}
