// /features/simul_dial.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Simultaneous Dial & Buyer Groups | Avortyx",
  description: "Ring a whole group of buyers or agents at once and give the call to whoever answers first, with shared caps and one-click pause for the group.",
  bodyClass: "avortyx_marketing features_simul_dial ",
  layout: "feature",
}

export default function SimulDial() {
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
          <h1 className="fw-bold mb-2">Simultaneously Dial Buyers</h1>
          <p className="lead mktg-subpage-hero-subtitle">Ring a whole team of buyers or agents at once and hand the caller to whoever picks up first, or work down the list in order.</p>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Comes In</div>
                  <div className="flow-node-desc">Avortyx picks a buyer group</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-users" aria-hidden="true" /></div>
                  <div className="flow-node-label">Everyone Rings</div>
                  <div className="flow-node-desc">All members ring together</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-hand-pointer" aria-hidden="true" /></div>
                  <div className="flow-node-label">First Pick-Up</div>
                  <div className="flow-node-desc">Answer and press 1 to claim it</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Bridged</div>
                  <div className="flow-node-desc">The caller is connected to them</div>
                </div>
              </div>
            </div>
            <p>The fastest way to reach a person is to ask several at once. A buyer group rings every member together, and the first to answer and press 1 takes the call. When you would rather keep an order of preference, set the group to dial one member after another.</p>
            <ul className="text-muted">
              <li><strong>All at Once, or in Order</strong> — choose simultaneous ringing or sequential dialing per group.</li>
              <li>
                <strong>Ranked Like Any Buyer</strong>
                {" "}— a group competes in routing next to individual buyers, with its own tier (lower tiers route first) and weights inside the tier.
              </li>
              <li>
                <strong>Caps for the Whole Team</strong>
                {" "}— limit attempts, connections, conversions and revenue across every member, with hourly and concurrency caps on the group itself.
              </li>
              <li>
                <strong>Pause a Call Center in One Click</strong>
                {" "}— pausing the group pauses every buyer in it, no record-by-record editing.
              </li>
              <li>
                <strong>Full Means Out</strong>
                {" "}— once any group cap is hit, the group and its members leave routing until the cap resets or you raise it.
              </li>
            </ul>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/buyer_management" className="btn btn-td-green">Buyer Management</a>
              {" "}
              <a href="/features/hold_queue" className="btn btn-outline-td-green">Hold Queue & Callback</a>
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
