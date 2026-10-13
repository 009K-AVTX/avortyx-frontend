import BrandMark from './BrandMark.jsx'

const FEATURE_SECTIONS = [
  ['ping-post', 'Ping/Post'],
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

export default function Navbar({ brandHref }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top marketing-navbar">
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
                  <a className="dropdown-item" href="https://support.trackdrive.com/" target="_blank" rel="noopener noreferrer" title="Avortyx Help Center">
                    <i className="fa-solid fa-book" aria-hidden="true" /> Help Center <span className="visually-hidden">(opens in a new tab)</span>
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
            {/* the same button as avortyx.com's header: pill, keppel-400 on keppel-950, with its dark bolt */}
            <li className="nav-item ms-lg-3">
              <a className="avx-request-access" href="https://avortyx.com/request-access">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                  <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z" />
                </svg>
                Request Access
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
