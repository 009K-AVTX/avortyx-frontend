// /features/pii_redaction.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "PII Redaction | Personal Data That Expires on Schedule | Avortyx",
  description: "Avortyx clears or hashes personal data once records age past your retention window, hides sensitive fields from users without permission, and redacts transcripts.",
  bodyClass: "avortyx_marketing features_pii_redaction ",
  layout: "feature",
}

export default function PiiRedaction() {
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
          <h1 className="fw-bold mb-2">PII Redaction</h1>
          <p className="lead mktg-subpage-hero-subtitle">Personal Data That Expires on Your Schedule, Stays Hidden from People Who Should Not See It, and Never Lands in a Transcript.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">How Auto-Redaction Works</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-clock" aria-hidden="true" /></div>
                  <div className="flow-node-label">Records Age</div>
                  <div className="flow-node-desc">Calls and archived leads pass your window</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-eraser" aria-hidden="true" /></div>
                  <div className="flow-node-label">PII Removed</div>
                  <div className="flow-node-desc">Chosen fields are cleared or hashed</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-chart-line" aria-hidden="true" /></div>
                  <div className="flow-node-label">Reports Still Work</div>
                  <div className="flow-node-desc">Timestamps, offers and numbers stay</div>
                </div>
              </div>
            </div>
            <h3>Automatic Redaction of Aged Data</h3>
            <p>Personal details such as names, emails and addresses are only useful for so long. Once calls and archived leads pass your retention period, Avortyx clears or hashes their PII fields and leaves everything else, including timestamps, offer IDs and phone numbers, so reporting carries on unchanged.</p>
            <ul className="text-muted">
              <li>
                <strong>Your Window</strong>
                {" "}— keep PII anywhere from 30 days to 7 years; 90 days unless you change it.
              </li>
              <li>
                <strong>Clear or Hash</strong>
                {" "}—{" "}
                <strong>Nullify</strong>
                {" "}swaps values for placeholders;{" "}
                <strong>Hash</strong>
                {" "}keeps a one-way fingerprint (so "John Smith" becomes something like "r1b2c3d4...") that still links matching records.
              </li>
              <li>
                <strong>Field by Field</strong>
                {" "}— pick exactly what is redacted: names, emails, addresses, dates of birth, IP addresses, visitor cookies and more.
              </li>
            </ul>
            <h3>Who Can See PII</h3>
            <p>Turn on PII access control and sensitive fields such as phone numbers are masked in the app for anyone without the PII permission. Grant the permission, and the full values appear.</p>
            <h3>Transcripts Without the Sensitive Parts</h3>
            <p>
              Personal data is taken out of{" "}
              <a href="/features/transcriptions">call transcripts</a>
              {" "}before they are saved. Each category of PII is switched on separately, per offer, alongside the other AI settings.
            </p>
            <h3>Protected End to End</h3>
            <ul className="text-muted">
              <li><strong>Encrypted at Rest</strong> — sensitive legal-identity fields are stored encrypted.</li>
              <li>
                <strong>Recordings Expire Too</strong>
                {" "}—{" "}
                <a href="/features/call_recordings">recording retention rules</a>
                {" "}remove older audio automatically.
              </li>
              <li>
                <strong>Consent and Opt-Outs</strong>
                {" "}— combine redaction with{" "}
                <a href="/features/consent_opt_out">consent and opt-out tools</a>
                {" "}and{" "}
                <a href="/features/suppression_lists">suppression and DNC lists</a>
                {" "}for complete coverage.
              </li>
              <li>
                <strong>Exports Follow the Rules</strong>
                {" "}—{" "}
                <a href="/features/data_export">data exports</a>
                {" "}apply the same PII permissions, so masked data stays masked.
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
                <strong>Nothing Here Is Legal Advice.</strong>
                <a target="_blank" href="/terms_of_service">See the Terms of Service</a>
                {" "}for the full terms on compliance and data retention.
              </p>
            </div>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/suppression_lists" className="btn btn-td-green">Suppression & DNC</a>
              {" "}
              <a href="/features/call_tracking" className="btn btn-outline-td-green">Call Tracking</a>
            </div>
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to Route Your First Call?</h2>
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
