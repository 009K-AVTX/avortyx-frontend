// Trustpilot reviews: the official TrustBox embed. It shows Avortyx's real Trustpilot reviews
// once TRUSTPILOT.businessUnitId is set (Trustpilot Business › Integrations › TrustBox library,
// "Business unit ID"). Until then the section stays hidden on the live site, and site.js fills
// it with clearly labelled sample reviews on localhost only, so the layout can be reviewed.
export const TRUSTPILOT = {
  businessUnitId: '',
  domain: 'avortyx.com',
  // Carousel (paid Trustpilot plans). On the free plan use Micro Review Count: 5419b6a8b0d04a076446a9ad
  templateId: '53aa8912dec7e10d38f59f36',
}

export default function TrustBox() {
  const live = Boolean(TRUSTPILOT.businessUnitId)
  return (
    <section className="avx-tp" aria-label="Customer reviews on Trustpilot" data-avx-tp={live ? 'live' : 'sample'} hidden={!live}>
      <div className="container">
        <p className="avx-tp-label">What customers say on Trustpilot</p>
        {live ? (
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id={TRUSTPILOT.templateId}
            data-businessunit-id={TRUSTPILOT.businessUnitId}
            data-style-height="240px"
            data-style-width="100%"
            data-theme="dark"
            data-stars="4,5"
          >
            <a href={`https://www.trustpilot.com/review/${TRUSTPILOT.domain}`} target="_blank" rel="noopener noreferrer">Trustpilot</a>
          </div>
        ) : (
          <div className="avx-tp-sample" />
        )}
      </div>
    </section>
  )
}
