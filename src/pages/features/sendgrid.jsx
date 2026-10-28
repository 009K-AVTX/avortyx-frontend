// /features/sendgrid.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "SendGrid for Avortyx | Email Follow-Up from Every Call",
  description: "Hand Avortyx leads and call outcomes to SendGrid lists and sequences, so every caller who did not convert still gets the right email.",
  bodyClass: "avortyx_marketing integrations_sendgrid ",
  layout: "feature",
}

export default function Sendgrid() {
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
          <h1 className="fw-bold mb-2">SendGrid + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Hand Leads and Call Outcomes to SendGrid, So a Caller Who Did Not Convert on the Phone Still Gets the Right Email.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Email That Follows the Call</h3>
            <p>Avortyx knows how every call ended: connected, qualified, converted or missed. The SendGrid connection turns that outcome into the next email, without anyone exporting a list or writing code.</p>
            <ul>
              <li>Add a lead to SendGrid the moment it arrives in Avortyx</li>
              <li>Place callers on a different list depending on how their call ended</li>
              <li>Drop leads into an email sequence that picks up where the call left off</li>
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
