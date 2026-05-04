import { Link } from 'react-router-dom'
import { HERO_IMAGE, HERO_STATS } from '../../content/hero'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-tag">GTA & York Region</div>
        <h1 className="hero-h1">
          Your Yard,
          <br />
          <em>Growing Food</em>
          <br />
          Not Just Grass.
        </h1>
        <p className="hero-sub">
          Edible landscapes that give back — with abundance, biodiversity, and
          real food from your own property. Serving Georgina, East Gwillimbury,
          Uxbridge & the GTA.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation
          </Link>
          <Link to="/services" className="btn-outline">
            View Packages
          </Link>
        </div>
        <div className="hero-stats">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <span className="hero-stat-num">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-container">
          <img src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} loading="eager" />
          <div className="hero-img-overlay" />
        </div>
        <div className="hero-img-badge">
          <div className="badge-icon">🌱</div>
          <div className="badge-text">
            <strong>No synthetic chemicals</strong>
            <span>100% organic approach</span>
          </div>
        </div>
      </div>
    </section>
  )
}
