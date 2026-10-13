// /help.html — the Help Center: search, popular topics and articles, then every article by topic.
// Articles live in src/help/articles.js; site.js runs the search and topic filter.
import Bolt from '../components/Bolt.jsx'
import { ARTICLES, POPULAR, TOPICS } from '../help/articles.js'

export const meta = {
  title: 'Help Center | Avortyx',
  description: 'Answers on calls, numbers, routing, Ping/Post, billing, integrations and compliance in Avortyx, with a team to talk to when you need one.',
  bodyClass: 'avortyx_marketing help_center without-waves',
  layout: 'site',
}

const byId = Object.fromEntries(ARTICLES.map((a) => [a[0], a]))

function Answer({ body, link }) {
  return (
    <div className="avx-help-answer">
      {body.map((b, i) => Array.isArray(b)
        ? <ul key={i}>{b[1].map((li) => <li key={li}>{li}</li>)}</ul>
        : <p key={i}>{b}</p>)}
      <a href={link[0]}>{link[1]} <span aria-hidden="true">→</span></a>
    </div>
  )
}

export default function Help() {
  return (
    <main>
      <section className="avx-help-hero">
        <div className="container">
          <h1>How can we help?</h1>
          <p>Search the guides, or start from a popular topic below.</p>
          <form className="avx-help-search" role="search" data-avx-help-search="" onSubmit={undefined}>
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            <input type="search" name="q" placeholder="Search for answers…" aria-label="Search the Help Center" autoComplete="off" />
            <button type="submit" aria-label="Search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /></button>
          </form>
        </div>
      </section>

      <section className="avx-help-body">
        <div className="container">
          <p className="avx-help-label">Popular topics</p>
          <div className="avx-help-topics" data-avx-help-topics="">
            {TOPICS.map((t) => <button key={t} type="button" data-topic={t}>{t}</button>)}
          </div>

          <div data-avx-help-popular="">
            <p className="avx-help-label">Popular articles</p>
            <div className="avx-help-popular">
              {POPULAR.map((id) => (
                <a key={id} href={`#${id}`} className="avx-help-card" data-help-open={id}>
                  <b>{byId[id][2]}</b>
                  <span>{byId[id][1]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="avx-help-all" id="all-topics">
            <p className="avx-help-label" data-avx-help-heading="">All topics</p>
            <p className="avx-help-empty" data-avx-help-empty="" hidden>No articles match that search. Try another word, or <a href="mailto:support@avortyx.com" data-avx-email="">email support</a>.</p>
            {TOPICS.map((t) => (
              <div key={t} className="avx-help-group" data-help-group={t}>
                <h2>{t}</h2>
                {ARTICLES.filter((a) => a[1] === t).map(([id, , title, body, link]) => (
                  <details key={id} id={id} className="avx-help-item" data-help-item="">
                    <summary>{title}</summary>
                    <Answer body={body} link={link} />
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="avx-help-band">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <i className="fa-solid fa-comments avx-help-band-icon" aria-hidden="true" />
              <h2>Still have a question?</h2>
              <p>Our team knows pay-per-call. Write to us and a specialist will get back to you.</p>
              <a href="mailto:support@avortyx.com" className="btn btn-cta-outline fw-semibold" data-avx-email="">Email support@avortyx.com</a>
            </div>
            <div className="col-md-6">
              <i className="fa-solid fa-headset avx-help-band-icon" aria-hidden="true" />
              <h2>Not on Avortyx yet?</h2>
              <p>Access is by invitation. Tell us about your traffic and we will review your request.</p>
              <a href="/request-access" className="btn btn-cta-primary fw-semibold avx-ra-cta"><Bolt />Request Access</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
