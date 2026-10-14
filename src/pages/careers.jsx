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

// [title, team, description]. Every role is full-time; no locations are listed.
const ROLES = [
  ['Senior Backend Engineer, Telephony', 'Engineering', 'Own the routing core: SIP, carrier integrations and the sub-second decision path behind every call.'],
  ['Frontend Engineer, Product', 'Engineering', 'Build the live monitor, reports and campaign tooling operators use every day, with Next.js, TypeScript and real-time data.'],
  ['Operational Resiliency Lead', 'Engineering', 'Plan for the bad day: failover drills, incident playbooks and recovery targets that keep calls routing when a carrier or region goes down.'],
  ['Site Reliability Engineer', 'Engineering', 'Keep the routing path fast and up: monitoring, alerting, capacity and on-call for a platform that answers in milliseconds.'],
  ['QA Lead', 'Engineering', 'Set how we test routing rules, billing and integrations, and build the automated suites that let us ship daily with confidence.'],
  ['AI Software Engineer', 'Engineering', 'Take AI features such as transcription, call summaries and scoring from prototype to production.'],
  ['Senior IT Engineer', 'Engineering', 'Run the systems the team works on every day: devices, identity, access and the tools that keep everyone secure.'],
  ['Senior PHP Developer', 'Engineering', 'Build and maintain the services behind billing, reporting and the customer API, in clean, well-tested PHP.'],
  ['Cloud Platform Engineer', 'Engineering', 'Shape the cloud platform the routing core runs on: Kubernetes, infrastructure as code, networking and cost.'],
  ['Machine Learning Engineer, Intent Scoring', 'Data', 'Turn live call signals into the intent scores that decide where calls go: feature pipelines, online inference and evaluation.'],
  ['Data Analytics Lead', 'Data', 'Lead the analytics team: the metrics, dashboards and models that show customers and us what every call is worth.'],
  ['Trading Team Specialist', 'Data', 'Watch traffic and buyer performance day to day, spot shifts in call quality and payouts, and turn them into routing changes.'],
  ['Solutions Engineer', 'Customer', 'Get networks live: number porting, routing design, compliance setup and integrations, side by side with customers.'],
  ['Account Executive, Pay-Per-Call', 'Sales', 'Bring Avortyx to performance networks and buyers ready to replace stitched-together trackers, carriers and spreadsheets.'],
  ['Procurement Specialist', 'Finance', 'Source and manage the vendors we rely on, from carriers to software, and keep contracts, renewals and spend in order.'],
  ['Consolidation Specialist', 'Finance', 'Bring the numbers from every entity together into consolidated monthly and annual accounts.'],
  ['Senior Accountant', 'Finance', 'Own month-end close, reconciliations and reporting, including the payouts that settle between buyers and publishers.'],
  ['Junior Accountant', 'Finance', 'Learn the books from the ground up: invoices, payments, reconciliations and support for the month-end close.'],
  ['Compliance Monitoring Specialist', 'Legal', 'Check that our marketing, contracts and product meet the rules we work under, and flag risks before they become problems.'],
  ['CRM Specialist', 'Marketing', 'Run lifecycle email and in-product messaging, from segments and journeys to testing what moves prospects forward.'],
  ['Lead Digital Designer (Creative Production)', 'Marketing', 'Lead creative production across web, ads and product marketing, and set the visual bar for the brand.'],
  ['Paid Search Specialist', 'Marketing', 'Plan, launch and tune search campaigns, with call data showing which keywords bring in revenue.'],
  ['Graphic & Motion Designer', 'Marketing', 'Design the graphics and animation behind our site, product videos and social posts.'],
  ['Head of Paid Media', 'Marketing', 'Own paid acquisition across search, social and display: strategy, budgets, team and results.'],
  ['Traffic Manager', 'Marketing', 'Manage campaign traffic day to day: launches, budgets, tracking and the reports that show what is working.'],
  ['Marketing Project Manager', 'Marketing', 'Keep launches, campaigns and content on schedule across design, copy, product and sales.'],
  ['Copywriter (Senior)', 'Marketing', 'Write the words for our site, product launches and campaigns, and shape how Avortyx sounds.'],
  ['Copywriter (Junior)', 'Marketing', 'Write and edit web copy, emails, social posts and blog articles, with feedback from senior writers.'],
  ['Senior Brand Manager', 'Marketing', 'Own the Avortyx brand: positioning, guidelines and how we show up everywhere we appear.'],
  ['Senior Social Media Specialist', 'Marketing', 'Grow our social channels with posts and conversations that operators actually want to follow.'],
  ['Product Marketing Manager', 'Marketing', 'Turn product releases into clear stories: positioning, launches, sales enablement and customer messaging.'],
]

// the filter buttons, largest team first
const TEAMS = ['Engineering', 'Marketing', 'Finance', 'Data', 'Legal', 'Customer', 'Sales']

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

          <div className="mb-5" data-avx-jobs="">
            <h2 className="fw-bold mb-3 text-center">Where we’re hiring now</h2>
            <p className="text-muted text-center mb-4">{ROLES.length} open roles, all full-time.</p>
            {/* site.js filters the list by team; without script every role shows */}
            <div className="avx-jobs-filter" role="group" aria-label="Filter roles by team">
              <button type="button" className="avx-jobs-chip" data-team="" aria-pressed="true">All <span>{ROLES.length}</span></button>
              {TEAMS.map((team) => (
                <button type="button" className="avx-jobs-chip" data-team={team} aria-pressed="false" key={team}>
                  {team} <span>{ROLES.filter((r) => r[1] === team).length}</span>
                </button>
              ))}
            </div>
            <ul className="avx-jobs">
              {ROLES.map(([title, team, text]) => (
                <li className="avx-job" data-team={team} key={title}>
                  <div className="avx-job-main">
                    <span className="avx-job-team">{team}</span>
                    <h3 className="avx-job-title">{title}</h3>
                    <p className="avx-job-text">{text}</p>
                  </div>
                  <a href={apply(title)} className="btn btn-sm btn-td-green fw-semibold avx-job-apply">Apply Now →</a>
                </li>
              ))}
            </ul>
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
