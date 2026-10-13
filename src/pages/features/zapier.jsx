// /features/zapier.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Zapier for Avortyx | Connect calls to thousands of apps",
  description: "Start Zapier workflows from Avortyx call and lead events, and send call data to the apps your team already uses, without code.",
  bodyClass: "avortyx_marketing integrations_zapier ",
  layout: "feature",
}

export default function Zapier() {
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
          <h1 className="fw-bold mb-2">Zapier + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Start Zapier workflows from Avortyx call and lead events, and connect your call data to the apps your team already uses.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Every call event, available to every app</h3>
            <p>Zapier connects Avortyx to thousands of web apps. Use an Avortyx event as the trigger and send call and lead data wherever it is useful, without writing code.</p>
            <img alt="Zapier Integration" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-site/img/integration-zapier.webp" />
            <h4>Triggers</h4>
            <p>Zapier listens for these Avortyx events and starts your workflow when they happen:</p>
            <ul>
              <li><strong>New Call</strong> — an inbound or outbound call is recorded.</li>
              <li><strong>Call Completed</strong> — a call ends, with its duration, recording URL and disposition.</li>
              <li><strong>New Lead</strong> — a lead arrives from a form, the API or a file upload.</li>
            </ul>
            <h4>Ideas to start with</h4>
            <ul>
              <li>Add each new call to a Google Sheet or CRM for reporting.</li>
              <li>Post to Slack when a high-value call finishes.</li>
              <li>Create Avortyx leads from Typeform, Gravity Forms or landing page submissions.</li>
              <li>Pass call outcomes to your email platform to drive follow-up sequences.</li>
            </ul>
            <h4>Setting it up</h4>
            <p>Connect your Avortyx account in Zapier, pick an Avortyx trigger, and choose what should happen next. Most Zaps are running in a few minutes.</p>
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
