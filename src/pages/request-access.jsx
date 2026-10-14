// /request-access.html — Avortyx is invite-only: the request form, as on avortyx.com/request-access.
// The form is static; site.js turns a submission into an email to the team (no backend).
import Bolt from '../components/Bolt.jsx'

const STEPS = [
  ['You send a request', 'Tell us who you are and what you want to do on the platform.'],
  ['We review it', 'Every request is looked at by our team; access is by invitation only.'],
  ['You get a personal link', 'If approved, we email you a secure link to set up your account.'],
]

export const meta = {
  title: 'Request Access | Avortyx',
  description: 'Avortyx is a private platform for pay-per-call buyers, publishers and networks. Tell us about your business and our team will review your request.',
  bodyClass: 'avortyx_marketing request_access without-waves',
  layout: 'site',
}

export default function RequestAccess() {
  return (
    <main>
      <section className="avx-ra">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="avx-ra-eyebrow">By invitation only</p>
              <h1 className="avx-ra-title">Request access <br className="d-none d-md-inline" />to Avortyx</h1>
              <p className="avx-ra-lead">Avortyx is a private platform for pay-per-call buyers, publishers and networks. Tell us about your business and our team will review your request.</p>
              <ol className="avx-ra-steps">
                {STEPS.map(([title, text]) => (
                  <li key={title}>
                    <b>{title}</b>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
              <p className="avx-ra-mail">Prefer email? <a href="mailto:hello@avortyx.io">hello@avortyx.io</a></p>
            </div>
            <div className="col-lg-6">
              <div className="avx-ra-card">
                <span className="avx-ra-mark" aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="currentColor" strokeLinecap="round">
                      <path d="M52 32a20 20 0 1 1-13.2-18.8" strokeWidth="3" />
                      <path d="M44.5 32a12.5 12.5 0 1 1-8.9-11.9" strokeWidth="2.5" opacity=".9" />
                      <path d="M38 32a6 6 0 1 1-4.2-5.7" strokeWidth="2" opacity=".8" />
                    </g>
                    <circle cx="32" cy="32" r="1.7" fill="currentColor" />
                  </svg>
                </span>
                <h2 className="avx-ra-card-title">Tell us about your business</h2>
                <p className="avx-ra-card-sub">It takes a minute. We only use this to review your request.</p>
                <form className="avx-ra-form" data-avx-request-access="" noValidate>
                  <div className="avx-ra-row">
                    <label>Full name<input name="name" autoComplete="name" required /></label>
                    <label>Company<input name="organization" autoComplete="organization" required /></label>
                  </div>
                  <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
                  <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+1 555 123 4567" /></label>
                  <label>What are you looking to route?<textarea name="use_case" rows="3" placeholder="A few words on your verticals, monthly call volume, and current stack." required /></label>
                  <p className="avx-ra-err" role="alert" hidden />
                  <button type="submit" className="avx-ra-submit">
                    <Bolt />
                    Request access
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </button>
                  <p className="avx-ra-done" role="status" hidden>Your email app should now be open with your request ready to send. Nothing opened? Write to <a href="mailto:hello@avortyx.io">hello@avortyx.io</a>.</p>
                  <p className="avx-ra-note">Avortyx is invite-only. We’ll review your request and reach out.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
