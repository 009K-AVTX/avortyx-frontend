// /features/aws_s3.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Amazon S3 for Avortyx | Keep Call Data and Recordings in Your Own Bucket",
  description: "Avortyx uploads call data and recordings to your Amazon S3 bucket on a schedule, so you control retention and access.",
  bodyClass: "avortyx_marketing features_aws_s3 ",
  layout: "feature",
}

export default function AwsS3() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features/integrations" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Integrations{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Integrations</p>
          <h1 className="fw-bold mb-2">
            Avortyx +{" "}
            <img alt="AWS S3" className="integration-title-logo" src="/assets/avx-site/img/aws_s3.webp" />
          </h1>
          <p className="lead mktg-subpage-hero-subtitle">Send Call Data and Recordings to an Amazon S3 Bucket You Own, on the Schedule You Choose.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <p>For teams that need their own copy of every call, Avortyx can upload call data and recordings straight to Amazon S3.</p>
            <h3>How It Works</h3>
            <p>
              Give Avortyx your bucket name and AWS credentials, then add an{" "}
              <strong>AWS S3 action</strong>
              {" "}to a schedule or automation. Each time it runs, Avortyx uploads the data you chose, including recording files and URLs, into your bucket.
            </p>
            <ul>
              <li><strong>Encrypted Credentials</strong> — your AWS access keys are encrypted at rest</li>
              <li>
                <strong>Scheduled Uploads</strong>
                {" "}— an S3 action in any schedule or automation pushes data, or a remote file such as a recording, to the bucket
              </li>
              <li><strong>Your Folder Structure</strong> — set path prefixes so uploads land where your team expects them</li>
              <li>
                <strong>Your Data, Your Rules</strong>
                {" "}— files live in your AWS account, under your own retention and access policies
              </li>
            </ul>
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
