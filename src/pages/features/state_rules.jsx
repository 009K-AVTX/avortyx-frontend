// /features/state_rules.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "State Rules | Calling Hours and Limits by State | Avortyx",
  description: "Avortyx enforces each state’s calling hours, holiday blackouts and contact limits on every outbound dial, and reschedules calls that would break them.",
  bodyClass: "avortyx_marketing features_state_rules ",
  layout: "feature",
}

export default function StateRules() {
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
          <h1 className="fw-bold mb-2">State Rules</h1>
          <p className="lead mktg-subpage-hero-subtitle">Each State’s Calling Hours, Holiday Blackouts and Contact Limits, Checked on Every Outbound Dial Before It Happens.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p>Right before Avortyx places an outbound call, it looks up the lead’s state and checks it against your active rules. A call that would break one is not dropped: it is held and rescheduled for the next moment it is allowed.</p>
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <div className="card p-3 h-100">
                  <h5 className="fw-bold"><i className="fa-solid fa-clock me-2 text-muted" aria-hidden="true" />Calling Hours</h5>
                  <p className="text-muted small mb-0">A calling window for each day in each state, measured in the lead’s own time zone.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 h-100">
                  <h5 className="fw-bold"><i className="fa-solid fa-gauge-high me-2 text-muted" aria-hidden="true" />Contact Limits</h5>
                  <p className="text-muted small mb-0">The most calls and texts, combined, one number may receive within a rolling window.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 h-100">
                  <h5 className="fw-bold"><i className="fa-solid fa-calendar-xmark me-2 text-muted" aria-hidden="true" />Holiday Blackouts</h5>
                  <p className="text-muted small mb-0">No outbound calls to leads in chosen states on the dates you mark.</p>
                </div>
              </div>
            </div>
            <p className="text-muted">
              Combine hours, limits and holidays into a named{" "}
              <strong>Rule Group</strong>
              , then apply it to the whole account or only to certain offers. Our team can help you set up the groups your program needs.
            </p>
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
              <a href="/features/consent_opt_out" className="btn btn-td-green">Consent & Opt-Out</a>
              {" "}
              <a href="/features/suppression_lists" className="btn btn-outline-td-green">Suppression & DNC</a>
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
