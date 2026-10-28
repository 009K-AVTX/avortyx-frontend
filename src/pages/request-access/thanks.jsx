// /request-access/thanks.html — where the request form lands once the backend has the request.
// Same layout and card as /request-access. site.js fills in the reference and email the form
// stored for this tab; opened on its own, the page reads fine without them. Not indexed.

const STEPS = [
  ['Request Sent', 'We have your details and what you want to route.'],
  ['We review it', 'Every request is looked at by our team; access is by invitation only.'],
  ['You get a personal link', 'If approved, we email you a secure link to set up your account.'],
]

export const meta = {
  title: 'Request Received | Avortyx',
  description: 'Thank you for requesting access to Avortyx. Our team will review your request and reply by email.',
  bodyClass: 'avortyx_marketing request_access without-waves',
  layout: 'site',
  head: <meta name="robots" content="noindex" />,
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default function RequestAccessThanks() {
  return (
    <main>
      <section className="avx-ra avx-ra-thanks">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="avx-ra-eyebrow">Request Received</p>
              <h1 className="avx-ra-title">Thank You. <br className="d-none d-md-inline" />Your Request Is In.</h1>
              <p className="avx-ra-lead">Our Team Will Look at Your Request and Reply by Email. Here Is What Happens Next.</p>
              <ol className="avx-ra-steps">
                {STEPS.map(([title, text], i) => (
                  <li key={title} className={i === 0 ? 'is-done' : undefined}>
                    <b>{title}</b>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
            </div>
            {/* on phones the confirmation comes first; side by side from lg up */}
            <div className="col-lg-6 order-first order-lg-0">
              <div className="avx-ra-card" data-avx-ra-thanks="">
                <span className="avx-ra-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                </span>
                <h2 className="avx-ra-card-title">Request Sent</h2>
                <p className="avx-ra-card-sub">Thanks for Telling Us About Your Business.</p>
                <dl className="avx-ra-summary" hidden>
                  <div data-avx-ra-field="reference" hidden><dt>Reference</dt><dd /></div>
                  <div data-avx-ra-field="email" hidden><dt>We’ll Reply To</dt><dd /></div>
                </dl>
                <a className="avx-ra-submit avx-ra-home" href="/">
                  Back to Home
                  <Arrow />
                </a>
                <p className="avx-ra-more">
                  <a href="/features">Explore Features</a>
                  <a href="/blog">Read the Blog</a>
                </p>
                <p className="avx-ra-note">Avortyx is invite-only. We’ll review your request and reach out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
