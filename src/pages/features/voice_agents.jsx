// /features/voice_agents.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "AI Voice Agents | Qualify every call, any hour | Avortyx",
  description: "Bring your AI voice agents into Avortyx: they answer and qualify calls around the clock and warm-transfer high-intent callers to buyers, under the same routing rules as your team.",
  bodyClass: "avortyx_marketing features_voice_agents ",
  layout: "feature",
}

export default function VoiceAgents() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#ai" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to AI </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">AI</p>
          <h1 className="fw-bold mb-2">AI Voice Agents</h1>
          <p className="lead mktg-subpage-hero-subtitle">Put your AI voice agents on the phones: they answer and qualify around the clock, then warm-transfer high-intent callers to buyers.</p>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-plug" aria-hidden="true" /></div>
                  <div className="flow-node-label">Connect</div>
                  <div className="flow-node-desc">Add your AI voice provider</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-download" aria-hidden="true" /></div>
                  <div className="flow-node-label">Import</div>
                  <div className="flow-node-desc">Pick agents; Avortyx sets up the SIP trunk</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-diagram-project" aria-hidden="true" /></div>
                  <div className="flow-node-label">Route</div>
                  <div className="flow-node-desc">Drop the agent into any routing rule</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Answer</div>
                  <div className="flow-node-desc">Calls reach the agent over SIP</div>
                </div>
              </div>
            </div>
            <p>An AI voice agent in Avortyx is just another destination in your routing rules, which means it can take the 2am calls, the overflow and the first round of questions, then warm-transfer the caller to a buyer once intent is high. The caller’s answers travel with the call, so the buyer starts the conversation already informed.</p>
            <ul className="text-muted">
              <li><strong>Qualification around the clock</strong> — leads get a conversation the moment they call, at any hour.</li>
              <li><strong>After-hours and overflow</strong> — route to the agent when your team is offline or every line is busy.</li>
              <li><strong>Answers without a transfer</strong> — common questions are handled by the agent; only real intent goes to a buyer.</li>
              <li>
                <strong>The same rules as everyone else</strong>
                {" "}— priority, hours, caps, concurrency, recording, transcription and analytics all apply to the agent.
              </li>
              <li>
                <strong>Answers on the record</strong>
                {" "}— whatever the agent learns is written to the call record in real time, ready for routing and reports.
              </li>
            </ul>
            <h3>Supported providers</h3>
            <p>These AI voice providers connect to Avortyx today.</p>
            <ul className="ul-reset provider-grid">
              <li className="provider-card">
                <div className="provider-card__logo"><img alt="ElevenLabs integration" src="/assets/avx-site/img/elevenlabs.jpg" /></div>
                <p className="provider-card__tagline">Natural, studio-quality conversational voice</p>
                <a className="provider-card__cta" href="/features/voice_agents/elevenlabs"> View ElevenLabs → </a>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/integrations" className="btn btn-td-green">Connect An Integration</a>
              {" "}
              <a href="/features#ai" className="btn btn-outline-td-green">AI at Avortyx</a>
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
