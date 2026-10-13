// /features/salesforce.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Salesforce for Avortyx | Call data where your sales team works",
  description: "Put Avortyx call activity, attribution and recordings into Salesforce, so reps know where a lead came from and how the call went.",
  bodyClass: "avortyx_marketing integrations_salesforce ",
  layout: "feature",
}

export default function Salesforce() {
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
          <h1 className="fw-bold mb-2">Salesforce + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Put call activity, attribution and recordings into Salesforce, so reps know where every lead came from and how the call went.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>The call record, on the Salesforce record</h3>
            <p>Avortyx already knows the source, campaign and keyword behind each call, how long it lasted and what the caller said. Sending that into Salesforce gives your sales team the full story on the lead they are about to work.</p>
            <ul>
              <li>Play call recordings from Salesforce</li>
              <li>See the source and campaign that produced each lead</li>
              <li>Prioritize leads using how their calls actually went</li>
              <li>Report on call activity alongside the rest of your pipeline</li>
            </ul>
            <p>With calls and CRM data in one place, marketing can see which sources turn into closed deals, and sales spends its time on the leads most likely to close.</p>
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
