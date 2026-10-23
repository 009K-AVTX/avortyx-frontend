// /pricing.html
import Bolt from '../components/Bolt.jsx'
export const meta = {
  title: "Pricing | Clear rates, settled per call | Avortyx",
  description: "Avortyx pricing: $39 a month for the platform and $0.39 per connected minute, paid from a prepaid balance, with a cost breakdown on every call. No setup fees; Enterprise rates on request.",
  bodyClass: "avortyx_marketing pricing ",
  layout: "site",
}

// Self-Serve rates. The rate list and the Monthly Cost Estimator (site.js) both read these.
const RATES = { platform: 39, minute: 0.39, number: 15, recording: 0.003, voip: 0.008, rejected: 0.012 }

const money = (v, digits = 2) => '$' + v.toFixed(digits)

// [charge, what it covers, rate, unit]
const RATE_ROWS = [
  ['Platform access', 'Routing, live reporting, call records and the API, for your whole account.', money(RATES.platform), 'per month'],
  ['Connected minutes', 'Counted from answer to hang-up and rounded up to the next whole minute. International and premium destinations can cost more.', money(RATES.minute), 'per minute'],
  ['Tracking numbers', 'Paid once, when the number is added to your account.', money(RATES.number), 'per number'],
  ['Call recording', 'Only on the calls you choose to record.', money(RATES.recording, 3), 'per recorded minute'],
  ['VoIP Shield', 'Spam and robocall screening before a call reaches your buyer.', money(RATES.voip, 3), 'per screened call'],
  ['Rejected calls', 'Calls turned away before routing, such as when no buyer is eligible.', money(RATES.rejected, 3), 'per call'],
]

const Check = ({ children }) => <li><i className="fa-solid fa-circle-check" aria-hidden="true" />{children}</li>

