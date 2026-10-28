// /features/typeform.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Typeform for Avortyx | Turn Form Answers into Live Calls",
  description: "Every completed Typeform becomes an Avortyx lead, and lead-to-call automation can have the caller on the phone within minutes.",
  bodyClass: "avortyx_marketing integrations_typeform ",
  layout: "feature",
}

export default function Typeform() {
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
          <h1 className="fw-bold mb-2">Typeform + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Every Completed Typeform Becomes an Avortyx Lead, Ready to Be Called, Scored and Routed While the Prospect Is Still Interested.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>From Form Answer to Phone Call</h3>
            <p>A finished form is the warmest a lead will ever be. Avortyx picks it up the moment it is submitted, with the answers attached, and can start the conversation right away.</p>
            <ul>
              <li>Completed forms arrive in Avortyx as leads automatically, answers included</li>
              <li>Place the First Call with <a href="/features/lead_automation">Lead-to-Call Automation</a></li>
              <li>Reach people within minutes of submitting, while they still remember why</li>
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
