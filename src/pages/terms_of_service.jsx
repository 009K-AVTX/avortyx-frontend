// /terms_of_service.html: the text lives in src/legal/agreements.js
import LegalText from '../components/LegalText.jsx'
import { TERMS } from '../legal/agreements.js'
export const meta = {
  title: "Terms of Service | Avortyx",
  description: "The Agreement Between Avortyx and the Businesses That Use It.",
  bodyClass: "avortyx_marketing terms_of_service without-waves",
  layout: "site",
}

export default function TermsOfService() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/legal" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Legal Center </a>
          </div>
          <h1 className="fw-bold mb-2">Terms of Service</h1>
          <p className="lead mktg-subpage-hero-subtitle">The Agreement Between Avortyx and the Businesses That Use It.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <LegalText doc={TERMS} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
