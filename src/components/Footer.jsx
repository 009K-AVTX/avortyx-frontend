import BrandMark from './BrandMark.jsx'

const COLUMNS = [
  ['Product', [
    ['/features', 'Features'],
    ['/features/integrations', 'Integrations'],
    ['/pricing', 'Pricing'],
    ['/features/api', 'REST API Docs'],
    ['/features/dynamic_number_insertion', 'Number Insertion Docs'],
  ]],
  ['Features', [
    ['/features#ping-post', 'Ping/Post'],
    ['/features#call-management', 'Call Management'],
    ['/features#automation', 'Automation'],
    ['/features#ai', 'AI'],
    ['/features#tracking-attribution', 'Tracking & Attribution'],
    ['/features#phone-numbers', 'Phone Numbers'],
    ['/features#security-compliance-tools', 'Security & Compliance Tools'],
  ]],
  ['Company', [
    ['/terms_of_service', 'Terms of Service'],
    ['/privacy_policy', 'Privacy Policy'],
    ['/blog', 'Blog'],
    ['/careers', 'Careers'],
    ['/brand_assets', 'Brand Kit'],
    ['/p/contact', 'Contact Us'],
  ]],
]

export default function Footer() {
  return (
    <footer className="marketing-footer pt-5 pb-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <BrandMark gradientId="avx-mk-g-ft" />
            </div>
            <p className="footer-muted small">Real-time call scoring, routing and settlement for pay-per-call networks.</p>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="mailto:support@avortyx.com"> <i className="fa-solid fa-envelope me-2" aria-hidden="true" />support@avortyx.com </a>
              </li>
              <li><a href="/p/contact"> <i className="fa-solid fa-ticket me-2" aria-hidden="true" />Submit a Ticket </a></li>
            </ul>
          </div>
          {COLUMNS.map(([title, links]) => (
            <div key={title} className="col-lg-3 col-md-6">
              <h2 className="h6 mb-3">{title}</h2>
              <ul className="list-unstyled small">
                {links.map(([href, label]) => (
                  <li key={href} className="mb-2"><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="footer-divider mt-4 mb-3" />
        <p className="footer-muted text-center small mb-0">© 2026 Avortyx. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
