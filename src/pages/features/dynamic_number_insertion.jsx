// /features/dynamic_number_insertion.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Dynamic Number Insertion | Know Which Ad Made the Phone Ring | Avortyx",
  description: "Avortyx shows each website visitor a tracking number tied to their source, so every call arrives with its campaign, keyword and tokens attached.",
  bodyClass: "avortyx_marketing features_dynamic_number_insertion ",
  layout: "feature",
}

export default function DynamicNumberInsertion() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#tracking-attribution" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Tracking & Attribution{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Tracking & Attribution</p>
          <h1 className="fw-bold mb-2">Dynamic Number Insertion</h1>
          <p className="lead mktg-subpage-hero-subtitle">Show Each Visitor a Number Tied to How They Found You, So Every Call Arrives Already Knowing Its Source.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <div className="bg-light rounded-3 p-4 mb-4">
              <h5 className="fw-bold text-center mb-3">How It Works</h5>
              <div className="flow-diagram">
                <div className="flow-node">
                  <div className="flow-node-icon bg-primary text-white"><i className="fa-solid fa-user" aria-hidden="true" /></div>
                  <div className="flow-node-label">Visitor Arrives</div>
                  <div className="flow-node-desc">From an ad, a search or an email</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-info text-white"><i className="fa-solid fa-arrows-rotate" aria-hidden="true" /></div>
                  <div className="flow-node-label">Number Swapped</div>
                  <div className="flow-node-desc">The page shows a tracking number</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-warning text-white"><i className="fa-solid fa-phone-volume" aria-hidden="true" /></div>
                  <div className="flow-node-label">They Call</div>
                  <div className="flow-node-desc">Dialing the number they saw</div>
                </div>
                <div className="flow-arrow"><i className="fa-solid fa-chevron-right" aria-hidden="true" /></div>
                <div className="flow-node">
                  <div className="flow-node-icon bg-success text-white"><i className="fa-solid fa-bullseye" aria-hidden="true" /></div>
                  <div className="flow-node-label">Source Known</div>
                  <div className="flow-node-desc">The call carries the visit with it</div>
                </div>
              </div>
            </div>
            <p>Clicks leave a trail; phone calls usually do not. Avortyx swaps the number on your site to match each visitor’s source, so when they call, the campaign, keyword and any custom tokens are already on the call record, and the routing engine can use them on the first ring.</p>
            <ul className="text-muted">
              <li><strong>One Snippet</strong> — add a single line of JavaScript to your pages.</li>
              <li><strong>Any Signal You Track</strong> — numbers by source, URL keyword or custom token.</li>
              <li>
                <strong>Attribution Without Effort</strong>
                {" "}— Avortyx recognizes where each visitor came from and shows the matching number, so source reporting fills itself in.
              </li>
            </ul>
            <p className="text-muted small">
              Need more control? The{" "}
              <a href="/features/api">Avortyx REST API</a>
              {" "}can assign numbers from a pool for server-rendered pages and apps.
            </p>
            <h3>Setting It Up</h3>
            <ol className="text-muted">
              <li>Create a number pool for the campaign, sized for your traffic.</li>
              <li>Add the Avortyx snippet to the pages that show your phone number.</li>
              <li>Choose which sources, keywords or tokens each visitor’s number should track.</li>
              <li>Call in once to test, and see the source appear on the call record.</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true"><img alt="" src="/assets/avx-site/img/constellation-light.svg" /></div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to Route Your First Call?</h2>
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
