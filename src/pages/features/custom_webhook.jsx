// /features/custom_webhook.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Custom Webhooks | Push call events anywhere | Avortyx",
  description: "Avortyx fires webhooks on more than 30 call, lead and agent events, can accept or reject an action before it happens, and parses the response back onto the call.",
  bodyClass: "avortyx_marketing features_custom_webhook ",
  layout: "feature",
}

export default function CustomWebhook() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#tracking-attribution" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Tracking & Attribution{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Tracking & Attribution</p>
          <h1 className="fw-bold mb-2">Custom Webhooks</h1>
          <p className="lead mktg-subpage-hero-subtitle">Push call, lead and agent events to any URL the moment they happen, and let your own systems weigh in before a buyer is dialed.</p>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-bolt" aria-hidden="true" /></div>
                  <div className="flow-node-label">Something Happens</div>
                  <div className="flow-node-desc">A call converts, a lead lands, an agent goes idle</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-paper-plane" aria-hidden="true" /></div>
                  <div className="flow-node-label">Avortyx Posts</div>
                  <div className="flow-node-desc">An HTTP request goes to your URL instantly</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-server" aria-hidden="true" /></div>
                  <div className="flow-node-label">Your Stack Reacts</div>
                  <div className="flow-node-desc">CRM, BI, Slack or your own service</div>
                </div>
              </div>
            </div>
            <p>A webhook is Avortyx telling your systems about an event the instant it happens, rather than waiting for a report or an export. Pick the event, give Avortyx a URL, and an HTTP POST with the call or lead data arrives there in real time.</p>
            <ul className="text-muted">
              <li>A buyer converts a call: post the call details to your team’s Slack channel.</li>
              <li>A buyer converts a call: write the outcome and payout into your CRM.</li>
            </ul>
            <h3>More than 30 events to listen for</h3>
            <p>Triggers cover the whole life of a call and the people around it: the call itself, conversions, data changes, recordings, conference events, leads and agent status. Subscribe only to what each system needs.</p>
            <h3>Ask before Avortyx acts</h3>
            <p>
              Pre-action triggers fire{" "}
              <strong>before</strong>
              {" "}something happens and let your system{" "}
              <strong>approve or refuse</strong>
              {" "}it. A{" "}
              <code>buyer_before_dial</code>
              {" "}trigger, for example, can check the caller against your own records before a buyer’s phone rings. Refuse it, and Avortyx skips that buyer and moves to the next eligible one, still within the same routing decision.
            </p>
            <ul>
              <li>Check a lead against an outside system before calling it</li>
              <li>Confirm live inventory or availability before connecting</li>
              <li>Apply business rules that live in your own code</li>
            </ul>
            <h3>Read the answer back</h3>
            <p>Pull a value out of the webhook response, JSON or XML, and save it as a token on the call or lead. That token can then steer routing, appear in reports or feed the next webhook.</p>
            <h3>Webhook Subscriptions for simple jobs</h3>
            <p>
              When you just need the data,{" "}
              <strong>Webhook Subscriptions</strong>
              {" "}skip the setup: choose from 11 event types, paste a URL and receive a JSON POST for each one. Narrow them by offer, schedule, traffic source, buyer, phone number or conversion status.
            </p>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/dynamic_number_insertion" className="btn btn-td-green">Dynamic Number Insertion</a>
              {" "}
              <a href="/features/formulas" className="btn btn-outline-td-green">Expressions & Functions</a>
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
