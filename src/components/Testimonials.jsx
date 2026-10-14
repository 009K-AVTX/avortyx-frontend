// Testimonials (home page, under the closing call to action): one row of quote cards gliding
// sideways, pausing on hover. The quotes are placeholders until real customer quotes come in, so
// the public site labels them as samples; site.js hides that label on localhost and with ?preview.
// [initials, name, title, quote, stars]
const QUOTES = [
  ['DR', 'Daniel Reyes', 'Routing set up in an afternoon', 'We moved our health campaigns over and calls started reaching buyers the same day. The routing rules are easy to follow.', 5],
  ['PS', 'Priya Shah', 'Routing that just works', 'Calls connect fast and the reporting shows exactly why a call went where it did. No more guessing.', 5],
  ['MW', 'Marcus Webb', 'We finally see what buyers do', 'The live monitor alone is worth it. For the first time we can see what our buyers are actually doing with the calls we send them.', 5],
  ['MB', 'Marcus Bell', 'Helpful specialists', 'A live video session sorted out our caps and failover in under an hour. Would like more report exports.', 4],
  ['HC', 'Hannah Cole', 'Clear pricing', 'Per-minute billing with no onboarding fee made it easy to test before we moved our volume.', 5],
]

const STAR = 'M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.7l7.1-.6z'

function Card({ q: [initials, name, title, text, stars], copy }) {
  return (
    <figure className="avx-testi-card" aria-hidden={copy || undefined}>
      <span className="avx-testi-stars" role="img" aria-label={`${stars} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} viewBox="0 0 24 24" className={i < stars ? 'on' : undefined} aria-hidden="true"><path d={STAR} /></svg>
        ))}
      </span>
      <b className="avx-testi-title">{title}</b>
      <blockquote>{text}</blockquote>
      <figcaption>
        <span className="avx-testi-av" aria-hidden="true">{initials}</span>
        {name}
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
          <h2 id="testi-title" className="fw-bold">What teams say about Avortyx</h2>
          <p className="avx-testi-flag" data-testi-flag="">Sample testimonials · not real customers yet</p>
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
