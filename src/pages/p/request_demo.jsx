// /p/request_demo.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Request a Demo | See Avortyx route your calls",
  description: "Walk through Avortyx with our team: first-ring routing, intent scoring, the live monitor and pricing for your volume.",
  bodyClass: "avortyx_marketing request_demo ",
  layout: "site",
}

export default function RequestDemo() {
  return (
    <main>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <div className="mktg-section-header text-center">
                <h1 className="fw-bold mb-3">See Avortyx with your traffic</h1>
                <p className="text-muted lead">A walkthrough built around your verticals, buyers and volume, not a generic slideshow.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-5">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">What we will cover</h5>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary me-2 mt-1" style={{ color: "#2563eb" }} aria-hidden="true" />
                      {" "}
                      <span>How a call is scored and routed on the first ring, using your offers</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary me-2 mt-1" style={{ color: "#2563eb" }} aria-hidden="true" />
                      {" "}
                      <span>The live monitor, with barge and whisper on in-flight calls</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary me-2 mt-1" style={{ color: "#2563eb" }} aria-hidden="true" />
                      {" "}
                      <span>Connecting your carriers, trackers and CRM</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <i className="fa-solid fa-check-circle text-primary me-2 mt-1" style={{ color: "#2563eb" }} aria-hidden="true" />
                      {" "}
                      <span>Reporting by campaign, buyer and publisher, and how payouts settle</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="fa-solid fa-check-circle text-primary me-2 mt-1" style={{ color: "#2563eb" }} aria-hidden="true" />
                      {" "}
                      <span>Pricing for your call volume</span>
                    </li>
                  </ul>
                  <hr className="my-4" />
                  <div className="mt-4">
                    <blockquote className="blockquote fs-6 mb-3 text-center">
                      <p className="fst-italic text-secondary mb-0">"The live monitor alone is worth it. For the first time we can see what our buyers are actually doing with the calls we send them."</p>
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <span className="rounded-circle d-inline-flex align-items-center justify-content-center fw-semibold text-white flex-shrink-0" style={{ width: 44, height: 44, background: "#1d4ed8" }} aria-hidden="true">MW</span>
                      <div className="text-start">
                        <div className="fw-bold text-white lh-sm">Marcus Webb</div>
                        <div className="text-muted small">COO, Ringwell</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <form className="simple_form contact-form" id="new_contact_request" action="https://avortyx.com/contact_requests" acceptCharset="UTF-8" method="post">
                    <input name="utf8" type="hidden" value="✓" autoComplete="off" />
                    <input type="hidden" name="authenticity_token" value="digQkPnDR-E2UWUdiOZgZsrPKEam7x-dk0KSQXKsCIZYrR4G5kX6g37hbbE_8-mrnGijM8MKC9lVAoU1xW1UUw" autoComplete="off" />
                    <div className="row mb-3 js-form-validation form-group string required contact_request_name">
                      <label className="col-sm-3 col-form-label text-start text-sm-end string required" htmlFor="contact_request_first_name">
                        <abbr title="required">*</abbr>
                        {" "}Name
                      </label>
                      <div className="col-sm-9">
                        <div className="row g-2">
                          <div className="col-6">
                            <input className="form-control string required" placeholder="First Name" required aria-required="true" type="text" name="contact_request[first_name]" id="contact_request_first_name" />
                          </div>
                          <div className="col-6">
                            <input className="form-control string required" placeholder="Last Name" required aria-required="true" type="text" name="contact_request[last_name]" id="contact_request_last_name" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 js-form-validation form-group email required contact_request_email">
                      <label className="col-sm-3 col-form-label text-start text-sm-end email required" htmlFor="contact_request_email">
                        <abbr title="required">*</abbr>
                        {" "}Email
                      </label>
                      <div className="col-sm-9">
                        <input className="form-control string email required" required aria-required="true" type="email" name="contact_request[email]" id="contact_request_email" />
                      </div>
                    </div>
                    <div className="row mb-3 js-form-validation form-group tel required contact_request_phone_number">
                      <label className="col-sm-3 col-form-label text-start text-sm-end tel required" htmlFor="contact_request_phone_number">
                        <abbr title="required">*</abbr>
                        {" "}Phone Number
                      </label>
                      <div className="col-sm-9">
                        <input className="form-control string tel required" required aria-required="true" type="tel" name="contact_request[phone_number]" id="contact_request_phone_number" />
                      </div>
                    </div>
                    <div className="row mb-3 js-form-validation form-group string required contact_request_company">
                      <label className="col-sm-3 col-form-label text-start text-sm-end string required" htmlFor="contact_request_company">
                        <abbr title="required">*</abbr>
                        {" "}Company Name
                      </label>
                      <div className="col-sm-9">
                        <input className="form-control string required" required aria-required="true" type="text" name="contact_request[company]" id="contact_request_company" />
                      </div>
                    </div>
                    <div className="row mb-3 js-form-validation form-group string optional contact_request_microsoft_teams">
                      <label className="col-sm-3 col-form-label text-start text-sm-end string optional" htmlFor="contact_request_microsoft_teams">
                        Microsoft Teams{" "}
                        <span className="text-muted fw-normal">(optional)</span>
                      </label>
                      <div className="col-sm-9">
                        <input className="form-control string optional" placeholder="your-handle" type="text" name="contact_request[microsoft_teams]" id="contact_request_microsoft_teams" />
                      </div>
                    </div>
                    <div className="row mb-3 js-form-validation form-group check_boxes optional contact_request_feature_interests">
                      <label className="col-sm-3 col-form-label pt-0 check_boxes optional">What are you looking at?</label>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="Real Time Ping/Post" name="contact_request[feature_interests][]" id="contact_request_feature_interests_real_time_pingpost" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_real_time_pingpost">Real Time Ping/Post</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="AI Voice Agents" name="contact_request[feature_interests][]" id="contact_request_feature_interests_ai_voice_agents" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_ai_voice_agents">AI Voice Agents</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="Call Tracking" name="contact_request[feature_interests][]" id="contact_request_feature_interests_call_tracking" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_call_tracking">Call Tracking</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="Call Transcription" name="contact_request[feature_interests][]" id="contact_request_feature_interests_call_transcription" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_call_transcription">Call Transcription</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="Agents / Call Centers" name="contact_request[feature_interests][]" id="contact_request_feature_interests_agents__call_centers" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_agents__call_centers">Agents / Call Centers</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="Lead Automation" name="contact_request[feature_interests][]" id="contact_request_feature_interests_lead_automation" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_lead_automation">Lead Automation</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input check_boxes optional" type="checkbox" value="Spam Tag Mitigation" name="contact_request[feature_interests][]" id="contact_request_feature_interests_spam_tag_mitigation" />
                          <label className="form-check-label collection_check_boxes" htmlFor="contact_request_feature_interests_spam_tag_mitigation">Spam Tag Mitigation</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 js-form-validation form-group text required contact_request_message">
                      <label className="col-sm-3 col-form-label text-start text-sm-end text required" htmlFor="contact_request_message">
                        <abbr title="required">*</abbr>
                        {" "}Message
                      </label>
                      <div className="col-sm-9">
                        <textarea className="form-control text required" rows="4" required aria-required="true" name="contact_request[message]" id="contact_request_message" defaultValue={"I am interested in a demo."} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-9 offset-sm-3" />
                    </div>
                    <div className="row">
                      <div className="col-sm-9 offset-sm-3">
                        <button type="submit" className="btn btn-td-green px-4 py-2 fw-semibold">Book the walkthrough</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
