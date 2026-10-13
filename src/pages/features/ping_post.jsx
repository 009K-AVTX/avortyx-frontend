// /features/ping_post.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Ping/Post & Real-Time Bidding | Every buyer bids on every call | Avortyx",
  description: "Avortyx Ping/Post runs a live auction for each lead and call: publishers ping for bids, buyers compete in milliseconds, and the post returns the number that connects the winner.",
  bodyClass: "avortyx_marketing features_ping_post ",
  layout: "feature",
}

export default function PingPost() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#ping-post" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Features </a>
          </div>
          <h1 className="fw-bold mb-2">Ping/Post</h1>
          <p className="lead mktg-subpage-hero-subtitle">A live auction for every lead and call. Publishers ping to collect bids from every eligible buyer, then post to get the number that connects the winner.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">How the Auction Runs</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-building" aria-hidden="true" /></div>
                  <div className="flow-node-label">Publisher</div>
                  <div className="flow-node-desc">Sends what it knows about the lead</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-satellite-dish" aria-hidden="true" /></div>
                  <div className="flow-node-label">PING</div>
                  <div className="flow-node-desc">Eligible buyers return live bids</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-filter" aria-hidden="true" /></div>
                  <div className="flow-node-label">Buyers Screened</div>
                  <div className="flow-node-desc">Hours, caps, geo, filters, duplicates</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">POST</div>
                  <div className="flow-node-desc">The winner’s tracking number comes back</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-circle-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Connected</div>
                  <div className="flow-node-desc">The caller reaches the winning buyer</div>
                </div>
              </div>
            </div>
            <p>Fixed rate cards leave money on the table. With Ping/Post, each call is priced by the buyers who want it, at the moment it happens: more buyers bidding means higher fill rates and more revenue per call, and DNC and suppression checks run inside every ping.</p>
            <ul className="text-muted">
              <li>
                <strong>Pick how winners are chosen</strong>
                {" "}— rank by bid, by tier and weight, or by earnings per call (EPC).
              </li>
              <li>
                <strong>Fixed and live bids together</strong>
                {" "}— always-on buyers at a set price compete with webhook buyers who return a fresh bid on every ping.
              </li>
              <li>
                <strong>Waterfall when needed</strong>
                {" "}— a call can cascade down the ranked buyers, by bid and priority, until one connects.
              </li>
              <li>
                <strong>Ping caps per buyer</strong>
                {" "}— limit pings per minute, hour or day for each buyer, using only the intervals you need. A buyer at its cap is skipped rather than flooded, so smaller partners stop rejecting when your volume spikes.
              </li>
              <li>
                <strong>Screened before bidding</strong>
                {" "}— every caller is checked against DNC, suppression and litigator lists before any buyer is returned.
              </li>
            </ul>
            <h3>The auction, measured live</h3>
            <p>Every ping is counted. Follow the funnel from ping to conversion by buyer and traffic source while leads are still arriving.</p>
            <p className="text-muted mb-1">
              <strong>The whole auction on one screen.</strong>
              {" "}Live KPIs, the ping-to-post funnel and per-buyer economics together.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/ping-post-dashboard-1.webp">
              <img alt="Real-Time Ping/Post dashboard: KPIs and the ping-to-post funnel" className="img-fluid rounded border mb-4" src="/assets/avx-shots/ping-post-dashboard-1.webp" width="1400" height="1032" srcSet="/assets/avx-shots/ping-post-dashboard-1-1000.webp 1000w, /assets/avx-shots/ping-post-dashboard-1.webp 1400w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Economics by source.</strong>
              {" "}Pings, accept rate, conversions, revenue, payout and margin for each publisher and offer.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/ping-post-dashboard-3.webp">
              <img alt="Per-traffic-source performance: accept rate, conversions, revenue, payout, and margin" className="img-fluid rounded border mb-4" src="/assets/avx-shots/ping-post-dashboard-3.webp" width="1400" height="1029" srcSet="/assets/avx-shots/ping-post-dashboard-3-1000.webp 1000w, /assets/avx-shots/ping-post-dashboard-3.webp 1400w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Every ping as it happens.</strong>
              {" "}A live log of each ping: matched buyers, the winning bid and whether it was accepted.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/ping-post-dashboard-5.webp">
              <img alt="Real-Time ping log: each ping with its offer, source, matched buyers, winning bid, and status" className="img-fluid rounded border mb-4" src="/assets/avx-shots/ping-post-dashboard-5.webp" width="1400" height="1019" srcSet="/assets/avx-shots/ping-post-dashboard-5-1000.webp 1000w, /assets/avx-shots/ping-post-dashboard-5.webp 1400w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>Usage and cost</h3>
            <p>
              <strong>No surprise bills.</strong>
              {" "}Avortyx counts every inbound webhook request and shows daily usage and cost by offer and traffic source.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/ping-post-analytics-1.webp">
              <img alt="Ping/Post usage over time with a daily usage and cost breakdown" className="img-fluid rounded border mb-4" src="/assets/avx-shots/ping-post-analytics-1.webp" width="2000" height="419" srcSet="/assets/avx-shots/ping-post-analytics-1-1000.webp 1000w, /assets/avx-shots/ping-post-analytics-1.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/ping_post_integration" className="btn btn-td-green">Integration Guide</a>
              {" "}
              <a href="/features/buyer_management" className="btn btn-outline-td-green">Buyer Management</a>
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
