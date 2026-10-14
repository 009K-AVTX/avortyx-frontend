// Testimonials (home page, under the closing call to action): one row of quote cards gliding
// sideways, pausing on hover. The quotes are the ones published on avortyx.com.
// [initials, name, role, quote]
const QUOTES = [
  ['SC', 'Sarah Chen', 'Head of Media Buying, Northaven Leads', 'We moved 40 campaigns off a legacy tracker in a weekend. Time-to-connect dropped from 9 seconds to under 2, and our connect rate followed.'],
  ['MW', 'Marcus Webb', 'COO, Ringwell', 'The live monitor alone is worth it. For the first time we can see what our buyers are actually doing with the calls we send them.'],
  ['PS', 'Priya Sharma', 'Operations Lead, Calibr Media', 'Avortyx lets us focus on traffic instead of plumbing. Setting up a new buyer went from a two-day ticket to a ten-minute form.'],
  ['JL', 'James Liu', 'Founder, Tenpoint Performance', 'Finally, a router that actually understands intent. The scoring pays for itself on the first week of health traffic.'],
  ['ER', 'Elena Rodriguez', 'VP Partnerships, Meridian Call Network', 'We went from six spreadsheets and a carrier portal to one campaign config. Our publishers noticed the payout accuracy immediately.'],
]

function Card({ q: [initials, name, role, text], copy }) {
  return (
    <figure className="avx-testi-card" aria-hidden={copy || undefined}>
      <blockquote>{text}</blockquote>
      <figcaption>
        <span className="avx-testi-av" aria-hidden="true">{initials}</span>
        <span className="avx-testi-who"><b>{name}</b><small>{role}</small></span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="mktg-section avx-testi" aria-labelledby="testi-title">
      <div className="container">
        <div className="mktg-section-header text-center">
          <p className="avx-eyebrow">Testimonials</p>
          <h2 id="testi-title" className="fw-bold">Loved by performance marketers</h2>
        </div>
      </div>
      {/* the cards twice over, so the row loops without a seam; the copy is hidden from readers */}
      <div className="avx-testi-row">
        <div className="avx-testi-track">
          {QUOTES.map((q) => <Card key={q[1]} q={q} />)}
          {QUOTES.map((q) => <Card key={`${q[1]}-copy`} q={q} copy />)}
        </div>
      </div>
    </section>
  )
}
