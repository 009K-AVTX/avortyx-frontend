// /features/api.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "REST API | Everything in Avortyx, Programmable | Avortyx",
  description: "Every screen in Avortyx runs on the same REST API you get: calls, leads, buyers, offers, numbers and more, with scoped, logged and IP-restricted keys.",
  bodyClass: "avortyx_marketing features_api ",
  layout: "feature",
}

export default function Api() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#tracking-attribution" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Tracking & Attribution{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Tracking & Attribution</p>
          <h1 className="fw-bold mb-2">REST API</h1>
          <p className="lead mktg-subpage-hero-subtitle">Every Screen in Avortyx Runs on the Same REST API You Get, So Anything an Operator Can Click, Your Code Can Do.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>The API Is the Product</h3>
            <p>Avortyx’s own dashboards and forms call the same endpoints you do. There is no second-class integration layer that lags behind the app: when a feature ships, it is already in the API.</p>
            <p className="text-muted">Work with calls, leads, buyers, offers, schedules, numbers, recordings, suppression lists and more through a RESTful interface that returns JSON.</p>
            <h3>Two Kinds of Token</h3>
            <ul>
              <li>
                <strong>Company Access Tokens</strong>
                {" "}— a public and private key pair for one company, using basic authentication. Every pair has its own{" "}
                <strong>permissions</strong>
                , so a reporting job can read calls without being able to touch buyers.
              </li>
              <li>
                <strong>Developer Access Tokens</strong>
                {" "}— a token tied to a person, carrying that user’s permissions across every company they can access. Useful for internal tools that work across accounts.
              </li>
            </ul>
            <h3>Least Privilege, by Default</h3>
            <p>Give each key only what it needs, or full access when it really needs it. Tokens can be limited to a single agent (collaborator) and paused in an instant without being deleted.</p>
            <h3>Restricted and Recorded</h3>
            <p>Every key is protected and every use is visible:</p>
            <ul>
              <li>
                <strong>IP Whitelists</strong>
                {" "}— keep a token usable only from addresses you approve (see{" "}
                <a href="/features/api_whitelist">API IP Whitelist</a>
                ).
              </li>
              <li><strong>Encrypted Keys</strong> — private keys and developer tokens are encrypted at rest, never kept in plain text.</li>
              <li>
                <strong>Locked Lead Posting</strong>
                {" "}— require a valid token on lead-post endpoints too, so nobody can push leads in without credentials.
              </li>
              <li>
                <strong>Security Logs</strong>
                {" "}— each API session is logged with its IP address, country, ISP and network (ASN), and refused attempts from blocked IPs are recorded too.
              </li>
            </ul>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/request-access" className="btn btn-td-green" title="Request API Access from Avortyx"><Bolt />Request API Access</a>
              {" "}
              <a href="/features/api_whitelist" className="btn btn-outline-td-green">API IP Whitelist</a>
              {" "}
              <a href="/features/custom_webhook" className="btn btn-outline-td-green">Custom Webhooks</a>
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
