// /pricing.html
import Bolt from '../components/Bolt.jsx'
export const meta = {
  title: "Pricing | One portal fee, then only what you use | Avortyx",
  description: "Avortyx pricing: a $49.99 portal fee every 30 days, $0.45 per call minute and per-call charges only for what you use, from a prepaid balance. No onboarding fees, every charge itemized.",
  bodyClass: "avortyx_marketing pricing ",
  layout: "site",
}

// Standard account defaults. The rate table and the Monthly Cost Estimator (site.js) both read these.
const RATES = { portal: 49.99, minute: 0.45, number: 20, recording: 0.0025, voip: 0.01, rejected: 0.015 }

const money = (v, digits = 2) => '$' + v.toFixed(digits)

// [charge, feature page or null, rate, unit, footnote]
const RATE_ROWS = [
  ['Portal Access', null, money(RATES.portal), 'every 30 days', 1],
  ['Call Time', '/features/call_tracking', money(RATES.minute), 'per minute', 2],
  ['Tracking Number', '/features/call_tracking', money(RATES.number), 'per number, one time', 3],
  ['Call Recording', '/features/call_recordings', money(RATES.recording, 4), 'per minute', 4],
  ['VoIP Shield', null, money(RATES.voip), 'per call', 5],
  ['Rejected Call', null, money(RATES.rejected, 3), 'per call', 6],
]

export default function Pricing() {
  return (
    <main>
      <section className="pricing-hero">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <h1 className="fw-bold">Pay for the calls you route</h1>
            <p className="text-muted lead">One account: a monthly portal fee, plus only the minutes and calls you use. No onboarding fees, and every charge itemized on the call.</p>
          </div>
        </div>
      </section>
      <section className="pricing-body">
        <div className="container">
          <div className="avx-plan-grid">
            <div className="pricing-highlight-card avx-plan-card">
              <h2 className="fw-bold mb-1">Standard Account</h2>
              <p className="avx-plan-price">
                <span><b>{money(RATES.portal)}</b> portal access every 30 days</span>
                <span className="avx-plan-plus" aria-hidden="true">+</span>
                <span><b>{money(RATES.minute)}</b> per call minute</span>
              </p>
              <ul className="avx-ent-list avx-plan-list">
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />Prepaid balance you can top up at any time, by card or crypto</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />Optional automatic top-up when your balance runs low</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />Every charge itemized per call</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />No onboarding fees</li>
              </ul>
              <a className="btn btn-td-green btn-lg avx-ra-cta" href="/request-access"><Bolt />Request Access</a>
            </div>
            <div className="pricing-highlight-card avx-plan-card">
              <h2 className="fw-bold mb-1">Enterprise</h2>
              <p className="avx-plan-price"><span><b>Custom</b> rates for high volume</span></p>
              <p className="text-muted pricing-enterprise-desc">Negotiated per-minute rates, dedicated number pools and a routing setup designed around your network.</p>
              <ul className="avx-ent-list avx-plan-list">
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />Volume-based per-minute pricing</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />Dedicated number pools</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />99.99% routing uptime SLA</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />24/7 dedicated support</li>
                <li><i className="fa-solid fa-circle-check" aria-hidden="true" />Dedicated account manager</li>
              </ul>
              <a className="btn btn-outline-td-green btn-lg" href="/p/contact"><i className="fa-solid fa-envelope me-2" aria-hidden="true" />Contact Sales</a>
            </div>
          </div>
          <div className="text-center mt-5 mb-4">
            <h2 className="fw-bold">Standard account rates</h2>
            <p className="text-muted">You pay only for what each call uses, drawn from your prepaid balance.</p>
          </div>
          <div className="pricing-table-wrap avx-rates-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Charge</th>
                  <th>Rate</th>
                  <th>Billed</th>
                </tr>
              </thead>
              <tbody>
                {RATE_ROWS.map(([name, href, rate, unit, fn]) => (
                  <tr key={name}>
                    <th className="fw-semibold">
                      {href ? <a className="mktg-link-green" href={href}>{name}</a> : name}
                      {" "}
                      <a className="pricing-fn" href={'#fn-' + fn}>{fn}</a>
                    </th>
                    <td>{rate}</td>
                    <td className="avx-rate-unit">{unit}</td>
                  </tr>
                ))}
                <tr className="pricing-table-enterprise-row">
                  <th className="fw-semibold">Enterprise</th>
                  <td colSpan="2">
                    Want a custom quote? Contact{" "}
                    <a href="mailto:support@avortyx.com" className="mktg-link-green">support@avortyx.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted text-center pricing-calculator-note">No onboarding fees. Rates shown are standard account defaults, before taxes and fees.</p>
          {/* monthly estimate: site.js prices the inputs with the rates above */}
          <div className="avx-est" data-avx-est="" data-rates={JSON.stringify(RATES)}>
            <h3 className="fw-bold mt-5">Monthly Cost Estimator</h3>
            <p className="text-muted pricing-calculator-intro">Enter your expected volume to see an estimated bill for your first month and each month after.</p>
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
                  <p className="avx-est-break-head">Breakdown on the <b>Standard Account</b></p>
                  <dl>
                    <div><dt>Portal access</dt><dd data-est-out="portal">$0.00</dd></div>
                    <div><dt>Call time</dt><dd data-est-out="calls">$0.00</dd></div>
                    <div><dt>Call recording</dt><dd data-est-out="recording">$0.00</dd></div>
                    <div><dt>VoIP Shield</dt><dd data-est-out="voip">$0.00</dd></div>
                    <div><dt>Rejected calls</dt><dd data-est-out="rejected">$0.00</dd></div>
                    <div><dt>Monthly total</dt><dd data-est-out="usage">$0.00</dd></div>
                    <div><dt>Tracking numbers, first month only</dt><dd data-est-out="numbers">$0.00</dd></div>
                  </dl>
                </div>
              </div>
            </div>
            <p className="text-muted pricing-calculator-note">An estimate from the rates above, before taxes and fees. Calls are billed in whole minutes, so the average is rounded up. Tracking numbers are a one-time fee, so they count only in the month you add them.</p>
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
                  <div className="accordion-body text-muted">No. Getting started on Avortyx costs nothing beyond the portal fee and your usage.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBalance"> How do I pay? </button>
                </h2>
                <div id="faqBalance" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">From a prepaid balance. Top it up at any time by card or crypto, or switch on automatic top-up so it refills when it runs low, and set a low-balance alert. The portal fee, numbers, minutes and per-call charges are drawn from the balance, and every call shows what it cost.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2"> Do you offer discounts? </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                  <div className="accordion-body text-muted">
                    Yes, for high-volume customers: Enterprise accounts get volume-based per-minute rates.{" "}
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
              <p id="fn-1"><span className="pricing-fn">1</span> One flat charge every 30 days for access to the platform. Your billing page shows when it was last charged and when it is next due.</p>
              <p id="fn-2"><span className="pricing-fn">2</span> Per connected minute of each call, rounded up to the nearest whole minute. International and premium rate centers can add cost.</p>
              <p id="fn-3"><span className="pricing-fn">3</span> A one-time fee when you add a number to your account.</p>
              <p id="fn-4"><span className="pricing-fn">4</span> Charged only on calls you record, per minute recorded.</p>
              <p id="fn-5"><span className="pricing-fn">5</span> Each call is screened for spam.</p>
              <p id="fn-6"><span className="pricing-fn">6</span> Charged when an inbound call is declined before routing.</p>
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
