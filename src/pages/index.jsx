import BlogCard from '../components/BlogCard.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { postBySlug, LATEST } from '../blog/posts.js'
// /
// the intro's four outcomes, Salesloft-style
const HERO_POINTS = ['Score every call’s intent with AI', 'Route to the highest-value buyer', 'Block spam, DNC and duplicates', 'See the revenue behind every call']

// "Power your entire call business" [3D object, title, text, page, link] (facts from the site's own pages)
const POWER = [
  ['scale', 'Built for scale', 'Infrastructure that holds 99.9% uptime and an 85ms average routing time, so every call reaches a buyer fast.', '/features/inbound_call_routing', 'Call routing'],
  ['support', 'Specialist support', 'Phone, live chat and email support, plus live video sessions with our specialists whenever you need a hand.', '/p/contact', 'Talk to us'],
  ['grow', 'Grow on your terms', 'No onboarding fees. Usage-based rates with volume discounts: use what you need and scale as you grow.', '/pricing', 'See pricing'],
  ['open', 'Open by design', 'API-first: everything in the dashboard runs on the same REST API, for seamless integrations and custom workflows.', '/features/api', 'REST API'],
]

// each card's stage [ring icon, chips [value, label]]: only facts the card itself states
const POWER_STAGE = {
  scale: ['fa-route', [['99.9%', 'uptime'], ['85ms', 'avg routing']]],
  support: ['fa-headset', [['', 'Phone'], ['', 'Live chat'], ['', 'Email'], ['', 'Video']]],
  grow: ['fa-chart-line', [['$0', 'onboarding'], ['', 'Volume discounts']]],
  open: ['fa-code', [['', 'REST API'], ['', 'Webhooks'], ['', 'Scoped tokens']]],
}

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

