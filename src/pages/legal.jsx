// /legal.html — the Legal Center: every agreement and policy in one place, Nextiva-style.
// /legal lists them; /legal?doc=NN opens one (site.js switches documents without a reload).
// Documents live in src/legal/docs.js; Terms and Privacy keep their own pages and are linked.
import { DOCS, ENTITY, GROUPS, LEGAL_EMAIL, SUPPORT, UPDATED } from '../legal/docs.js'

export const meta = {
  title: 'Legal Center | Avortyx',
  description: 'Avortyx agreements and policies: Terms of Service, Privacy, Acceptable Use, TCPA compliance, SLA, billing, data retention, messaging, AI and partner terms.',
  bodyClass: 'avortyx_marketing legal_center without-waves',
  layout: 'site',
}

const byId = Object.fromEntries(DOCS.map((d) => [d.id, d]))
const docHref = (d) => d.href || `/legal?doc=${d.id}`

function Blocks({ blocks }) {
  return blocks.map((b, i) => Array.isArray(b)
    ? <ul key={i}>{b[1].map((li) => <li key={li}>{li}</li>)}</ul>
    : <p key={i}>{b}</p>)
}

export default function Legal() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <h1 className="fw-bold mb-2">Legal Center</h1>
          <p className="lead mktg-subpage-hero-subtitle">The agreements and policies that apply when you use Avortyx.</p>
        </div>
      </section>

      <section className="avx-legal" data-avx-legal="">
        <div className="container">
          <div className="avx-legal-grid">
            <nav className="avx-legal-nav" aria-label="Legal documents">
              <a href="/legal" className="avx-legal-home" data-doc="">All documents</a>
              {GROUPS.map(([name, ids]) => (
                <div key={name} className="avx-legal-group">
                  <p>{name}</p>
                  <ul>
                    {ids.map((id) => (
                      <li key={id}>
                        <a href={docHref(byId[id])} data-doc={byId[id].href ? undefined : id}>
                          {byId[id].title}
                          {byId[id].href && <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="avx-legal-body">
              <article className="avx-legal-doc avx-legal-index" data-doc-panel="">
                <h2>All documents</h2>
                <p className="avx-legal-meta">These documents form part of your agreement with {ENTITY}. If a policy and the Terms of Service conflict, the Terms of Service control unless the policy says otherwise.</p>
                {GROUPS.map(([name, ids]) => (
                  <div key={name} className="avx-legal-cards">
                    <h3>{name}</h3>
                    {ids.map((id) => (
                      <a key={id} href={docHref(byId[id])} data-doc={byId[id].href ? undefined : id} className="avx-legal-card">
                        <b>{byId[id].title}</b>
                        <span>{byId[id].summary}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </article>

              {DOCS.filter((d) => !d.href).map((d) => (
                <article key={d.id} className="avx-legal-doc" id={`doc-${d.id}`} data-doc-panel={d.id}>
                  <h2>{d.title}</h2>
                  <p className="avx-legal-meta">Last updated {d.updated || UPDATED}</p>
                  <p className="avx-legal-summary">{d.summary}</p>
                  {d.sections.map(([heading, blocks]) => (
                    <section key={heading}>
                      <h3>{heading}</h3>
                      <Blocks blocks={blocks} />
                    </section>
                  ))}
                  <div className="avx-legal-contact">
                    <p>Questions about this document? Email <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>. Formal legal notices go by email to <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>, as the Terms of Service describe.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
