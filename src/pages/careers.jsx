// /careers.html
import Bolt from '../components/Bolt.jsx'
export const meta = {
  title: "Careers | Avortyx",
  description: "Join the team building the future of call tracking and lead automation.",
  bodyClass: "avortyx_marketing careers without-waves",
  layout: "site",
}

// Roles, values and apply links match avortyx.com/careers: each Apply opens an email to
// hello@avortyx.io with the role in the subject.
const CAREERS_EMAIL = 'hello@avortyx.io'
const apply = (title) => `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${title}`)}`
const OPEN_APPLICATION = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Open application')}`

// [title, team, badge classes, location, description]
const ROLES = [
  ['Senior Backend Engineer, Telephony', 'Engineering', 'bg-primary-subtle text-primary', 'Remote, US / EU', 'Own the routing core: SIP, carrier integrations and the sub-second decision path behind every call.'],
  ['Frontend Engineer, Product', 'Engineering', 'bg-primary-subtle text-primary', 'Remote, US / EU', 'Build the live monitor, reports and campaign tooling operators use every day, with Next.js, TypeScript and real-time data.'],
  ['Machine Learning Engineer, Intent Scoring', 'Data', 'bg-info-subtle text-info', 'Remote, US', 'Turn live call signals into the intent scores that decide where calls go: feature pipelines, online inference and evaluation.'],
  ['Solutions Engineer', 'Customer', 'bg-warning-subtle text-warning', 'Remote, US', 'Get networks live: number porting, routing design, compliance setup and integrations, side by side with customers.'],
  ['Account Executive, Pay-Per-Call', 'Sales', 'bg-success-subtle text-success', 'Remote, US', 'Bring Avortyx to performance networks and buyers ready to replace stitched-together trackers, carriers and spreadsheets.'],
]

// [icon, color, title, text]
const VALUES = [
  ['fa-bolt', 'text-warning', 'Decide in the first ring', 'We ship in small, fast loops. A call can’t wait, and neither should a fix.'],
  ['fa-shield-halved', 'text-success', 'Compliance is a feature', 'TCPA, DNC and consent aren’t paperwork: they’re product. We build them in, never bolt them on.'],
  ['fa-headset', 'text-info', 'Operators first', 'Every screen is designed for the people running campaigns at 2am, not for a slide deck.'],
  ['fa-bullseye', 'text-danger', 'Own the outcome', 'Real scope from day one. You’ll carry problems from customer call to production and back.'],
]

export default function Careers() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Features </a>
          </div>
          <h1 className="fw-bold mb-2">Careers</h1>
          <p className="lead mktg-subpage-hero-subtitle">Join the team building the future of call tracking and lead automation.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">A team of 100+ experts, operating where every millisecond matters</h2>
            <p className="text-muted max-w-2xl mx-auto">Avortyx is a growing company of over 100 employees: engineers, operators and sellers. Every call that rings through the platform is someone’s revenue, and that shapes how we build and who we hire.</p>
          </div>
          <div className="row g-4 mb-5">
            {VALUES.map(([icon, color, title, text]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div className="p-4 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <i className={`fa-solid ${icon} ${color} fs-3 mb-3`} aria-hidden="true" />
                  <h3 className="h6 fw-bold text-white mb-2">{title}</h3>
                  <p className="small text-muted mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-4 text-center">Where we’re hiring now</h2>
            <div className="row g-4">
              {ROLES.map(([title, team, badge, location, text]) => (
                <div className="col-lg-6" key={title}>
                  <div className="p-4 rounded h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #131722, #0d1017)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className={`badge ${badge}`}>{team}</span>
                        <span className="small text-muted font-monospace">Full-time</span>
                      </div>
                      <h3 className="h5 fw-bold text-white mb-2">{title}</h3>
                      <p className="small text-muted mb-2"><i className="fa-solid fa-location-dot me-1 text-info" aria-hidden="true" />{location} · Full-time</p>
                      <p className="small text-slate-300 mb-3">{text}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                      <span className="small text-muted">{team}</span>
                      <a href={apply(title)} className="btn btn-sm btn-td-green fw-semibold">Apply Now →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-4 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <h3 className="h5 fw-bold text-white mb-2">Nothing that fits?</h3>
            <p className="text-muted small mb-3"><a href={OPEN_APPLICATION}>Tell us what you’d build here</a>, we read every note.</p>
            <a className="btn btn-td-green px-4 py-2 fw-semibold" href={OPEN_APPLICATION}>Send an open application</a>
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to route your first call?</h2>
          <p className="marketing-cta-band__subtitle">Point a number at Avortyx and calls start scoring, routing and settling on the first ring. Request access, or walk through your traffic with our team.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/request-access" className="btn btn-cta-primary fw-semibold avx-ra-cta"><Bolt />Request Access</a>
            {" "}
            <a href="/p/contact" className="btn btn-cta-outline fw-semibold">Request a Demo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
