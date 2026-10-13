// /features/voice_agents/elevenlabs.html
import Bolt from '../../../components/Bolt.jsx'
export const meta = {
  title: "ElevenLabs + Avortyx | AI voice agents on your calls",
  description: "Import your ElevenLabs voice agents into Avortyx in one click and route them like your live team, with hours, caps and concurrency.",
  bodyClass: "avortyx_marketing features_voice_agents_elevenlabs ",
  layout: "feature",
}

export default function Elevenlabs() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features/integrations" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Integrations{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Integrations</p>
          <h1 className="fw-bold mb-2">ElevenLabs</h1>
          <p className="lead mktg-subpage-hero-subtitle">Import the voice agents you built in ElevenLabs and put them on inbound and outbound calls in minutes, routed with the same controls as your live team.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p className="text-muted mb-1">
              <strong>Your ElevenLabs agents, on real calls.</strong>
              {" "}Natural voices answering and qualifying inbound and outbound calls.
            </p>
            <img alt="ElevenLabs" className="img-fluid rounded my-3" width="200" src="/assets/avx-site/img/elevenlabs.jpg" />
            <p>Paste an ElevenLabs API key and Avortyx lists every agent in your account. Choose the ones you want and import them; Avortyx handles the telephony behind the scenes.</p>
            <ul className="text-muted">
              <li>
                <strong>Import in one click</strong>
                {" "}— the phone setup is done for you, and re-importing picks up new or changed agents.
              </li>
              <li>
                <strong>Route it like a person</strong>
                {" "}— hours, caps and concurrency, as the main destination, an after-hours fallback or overflow.
              </li>
              <li>
                <strong>Everything on the record</strong>
                {" "}— details the agent collects are written to the call as it happens and show up in your reports.
              </li>
            </ul>
            <h3>Up and running in three steps</h3>
            <ol className="spacious">
              <li>
                In ElevenLabs, create an API key with write access at{" "}
                <a href="https://elevenlabs.io/app/settings/api-keys" target="_blank" rel="noopener noreferrer">elevenlabs.io / Settings / API Keys</a>
                .
              </li>
              <li>In Avortyx, add the ElevenLabs integration on the <a href="/features/integrations">Integrations</a> page and paste the key.</li>
              <li>Select your agents and import them. They can take calls straight away.</li>
            </ol>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/request-access" className="btn btn-td-green">Connect ElevenLabs</a>
              {" "}
              <a href="/features/voice_agents" className="btn btn-outline-td-green">All AI Voice Agents</a>
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
