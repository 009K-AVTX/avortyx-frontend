// /pricing.html
import Bolt from '../components/Bolt.jsx'
export const meta = {
  title: "Pricing | Usage-based, itemized per call | Avortyx",
  description: "Avortyx pricing: usage-based rates with monthly commit discounts, no onboarding fees, and a leg-by-leg cost breakdown on every call.",
  bodyClass: "avortyx_marketing pricing ",
  layout: "site",
}

// Monthly Cost Estimator plans, from the rate table:
// [id, name, commit, number /mo, spam tag /mo, local /min, toll free /min, SMS, AI transcription /min]
const EST_PLANS = [
  ['base', 'Pay As You Go', 0, 4, 5, 0.055, 0.06, 0.04, 0.035],
  ['commit_50', '$50', 50, 3, 4, 0.05, 0.055, 0.035, 0.0325],
  ['commit_250', '$250', 250, 2, 3, 0.04, 0.045, 0.03, 0.03],
  ['commit_1000', '$1,000', 1000, 1.5, 2.5, 0.035, 0.04, 0.025, 0.0275],
  ['commit_4000', '$4,000', 4000, 1, 2, 0.03, 0.035, 0.02, 0.025],
  ['commit_8000', '$8,000', 8000, 1, 2, 0.025, 0.03, 0.015, 0.02],
]

