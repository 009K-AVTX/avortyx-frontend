// /features/agent_controls.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Agent Control Center & Power Dialer | Avortyx",
  description: "A browser-based console where agents qualify callers, find the best buyer and transfer in one click, plus a Power Dialer that keeps every agent on a live conversation.",
  bodyClass: "avortyx_marketing features_agent_controls ",
  layout: "feature",
}

export default function AgentControls() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#call-management" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Call Management{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Call Management</p>
          <h1 className="fw-bold mb-2">Agent Control Center</h1>
          <p className="lead mktg-subpage-hero-subtitle">One browser screen to qualify a caller, find the best buyer and transfer in a click, with a Power Dialer that keeps every agent on a live conversation.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3 id="agent-control-center">Agent Control Center</h3>
            <p>Agents run the whole call from a browser tab: qualify the caller, steer the conversation and hand it to the right buyer. There is nothing to install and no separate SIP phone to configure.</p>
            <ul className="text-muted">
              <li>
                <strong>A phone in the browser</strong>
                {" "}— a WebRTC softphone with SIP credentials set up automatically.
              </li>
              <li><strong>Scripts that adapt</strong> — switch the interview script mid-call when the caller needs a different path.</li>
              <li><strong>Mute, hold and transfer</strong> — manage the caller’s audio and pass the call to a buyer in one click.</li>
              <li>
                <strong>Find the buyer</strong>
                {" "}— when the interview is done, the Avortyx routing engine picks the best eligible buyer for what the caller said, and shows the matches before you transfer.
              </li>
            </ul>
            <p className="text-muted">
              Put people and{" "}
              <a href="/features/voice_agents">AI Voice Agents</a>
              {" "}in the same flow: let AI qualify or answer the simple questions, then pass the caller to a person in the Agent Control Center.
            </p>
            <p className="text-muted mb-1">
              <strong>The live call, on one screen.</strong>
              {" "}Mute, hold, transfer, find a buyer and record the outcome, all in the browser.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-agent-control-center.webp">
              <img alt="Agent Control Center" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-agent-control-center.webp" width="2000" height="1117" srcSet="/assets/avx-shots/features-agent-control-center-1000.webp 1000w, /assets/avx-shots/features-agent-control-center.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>A whole floor, onboarded at once</h3>
            <p>Add hundreds of agents in one go with the bulk uploader: import them from a CSV, create internal agents who do not need an email address, and assign them to offers, schedules and call queues.</p>
            <p className="text-muted mb-1">
              <strong>Stand up a call center quickly.</strong>
              {" "}Agents created in bulk from a CSV, not one by one.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-create-agents.webp">
              <img alt="Create Agents" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-create-agents.webp" width="1000" height="493" loading="lazy" decoding="async" />
            </a>
            <h3 id="power-dialer">Power Dialer</h3>
            <p>Once agents are on the line, the Power Dialer keeps them talking. It loops continuously: find a free agent, dial the next lead, listen for a live answer, connect them, and pace itself to how many agents are waiting.</p>
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">The Power Dialer Loop</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-users" aria-hidden="true" /></div>
                  <div className="flow-node-label">Leads Waiting</div>
                  <div className="flow-node-desc">From the API, imports, schedule actions and more</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-headset" aria-hidden="true" /></div>
                  <div className="flow-node-label">Agent Free</div>
                  <div className="flow-node-desc">Ready for the next conversation</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Dial</div>
                  <div className="flow-node-desc">The next lead is called</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Connected</div>
                  <div className="flow-node-desc">A live answer goes to the agent</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-secondary text-white"><i className="fa-solid fa-clipboard-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Outcome</div>
                  <div className="flow-node-desc">Logged, and on to the next lead</div>
                </div>
              </div>
            </div>
            <h3>Which agent gets the call</h3>
            <p className="text-muted">Choose the rule that suits your floor:</p>
            <ul className="text-muted">
              <li><strong>Longest Wait Time</strong> — whoever has been free longest goes next.</li>
              <li><strong>Tier & Weight</strong> — your best people first, with weights sharing calls inside each tier.</li>
              <li><strong>Hybrid</strong> — tiers first, then longest wait within a tier.</li>
              <li>
                <strong>A fair share for everyone</strong>
                {" "}— every fifth call reverses the hybrid order, so lower tiers still get calls.
              </li>
            </ul>
            <h3>Outcomes that trigger the next step</h3>
            <p>Every call ends with a disposition, which shows you how calls are going and where to coach. Dispositions can also act: add the caller to your DNC list, call a custom webhook and more.</p>
            <p className="text-muted mb-1">
              <strong>Dispositions that do something.</strong>
              {" "}Your own codes can fire webhooks, update lead data or add a caller to your DNC.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-call-dispositions.webp">
              <img alt="Call Dispositions" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-call-dispositions.webp" width="1000" height="500" loading="lazy" decoding="async" />
            </a>
            <h3>The floor, live</h3>
            <p>See what every agent is doing right now (on a call, ringing a lead, at lunch) along with how long they have been in that state and how many calls they have taken.</p>
            <p className="text-muted mb-1">
              <strong>Where the day is going.</strong>
              {" "}Live statuses with time in state and calls handled.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-agent-statuses.webp">
              <img alt="Agent Statuses" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-agent-statuses.webp" width="1000" height="488" loading="lazy" decoding="async" />
            </a>
            <h3 id="agent-timesheets">Timesheets and productivity</h3>
            <p>Statuses show what the floor is doing now; timesheets show what it did. Each status change builds an agent’s timesheet, and the Agents dashboard adds them up across the floor for any period you choose.</p>
            <ul className="text-muted">
              <li>
                <strong>Payroll</strong>
                {" "}— billable, non-billable and talk hours, based on the billable flag you put on each status, so paid time and unpaid time never mix.
              </li>
              <li>
                <strong>Productivity</strong>
                {" "}— occupancy and availability are reported separately instead of as one “utilization” figure, because low availability and low occupancy have different fixes: one is about the agent, the other about the dialer. Time agents are paid to wait on the system, rather than talk to someone, is shown as its own share.
              </li>
              <li>
                <strong>Staffing</strong>
                {" "}— headcount with the median next to the mean, so a single part-time shift cannot make an ordinary day look bad.
              </li>
            </ul>
            <p className="text-muted mb-1">
              <strong>The whole floor, any period.</strong>
              {" "}Payroll, productivity and staffing at the top of the page.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-agent-timesheets-overview.webp">
              <img alt="Agent timesheet dashboard showing payroll, productivity, and staffing metrics" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-agent-timesheets-overview.webp" width="1560" height="1140" srcSet="/assets/avx-shots/features-agent-timesheets-overview-1000.webp 1000w, /assets/avx-shots/features-agent-timesheets-overview.webp 1560w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p>
              <strong>By Agent</strong>
              {" "}lists everyone on their own row: billable and total time, how the day split between talking, dialing, wrap-up and their own statuses, occupancy, callers handled and average handle time. Click a name or a total to see the status entries behind it.
            </p>
            <p className="text-muted mb-1">
              <strong>Person by person.</strong>
              {" "}Each agent’s day, with talk, dialing and wrap-up shown in one bar.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-agent-timesheets-by-agent.webp">
              <img alt="Per-agent timesheet table showing billable time, day mix, occupancy, and consumers handled" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-agent-timesheets-by-agent.webp" width="1800" height="452" srcSet="/assets/avx-shots/features-agent-timesheets-by-agent-1000.webp 1000w, /assets/avx-shots/features-agent-timesheets-by-agent.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p>
              <strong>Coverage by Day & Hour</strong>
              {" "}shows average agent-minutes for every hour of every weekday, in your account’s time zone rather than UTC, so a nine-to-five floor reads as nine to five. Compare it with when leads arrive and the holes in your schedule become obvious.
            </p>
            <p className="text-muted mb-1">
              <strong>When people are on.</strong>
              {" "}A week of coverage by day and hour, next to the statuses behind it.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-agent-timesheets-coverage.webp">
              <img alt="Coverage heatmap by day and hour beside a breakdown of time by agent status" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/features-agent-timesheets-coverage.webp" width="1800" height="489" srcSet="/assets/avx-shots/features-agent-timesheets-coverage-1000.webp 1000w, /assets/avx-shots/features-agent-timesheets-coverage.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
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
