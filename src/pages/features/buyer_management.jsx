// /features/buyer_management.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Buyer Management | Who gets each call, and when | Avortyx",
  description: "Avortyx filters every buyer by tokens, hours, caps and suppression on each call, then ranks them by tier, revenue or EPC to pick the winner on the first ring.",
  bodyClass: "avortyx_marketing features_buyer_management ",
  layout: "feature",
}

export default function BuyerManagement() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#call-management" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Call Management{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Call Management</p>
          <h1 className="fw-bold mb-2">Buyer Management</h1>
          <p className="lead mktg-subpage-hero-subtitle">Buyers are where your calls go: call centers, agents and SIP endpoints. Avortyx decides which one gets each call, when they can take it and how much they handle.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">How a Buyer Is Chosen</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Arrives</div>
                  <div className="flow-node-desc">Every buyer on the router is considered</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-filter" aria-hidden="true" /></div>
                  <div className="flow-node-label">Filter</div>
                  <div className="flow-node-desc">Tokens, hours, caps, suppression</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-layer-group" aria-hidden="true" /></div>
                  <div className="flow-node-label">Rank</div>
                  <div className="flow-node-desc">Tier, weight, revenue or EPC</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Connect</div>
                  <div className="flow-node-desc">The top buyer takes the call</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-dollar-sign" aria-hidden="true" /></div>
                  <div className="flow-node-label">Settle</div>
                  <div className="flow-node-desc">A duration threshold books the revenue</div>
                </div>
              </div>
            </div>
            <p>Each call starts with every buyer on its router. Avortyx removes the ones that cannot take it, by token match, business hours, caps and suppression lists, ranks the rest with the method you choose, and connects the winner while the phone is still ringing. Duration, conversion and payout are written to the call automatically.</p>
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <div className="card p-4 h-100 border-success border-opacity-50">
                  <h5 className="fw-bold text-success"><i className="fa-solid fa-layer-group me-2" aria-hidden="true" />Tier Routing</h5>
                  <p className="text-muted small mb-0">You set the order. Lower tiers get calls first, and weights share calls between buyers in the same tier.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 h-100 border-primary border-opacity-50">
                  <h5 className="fw-bold text-primary"><i className="fa-solid fa-dollar-sign me-2" aria-hidden="true" />Revenue Routing</h5>
                  <p className="text-muted small mb-0">The highest payout goes first. Buyers paying the most per call move to the front automatically.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 h-100 border-warning border-opacity-50">
                  <h5 className="fw-bold text-warning"><i className="fa-solid fa-chart-line me-2" aria-hidden="true" />EPC Routing</h5>
                  <p className="text-muted small mb-0">Earnings per call decide. Buyers who have historically earned the most per call are tried first.</p>
                </div>
              </div>
            </div>
            <h3>Everything you can set per buyer</h3>
            <ul className="text-muted">
              <li>
                <strong>Who they hear from</strong>
                {" "}— token filters send a buyer only the calls that match: geography, vertical, lead quality or any custom token.
              </li>
              <li>
                <strong>How much they take</strong>
                {" "}— caps on attempts, connections, conversions and revenue, daily, monthly and in total, plus hourly and concurrency limits.
              </li>
              <li>
                <strong>When they take it</strong>
                {" "}— a 7-day by 24-hour schedule for each buyer, with pacing per time slot.
              </li>
              <li>
                <strong>What counts as converted</strong>
                {" "}— by duration or API postback, with CPL or CPA payouts per conversion. With Press-1-to-accept, the timer starts when the buyer presses 1.
              </li>
              <li>
                <strong>What they hear first</strong>
                {" "}— a short whisper message before connecting, with campaign or caller details.
              </li>
              <li>
                <strong>Teams of buyers</strong>
                {" "}— ring a group all at once or in order, under shared caps;{" "}
                <a href="/features/simul_dial">see buyer groups</a>
                .
              </li>
            </ul>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/inbound_call_routing" className="btn btn-td-green">Inbound Call Routing</a>
              {" "}
              <a href="/features/simul_dial" className="btn btn-outline-td-green">Simultaneously Dial Buyers</a>
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
