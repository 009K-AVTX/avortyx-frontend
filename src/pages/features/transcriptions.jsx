// /features/transcriptions.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "AI Transcriptions | Summaries, Sentiment and Search on Every Call | Avortyx",
  description: "Avortyx transcribes every recorded call and adds AI summaries, sentiment, topics and keyword spotting, with live analytics and full-text search.",
  bodyClass: "avortyx_marketing premium_services_transcriptions ",
  layout: "feature",
}

export default function Transcriptions() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#ai" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to AI </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">AI</p>
          <h1 className="fw-bold mb-2">AI Transcriptions</h1>
          <p className="lead mktg-subpage-hero-subtitle">Every Recorded Call Turned into Text, Then into Answers: Summaries, Sentiment, Topics and Keyword Alerts, with a Live Dashboard on Top.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">From Recording to Insight</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-secondary text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Ends</div>
                  <div className="flow-node-desc">Both channels recorded</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-file-lines" aria-hidden="true" /></div>
                  <div className="flow-node-label">Transcribed</div>
                  <div className="flow-node-desc">A transcript by speaker, in minutes</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" /></div>
                  <div className="flow-node-label">AI Reads It</div>
                  <div className="flow-node-desc">Summary, sentiment, topics, names</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /></div>
                  <div className="flow-node-label">Keyword Spotting</div>
                  <div className="flow-node-desc">Checked against your keyword groups</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-bolt" aria-hidden="true" /></div>
                  <div className="flow-node-label">Act & Analyze</div>
                  <div className="flow-node-desc">Webhooks fire, dashboards update, text is searchable</div>
                </div>
              </div>
            </div>
            <p>
              Understand every call without listening to it. Each{" "}
              <a href="/features/call_recordings">call recording</a>
              {" "}is transcribed, summarized, scored and tagged as soon as the call ends, so QA and compliance teams can find coaching moments, one-sided calls and unhappy callers in seconds. Keyword matches can fire webhooks automatically. And because Avortyx scores intent while calls are still ringing, transcripts are also how you check those scores against what callers actually said.
            </p>
            <h3>Every Conversation, Reviewable</h3>
            <p>Listen, read or search: each call works all three ways.</p>
            <p className="text-muted mb-1">
              <strong>Audio and Text, in Step.</strong>
              {" "}A two-channel waveform with sentiment markers above a timestamped transcript by speaker; click a line and the audio jumps to it.
            </p>
            <img alt="Interactive call recording waveform with sentiment markers above a speaker-labeled AI transcript" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-call-recording.webp" width="1800" height="1311" srcSet="/assets/avx-shots/features-transcription-call-recording-1000.webp 1000w, /assets/avx-shots/features-transcription-call-recording.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <div className="row">
              <div className="col-md-6">
                <h3>What AI Pulls from Each Call</h3>
                <ul className="text-muted">
                  <li><strong>Summaries</strong> — a short written recap of the call.</li>
                  <li><strong>Sentiment</strong> — moment by moment and for the call overall.</li>
                  <li>
                    <strong>Topics, Names and Highlights</strong>
                    {" "}— subjects tagged, people and places picked out, key phrases flagged.
                  </li>
                  <li><strong>Language</strong> — which language was spoken, detected automatically.</li>
                  <li><strong>Talk-Time Ratio</strong> — how much the agent spoke versus the customer.</li>
                  <li>
                    <strong>A Player Built for Review</strong>
                    {" "}— agent and customer on separate channels for every{" "}
                    <a href="/features/call_recordings">call recording</a>
                    , with sentiment markers and click-to-jump.
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3>Search, Setup and Automation</h3>
                <ul className="text-muted">
                  <li>
                    <strong>Search Every Word</strong>
                    {" "}— and narrow by sentiment, offer, agent, call center, language or conversion.
                  </li>
                  <li><strong>Set Up per Offer</strong> — choose which AI features run on each offer.</li>
                  <li>
                    <strong><a href="/features/pii_redaction">PII Redaction</a></strong>
                    {" "}— personal, financial, medical and other categories removed.
                  </li>
                  <li>
                    <strong>Keyword spotting & <a href="/features/custom_webhook">webhooks</a></strong>
                    {" "}— label calls and set off actions.
                  </li>
                  <li>
                    <strong>After the Call, or Any Audio</strong>
                    {" "}— runs automatically after calls, or send any audio file through the{" "}
                    <a href="/features/api">REST API</a>
                    .
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-muted mb-1">
              <strong>On in One Click.</strong>
              {" "}Turn transcription on from the setup page and choose the AI features for each offer.
            </p>
            <img alt="Transcription setup page with a one-click enable button and AI feature overview" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-setup.webp" width="2000" height="1476" srcSet="/assets/avx-shots/features-transcription-setup-1000.webp 1000w, /assets/avx-shots/features-transcription-setup.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <h3>Every Transcript, Searchable</h3>
            <p>Anything anyone said, on any call, a search away.</p>
            <p className="text-muted mb-1">
              <strong>Sort and Filter Everything.</strong>
              {" "}Sentiment, topics, keywords, talk ratio, language and cost, each one a column you can filter and sort.
            </p>
            <img alt="Transcripts grid with AI insight columns, filters, and sorting" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-transcripts-grid.webp" width="1800" height="831" srcSet="/assets/avx-shots/features-transcription-transcripts-grid-1000.webp 1000w, /assets/avx-shots/features-transcription-transcripts-grid.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <p className="text-muted mb-1">
              <strong>Land on the Moment.</strong>
              {" "}Search across every call and see each match highlighted in its sentence.
            </p>
            <img alt="Searching every transcript for a phrase with highlighted matches" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-transcripts-search.webp" width="2000" height="1414" srcSet="/assets/avx-shots/features-transcription-transcripts-search-1000.webp 1000w, /assets/avx-shots/features-transcription-transcripts-search.webp 2000w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <h3>Live Analytics</h3>
            <p>Each transcript joins the dashboard as soon as it is processed, with nothing to export first.</p>
            <p className="text-muted mb-1">
              <strong>All Calls, One View.</strong>
              {" "}Volume, sentiment mix, talk ratio, minutes and cost, updating live.
            </p>
            <img alt="Avortyx transcription analytics dashboard" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-analytics-dashboard.webp" width="1800" height="1320" srcSet="/assets/avx-shots/features-transcription-analytics-dashboard-1000.webp 1000w, /assets/avx-shots/features-transcription-analytics-dashboard.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <p className="text-muted mb-1">
              <strong>Sentiment Over Time.</strong>
              {" "}How positive calls are trending, by offer, agent and call center.
            </p>
            <img alt="Positive-sentiment trends by offer, agent, and call center" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-sentiment-breakdowns.webp" width="1800" height="1320" srcSet="/assets/avx-shots/features-transcription-sentiment-breakdowns-1000.webp 1000w, /assets/avx-shots/features-transcription-sentiment-breakdowns.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <p className="text-muted mb-1"><strong>On the Map.</strong> Positive sentiment by the caller’s state, as a U.S. heat map.</p>
            <img alt="Positive sentiment by caller state on a U.S. heat map" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-sentiment-by-state.webp" width="1800" height="1320" srcSet="/assets/avx-shots/features-transcription-sentiment-by-state-1000.webp 1000w, /assets/avx-shots/features-transcription-sentiment-by-state.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <h3>Priced per Minute</h3>
            <p>Transcription and the AI features you switch on are each priced per minute of audio, and quoted for your account. Language detection costs nothing, there are no seat fees, and the analytics dashboard itemizes every charge.</p>
            <h3>Transcribe Any Audio by API</h3>
            <p className="text-muted mb-1">Calls are not the only input. Send any audio file in one API request and the finished transcript is posted back to the URL you give:</p>
            <pre>{"curl -H \"Authorization: Basic BASE64_ENCODED_PUBLIC_KEY_AND_PRIVATE_KEY\" \\\n     -H \"Content-Type: application/json\" \\\n     -X POST \\\n     -d '{\"caller_id\": \"+18004506787\",\n          \"file_url\": \"http://example.com/publicly_accessible_file.mp3\",\n          \"postback_url\": \"http://example.com/postback_url\",\n          \"data\": {\"loan_amount\": \"501\", \"custom_token\": \"the_value\"}}' \\\n     \"http://[your-subdomain].avortyx.com/api/v1/standalone_transcriptions\"\n  "}</pre>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/call_recordings" className="btn btn-td-green">Call Recordings</a>
              {" "}
              <a href="/features/pii_redaction" className="btn btn-outline-td-green">PII Redaction</a>
              {" "}
              <a href="/features/call_tracking" className="btn btn-outline-td-green">Call Tracking</a>
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
