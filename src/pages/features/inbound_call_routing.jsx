// /features/inbound_call_routing.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Inbound Call Routing | Decided on the first ring | Avortyx",
  description: "Avortyx screens, scores and routes every inbound call to the best eligible buyer, agent or AI voice agent while it is still ringing.",
  bodyClass: "avortyx_marketing features_inbound_call_routing ",
  layout: "feature",
}

export default function InboundCallRouting() {
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
          <h1 className="fw-bold mb-2">Inbound Call Routing</h1>
          <p className="lead mktg-subpage-hero-subtitle">Every inbound call is screened, scored and sent to the best eligible destination while it is still ringing.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">From Ring to Revenue</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Rings In</div>
                  <div className="flow-node-desc">The number tells Avortyx the offer and source</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-microphone" aria-hidden="true" /></div>
                  <div className="flow-node-label">Greeting & IVR</div>
                  <div className="flow-node-desc">Keypresses and answers become tokens</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-filter" aria-hidden="true" /></div>
                  <div className="flow-node-label">Buyers Matched</div>
                  <div className="flow-node-desc">Hours, caps, tokens and suppression</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Connected</div>
                  <div className="flow-node-desc">The best buyer picks up</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-circle-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Settled</div>
                  <div className="flow-node-desc">Revenue booked, payouts fired</div>
                </div>
              </div>
            </div>
            <p>
              Avortyx makes the routing decision in the time it takes a phone to ring once. The call can go to a buyer, a human agent or an{" "}
              <a href="/features/voice_agents">AI voice agent</a>
              , and it can move to a new destination mid-call when the caller’s intent or your filters change.
            </p>
            <h3>Three ways to rank buyers</h3>
            <p>For each call, the routing engine looks at every available buyer and ranks the ones that qualify using the method you pick:</p>
            <ul>
              <li>
                <strong>Tier routing</strong>
                {" "}— you set the order; lower tiers go first, and weights share calls inside a tier.
              </li>
              <li><strong>Revenue routing</strong> — the buyer paying the most for this call gets it.</li>
              <li><strong>EPC routing</strong> — the buyer that has earned the most per call in the past goes first.</li>
            </ul>
            <h3>Only buyers who can take the call</h3>
            <p>A buyer is only tried if the call fits them and they have room for it:</p>
            <ul>
              <li>
                <strong>Filters on any token</strong>
                {" "}— buyers match calls by geography, vertical, lead quality or any custom token, using equals, not-equals, regex, number comparisons and in/not-in. A call has to pass every one of a buyer’s filters.
              </li>
              <li>
                <strong>Caps</strong>
                {" "}— concurrency, hourly, daily, monthly and total limits are checked, and a buyer at any limit is passed over.
              </li>
              <li>
                <strong>Hours</strong>
                {" "}— a 7-day by 24-hour schedule says when each buyer is open; outside it, the call falls to the next buyer or your exception handler.
              </li>
              <li>
                <strong>Suppression and blacklists</strong>
                {" "}— each buyer’s suppression list is checked before forwarding, and a company blacklist can block a caller everywhere.
              </li>
            </ul>
            <p>
              Set caps up in{" "}
              <a href="/features/buyer_management">Buyer Management</a>
              {" "}and lists in{" "}
              <a href="/features/suppression_lists">Suppression & DNC</a>
              .
            </p>
            <h3>Every decision shows up in the numbers</h3>
            <p>
              Each routed call brings its offer, buyer and revenue into{" "}
              <a href="/features/call_tracking#reports-analytics">Call Analytics</a>
              , so you can see what each routing choice actually earned.
            </p>
            <p className="text-muted mb-1">
              <strong>What routing earned.</strong>
              {" "}Calls grouped by offer with revenue, payout, conversions and per-call economics.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/summary-report-by-offer.webp">
              <img alt="Avortyx summary report grouping routed calls by offer, with revenue, payout, conversions, and per-call economics" className="img-fluid rounded border my-3" src="/assets/avx-shots/summary-report-by-offer.webp" width="1650" height="540" srcSet="/assets/avx-shots/summary-report-by-offer-1000.webp 1000w, /assets/avx-shots/summary-report-by-offer.webp 1650w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>Audio checked on every leg</h3>
            <p>
              A perfect routing decision is wasted if the audio never connects. Avortyx measures the quality of every leg it routes and flags{" "}
              <strong>dead air</strong>
              {" "}(audio sent, nothing back from the caller) and{" "}
              <strong>one-way audio</strong>
              {" "}as they happen, so a broken buyer or carrier route cannot quietly burn your traffic.
            </p>
            <p>
              Quality, MOS, packet loss and jitter for callers, buyers and agents roll up into the{" "}
              <a href="/features/call_tracking#audio-quality">Audio Quality dashboard</a>
              , with geographic and per-codec views for spotting regional or carrier problems early.
            </p>
            <p className="text-muted mb-1">
              <strong>Find bad routes fast.</strong>
              {" "}Quality, MOS, packet loss and jitter across every routed leg.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/audio-quality-dashboard.webp">
              <img alt="Avortyx Audio Quality dashboard for routed calls" className="img-fluid rounded shadow-sm my-3" src="/assets/avx-shots/audio-quality-dashboard.webp" width="1600" height="845" srcSet="/assets/avx-shots/audio-quality-dashboard-1000.webp 1000w, /assets/avx-shots/audio-quality-dashboard.webp 1600w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Narrow it down.</strong>
              {" "}Every metric by direction and leg role, with the weakest states listed first.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/audio-quality-breakdowns.webp">
              <img alt="Avortyx Audio Quality breakdowns by direction and leg role, with the lowest-quality states" className="img-fluid rounded border my-3" src="/assets/avx-shots/audio-quality-breakdowns.webp" width="1600" height="796" srcSet="/assets/avx-shots/audio-quality-breakdowns-1000.webp 1000w, /assets/avx-shots/audio-quality-breakdowns.webp 1600w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/buyer_management" className="btn btn-td-green">Buyer Management</a>
              {" "}
              <a href="/features/call_tracking" className="btn btn-outline-td-green">Call Tracking</a>
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
