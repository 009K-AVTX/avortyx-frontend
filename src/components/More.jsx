// "Learn more": keeps the detail one click away so a section leads with its short version.
// site.js toggles it ([data-avx-more]); without script the button stays and the text stays hidden.
export default function More({ id, label = 'Learn more', less = 'Show less', className = '', children }) {
  return (
    <div className={`avx-more ${className}`.trim()}>
      <button type="button" className="avx-more-btn" data-avx-more="" aria-expanded="false" aria-controls={id} data-less={less} data-label={label}>
        <span className="avx-more-label">{label}</span>
        <i className="fa-solid fa-chevron-right" aria-hidden="true" />
      </button>
      <div className="avx-more-body" id={id} hidden>{children}</div>
    </div>
  )
}
