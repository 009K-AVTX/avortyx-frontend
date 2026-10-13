// /features/integrations.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Integrations | Connect Avortyx to your stack | Avortyx",
  description: "Connect Avortyx to your carriers, trackers, CRMs, ad platforms and AI voice agents, so call data flows wherever your team works.",
  bodyClass: "avortyx_marketing features_integrations ",
  layout: "site",
}

export default function Integrations() {
  return (
    <main className="avx-integrations">
      <section className="bg-light py-5">
        <div className="container">
          <div className="mktg-section-header">
            <div className="mktg-subpage-hero-nav mb-3">
              <a href="/features" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Features </a>
            </div>
            <h1 className="fw-bold">Integrations</h1>
            <p className="text-muted lead">Carriers, affiliate trackers, CRMs, ad platforms and AI voice agents: plug Avortyx into the stack you already run, and every call’s data goes where your team works.</p>
          </div>
        </div>
      </section>
      <section className="mktg-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/voice_agents/elevenlabs" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with ElevenLabs" className="mx-auto d-block mb-3" src="/assets/avx-site/img/elevenlabs.webp" />
                  <p className="text-dark small mb-1">ElevenLabs</p>
                  <p className="text-muted small mb-0">AI voice agents on your calls</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/zoho_crm" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Zoho CRM" className="mx-auto d-block mb-3" src="/assets/avx-site/img/zoho_crm.webp" />
                  <p className="text-dark small mb-1">Zoho CRM</p>
                  <p className="text-muted small mb-0">Call logs and click-to-call in Zoho</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/aws_s3" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with AWS S3" className="mx-auto d-block mb-3" src="/assets/avx-site/img/aws_s3.webp" />
                  <p className="text-dark small mb-1">AWS S3</p>
                  <p className="text-muted small mb-0">Recordings in your own bucket</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/cake" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Cake" className="mx-auto d-block mb-3" src="/assets/avx-site/img/cake.webp" />
                  <p className="text-dark small mb-1">Cake</p>
                  <p className="text-muted small mb-0">Call conversions back to CAKE</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/adwords" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Google Ads" className="mx-auto d-block mb-3" src="/assets/avx-site/img/ga.webp" />
                  <p className="text-dark small mb-1">Google Ads</p>
                  <p className="text-muted small mb-0">Calls reported as conversions</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/hasoffers" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with HasOffers" className="mx-auto d-block mb-3" src="/assets/avx-site/img/hasoffers.webp" />
                  <p className="text-dark small mb-1">HasOffers</p>
                  <p className="text-muted small mb-0">Phone conversions on the right offer</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/infusionsoft" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Infusionsoft" className="mx-auto d-block mb-3" src="/assets/avx-site/img/infusionsoft-blue.webp" />
                  <p className="text-dark small mb-1">Infusionsoft</p>
                  <p className="text-muted small mb-0">Calls and texts on each contact</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/linktrust" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Linktrust" className="mx-auto d-block mb-3" src="/assets/avx-site/img/linktrust.webp" />
                  <p className="text-dark small mb-1">Linktrust</p>
                  <p className="text-muted small mb-0">Calls credited to affiliates</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/mailchimp" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with MailChimp" className="mx-auto d-block mb-3" src="/assets/avx-site/img/mailchimp.webp" />
                  <p className="text-dark small mb-1">MailChimp</p>
                  <p className="text-muted small mb-0">Emails triggered by call outcomes</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/mailgun" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Mailgun" className="mx-auto d-block mb-3" src="/assets/avx-site/img/mailgun.webp" />
                  <p className="text-dark small mb-1">Mailgun</p>
                  <p className="text-muted small mb-0">Delivery for call follow-ups</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/salesforce" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Salesforce" className="mx-auto d-block mb-3" src="/assets/avx-site/img/salesforce.webp" />
                  <p className="text-dark small mb-1">Salesforce</p>
                  <p className="text-muted small mb-0">Call data on every lead</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/sendgrid" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Sendgrid" className="mx-auto d-block mb-3" src="/assets/avx-site/img/sendgrid.webp" />
                  <p className="text-dark small mb-1">Sendgrid</p>
                  <p className="text-muted small mb-0">Leads into lists and sequences</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/slack" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Slack" className="mx-auto d-block mb-3" src="/assets/avx-site/img/slack.webp" />
                  <p className="text-dark small mb-1">Slack</p>
                  <p className="text-muted small mb-0">Live call and lead alerts</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/typeform" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Typeform" className="mx-auto d-block mb-3" src="/assets/avx-site/img/typeform.webp" />
                  <p className="text-dark small mb-1">Typeform</p>
                  <p className="text-muted small mb-0">Form answers become calls</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/voluum" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Voluum" className="mx-auto d-block mb-3" src="/assets/avx-site/img/voluum.webp" />
                  <p className="text-dark small mb-1">Voluum</p>
                  <p className="text-muted small mb-0">Call revenue in campaign ROI</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/zapier" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Zapier" className="mx-auto d-block mb-3" src="/assets/avx-site/img/zapier.webp" />
                  <p className="text-dark small mb-1">Zapier</p>
                  <p className="text-muted small mb-0">Call events to thousands of apps</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/plivo" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Plivo" className="mx-auto d-block mb-3" src="/assets/avx-site/img/plivo.webp" />
                  <p className="text-dark small mb-1">Plivo</p>
                  <p className="text-muted small mb-0">Plivo numbers, Avortyx routing</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/telnyx" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Telnyx" className="mx-auto d-block mb-3" src="/assets/avx-site/img/telnyx.webp" />
                  <p className="text-dark small mb-1">Telnyx</p>
                  <p className="text-muted small mb-0">Telnyx numbers, Avortyx routing</p>
                </div>
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a href="/features/twilio" className="text-decoration-none">
                <div className="integration-card h-100 text-center p-4">
                  <img alt="Integrate with Twilio" className="mx-auto d-block mb-3" src="/assets/avx-site/img/twilio.webp" />
                  <p className="text-dark small mb-1">Twilio</p>
                  <p className="text-muted small mb-0">Twilio numbers, Avortyx routing</p>
                </div>
              </a>
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
