// /features/slack.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Slack for Avortyx | Live Call and Lead Alerts in Your Channels",
  description: "Post Avortyx calls, texts and form submissions to Slack in real time, filtered by call type, tag and tracking number.",
  bodyClass: "avortyx_marketing integrations_slack ",
  layout: "feature",
}

export default function Slack() {
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
          <h1 className="fw-bold mb-2">Slack + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Post Calls, Texts and New Form Submissions to the Slack Channels Where Your Team Already Talks.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Know About the Call While It Still Matters</h3>
            <p><b>Why Slack?</b></p>
            <p>Your team already lives in Slack. Rather than asking them to watch another dashboard, Avortyx brings the moments that need a person straight into the channels they read.</p>
            <p>The integration sends call, SMS and form submission events from Avortyx to Slack as they happen.</p>
            <img alt="Slack Integration" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-site/img/integration-slack.webp" />
            <h3>What Your Team Gets</h3>
            <ul>
              <li>A live alert for every call and text, so nothing is missed</li>
              <li>New form submissions routed to the people who follow them up</li>
              <li>Filters by call type, tag and tracking number, so each channel only sees what it needs</li>
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
