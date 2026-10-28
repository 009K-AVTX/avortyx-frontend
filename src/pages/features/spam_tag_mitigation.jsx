// /features/spam_tag_mitigation.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Spam Tag Mitigation | Get Your Calls Answered Again | Avortyx",
  description: "Avortyx registers your numbers with carriers, adds branded caller ID and works to clear \"Spam Likely\" labels, with number health tracked per carrier.",
  bodyClass: "avortyx_marketing features_spam_tag_mitigation ",
  layout: "feature",
}

export default function SpamTagMitigation() {
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
          <h1 className="fw-bold mb-2">Spam Tag Mitigation</h1>
          <p className="lead mktg-subpage-hero-subtitle">Registered Numbers, Branded Caller ID and Spam-Label Removal, So the People You Call See Who You Are and Pick Up.</p>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-building-circle-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Verify the Business</div>
                  <div className="flow-node-desc">A one-time verified profile</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-toggle-on" aria-hidden="true" /></div>
                  <div className="flow-node-label">Turn It On</div>
                  <div className="flow-node-desc">Choose the numbers to protect</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-heart-pulse" aria-hidden="true" /></div>
                  <div className="flow-node-label">Watch Number Health</div>
                  <div className="flow-node-desc">Spam status per carrier, over time</div>
                </div>
              </div>
            </div>
            <h3>Answered Calls Start with a Clean Number</h3>
            <p>
              Carriers filter inbound and outbound calls for spam, and the businesses that keep getting through are the registered ones. Avortyx registers your numbers with the carriers and the analytics companies behind spam labeling, backed by your{" "}
              <a href="/features/verified_identity">verified business identity</a>
              {" "}(EIN and legal business name).
            </p>
            <h3>Branded Caller ID</h3>
            <p>Give each local or toll-free number a Branded Name, and the phone shows who is calling instead of an unknown number. Nothing moves answer rates more.</p>
            <p className="text-muted mb-1">
              <strong>Your Name on the Screen.</strong>
              {" "}A branded, verified caller ID in place of "Scam Likely".
            </p>
            <img alt={"Branded, verified caller ID instead of a \"Scam Likely\" label"} className="img-fluid rounded border mb-4" src="/assets/avx-shots/mitigation-2.webp?v=2" width="1927" height="1481" srcSet="/assets/avx-shots/mitigation-2-1000.webp?v=2 1000w, /assets/avx-shots/mitigation-2.webp?v=2 1927w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <h3>Labels Removed, and Kept Off</h3>
            <p>A "Spam Likely" tag quietly cuts your contact rate. Avortyx works to clear existing labels and keep your numbers clean going forward.</p>
            <h3>Number Health, per Carrier</h3>
            <p>See your overall spam rate, which numbers are flagged, and how T-Mobile, AT&T and Verizon each label your lines, so a problem is caught while it is still small.</p>
            <p className="text-muted mb-1">
              <strong>Catch It Early.</strong>
              {" "}Number health with spam flags broken out by carrier.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/mitigation-1.webp">
              <img alt="Spam Tag Mitigation number-health dashboard with per-carrier spam flags" className="img-fluid rounded border mb-4" src="/assets/avx-shots/mitigation-1.webp" width="2000" height="954" srcSet="/assets/avx-shots/mitigation-1-1000.webp 1000w, /assets/avx-shots/mitigation-1.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>Pricing in Two Parts</h3>
            <p>
              Both are listed on the{" "}
              <a href="/pricing">pricing page</a>
              : a{" "}
              <strong>monthly fee for each protected number</strong>
              , and a small{" "}
              <strong>fee per branded call</strong>
              {" "}when a Branded Name is set. Without branding, there is no per-call charge.
            </p>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/verified_identity" className="btn btn-td-green">Verified Identity & Caller ID</a>
              {" "}
              <a href="/features/inbound_call_routing" className="btn btn-outline-td-green">Inbound Call Routing</a>
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
