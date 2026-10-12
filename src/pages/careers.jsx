// /careers.html
export const meta = {
  title: "Careers | Avortyx",
  description: "Join the team building the future of call tracking and lead automation.",
  bodyClass: "avortyx_marketing careers without-waves",
  layout: "site",
}

export default function Careers() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Features </a>
          </div>
          <h1 className="fw-bold mb-2">Careers</h1>
          <p className="lead mktg-subpage-hero-subtitle">Join the team building the future of call tracking and lead automation.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Our Culture &amp; How We Work</h2>
            <p className="text-muted max-w-2xl mx-auto">We are an engineering-first, profitable company processing millions of mission-critical voice calls. We value high agency, clear writing, and ownership.</p>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <i className="fa-solid fa-earth-americas text-info fs-3 mb-3" />
                <h3 className="h6 fw-bold text-white mb-2">100% Remote-First</h3>
                <p className="small text-muted mb-0">Work from anywhere in the world. We hire globally across US, EMEA, and APAC time zones.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <i className="fa-solid fa-chart-line text-success fs-3 mb-3" />
                <h3 className="h6 fw-bold text-white mb-2">Top-of-Market Pay</h3>
                <p className="small text-muted mb-0">Transparent salaries benchmarked against the 90th percentile, plus real equity in a profitable business.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <i className="fa-solid fa-bolt text-warning fs-3 mb-3" />
                <h3 className="h6 fw-bold text-white mb-2">High Autonomy</h3>
                <p className="small text-muted mb-0">No endless meetings. Small senior teams solving hard real-time latency and AI voice problems.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <i className="fa-solid fa-heart-pulse text-danger fs-3 mb-3" />
                <h3 className="h6 fw-bold text-white mb-2">Comprehensive Health</h3>
                <p className="small text-muted mb-0">Full medical, dental, and vision coverage, plus home-office setup and continuous learning stipends.</p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-4 text-center">Open Engineering &amp; Go-to-Market Roles</h2>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #131722, #0d1017)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary-subtle text-primary">Core Telecom Infrastructure</span>
                      <span className="small text-success font-monospace fw-bold">$175k – $220k + Equity</span>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-2">Principal VoIP &amp; Real-Time Telephony Systems Engineer</h3>
                    <p className="small text-muted mb-2"><i className="fa-solid fa-location-dot me-1 text-info" />100% Remote (Global) · Full-Time</p>
                    <p className="small text-slate-300 mb-3">Architect our distributed SIP proxy layer, WebRTC media gateways, and sub-85ms routing fabric across global edge regions.</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-secondary-subtle text-secondary">SIP / VoIP</span>
                      <span className="badge bg-secondary-subtle text-secondary">FreeSWITCH</span>
                      <span className="badge bg-secondary-subtle text-secondary">Go / Rust</span>
                      <span className="badge bg-secondary-subtle text-secondary">WebRTC</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                    <span className="small text-muted">Direct Engineering Lead Interview</span>
                    <a href="/p/contact?role=voip" className="btn btn-sm btn-td-green fw-semibold">Apply Now →</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #131722, #0d1017)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-info-subtle text-info">Artificial Intelligence &amp; Speech</span>
                      <span className="small text-success font-monospace fw-bold">$180k – $230k + Equity</span>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-2">Staff AI / Speech Recognition Research Engineer</h3>
                    <p className="small text-muted mb-2"><i className="fa-solid fa-location-dot me-1 text-info" />100% Remote (US / EMEA) · Full-Time</p>
                    <p className="small text-slate-300 mb-3">Train real-time speech-to-speech models, streaming intent classifiers, and autonomous conversational voice agents that transfer callers seamlessly.</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-secondary-subtle text-secondary">PyTorch</span>
                      <span className="badge bg-secondary-subtle text-secondary">Streaming ASR</span>
                      <span className="badge bg-secondary-subtle text-secondary">TTS</span>
                      <span className="badge bg-secondary-subtle text-secondary">LLM Fine-Tuning</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                    <span className="small text-muted">AI Research Team</span>
                    <a href="/p/contact?role=ai" className="btn btn-sm btn-td-green fw-semibold">Apply Now →</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #131722, #0d1017)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-success-subtle text-success">Platform &amp; Experience</span>
                      <span className="small text-success font-monospace fw-bold">$145k – $185k + Equity</span>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-2">Senior Full-Stack Product Engineer</h3>
                    <p className="small text-muted mb-2"><i className="fa-solid fa-location-dot me-1 text-info" />100% Remote (Global) · Full-Time</p>
                    <p className="small text-slate-300 mb-3">Build high-performance real-time telemetry dashboards, interactive canvas flow visualizers, and mission-critical campaign tools.</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-secondary-subtle text-secondary">React</span>
                      <span className="badge bg-secondary-subtle text-secondary">TypeScript</span>
                      <span className="badge bg-secondary-subtle text-secondary">Node.js</span>
                      <span className="badge bg-secondary-subtle text-secondary">Canvas / WebGL</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                    <span className="small text-muted">Product Team</span>
                    <a href="/p/contact?role=fullstack" className="btn btn-sm btn-td-green fw-semibold">Apply Now →</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #131722, #0d1017)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-warning-subtle text-warning">Customer Engineering</span>
                      <span className="small text-success font-monospace fw-bold">$150k – $195k + Commission</span>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-2">Enterprise Solutions Architect &amp; Integrations Lead</h3>
                    <p className="small text-muted mb-2"><i className="fa-solid fa-location-dot me-1 text-info" />100% Remote (US) · Full-Time</p>
                    <p className="small text-slate-300 mb-3">Partner with top performance marketing networks, carrier partners, and pay-per-call syndicates to deploy complex ping-tree routing logic.</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-secondary-subtle text-secondary">Ping/Post</span>
                      <span className="badge bg-secondary-subtle text-secondary">Webhooks</span>
                      <span className="badge bg-secondary-subtle text-secondary">Carrier SIP</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                    <span className="small text-muted">Growth Engineering</span>
                    <a href="/p/contact?role=solutions" className="btn btn-sm btn-td-green fw-semibold">Apply Now →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-4 rounded" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <h3 className="h5 fw-bold text-white mb-2">General Application</h3>
            <p className="text-muted small mb-3">Interested in contributing to Avortyx in an unlisted capacity? Send your profile and github/portfolio to our founders.</p>
            <a className="btn btn-td-green px-4 py-2 fw-semibold" href="/p/contact">Send Us a Message</a>
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to get started?</h2>
          <p className="marketing-cta-band__subtitle">See how Avortyx turns every lead into a routed, tracked and paid call — start free, or book a walkthrough with a specialist.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/sign_up" className="btn btn-cta-primary fw-semibold">Sign Up Free</a>
            {" "}
            <a href="/p/contact" className="btn btn-cta-outline fw-semibold">Request a Demo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