export default function Pricing() {
  return (
    <main>
      <section className="pricing-hero">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <h1 className="fw-bold">Clear rates, settled per call</h1>
            <p className="text-muted lead">A flat platform fee each month and a per-minute rate on connected calls. Every call record shows exactly what that call cost.</p>
          </div>
        </div>
      </section>
      <section className="pricing-body">
        <div className="container">
          <div className="avx-plans">
            <div className="avx-plan avx-plan-main">
              <div className="avx-plan-head">
                <h2 className="avx-plan-name">Self-Serve</h2>
                <p className="avx-plan-for">For networks launching their first campaigns through to steady daily volume.</p>
              </div>
              <div className="avx-plan-price">
                <p><b>{money(RATES.platform, 0)}</b><span>per month, platform access</span></p>
                <p><b>{money(RATES.minute)}</b><span>per connected minute</span></p>
              </div>
              <ul className="avx-plan-list">
                <Check>Fund your balance by card or crypto, whenever you like</Check>
                <Check>Auto-recharge and low-balance alerts keep campaigns live</Check>
                <Check>A cost breakdown on every call record</Check>
                <Check>No setup or onboarding fees</Check>
              </ul>
              <a className="btn btn-td-green btn-lg avx-ra-cta" href="/request-access"><Bolt />Request Access</a>
            </div>
            <div className="avx-plan">
              <div className="avx-plan-head">
                <h2 className="avx-plan-name">Enterprise</h2>
                <p className="avx-plan-for">For networks moving serious volume that want rates and infrastructure of their own.</p>
              </div>
              <div className="avx-plan-price">
                <p><b>Custom</b><span>quoted for your volume</span></p>
              </div>
              <ul className="avx-plan-list">
                <Check>Tiered per-minute rates as your volume grows</Check>
                <Check>Reserved number pools</Check>
                <Check>99.99% routing uptime SLA</Check>
                <Check>Around-the-clock priority support</Check>
                <Check>A named account manager</Check>
              </ul>
              <a className="btn btn-outline-td-green btn-lg" href="/p/contact"><i className="fa-solid fa-envelope me-2" aria-hidden="true" />Contact Sales</a>
            </div>
          </div>
          <div className="avx-pricing-head">
            <h2 className="fw-bold">Self-Serve rates</h2>
            <p className="text-muted">Charges come out of your prepaid balance, and only when a call uses them.</p>
          </div>
          <ul className="avx-rates">
            {RATE_ROWS.map(([name, desc, rate, unit]) => (
              <li key={name}>
                <div className="avx-rate-what">
                  <span className="avx-rate-name">{name}</span>
                  <span className="avx-rate-desc">{desc}</span>
                </div>
                <div className="avx-rate-cost"><b>{rate}</b><span>{unit}</span></div>
              </li>
            ))}
            <li className="avx-rates-ent">
              <div className="avx-rate-what">
                <span className="avx-rate-name">Volume pricing</span>
                <span className="avx-rate-desc">
                  Routing at scale? Ask{" "}
                  <a href="mailto:support@avortyx.com" className="mktg-link-green">support@avortyx.com</a>
                  {" "}for an Enterprise quote.
                </span>
              </div>
            </li>
          </ul>
          <p className="text-muted text-center pricing-calculator-note">Prices in U.S. dollars, before taxes and carrier pass-through fees.</p>
          {/* monthly estimate: site.js prices the inputs with the rates above */}
          <div className="avx-est" data-avx-est="" data-rates={JSON.stringify(RATES)}>
            <div className="avx-pricing-head">
              <h2 className="fw-bold">Monthly Cost Estimator</h2>
              <p className="text-muted">Enter your expected volume to see an estimated bill for your first month and each month after.</p>
            </div>
            <div className="avx-est-grid">
              <div className="avx-est-inputs">
                <label><span>Tracking numbers you add</span><input className="form-control" type="number" min="0" step="1" defaultValue="10" data-est="numbers" /></label>
                <label><span>Calls per month</span><input className="form-control" type="number" min="0" step="100" defaultValue="2000" data-est="calls" /></label>
                <label><span>Average minutes per call</span><input className="form-control" type="number" min="0" step="0.5" defaultValue="3" data-est="minutes" /></label>
                <label><span>Calls recorded (%)</span><input className="form-control" type="number" min="0" max="100" step="5" defaultValue="0" data-est="recorded" /></label>
                <label><span>Rejected calls per month</span><input className="form-control" type="number" min="0" step="10" defaultValue="0" data-est="rejected" /></label>
                <label className="avx-est-check"><input className="form-check-input" type="checkbox" defaultChecked data-est="voip" /><span>VoIP Shield on every call</span></label>
              </div>
              <div className="avx-est-out">
                <ul className="avx-est-plans" aria-live="polite">
                  <li className="avx-on"><span className="avx-est-plan">First month</span><b className="avx-est-total" data-est-out="first">$0.00</b></li>
                  <li><span className="avx-est-plan">Each month after</span><b className="avx-est-total" data-est-out="monthly">$0.00</b></li>
                </ul>
                <div className="avx-est-break">
                  <p className="avx-est-break-head">Breakdown on <b>Self-Serve</b></p>
                  <dl>
                    <div><dt>Platform access</dt><dd data-est-out="platform">$0.00</dd></div>
                    <div><dt>Connected minutes</dt><dd data-est-out="calls">$0.00</dd></div>
                    <div><dt>Call recording</dt><dd data-est-out="recording">$0.00</dd></div>
                    <div><dt>VoIP Shield</dt><dd data-est-out="voip">$0.00</dd></div>
                    <div><dt>Rejected calls</dt><dd data-est-out="rejected">$0.00</dd></div>
                    <div><dt>Monthly total</dt><dd data-est-out="usage">$0.00</dd></div>
                    <div><dt>Tracking numbers, first month only</dt><dd data-est-out="numbers">$0.00</dd></div>
                  </dl>
                </div>
              </div>
            </div>
            <p className="text-muted text-center pricing-calculator-note">An estimate from the rates above, before taxes and fees. Calls are billed in whole minutes, so the average is rounded up. Tracking numbers are paid once, so they count only in the month you add them.</p>
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
                  <div className="accordion-body text-muted">No. You pay the monthly platform fee and what your calls use, nothing more to get started.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBalance"> How do I pay? </button>
                </h2>
                <div id="faqBalance" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">Avortyx runs on a prepaid balance. Add funds by card or crypto whenever you like, or turn on auto-recharge so the balance refills itself, and set an alert for when it gets low. The platform fee and each call’s charges are taken from the balance, and every call record shows its own cost.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2"> Do you offer discounts? </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">
                    Yes. Enterprise accounts get tiered per-minute rates that drop as volume grows.{" "}
                    <a href="/p/contact">Contact our team</a>
                    {" "}for a quote.
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
