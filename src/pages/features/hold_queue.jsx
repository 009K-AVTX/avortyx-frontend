// /features/hold_queue.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Hold Queue & Callback | Never drop a caller to a busy line | Avortyx",
  description: "When every buyer is busy, Avortyx holds callers with music and connects them the moment capacity opens, or schedules a callback.",
  bodyClass: "avortyx_marketing features_hold_queue ",
  layout: "feature",
}

export default function HoldQueue() {
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
          <h1 className="fw-bold mb-2">Hold Queue & Callback</h1>
          <p className="lead mktg-subpage-hero-subtitle">When every buyer is busy, callers wait with music and connect the moment someone frees up, instead of hearing a busy tone.</p>
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
                  <div className="flow-node-label">Buyers Full</div>
                  <div className="flow-node-desc">No eligible buyer can take it now</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-music" aria-hidden="true" /></div>
                  <div className="flow-node-label">Caller Holds</div>
                  <div className="flow-node-desc">Parked in the queue with music</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-rotate" aria-hidden="true" /></div>
                  <div className="flow-node-label">Capacity Watched</div>
                  <div className="flow-node-desc">Avortyx keeps checking for an opening</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Connected</div>
                  <div className="flow-node-desc">The first free buyer gets the call</div>
                </div>
              </div>
            </div>
            <p>A busy tone throws away the money spent to make the phone ring. With a hold queue, a caller who arrives at a peak waits briefly with music and is connected automatically as soon as a buyer or agent opens up. If the queue is full, Avortyx can book a callback instead.</p>
            <ul className="text-muted">
              <li><strong>Set per offer</strong> — queue size, longest allowed wait and hold music, offer by offer.</li>
              <li>
                <strong>Ready-made fallbacks</strong>
                {" "}— each offer starts with editable actions for "caller joined the queue", "queue is full" and "waited too long".
              </li>
              <li>
                <strong>Callbacks your way</strong>
                {" "}— when the queue overflows or a caller hangs up, schedule a callback that starts a new call, reconnects the last buyer or routes somewhere new.
              </li>
              <li>
                <strong>No double callbacks</strong>
                {" "}— block repeat or duplicate callbacks inside a window you set, with separate handling for anonymous caller IDs.
              </li>
            </ul>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/buyer_management" className="btn btn-td-green">Buyer Management</a>
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
