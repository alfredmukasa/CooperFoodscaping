import type { CSSProperties, FormEvent } from 'react'
import { SERVICE_FORM_OPTIONS } from '../../content/contactOptions'
import './Contact.css'

type ContactProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  submitLabel: string
  submitDisabled: boolean
  submitStyle: CSSProperties
}

export function Contact({
  onSubmit,
  submitLabel,
  submitDisabled,
  submitStyle,
}: ContactProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-info">
        <div className="section-label">Get in touch</div>
        <h2 className="section-title">
          Let&apos;s Start Your
          <br />
          <em>Garden Journey</em>
        </h2>
        <p>
          Have questions about your property? Ready to book? Fill out the form
          and Jeremy will get back to you within 1–2 business days.
        </p>
        <ul className="contact-details">
          <li>
            <strong>📍 Location:</strong> Georgina Township, York Region, ON
          </li>
          <li>
            <strong>📞 Phone:</strong> Available on request
          </li>
          <li>
            <strong>🌱 Approach:</strong> No synthetic chemicals, ever
          </li>
          <li>
            <strong>📅 Season:</strong> April – October (limited March &
            November)
          </li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Jeremy Cooper" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Your Location / City</label>
            <input
              type="text"
              id="location"
              placeholder="e.g. Newmarket, ON"
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Interested In</label>
            <select id="service" defaultValue="">
              {SERVICE_FORM_OPTIONS.map((opt) => (
                <option key={opt.value || 'placeholder'} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Tell Us About Your Space</label>
          <textarea
            id="message"
            placeholder="Describe your yard, any goals, questions, or challenges..."
          />
        </div>
        <button
          type="submit"
          className="form-submit"
          disabled={submitDisabled}
          style={submitStyle}
        >
          {submitLabel}
        </button>
      </form>
    </section>
  )
}
