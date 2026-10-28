// /features/call_recordings.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Call Recordings | Every Leg, Secured and Searchable | Avortyx",
  description: "Avortyx records the agent leg, buyer leg and full call, plays them on an interactive waveform, and keeps or deletes them on your retention rules.",
  bodyClass: "avortyx_marketing features_call_recordings ",
  layout: "feature",
}

export default function CallRecordings() {
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
          <h1 className="fw-bold mb-2">Call Recordings</h1>
          <p className="lead mktg-subpage-hero-subtitle">Record Every Leg of Every Call, Decide Who Can Hear It, and Keep or Delete It on Your Own Retention Schedule.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Every Leg, Separately</h3>
            <p>
              Avortyx records the{" "}
              <strong>agent leg</strong>
              , the{" "}
              <strong>buyer leg</strong>
              {" "}and the{" "}
              <strong>whole call</strong>
              {" "}as separate files, so QA, disputes and coaching each get exactly the part they need.
            </p>
            <h3>A Player Built for Review</h3>
            <p>
              Recordings play on a waveform with the agent and customer on separate channels; click anywhere to jump there. Turn on{" "}
              <a href="/features/transcriptions">AI Transcriptions</a>
              {" "}and sentiment markers appear along the waveform while the transcript follows the audio, labeled by speaker.
            </p>
            <p className="text-muted mb-1">
              <strong>Jump to the Moment.</strong>
              {" "}Two-channel waveform and sentiment markers above a transcript you can click to seek.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-transcription-call-recording.webp">
              <img alt="Interactive call recording waveform with sentiment markers above a speaker-labeled transcript" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-transcription-call-recording.webp" width="1800" height="1311" srcSet="/assets/avx-shots/features-transcription-call-recording-1000.webp 1000w, /assets/avx-shots/features-transcription-call-recording.webp 1800w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>Playback Only for Your Team</h3>
            <p>With authorized playback switched on, a recording opens only for a signed-in user in your account, through short-lived signed links rather than public URLs.</p>
            <h3>Know When Audio Is Ready</h3>
            <p>A webhook fires as soon as a recording is available, with separate events for the agent, buyer and full-call files, so nothing has to poll for audio.</p>
            <h3>Retention on Your Terms</h3>
            <p>
              Set how long recordings live by call type, offer, schedule, buyer or traffic source; anything past its window is removed automatically, one of Avortyx’s{" "}
              <a href="/features#security-compliance-tools">security and compliance tools</a>
              .
            </p>
            <h3>Take Them with You</h3>
            <p>
              <a href="/features/data_export">Data Exports</a>
              {" "}download recordings in bulk, once or on a recurring schedule.
            </p>
            <h3>Call Quality, Measured</h3>
            <p>
              Each recording carries an{" "}
              <strong>audio quality score</strong>
              {" "}from its RTP media stats:{" "}
              <strong>MOS</strong>
              , quality,{" "}
              <strong>packet loss</strong>
              {" "}and{" "}
              <strong>jitter</strong>
              , with{" "}
              <strong>dead air</strong>
              {" "}and{" "}
              <strong>one-way audio</strong>
              {" "}flagged, so a bad line is obvious before anyone listens. See it across the account in the{" "}
              <a href="/features/call_tracking#audio-quality">Audio Quality dashboard</a>
              .
            </p>
            <p className="text-muted mb-1">
              <strong>Quality at a Glance.</strong>
              {" "}MOS, packet loss and jitter across every call in the account.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/audio-quality-dashboard.webp">
              <img alt="Avortyx Audio Quality dashboard" className="img-fluid rounded border mb-4" src="/assets/avx-shots/audio-quality-dashboard.webp" width="1600" height="845" srcSet="/assets/avx-shots/audio-quality-dashboard-1000.webp 1000w, /assets/avx-shots/audio-quality-dashboard.webp 1600w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/pii_redaction" className="btn btn-td-green">PII Redaction</a>
              {" "}
              <a href="/features/data_export" className="btn btn-outline-td-green">Data Exports</a>
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