const AI_STUDIO_SCENARIOS = [
  {
    id: 'medicare',
    icon: 'fa-heart-pulse',
    tag: 'Healthcare & Medicare',
    title: 'Medicare Switch Intent',
    prompt: 'Simulate 1,000 inbound Florida callers with urgent Medicare enrollment intent.',
    summary: 'Caller is comparing Part D deductibles and requesting a licensed bilingual agent before the Friday open-enrollment cutoff.',
    metrics: { intent: '0.96', sentiment: 'High Urgency (Positive)', latency: '38ms', epc: '$68.40', lift: '+36.2%' },
    transcript: '“Hello, I’m 67 and need to switch from my current Advantage plan before the deadline. Can someone check if my prescriptions are covered?”',
    entities: ['Medicare Part D', 'Aged 67', 'Prescription Check', 'Open Enrollment'],
    compliance: { tcpa: 'Verifiable Consent #TK-9402', dnc: 'National & FL DNC Clean', stir: 'Attestation A' },
    routePayload: {
      action: 'route_immediate',
      buyer: 'Meridian Senior Health',
      bid: '$68.40',
      reason: 'Top Bidder + Bilingual + Florida License',
      bridge_latency: '38ms'
    }
  },
  {
    id: 'solar',
    icon: 'fa-solar-panel',
    tag: 'Home Services & Solar',
    title: 'Solar Homeowner Intent',
    prompt: 'Filter synthetic robocalls, verify homeowner status, and route to top-bidding installer.',
    summary: 'Homeowner in Arizona with monthly electric bill over $280 looking for battery backup and zero-down financing options.',
    metrics: { intent: '0.92', sentiment: 'Solution Seeking', latency: '44ms', epc: '$54.00', lift: '+28.5%' },
    transcript: '“We just bought a single-family house in Phoenix. Our utility bill was $320 last month and we want to install rooftop panels.”',
    entities: ['Single-family Owner', 'Phoenix, AZ', '$300+ Utility Bill', 'Battery Storage'],
    compliance: { tcpa: 'Web Form Lead ID #WF-7721', dnc: 'Clean', stir: 'Attestation A' },
    routePayload: {
      action: 'route_immediate',
      buyer: 'Summit Residential Solar',
      bid: '$54.00',
      reason: 'Single-Family Verified + Bill > $250 + Open Cap',
      bridge_latency: '44ms'
    }
  },
  {
    id: 'fraud',
    icon: 'fa-shield-halved',
    tag: 'Security & Shield',
    title: 'Synthetic Voice & Fraud Shield',
    prompt: 'Screen incoming call for AI-generated cloned speech, VoIP disposable numbers, and litigator lists.',
    summary: 'Anomalous audio frequency detected: 98.2% likelihood of synthetic voice generation. Carrier marked as high-risk disposable VoIP.',
    metrics: { intent: '0.12', sentiment: 'Synthetic Robocall', latency: '22ms', epc: '$0.00', lift: 'Saved $45 Waste' },
    transcript: '“This is an automated advisory regarding your credit eligibility. Press 1 to speak with a representative immediately.”',
    entities: ['Robocall Pattern #44', 'Disposable VoIP Trunk', 'Known Serial Litigator CID'],
    compliance: { tcpa: 'Failed (No Opt-in)', dnc: 'Blocked', stir: 'Attestation C (High Risk)' },
    routePayload: {
      action: 'drop_and_blacklist',
      buyer: 'BLOCKED_BOT',
      bid: '$0.00',
      reason: 'Synthetic voice model detected + VOIP burner flagged',
      bridge_latency: '22ms'
    }
  },
  {
    id: 'auto',
    icon: 'fa-car',
    tag: 'P&C Auto Insurance',
    title: 'Auto Insurance Live Ping Auction',
    prompt: 'Run instant ping-tree auction across 5 carriers for a driver seeking multi-vehicle full coverage.',
    summary: 'High-intent driver with 2 clean vehicles and existing policy renewing in 10 days. 4 buyers submitted simultaneous bids within 60ms.',
    metrics: { intent: '0.94', sentiment: 'Ready to Purchase', latency: '62ms', epc: '$48.50', lift: '+41.0%' },
    transcript: '“My current auto policy with Geico is expiring on the 24th and I need full coverage on two cars with low deductible.”',
    entities: ['2 Vehicles', 'Full Coverage', 'Renewal in 10 Days', 'Clean Record'],
    compliance: { tcpa: 'Inbound Organic Search', dnc: 'Clean', stir: 'Attestation A' },
    routePayload: {
      action: 'route_immediate',
      buyer: 'Pinnacle Auto Insurance',
      bid: '$48.50',
      reason: 'Multi-Vehicle Priority + Top Bid (Outbid runner-up by $6.50)',
      bridge_latency: '62ms'
    }
  }
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
    /* Disable wave backgrounds behind FAQ and live demo animation */
    .avx-hero-3d, #hero-option-s .avx-hero-3d, .avx-cv-card, .avx-decide .avx-cv-card, #hero-option-s .avx-cv-card { display: none !important; }
    #faq .avx-cv-bottom, #faq canvas, #faq .avx-bwaves, #faq .avx-bwaves-host, #faq .avx-fx-host,
    .avx-faq .avx-cv-bottom, .avx-faq canvas, .avx-faq .avx-bwaves, .avx-faq .avx-bwaves-host, .avx-faq .avx-fx-host { display: none !important; }
    .avx-blog-grid-2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 960px; margin: 0 auto; }
    @media (max-width: 768px) { .avx-blog-grid-2 { grid-template-columns: 1fr !important; } }

    /* Pro live decision styling */
    .avx-decide-pro { min-height: 460px; }
    .avx-dc-telecom-chip {
      display: inline-flex; align-items: center; font-size: 11px; font-family: ui-monospace, SFMono-Regular, monospace;
      padding: 2px 8px; border-radius: 999px; background: rgba(56, 150, 248, 0.12); color: #3896f8; border: 1px solid rgba(56, 150, 248, 0.25);
    }
    .avx-dc-audio-bar {
      display: flex; align-items: center; gap: 12px; margin: 10px 14px 4px; padding: 7px 14px;
      border-radius: 10px; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 12.5px;
    }
    .avx-dc-voice-bars { display: inline-flex; align-items: flex-end; gap: 2.5px; height: 16px; width: 28px; }
    .avx-dc-voice-bars i {
      width: 2.5px; height: 40%; background: #3896f8; border-radius: 1px;
      animation: avxVoiceBars 0.8s ease-in-out infinite alternate;
    }
    .avx-dc-voice-bars i:nth-child(2) { animation-delay: 0.15s; height: 75%; }
    .avx-dc-voice-bars i:nth-child(3) { animation-delay: 0.3s; height: 100%; }
    .avx-dc-voice-bars i:nth-child(4) { animation-delay: 0.45s; height: 60%; }
    .avx-dc-voice-bars i:nth-child(5) { animation-delay: 0.2s; height: 85%; }
    .avx-dc-voice-bars i:nth-child(6) { animation-delay: 0.35s; height: 50%; }
    .avx-dc-voice-bars i:nth-child(7) { animation-delay: 0.5s; height: 90%; }
    .avx-dc-voice-bars i:nth-child(8) { animation-delay: 0.25s; height: 35%; }
    @keyframes avxVoiceBars { 0% { height: 20%; opacity: 0.4; } 100% { height: 100%; opacity: 1; } }
    .avx-dc-quote { color: #93c5fd; font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; font-family: ui-sans-serif, system-ui; }
    .avx-fc-verified { display: block; font-size: 11px; color: #106eb9; font-weight: 600; margin-top: 3px; }
    .avx-fc-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px; margin-top: 8px; }
    .avx-fc-tag { font-size: 10px; background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 4px; padding: 1px 6px; }
    .avx-fc-sent { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 1px 5px; border-radius: 4px; margin-top: 4px; }
    .avx-sent-pos { background: rgba(16, 110, 185, 0.2); color: #106eb9; }
    .avx-sent-neutral { background: rgba(148, 163, 184, 0.2); color: #cbd5e1; }
    .avx-sent-urgent { background: rgba(11, 144, 245, 0.2); color: #0b90f5; }
    .avx-fc-b-main { display: flex; align-items: center; gap: 8px; flex: 1; }
    .avx-fc-b-bid { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #f8fafc; font-family: ui-monospace, monospace; }
    .avx-fc-win-pill { font-size: 9px; font-weight: 800; background: #106eb9; color: #04131f; padding: 1px 5px; border-radius: 3px; letter-spacing: 0.5px; }
    .avx-fc-footer { border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 10px 16px 12px; margin-top: 8px; }
    .avx-fc-reason { font-size: 11.5px; color: #94a3b8; margin-top: 4px; }

    /* Magnific AI inspired interactive studio */
    .avx-studio-scenarios { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 30px; }
    .avx-scenario-btn {
      display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 999px;
      background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); color: #cbd5e1;
      font-size: 13.5px; font-weight: 600; cursor: pointer; transition: all 0.25s ease;
    }
    .avx-scenario-btn:hover, .avx-scenario-btn.avx-active {
      background: rgba(59, 130, 246, 0.18); border-color: rgba(96, 165, 250, 0.6); color: #fff; box-shadow: 0 0 16px rgba(59, 130, 246, 0.25);
    }
    .avx-studio-card {
      background: #0d1117; border: 1px solid rgba(96, 165, 250, 0.25); border-radius: 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 60px rgba(59, 130, 246, 0.08); overflow: hidden;
    }
    .avx-studio-header {
      display: flex; align-items: center; justify-content: space-between; padding: 14px 22px;
      background: rgba(255, 255, 255, 0.02); border-bottom: 1px solid rgba(255, 255, 255, 0.06); font-size: 12.5px;
    }
    .avx-studio-body { display: grid; grid-template-columns: 1fr 1.25fr; gap: 24px; padding: 26px; }
    @media (max-width: 992px) { .avx-studio-body { grid-template-columns: 1fr; } }
    .avx-studio-left { display: flex; flex-direction: column; gap: 18px; }
    .avx-studio-prompt-box {
      background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px;
    }
    .avx-studio-prompt-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 700; margin-bottom: 6px; }
    .avx-studio-prompt-text { font-size: 14px; color: #f1f5f9; line-height: 1.5; font-style: italic; }
    .avx-studio-params { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .avx-param-card { background: rgba(255, 255, 255, 0.025); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 10px; padding: 10px 12px; }
    .avx-param-label { font-size: 11px; color: #94a3b8; display: block; margin-bottom: 4px; }
    .avx-param-val { font-size: 14px; font-weight: 700; color: #3896f8; font-family: ui-monospace, monospace; }
    .avx-studio-telemetry { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px; }
    .avx-stat-chip { background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 10px; text-align: center; }
    .avx-stat-chip small { font-size: 10.5px; color: #94a3b8; display: block; }
    .avx-stat-chip b { font-size: 16px; color: #f8fafc; font-weight: 800; font-family: ui-monospace, monospace; }
    .avx-transcript-box { background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 14px; margin-bottom: 14px; }
    .avx-json-box { background: #07090e; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 12px; font-family: ui-monospace, monospace; font-size: 11px; color: #7dbbfc; }

    /* Ringba-inspired AI at the Core 3D Stage */
    .avx-ringba-stage {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1.35fr 1fr;
      gap: 28px;
      align-items: center;
      margin: 45px auto 35px;
      max-width: 1240px;
      perspective: 1200px;
    }
    @media (max-width: 1024px) {
      .avx-ringba-stage {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      .avx-ringba-center { order: -1; }
      .avx-ringba-conduits { display: none; }
    }
    .avx-ringba-conduits {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    .avx-conduit-path {
      fill: none;
      stroke-width: 2;
      stroke-dasharray: 4 6;
      transition: all 0.4s ease;
      opacity: 0.35;
    }
    .avx-conduit-path.avx-on {
      stroke-width: 3.5;
      stroke-dasharray: none;
      opacity: 0.95;
    }
    .avx-path-green { stroke: #106eb9; }
    .avx-path-blue { stroke: #3896f8; }
    .avx-path-purple { stroke: #849dfc; }
    .avx-path-orange { stroke: #3c62fb; }

    .avx-conduit-packet {
      fill: #ffffff;
      opacity: 0;
      filter: drop-shadow(0 0 8px #3896f8);
      transition: opacity 0.2s ease;
    }
    .avx-conduit-packet.avx-on {
      opacity: 1;
    }

    /* Flanks & Spheres */
    .avx-ringba-flank {
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 2;
    }
    @media (max-width: 1024px) {
      .avx-ringba-flank {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
    }
    @media (max-width: 640px) {
      .avx-ringba-flank {
        grid-template-columns: 1fr;
      }
    }

    .avx-sphere-card {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(10, 15, 29, 0.9));
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 20px;
      display: flex;
      gap: 16px;
      cursor: pointer;
      position: relative;
      transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
      backdrop-filter: blur(12px);
    }
    .avx-sphere-card:hover {
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
    .avx-sphere-card.avx-active {
      transform: translateY(-4px) scale(1.02);
    }
    .avx-sphere-green.avx-active {
      border-color: rgba(16, 110, 185, 0.65);
      box-shadow: 0 12px 30px -10px rgba(16, 110, 185, 0.3), inset 0 0 20px rgba(16, 110, 185, 0.08);
    }
    .avx-sphere-blue.avx-active {
      border-color: rgba(56, 150, 248, 0.65);
      box-shadow: 0 12px 30px -10px rgba(56, 150, 248, 0.3), inset 0 0 20px rgba(56, 150, 248, 0.08);
    }
    .avx-sphere-purple.avx-active {
      border-color: rgba(132, 157, 252, 0.65);
      box-shadow: 0 12px 30px -10px rgba(132, 157, 252, 0.3), inset 0 0 20px rgba(132, 157, 252, 0.08);
    }
    .avx-sphere-orange.avx-active {
      border-color: rgba(60, 98, 251, 0.65);
      box-shadow: 0 12px 30px -10px rgba(60, 98, 251, 0.3), inset 0 0 20px rgba(60, 98, 251, 0.08);
    }

    /* 3D Glossy Sphere element (Ringba style) */
    .avx-sphere-icon-wrap {
      position: relative;
      flex-shrink: 0;
    }
    .avx-3d-sphere {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #ffffff;
      font-size: 19px;
      position: relative;
      box-shadow: inset 0 -6px 12px rgba(0, 0, 0, 0.4), 0 8px 18px rgba(0, 0, 0, 0.35);
      transition: all 0.3s ease;
    }
    .avx-sphere-glare {
      position: absolute;
      top: 4px;
      left: 8px;
      width: 18px;
      height: 10px;
      border-radius: 50%;
      background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 70%);
      transform: rotate(-30deg);
      pointer-events: none;
    }
    .avx-sphere-emerald {
      background: radial-gradient(circle at 35% 35%, #6eb2e7 0%, #106eb9 45%, #044478 80%, #062e4e 100%);
      box-shadow: 0 0 20px rgba(16, 110, 185, 0.4), inset 0 -6px 12px rgba(0, 0, 0, 0.4);
    }
    .avx-sphere-azure {
      background: radial-gradient(circle at 35% 35%, #93c5fd 0%, #3896f8 45%, #0261c7 80%, #0c3b6e 100%);
      box-shadow: 0 0 20px rgba(56, 150, 248, 0.4), inset 0 -6px 12px rgba(0, 0, 0, 0.4);
    }
    .avx-sphere-violet {
      background: radial-gradient(circle at 35% 35%, #728cf4 0%, #849dfc 45%, #3a61ed 80%, #1d3795 100%);
      box-shadow: 0 0 20px rgba(132, 157, 252, 0.4), inset 0 -6px 12px rgba(0, 0, 0, 0.4);
    }
    .avx-sphere-amber {
      background: radial-gradient(circle at 35% 35%, #47aefd 0%, #3c62fb 45%, #0c38ea 80%, #12277c 100%);
      box-shadow: 0 0 20px rgba(60, 98, 251, 0.4), inset 0 -6px 12px rgba(0, 0, 0, 0.4);
    }

    .avx-sphere-info {
      flex: 1;
      min-width: 0;
    }
    .avx-sphere-pill {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 2px 7px;
      border-radius: 4px;
    }
    .pill-emerald { background: rgba(16, 110, 185, 0.15); color: #348dd3; }
    .pill-azure { background: rgba(56, 150, 248, 0.15); color: #3896f8; }
    .pill-violet { background: rgba(132, 157, 252, 0.15); color: #849dfc; }
    .pill-amber { background: rgba(60, 98, 251, 0.15); color: #3c62fb; }

    .avx-sphere-latency {
      font-size: 11px;
      font-weight: 600;
      margin-left: auto;
      font-family: ui-monospace, monospace;
    }
    .avx-sphere-title {
      font-size: 15.5px;
      font-weight: 700;
      color: #f8fafc;
      margin: 3px 0 5px;
    }
    .avx-sphere-desc {
      font-size: 12.5px;
      color: #94a3b8;
      line-height: 1.45;
      margin-bottom: 8px;
    }
    .avx-sphere-kpi {
      display: flex;
      align-items: center;
      font-size: 11px;
      color: #cbd5e1;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 7px;
    }

    /* Center 3D AI Core Stage */
    .avx-ringba-center {
      position: relative;
      z-index: 2;
    }
    .avx-3d-core-chassis {
      position: relative;
      margin: 0 auto;
      border-radius: 24px;
      transition: transform 0.3s ease;
    }
    .avx-core-orbit {
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
    }
    .avx-orbit-1 {
      width: 108%;
      height: 108%;
      border: 1px dashed rgba(56, 150, 248, 0.35);
      animation: avxOrbitCW 28s linear infinite;
    }
    .avx-orbit-2 {
      width: 116%;
      height: 116%;
      border: 1px dotted rgba(16, 110, 185, 0.3);
      animation: avxOrbitCCW 36s linear infinite;
    }
    .avx-orbit-3 {
      width: 124%;
      height: 124%;
      border: 1px solid rgba(132, 157, 252, 0.15);
    }
    .avx-orbit-node {
      position: absolute;
      top: -4px;
      left: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #3896f8;
      box-shadow: 0 0 10px #3896f8;
    }
    @keyframes avxOrbitCW {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    @keyframes avxOrbitCCW {
      from { transform: translate(-50%, -50%) rotate(360deg); }
      to { transform: translate(-50%, -50%) rotate(0deg); }
    }

    .avx-core-glow-aura {
      position: absolute;
      inset: -20px;
      border-radius: 50%;
      filter: blur(40px);
      opacity: 0.45;
      background: radial-gradient(circle, rgba(56, 150, 248, 0.5) 0%, rgba(16, 110, 185, 0.3) 50%, transparent 70%);
      pointer-events: none;
      transition: all 0.6s ease;
    }
    .avx-aura-green .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(16, 110, 185, 0.65) 0%, rgba(56, 150, 248, 0.3) 50%, transparent 70%);
    }
    .avx-aura-blue .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(56, 150, 248, 0.7) 0%, rgba(99, 137, 241, 0.3) 50%, transparent 70%);
    }
    .avx-aura-purple .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(132, 157, 252, 0.65) 0%, rgba(114, 140, 244, 0.3) 50%, transparent 70%);
    }
    .avx-aura-orange .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(60, 98, 251, 0.65) 0%, rgba(12, 56, 234, 0.3) 50%, transparent 70%);
    }

    /* no frame: the agent floats on the page in her own glow */
    .avx-core-viewport {
      position: relative;
    }
    .avx-3d-core-img {
      width: 100%;
      height: 420px;
      object-fit: cover;
      object-position: center 20%;
      display: block;
      transition: transform 0.4s ease;
    }
    @media (max-width: 768px) {
      .avx-3d-core-img {
        height: 320px;
      }
    }
    /* the hologram's stage: deep indigo into magenta, like a ringba hero card */
    .avx-agent3d {
      position: relative;
      background: radial-gradient(50% 50% at 50% 45%, rgba(37, 99, 235, 0.32), rgba(29, 78, 216, 0.12) 55%, transparent 75%);
      /* edges fade out, so the stage never reads as a box */
      -webkit-mask-image: radial-gradient(72% 68% at 50% 46%, #000 62%, transparent 100%);
      mask-image: radial-gradient(72% 68% at 50% 46%, #000 62%, transparent 100%);
    }
    .avx-agent3d::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(148, 179, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 179, 255, 0.07) 1px, transparent 1px);
      background-size: 32px 32px;
      mask-image: radial-gradient(65% 60% at 50% 45%, #000, transparent);
      -webkit-mask-image: radial-gradient(65% 60% at 50% 45%, #000, transparent);
    }
    .avx-agent3d canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    /* Core HUD overlays */
    .avx-core-hud-top {
      position: absolute;
      top: 14px;
      left: 14px;
      right: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
    }
    .avx-hud-chip {
      background: rgba(10, 15, 29, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 999px;
      padding: 5px 12px;
      font-size: 11px;
      color: #f1f5f9;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      backdrop-filter: blur(8px);
    }
    .avx-hud-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #106eb9;
      box-shadow: 0 0 8px #106eb9;
      animation: avxPulseGlow 1.5s infinite;
    }
    @keyframes avxPulseGlow {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.3); opacity: 0.6; }
    }

    .avx-core-hud-bottom {
      position: absolute;
      bottom: 14px;
      left: 14px;
      right: 14px;
      pointer-events: none;
    }
    .avx-hud-tag-box {
      background: rgba(10, 15, 29, 0.88);
      border: 1px solid rgba(56, 150, 248, 0.35);
      border-radius: 12px;
      padding: 10px 14px;
      backdrop-filter: blur(10px);
    }
    .avx-3d-eq {
      display: inline-flex;
      align-items: flex-end;
      gap: 2.5px;
      height: 14px;
      width: 22px;
    }
    .avx-3d-eq i {
      flex: 1;
      background: #106eb9;
      border-radius: 1px;
      animation: avxEqDance 0.8s ease-in-out infinite alternate;
    }
    .avx-3d-eq i:nth-child(1) { height: 40%; animation-delay: 0.1s; }
    .avx-3d-eq i:nth-child(2) { height: 80%; animation-delay: 0.3s; }
    .avx-3d-eq i:nth-child(3) { height: 100%; animation-delay: 0.15s; }
    .avx-3d-eq i:nth-child(4) { height: 60%; animation-delay: 0.4s; }
    .avx-3d-eq i:nth-child(5) { height: 90%; animation-delay: 0.25s; }
    .avx-3d-eq i:nth-child(6) { height: 50%; animation-delay: 0.35s; }
    @keyframes avxEqDance {
      0% { height: 25%; }
      100% { height: 100%; }
    }
    .avx-hud-status-text {
      font-size: 11px;
      color: #94a3b8;
      font-family: ui-monospace, monospace;
    }

    /* Ringba Telemetry bar */
    .avx-ringba-telemetry-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      background: rgba(13, 17, 23, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 22px 24px;
      margin-top: 32px;
    }
    @media (max-width: 768px) {
      .avx-ringba-telemetry-bar {
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
        padding: 16px;
      }
    }
    .avx-rb-stat {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .avx-rb-stat-num {
      font-size: 26px;
      font-weight: 800;
      font-family: ui-monospace, monospace;
      letter-spacing: -0.5px;
    }
    .avx-rb-stat-lbl {
      font-size: 12px;
      color: #94a3b8;
    }

    /* Capabilities Rail */
    .avx-rail-chips {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .avx-rail-chip {
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 13px;
      text-decoration: none;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
    }
    .avx-rail-chip:hover {
      background: rgba(56, 150, 248, 0.15);
      border-color: rgba(56, 150, 248, 0.4);
      color: #fff;
      transform: translateY(-2px);
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
        <div className="container">
          <div className="avx-hero-grid">
            <div className="avx-hero-copy">
              <p className="avx-hero-eyebrow"><span>AI</span>The AI Tracking Platform Built for Peak Performance</p>
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
            {/* live decision: one call scored, bid on and routed; motion.js replays it with new calls.
                It ships in its globe look (avx-dg) so the older chip design never flashes first */}
            <div className="avx-decide avx-decide-pro avx-dg" data-avx-decide="" role="img" aria-label="Live demo: an incoming call is scored by AI for intent and connected to the best buyer">
              <div className="avx-dc-bar">
                <span className="avx-dc-live"><i className="avx-live-dot" />Live decision</span>
                {" "}
                <span className="avx-dc-telecom-chip"><i className="fa-solid fa-server me-1" />SIP · Opus HD</span>
                {" "}
                <span className="avx-dc-clock" data-dc="clock">14:02:51 UTC</span>
                {" "}
                <span className="avx-dc-time">Decided in <b data-dc="ms">84ms</b></span>
              </div>
              {/* live transcribed voice & audio frequency bar */}
              <div className="avx-dc-audio-bar">
                <span className="avx-dc-voice-bars" data-dc="voice-bars">
                  <i /><i /><i /><i /><i /><i /><i /><i />
                </span>
                <span className="avx-dc-quote" data-dc="quote">“Hi, I’m looking to switch my Medicare plan before the deadline.”</span>
              </div>
              <div className="avx-fc3d">
              <canvas className="avx-dg-canvas" aria-hidden="true" />
              {/* the floor is outside the 3D stage, so it never cuts through the chip or cards */}
              <span className="avx-fc-floor" aria-hidden="true" />
              <span className="avx-fc-tip" data-dc="tip" aria-hidden="true" />
              <div className="avx-fc">
                <div className="avx-fc-caller avx-fc-done">
                  <span className="avx-fc-phone"><i /><i /><i className="fa-solid fa-phone" aria-hidden="true" /></span>
                  <span className="avx-fc-pad" aria-hidden="true" />
                  <b data-dc="num">(312) 555-0142</b>
                  <span data-dc="meta">Google Ads · Medicare</span>
                  <span className="avx-fc-verified"><i className="fa-solid fa-shield-check text-success" /> Verified (99.4%)</span>
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
                      <span className="avx-fc-sent avx-sent-pos" data-dc="sent">Positive</span>
                    </div>
                  </div>
                  <div className="avx-fc-tags" data-dc="tags">
                    <span className="avx-fc-tag">Plan switch</span>
                    <span className="avx-fc-tag">Deadline</span>
                    <span className="avx-fc-tag">Ready to enroll</span>
                  </div>
                </div>
                <span className="avx-fc-link avx-on" data-dc="link2"><i /></span>
                <ul className="avx-fc-buyers" data-dc="buyers">
                  <li className="avx-win">
                    <span className="avx-fc-b-main"><i>AI</i><span className="avx-fc-b-name">Apex Insurance</span></span>
                    <span className="avx-fc-b-bid"><b>$64.00</b> <span className="avx-fc-win-pill">WON</span></span>
                  </li>
                  <li className="avx-lose">
                    <span className="avx-fc-b-main"><i>MH</i><span className="avx-fc-b-name">Meridian Health</span></span>
                    <span className="avx-fc-b-bid">$58.00</span>
                  </li>
                  <li className="avx-lose">
                    <span className="avx-fc-b-main"><i>NB</i><span className="avx-fc-b-name">Northwind Benefits</span></span>
                    <span className="avx-fc-b-bid">$52.00</span>
                  </li>
                </ul>
              </div>
              </div>
              <div className="avx-fc-footer">
                <p className="avx-fc-status avx-on" data-dc="status">
                  <span className="avx-fc-done-msg">
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    {" "}Connected to <b data-dc="winner">Apex Insurance</b> · <b data-dc="pay">$64.00</b>
                  </span>
                  <span className="avx-fc-wait-msg">Finding the best buyer…</span>
                </p>
                <div className="avx-fc-reason">
                  <i className="fa-solid fa-scale-balanced me-1 text-info" /> Rule match: <span data-dc="why">Highest bid · intent above 0.80 · licensed in IL</span>
                </div>
              </div>
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
            <h2 className="fw-bold">Autonomous Intelligence Engineered for Real-Time Voice</h2>
            <p className="text-muted">High-volume call operations run on split-second decisions. Avortyx embeds sub-45ms conversational models, dynamic ping-tree bidding, and carrier-grade automated screening at the center of every call.</p>
          </div>

          {/* Ringba-inspired AI 3D Core Stage */}
          <div className="avx-ringba-stage" data-avx-hub="" role="region" aria-label="Ringba-inspired AI 3D Core Architecture">
            
            {/* SVG Connecting Conduits for Desktop */}
            <svg className="avx-ringba-conduits" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
              <path id="avx-line-0" d="M 180 110 C 320 110, 380 220, 480 240" className="avx-conduit-path avx-path-green avx-on" />
              <path id="avx-line-1" d="M 180 390 C 320 390, 380 280, 480 260" className="avx-conduit-path avx-path-blue" />
              <path id="avx-line-2" d="M 820 110 C 680 110, 620 220, 520 240" className="avx-conduit-path avx-path-purple" />
              <path id="avx-line-3" d="M 820 390 C 680 390, 620 280, 520 260" className="avx-conduit-path avx-path-orange" />
              <circle className="avx-conduit-packet" r="5" />
            </svg>

            {/* Left Flank: Ringba Spheres 1 & 2 */}
            <div className="avx-ringba-flank avx-flank-left">
              {/* Pod 1: Green Sphere - Voice AI & IVR */}
              <div className="avx-sphere-card avx-sphere-green avx-active" data-hub-node="0">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-emerald">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-headset" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="avx-sphere-pill pill-emerald">VOICE AI &amp; IVA</span>
                    <span className="avx-sphere-latency text-emerald">&lt;45ms Latency</span>
                  </div>
                  <h3 className="avx-sphere-title">Interactive Voice Agents</h3>
                  <p className="avx-sphere-desc">Real-time speech-to-speech models answer instantly, qualify multi-turn intent, and warm-transfer.</p>
                  <div className="avx-sphere-kpi">
                    <span>Avg Handle Time: <b>58s</b></span>
                    <span className="ms-auto text-emerald">94.2% Success</span>
                  </div>
                </div>
              </div>

              {/* Pod 2: Blue Sphere - Ping-Tree Engine */}
              <div className="avx-sphere-card avx-sphere-blue" data-hub-node="1">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-azure">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-route" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="avx-sphere-pill pill-azure">PING-TREE ENGINE</span>
                    <span className="avx-sphere-latency text-azure">Sub-85ms RTB</span>
                  </div>
                  <h3 className="avx-sphere-title">Dynamic Multi-Buyer Auction</h3>
                  <p className="avx-sphere-desc">Real-time bidding algorithm tests tier priority, buyer caps, and historical conversion yield.</p>
                  <div className="avx-sphere-kpi">
                    <span>Auction Speed: <b>62ms</b></span>
                    <span className="ms-auto text-azure">+34.2% EPC Lift</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Stage: The 3D AI Intelligence Core */}
            <div className="avx-ringba-center">
              <div className="avx-3d-core-chassis avx-aura-green">
                {/* Orbital animated rings */}
                <div className="avx-core-orbit avx-orbit-1" aria-hidden="true"><span className="avx-orbit-node" /></div>
                <div className="avx-core-orbit avx-orbit-2" aria-hidden="true"><span className="avx-orbit-node" /></div>
                <div className="avx-core-orbit avx-orbit-3" aria-hidden="true" />
                <div className="avx-core-glow-aura" />

                {/* 3D Visual Frame */}
                <div className="avx-core-viewport">
                  {/* motion.js draws the voice agent here in 3D (WebGL depth mesh, scripts/build-agent-3d.py) */}
                  <div className="avx-3d-core-img avx-agent3d" data-avx-agent3d="" role="img" aria-label="Avortyx AI voice agent: a female android with a glass circuit cranium, turning in 3D as she speaks and forwards calls" />

                  {/* Holographic HUD Overlays */}
                  <div className="avx-core-hud-top">
                    <div className="avx-hud-chip">
                      <span className="avx-hud-dot" />
                      <b>VOICE AGENT</b>
                      <span>ONLINE</span>
                    </div>
                    <div className="avx-hud-chip">
                      <i className="fa-solid fa-headset text-info me-1" />
                      <span id="avx-core-telemetry-latency">Sub-45ms Voice Copilot</span>
                    </div>
                  </div>

                  <div className="avx-core-hud-bottom">
                    <div className="avx-hud-tag-box">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <small className="text-muted fw-bold">AUTONOMOUS CONVERSATIONAL DIARIZATION</small>
                        <span className="badge bg-success-subtle text-success" id="avx-core-telemetry-badge">99.4% Human Cadence Match</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div className="avx-3d-eq" aria-hidden="true">
                          <i /><i /><i /><i /><i /><i />
                        </div>
                        <span className="avx-hud-status-text text-truncate" id="avx-core-telemetry-status">
                          Voice IVA Copilot: Live Inbound Routing &amp; Sentiment Analysis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Flank: Ringba Spheres 3 & 4 */}
            <div className="avx-ringba-flank avx-flank-right">
              {/* Pod 3: Violet Sphere - Carrier Screening */}
              <div className="avx-sphere-card avx-sphere-purple" data-hub-node="2">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-violet">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="avx-sphere-pill pill-violet">CARRIER SHIELD</span>
                    <span className="avx-sphere-latency text-violet">STIR/SHAKEN A</span>
                  </div>
                  <h3 className="avx-sphere-title">Autonomous TCPA Guard</h3>
                  <p className="avx-sphere-desc">Carrier-grade screening filters spam, disconnected VOIP, spoofed numbers, and DNC lists before buyers ring.</p>
                  <div className="avx-sphere-kpi">
                    <span>Clean Traffic: <b>99.94%</b></span>
                    <span className="ms-auto text-violet">Zero TCPA Leaks</span>
                  </div>
                </div>
              </div>

              {/* Pod 4: Amber Sphere - Instant Caller Profile */}
              <div className="avx-sphere-card avx-sphere-orange" data-hub-node="3">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-amber">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-id-card-clip" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="avx-sphere-pill pill-amber">CALLER 360°</span>
                    <span className="avx-sphere-latency text-warning">Zero-Delay Lookup</span>
                  </div>
                  <h3 className="avx-sphere-title">Demographic Enrichment</h3>
                  <p className="avx-sphere-desc">Attaches caller ad campaign keywords, location, lifetime intent, and carrier metadata directly to the live call.</p>
                  <div className="avx-sphere-kpi">
                    <span>Enrichment Speed: <b>28ms</b></span>
                    <span className="ms-auto text-warning">100% Attributed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Ringba-Style Real-Time Telemetry Bar (Dynamic) */}
          <div className="avx-ringba-telemetry-bar">
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-white" id="avx-dyn-metric-1">24,850+</span>
              <span className="avx-rb-stat-lbl" id="avx-dyn-label-1">Calls Evaluated / Min</span>
            </div>
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-emerald" id="avx-dyn-metric-2">38ms</span>
              <span className="avx-rb-stat-lbl" id="avx-dyn-label-2">Median Voice Response</span>
            </div>
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-azure" id="avx-dyn-metric-3">99.8%</span>
              <span className="avx-rb-stat-lbl" id="avx-dyn-label-3">Speech Diarization SLA</span>
            </div>
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-warning" id="avx-dyn-metric-4">94.2%</span>
              <span className="avx-rb-stat-lbl" id="avx-dyn-label-4">Autonomous Transfer Rate</span>
            </div>
          </div>

        </div>
      </section>
      <section className="mktg-section avx-power" id="power">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Why Avortyx</p>
            <h2 className="fw-bold">The Infrastructure Engineered for Maximum EPC</h2>
            <p className="text-muted">Built from the ground up for high-volume performance marketers, call centers, and pay-per-call networks. Sub-85ms routing, zero vendor lock-in, and full financial transparency on every connected second.</p>
          </div>
          <div className="avx-power-grid">
            {POWER.map(([kind, title, text, href, label]) => (
              <a key={kind} href={href} className="avx-power-card">
                {/* Ringba-style stage: a neon ring over a streaming grid floor, and the card's facts */}
                <div className={`avx-pws avx-pws-${kind}`} aria-hidden="true">
                  <span className="avx-pws-ring"><i className={`fa-solid ${POWER_STAGE[kind][0]}`} /></span>
                  <span className="avx-pws-hud">
                    {POWER_STAGE[kind][1].map(([value, label]) => (
                      <span key={label} className="avx-pws-chip">{value && <b>{value}</b>}{label}</span>
                    ))}
                  </span>
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
            <p className="avx-eyebrow">Autonomous Call Intelligence</p>
            <h2 className="fw-bold">Ask Anything. Score Real-Time Intent. Let AI Qualify First.</h2>
            <p className="text-muted">Turn unstructured conversations into actionable revenue intelligence. Query your entire call lake with natural language, auto-score caller sentiment in milliseconds, and deploy 24/7 conversational voice agents that warm-transfer high-intent leads directly to buyers.</p>
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
            {" "}
            <button type="button" className="avx-tour-tab" role="tab" aria-selected="false" aria-controls="avx-ai-studio" id="avx-ai-tab-studio" data-ai="studio" tabIndex="-1">
              <span><i className="fa-solid fa-sliders" aria-hidden="true" /> Scenarios</span>
            </button>
            {" "}
            <button type="button" className="avx-tour-tab" role="tab" aria-selected="false" aria-controls="avx-ai-shield" id="avx-ai-tab-shield" data-ai="shield" tabIndex="-1">
              <span><i className="fa-solid fa-shield-halved" aria-hidden="true" /> Screening</span>
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
          {/* the AI Copilot scenarios (formerly their own section): motion.js initAiStudio */}
          <div className="avx-ai-panel avx-ai-studio-panel" id="avx-ai-studio" role="tabpanel" aria-labelledby="avx-ai-tab-studio" data-panel="studio" data-avx-studio="" hidden>
            <div className="avx-studio-scenarios">
              {AI_STUDIO_SCENARIOS.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`avx-scenario-btn ${idx === 0 ? 'avx-active' : ''}`}
                  data-studio-btn={s.id}
                >
                  <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
                  <span>{s.title}</span>
                </button>
              ))}
            </div>

            <div className="avx-studio-card">
              <div className="avx-studio-header">
                <span className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-sparkles text-info" />
                  <b>Avortyx-Voice-LLM v4.2</b>
                  <span className="badge bg-success-subtle text-success">Online · 38ms inference</span>
                </span>
                <span className="text-muted small d-none d-sm-inline">
                  <i className="fa-solid fa-shield-halved text-success me-1" />
                  STIR/SHAKEN Level A · TCPA Compliant
                </span>
              </div>

              <div className="avx-studio-body">
                <div className="avx-studio-left">
                  <div className="avx-studio-prompt-box">
                    <div className="avx-studio-prompt-title">Active Scenario Prompt</div>
                    <div className="avx-studio-prompt-text" data-studio-out="prompt">
                      “{AI_STUDIO_SCENARIOS[0].prompt}”
                    </div>
                  </div>

                  <div className="avx-studio-params">
                    <div className="avx-param-card">
                      <span className="avx-param-label">AI Intent Threshold</span>
                      <span className="avx-param-val" data-studio-out="intent-thresh">85% Minimum</span>
                    </div>
                    <div className="avx-param-card">
                      <span className="avx-param-label">Target Revenue Floor</span>
                      <span className="avx-param-val" data-studio-out="epc-target">$45.00 EPC</span>
                    </div>
                    <div className="avx-param-card">
                      <span className="avx-param-label">Max Routing Latency</span>
                      <span className="avx-param-val">&lt; 85ms SLA</span>
                    </div>
                    <div className="avx-param-card">
                      <span className="avx-param-label">Compliance Gate</span>
                      <span className="avx-param-val text-success">Strict Auto-Screen</span>
                    </div>
                  </div>

                  <div className="avx-transcript-box">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="avx-studio-prompt-title mb-0">Live Voice Diarization</span>
                      <span className="badge bg-primary-subtle text-primary" data-studio-out="sentiment">
                        {AI_STUDIO_SCENARIOS[0].metrics.sentiment}
                      </span>
                    </div>
                    <p className="small mb-2 text-slate-300" data-studio-out="transcript">
                      {AI_STUDIO_SCENARIOS[0].transcript}
                    </p>
                    <div className="d-flex flex-wrap gap-1" data-studio-out="entities">
                      {AI_STUDIO_SCENARIOS[0].entities.map(e => (
                        <span key={e} className="badge bg-secondary-subtle text-secondary">{e}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="avx-studio-right">
                  <div className="avx-studio-telemetry">
                    <div className="avx-stat-chip">
                      <small>Intent Score</small>
                      <b className="text-info" data-studio-out="score">{AI_STUDIO_SCENARIOS[0].metrics.intent}</b>
                    </div>
                    <div className="avx-stat-chip">
                      <small>Top Bid (EPC)</small>
                      <b className="text-success" data-studio-out="epc">{AI_STUDIO_SCENARIOS[0].metrics.epc}</b>
                    </div>
                    <div className="avx-stat-chip">
                      <small>Decision Latency</small>
                      <b className="text-warning" data-studio-out="latency">{AI_STUDIO_SCENARIOS[0].metrics.latency}</b>
                    </div>
                    <div className="avx-stat-chip">
                      <small>Projected Lift</small>
                      <b className="text-primary" data-studio-out="lift">{AI_STUDIO_SCENARIOS[0].metrics.lift}</b>
                    </div>
                  </div>

                  <div className="mb-3 p-3 rounded" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <i className="fa-solid fa-brain text-info" />
                      <b className="small text-white">AI Reasoning &amp; Strategy Analysis</b>
                    </div>
                    <p className="small text-muted mb-0" data-studio-out="summary">
                      {AI_STUDIO_SCENARIOS[0].summary}
                    </p>
                  </div>

                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <span className="avx-studio-prompt-title mb-0">Generated Webhook Dispatch</span>
                      <small className="text-muted">sub-millisecond JSON</small>
                    </div>
                    <pre className="avx-json-box mb-0" data-studio-out="json">
  {JSON.stringify(AI_STUDIO_SCENARIOS[0].routePayload, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* live screening (formerly under the AI core): motion.js initShield */}
          <div className="avx-ai-panel" id="avx-ai-shield" role="tabpanel" aria-labelledby="avx-ai-tab-shield" data-panel="shield" hidden>
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
        </div>
      </section>
      <section className="mktg-section avx-feat avx-platform" id="platform" data-avx-platform="">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Unified Call Platform</p>
            <h2 className="fw-bold">Every Tool You Need to Monetize, Dial, Route, and Scale</h2>
            <p className="text-muted">Five enterprise-grade systems united under one real-time dashboard. Eliminate disparate point solutions and command your entire call lifecycle from a single glasspane.</p>
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
              <h3>Comprehensive Enterprise Capabilities</h3>
              <p>End-to-end attribution, programmatic webhooks, automated compliance shields, and deep data infrastructure around every second of audio.</p>
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
            {[
              postBySlug['call-tracking-for-healthcare-practices'],
              postBySlug['real-estate-calls-from-listing-to-showing'],
              postBySlug['agency-playbook-proving-call-quality'],
              postBySlug['what-ai-call-scoring-measures'],
              postBySlug['sending-call-conversions-to-ad-platforms'],
              postBySlug['tcpa-dnc-consent-checklist']
            ].filter(Boolean).map((post) => <BlogCard key={post.slug} post={post} />)}
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
