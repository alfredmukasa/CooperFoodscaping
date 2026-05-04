import { Link } from 'react-router-dom'
import { WHY_CARDS, WHY_SECTION_BACKDROP } from '../../content/whyFoodscaping'
import './WhyFoodscaping.css'

export function WhyFoodscaping() {
  return (
    <section className="why-section" id="why">
      <div
        className="why-section-backdrop"
        style={{ backgroundImage: `url(${WHY_SECTION_BACKDROP.src})` }}
        aria-hidden="true"
      />
      <div>
        <div className="section-label">Why it matters</div>
        <h2 className="section-title">
          Landscapes That
          <br />
          <em>Work for You</em>
        </h2>
        <p className="why-lead">
          Traditional lawns cost money, water, and time — and give nothing back.
          An edible landscape is an investment in your health, your wallet, and
          your local ecosystem.
        </p>
        <Link to="/contact" className="btn-outline why-outline-cta">
          Start the Conversation
        </Link>
      </div>
      <div className="why-cards">
        {WHY_CARDS.map((card) => (
          <div className="why-card fade-up" key={card.title}>
            <div className="why-card-icon">{card.icon}</div>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
