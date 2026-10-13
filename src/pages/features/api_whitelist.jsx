// /features/api_whitelist.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "API IP Whitelist | Keep your API keys on your network | Avortyx",
  description: "Limit the Avortyx API to IP addresses you trust, for the whole company, a shared token or each developer token.",
  bodyClass: "avortyx_marketing features_api_whitelist ",
  layout: "feature",
}

export default function ApiWhitelist() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#security-compliance-tools" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Security & Compliance Tools{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Security & Compliance Tools</p>
          <h1 className="fw-bold mb-2">API IP Whitelist</h1>
          <p className="lead mktg-subpage-hero-subtitle">A leaked key is useless off your network: limit API access to the IP addresses you trust.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">How It Works</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-list-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">List Trusted IPs</div>
                  <div className="flow-node-desc">For the company or a single token</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-toggle-on" aria-hidden="true" /></div>
                  <div className="flow-node-label">Switch It On</div>
                  <div className="flow-node-desc">Lists do nothing until you enforce them</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-shield-halved" aria-hidden="true" /></div>
                  <div className="flow-node-label">Every Call Checked</div>
                  <div className="flow-node-desc">Each request’s source IP is compared</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-circle-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">In or Out</div>
                  <div className="flow-node-desc">Unknown addresses are refused at the door</div>
                </div>
              </div>
            </div>
            <p>Decide which networks may talk to your Avortyx account. Add the IP addresses you trust, and requests from anywhere else are turned away before they reach any data.</p>
            <ul className="text-muted">
              <li><strong>Whole company</strong> — keep all API access on your organization’s own network, set in your preferences.</li>
              <li><strong>Company access token</strong> — give a shared integration its own allow-list.</li>
              <li>
                <strong>Developer access token</strong>
                {" "}— a separate allow-list per developer token, for tight control over each integration.
              </li>
            </ul>
            <div className="bg-light border-start border-success border-4 rounded-3 p-4 small text-muted mb-4" style={{ marginTop: "60px" }}>
              <p><strong>Please read: compliance is shared</strong></p>
              <p>
                Avortyx gives you the controls to run a compliant calling and messaging program, but using them does not make a program compliant on its own. You remain{" "}
                <strong>responsible</strong>
                {" "}for how they are configured and for meeting the Telephone Consumer Protection Act (TCPA), the FTC Telemarketing Sales Rule (TSR), FCC regulations and every other federal and state law on telemarketing and consumer privacy that applies to you.
              </p>
              <p>
                Avortyx routes calls in real time; it is{" "}
                <strong>not</strong>
                {" "}an archive. Recordings, transcripts, call logs and consent records should be exported to your own storage, including before any automatic PII redaction runs, so you can meet your record-keeping duties. Avortyx is not liable for data kept only on the platform that is later deleted, redacted or unavailable.
              </p>
              <p className="mb-0">
                <strong>Nothing here is legal advice.</strong>
                <a target="_blank" href="/terms_of_service">See the Terms of Service</a>
                {" "}for the full terms on compliance and data retention.
              </p>
            </div>
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
