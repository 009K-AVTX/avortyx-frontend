// /features/sip_support.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "SIP Support | Route calls over your own VoIP | Avortyx",
  description: "Connect your own VoIP platform to Avortyx over SIP, with custom credentials and headers, and route calls SIP-to-SIP.",
  bodyClass: "avortyx_marketing features_sip_support ",
  layout: "feature",
}

export default function SipSupport() {
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
          <h1 className="fw-bold mb-2">SIP Support</h1>
          <p className="lead mktg-subpage-hero-subtitle">Bring your own VoIP platform: connect over SIP with your own credentials and headers.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p>Avortyx speaks SIP natively, so calls can be routed straight to the VoIP infrastructure you already run, secured with your own credentials and shaped with custom headers.</p>
            <ul className="text-muted">
              <li>
                <strong>Your credentials</strong>
                {" "}— register with a SIP username (a valid SIP address such as{" "}
                <code>user@domain.com</code>
                ) and a password.
              </li>
              <li>
                <strong>Custom headers</strong>
                {" "}— add as many SIP headers as you need, to switch provider features on or meet a carrier’s requirements.
              </li>
              <li><strong>Your platform</strong> — send calls SIP-to-SIP to whichever VoIP provider you prefer.</li>
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
