import BrandMark from './BrandMark.jsx'
import Bolt from './Bolt.jsx'
import LangMenu from './LangMenu.jsx'

const FEATURE_SECTIONS = [
  ['call-management', 'Call Management'],
  ['automation', 'Automation'],
  ['ai', 'AI'],
  ['tracking-attribution', 'Tracking & Attribution'],
  ['phone-numbers', 'Phone Numbers'],
  ['security-compliance-tools', 'Security & Compliance Tools'],
]

const LINKS = [
  ['/features#ai', 'AI'],
  ['/features/integrations', 'Integrations'],
  ['/pricing', 'Pricing'],
  ['/blog', 'Blog'],
  ['/careers', 'Careers'],
]

export default function Navbar({ brandHref, isLanding }) {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top marketing-navbar${isLanding ? ' avx-landing-navbar' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href={brandHref} style={{ textDecoration: 'none' }}>
          <BrandMark gradientId="avx-mk-g-nav" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#marketingNav" aria-controls="marketingNav" aria-expanded="false" aria-label="Toggle navigation">
          {' '}<span className="navbar-toggler-icon" />{' '}
        </button>
        <div className="collapse navbar-collapse" id="marketingNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item dropdown marketing-hover-dropdown">
              <a className="nav-link" href="/features" id="featuresDropdown"> Features </a>
              <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
                {FEATURE_SECTIONS.map(([id, label]) => (
                  <li key={id}><a className="dropdown-item" href={`/features#${id}`}>{label}</a></li>
                ))}
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item fw-semibold" href="/features">View All Features</a></li>
              </ul>
            </li>
            {LINKS.map(([href, label]) => (
              <li key={href} className="nav-item"><a className="nav-link" href={href}>{label}</a></li>
            ))}
            <li className="nav-item dropdown marketing-hover-dropdown">
              <a className="nav-link" href="/p/contact" id="supportDropdown"> Support </a>
              <ul className="dropdown-menu avx-support-menu" aria-labelledby="supportDropdown">
                <li>
                  <a className="dropdown-item" href="/blog" title="Avortyx guides">
                    <i className="fa-solid fa-book" aria-hidden="true" /> Guides
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="mailto:support@avortyx.com" data-avx-email="">
                    <i className="fa-solid fa-envelope" aria-hidden="true" /> Email support
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/p/contact">
                    <i className="fa-solid fa-headset" aria-hidden="true" /> Contact us
                  </a>
                </li>
              </ul>
            </li>
            {/* phones: Request Access stays in the menu; the globe and Request Demo sit in the bar */}
            <li className="nav-item d-lg-none">
              <a className="avx-request-access" href="/request-access">
                <Bolt />
                Request Access
              </a>
            </li>
          </ul>
        </div>
        {/* always in view, on every page and at every width: language, Request Demo (and on
            desktop Request Access). Outside the collapse so phones see it without opening the menu */}
        <ul className="navbar-nav avx-nav-quick">
          <LangMenu />
          <li className="nav-item">
            <a className="avx-request-demo" href="/p/request_demo">Request Demo</a>
          </li>
          {/* the same button as avortyx.com's header: pill, keppel-400 on keppel-950, with its dark bolt */}
          <li className="nav-item d-none d-lg-block">
            <a className="avx-request-access" href="/request-access">
              <Bolt />
              Request Access
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
