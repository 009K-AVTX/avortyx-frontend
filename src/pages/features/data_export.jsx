// /features/data_export.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Data Exports | Calls, leads and recordings to CSV on a schedule | Avortyx",
  description: "Export Avortyx calls, leads, recordings, messages and logs to CSV, on demand or on a recurring schedule delivered by email.",
  bodyClass: "avortyx_marketing features_data_export ",
  layout: "feature",
}

export default function DataExport() {
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
          <h1 className="fw-bold mb-2">Data Exports</h1>
          <p className="lead mktg-subpage-hero-subtitle">Calls, leads, recordings and messages to CSV, whenever you ask or on a schedule that lands in your team’s inbox.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p>Your call data belongs in your own systems too. Build an export for exactly the records you need, run it once, or let it run on a schedule.</p>
            <h3>Nearly everything is exportable</h3>
            <p>Calls and their recordings, leads and contacts, text messages, phone numbers, charge rollups for billing reconciliation, buyer suppression contacts, and change, system and webhook logs can all be exported.</p>
            <h3>Only the columns you want</h3>
            <p>Pick the columns, then narrow the records with a date range, full-text search and the same filters you use everywhere else in Avortyx.</p>
            <h3>Exports that run themselves</h3>
            <p>
              Schedule an export to run{" "}
              <strong>daily, weekly or monthly</strong>
              {" "}at the time you choose. Each run picks up a rolling window of new records, keeping your warehouse and reports current without anyone remembering to click export.
            </p>
            <h3>Sent straight to the team</h3>
            <p>
              Finished files can be{" "}
              <strong>emailed to as many recipients as you like</strong>
              {" "}the moment they are ready: analysts, finance or a shared inbox. Anyone can unsubscribe from a notification.
            </p>
            <h3>Large pulls, no waiting</h3>
            <p>Exports build in the background and arrive as a zipped CSV, so even very large ones download quickly. Caller numbers are redacted automatically for users without permission to see them.</p>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/api" className="btn btn-td-green">REST API</a>
              {" "}
              <a href="/features/custom_webhook" className="btn btn-outline-td-green">Custom Webhooks</a>
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
