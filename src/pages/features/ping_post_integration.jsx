// /features/ping_post_integration.html
import Bolt from '../../components/Bolt.jsx'
export const meta = {
  title: "Ping/Post Integration Guide | Avortyx API",
  description: "How publishers integrate with Avortyx Ping/Post: send a ping to collect live bids, post to claim a buyer and get a tracking number, or post directly in one step.",
  bodyClass: "avortyx_marketing features_ping_post_integration ",
  layout: "feature",
}

export default function PingPostIntegration() {
  return (
    <main>
      <section className="mktg-subpage-hero">
        <div className="container">
          <div className="mktg-subpage-hero-nav">
            <a href="/features#ping-post" className="mktg-subpage-back">
              {" "}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {" "}Back to Ping/Post{" "}
            </a>
          </div>
          <p className="mktg-subpage-hero-eyebrow">Ping/Post</p>
          <h1 className="fw-bold mb-2">Ping/Post Integration Guide</h1>
          <p className="lead mktg-subpage-hero-subtitle">Everything a publisher needs to plug into Avortyx Ping/Post: ping for live bids, post to claim a buyer, and route the call to the number you get back.</p>
          <div className="mktg-subpage-hero-cta mt-4 d-flex flex-wrap gap-2 justify-content-center">
            <a href="/p/request_demo" className="btn btn-td-green">Request Demo</a>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="marketing-subpage-content mx-auto">
            <h3>Endpoint URLs</h3>
            <p>Each endpoint has its own <strong>Vanity URI</strong>, chosen when you set the endpoint up in Avortyx.</p>
            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Method</th>
                    <th>Type</th>
                    <th>URL Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>GET / POST</code></td>
                    <td>PING</td>
                    <td><code>https://avortyx.com/api/v1/inbound_webhooks/ping/<em>{"{vanity_uri}"}</em></code></td>
                  </tr>
                  <tr>
                    <td><code>GET / POST</code></td>
                    <td>POST</td>
                    <td><code>https://avortyx.com/api/v1/inbound_webhooks/post/<em>{"{vanity_uri}"}</em></code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Step 1: Ping for bids</h3>
            <p>Send what you know about the lead to the PING endpoint and Avortyx returns every buyer willing to take it, with their bids. Parameters can go in a JSON body or in the query string.</p>
            <h5>PING Request Example</h5>
            <pre className="bg-dark text-light p-3 rounded"><code>{"curl -X POST \\\n  \"https://avortyx.com/api/v1/inbound_webhooks/ping/my_endpoint\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"caller_id\": \"18005551234\",\n    \"traffic_source_id\": \"source_abc\"\n  }'"}</code></pre>
            <h5>PING Response Example</h5>
            <p>
              You get back each eligible buyer and their bid, plus a{" "}
              <code>try_all_buyers_ping_id</code>
              {" "}that lets Avortyx work through every matched buyer in priority order:
            </p>
            <pre className="bg-dark text-light p-3 rounded"><code>{"{\n  \"success\": true,\n  \"status\": \"accepted\",\n  \"try_all_buyers_ping_id\": \"xyz789\",\n  \"buyers\": [\n    {\n      \"ping_id\": \"abc123\",\n      \"id\": 1,\n      \"name\": \"Buyer A\",\n      \"bid_price\": 25.00\n    },\n    {\n      \"ping_id\": \"def456\",\n      \"id\": 2,\n      \"name\": \"Buyer B\",\n      \"bid_price\": 20.00\n    }\n  ]\n}"}</code></pre>
            <p className="text-muted small mt-2">
              Which buyer fields come back is set per endpoint. The usual ones are{" "}
              <code>id</code>
              ,{" "}
              <code>name</code>
              ,{" "}
              <code>bid_price</code>
              ,{" "}
              <code>tier</code>
              , and{" "}
              <code>forwarding_number</code>
              .
            </p>
            <h3>Step 2: Post to claim a buyer</h3>
            <p>With the ping response in hand, post in one of two ways:</p>
            <ul>
              <li>
                <strong>Choose one buyer</strong>
                {" "}— send that buyer's{" "}
                <code>ping_id</code>
                {" "}and{" "}
                <code>buyer_id</code>
                {" "}of the buyer you want
              </li>
              <li>
                <strong>Let Avortyx try them all</strong>
                {" "}— send the{" "}
                <code>try_all_buyers_ping_id</code>
                {" "}as the{" "}
                <code>ping_id</code>
                {" "}and Avortyx tries each matched buyer in priority order until one accepts
              </li>
            </ul>
            <h5>POST Request Example (specific buyer)</h5>
            <pre className="bg-dark text-light p-3 rounded"><code>{"curl -X POST \\\n  \"https://avortyx.com/api/v1/inbound_webhooks/post/my_endpoint\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"ping_id\": \"abc123\",\n    \"caller_id\": \"18005551234\",\n    \"buyer_id\": 1\n  }'"}</code></pre>
            <h5>POST Request Example (try all buyers)</h5>
            <pre className="bg-dark text-light p-3 rounded"><code>{"curl -X POST \\\n  \"https://avortyx.com/api/v1/inbound_webhooks/post/my_endpoint\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"ping_id\": \"xyz789\",\n    \"caller_id\": \"18005551234\"\n  }'"}</code></pre>
            <h5>POST Response Example</h5>
            <pre className="bg-dark text-light p-3 rounded"><code>{"{\n  \"success\": true,\n  \"status\": \"accepted\",\n  \"forwarding_number\": \"18009876543\",\n  \"forwarding_number_status\": \"accepted\"\n}"}</code></pre>
            <p className="text-muted small mt-2">
              Send the caller to the{" "}
              <code>forwarding_number</code>
              {" "}you get back. SIP endpoints can return a{" "}
              <code>forwarding_number_sip_address</code>
              .
            </p>
            <h3>Skip the ping</h3>
            <p>Not every publisher needs two steps. Post the lead directly and Avortyx finds the best eligible buyer and returns a tracking number in a single request.</p>
            <pre className="bg-dark text-light p-3 rounded"><code>{"curl -X POST \\\n  \"https://avortyx.com/api/v1/inbound_webhooks/post/my_endpoint\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"caller_id\": \"18005551234\"\n  }'"}</code></pre>
            <h3>Fields to send</h3>
            <p>Every endpoint belongs to an offer, and the offer’s contact fields decide what a publisher has to send. The ones you will see most:</p>
            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Field</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>caller_id</code></td>
                    <td>Varies</td>
                    <td>The lead’s phone number</td>
                  </tr>
                  <tr>
                    <td><code>traffic_source_id</code></td>
                    <td>Varies</td>
                    <td>Which publisher or traffic source sent it</td>
                  </tr>
                  <tr>
                    <td><code>ping_id</code></td>
                    <td>On POST</td>
                    <td>The ping ID from step 1</td>
                  </tr>
                  <tr>
                    <td><code>avortyx_number</code></td>
                    <td>Varies</td>
                    <td>Needed in caller-number (static) tracking mode</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Custom fields such as state, ZIP code or vertical are added per offer. The complete list for any endpoint is on its{" "}
              <strong>Posting Instructions</strong>
              {" "}page.
            </p>
            <h3>Two tracking modes</h3>
            <p>Pick the one that suits how the publisher sends calls:</p>
            <ul>
              <li>
                <strong>Unique Phone Numbers (Ring Pool)</strong>
                {" "}— each POST returns its own tracking number for the call
              </li>
              <li>
                <strong>Caller Number (Static)</strong>
                {" "}— the publisher names an{" "}
                <code>avortyx_number</code>
                {" "}on the PING, then sends both{" "}
                <code>caller_id</code>
                {" "}and{" "}
                <code>ping_id</code>
                {" "}on the POST
              </li>
            </ul>
            <h3>Locking an endpoint</h3>
            <p>
              Require an{" "}
              <code>auth_token</code>
              {" "}parameter and only publishers with an Avortyx account can use the endpoint, so you always know who sent each lead.
            </p>
            <h3>Instructions you can share</h3>
            <p>
              Every endpoint gets its own{" "}
              <strong>Posting Instructions</strong>
              {" "}page in Avortyx, with the full field list and example requests and responses for that exact endpoint. Send it to a publisher and they have everything they need.
            </p>
            <div className="mt-5 pt-4 border-top d-flex flex-wrap gap-2">
              <a href="/features/ping_post" className="btn btn-td-green">Ping/Post Overview</a>
              {" "}
              <a href="/features/custom_webhook" className="btn btn-outline-td-green">Custom Webhooks</a>
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
