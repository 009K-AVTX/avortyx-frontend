import BlogCard from './BlogCard.jsx'
import { LATEST, SHOTS, coverSrc, formatDate } from '../blog/posts.js'

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

function Block({ block }) {
  const [type, a, b, c] = block
  if (type === 'h2') return <h2 id={slugify(a)}>{a}</h2>
  if (type === 'p') return <p>{a}</p>
  if (type === 'ul') return <ul>{a.map((item) => <li key={item}>{item}</li>)}</ul>
  if (type === 'note') return <aside className="avx-art-note"><i className="fa-solid fa-circle-check" aria-hidden="true" /><p>{a}</p></aside>
  if (type === 'example') {
    return (
      <figure className="avx-art-example">
        <figcaption>{a}</figcaption>
        <dl>{b.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        {c && <p>{c}</p>}
      </figure>
    )
  }
  if (type === 'img') {
    const [w, h, small] = SHOTS[a]
    const src = `/assets/avx-shots/${a}.webp`
    return (
      <figure className="avx-art-shot">
        <img
          src={src}
          srcSet={small ? `/assets/avx-shots/${a}-1000.webp 1000w, ${src} ${w}w` : undefined}
          sizes="(min-width: 992px) 760px, 100vw"
          alt={b}
          width={w}
          height={h}
          loading="lazy"
          decoding="async"
        />
        <figcaption>{b}</figcaption>
      </figure>
    )
  }
  return null
}

// One article: header, cover, contents beside the text, related posts, a call to action.
export default function BlogPost({ post }) {
  const sections = post.body.filter((b) => b[0] === 'h2').map((b) => b[1])
  const related = [
    ...LATEST.filter((p) => p !== post && p.category === post.category),
    ...LATEST.filter((p) => p !== post && p.category !== post.category),
  ].slice(0, 3)
  const ld = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.excerpt,
    datePublished: post.date, image: `https://avortyx-prototype.vercel.app${coverSrc(post.slug)}`,
    author: { '@type': 'Organization', name: 'Avortyx' }, publisher: { '@type': 'Organization', name: 'Avortyx' },
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="mktg-subpage-hero avx-art-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/blog" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Blog </a>
          </div>
          <span className="avx-post-cat">{post.category}</span>
          <h1 className="fw-bold">{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <p className="avx-post-meta">
            <span>Avortyx Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.minutes} min read</span>
          </p>
        </div>
      </section>
      <section className="avx-art">
        <div className="container">
          <div className="avx-art-cover">
            <img src={coverSrc(post.slug)} alt="" width="1200" height="630" fetchPriority="high" />
          </div>
          <div className="avx-art-grid">
            <nav className="avx-art-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>{sections.map((s) => <li key={s}><a href={`#${slugify(s)}`}>{s}</a></li>)}</ol>
            </nav>
            <article className="avx-art-body">
              {post.body.map((block, i) => <Block key={i} block={block} />)}
              <div className="avx-art-end">
                <p><b>See it in your own numbers.</b> Track every call, route it to the right buyer and see the revenue behind it.</p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="https://avortyx.com/request-access" className="btn btn-td-green">Request Access</a>
                  <a href="/p/request_demo" className="btn btn-outline-td-green">Request Demo</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="avx-art-related">
        <div className="container">
          <h2 className="fw-bold">Keep reading</h2>
          <div className="avx-blog-grid">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
