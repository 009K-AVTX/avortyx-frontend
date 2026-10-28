// /blog.html
import BlogCard from '../components/BlogCard.jsx'
import { CATEGORIES, LATEST } from '../blog/posts.js'
import Bolt from '../components/Bolt.jsx'

export const meta = {
  title: "Advanced Playbooks For Call Intelligence, Real-Time Routing, And Pay-Per-Call Growth | Avortyx Blog",
  description: "Practical guides on call routing, attribution, compliance and AI from the team behind Avortyx.",
  bodyClass: "avortyx_marketing blog without-waves",
  layout: "site",
}

const featured = LATEST.find((p) => p.featured) || LATEST[0]
const rest = LATEST.filter((p) => p !== featured)

export default function Blog() {
  return (
    <main>
      <section className="avx-blog-hero">
        <div className="container">
          <p className="avx-eyebrow">Signals &amp; Field Notes</p>
          <h1 className="fw-bold">Advanced Playbooks For Call Intelligence, Real-Time Routing, And Pay-Per-Call Growth</h1>
          <p className="lead">What We Have Learned Routing Calls for Pay-per-Call Networks: Margin, Attribution, Compliance and AI, Written for the People Running Campaigns.</p>
        </div>
      </section>
      <section className="avx-blog-list">
        <div className="container">
          <BlogCard post={featured} large headingLevel={2} />
          <div className="avx-blog-filters" role="group" aria-label="Filter posts by topic" data-avx-blog-filter="">
            <button type="button" className="avx-on" aria-pressed="true" data-cat="">All Posts</button>
            {CATEGORIES.map((c) => (
              <button key={c} type="button" aria-pressed="false" data-cat={c}>{c}</button>
            ))}
          </div>
          <div className="avx-blog-grid" data-avx-blog-grid="">
            {rest.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
          <p className="avx-blog-empty" hidden>No posts in this topic yet.</p>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Put It into Practice</h2>
          <p className="marketing-cta-band__subtitle">Know Where Each Call Came from, Send It to a Buyer Who Can Take It, and See What It Earned.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/request-access" className="btn btn-cta-primary fw-semibold avx-ra-cta"><Bolt />Request Access</a>
            {" "}
            <a href="/p/request_demo" className="btn btn-cta-outline fw-semibold">Request a Demo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
