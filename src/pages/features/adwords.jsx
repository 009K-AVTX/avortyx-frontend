// /features/adwords.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Google Ads + Avortyx | Call conversions back to Google Ads",
  description: "Avortyx reports each finished call from a Google Ads click back to Google Ads as a conversion, valued at the call’s revenue, so bidding learns which clicks become calls.",
  bodyClass: "avortyx_marketing integrations_adwords ",
  layout: "feature",
}

export default function Adwords() {
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
          <h1 className="fw-bold mb-2">Google Ads Integration</h1>
          <p className="lead mktg-subpage-hero-subtitle">Tell Google Ads which clicks turned into calls, and what each call was worth, so Smart Bidding chases revenue instead of clicks.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="google-ads-install rounded-3 p-4 mb-4">
              <p className="fw-bold mb-2">Included with every Avortyx account</p>
              <p className="mb-3">In Avortyx, open Integrations and click <strong>+ Install</strong> on Google Ads to link your Google account.</p>
            </div>
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">From Ad Click to Reported Conversion</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-link" aria-hidden="true" /></div>
                  <div className="flow-node-label">Link Google</div>
                  <div className="flow-node-desc">Sign in with your Google account</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-building" aria-hidden="true" /></div>
                  <div className="flow-node-label">Pick the Account</div>
                  <div className="flow-node-desc">The Google Ads client account to report to</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-arrows-left-right" aria-hidden="true" /></div>
                  <div className="flow-node-label">Map Offers</div>
                  <div className="flow-node-desc">Each offer to a conversion action</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-secondary text-white"><i className="fa-solid fa-phone-flip" aria-hidden="true" /></div>
                  <div className="flow-node-label">Call Finishes</div>
                  <div className="flow-node-desc">Its click ID is read from the token</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-chart-line" aria-hidden="true" /></div>
                  <div className="flow-node-label">Conversion Reported</div>
                  <div className="flow-node-desc">At the revenue the call earned</div>
                </div>
              </div>
            </div>
            <h3>Let Google Ads see the calls it earned</h3>
            <p>
              Every Google ad click lands on your page with a click ID. When that ID travels onto the call as a{" "}
              <a href="/features/dynamic_number_insertion">token</a>
              , Avortyx reports the finished call to Google Ads as a conversion, and your campaigns start bidding for the clicks that actually become revenue.
            </p>
            <ul className="text-muted">
              <li><strong>Link Google</strong> — give Avortyx access from the integration page.</li>
              <li>
                <strong>Pick a client account</strong>
                {" "}— conversions go to the Google Ads client account you choose (manager accounts are not supported).
              </li>
              <li>
                <strong>Match offers to conversion actions</strong>
                {" "}— use an existing conversion action or make a new one. By default the click ID comes from the{" "}
                <code>gclid</code>
                {" "}token.
              </li>
              <li>
                <strong>Every finished call counts</strong>
                {" "}— any finished call on a matched offer that carries a click ID is reported as a conversion, valued at what the call earned.
              </li>
            </ul>
            <div className="google-ads-click-reveal js-google-ads-click-reveal rounded-3 p-4 my-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <h5 className="fw-bold mt-0 mb-0">What arrives with a Google Ads click</h5>
                <span className="badge google-ads-click-reveal-badge js-click-reveal-badge">Sample values</span>
              </div>
              <p className="text-muted mb-3 js-click-reveal-caption">Sample values shown. Visit this page from a Google ad and the table fills in with what your own click brought.</p>
              <table className="table table-sm mb-0">
                <tbody>
                  <tr className="js-click-reveal-row" data-click-key="gclid">
                    <th scope="row" className="google-ads-click-reveal-key">Google click ID <code>gclid</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value">Cj0KCQjw-SAMPLE-click-id</td>
                  </tr>
                  <tr className="js-click-reveal-row d-none" data-click-key="gbraid">
                    <th scope="row" className="google-ads-click-reveal-key">Google app click ID (iOS) <code>gbraid</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value" />
                  </tr>
                  <tr className="js-click-reveal-row d-none" data-click-key="wbraid">
                    <th scope="row" className="google-ads-click-reveal-key">Google web click ID (iOS) <code>wbraid</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value" />
                  </tr>
                  <tr className="js-click-reveal-row" data-click-key="utm_source">
                    <th scope="row" className="google-ads-click-reveal-key">Source <code>utm_source</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value">google</td>
                  </tr>
                  <tr className="js-click-reveal-row" data-click-key="utm_medium">
                    <th scope="row" className="google-ads-click-reveal-key">Medium <code>utm_medium</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value">cpc</td>
                  </tr>
                  <tr className="js-click-reveal-row" data-click-key="utm_campaign">
                    <th scope="row" className="google-ads-click-reveal-key">Campaign <code>utm_campaign</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value">final-expense-calls</td>
                  </tr>
                  <tr className="js-click-reveal-row" data-click-key="utm_term">
                    <th scope="row" className="google-ads-click-reveal-key">Keyword <code>utm_term</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value">final expense insurance</td>
                  </tr>
                  <tr className="js-click-reveal-row" data-click-key="utm_content">
                    <th scope="row" className="google-ads-click-reveal-key">Ad variant <code>utm_content</code></th>
                    <td className="google-ads-click-reveal-value js-click-reveal-value">ad-a</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/dynamic_number_insertion" className="btn btn-outline-td-green">Dynamic Number Insertion</a>
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
