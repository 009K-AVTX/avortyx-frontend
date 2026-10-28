// /features/consent_opt_out.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Consent & Opt-Out | Proof of Consent and Automatic Opt-Outs | Avortyx",
  description: "Avortyx stores verifiable consent with each lead, can block calls that lack it, and honors opt-out keywords automatically with an immutable log.",
  bodyClass: "avortyx_marketing features_consent_opt_out ",
  layout: "feature",
}

export default function ConsentOptOut() {
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
          <h1 className="fw-bold mb-2">Consent & Opt-Out</h1>
          <p className="lead mktg-subpage-hero-subtitle">Keep Proof of Consent with Every Lead, and Let Opt-Outs Take Effect Everywhere the Moment They Arrive.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
            {" "}
            <a href="/request-access" className="btn btn-outline-td-green"><Bolt />Request Access</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Proof of Consent on the Call</h3>
            <p>
              Avortyx attaches a verifiable consent record to the lead. It captures{" "}
              <strong>Jornaya LeadiD</strong>
              {" "}certificates on each call and can check delivery against{" "}
              <strong>Jornaya TCPA Guardian</strong>
              , so a lead that does not meet the TCPA requirements you set is never connected to a buyer.
            </p>
            <h3>Opt-Outs That Stick</h3>
            <p>
              Replies such as{" "}
              <strong>STOP, unsubscribe or cancel</strong>
              {" "}are recognized automatically: the contact is opted out and an immutable record is written. The opt-out carries over to matching leads, and you can also apply one by hand or from a schedule.
            </p>
            <h3>An Audit Trail You Can Hand Over</h3>
            <p>
              Opt-outs, contact blocks, DNC checks, change history and signed attestations are all logged and cannot be altered.{" "}
              <a href="/features/data_export">Data Exports</a>
              {" "}copy them to your own systems on a schedule, ready when an auditor asks.
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
              <a href="/features/state_rules" className="btn btn-td-green">State Rules</a>
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
