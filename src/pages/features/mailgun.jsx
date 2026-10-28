// /features/mailgun.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Mailgun for Avortyx | Transactional Email from Your Call Flow",
  description: "Send Avortyx follow-ups through Mailgun’s delivery infrastructure, with its tracking, scheduling and validation.",
  bodyClass: "avortyx_marketing integrations_mailgun ",
  layout: "feature",
}

export default function Mailgun() {
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
          <h1 className="fw-bold mb-2">Mailgun + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Send Call Follow-Ups and Lead Confirmations Through Mailgun’s Delivery Infrastructure, Straight from Avortyx.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Deliverability for Every Follow-Up</h3>
            <p>
              Avortyx decides when a caller or lead should get an email; Mailgun makes sure it lands. Use Mailgun’s own{" "}
              <a href="https://www.mailgun.com/blog/tags-explained-gaining-useful-insights-from-email-segmentation" target="_blank" rel="noopener noreferrer">tags for A/B tests</a>
              ,{" "}
              <a href="https://www.mailgun.com/blog/tips-tricks-scheduling-email-delivery" target="_blank" rel="noopener noreferrer">scheduled delivery</a>
              {" "}and{" "}
              <a href="https://www.mailgun.com/analytics" target="_blank" rel="noopener noreferrer">analytics</a>
              {" "}on every message your call flow sends, at any volume.
            </p>
            <ul>
              <li>Mailgun’s Sending Infrastructure Behind Every Avortyx Email</li>
              <li>Inbound Routing and Storage for Replies</li>
              <li>Opens, Clicks and Bounces Tracked in Mailgun</li>
              <li>Address Validation Before a Lead Is Emailed</li>
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
