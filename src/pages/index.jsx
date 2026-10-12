import BlogCard from '../components/BlogCard.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { LATEST } from '../blog/posts.js'
// /
// What the AI handles, around the hub [icon, label, page, detail, x %, y %] (wording from the feature pages)
const AI_HUB = [
  ['fa-brain', 'Scores intent', '/#how-it-decides', 'Every call scored for intent before a buyer is dialed.', 14, 16],
  ['fa-route', 'Routes every call', '/features/inbound_call_routing', 'The best eligible buyer wins the call, in milliseconds.', 50, 4],
  ['fa-shield-halved', 'Blocks spam and duplicates', '/features/spam_tag_mitigation', 'Spam and duplicate checks run before anyone is dialed.', 86, 16],
  ['fa-file-signature', 'Checks DNC and consent', '/features/suppression_lists', 'TCPA, DNC and VOIP screening, with consent on record.', 94, 50],
  ['fa-closed-captioning', 'Transcribes and summarizes', '/features/transcriptions', 'Summaries, sentiment and topics on every recorded call.', 86, 84],
  ['fa-headset', 'Answers and qualifies calls', '/features/voice_agents', 'Voice agents answer and qualify callers, then transfer.', 50, 96],
  ['fa-comment-sms', 'Texts and follows up', '/features/ai_sms_bots', 'SMS bots engage leads and schedule calls automatically.', 14, 84],
  ['fa-user-shield', 'Redacts personal data', '/features/pii_redaction', 'PII redacted from transcriptions and cleared from aged data.', 6, 50],
]

// the intro's four outcomes, Salesloft-style
const HERO_POINTS = ['Score every call’s intent with AI', 'Route to the highest-value buyer', 'Block spam, DNC and duplicates', 'See the revenue behind every call']

// "Power your entire call business" [3D object, title, text, page, link] (facts from the site's own pages)
const POWER = [
  ['scale', 'Built for scale', 'Infrastructure that holds 99.9% uptime and an 85ms average routing time, so every call reaches a buyer fast.', '/features/inbound_call_routing', 'Call routing'],
  ['support', 'Specialist support', 'Phone, live chat and email support, plus live video sessions with our specialists whenever you need a hand.', '/p/contact', 'Talk to us'],
  ['grow', 'Grow on your terms', 'No onboarding fees. Usage-based rates with volume discounts: use what you need and scale as you grow.', '/pricing', 'See pricing'],
  ['open', 'Open by design', 'API-first: everything in the dashboard runs on the same REST API, for seamless integrations and custom workflows.', '/features/api', 'REST API'],
]

// each capability sphere gets its own hue in the blue-violet range
const HUB_HUES = [217, 232, 199, 250, 210, 190, 240, 205]

// a gentle curve from the chip (50,50) to a node, bowed to one side
function hubPath(x, y) {
  const mx = (50 + x) / 2, my = (50 + y) / 2, dx = x - 50, dy = y - 50
  return `M50 50 Q${(mx - dy * 0.18).toFixed(1)} ${(my + dx * 0.18).toFixed(1)} ${x} ${y}`
}

// AI protection: the checks every call passes, and the three layers behind them
const SHIELD_CHECKS = [['spam', 'Spam'], ['dup', 'Duplicate'], ['dnc', 'DNC'], ['line', 'Line type'], ['consent', 'Consent']]
const SHIELD_LAYERS = [
  ['fa-shield-halved', 'Screen', 'AI scores intent and checks spam, duplicates, DNC and VOIP before any call routes or dials.', '/features/suppression_lists', 'Screening'],
  ['fa-file-signature', 'Comply', 'A verifiable consent record for every lead, state calling-hour rules, and PII redacted or hashed on schedule.', '/features#security-compliance-tools', 'Compliance'],
  ['fa-id-card', 'Secure', 'KYC, KYB and STIR/SHAKEN for your numbers; scoped API tokens, IP whitelisting, encrypted keys and security logs.', '/features/api', 'Platform security'],
]

const PLATFORM_TABS = [
  ['pingpost', 'Ping/Post', 'fa-gavel'], ['dialer', 'Power Dialer', 'fa-phone-volume'], ['tracking', 'Call Tracking', 'fa-route'],
  ['automation', 'Lead Automation', 'fa-bolt'], ['agent', 'Agent Control Center', 'fa-headset'],
]

// Answers come from the pricing and feature pages [question, answer, optional [href, link text]]
const FAQ = [
  ['Are there any onboarding fees?', 'No. Avortyx does not charge onboarding fees.', ['/pricing', 'See pricing']],
  ['Can I bring my own carrier?', 'Yes. Connect Twilio, Plivo or Telnyx, or bring any SIP-compatible carrier, and manage the phone numbers from every connected provider in one place.', ['/features/multiple_telephone_providers', 'Telephone providers']],
  ['How are calls priced?', 'Tracking numbers have a monthly rate, and inbound calls are billed per minute, rounded up to the nearest full minute. The inbound rates cover both legs of a call connected to a buyer, and your statements itemize each leg.', ['/pricing', 'Rates and calculator']],
  ['Is there an API?', 'Yes. Avortyx is API-first: anything you can do in the dashboard, you can do through the REST API, with access tokens limited to exactly the resources they need.', ['/features/api', 'REST API']],
  ['How do you handle compliance and personal data?', 'DNC checks, suppression lists and blacklists run before any call is forwarded or dialed, and state rules enforce calling-hour windows. PII can be cleared or hashed from aged data and restricted to users with the PII permission.', ['/features#security-compliance-tools', 'Security and compliance']],
  ['Do you offer discounts?', 'Yes, for high-volume customers.', ['/p/contact', 'Contact our team']],
  ['What support do you offer?', 'Phone, live chat and email support, plus live video sessions with our specialists.', null],
]

const FAQ_LD = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }

