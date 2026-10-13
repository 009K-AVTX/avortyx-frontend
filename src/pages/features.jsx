// /features.html
import Bolt from '../components/Bolt.jsx'
export const meta = {
  title: "Features | Score, route and settle every call | Avortyx",
  description: "Every Avortyx capability in one place: first-ring routing, ping/post bidding, call tracking, AI agents, lead automation, numbers and built-in compliance.",
  bodyClass: "avortyx_marketing features ",
  layout: "site",
}

export default function Features() {
  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="mktg-section-header">
            <h1 className="fw-bold">Features</h1>
            <p className="text-muted lead">One platform to score, route, screen and settle every call, decided on the first ring.</p>
          </div>
          <div className="flow-platform-diagram mt-4">
            <div className="flow-column">
              <a className="flow-item" href="/features/inbound_call_routing">
                {" "}
                <i className="fa-solid fa-phone-volume text-primary" aria-hidden="true" />
                {" "}
                <span>Inbound Call Routing</span>
                {" "}
              </a>
              {" "}
              <a className="flow-item" href="/features/ping_post">
                {" "}
                <i className="fa-solid fa-arrow-right-arrow-left text-info" aria-hidden="true" />
                {" "}
                <span>Ping/Post</span>
                {" "}
              </a>
              {" "}
              <a className="flow-item" href="/features/api">
                {" "}
                <i className="fa-solid fa-code text-secondary" aria-hidden="true" />
                {" "}
                <span>REST API</span>
                {" "}
              </a>
              <div className="flow-item"><i className="fa-solid fa-globe text-warning" aria-hidden="true" /> <span>Web Forms</span></div>
            </div>
            <div className="flow-arrows-column">
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              {" "}
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </div>
            <div className="flow-column-center">
              <div className="flow-center-box">
                <div className="flow-center-title"><i className="fa-solid fa-bolt text-primary me-1" style={{ color: "#2563eb" }} aria-hidden="true" /> Avortyx</div>
                <div className="flow-center-features"><span>Score, route and settle every call and lead in real time.</span></div>
              </div>
            </div>
            <div className="flow-arrows-column">
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              {" "}
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </div>
            <div className="flow-column">
              <a className="flow-item" href="/features/buyer_management">
                {" "}
                <i className="fa-solid fa-user-tie text-success" aria-hidden="true" />
                {" "}
                <span>Buyer Management</span>
                {" "}
              </a>
              {" "}
              <a className="flow-item" href="/features/call_tracking">
                {" "}
                <i className="fa-solid fa-circle-check text-success" aria-hidden="true" />
                {" "}
                <span>Conversions</span>
                {" "}
              </a>
              {" "}
              <a className="flow-item" href="/features/call_tracking">
                {" "}
                <i className="fa-solid fa-dollar-sign text-success" aria-hidden="true" />
                {" "}
                <span>Revenue</span>
                {" "}
              </a>
              {" "}
              <a className="flow-item" href="/features/call_tracking#reports-analytics">
                {" "}
                <i className="fa-solid fa-chart-line text-primary" aria-hidden="true" />
                {" "}
                <span>Call Analytics</span>
                {" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="ping-post">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="mktg-section-header">
                <h3 className="fw-bold">Real Time Ping/Post</h3>
                <p className="text-muted">Let every eligible buyer bid on every lead and call. Publishers ping for live bids, then post to connect the winner, all in milliseconds.</p>
              </div>
              <a className="btn btn-td-green feature-modal-link" href="/features/ping_post">Learn More</a>
              {" "}
              <a className="btn btn-outline-td-green ms-2 feature-modal-link" href="/features/ping_post_integration">Integration Guide</a>
            </div>
            <div className="col-lg-6 text-center">
              <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/ping-post-dashboard-1.webp">
                <img alt="Real-Time Ping/Post dashboard" className="img-fluid rounded border" width="1400" height="1032" src="/assets/avx-shots/ping-post-dashboard-1.webp" srcSet="/assets/avx-shots/ping-post-dashboard-1-1000.webp 1000w, /assets/avx-shots/ping-post-dashboard-1.webp 1400w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="call-management">
        <div className="container">
          <div className="mktg-section-header">
            <h3 className="fw-bold mb-1">Call Management</h3>
            <p className="text-muted">Everything that happens between the ring and the payout, inbound and outbound.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <a href="/features/call_tracking" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-success bg-opacity-10 text-success mb-3">
                    <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Call Tracking</h5>
                  <p className="text-muted small mb-0">Tie each call to its campaign, source and keyword, with local and toll-free numbers or the ones you port in.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/agent_controls" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-success bg-opacity-10 text-success mb-3"><i className="fa-solid fa-headset" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">Agent Control Center</h5>
                  <p className="text-muted small mb-0">Agents qualify the caller, find the best buyer and transfer in one click, from a browser tab.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/hold_queue" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-warning bg-opacity-10 text-warning mb-3">
                    <i className="fa-solid fa-clock-rotate-left" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Hold Queue & Callback</h5>
                  <p className="text-muted small mb-0">When every buyer is busy, callers hold with music and connect the moment someone frees up.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/call_recordings" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-info bg-opacity-10 text-info mb-3">
                    <i className="fa-solid fa-microphone-lines" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Call Recordings</h5>
                  <p className="text-muted small mb-0">Every leg recorded, played back only for your team and deleted on your retention schedule.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="automation">
        <div className="container">
          <div className="mktg-section-header">
            <h3 className="fw-bold mb-1">Automation</h3>
            <p className="text-muted">Reach every lead while they are still interested, by text, email and phone.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <a href="/features/lead_automation" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-warning bg-opacity-10 text-warning mb-3"><i className="fa-solid fa-bolt" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">Lead Automation</h5>
                  <p className="text-muted small mb-0">Turn form fills into live calls with sequences of texts, emails and dials that run on their own.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/agent_controls#power-dialer" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-danger bg-opacity-10 text-danger mb-3">
                    <i className="fa-solid fa-phone-arrow-up-right" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Power Dialer</h5>
                  <p className="text-muted small mb-0">Dials the next lead the moment an agent is free, so agents spend the hour talking, not dialing.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="ai">
        <div className="container">
          <div className="mktg-section-header">
            <h3 className="fw-bold mb-1">AI</h3>
            <p className="text-muted">AI that answers calls, works your texts and reads every conversation, alongside intent scoring on the first ring.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <a href="/features/voice_agents" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-success bg-opacity-10 text-success mb-3"><i className="fa-solid fa-robot" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">AI Voice Agents</h5>
                  <p className="text-muted small mb-0">AI agents that answer around the clock, qualify callers and warm-transfer high intent to buyers.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/ai_sms_bots" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-info bg-opacity-10 text-info mb-3"><i className="fa-solid fa-robot" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">AI SMS Bots</h5>
                  <p className="text-muted small mb-0">Text bots that answer leads, collect what buyers need and place the call once a lead qualifies.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/transcriptions" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-success bg-opacity-10 text-success mb-3">
                    <i className="fa-solid fa-file-lines" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">AI Transcriptions</h5>
                  <p className="text-muted small mb-0">Every recorded call transcribed, summarized and scored, with keyword alerts and live analytics.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="tracking-attribution">
        <div className="container">
          <div className="mktg-section-header">
            <h3 className="fw-bold mb-1">Tracking & Attribution</h3>
            <p className="text-muted">Know which ad made each phone ring, and send the result anywhere your team needs it.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <a href="/features/dynamic_number_insertion" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-info bg-opacity-10 text-info mb-3"><i className="fa-solid fa-code" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">Dynamic Number Insertion</h5>
                  <p className="text-muted small mb-0">Show each visitor a number tied to their source, so every call arrives already attributed.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/formulas" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-warning bg-opacity-10 text-warning mb-3">
                    <i className="fa-solid fa-calculator" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Expressions & Functions</h5>
                  <p className="text-muted small mb-0">Clean, format and calculate call data inside routing rules, webhooks and postbacks.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/custom_webhook" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-success bg-opacity-10 text-success mb-3">
                    <i className="fa-solid fa-arrows-turn-to-dots" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Custom Webhooks</h5>
                  <p className="text-muted small mb-0">Push call events to any URL as they happen, and let your systems approve a dial before it rings.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/data_export" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-primary bg-opacity-10 text-primary mb-3">
                    <i className="fa-solid fa-file-export" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Data Exports</h5>
                  <p className="text-muted small mb-0">Calls, leads and recordings to CSV, on demand or on a schedule that emails your team.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/api" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-secondary bg-opacity-10 text-secondary mb-3">
                    <i className="fa-solid fa-terminal" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">REST API</h5>
                  <p className="text-muted small mb-0">Every screen in Avortyx runs on the same REST API, with scoped, logged and IP-restricted keys.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="phone-numbers">
        <div className="container">
          <div className="mktg-section-header">
            <h3 className="fw-bold mb-1">Phone Numbers</h3>
            <p className="text-muted">Buy, port and pool numbers on any carrier, and keep them trusted so calls get answered.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <a href="/features/spam_tag_mitigation" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-warning bg-opacity-10 text-warning mb-3">
                    <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Spam Tag Mitigation</h5>
                  <p className="text-muted small mb-0">Registered numbers, branded caller ID and spam-label removal, watched carrier by carrier.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/multiple_telephone_providers" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-primary bg-opacity-10 text-primary mb-3">
                    <i className="fa-solid fa-tower-cell" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Multiple Telephone Providers</h5>
                  <p className="text-muted small mb-0">Run Twilio, Telnyx, Plivo or any SIP carrier side by side, all through one routing engine.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/sip_support" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-secondary bg-opacity-10 text-secondary mb-3">
                    <i className="fa-solid fa-network-wired" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">SIP Support</h5>
                  <p className="text-muted small mb-0">Route calls SIP-to-SIP to your own VoIP platform, with your own credentials and headers.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="security-compliance-tools">
        <div className="container">
          <div className="mktg-section-header">
            <h3 className="fw-bold mb-1">Security & Compliance Tools</h3>
            <p className="text-muted">Compliance checks run inside every routing decision, before a buyer’s phone ever rings.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <a href="/features/pii_redaction" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-danger bg-opacity-10 text-danger mb-3">
                    <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">PII Redaction</h5>
                  <p className="text-muted small mb-0">Personal data that expires on your schedule and stays hidden from users without permission.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/api_whitelist" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-secondary bg-opacity-10 text-secondary mb-3">
                    <i className="fa-solid fa-lock" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">API IP Whitelist</h5>
                  <p className="text-muted small mb-0">Keep API keys usable only from the networks you trust.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/suppression_lists" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-warning bg-opacity-10 text-warning mb-3"><i className="fa-solid fa-ban" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">Suppression & DNC</h5>
                  <p className="text-muted small mb-0">Suppression lists, blacklists, DNC checks and industry scrubbing, run before any call routes or dials.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/state_rules" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-info bg-opacity-10 text-info mb-3">
                    <i className="fa-solid fa-map-location-dot" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">State Rules</h5>
                  <p className="text-muted small mb-0">Each state’s calling hours, holiday blackouts and contact limits, enforced on every outbound dial.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/consent_opt_out" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-success bg-opacity-10 text-success mb-3">
                    <i className="fa-solid fa-file-signature" aria-hidden="true" />
                  </div>
                  <h5 className="fw-bold text-body">Consent & Opt-Out</h5>
                  <p className="text-muted small mb-0">Proof of consent on every lead, and opt-outs that take effect everywhere, with an audit trail.</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="/features/verified_identity" className="text-decoration-none">
                <div className="card features-grid-card p-4">
                  <div className="features-grid-icon bg-primary bg-opacity-10 text-primary mb-3"><i className="fa-solid fa-id-card" aria-hidden="true" /></div>
                  <h5 className="fw-bold text-body">Verified Identity & Caller ID</h5>
                  <p className="text-muted small mb-0">KYC, KYB and STIR/SHAKEN, so carriers trust your numbers and your calls connect.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section" id="optimizer">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="bg-light rounded-3 p-4">
                <h5 className="fw-bold mb-3"><i className="fa-solid fa-chart-line me-2 text-muted" aria-hidden="true" />Campaign Performance</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="fa-solid fa-bullhorn text-muted me-2" aria-hidden="true" />Impressions and calls per campaign</li>
                  <li className="mb-2"><i className="fa-solid fa-magnifying-glass text-muted me-2" aria-hidden="true" />Conversions down to the keyword</li>
                  <li className="mb-2"><i className="fa-solid fa-globe text-muted me-2" aria-hidden="true" />Attribution by page and landing page</li>
                  <li className="mb-2"><i className="fa-solid fa-clock text-muted me-2" aria-hidden="true" />Numbers that update live</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mktg-section-header">
                <h3 className="fw-bold">Call Analytics</h3>
                <p className="text-muted">See which campaigns, pages and keywords make the phone ring, and which of those calls pay. Impressions, calls and conversions for any mix of keywords, live.</p>
              </div>
              <a className="btn btn-td-green feature-modal-link" href="/features/call_tracking#reports-analytics">Explore Call Analytics</a>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <h3 className="fw-bold mb-2">Integrations</h3>
            <p className="text-muted">Carriers, trackers, CRMs, ad platforms and AI voice agents, connected.</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-4">
            <a href="/features/voice_agents/elevenlabs" className="integration-logo-card text-decoration-none" title="ElevenLabs">
              {" "}
              <img alt="ElevenLabs" className="integration-logo" loading="lazy" src="/assets/avx-site/img/elevenlabs.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/zoho_crm" className="integration-logo-card text-decoration-none" title="Zoho CRM">
              {" "}
              <img alt="Zoho CRM" className="integration-logo" loading="lazy" src="/assets/avx-site/img/zoho_crm.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/aws_s3" className="integration-logo-card text-decoration-none" title="AWS S3">
              {" "}
              <img alt="AWS S3" className="integration-logo" loading="lazy" src="/assets/avx-site/img/aws_s3.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/cake" className="integration-logo-card text-decoration-none" title="Cake">
              {" "}
              <img alt="Cake" className="integration-logo" loading="lazy" src="/assets/avx-site/img/cake.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/adwords" className="integration-logo-card text-decoration-none" title="Google Ads">
              {" "}
              <img alt="Google Ads" className="integration-logo" loading="lazy" src="/assets/avx-site/img/ga.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/hasoffers" className="integration-logo-card text-decoration-none" title="HasOffers">
              {" "}
              <img alt="HasOffers" className="integration-logo" loading="lazy" src="/assets/avx-site/img/hasoffers.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/infusionsoft" className="integration-logo-card text-decoration-none" title="Infusionsoft">
              {" "}
              <img alt="Infusionsoft" className="integration-logo" loading="lazy" src="/assets/avx-site/img/infusionsoft-blue.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/linktrust" className="integration-logo-card text-decoration-none" title="Linktrust">
              {" "}
              <img alt="Linktrust" className="integration-logo" loading="lazy" src="/assets/avx-site/img/linktrust.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/mailchimp" className="integration-logo-card text-decoration-none" title="MailChimp">
              {" "}
              <img alt="MailChimp" className="integration-logo" loading="lazy" src="/assets/avx-site/img/mailchimp.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/mailgun" className="integration-logo-card text-decoration-none" title="Mailgun">
              {" "}
              <img alt="Mailgun" className="integration-logo" loading="lazy" src="/assets/avx-site/img/mailgun.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/salesforce" className="integration-logo-card text-decoration-none" title="Salesforce">
              {" "}
              <img alt="Salesforce" className="integration-logo" loading="lazy" src="/assets/avx-site/img/salesforce.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/sendgrid" className="integration-logo-card text-decoration-none" title="Sendgrid">
              {" "}
              <img alt="Sendgrid" className="integration-logo" loading="lazy" src="/assets/avx-site/img/sendgrid.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/slack" className="integration-logo-card text-decoration-none" title="Slack">
              {" "}
              <img alt="Slack" className="integration-logo" loading="lazy" src="/assets/avx-site/img/slack.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/typeform" className="integration-logo-card text-decoration-none" title="Typeform">
              {" "}
              <img alt="Typeform" className="integration-logo" loading="lazy" src="/assets/avx-site/img/typeform.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/voluum" className="integration-logo-card text-decoration-none" title="Voluum">
              {" "}
              <img alt="Voluum" className="integration-logo" loading="lazy" src="/assets/avx-site/img/voluum.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/zapier" className="integration-logo-card text-decoration-none" title="Zapier">
              {" "}
              <img alt="Zapier" className="integration-logo" loading="lazy" src="/assets/avx-site/img/zapier.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/plivo" className="integration-logo-card text-decoration-none" title="Plivo">
              {" "}
              <img alt="Plivo" className="integration-logo" loading="lazy" src="/assets/avx-site/img/plivo.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/telnyx" className="integration-logo-card text-decoration-none" title="Telnyx">
              {" "}
              <img alt="Telnyx" className="integration-logo" loading="lazy" src="/assets/avx-site/img/telnyx.webp" />
              {" "}
            </a>
            {" "}
            <a href="/features/twilio" className="integration-logo-card text-decoration-none" title="Twilio">
              {" "}
              <img alt="Twilio" className="integration-logo" loading="lazy" src="/assets/avx-site/img/twilio.webp" />
              {" "}
            </a>
          </div>
          <a href="/features/integrations" className="btn btn-td-green">View All Integrations</a>
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
