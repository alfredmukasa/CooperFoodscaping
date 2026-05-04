import { Contact } from '../sections/Contact/Contact'
import { useConsultationForm } from '../hooks/useConsultationForm'
import './PageShell.css'

export function ContactPage() {
  const { handleSubmit, submitLabel, submitDisabled, submitStyle } =
    useConsultationForm()

  return (
    <div className="page-shell contact-page-wrap">
      <header className="page-hero">
        <div className="section-label">Contact</div>
        <h1>
          Reach out to start the conversation with <em>C.F.</em> today
        </h1>
        <p className="page-hero-lead">
          Have questions about your property or ready to book? Send a message —
          we typically reply within one to two business days during the season.
        </p>
      </header>
      <Contact
        onSubmit={handleSubmit}
        submitLabel={submitLabel}
        submitDisabled={submitDisabled}
        submitStyle={submitStyle}
      />
    </div>
  )
}
