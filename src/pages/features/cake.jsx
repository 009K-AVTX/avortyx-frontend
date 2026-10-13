// /features/cake.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "CAKE + Avortyx | Call conversions back to CAKE in real time",
  description: "Send converted Avortyx calls back to CAKE as postbacks with the original click ID and payout, so affiliates get credit for calls.",
  bodyClass: "avortyx_marketing features_custom_webhook ",
  layout: "feature",
}

export default function Cake() {
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
          <h1 className="fw-bold mb-2">CAKE + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">When a call converts, CAKE hears about it in real time, credited to the affiliate and offer that drove the click.</p>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-hashtag" aria-hidden="true" /></div>
                  <div className="flow-node-label">Click Captured</div>
                  <div className="flow-node-desc">The CAKE click ID rides in on the visit</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Scored</div>
                  <div className="flow-node-desc">Avortyx routes the call and records the outcome</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-paper-plane" aria-hidden="true" /></div>
                  <div className="flow-node-label">Postback Sent</div>
                  <div className="flow-node-desc">Converted calls post back with the click ID</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-chart-line" aria-hidden="true" /></div>
                  <div className="flow-node-label">Credited in CAKE</div>
                  <div className="flow-node-desc">The right affiliate gets the conversion</div>
                </div>
              </div>
            </div>
            <p>Affiliate traffic that ends in a phone call usually falls out of CAKE’s reporting: the click is recorded, the call is not. Avortyx closes that gap by posting each qualified call back to CAKE with the click it came from.</p>
            <ul className="text-muted">
              <li><strong>Click IDs kept with the call</strong> — dynamic number insertion and URL tokens carry the CAKE click ID from the landing page onto the call record.</li>
              <li><strong>Only qualified calls count</strong> — send the postback on a converted disposition, a minimum duration or a buyer payout, never on a ring that went nowhere.</li>
              <li><strong>Revenue included</strong> — pass the payout from the call record so CAKE reports real earnings, not just conversion counts.</li>
              <li><strong>Every attempt logged</strong> — each postback and CAKE’s response is stored on the call, so a missing conversion can be traced in seconds.</li>
            </ul>
            <h3>Pay affiliates on calls, not guesses</h3>
            <p>With phone conversions in CAKE, affiliate payouts and offer reports reflect what callers actually did. Affiliates whose traffic converts on the phone finally see it, and you can scale the ones worth scaling.</p>
            <h3>Built on Avortyx webhooks</h3>
            <p>The postback is an Avortyx <a href="/features/custom_webhook">custom webhook</a>: choose the conversion event, map the click ID and payout tokens into the URL, and Avortyx fires it the moment the call qualifies. Use <a href="/features/formulas">expressions</a> when a value needs reshaping first.</p>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/custom_webhook" className="btn btn-td-green">Custom Webhooks</a>
              {" "}
              <a href="/features/dynamic_number_insertion" className="btn btn-outline-td-green">Dynamic Number Insertion</a>
            </div>
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
