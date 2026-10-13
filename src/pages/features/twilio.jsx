// /features/twilio.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Twilio + Avortyx | Route your Twilio numbers on the first ring",
  description: "Link your Twilio account to Avortyx, import or buy Twilio numbers, and route every call through Avortyx scoring, screening and buyer selection.",
  bodyClass: "avortyx_marketing features_multiple_telephone_providers ",
  layout: "feature",
}

export default function Twilio() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#phone-numbers" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Phone Numbers{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Phone Numbers</p>
          <h1 className="fw-bold mb-2">Twilio + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Keep your Twilio account and numbers, and let Avortyx score, screen and route every call they receive.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">How It Works</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-link" aria-hidden="true" /></div>
                  <div className="flow-node-label">Link Twilio</div>
                  <div className="flow-node-desc">Add your Twilio API credentials</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-file-import" aria-hidden="true" /></div>
                  <div className="flow-node-label">Import Numbers</div>
                  <div className="flow-node-desc">Existing Twilio numbers in one click</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-cart-shopping" aria-hidden="true" /></div>
                  <div className="flow-node-label">Buy More</div>
                  <div className="flow-node-desc">Search Twilio inventory by area code</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-route" aria-hidden="true" /></div>
                  <div className="flow-node-label">Route on Avortyx</div>
                  <div className="flow-node-desc">Scored, screened and sent to buyers</div>
                </div>
              </div>
            </div>
            <p>Many networks already run on Twilio. Linking it to Avortyx keeps those numbers, that account and that billing exactly where they are, while every call they receive is scored for intent, screened for compliance and sent to the right buyer before it finishes ringing.</p>
            <p className="text-muted mb-1">
              <strong>Your carrier, our routing engine.</strong>
              {" "}Twilio keeps carrying the minutes; Avortyx decides where every call goes.
            </p>
            <div className="d-flex flex-wrap gap-4 align-items-center my-3">
              <img alt="Twilio" className="voip-provider-logo" src="/assets/avx-site/img/twilio.webp" />
            </div>
            <h2 className="mt-5 mb-4">What you can do with Twilio on Avortyx</h2>
            <p>Once the account is linked, your Twilio numbers behave like any other Avortyx number:</p>
            <ul className="text-muted">
              <li>
                <strong>Keep your account</strong>
                {" "}— Avortyx stores your Twilio keys securely and manages numbers, calls and SMS through them.
              </li>
              <li>
                <strong>Import what you own</strong>
                {" "}— existing numbers come over in one click, ready to attach to offers, traffic sources and number pools.
              </li>
              <li>
                <strong>Buy from inside Avortyx</strong>
                {" "}— search Twilio inventory by country, area code and type (local or toll-free) without opening their console.
              </li>
              <li>
                <strong>Text as well as talk</strong>
                {" "}— send and receive SMS and run automated SMS flows, with delivery tracked on the lead.
              </li>
            </ul>
            <h3>No migration project</h3>
            <p>There is nothing to port and nothing to rebuild: link the account, import the numbers you want Avortyx to route, and attach them to a campaign. You can move numbers over one campaign at a time.</p>
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