export default function Pricing() {
  return (
    <main>
      <section className="pricing-hero">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <h1 className="fw-bold">Pay for calls that reach a buyer</h1>
            <p className="text-muted lead">Usage-based rates that drop as your volume grows. No onboarding fees, and every charge itemized on the call.</p>
          </div>
        </div>
      </section>
      <section className="pricing-body">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Lower rates with a monthly commit</h2>
            <p className="text-muted">The more you commit to each month, the lower every rate below.</p>
          </div>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Rate Type</th>
                  <th>Pay As You Go</th>
                  <th>$50</th>
                  <th>$250</th>
                  <th>$1,000</th>
                  <th>$4,000</th>
                  <th>$8,000</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/call_tracking">Numbers</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-1">1</a>
                  </th>
                  <td>$4.00</td>
                  <td>$3.00</td>
                  <td>$2.00</td>
                  <td>$1.50</td>
                  <td>$1.00</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/spam_tag_mitigation">Spam Tag Mitigation</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-2">2</a>
                  </th>
                  <td>$5.00</td>
                  <td>$4.00</td>
                  <td>$3.00</td>
                  <td>$2.50</td>
                  <td>$2.00</td>
                  <td>$2.00</td>
                </tr>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/inbound_call_routing">Local Tracking</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-3">3</a>
                  </th>
                  <td>$0.0550</td>
                  <td>$0.0500</td>
                  <td>$0.0400</td>
                  <td>$0.0350</td>
                  <td>$0.0300</td>
                  <td>$0.0250</td>
                </tr>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/inbound_call_routing">Toll Free Tracking</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-4">4</a>
                  </th>
                  <td>$0.0600</td>
                  <td>$0.0550</td>
                  <td>$0.0450</td>
                  <td>$0.0400</td>
                  <td>$0.0350</td>
                  <td>$0.0300</td>
                </tr>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/agent_controls">Outbound To Consumer</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-5">5</a>
                  </th>
                  <td>$0.0450</td>
                  <td>$0.0400</td>
                  <td>$0.0300</td>
                  <td>$0.0250</td>
                  <td>$0.0200</td>
                  <td>$0.0150</td>
                </tr>
                <tr>
                  <th className="fw-semibold"><a className="mktg-link-green" href="/features/ai_sms_bots">SMS Out</a> <a className="pricing-fn" href="#fn-6">6</a></th>
                  <td>$0.0400</td>
                  <td>$0.0350</td>
                  <td>$0.0300</td>
                  <td>$0.0250</td>
                  <td>$0.0200</td>
                  <td>$0.0150</td>
                </tr>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/lead_automation">Per Action</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-7">7</a>
                  </th>
                  <td>$0.00250</td>
                  <td>$0.00150</td>
                  <td>$0.00120</td>
                  <td>$0.00090</td>
                  <td>$0.00075</td>
                  <td>$0.00060</td>
                </tr>
                <tr>
                  <th className="fw-semibold">Rejected Call <a className="pricing-fn" href="#fn-8">8</a></th>
                  <td>$0.0250</td>
                  <td>$0.0200</td>
                  <td>$0.0200</td>
                  <td>$0.0150</td>
                  <td>$0.0100</td>
                  <td>$0.0050</td>
                </tr>
                <tr>
                  <th className="fw-semibold">
                    <a className="mktg-link-green" href="/features/transcriptions">AI Transcription</a>
                    {" "}
                    <a className="pricing-fn" href="#fn-9">9</a>
                  </th>
                  <td>$0.0350</td>
                  <td>$0.0325</td>
                  <td>$0.0300</td>
                  <td>$0.0275</td>
                  <td>$0.0250</td>
                  <td>$0.0200</td>
                </tr>
                <tr>
                  <th className="fw-semibold">Recording Retention <a className="pricing-fn" href="#fn-10">10</a></th>
                  <td>$0.00040</td>
                  <td>$0.00040</td>
                  <td>$0.00040</td>
                  <td>$0.00040</td>
                  <td>$0.00025</td>
                  <td>$0.00015</td>
                </tr>
                <tr className="pricing-table-enterprise-row">
                  <th className="fw-semibold">Enterprise</th>
                  <td colSpan="6">
                    Want a custom quote? Contact{" "}
                    <a href="mailto:support@avortyx.com" className="mktg-link-green">support@avortyx.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pricing-enterprise-cta">
            <div className="pricing-highlight-card">
              <h2 className="fw-bold mb-2">Enterprise</h2>
              <p className="text-muted mx-auto pricing-enterprise-desc">Running serious volume? Talk to us about custom rates, dedicated number pools and a routing setup designed around your network.</p>
              <a className="btn btn-td-green btn-lg" href="/p/contact"> <i className="fa-solid fa-envelope me-2" aria-hidden="true" />Contact Sales </a>
            </div>
          </div>
          <div className="pricing-breakdown-showcase">
            <h3 className="fw-bold mt-5">Call Cost Calculator</h3>
            <p className="text-muted pricing-calculator-intro">
              Inbound tracking rates already include forwarding the call to your buyer.
              <br />
              {" "}Pick a commit level and call path to see the per-minute cost of each leg.
            </p>
            <div className="pricing-calculator">
              <div className="pricing-calculator-controls">
                <label>
                  {" "}
                  <span>Minimum Monthly Commit</span>
                  <select className="form-select js-calc-commit" defaultValue="base">
                    <option value="base" data-rates={"{\"in_local\":0.05,\"in_toll_free\":0.055,\"out_local\":0.01,\"out_toll_free\":0.005,\"out_sip\":0.005}"}>Pay As You Go</option>
                    <option value="commit_50" data-rates={"{\"in_local\":0.045,\"in_toll_free\":0.05,\"out_local\":0.01,\"out_toll_free\":0.005,\"out_sip\":0.005}"}>$50</option>
                    <option value="commit_250" data-rates={"{\"in_local\":0.035,\"in_toll_free\":0.04,\"out_local\":0.01,\"out_toll_free\":0.005,\"out_sip\":0.005}"}>$250</option>
                    <option value="commit_1000" data-rates={"{\"in_local\":0.03,\"in_toll_free\":0.035,\"out_local\":0.01,\"out_toll_free\":0.005,\"out_sip\":0.005}"}>$1,000</option>
                    <option value="commit_4000" data-rates={"{\"in_local\":0.025,\"in_toll_free\":0.03,\"out_local\":0.01,\"out_toll_free\":0.005,\"out_sip\":0.005}"}>$4,000</option>
                    <option value="commit_8000" data-rates={"{\"in_local\":0.02,\"in_toll_free\":0.025,\"out_local\":0.01,\"out_toll_free\":0.005,\"out_sip\":0.005}"}>$8,000</option>
                  </select>
                </label>
                {" "}
                <label>
                  {" "}
                  <span>Receiving inbound calls with:</span>
                  <select className="form-select js-calc-inbound" defaultValue="in_local">
                    <option value="in_local">Local Tracking</option>
                    <option value="in_toll_free">Toll Free Tracking</option>
                  </select>
                </label>
                {" "}
                <label>
                  {" "}
                  <span>Connecting to a buyer with:</span>
                  <select className="form-select js-calc-buyer" defaultValue="out_toll_free">
                    <option value="out_toll_free">Toll Free</option>
                    <option value="out_sip">SIP</option>
                    <option value="out_local">Local</option>
                  </select>
                </label>
              </div>
              <div className="pricing-calculator-breakdown">
                <div className="pricing-calculator-row">
                  <div className="pricing-calculator-row-info">
                    <span className="js-calc-inbound-label pricing-calculator-row-label">Consumer Inbound to Local</span>
                    {" "}
                    <span className="js-calc-inbound-example pricing-calculator-row-example text-muted">+17191232222</span>
                  </div>
                  <div className="js-calc-inbound-rate pricing-calculator-row-rate">$0.0500 /min</div>
                </div>
                <div className="pricing-calculator-row">
                  <div className="pricing-calculator-row-info">
                    <span className="js-calc-buyer-label pricing-calculator-row-label">Forwarding to Buyer with Toll Free</span>
                    {" "}
                    <span className="js-calc-buyer-example pricing-calculator-row-example text-muted">+18001234444</span>
                  </div>
                  <div className="js-calc-buyer-rate pricing-calculator-row-rate">$0.0050 /min</div>
                </div>
                <div className="pricing-calculator-row pricing-calculator-row-total">
                  <div className="pricing-calculator-row-info"><span className="pricing-calculator-row-label">Total</span></div>
                  <div className="js-calc-total pricing-calculator-row-rate">$0.0550 /min</div>
                </div>
              </div>
              <p className="text-muted pricing-calculator-note">Per-minute cost of an inbound call connected to a buyer. Every call record in Avortyx shows the same leg-by-leg breakdown.</p>
            </div>
          </div>
          {/* monthly estimate: site.js prices the inputs on every plan from the rate table above */}
          <div className="avx-est" data-avx-est="" data-plans={JSON.stringify(EST_PLANS)}>
            <h3 className="fw-bold mt-5">Monthly Cost Estimator</h3>
            <p className="text-muted pricing-calculator-intro">Enter your expected volume to see an estimated monthly bill on every plan, and which one costs least.</p>
            <div className="avx-est-grid">
              <div className="avx-est-inputs">
                <label><span>Tracking numbers</span><input className="form-control" type="number" min="0" step="1" defaultValue="10" data-est="numbers" /></label>
                <label><span>Calls per month</span><input className="form-control" type="number" min="0" step="100" defaultValue="2000" data-est="calls" /></label>
                <label><span>Average minutes per call</span><input className="form-control" type="number" min="0" step="0.5" defaultValue="3" data-est="minutes" /></label>
                <label>
                  <span>Number type</span>
                  <select className="form-select" defaultValue="local" data-est="type">
                    <option value="local">Local</option>
                    <option value="tf">Toll free</option>
                  </select>
                </label>
                <label>
                  <span>Connecting to buyers with</span>
                  <select className="form-select" defaultValue="tf" data-est="buyer">
                    <option value="tf">Toll free or SIP (included)</option>
                    <option value="local">Local (+$0.0050 /min)</option>
                  </select>
                </label>
                <label><span>Calls transcribed (%)</span><input className="form-control" type="number" min="0" max="100" step="5" defaultValue="0" data-est="transcribed" /></label>
                <label><span>SMS sent per month</span><input className="form-control" type="number" min="0" step="100" defaultValue="0" data-est="sms" /></label>
                <label className="avx-est-check"><input className="form-check-input" type="checkbox" data-est="spam" /><span>Spam tag mitigation on every number</span></label>
              </div>
              <div className="avx-est-out">
                <ul className="avx-est-plans" aria-live="polite">
                  {EST_PLANS.map(([id, name]) => (
                    <li key={id} data-plan={id}>
                      <span className="avx-est-plan">{name}</span>
                      <span className="avx-est-best" hidden>Lowest cost</span>
                      <b className="avx-est-total">$0.00</b>
                    </li>
                  ))}
                </ul>
                <div className="avx-est-break">
                  <p className="avx-est-break-head">Breakdown on <b data-est-out="plan">Pay As You Go</b></p>
                  <dl>
                    <div><dt>Numbers</dt><dd data-est-out="numbers">$0.00</dd></div>
                    <div><dt>Call minutes</dt><dd data-est-out="calls">$0.00</dd></div>
                    <div><dt>Local buyer forwarding</dt><dd data-est-out="buyer">$0.00</dd></div>
                    <div><dt>AI transcription</dt><dd data-est-out="ai">$0.00</dd></div>
                    <div><dt>SMS</dt><dd data-est-out="sms">$0.00</dd></div>
                    <div><dt>Spam tag mitigation</dt><dd data-est-out="spam">$0.00</dd></div>
                    <div><dt>Usage</dt><dd data-est-out="usage">$0.00</dd></div>
                    <div className="avx-est-commit-row"><dt>Commit top-up</dt><dd data-est-out="topup">$0.00</dd></div>
                  </dl>
                </div>
              </div>
            </div>
            <p className="text-muted pricing-calculator-note">An estimate from the rates above, before taxes and fees. Each plan’s commit counts as the least you pay that month, so a plan never costs less than its commit. Calls are billed in whole minutes, so the average is rounded up.</p>
          </div>
        </div>
        <section className="pricing-faq-section">
          <div className="container pricing-faq-container">
            <h2 className="fw-bold text-center mb-4">Pricing questions</h2>
            <div className="accordion pricing-accordion" id="pricingFaq">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1"> Are there any onboarding fees? </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">No. Getting started on Avortyx costs nothing beyond your usage.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqInbound"> Do inbound rates cover both legs of the call? </button>
                </h2>
                <div id="faqInbound" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">Yes. A call connected to a buyer has two legs: the caller and your buyer. The local and toll-free tracking rates cover both, and statements list each leg separately so you can see what every call cost. The Outbound To Consumer rate is only for outbound dialing.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2"> Do you offer discounts? </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">
                    Yes, for high-volume customers.{" "}
                    <a href="/p/contact">Contact our team</a>
                    {" "}for details.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3"> What support is included? </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">Phone, live chat and email, from people who know call routing.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4"> Can someone walk me through my setup? </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">Yes. Book a live video session with one of our specialists by chat or email, and we will work through your campaigns with you.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-footnotes-section">
          <div className="container">
            <div className="pricing-footnotes mb-0">
              <p id="fn-1"><span className="pricing-fn">1</span> Monthly price for each phone number.</p>
              <p id="fn-2"><span className="pricing-fn">2</span> Monthly price to protect a number, covering carrier registration and spam-label removal.</p>
              <p id="fn-3">
                <span className="pricing-fn">3</span>
                {" "}Inbound calls to your local tracking numbers, billed per minute and rounded up to the nearest full minute. Forwarding the call to a buyer over toll-free or SIP is included in that rate; international and premium rate centers can add cost.
              </p>
              <p id="fn-4">
                <span className="pricing-fn">4</span>
                {" "}Inbound calls to your toll free tracking numbers, billed per minute and rounded up to the nearest full minute. Forwarding the call to a buyer over toll-free or SIP is included in that rate; international and premium rate centers can add cost.
              </p>
              <p id="fn-5">
                <span className="pricing-fn">5</span>
                {" "}Outbound dialing to consumers, such as lead automation and scheduled callback calls. It does not apply to inbound calls - connecting a buyer is included in the tracking rates. Outbound calls are billed on call duration, on the billing increment and minimum billable duration configured for your account - the Six Second Billing section of the rate sheet states yours.
              </p>
              <p id="fn-6">
                <span className="pricing-fn">6</span>
                {" "}Rate per outbound SMS message. Inbound SMS on your local numbers is free; inbound messages on toll-free numbers can bill at your toll-free inbound SMS rate.
              </p>
              <p id="fn-7">
                <span className="pricing-fn">7</span>
                {" "}Rate per billable schedule step run against a lead, such as a webhook, email, wait or choice. SMS is not billed here; a call a schedule dials is, on top of the call itself. This fee is charged when the following schedule action types are processed:{" "}
                <span className="pricing-footnote-badge">AWS S3 Upload</span>
                {" "}
                <span className="pricing-footnote-badge">Add To Schedule</span>
                {" "}
                <span className="pricing-footnote-badge">Block Lead</span>
                {" "}
                <span className="pricing-footnote-badge">Choice</span>
                {" "}
                <span className="pricing-footnote-badge">Email</span>
                {" "}
                <span className="pricing-footnote-badge">FTP Upload</span>
                {" "}
                <span className="pricing-footnote-badge">Infusionsoft</span>
                {" "}
                <span className="pricing-footnote-badge">Mailchimp</span>
                {" "}
                <span className="pricing-footnote-badge">Mailgun</span>
                {" "}
                <span className="pricing-footnote-badge">Manage Zoho CRM</span>
                {" "}
                <span className="pricing-footnote-badge">Modify Lead</span>
                {" "}
                <span className="pricing-footnote-badge">Offer Create</span>
                {" "}
                <span className="pricing-footnote-badge">Opt-Out Lead</span>
                {" "}
                <span className="pricing-footnote-badge">Restart Schedule</span>
                {" "}
                <span className="pricing-footnote-badge">Schedule Create</span>
                {" "}
                <span className="pricing-footnote-badge">Sengrid</span>
                {" "}
                <span className="pricing-footnote-badge">Wait For</span>
                {" "}
                <span className="pricing-footnote-badge">Webhook POST</span>
              </p>
              <p id="fn-8"><span className="pricing-fn">8</span> Charged when an inbound call has nowhere eligible to go and is rejected.</p>
              <p id="fn-9"><span className="pricing-fn">9</span> Per minute of transcribed audio.</p>
              <p id="fn-10"><span className="pricing-fn">10</span> Monthly price per minute of recordings kept beyond the free 90 days.</p>
              <p className="mb-0">If more than 20% of call attempts in the last 30 days were abandoned (unanswered, 0 seconds), a $0.005 surcharge applies to each call.</p>
            </div>
          </div>
        </section>
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
