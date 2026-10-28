// /features/hasoffers.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "HasOffers (TUNE) + Avortyx | Phone Conversions on the Right Offer",
  description: "Record Avortyx call conversions in HasOffers (TUNE) against the right offer and affiliate, using the transaction from the original click.",
  bodyClass: "avortyx_marketing features_custom_webhook ",
  layout: "feature",
}

export default function Hasoffers() {
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
          <h1 className="fw-bold mb-2">HasOffers + Avortyx</h1>
          <p className="lead mktg-subpage-hero-subtitle">Record Phone-Call Conversions in HasOffers (TUNE) Against the Offer and Affiliate That Earned Them.</p>
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
                  <div className="flow-node-desc">The HasOffers click ID rides in on the visit</div>
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
                  <div className="flow-node-label">Credited in HasOffers</div>
                  <div className="flow-node-desc">The right offer and affiliate gets the conversion</div>
                </div>
              </div>
            </div>
            <p>HasOffers tracks the click and the offer; Avortyx knows what happened on the phone afterward. Connecting the two means a call that converts is recorded in HasOffers just like an online conversion, tied to the same transaction.</p>
            <ul className="text-muted">
              <li><strong>Click IDs Kept with the Call</strong> — dynamic number insertion and URL tokens carry the HasOffers click ID from the landing page onto the call record.</li>
              <li><strong>Only Qualified Calls Count</strong> — send the postback on a converted disposition, a minimum duration or a buyer payout, never on a ring that went nowhere.</li>
              <li><strong>Revenue Included</strong> — pass the payout from the call record so HasOffers reports real earnings, not just conversion counts.</li>
              <li><strong>Every Attempt Logged</strong> — each postback and HasOffers’s response is stored on the call, so a missing conversion can be traced in seconds.</li>
            </ul>
            <h3>Offer Reports That Include the Phone</h3>
            <p>Calls often convert at a higher value than forms. With them in HasOffers, offer-level reports, affiliate payouts and caps all work from complete numbers instead of the online half.</p>
            <h3>Built on Avortyx Webhooks</h3>
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
