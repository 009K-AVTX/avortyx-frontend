// /features/zoho_crm.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Zoho CRM for Avortyx | Call logs, lead sync and click-to-call",
  description: "Avortyx logs calls in Zoho CRM, keeps leads and contacts in sync, and adds click-to-call and power dialing to the Zoho interface.",
  bodyClass: "avortyx_marketing features_zoho_crm ",
  layout: "feature",
}

export default function ZohoCrm() {
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
          <h1 className="fw-bold mb-2">
            Avortyx +{" "}
            <img alt="Zoho CRM" className="integration-title-logo" src="/assets/avx-site/img/zoho_crm.webp" />
          </h1>
          <p className="lead mktg-subpage-hero-subtitle">Call logs, lead and contact sync, and click-to-call dialing, all inside Zoho CRM.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p>Zoho CRM users can work leads and contacts without leaving Zoho: Avortyx logs every call, keeps records in sync and puts dialing a click away.</p>
            <p>Calls, notes, leads and contacts stay current in Zoho as Avortyx handles the phone side.</p>
            <p>Agents get click-to-call, power dialing, automatic call logging and automatic lead and contact syncing.</p>
            <h3>For Zoho users</h3>
            <ul>
              <li>Agents with a matching Avortyx account are signed in to Avortyx automatically.</li>
              <li>
                Avortyx agent details sync to Zoho users when these user fields exist in Zoho:
                <ul>
                  <li>AVXPhoneNumber</li>
                  <li>AVXAgentId</li>
                  <li>AVXAgentEmail</li>
                  <li>AVXAgentCallCenterId</li>
                </ul>
              </li>
              <li>Click-to-call dialing from inside the Zoho CRM interface.</li>
            </ul>
            <h3>Zoho actions in your call flow</h3>
            <p>Avortyx can manage Zoho records as a step in any call flow. The available actions:</p>
            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Action</th>
                    <th>What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Create Module Entry</strong></td>
                    <td>Adds a new record to any Zoho module</td>
                  </tr>
                  <tr>
                    <td><strong>Update Module Entry</strong></td>
                    <td>Changes fields on an existing record</td>
                  </tr>
                  <tr>
                    <td><strong>Create/Update Module Entry</strong></td>
                    <td>Updates the record if it exists, and creates it if not</td>
                  </tr>
                  <tr>
                    <td><strong>Convert Lead</strong></td>
                    <td>Turns a Zoho lead into a contact, account and deal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Modules you can write to</h3>
            <p>Create and update actions work with these Zoho modules:</p>
            <div className="row g-2 mb-4">
              <div className="col-md-6">
                <ul className="mb-0">
                  <li>Leads</li>
                  <li>Contacts</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li>Calls</li>
                  <li>Notes</li>
                </ul>
              </div>
            </div>
            <p>Notes can be attached to any Zoho record type: Leads, Contacts, Accounts, Deals, Campaigns, Tasks, Cases, Events, Solutions or Products.</p>
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
