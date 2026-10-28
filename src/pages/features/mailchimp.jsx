// /features/mailchimp.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Mailchimp for Avortyx | Call-Triggered Email Campaigns",
  description: "Send Mailchimp campaigns from Avortyx call events and lead schedules, with the audience chosen per campaign.",
  bodyClass: "avortyx_marketing integrations_mailchimp ",
  layout: "feature",
}

export default function Mailchimp() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features/integrations" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Integrations{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Integrations</p>
          <h1 className="fw-bold mb-2">Mailchimp + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Let Phone Activity Trigger Mailchimp Emails: A Missed Call, a Qualified Caller, a Lead Still Waiting for a Callback.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Let Call Outcomes Write the Email List</h3>
            <p>Connect Mailchimp once, then let Avortyx decide who hears from you next. No exports, no copy-pasting audiences, no code.</p>
            <ul>
              <li>Send your branded Mailchimp emails to leads tracked in Avortyx</li>
              <li>Pick the Mailchimp audience each Avortyx campaign sends to</li>
              <li>Fire emails from call events, or from steps in a <a href="/features/lead_automation">lead schedule</a></li>
            </ul>
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
