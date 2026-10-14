import { UPDATED } from '../legal/agreements.js'

// Renders a document from src/legal/agreements.js into the legal page body. Links in the text
// are written [[label|/path]].
function rich(text) {
  const parts = text.split(/\[\[([^|\]]+)\|([^\]]+)\]\]/)
  return parts.map((p, i) => (i % 3 === 1 ? <a key={i} href={parts[i + 1]}>{p}</a> : i % 3 === 2 ? null : p))
}

function Block({ b }) {
  if (typeof b === 'string') return <p>{rich(b)}</p>
  const [kind, ...rest] = b
  if (kind === 'sub') return <p><strong>{rest[0]}. {rest[1]}.</strong>{' '}{rich(rest[2])}</p>
  if (kind === 'ul') return <ul className="avx-tos-list">{rest[0].map((x, i) => <li key={i}>{rich(x)}</li>)}</ul>
  if (kind === 'strong') return <p><strong>{rich(rest[0])}</strong></p>
  if (kind === 'address') return <p className="avx-legal-address">{rest[0].map((l, i) => <span key={i}>{l}<br /></span>)}</p>
  return null
}

export default function LegalText({ doc }) {
  return (
    <div className="mktg-legal-content avx-legal-text">
      <p className="avx-legal-updated">Effective {UPDATED}</p>
      <h1 className="h3 fw-bold">{doc.title}</h1>
      {doc.intro.map((b, i) => <Block key={i} b={b} />)}
      {doc.sections.map(([h, blocks]) => (
        <section key={h} className="avx-legal-sec">
          <h2>{h}</h2>
          {blocks.map((b, i) => <Block key={i} b={b} />)}
        </section>
      ))}
    </div>
  )
}
