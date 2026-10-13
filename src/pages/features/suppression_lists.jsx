// /features/suppression_lists.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Suppression & DNC | Do-not-contact checks before every call | Avortyx",
  description: "Suppression lists, a company-wide blacklist, DNC checks and industry list scrubbing run on every call before Avortyx routes or dials it.",
  bodyClass: "avortyx_marketing features_suppression_lists ",
  layout: "feature",
}

export default function SuppressionLists() {
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
          <h1 className="fw-bold mb-2">Suppression & DNC</h1>
          <p className="lead mktg-subpage-hero-subtitle">Suppression lists, blacklists, DNC checks and industry scrubbing, all run before a call is routed or dialed.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p>Do-not-contact checks are part of Avortyx’s routing decision, not an add-on after it. Before a call is forwarded or dialed, Avortyx checks it against suppression lists for the buyer, offer and schedule, your company blacklist, DNC data and live industry services.</p>
            <p>
              Outbound numbers are checked against do-not-call and blacklist data before they dial, and the checks{" "}
              <strong>fail closed</strong>
              : if a lookup cannot finish, the number is treated as blocked.
            </p>
            <ul className="text-muted">
              <li>
                <strong>Suppression lists</strong>
                {" "}— attach numbers, uploaded by CSV or the API, to a buyer, offer or schedule; matches are skipped before routing or dialing.
              </li>
              <li>
                <strong>Blacklist</strong>
                {" "}— block a number across the whole account, whatever buyer or offer it would reach.
              </li>
              <li>
                <strong>DNC checks</strong>
                {" "}— look up caller numbers in Do-Not-Call data before routing or outbound dialing.
              </li>
              <li>
                <strong>TCPA Shield & Blacklist Alliance</strong>
                {" "}— leads flagged on these shared industry lists are skipped automatically, in real time.
              </li>
              <li>
                <strong>Mobile and Florida options</strong>
                {" "}— leave mobile numbers out, or apply Florida’s tighter daily attempt limits and shorter calling window to a schedule.
              </li>
            </ul>
            <h3>Contact caps and pacing</h3>
            <p>Account-wide limits stop any one person being contacted too often: daily and monthly outbound call caps per contact, plus short-call caps by day, week and month. Calls past those limits are suppressed automatically.</p>
            <p className="text-muted">The difference between the two lists: a blacklist blocks a number everywhere in your account, while a suppression list blocks it only for the buyers, offers or schedules it is attached to. Most programs use both.</p>
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
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/pii_redaction" className="btn btn-td-green">PII Redaction</a>
              {" "}
              <a href="/features/state_rules" className="btn btn-outline-td-green">State Rules</a>
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
