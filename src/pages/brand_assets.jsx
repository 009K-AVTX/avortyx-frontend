// /brand_assets.html
import Bolt from '../components/Bolt.jsx'
export const meta = {
  title: "Brand Assets | Avortyx logo, colors and type",
  description: "The Avortyx logo files, blue color scale and Poppins type system, for partners and press.",
  bodyClass: "avortyx_marketing brand_assets without-waves",
  layout: "site",
}

// the downloadable logo set in public/assets/brand: [file, name, where to use it]
const LOGOS = [
  ["horizontal-gradient", "Primary Logotype", "Use on a white background."],
  ["horizontal-white", "Primary Logotype", "Use on a gradient background."],
  ["vertical-gradient", "Vertical Logotype", "Use in marketing with plenty of space on white."],
  ["vertical-white", "Vertical Logotype", "Use in marketing with plenty of space."],
  ["icon-gradient", "Icon", "Use in UI with limited space on white."],
  ["icon-white", "Icon", "Use in UI with limited space."],
]

export default function BrandAssets() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features" className="mktg-subpage-back"> <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back to Features </a>
          </div>
          <h1 className="fw-bold mb-2">Brand Assets</h1>
          <p className="lead mktg-subpage-hero-subtitle">The Avortyx logo, color scale and type system, for partners, press and integrations.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="mb-5">
            <h2 className="fw-bold mb-2">Logo Guidelines</h2>
            <p className="text-muted">Use the logo as supplied: do not rotate it, outline it, recolor it or change its shape.</p>
          </div>
          <div className="row g-4 mb-5">
            {LOGOS.map(([file, title, use]) => {
              const dark = file.endsWith('-white')
              return (
                <div key={file} className="col-md-6 col-lg-4">
                  <div className={'mktg-brand-card' + (dark ? ' mktg-brand-card--dark' : '')}>
                    <div className={'mktg-brand-preview' + (dark ? ' mktg-brand-preview--dark' : '')}>
                      <img className={'avx-brand-logo avx-brand-logo--' + file.split('-')[0]} src={`/assets/brand/avortyx-${file}.png`} alt={`Avortyx ${title.toLowerCase()}`} />
                    </div>
                    <div className="mktg-brand-card-body">
                      <h5 className="fw-semibold mb-1">{title}</h5>
                      <p className="text-muted small mb-3">{use}</p>
                      <div className="d-flex gap-2">
                        <a className="btn btn-sm btn-outline-td-green" download href={`/assets/brand/avortyx-${file}.svg`}>SVG</a>
                        <a className="btn btn-sm btn-outline-td-green" download href={`/assets/brand/avortyx-${file}.png`}>PNG</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Color Palette</h2>
            <p className="text-muted">Avortyx is built on a near-black canvas with one color doing the talking: deep blue, with lighter blues for highlights and data.</p>
          </div>
          <div className="row g-3 justify-content-center">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="mktg-color-swatch color-palette primary-gradient" />
              <p className="small fw-semibold mt-2 mb-0">Deep blue gradient</p>
              <p className="small text-muted mb-0"><code>#1e3a8a → #1d4ed8</code></p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="mktg-color-swatch color-palette primary-color" />
              <p className="small fw-semibold mt-2 mb-0">Avortyx deep blue</p>
              <p className="small text-muted mb-0"><code>#1d4ed8</code></p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="mktg-color-swatch color-palette accent-color" />
              <p className="small fw-semibold mt-2 mb-0">Signal blue</p>
              <p className="small text-muted mb-0"><code>#3b82f6</code></p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="mktg-color-swatch color-palette secondary-color" />
              <p className="small fw-semibold mt-2 mb-0">Highlight blue</p>
              <p className="small text-muted mb-0"><code>#93c5fd</code></p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="mktg-color-swatch color-palette ternory-gradient" />
              <p className="small fw-semibold mt-2 mb-0">Night gradient</p>
              <p className="small text-muted mb-0"><code>#0e1016 → #172554</code></p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="mktg-color-swatch color-palette dark-color" />
              <p className="small fw-semibold mt-2 mb-0">Canvas</p>
              <p className="small text-muted mb-0"><code>#0e1016</code></p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Typography</h2>
            <p className="text-muted">One typeface, Poppins, carries everything from headlines to buttons, with semibold headlines set slightly tight.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="list-unstyled mktg-typography-list">
                <li>
                  <h1>Headline 1 is Poppins SemiBold at 64px.</h1>
                </li>
                <li>
                  <h2>Headline 2 is Poppins SemiBold at 48px.</h2>
                </li>
                <li>
                  <h3>Headline 3 is Poppins SemiBold at 36px.</h3>
                </li>
                <li>
                  <h4>Headline 4 is Poppins SemiBold at 24px.</h4>
                </li>
                <li>
                  <h5>Headline 5 is Poppins SemiBold at 20px.</h5>
                </li>
                <li>
                  <h6>Headline 6 is Poppins SemiBold at 14px.</h6>
                </li>
                <li>
                  <p>Paragraphs are Poppins Regular at 18px.</p>
                </li>
                <li>
                  <p className="text-uppercase fw-semibold">Navigation uses Poppins in small caps; buttons use Poppins Medium.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to route your first call?</h2>
          <p className="marketing-cta-band__subtitle">Point a number at Avortyx and calls start scoring, routing and settling on the first ring. Request access, or walk through your traffic with our team.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/request-access" className="btn btn-cta-primary fw-semibold avx-ra-cta"><Bolt />Request Access</a>
            {" "}
            <a href="/p/contact" className="btn btn-cta-outline fw-semibold">Request a Demo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
