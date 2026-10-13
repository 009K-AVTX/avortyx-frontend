import { coverSrc, formatDate } from '../blog/posts.js'

// One post as a card: cover, category, title, excerpt, then author, date and read time.
// `large` is the featured layout (cover beside the text on wide screens).
export default function BlogCard({ post, large = false, headingLevel = 3 }) {
  const Title = `h${headingLevel}`
  return (
    <a href={`/blog/${post.slug}`} className={large ? 'avx-post-card avx-post-card--lg' : 'avx-post-card'} data-cat={post.category}>
      <span className="avx-post-cover">
        <img
          src={coverSrc(post.slug, !large)}
          alt=""
          width={large ? 1200 : 600}
          height={large ? 630 : 315}
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="avx-post-text">
        <span className="avx-post-cat">{post.category}</span>
        <Title className="avx-post-title">{post.title}</Title>
        <span className="avx-post-excerpt">{post.excerpt}</span>
        <span className="avx-post-meta">
          <span>Avortyx Team</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.minutes} min read</span>
        </span>
      </span>
    </a>
  )
}
