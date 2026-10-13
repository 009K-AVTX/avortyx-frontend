// /features/ai_sms_bots.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "AI SMS Bots | Qualify leads by text, then call them | Avortyx",
  description: "Avortyx SMS bots answer leads by text, collect answers, act on keywords and place an outbound call the moment a lead qualifies.",
  bodyClass: "avortyx_marketing features_ai_sms_bots ",
  layout: "feature",
}

export default function AiSmsBots() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#ai" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to AI </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">AI</p>
          <h1 className="fw-bold mb-2">AI SMS Bots</h1>
          <p className="lead mktg-subpage-hero-subtitle">Text bots that answer leads, gather what a buyer needs to know, and place the call the moment a lead is ready.</p>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-comment-sms" aria-hidden="true" /></div>
                  <div className="flow-node-label">A Lead Texts</div>
                  <div className="flow-node-desc">Any message to your number</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-robot" aria-hidden="true" /></div>
                  <div className="flow-node-label">The Bot Reads It</div>
                  <div className="flow-node-desc">Keyword, menu choice or filter</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-bolt" aria-hidden="true" /></div>
                  <div className="flow-node-label">It Responds</div>
                  <div className="flow-node-desc">Replies, asks, or fires a webhook</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">Qualified? Call</div>
                  <div className="flow-node-desc">An outbound call goes out</div>
                </div>
              </div>
            </div>
            <p>Not every lead wants to talk first. Avortyx SMS bots hold the conversation by text: answering common questions, collecting details like a form would, acting on what people reply, and calling the lead as soon as they qualify, so the call that follows is already scored and ready to route.</p>
            <ul className="text-muted">
              <li><strong>Keyword replies</strong> — HELP, START and STOP answered automatically.</li>
              <li>
                <strong>Text-based forms and Call Me Now</strong>
                {" "}— ask questions by SMS, store each answer on the contact, and dial the lead once they pre-qualify.
              </li>
              <li>
                <strong>Actions on replies</strong>
                {" "}— opt out or block, call back, send an email, book a callback or call a webhook when a message matches.
              </li>
              <li>
                <strong>Branching menus</strong>
                {" "}— walk people through choices, each able to reply, save a field or open another menu.
              </li>
              <li>
                <strong>Webhooks</strong>
                {" "}— send the sender’s number, their message and the lead data to another system as it happens.
              </li>
            </ul>
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
