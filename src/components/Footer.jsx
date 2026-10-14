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
    ['/legal', 'Legal Center'],
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
              <li className="mb-2"><a href="/p/contact"> <i className="fa-solid fa-ticket me-2" aria-hidden="true" />Submit a Ticket </a></li>
              <li>
                <a href="https://t.me/avortyxsupport" target="_blank" rel="noopener noreferrer" aria-label="Avortyx support on Telegram" data-avx-no-i18n="">
                  <svg className="avx-tg me-2" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M21.9 4.3 18.8 19c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.6 12.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20.5 2.9c.9-.3 1.6.2 1.4 1.4z" /></svg>@avortyxsupport
                </a>
              </li>
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
