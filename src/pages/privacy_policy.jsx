// /privacy_policy.html: the text lives in src/legal/agreements.js
import LegalText from '../components/LegalText.jsx'
import { PRIVACY } from '../legal/agreements.js'
export const meta = {
  title: "Privacy Policy | Avortyx",
  description: "How Avortyx Collects, Uses and Protects Information.",
  bodyClass: "avortyx_marketing privacy_policy without-waves",
  layout: "site",
}

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/legal" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Legal Center </a>
          </div>
          <h1 className="fw-bold mb-2">Privacy Policy</h1>
          <p className="lead mktg-subpage-hero-subtitle">How Avortyx Collects, Uses and Protects Information.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <LegalText doc={PRIVACY} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
