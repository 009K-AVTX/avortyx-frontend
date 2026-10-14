// /features/call_tracking.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Call Tracking | Every call tied to its source, outcome and payout | Avortyx",
  description: "Avortyx tracks every call from your online and offline campaigns by source, keyword and custom token, and records its duration, recording, transcript, revenue and payout on one call record.",
  bodyClass: "avortyx_marketing features_call_tracking ",
  layout: "feature",
}

export default function CallTracking() {
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
          <h1 className="fw-bold mb-2">Call Tracking</h1>
          <p className="lead mktg-subpage-hero-subtitle">Every call tied to the campaign that drove it, and to what happened next: who answered, how long it ran, what was said and what it paid.</p>
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
                  <div className="flow-node-label">Number Assigned</div>
                  <div className="flow-node-desc">A local or toll-free number per campaign</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Caller Dials</div>
                  <div className="flow-node-desc">Source and tokens attach to the call</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-list-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Recorded</div>
                  <div className="flow-node-desc">Duration, status, recording, revenue</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-chart-column" aria-hidden="true" /></div>
                  <div className="flow-node-label">Reported</div>
                  <div className="flow-node-desc">Live dashboards and exports, any dimension</div>
                </div>
              </div>
            </div>
            <p>
              Avortyx starts with the number. Pick from{" "}
              <strong>thousands of local and toll-free lines</strong>
              {" "}(888, 877, 855, 844 and 866 included) in nearly every area code, or port the ones you already use, and every call that rings them is tied to its campaign before it is even answered.
            </p>
            <h3>One record per call</h3>
            <p>
              Each call is logged with its source, offer, buyer, timings, location, custom tokens, revenue, payout and margin, alongside the{" "}
              <a href="/features/call_recordings">recording</a>
              ,{" "}
              <a href="/features/transcriptions">AI transcript</a>
              {" "}and disposition. That record is also how Avortyx settles payouts, so reporting and money never disagree.
            </p>
            <p className="text-muted mb-1">
              <strong>Every call, one grid.</strong>
              {" "}Filter, tab and act on calls in bulk, with column layouts saved per team.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-call-tracking-001.webp">
              <img alt="Call logs grid showing each caller, the Avortyx tracking number they dialed, offer, traffic source, buyer, status, and per-call revenue and payout" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-call-tracking-001.webp" width="2000" height="977" srcSet="/assets/avx-shots/features-call-tracking-001-1000.webp 1000w, /assets/avx-shots/features-call-tracking-001.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Source to outcome, on one page.</strong>
              {" "}Timings, source, offer and cost, with the recording, AI summary and transcript on the same page.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-call-tracking-call-details.webp">
              <img alt="Call detail view with attribution, timing breakdown, interactive recording player, AI summary, and transcription" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-call-tracking-call-details.webp" width="2000" height="1450" srcSet="/assets/avx-shots/features-call-tracking-call-details-1000.webp 1000w, /assets/avx-shots/features-call-tracking-call-details.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Search what callers said.</strong>
              {" "}Full-text search across every transcript: a competitor, a price, a complaint.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-transcription-transcripts-search.webp">
              <img alt="Searching every call transcript for a phrase with highlighted matches" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-transcripts-search.webp" width="2000" height="1414" srcSet="/assets/avx-shots/features-transcription-transcripts-search-1000.webp 1000w, /assets/avx-shots/features-transcription-transcripts-search.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3 id="reports-analytics">Call Analytics</h3>
            <p>
              Live dashboards follow calls, conversions, revenue, payout, cost and profit as they land, and summary reports group them by buyer, traffic source, offer, status and dozens of other dimensions. Pick from hundreds of fields, save views as tabs, and send one-time or recurring{" "}
              <a href="/features/data_export">CSV reports</a>
              {" "}by email.
            </p>
            <p className="text-muted mb-1">
              <strong>Slice it any way you like.</strong>
              {" "}Calls, conversions, revenue, RPC and timings, grouped by whatever matters to you.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-call-tracking-002.webp">
              <img alt="Summary report grouped by buyer with conversions, revenue, RPC, and timing columns" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-call-tracking-002.webp" width="2000" height="829" srcSet="/assets/avx-shots/features-call-tracking-002-1000.webp 1000w, /assets/avx-shots/features-call-tracking-002.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Exports when you want them.</strong>
              {" "}A step-by-step wizard for one-time or recurring exports, with column picking and email delivery.
            </p>
            <img alt="Export wizard for one-time or recurring call exports with column selection and email notification" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-call-tracking-003.webp" width="1073" height="783" loading="lazy" decoding="async" />
            <h3>What the transcripts add up to</h3>
            <p>
              Switch on{" "}
              <a href="/features/transcriptions">AI Transcriptions</a>
              {" "}and sentiment, topics, talk-time ratio and cost roll up live, with every number linking through to the transcripts behind it.
            </p>
            <p className="text-muted mb-1">
              <strong>The trend, not just the calls.</strong>
              {" "}Positive sentiment over time, by offer, agent and call center.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-transcription-sentiment-breakdowns.webp">
              <img alt="Positive-sentiment trends by offer, agent, and call center" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-sentiment-breakdowns.webp" width="1800" height="1320" srcSet="/assets/avx-shots/features-transcription-sentiment-breakdowns-1000.webp 1000w, /assets/avx-shots/features-transcription-sentiment-breakdowns.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3 id="audio-quality">Audio Quality Monitoring</h3>
            <p>
              A bad line loses a sale as surely as a bad buyer. Every leg is scored from its RTP media stats,{" "}
              <strong>MOS</strong>
              , quality,{" "}
              <strong>packet loss</strong>
              {" "}and{" "}
              <strong>jitter</strong>
              , and the results roll up into one live dashboard for the account.
            </p>
            <p className="text-muted mb-1">
              <strong>Quality, tracked like revenue.</strong>
              {" "}Average MOS, quality, packet loss, jitter and dead air, with a geographic view.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/audio-quality-dashboard.webp">
              <img alt="Avortyx Audio Quality dashboard showing average MOS, quality, packet loss, jitter, dead air, and a geographic breakdown" className="img-fluid rounded border mb-4" src="/assets/avx-shots/audio-quality-dashboard.webp" width="1600" height="845" srcSet="/assets/avx-shots/audio-quality-dashboard-1000.webp 1000w, /assets/avx-shots/audio-quality-dashboard.webp 1600w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <p className="text-muted mb-1">
              <strong>Find the weak spot.</strong>
              {" "}Every metric by direction and leg role, with the poorest states listed first.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/audio-quality-breakdowns.webp">
              <img alt="Avortyx Audio Quality breakdowns by direction and leg role, with the lowest-quality states" className="img-fluid rounded border mb-4" src="/assets/avx-shots/audio-quality-breakdowns.webp" width="1600" height="796" srcSet="/assets/avx-shots/audio-quality-breakdowns-1000.webp 1000w, /assets/avx-shots/audio-quality-breakdowns.webp 1600w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>IVRs and call flows, without code</h3>
            <p>Between the ring and the record is the call flow. Avortyx builds dynamic IVRs from call routers: steps that greet the caller, collect keypresses or spoken answers, filter on any token and send the call to the right buyer.</p>
            <ul className="text-muted">
              <li>
                <strong>Filters on any token</strong>
                {" "}— each step can match caller data, location or custom tokens, so the flow changes call by call.
              </li>
              <li>
                <strong>Webhooks at any step</strong>
                {" "}— fire a{" "}
                <a href="/features/custom_webhook">custom webhook</a>
                {" "}before or after any step.
              </li>
              <li>
                <strong>Nothing falls through</strong>
                {" "}— a call that connects too briefly moves on to the next buyer, and no-buyer, no-match and no-answer cases go to handlers you choose, such as voicemail or a hold queue.
              </li>
            </ul>
            <h3>Recordings and retention</h3>
            <p>
              <a href="/features/call_recordings">Record calls in both directions</a>
              {" "}per offer, with playback limited to your team and retention rules that remove recordings once they pass their window, per offer or for the whole account.
            </p>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/inbound_call_routing" className="btn btn-td-green">Inbound Call Routing</a>
              {" "}
              <a href="/features/pii_redaction" className="btn btn-outline-td-green">PII Redaction</a>
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
