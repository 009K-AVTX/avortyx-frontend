import LangMenu from './LangMenu.jsx'

// The "View full page ×" strip on feature pages, with the language menu and Request Demo
// that every page keeps in view. Close goes back a page (motion.js handles
// data-avx-back; React does not render javascript: links).
export default function FeatureHeader({ route }) {
  return (
    <div id="injected-modal-header" className="feature-modal-actions bg-white p-3 d-flex justify-content-end align-items-center border-bottom" style={{ position: 'sticky', top: '0', zIndex: '9999' }}>
      <ul className="navbar-nav avx-nav-quick avx-nav-quick-strip me-auto">
        <LangMenu />
        <li className="nav-item">
          <a className="avx-request-demo" href="/p/request_demo">Request Demo</a>
        </li>
      </ul>
      <a className="feature-modal-fullpage text-decoration-none text-secondary me-3" href={route.replace(/\.html$/, '')} target="_blank">
        {' '}<i className="fa-solid fa-up-right-from-square me-1" aria-hidden="true" />View full page{' '}
      </a>
      <a href="/features" data-avx-back="" className="btn-close" aria-label="Close" style={{ cursor: 'pointer' }} />
    </div>
  )
}
