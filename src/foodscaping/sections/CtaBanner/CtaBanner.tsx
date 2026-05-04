import { Link } from 'react-router-dom'
import './CtaBanner.css'

export function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="section-label">Ready to start?</div>
      <h2 className="section-title">
        Turn Your Yard Into a
        <br />
        <em>Food-Producing Garden</em>
      </h2>
      <p>
        Book a free consultation and let&apos;s talk about what your space can
        become — beautiful, edible, and full of life.
      </p>
      <Link to="/contact" className="btn-primary">
        Book a Free Consultation
      </Link>
    </section>
  )
}