export const meta = {
  title: "Avortyx Prototype · Call Tracking & Lead Automation",
  description: "Call tracking, real-time ping/post and lead-to-call automation in one platform. Route every call to the right buyer and see the revenue behind it.",
  ogTitle: "Avortyx Prototype",
  bodyClass: "pages home ",
  layout: "site",
  bootStyle: "html.avx-boot main > :not(.marketing-hero-simple) { opacity: 0 !important; animation: none !important; }",
  head: (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://avortyx-prototype.vercel.app/#org","name":"Avortyx","url":"https://avortyx-prototype.vercel.app/","logo":"https://avortyx-prototype.vercel.app/favicon-192.png"},{"@type":"SoftwareApplication","name":"Avortyx","applicationCategory":"BusinessApplication","operatingSystem":"Web","url":"https://avortyx-prototype.vercel.app/","image":"https://avortyx-prototype.vercel.app/og-image.png?v=2","description":"Call tracking, real-time ping/post and lead-to-call automation in one platform. Route every call to the right buyer and see the revenue behind it.","publisher":{"@id":"https://avortyx-prototype.vercel.app/#org"}}]}` }} />
      <style dangerouslySetInnerHTML={{ __html: `
    /* Hero rings: centered behind the h1, tilted in 3D and slowly spinning */
    .hero-heading { position: relative; }
    .hero-heading h1 { position: relative; z-index: 1; }
    .hero-rings {
      position: absolute; top: 50%; left: 50%; z-index: 0;
      width: min(1040px, 150vw); aspect-ratio: 1;
      transform: translate(-50%, -50%);
      perspective: 1400px;
      pointer-events: none;
    }
    .hero-rings-tilt {
      width: 100%; height: 100%;
      transform-style: preserve-3d;
      animation: heroRingsTilt 18s ease-in-out infinite alternate;
    }
    .hero-rings img {
      display: block; width: 100%; height: 100%; max-width: none;
      opacity: .55;
      /* pre-rendered art (assets/avx-baked): already blue on transparent, no runtime filters */
      animation: heroRingsSpin 48s linear infinite;
      will-change: transform;
    }
    [data-bs-theme="dark"] .hero-rings img { opacity: .8; }
    @keyframes heroRingsSpin { to { transform: rotateZ(360deg); } }
    @keyframes heroRingsTilt {
      0% { transform: rotateX(30deg) rotateY(-14deg); }
      50% { transform: rotateX(16deg) rotateY(4deg); }
      100% { transform: rotateX(26deg) rotateY(14deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-rings-tilt, .hero-rings img { animation: none; }
      .hero-rings-tilt { transform: rotateX(24deg); }
    }
` }} />
    </>
  ),
}

const logo = (file) => `/assets/avx-site/img/${file}.webp`

// the still row under the stats: carriers and ad platforms, in black and white [file, name, width, height]
const WORKS_WITH = [
  ['twilio', 'Twilio', 193, 58], ['telnyx', 'Telnyx', 193, 46], ['plivo', 'Plivo', 230, 71], ['ga', 'Google Ads', 194, 65],
  ['voluum', 'Voluum', 264, 72], ['cake', 'Cake', 181, 96], ['onsip', 'OnSIP', 230, 73], ['avoxi', 'Avoxi', 432, 100],
]

// "We Integrate With": CRM, messaging and automation tools, a still grid [file, name, page, width, height]
const INTEGRATION_ROWS = [
  [
    ['elevenlabs', 'ElevenLabs', '/features/voice_agents/elevenlabs', 220, 140],
    ['zoho_crm', 'Zoho CRM', '/features/zoho_crm', 200, 120],
    ['aws_s3', 'AWS S3', '/features/aws_s3', 200, 120],
    ['salesforce', 'Salesforce', '/features/salesforce', 129, 91],
    ['infusionsoft-blue', 'Infusionsoft', '/features/infusionsoft', 168, 24],
    ['slack', 'Slack', '/features/slack', 226, 65],
  ],
  [
    ['mailchimp', 'MailChimp', '/features/mailchimp', 168, 51],
    ['mailgun', 'Mailgun', '/features/mailgun', 168, 46],
    ['sendgrid', 'Sendgrid', '/features/sendgrid', 168, 30],
    ['typeform', 'Typeform', '/features/typeform', 168, 106],
    ['zapier', 'Zapier', '/features/zapier', 171, 78],
  ],
]


// Product tour: the first view (live calls) as it first appears, so crawlers and visitors
// without JavaScript see it; motion.js replaces it with the live, switchable views.
const TOUR_TABS = [['calls', 'Live calls'], ['pingpost', 'Ping/Post'], ['sources', 'Sources'], ['usage', 'Usage']]
const TOUR_CALLS = [
  ['14:02:51', '(312) ··47', 'Google Ads', 'Apex Insurance', '4:12', '$64.00', 'Converted', 'ok'],
  ['14:02:37', '(646) ··18', 'Meta', 'Northwind Benefits', '2:48', '$41.50', 'Connected', 'ok'],
  ['14:02:12', '(415) ··62', 'Bing', 'Meridian Health', '—', '—', 'Ringing', 'ring'],
  ['14:01:58', '(713) ··35', 'Affiliate', 'Summit Solar', '6:05', '$88.20', 'Connected', 'ok'],
  ['14:01:40', '(480) ··91', 'TikTok', 'Lakeside Legal', '—', '—', 'In queue', 'bid'],
  ['14:01:19', '(305) ··27', 'Organic', 'Harbor Home', '3:31', '$52.75', 'Converted', 'ok'],
  ['14:00:56', '(720) ··83', 'Email', 'Pinnacle Auto', '—', '—', 'Missed', 'cap'],
]

