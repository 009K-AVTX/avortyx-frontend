// /features/verified_identity.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Verified Identity & Caller ID | KYC, KYB and STIR/SHAKEN | Avortyx",
  description: "Avortyx verifies every customer (KYC and KYB) and signs outbound calls with STIR/SHAKEN, so carriers trust your numbers and your calls connect.",
  bodyClass: "avortyx_marketing features_verified_identity ",
  layout: "feature",
}

export default function VerifiedIdentity() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#security-compliance-tools" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Security & Compliance Tools{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Security & Compliance Tools</p>
          <h1 className="fw-bold mb-2">Verified Identity & Caller ID</h1>
          <p className="lead mktg-subpage-hero-subtitle">Carriers Trust Calls They Can Trace to a Real Business. Avortyx Verifies Yours, So Your Numbers Keep Connecting.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
            {" "}
            <a href="/request-access" className="btn btn-outline-td-green"><Bolt />Request Access</a>
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
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-user-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Verify the Person (KYC)</div>
                  <div className="flow-node-desc">Stripe Identity verification</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-building-circle-check" aria-hidden="true" /></div>
                  <div className="flow-node-label">Verify the Business (KYB)</div>
                  <div className="flow-node-desc">Legal identity plus signed attestations</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-tower-cell" aria-hidden="true" /></div>
                  <div className="flow-node-label">Known to Carriers</div>
                  <div className="flow-node-desc">Numbers registered, branded and connecting</div>
                </div>
              </div>
            </div>
            <h3>Why Identity Decides Whether Calls Connect</h3>
            <p>
              Spam filtering now runs on{" "}
              <strong>inbound and outbound</strong>
              {" "}calls alike, and carriers let registered businesses through. A verified identity is what allows{" "}
              <a href="/features/spam_tag_mitigation">Spam Tag Mitigation</a>
              {" "}to register and brand your numbers with them.
            </p>
            <p className="text-muted mb-1">
              <strong>What It Earns You.</strong>
              {" "}Your business name on the caller ID, not a "Scam Likely" warning.
            </p>
            <img alt={"Branded, verified caller ID instead of a \"Scam Likely\" label"} className="img-fluid rounded border mb-4" src="/assets/avx-shots/mitigation-2.webp?v=2" width="1927" height="1481" srcSet="/assets/avx-shots/mitigation-2-1000.webp?v=2 1000w, /assets/avx-shots/mitigation-2.webp?v=2 1927w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            <h3>Identity Verification (KYC)</h3>
            <p>
              Every Avortyx customer passes{" "}
              <strong>Stripe Identity (KYC)</strong>
              {" "}verification. Because everyone on the platform is verified, carriers can trust the traffic that comes from it.
            </p>
            <h3>Business Compliance Profile (KYB)</h3>
            <p>
              Before outbound schedule calls, SMS or email are switched on, each customer completes a one-time{" "}
              <strong>KYB Business Compliance Profile</strong>
              : their legal identity (EIN, legal name, address), stored encrypted, and signed attestations about how they call, including DNC scrubbing, honoring unsubscribes, legal calling hours and accurate caller ID. Signatures cannot be edited, and changing certified details means certifying again.
            </p>
            <p className="text-muted mb-1">
              <strong>Signed Once, Protected from Then On.</strong>
              {" "}A completed profile with its attestations; sensitive fields stay encrypted and hidden.
            </p>
            <a className="zoomable-marketing-image" target="_blank" rel="noopener" href="/assets/avx-shots/features-verified-identity-kyb-profile.webp">
              <img alt="Completed KYB Business Compliance Profile with signed calling-practice attestations and redacted sensitive fields" className="img-fluid rounded border mb-4" src="/assets/avx-shots/features-verified-identity-kyb-profile.webp" width="1600" height="1120" srcSet="/assets/avx-shots/features-verified-identity-kyb-profile-1000.webp 1000w, /assets/avx-shots/features-verified-identity-kyb-profile.webp 1600w" sizes="(min-width: 992px) 860px, 100vw" loading="lazy" decoding="async" />
            </a>
            <h3>Signed Caller ID (STIR/SHAKEN)</h3>
            <p>
              Outbound calls through Avortyx are signed with{" "}
              <strong>STIR/SHAKEN</strong>
              {" "}by our carrier partners, the strongest form of caller-ID authentication. The receiving carrier can see the caller was verified and is allowed to use the number, so fewer calls look spoofed and more arrive as trusted.
            </p>
            <p>
              For messaging,{" "}
              <strong>A2P 10DLC</strong>
              {" "}registration keeps your SMS traffic within carrier rules.
            </p>
            <div className="bg-light border-start border-success border-4 rounded-3 p-4 small text-muted mb-4" style={{ marginTop: "60px" }}>
              <p><strong>Please read: compliance is shared</strong></p>
              <p>
                Avortyx gives you the controls to run a compliant calling and messaging program, but using them does not make a program compliant on its own. You remain{" "}
                <strong>responsible</strong>
                {" "}for how they are configured and for meeting the Telephone Consumer Protection Act (TCPA), the FTC Telemarketing Sales Rule (TSR), FCC regulations and every other federal and state law on telemarketing and consumer privacy that applies to you.
              </p>
              <p>
                Avortyx routes calls in real time; it is{" "}
                <strong>not</strong>
                {" "}an archive. Recordings, transcripts, call logs and consent records should be exported to your own storage, including before any automatic PII redaction runs, so you can meet your record-keeping duties. Avortyx is not liable for data kept only on the platform that is later deleted, redacted or unavailable.
              </p>
              <p className="mb-0">
                <strong>Nothing Here Is Legal Advice.</strong>
                <a target="_blank" href="/terms_of_service">See the Terms of Service</a>
                {" "}for the full terms on compliance and data retention.
              </p>
            </div>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/spam_tag_mitigation" className="btn btn-td-green">Spam Tag Mitigation</a>
              {" "}
              <a href="/features/consent_opt_out" className="btn btn-outline-td-green">Consent & Opt-Out</a>
            </div>
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to Route Your First Call?</h2>
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
