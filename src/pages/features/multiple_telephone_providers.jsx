// /features/multiple_telephone_providers.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Multiple Telephone Providers | Bring your own carrier | Avortyx",
  description: "Run Avortyx on Twilio, Plivo, Telnyx or any SIP carrier, and manage every number from every provider in one place.",
  bodyClass: "avortyx_marketing features_multiple_telephone_providers ",
  layout: "feature",
}

export default function MultipleTelephoneProviders() {
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
          <h1 className="fw-bold mb-2">Multiple Telephone Providers</h1>
          <p className="lead mktg-subpage-hero-subtitle">Keep the carriers you trust, add more for redundancy, and run them all through one routing engine.</p>
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
                  <div className="flow-node-label">Link Carriers</div>
                  <div className="flow-node-desc">Twilio, Plivo, Telnyx or SIP</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-file-import" aria-hidden="true" /></div>
                  <div className="flow-node-label">Import Numbers</div>
                  <div className="flow-node-desc">Bring what you own in one click</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-cart-shopping" aria-hidden="true" /></div>
                  <div className="flow-node-label">Buy Numbers</div>
                  <div className="flow-node-desc">From any connected provider</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Calls & Texts</div>
                  <div className="flow-node-desc">Every number, one routing engine</div>
                </div>
              </div>
            </div>
            <p>Avortyx does not lock you into a phone carrier. Connect Twilio, Plivo or Telnyx with your own accounts, or route your existing carrier in over SIP, and every number gets the same scoring, screening and routing on the first ring.</p>
            <p>Running more than one carrier also means a problem at one provider does not take your campaigns down with it. These are the providers Avortyx connects to today:</p>
            <p className="text-muted mb-1">
              <strong>Supported carriers.</strong>
              {" "}Link an existing account, or bring your own carrier over SIP-IN.
            </p>
            <div className="d-flex flex-wrap gap-4 align-items-center my-3">
              <img alt="Plivo" className="voip-provider-logo" src="/assets/avx-site/img/plivo.webp" />
              {" "}
              <img alt="Telnyx" className="voip-provider-logo" src="/assets/avx-site/img/telnyx.webp" />
              {" "}
              <img alt="Twilio" className="voip-provider-logo" src="/assets/avx-site/img/twilio.webp" />
              {" "}
              <img alt="Zadarma" className="voip-provider-logo" src="/assets/avx-site/img/zadarma.webp" />
              {" "}
              <img alt="Sonetel" className="voip-provider-logo" src="/assets/avx-site/img/sonetel.webp" />
              {" "}
              <img alt="Onsip" className="voip-provider-logo" src="/assets/avx-site/img/onsip.webp" />
              {" "}
              <img alt="Avoxi" className="voip-provider-logo" src="/assets/avx-site/img/avoxi.webp" />
            </div>
            <h2 className="mt-5 mb-4">Plivo, Twilio and Telnyx, fully managed</h2>
            <p>These three carriers are connected through their APIs, so Avortyx can manage them end to end:</p>
            <ul className="text-muted">
              <li>
                <strong>Link your accounts</strong>
                {" "}— enter your API credentials once; Avortyx stores them securely and handles numbers, calls and SMS from one workspace.
              </li>
              <li>
                <strong>Import your numbers</strong>
                {" "}— one click, and they are ready to attach to offers, traffic sources and number pools.
              </li>
              <li>
                <strong>Buy new numbers</strong>
                {" "}— search any connected carrier by country, area code and type (local or toll-free).
              </li>
              <li>
                <strong>Send and receive SMS</strong>
                {" "}— outbound and inbound texts plus automated SMS flows, with delivery tracked across every carrier.
              </li>
            </ul>
            <h3>One number inventory</h3>
            <p>Every number (DID) from every carrier lives in one list in Avortyx. Buy, assign and release them through the same steps, and attach them to an offer, a traffic source or a number pool wherever they came from.</p>
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