function TourPreview() {
  return (
    <>
      <div className="avx-tour-tabs" role="tablist" aria-label="Product views">
        {TOUR_TABS.map(([key, label], i) => (
          <button key={key} type="button" className={i ? 'avx-tour-tab' : 'avx-tour-tab avx-on'} role="tab" id={`tour-tab-${key}`} aria-controls="tour-stage" aria-selected={i ? 'false' : 'true'} tabIndex={i ? -1 : 0} data-tour={key}>
            <span>{label}</span><i />
          </button>
        ))}
      </div>
      <div className="avx-tour-stage" id="tour-stage" role="tabpanel" aria-labelledby="tour-tab-calls">
        <div className="avx-console avx-tour-on" role="img" aria-label="Live calls: every call with its source, buyer and revenue (demo data)">
          <div className="avx-cs-bar">
            <i /><i /><i />
            <span className="avx-cs-path">app.avortyx.com / <b>calls</b></span>
            <span className="avx-cs-live"><i className="avx-live-dot" />Live</span>
          </div>
          <div className="avx-cs-body">
            <div className="avx-kpis avx-kpis-4">
              <div className="avx-kpi" data-k="live"><span>Live calls</span><b>42</b><em className="avx-up">▲ 6</em></div>
              <div className="avx-kpi" data-k="today"><span>Calls today</span><b>3,918</b><em className="avx-up">▲ 12.4%</em></div>
              <div className="avx-kpi" data-k="conv"><span>Converted</span><b>27.8%</b><em className="avx-up">▲ 1.9%</em></div>
              <div className="avx-kpi" data-k="rev"><span>Revenue today</span><b>$84,210</b><em className="avx-up">▲ 8.1%</em></div>
            </div>
            <table className="avx-cs-table avx-cs-log">
              <thead><tr><th>Time</th><th>Caller</th><th>Source</th><th>Buyer</th><th>Duration</th><th>Revenue</th><th>Status</th></tr></thead>
              <tbody>
                {TOUR_CALLS.map(([time, caller, source, buyer, dur, rev, status, kind]) => (
                  <tr key={time}>
                    <td>{time}</td><td>{caller}</td><td>{source}</td><td>{buyer}</td><td>{dur}</td><td>{rev}</td>
                    <td><span className={`avx-live-pill avx-pill-${kind}`}>{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="avx-cs-foot">Every call with its source, buyer and revenue · demo data</div>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <main>
      <section className="marketing-hero-simple hero-constellation-bg avx-hero-calm" id="hero-option-s">
        <div className="avx-hero-3d" aria-hidden="true">
          <div className="avx-hero-3d-plane">
            <div className="avx-hero-3d-grid" />
          </div>
          <div className="avx-hero-3d-horizon" />
        </div>
        <div className="container">
          <div className="avx-hero-grid">
            <div className="avx-hero-copy">
              <p className="avx-hero-eyebrow"><span>AI</span>The AI tracking platform built for peak performance</p>
              <div className="hero-heading">
                <h1 className="display-4 fw-bold">
                  Track.
                  {" "}
                  Route.
                  {" "}
                  <span className="text-success">Grow.</span>
                </h1>
              </div>
              <p className="lead hero-lead">
                Matching every conversation with its highest-value buyer in real time.
              </p>
              <ul className="avx-hero-points">
                {HERO_POINTS.map((point) => (
                  <li key={point}><i className="fa-solid fa-circle-check" aria-hidden="true" />{point}</li>
                ))}
              </ul>
              <p className="avx-hero-for">For marketers, advertisers, and brands.</p>
              <div className="d-flex flex-wrap gap-3 avx-hero-ctas">
                <a href="/sign_up" className="btn btn-td-green btn-lg fw-semibold">Sign Up Free</a>
                {" "}
                <a href="/p/request_demo" className="btn btn-outline-td-green btn-lg fw-semibold">Request Demo</a>
              </div>
              <a href="#how-it-decides" className="avx-hero-tour-link">How it works <span aria-hidden="true">↓</span></a>
            </div>
            {/* live decision: one call scored, bid on and routed; motion.js replays it with new calls */}
            <div className="avx-decide" data-avx-decide="" role="img" aria-label="Live demo: an incoming call is scored by AI for intent and connected to the best buyer">
              <div className="avx-dc-bar">
                <span className="avx-dc-live"><i className="avx-live-dot" />Live decision</span>
                {" "}
                <span className="avx-dc-clock" data-dc="clock">14:02:51 UTC</span>
                {" "}
                <span className="avx-dc-time">Decided in <b data-dc="ms">84ms</b></span>
              </div>
              <div className="avx-fc3d">
              {/* the floor is outside the 3D stage, so it never cuts through the chip or cards */}
              <span className="avx-fc-floor" aria-hidden="true" />
              <span className="avx-fc-tip" data-dc="tip" aria-hidden="true" />
              <div className="avx-fc">
                <div className="avx-fc-caller avx-fc-done">
                  <span className="avx-fc-phone"><i /><i /><i className="fa-solid fa-phone" aria-hidden="true" /></span>
                  <span className="avx-fc-pad" aria-hidden="true" />
                  <b data-dc="num">(312) 555-0142</b>
                  <span data-dc="meta">Google Ads · Medicare</span>
                </div>
                <span className="avx-fc-link avx-on" data-dc="link1"><i /></span>
                <div className="avx-fc-core avx-on">
                  <div className="avx-fc-chip">
                    <span className="avx-fc-pins" aria-hidden="true" />
                    <span className="avx-fc-slab" aria-hidden="true" />
                    <span className="avx-fc-slab" aria-hidden="true" />
                    <span className="avx-fc-slab" aria-hidden="true" />
                    <span className="avx-fc-slab" aria-hidden="true" />
                    <div className="avx-fc-die">
                      <span className="avx-fc-scan" aria-hidden="true" />
                      <small>AI intent</small>
                      <b data-dc="intent">0.91</b>
                      <span className="avx-fc-bar"><i data-dc="gauge" style={{ "--v": ".91" }} /></span>
                    </div>
                  </div>
                </div>
                <span className="avx-fc-link avx-on" data-dc="link2"><i /></span>
                <ul className="avx-fc-buyers" data-dc="buyers">
                  <li className="avx-win"><i>AI</i><span>Apex Insurance</span></li>
                  <li className="avx-lose"><i>MH</i><span>Meridian Health</span></li>
                  <li className="avx-lose"><i>NB</i><span>Northwind Benefits</span></li>
                </ul>
              </div>
              </div>
              <p className="avx-fc-status avx-on" data-dc="status">
                <span className="avx-fc-done-msg">
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  {" "}Connected to <b data-dc="winner">Apex Insurance</b> · <b data-dc="pay">$64.00</b>
                </span>
                <span className="avx-fc-wait-msg">Finding the best buyer…</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="avx-statsbar" aria-label="Avortyx at a glance">
        <div className="container">
          <div className="avx-stats-row">
            <div><b className="avx-proof-num">99.9%</b><span>Uptime</span></div>
            <div><b className="avx-proof-num">85ms</b><span>Avg routing time</span></div>
            <div><b className="avx-proof-num">10+</b><span>Buyer match rules</span></div>
          </div>
          <p className="avx-logos-label">Works with the carriers and ad platforms you already run</p>
          <ul className="avx-logos">
            {WORKS_WITH.map(([file, name, w, h]) => (
              <li key={file}><img alt={name} src={`/assets/avx-site/img/mono/${file}.webp`} width={w} height={h} loading="lazy" decoding="async" /></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mktg-section avx-proof avx-shield-sec" id="trust">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">AI at the core</p>
            <h2 className="fw-bold">Advanced AI. Protected by default.</h2>
            <p className="text-muted">AI runs the work around every call, and screens every call before a buyer’s phone rings.</p>
          </div>
          {/* the AI hub: the chip at the centre, lines out to what the AI handles; motion.js sends
              a pulse to each in turn */}
          <div className="avx-hub" data-avx-hub="" role="img" aria-label={`What Avortyx AI handles: ${AI_HUB.map((n) => n[1]).join(', ')}`}>
            <svg className="avx-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {AI_HUB.map(([, label, , , x, y]) => (
                <path key={label} d={hubPath(x, y)} vectorEffect="non-scaling-stroke" />
              ))}
            </svg>
            <span className="avx-hub-dot" aria-hidden="true" />
            <span className="avx-hub-disc" aria-hidden="true"><i /><i /></span>
            <div className="avx-hub-core" aria-hidden="true">
              <div className="avx-fc-chip avx-hub-chip">
                <span className="avx-fc-pins" />
                <span className="avx-fc-slab" />
                <span className="avx-fc-slab" />
                <span className="avx-fc-slab" />
                <span className="avx-fc-slab" />
                <div className="avx-fc-die">
                  <span className="avx-fc-scan" />
                  <BrandMark gradientId="avx-mk-g-hub" />
                  <small>Avortyx AI</small>
                </div>
              </div>
            </div>
            {AI_HUB.map(([icon, label, href, , x, y], i) => (
              <a key={label} href={href} className="avx-hub-node" style={{ "--x": x, "--y": y, "--h": HUB_HUES[i % HUB_HUES.length] }} aria-hidden="true" tabIndex={-1}>
                <i className={`fa-solid ${icon}`} />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <ul className="avx-hub-list">
            {AI_HUB.map(([icon, label, href, text]) => (
              <li key={label}><a href={href}><i className={`fa-solid ${icon}`} aria-hidden="true" /><b>{label}</b><span>{text}</span></a></li>
            ))}
          </ul>
          <div className="avx-shield">
            <div className="avx-console avx-shield-demo" data-avx-shield="" role="img" aria-label="Live screening: each call is checked for spam, duplicates, DNC, line type and consent, then routed or blocked before dialing (demo data)">
              <div className="avx-cs-bar">
                <i /><i /><i />
                <span className="avx-cs-path">app.avortyx.com / <b>screening</b></span>
                <span className="avx-cs-live"><i className="avx-live-dot" />Live</span>
              </div>
              <div className="avx-sh">
                <div className="avx-sh-radar" aria-hidden="true">
                  <i /><i /><i />
                  <span className="avx-sh-sweep" />
                  <span className="avx-sh-core"><i className="fa-solid fa-shield-halved" /></span>
                </div>
                <div className="avx-sh-call">
                  <b data-sh="num">(312) 555-0142</b>
                  <span data-sh="src">Google Ads · Medicare</span>
                </div>
                <ul className="avx-sh-checks">
                  {SHIELD_CHECKS.map(([key, label]) => <li key={key} data-c={key} className="avx-ok">{label}</li>)}
                </ul>
                <p className="avx-sh-verdict avx-pass" data-sh="verdict">Passed · routed to Apex Insurance</p>
              </div>
              <div className="avx-cs-foot">AI screening on every call · demo data</div>
            </div>
            <div className="avx-shield-layers">
              {SHIELD_LAYERS.map(([icon, title, text, href, label]) => (
                <a key={title} href={href} className="avx-shield-layer">
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  <b>{title}</b>
                  <span>{text}</span>
                  <em>{label} <span aria-hidden="true">→</span></em>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section avx-power" id="power">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Why Avortyx</p>
            <h2 className="fw-bold">Power your entire call business</h2>
            <p className="text-muted">Built to push call performance further, and to grow with you.</p>
          </div>
          <div className="avx-power-grid">
            {POWER.map(([kind, title, text, href, label]) => (
              <a key={kind} href={href} className="avx-power-card">
                <div className={`avx-pw-stage avx-pw-${kind}`} aria-hidden="true">
                  <div className="avx-pw-obj">
                    {kind === 'scale' && <><i /><i /><i /></>}
                    {kind === 'support' && <><b className="avx-pw-ball"><i className="fa-solid fa-headset" /></b><span className="avx-pw-orbit"><i /></span></>}
                    {kind === 'grow' && <><span className="avx-pw-bar"><i /><i /><i /></span><span className="avx-pw-bar"><i /><i /><i /></span><span className="avx-pw-bar"><i /><i /><i /></span></>}
                    {kind === 'open' && <><i /><i /><i /><i /><i /><i /><b className="avx-pw-code">{"{ }"}</b></>}
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <em>{label} <span aria-hidden="true">→</span></em>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="mktg-section avx-lf-sec" id="how-it-decides">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">How it decides</p>
            <h2 className="fw-bold">Transforming high-intent traffic into qualified conversations, and conversations into closed revenue</h2>
            <p className="text-muted">Every call goes through the same three steps — signal, score, route — before a buyer’s phone rings.</p>
          </div>
          <div className="mktg-lead-flow avx-flow3d avx-lf2 avx-lf3 d-none d-lg-block mt-5">
            <div className="hero-simple-flow">
              <div className="hero-simple-node hero-simple-node-leads">
                <div className="hero-simple-node-icon"><i className="fa-solid fa-headset" aria-hidden="true" /></div>
                <div className="hero-simple-node-label">Leads</div>
                <div className="hero-simple-node-sources">Calls · Forms · API</div>
              </div>
              <div className="hero-simple-arrow">
                <div className="hero-simple-arrow-track">
                  <div className="hero-simple-arrow-dot" />
                </div>
                <div className="hero-simple-step-labels"><span>Route</span> <span>Match</span></div>
              </div>
              <div className="hero-simple-hub">
                <div className="hero-simple-hub-icon"><i className="fa-solid fa-bolt" aria-hidden="true" /></div>
                <div className="hero-simple-hub-name">Avortyx</div>
              </div>
              <div className="hero-simple-arrow">
                <div className="hero-simple-arrow-track">
                  <div className="hero-simple-arrow-dot hero-simple-arrow-dot-delayed" />
                </div>
                <div className="hero-simple-step-labels"><span>Connect</span> <span>Convert</span></div>
              </div>
              <div className="hero-simple-node hero-simple-node-revenue">
                <div className="hero-simple-node-icon hero-simple-node-icon-success"><i className="fa-solid fa-dollar-sign" aria-hidden="true" /></div>
                <div className="hero-simple-node-label">Revenue</div>
                <div className="hero-simple-node-sources">Buyers · Conversions</div>
              </div>
            </div>
          </div>
          <div className="avx-how-flow text-start mt-5" data-avx-how="">
            <div className="avx-how-step">
              <span className="avx-how-n">01</span>
              {" "}
              <i className="avx-how-ic fa-solid fa-tower-broadcast" aria-hidden="true" />
              <h3>Signal</h3>
              <p>Everything known the moment the call connects.</p>
              <ul>
                <li>Caller ID and line type</li>
                <li>Source, campaign and keyword</li>
                <li>Geo, time and day</li>
                <li>The caller’s first words</li>
              </ul>
            </div>
            <div className="avx-how-link" aria-hidden="true"><i /></div>
            <div className="avx-how-step">
              <span className="avx-how-n">02</span>
              {" "}
              <i className="avx-how-ic fa-solid fa-brain" aria-hidden="true" />
              <h3>Score</h3>
              <p>The call is screened and scored before anyone is dialed.</p>
              <ul>
                <li>Intent and sentiment</li>
                <li>Spam and duplicate checks</li>
                <li>TCPA, DNC and VOIP screening</li>
                <li>State rules and consent</li>
              </ul>
            </div>
            <div className="avx-how-link" aria-hidden="true"><i /></div>
            <div className="avx-how-step">
              <span className="avx-how-n">03</span>
              {" "}
              <i className="avx-how-ic fa-solid fa-route" aria-hidden="true" />
              <h3>Route</h3>
              <p>The best eligible buyer wins the call.</p>
              <ul>
                <li>Buyer match rules</li>
                <li>Live bids and ping/post</li>
                <li>Caps, hours and concurrency</li>
                <li>Failover if a buyer misses</li>
              </ul>
            </div>
          </div>
          <p className="avx-how-note"><b>85ms</b> average routing time, from first ring to buyer.</p>
        </div>
      </section>
      <section className="mktg-section avx-tour" id="product-tour" data-avx-tour="">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Product tour</p>
            <h2 className="fw-bold">Full-stack, event-level observability for every voice session, auction, and conversion, in sub-millisecond real time</h2>
            <p className="text-muted">One workspace for tracking, routing, bidding and reporting.</p>
          </div>
          <div className="avx-obs" data-avx-obs="" aria-label="Live readouts (demo data)">
            <span className="avx-obs-live"><i className="avx-live-dot" />Live <b data-obs="clock">14:02:51</b> UTC</span>
            <span>Events/s <b data-obs="eps">1,284</b></span>
            <span>P99 latency <b data-obs="p99">0.62 ms</b></span>
            <span>Auctions/min <b data-obs="apm">312</b></span>
            <span>Voice sessions <b data-obs="vs">42</b></span>
            <em>demo data</em>
          </div>
          <TourPreview />
        </div>
      </section>
      <section className="mktg-section avx-ai" id="ai-at-work" data-avx-ai="">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">AI at work</p>
            <h2 className="fw-bold">Ask it. Hear it. Let it take the call.</h2>
            <p className="text-muted">Answers from your call data, transcripts that score themselves, and voice agents that qualify callers before a buyer is dialed.</p>
          </div>
          <div className="avx-tour-tabs avx-ai-tabs" role="tablist" aria-label="AI demos">
            <button type="button" className="avx-tour-tab avx-on" role="tab" aria-selected="true" aria-controls="avx-ai-ask" id="avx-ai-tab-ask" data-ai="ask">
              <span><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" /> Ask Avortyx</span>
            </button>
            {" "}
            <button type="button" className="avx-tour-tab" role="tab" aria-selected="false" aria-controls="avx-ai-listen" id="avx-ai-tab-listen" data-ai="listen" tabIndex="-1">
              <span><i className="fa-solid fa-wave-square" aria-hidden="true" /> Live transcript</span>
            </button>
            {" "}
            <button type="button" className="avx-tour-tab" role="tab" aria-selected="false" aria-controls="avx-ai-voice" id="avx-ai-tab-voice" data-ai="voice" tabIndex="-1">
              <span><i className="fa-solid fa-headset" aria-hidden="true" /> Voice agent</span>
            </button>
          </div>
          <div className="avx-ai-panel avx-on" id="avx-ai-ask" role="tabpanel" aria-labelledby="avx-ai-tab-ask" data-panel="ask">
            <div className="avx-console avx-ask">
              <div className="avx-cs-bar">
                <i />
                <i />
                <i />
                <span className="avx-cs-path">app.avortyx.com / <b>ask</b></span>
                <span className="avx-cs-live"><i className="avx-live-dot" />AI</span>
              </div>
              <div className="avx-ask-log" aria-live="polite">
                <div className="avx-ask-hello">
                  <span className="avx-ask-av" aria-hidden="true" />
                  <p>Ask anything about your calls, sources and buyers. Try one of these:</p>
                </div>
              </div>
              <div className="avx-ask-chips">
                <button type="button" data-q="margin">Which traffic source had the best margin last week?</button>
                {" "}
                <button type="button" data-q="drop">Why did connect rate dip yesterday afternoon?</button>
                {" "}
                <button type="button" data-q="buyer">Which buyer should get more Medicare calls?</button>
                {" "}
                <button type="button" data-q="today">Summarize today’s calls</button>
              </div>
              <form className="avx-ask-form">
                <input type="text" name="q" autoComplete="off" placeholder="Ask about your calls, buyers or sources…" aria-label="Ask Avortyx a question" />
                {" "}
                <button type="submit" aria-label="Ask"><i className="fa-solid fa-arrow-up" aria-hidden="true" /></button>
              </form>
              <div className="avx-cs-foot">Answers drawn from your workspace · demo data</div>
            </div>
          </div>
          <div className="avx-ai-panel" id="avx-ai-listen" role="tabpanel" aria-labelledby="avx-ai-tab-listen" data-panel="listen" hidden>
            <div className="avx-console avx-listen">
              <div className="avx-cs-bar">
                <i />
                <i />
                <i />
                <span className="avx-cs-path">app.avortyx.com / calls / <b>live transcript</b></span>
                <span className="avx-cs-live"><i className="avx-live-dot" />Live</span>
              </div>
              <div className="avx-listen-body">
                <div className="avx-listen-main">
                  <div className="avx-listen-head">
                    <span className="avx-listen-wave" aria-hidden="true" />
                    {" "}
                    <span><b>(415) 555-0133</b> → Apex Insurance</span>
                    {" "}
                    <span className="avx-listen-clock" data-ls="clock">0:00</span>
                  </div>
                  <ol className="avx-listen-lines" data-ls="lines" />
                </div>
                <aside className="avx-listen-side">
                  <p className="avx-listen-k">Sentiment</p>
                  <svg className="avx-listen-spark" viewBox="0 0 200 48" preserveAspectRatio="none" aria-hidden="true">
                    <path data-ls="spark" d="M0 24" />
                  </svg>
                  <p className="avx-listen-k">Topics</p>
                  <p className="avx-listen-topics" data-ls="topics" />
                  <p className="avx-listen-k">AI summary</p>
                  <p className="avx-listen-sum" data-ls="sum">Builds as the call goes on…</p>
                </aside>
              </div>
              <div className="avx-cs-foot">Transcribed, scored and summarized in real time · demo data</div>
            </div>
          </div>
          <div className="avx-ai-panel" id="avx-ai-voice" role="tabpanel" aria-labelledby="avx-ai-tab-voice" data-panel="voice" hidden>
            <div className="avx-console avx-voice">
              <div className="avx-cs-bar">
                <i />
                <i />
                <i />
                <span className="avx-cs-path">app.avortyx.com / voice agents / <b>medicare intake</b></span>
                <span className="avx-cs-live"><i className="avx-live-dot" />Agent</span>
              </div>
              <div className="avx-voice-body">
                <div className="avx-voice-orb" aria-hidden="true"><i /><i /><i /></div>
                <div className="avx-voice-main">
                  <p className="avx-voice-state" data-vc="state">Ready · press play to hear a sample call</p>
                  <button type="button" className="avx-voice-play" data-vc="play">
                    <i className="fa-solid fa-play" aria-hidden="true" />
                    <span>Play sample call</span>
                  </button>
                  <ol className="avx-voice-lines" data-vc="lines" aria-live="polite" />
                  <ul className="avx-voice-steps" data-vc="steps">
                    <li>Greets and confirms consent</li>
                    <li>Qualifies: age, ZIP, current plan</li>
                    <li>Scores intent</li>
                    <li>Warm-transfers to the best buyer</li>
                  </ul>
                </div>
              </div>
              <div className="avx-cs-foot">Voice agents through the ElevenLabs integration · this sample uses your browser’s voice</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section avx-feat avx-platform" id="platform" data-avx-platform="">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Core tools</p>
            <h2 className="fw-bold">Monetize, dial, route, automate and manage</h2>
            <p className="text-muted">Five core tools in one workspace. Pick one to see it running.</p>
          </div>
          <div className="avx-tour-tabs avx-ai-tabs avx-plat-tabs" role="tablist" aria-label="Core tools">
            {PLATFORM_TABS.map(([key, label, icon], i) => (
              <button key={key} type="button" className={i ? 'avx-tour-tab' : 'avx-tour-tab avx-on'} role="tab" id={`plat-tab-${key}`} aria-controls={`plat-${key}`} aria-selected={i ? 'false' : 'true'} tabIndex={i ? -1 : 0}>
                <span><i className={`fa-solid ${icon}`} aria-hidden="true" /> {label}</span>
              </button>
            ))}
          </div>
          <div className="avx-plat-panel" id="plat-pingpost" role="tabpanel" aria-labelledby="plat-tab-pingpost">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="mktg-spotlight-visual" data-avx-demo="pingpost">
                  <div className="spotlight-flow-steps">
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-building" aria-hidden="true" />
                      {" "}
                      <span><strong>Publisher</strong> — Sends lead data</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-satellite-dish" aria-hidden="true" />
                      {" "}
                      <span><strong>PING</strong> — Check available buyers, get bids</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-filter" aria-hidden="true" />
                      {" "}
                      <span><strong>Buyer Matching</strong> — Hours, caps, geo, filters, duplicates</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-phone-flip" aria-hidden="true" />
                      {" "}
                      <span><strong>POST</strong> — Get tracking number for the call</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-circle-check" aria-hidden="true" />
                      {" "}
                      <span><strong>Connected</strong> — Caller routes to selected buyer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mktg-section-header">
                  <p className="avx-eyebrow">Monetize</p>
                  <h3 className="h2 fw-bold mb-3">Ping/Post</h3>
                </div>
                <p className="text-muted">Real-time bidding for inbound calls — connect every lead to the buyer who values it most.</p>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    10+ buyer matching criteria, checked in real time
                  </li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Route by bid, priority, or earnings-per-call</li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Static and live webhook bidders in one auction
                  </li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Per-buyer ping caps by minute, hour, or day</li>
                </ul>
                <a className="avx-more-link mt-3" href="/features/ping_post">Explore Ping/Post <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="avx-plat-panel" id="plat-dialer" role="tabpanel" aria-labelledby="plat-tab-dialer">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="mktg-spotlight-visual" data-avx-demo="dialer">
                  <div className="spotlight-flow-steps">
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-users" aria-hidden="true" />
                      {" "}
                      <span><strong>Leads Queue</strong> — Leads enter via API, import, actions, and more</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-headset" aria-hidden="true" />
                      {" "}
                      <span><strong>Agent Available</strong> — Agent on the line, ready for the next call</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                      {" "}
                      <span><strong>Place Call</strong> — Dials the next lead when an agent is free</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-phone-flip" aria-hidden="true" />
                      {" "}
                      <span><strong>Connected</strong> — Live answer bridged to agent</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-clipboard-check" aria-hidden="true" />
                      {" "}
                      <span><strong>Disposition</strong> — Agent selects outcome, next lead</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mktg-section-header">
                  <p className="avx-eyebrow">Dial</p>
                  <h3 className="h2 fw-bold mb-3">Power Dialer</h3>
                </div>
                <p className="text-muted">Continuous outbound dialing that keeps agents talking, not waiting.</p>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Places the next call the moment an agent is free
                  </li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Answering-machine screening</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Built-in WebRTC softphone, no downloads</li>
                </ul>
                <a className="avx-more-link mt-3" href="/features/agent_controls#power-dialer">
                  Explore the Power Dialer{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="avx-plat-panel" id="plat-tracking" role="tabpanel" aria-labelledby="plat-tab-tracking">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="mktg-spotlight-visual" data-avx-demo="tracking">
                  <div className="spotlight-flow-steps">
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-phone-flip" aria-hidden="true" />
                      {" "}
                      <span><strong>Inbound Call</strong> — Caller dials your tracking number</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-message" aria-hidden="true" />
                      {" "}
                      <span><strong>IVR Greeting</strong> — Menu and keypress collection</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-diagram-project" aria-hidden="true" />
                      {" "}
                      <span><strong>Smart Routing</strong> — Route by tier, bid, or EPC</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-users" aria-hidden="true" />
                      {" "}
                      <span><strong>Ring Buyers</strong> — In priority order or all at once</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-circle-check" aria-hidden="true" />
                      {" "}
                      <span><strong>Connected</strong> — Call bridged to the buyer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mktg-section-header">
                  <p className="avx-eyebrow">Route</p>
                  <h3 className="h2 fw-bold mb-3">Call Tracking</h3>
                </div>
                <p className="text-muted">Build call flows that send every caller to the right buyer.</p>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Tier/weight priority with capacity caps</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Simultaneous ring — first to answer wins</li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Question & Answer flows that qualify and route callers
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    AI Voice Agent flows that answer and pre-qualify
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Whisper messages and answering-machine detection
                  </li>
                </ul>
                <a className="avx-more-link mt-3" href="/features/call_tracking">
                  Explore Call Tracking & Routing{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="avx-plat-panel" id="plat-automation" role="tabpanel" aria-labelledby="plat-tab-automation">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="mktg-spotlight-visual" data-avx-demo="automation">
                  <div className="spotlight-flow-steps">
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-user-plus" aria-hidden="true" />
                      {" "}
                      <span><strong>Lead Enters</strong> — Via web form, API, or import</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-comment-sms" aria-hidden="true" />
                      {" "}
                      <span><strong>Outreach</strong> — Optional SMS, email, or webhook actions</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-clock" aria-hidden="true" />
                      {" "}
                      <span><strong>Wait</strong> — Configurable delay between steps</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                      {" "}
                      <span><strong>Call</strong> — Optionally call the lead, route to a buyer</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-rotate" aria-hidden="true" />
                      {" "}
                      <span><strong>Repeat</strong> — More attempts, or complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mktg-section-header">
                  <p className="avx-eyebrow">Automate</p>
                  <h3 className="h2 fw-bold mb-3">Lead Automation</h3>
                </div>
                <p className="text-muted">Turn web leads into live calls with automated SMS, email, and dialing.</p>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />SMS, email, and outbound call sequences</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Conditional branching and retry logic</li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Scheduled callbacks with daylight-hours awareness
                  </li>
                </ul>
                <a className="avx-more-link mt-3" href="/features/lead_automation">
                  Explore Lead Automation{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="avx-plat-panel" id="plat-agent" role="tabpanel" aria-labelledby="plat-tab-agent">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="mktg-spotlight-visual" data-avx-demo="agent">
                  <div className="spotlight-flow-steps">
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-headset" aria-hidden="true" />
                      {" "}
                      <span><strong>Agent Online</strong> — Connects via WebRTC softphone</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-clipboard-list" aria-hidden="true" />
                      {" "}
                      <span><strong>Interview</strong> — Guided scripts to qualify the caller</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-phone-flip" aria-hidden="true" />
                      {" "}
                      <span><strong>Transfer</strong> — Hand the call to a buyer</span>
                    </div>
                    <div className="spotlight-flow-arrow"><i className="fa-solid fa-arrow-down" aria-hidden="true" /></div>
                    <div className="spotlight-flow-step">
                      <i className="fa-solid fa-tag" aria-hidden="true" />
                      {" "}
                      <span><strong>Disposition</strong> — Tag the outcome, trigger follow-up actions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mktg-section-header">
                  <p className="avx-eyebrow">Manage</p>
                  <h3 className="h2 fw-bold mb-3">Agent Control Center</h3>
                </div>
                <p className="text-muted">Run your whole call center from one screen.</p>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Interview and qualify callers</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Transfer to buyers or other agents</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Disposition calls and schedule callbacks</li>
                </ul>
                <a className="avx-more-link mt-3" href="/features/agent_controls#agent-control-center">
                  Explore the Agent Control Center{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section avx-win avx-caps">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Platform</p>
            <h2 className="fw-bold mb-3">More ways to win the call</h2>
            <p className="text-muted">The rest of the platform that turns every connected call into revenue.</p>
          </div>
          <div className="row g-4 text-start">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm avx-win-card">
                <div className="avx-mini avx-mini-voice" data-avx-mini="voice" aria-hidden="true">
                  <div className="avx-mv-line avx-mv-ai"><i className="avx-mv-who">AI</i><span>Are you currently insured?</span></div>
                  <div className="avx-mv-line avx-mv-caller"><span>Yes, with GEICO.</span></div>
                  <div className="avx-mv-tag"><i className="fa-solid fa-right-left" aria-hidden="true" />Warm transfer → Apex Insurance</div>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">AI Voice Agents</h3>
                  <p className="text-muted small mb-3">Voice agents plugged straight into your call flow — they answer 24/7, qualify leads, and warm-transfer to humans through the same buyers, caps, and tiers you already use.</p>
                  <a href="/features/voice_agents" className="avx-more-link mt-auto">
                    Explore Voice Agents{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm avx-win-card">
                <div className="avx-mini avx-mini-analytics" data-avx-mini="analytics" aria-hidden="true">
                  <div className="avx-ma-kpi"><span>Revenue today</span><b>$84,210</b><em>▲ 8.1%</em></div>
                  <div className="avx-ma-chart" />
                  <div className="avx-ma-src">Top source <b>Google Ads</b> · <span>38%</span> of calls</div>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">Call Analytics</h3>
                  <p className="text-muted small mb-3">See exactly what drives revenue — real-time dashboards for calls, conversions, and spend that reveal your best campaigns, traffic sources, and keywords.</p>
                  <a href="/features/call_tracking#reports-analytics" className="avx-more-link mt-auto">
                    Explore Call Analytics{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm avx-win-card">
                <div className="avx-mini avx-mini-api" data-avx-mini="api" aria-hidden="true">
                  <div className="avx-mapi-req"><b>POST</b> /v1/calls <em>201 · 84 ms</em></div>
                  <pre className="avx-mapi-res"><code>{"{\n  "}<i>{"\"id\""}</i>{": "}<s>{"\"call_8f2k1x\""}</s>{",\n  "}<i>{"\"buyer\""}</i>{": "}<s>{"\"Apex Insurance\""}</s>{",\n  "}<i>{"\"payout\""}</i>{": "}<u>{"45.00"}</u>{"\n}"}</code></pre>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">REST API</h3>
                  <p className="text-muted small mb-3">A fully programmable, API-first platform. Every resource is exposed over a clean REST API — with granular keys, IP controls, and audit logs — so you can run Avortyx from your own tools.</p>
                  <a href="/features/api" className="avx-more-link mt-auto">Explore the REST API <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="avx-caps-v3">
          <div className="avx-caps-head">
            <div>
              <h3>More capabilities</h3>
              <p>Tracking, compliance, recordings and data tools around every call.</p>
            </div>
            <a href="/features" className="avx-more-link">See all features <span aria-hidden="true">→</span></a>
          </div>
          <div className="avx-cap-grid avx-bento avx-bento-3 text-start" data-avx-bento="">
            <a href="/features/transcriptions" className="avx-cap avx-cap--lead">
              {" "}
              <i className="avx-cap-ic fa-solid fa-closed-captioning" aria-hidden="true" />
              {" "}
              <b>AI Transcriptions</b>
              {" "}
              <span>Every recorded call transcribed, with summaries, sentiment and topics.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
            <a href="/features/spam_tag_mitigation" className="avx-cap">
              {" "}
              <i className="avx-cap-ic fa-solid fa-shield-halved" aria-hidden="true" />
              {" "}
              <b>Spam Tag Mitigation</b>
              {" "}
              <span>Branded caller ID and spam-label removal, so more of your calls get answered.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
            <a href="/features/call_recordings" className="avx-cap">
              {" "}
              <i className="avx-cap-ic fa-solid fa-microphone-lines" aria-hidden="true" />
              {" "}
              <b>Call Recordings</b>
              {" "}
              <span>Record every call, control who can hear it, retain on your schedule.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
          </div>
          <div className="avx-cap-list text-start">
            <a href="/features/dynamic_number_insertion" className="avx-cap-li">
              {" "}
              <i className="avx-cap-ic fa-solid fa-hashtag" aria-hidden="true" />
              {" "}
              <b>Dynamic Number Insertion</b>
              {" "}
              <span>Swap tracking numbers on your site to tie every call to its source.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
            <a href="/features/custom_webhook" className="avx-cap-li">
              {" "}
              <i className="avx-cap-ic fa-solid fa-link" aria-hidden="true" />
              {" "}
              <b>Custom Webhooks</b>
              {" "}
              <span>Send call and lead data to any endpoint the moment events happen.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
            <a href="/features/formulas" className="avx-cap-li">
              {" "}
              <i className="avx-cap-ic fa-solid fa-square-root-variable" aria-hidden="true" />
              {" "}
              <b>Expressions & Functions</b>
              {" "}
              <span>Formulas for routing rules, data transformations and calculations.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
            <a href="/features/data_export" className="avx-cap-li">
              {" "}
              <i className="avx-cap-ic fa-solid fa-file-export" aria-hidden="true" />
              {" "}
              <b>Data Exports</b>
              {" "}
              <span>Calls, leads and recordings to CSV, on demand or on a schedule.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
            <a href="/features#security-compliance-tools" className="avx-cap-li">
              {" "}
              <i className="avx-cap-ic fa-solid fa-scale-balanced" aria-hidden="true" />
              {" "}
              <b>Security & Compliance</b>
              {" "}
              <span>Consent, suppression lists, PII redaction and state rules built in.</span>
              {" "}
              <em aria-hidden="true">→</em>
              {" "}
            </a>
          </div>
          </div>
        </div>
      </section>
      <section className="mktg-section avx-int">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Integrations</p>
            <h2 className="fw-bold mb-3">We Integrate With</h2>
            <p className="text-muted">Connect Avortyx to the tools you already use.</p>
          </div>
          <ul className="avx-int-grid">
            {INTEGRATION_ROWS.flat().map(([file, name, href, w, h]) => (
              <li key={file}>
                <a href={href} className="avx-int-tile"><img alt={name} src={logo(file)} width={w} height={h} loading="lazy" decoding="async" /></a>
              </li>
            ))}
          </ul>
          <p className="avx-int-voip-note">
            <b>Bring your own VoIP.</b> Use your preferred telephony provider, or any SIP-compatible carrier.{" "}
            <a href="/features/multiple_telephone_providers" className="avx-more-link">Telephone providers <span aria-hidden="true">→</span></a>
          </p>
          <a href="/features/integrations" className="btn avx-btn-ghost">View All Integrations</a>
        </div>
      </section>
      <section className="mktg-section avx-blog-home" id="blog">
        <div className="container">
          <div className="avx-caps-head">
            <div>
              <h2 className="fw-bold">From the blog</h2>
              <p>Guides and worked examples on call tracking, routing and pay-per-call.</p>
            </div>
            <a href="/blog" className="avx-more-link">All posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="avx-blog-grid">
            {LATEST.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
      <section className="mktg-section avx-faq" id="faq">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">FAQ</p>
            <h2 className="fw-bold">Questions, answered</h2>
          </div>
          <div className="avx-faq-list">
            {FAQ.map(([q, a, link]) => (
              <details className="avx-faq-item" key={q}>
                <summary>{q}</summary>
                <p>
                  {a}
                  {link && <>{" "}<a href={link[0]}>{link[1]} <span aria-hidden="true">→</span></a></>}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="marketing-cta-band">
        <div className="marketing-cta-band__bg" aria-hidden="true">
          <img alt="" loading="lazy" src="/assets/avx-site/img/constellation-light.svg" />
        </div>
        <div className="container">
          <h2 className="marketing-cta-band__title">Ready to get started?</h2>
          <p className="marketing-cta-band__subtitle">See how Avortyx turns every lead into a routed, tracked and paid call — start free, or book a walkthrough with a specialist.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="/sign_up" className="btn btn-cta-primary fw-semibold">Sign Up Free</a>
            {" "}
            <a href="/p/request_demo" className="btn btn-cta-outline fw-semibold">Request a Demo</a>
          </div>
        </div>
      </section>
      {/* phones: sign-up stays one tap away once the hero has scrolled off (motion.js shows it) */}
      <div className="avx-mcta" data-avx-mcta="">
        <a href="/sign_up" className="btn btn-td-green fw-semibold">Sign Up Free</a>
        <a href="/p/request_demo" className="btn btn-outline-td-green fw-semibold">Request Demo</a>
      </div>
    </main>
  )
}
