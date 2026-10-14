// /features/lead_automation.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Lead Automation | Turn form fills into live calls | Avortyx",
  description: "Avortyx contacts every new lead the moment it arrives, with SMS, email and outbound calls in multi-step schedules, and connects the lead to a buyer as soon as they pick up.",
  bodyClass: "avortyx_marketing features_lead_automation ",
  layout: "feature",
}

export default function LeadAutomation() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#automation" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Automation{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Automation</p>
          <h1 className="fw-bold mb-2">Lead Automation</h1>
          <p className="lead mktg-subpage-hero-subtitle">Reach every new lead while they are still interested: texts, emails and calls in a sequence that runs on its own, ending in a live call routed to a buyer.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">One Way a Follow-Up Can Run</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-user-plus" aria-hidden="true" /></div>
                  <div className="flow-node-label">Lead Arrives</div>
                  <div className="flow-node-desc">From a form, the API or an import</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-comment-sms" aria-hidden="true" /></div>
                  <div className="flow-node-label">First Touch</div>
                  <div className="flow-node-desc">SMS, email or a webhook, instantly</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-clock" aria-hidden="true" /></div>
                  <div className="flow-node-label">Pause</div>
                  <div className="flow-node-desc">Wait as long as each step needs</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call</div>
                  <div className="flow-node-desc">Dial the lead and route to a buyer</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-rotate" aria-hidden="true" /></div>
                  <div className="flow-node-label">Try Again</div>
                  <div className="flow-node-desc">More attempts, or done</div>
                </div>
              </div>
              <p className="text-muted text-center small mb-0 mt-3">Just one sequence; combine the schedule actions below however your offer needs.</p>
            </div>
            <p>
              A lead is never warmer than the minute after they submit a form.{" "}
              <a href="/features/lead_automation">Lead Automation</a>
              {" "}acts in that minute: it texts and emails the lead, places the call, and when they answer, Avortyx scores and routes the conversation to a buyer like any inbound call.
            </p>
            <p className="text-muted">A typical setup: a social ad form sends each new lead to Avortyx the instant it is submitted. A text and an email go out at once, the IVR calls the lead a few minutes later, and if nobody answers, it tries again on its own.</p>
            <h3>Building blocks of a schedule</h3>
            <p>A schedule is an ordered list of actions that runs for every lead it receives. You can use:</p>
            <ul className="text-muted">
              <li><strong>Call</strong> — dial the lead through the offer’s IVR</li>
              <li><strong>SMS</strong> — send a text, with tokens filled in for each lead</li>
              <li><strong>Email</strong> — send through your connected email integration</li>
              <li><strong>Wait</strong> — pause for as long as you set before the next step</li>
              <li><strong>Webhook</strong> — notify an outside system</li>
              <li><strong>Add to Schedule</strong> — hand the lead to a different schedule</li>
              <li><strong>Update Field</strong> — change values on the lead’s contact fields</li>
              <li><strong>Conditional</strong> — leave the schedule when tokens or expressions say so</li>
            </ul>
            <p className="text-muted mb-1">
              <strong>Lay it out visually.</strong>
              {" "}Drag actions into the order each lead should experience them.
            </p>
            <img alt="Avortyx lead scheduler" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/new-schedule-example.webp" width="941" height="780" loading="lazy" decoding="async" />
            <p className="text-muted mb-1">
              <strong>See what each schedule earns.</strong>
              {" "}Leads created, ended and converted, with revenue and profit per sequence.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/schedule-example.webp">
              <img alt="Lead Automation dashboard comparing volume, conversions, revenue, and profit by schedule" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/schedule-example.webp" width="2000" height="1120" srcSet="/assets/avx-shots/schedule-example-1000.webp 1000w, /assets/avx-shots/schedule-example.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>Follow-up you can measure</h3>
            <p>The Lead Automation dashboard shows, live, what every schedule is producing:</p>
            <ul className="text-muted">
              <li>
                <strong>Volume and outcomes</strong>
                {" "}— leads created, contacted, ended and converted, with conversion and lifecycle rates
              </li>
              <li><strong>Money</strong> — revenue, payout, profit, margin and revenue per lead</li>
              <li><strong>Breakdowns</strong> — by offer, schedule, channel, buyer and agent</li>
              <li><strong>The queue right now</strong> — the outbound dialer queue, live, by tier and state</li>
              <li><strong>Best times to call</strong> — heatmaps of the days and hours that create and convert the most leads</li>
            </ul>
            <p className="text-muted mb-1">
              <strong>The headline numbers.</strong>
              {" "}KPIs against the previous period, the lifecycle funnel and the best windows to reach people.
            </p>
            <img alt="Avortyx lead automation KPI dashboard" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/lead-automation-dashboard.webp" width="1226" height="680" srcSet="/assets/avx-shots/lead-automation-dashboard-1000.webp 1000w, /assets/avx-shots/lead-automation-dashboard.webp 1226w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <p className="text-muted mb-1">
              <strong>How it trends.</strong>
              {" "}Leads, outcomes, conversions, revenue and automation activity across your date range.
            </p>
            <img alt="Avortyx lead automation trends over time" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/lead-automation-analytics-trends.webp" width="1226" height="490" srcSet="/assets/avx-shots/lead-automation-analytics-trends-1000.webp 1000w, /assets/avx-shots/lead-automation-analytics-trends.webp 1226w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <p className="text-muted mb-1">
              <strong>Where leads convert.</strong>
              {" "}Conversions on a map, broken down by state and country.
            </p>
            <img alt="Avortyx lead automation conversions by geography" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/lead-automation-analytics-geo.webp" width="1226" height="558" srcSet="/assets/avx-shots/lead-automation-analytics-geo-1000.webp 1000w, /assets/avx-shots/lead-automation-analytics-geo.webp 1226w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
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
