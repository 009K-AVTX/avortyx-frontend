// /features/infusionsoft.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Infusionsoft (Keap) for Avortyx | Calls and texts on every contact",
  description: "Avortyx writes calls, texts and emails to Infusionsoft contacts as notes, and lead schedules can send email or start Infusionsoft campaigns.",
  bodyClass: "avortyx_marketing integrations_infusionsoft ",
  layout: "feature",
}

export default function Infusionsoft() {
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
          <h1 className="fw-bold mb-2">Infusionsoft + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">See every call, text and email from Avortyx on the Infusionsoft contact it belongs to.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Your call history, inside the CRM</h3>
            <p>Avortyx logs each call, SMS and email against the matching Infusionsoft contact as a note, so the people working the CRM see the whole conversation without switching tools.</p>
            <ul>
              <li>Avortyx leads sync to Infusionsoft as contacts</li>
              <li>Calls, texts and emails, sent or received, become notes on the contact</li>
              <li>Send an Infusionsoft email as a step in an Avortyx <a href="/features/lead_automation">schedule</a></li>
              <li>
                Add a lead to an Infusionsoft campaign from a{" "}
                <a href="/features/lead_automation">schedule</a>
                {" "}step, too
              </li>
            </ul>
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
