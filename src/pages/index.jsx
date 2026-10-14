import BlogCard from '../components/BlogCard.jsx'
import { postBySlug } from '../blog/posts.js'
// /
// the intro's four outcomes, Salesloft-style
import Bolt from '../components/Bolt.jsx'
import Testimonials from '../components/Testimonials.jsx'
import More from '../components/More.jsx'
const HERO_POINTS = ['Score every call’s intent with AI', 'Route to the highest-value buyer', 'Block spam, DNC and duplicates', 'See the revenue behind every call']

// each capability sphere gets its own hue in the blue-violet range
// AI protection: the checks every call passes, and the three layers behind them
const SHIELD_CHECKS = [['spam', 'Spam'], ['dup', 'Duplicate'], ['dnc', 'DNC'], ['line', 'Line type'], ['consent', 'Consent']]
const SHIELD_LAYERS = [
  ['fa-shield-halved', 'Screen', 'AI scores intent and checks spam, duplicates, DNC and VOIP before any call routes or dials.', '/features/suppression_lists', 'Screening'],
  ['fa-file-signature', 'Comply', 'A verifiable consent record for every lead, state calling-hour rules, and PII redacted or hashed on schedule.', '/features#security-compliance-tools', 'Compliance'],
  ['fa-id-card', 'Secure', 'KYC, KYB and STIR/SHAKEN for your numbers; scoped API tokens, IP whitelisting, encrypted keys and security logs.', '/features/api', 'Platform security'],
]

const PLATFORM_TABS = [
  ['tracking', 'Call Tracking', 'fa-route'],
  ['automation', 'Lead Automation', 'fa-bolt'], ['agent', 'Agent Control Center', 'fa-headset'],
]

// Answers come from the pricing and feature pages [question, answer, optional [href, link text]]
const FAQ = [
  ['Are there any onboarding fees?', 'No. Avortyx does not charge onboarding fees.', ['/pricing', 'See pricing']],
  ['Can I bring my own carrier?', 'Yes. Connect Plivo or Telnyx, or bring any SIP-compatible carrier, and manage the phone numbers from every connected provider in one place.', ['/features/multiple_telephone_providers', 'Telephone providers']],
  ['How are calls priced?', 'Tracking numbers have a monthly rate, and inbound calls are billed per minute, rounded up to the nearest full minute. The inbound rates cover both legs of a call connected to a buyer, and your statements itemize each leg.', ['/pricing', 'Rates and calculator']],
  ['Is there an API?', 'Yes. Avortyx is API-first: anything you can do in the dashboard, you can do through the REST API, with access tokens limited to exactly the resources they need.', ['/features/api', 'REST API']],
  ['How do you handle compliance and personal data?', 'DNC checks, suppression lists and blacklists run before any call is forwarded or dialed, and state rules enforce calling-hour windows. PII can be cleared or hashed from aged data and restricted to users with the PII permission.', ['/features#security-compliance-tools', 'Security and compliance']],
  ['Do you offer discounts?', 'Yes, for high-volume customers.', ['/p/contact', 'Contact our team']],
  ['What support do you offer?', 'Phone, live chat and email support, plus live video sessions with our specialists.', null],
]

const FAQ_LD = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }

export const meta = {
  title: "Avortyx Prototype · Call Tracking & Lead Automation",
  description: "Call tracking, smart call routing and lead-to-call automation in one platform. Route every call to the right buyer and see the revenue behind it.",
  ogTitle: "Avortyx Prototype",
  bodyClass: "pages home ",
  layout: "site",
  bootStyle: "html.avx-boot main > :not(.marketing-hero-simple) { opacity: 0 !important; animation: none !important; }",
  head: (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://avortyx-prototype.vercel.app/#org","name":"Avortyx","url":"https://avortyx-prototype.vercel.app/","logo":"https://avortyx-prototype.vercel.app/favicon-192.png"},{"@type":"SoftwareApplication","name":"Avortyx","applicationCategory":"BusinessApplication","operatingSystem":"Web","url":"https://avortyx-prototype.vercel.app/","image":"https://avortyx-prototype.vercel.app/og-image.png?v=2","description":"Call tracking, smart call routing and lead-to-call automation in one platform. Route every call to the right buyer and see the revenue behind it.","publisher":{"@id":"https://avortyx-prototype.vercel.app/#org"}}]}` }} />
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
    .avx-decide,
    .avx-decide-pro {
      min-height: 460px;
      border: none !important;
      background: transparent !important;
      box-shadow: none !important;
      outline: none !important;
    }
    .avx-decide::after { display: none !important; }
    .avx-dc-telecom-chip {
      display: inline-flex; align-items: center; font-size: 11px; font-family: var(--avx-font-mono);
      padding: 2px 8px; border-radius: 999px; background: rgba(59, 130, 246, 0.12); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.25);
    }
    .avx-dc-audio-bar {
      display: flex; align-items: center; gap: 12px; margin: 10px 14px 4px; padding: 7px 14px;
      border-radius: 10px; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 12.5px;
    }
    .avx-dc-voice-bars { display: inline-flex; align-items: flex-end; gap: 2.5px; height: 16px; width: 28px; }
    .avx-dc-voice-bars i {
      width: 2.5px; height: 100%; background: #3b82f6; border-radius: 1px;
      transform-origin: bottom;
      animation: avxVoiceBars 0.8s ease-in-out infinite alternate;
    }
    .avx-dc-voice-bars i:nth-child(2) { animation-delay: 0.15s; }
    .avx-dc-voice-bars i:nth-child(3) { animation-delay: 0.3s; }
    .avx-dc-voice-bars i:nth-child(4) { animation-delay: 0.45s; }
    .avx-dc-voice-bars i:nth-child(5) { animation-delay: 0.2s; }
    .avx-dc-voice-bars i:nth-child(6) { animation-delay: 0.35s; }
    .avx-dc-voice-bars i:nth-child(7) { animation-delay: 0.5s; }
    .avx-dc-voice-bars i:nth-child(8) { animation-delay: 0.25s; }
    /* scaled, not resized, so the bars never trigger a layout */
    @keyframes avxVoiceBars { 0% { transform: scaleY(.2); opacity: 0.4; } 100% { transform: scaleY(1); opacity: 1; } }
    .avx-dc-quote { color: #93c5fd; font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; font-family: ui-sans-serif, system-ui; }
    .avx-fc-verified { display: block; font-size: 11px; color: #3b82f6; font-weight: 600; margin-top: 3px; }
    .avx-fc-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px; margin-top: 8px; }
    .avx-fc-tag { font-size: 10px; background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 4px; padding: 1px 6px; }
    .avx-fc-sent { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 1px 5px; border-radius: 4px; margin-top: 4px; }
    .avx-sent-pos { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
    .avx-sent-neutral { background: rgba(148, 163, 184, 0.2); color: #cbd5e1; }
    .avx-sent-urgent { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
    .avx-fc-b-main { display: flex; align-items: center; gap: 8px; flex: 1; }
    .avx-fc-b-bid { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #f8fafc; font-family: var(--avx-font-mono); }
    .avx-fc-win-pill { font-size: 9px; font-weight: 800; background: #3b82f6; color: #040f1f; padding: 1px 5px; border-radius: 3px; letter-spacing: 0.5px; }
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
    .avx-studio-prompt-text { font-size: 14px; color: #f1f4f9; line-height: 1.5; font-style: italic; }
    .avx-studio-params { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .avx-param-card { background: rgba(255, 255, 255, 0.025); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 10px; padding: 10px 12px; }
    .avx-param-label { font-size: 11px; color: #94a3b8; display: block; margin-bottom: 4px; }
    .avx-param-val { font-size: 14px; font-weight: 700; color: #3b82f6; font-family: var(--avx-font-mono); }
    .avx-studio-telemetry { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px; }
    .avx-stat-chip { background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 10px; text-align: center; }
    .avx-stat-chip small { font-size: 10.5px; color: #94a3b8; display: block; }
    .avx-stat-chip b { font-size: 16px; color: #f8fafc; font-weight: 800; font-family: var(--avx-font-mono); }
    .avx-transcript-box { background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 14px; margin-bottom: 14px; }
    .avx-json-box { background: #07090e; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 12px; font-family: var(--avx-font-mono); font-size: 11px; color: #60a5fa; }

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
    .avx-path-green { stroke: #3b82f6; }
    .avx-path-blue { stroke: #3b82f6; }
    .avx-path-purple { stroke: #3b82f6; }
    .avx-path-orange { stroke: #60a5fa; }

    .avx-conduit-packet {
      fill: #ffffff;
      opacity: 0;
      filter: drop-shadow(0 0 8px #3b82f6);
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

    /* the four capabilities beside the AI: open text, no box borders */
    .avx-sphere-card {
      padding: 14px 6px;
      display: flex;
      gap: 16px;
      cursor: pointer;
      position: relative;
      border: none !important;
      outline: none !important;
      background: transparent !important;
      box-shadow: none !important;
      transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .avx-sphere-card:hover {
      transform: translateY(-3px);
      border: none !important;
      box-shadow: none !important;
    }
    .avx-sphere-card.avx-active {
      transform: translateY(-4px);
      border: none !important;
      box-shadow: none !important;
    }
    .avx-sphere-card.avx-active .avx-3d-sphere {
      box-shadow: 0 0 28px rgba(59, 130, 246, 0.75), inset 0 -6px 12px rgba(0, 0, 0, 0.4);
    }
    .avx-sphere-card.avx-active .avx-sphere-title {
      color: #bfdbfe;
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
    /* one sphere style for all four, in avortyx.com's blues */
    .avx-sphere-emerald,
    .avx-sphere-azure,
    .avx-sphere-violet,
    .avx-sphere-amber {
      background: radial-gradient(circle at 35% 35%, #93c5fd 0%, #3b82f6 45%, #3b82f6 80%, #172e54 100%);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), inset 0 -6px 12px rgba(0, 0, 0, 0.4);
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
      background: rgba(59, 130, 246, 0.15) !important;
      color: #60a5fa !important;
    }
    .pill-emerald,
    .pill-azure,
    .pill-violet,
    .pill-amber { background: rgba(59, 130, 246, 0.15) !important; color: #60a5fa !important; }

    .avx-sphere-latency {
      font-size: 11px;
      font-weight: 600;
      margin-left: auto;
      font-family: var(--avx-font-mono);
      color: #93c5fd !important;
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
      border-top: none !important;
      padding-top: 4px;
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
      border: 1px dashed rgba(59, 130, 246, 0.35);
      animation: avxOrbitCW 28s linear infinite;
    }
    .avx-orbit-2 {
      width: 116%;
      height: 116%;
      border: 1px dotted rgba(59, 130, 246, 0.3);
      animation: avxOrbitCCW 36s linear infinite;
    }
    .avx-orbit-3 {
      width: 124%;
      height: 124%;
      border: 1px solid rgba(132, 177, 252, 0.15);
    }
    .avx-orbit-node {
      position: absolute;
      top: -4px;
      left: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #3b82f6;
      box-shadow: 0 0 10px #3b82f6;
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
      background: radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%);
      pointer-events: none;
      transition: all 0.6s ease;
    }
    .avx-aura-green .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(59, 130, 246, 0.65) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%);
    }
    .avx-aura-blue .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(99, 137, 241, 0.3) 50%, transparent 70%);
    }
    .avx-aura-purple .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(132, 177, 252, 0.65) 0%, rgba(114, 162, 244, 0.3) 50%, transparent 70%);
    }
    .avx-aura-orange .avx-core-glow-aura {
      background: radial-gradient(circle, rgba(59, 130, 246, 0.65) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%);
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
      background: radial-gradient(50% 50% at 50% 45%, rgba(59, 130, 246, 0.32), rgba(59, 130, 246, 0.12) 55%, transparent 75%);
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
      color: #f1f4f9;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      backdrop-filter: blur(8px);
    }
    .avx-hud-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #3b82f6;
      box-shadow: 0 0 8px #3b82f6;
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
      border: 1px solid rgba(59, 130, 246, 0.35);
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
      background: #3b82f6;
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
      font-family: var(--avx-font-mono);
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
      font-family: var(--avx-font-mono);
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
      background: rgba(59, 130, 246, 0.15);
      border-color: rgba(59, 130, 246, 0.4);
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
  ['telnyx', 'Telnyx', 193, 46], ['plivo', 'Plivo', 230, 71], ['ga', 'Google Ads', 194, 65],
  ['voluum', 'Voluum', 264, 72], ['cake', 'Cake', 181, 96], ['onsip', 'OnSIP', 230, 73], ['avoxi', 'Avoxi', 432, 100],
]

// "We Integrate With": CRM, messaging and automation tools, a still grid [file, name, page, width, height]
const INTEGRATION_ROWS = [
  [
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


export default function Home() {
  return (
    <main>
      <section className="marketing-hero-simple hero-constellation-bg avx-hero-calm" id="hero-option-s">
        {/* background film: light strands meeting at one point, graded to the site's blue
            (public/assets/avx-site/video). site.js picks the 480p or 720p file and only starts it
            after the page has loaded; until then, and for reduced motion or data saver, the poster shows */}
        <div className="avx-hero-film" aria-hidden="true">
          <video data-avx-hero-film="" muted loop playsInline preload="none" poster="/assets/avx-site/video/hero-blue-poster.webp" />
          <span className="avx-hero-film-veil" />
          {/* the Avortyx mark where the strands meet; the dimmer behind it softens the flare */}
          <span className="avx-hero-film-core">
            <svg viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="avx-mk-g-film" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#bfdbfe" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
              <g transform="translate(32 32) scale(1.3) translate(-32 -32)">
                <path d="M52 32a20 20 0 1 1-13.2-18.8" stroke="url(#avx-mk-g-film)" strokeWidth="3" strokeLinecap="round" />
                <path d="M44.5 32a12.5 12.5 0 1 1-8.9-11.9" stroke="url(#avx-mk-g-film)" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
                <path d="M38 32a6 6 0 1 1-4.2-5.7" stroke="url(#avx-mk-g-film)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                <circle cx="32" cy="32" r="1.7" fill="#bfdbfe" />
              </g>
            </svg>
          </span>
        </div>
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
                  <span className="text-primary">Grow.</span>
                </h1>
              </div>
              <p className="lead hero-lead">
                Matching every conversation with its highest-value buyer in real time.
              </p>
              <ul className="avx-hero-points">
                {HERO_POINTS.map((point) => (
                  <li key={point}><i className="fa-solid fa-circle-check text-primary" aria-hidden="true" />{point}</li>
                ))}
              </ul>
              <p className="avx-hero-for">For marketers, advertisers, and brands.</p>
              <div className="avx-hero-ctas avx-cta-pair">
                <a href="/request-access" className="btn btn-td-green btn-lg fw-semibold"><Bolt />Request Access</a>
                {" "}
                <a href="/p/request_demo" className="avx-cta-quiet">or book a demo <span aria-hidden="true">→</span></a>
              </div>
              <p className="avx-cta-next"><i className="fa-solid fa-envelope" aria-hidden="true" />Invite-only. Our team reviews each request and emails you a setup link.</p>
              <a href="#how-it-decides" className="avx-hero-tour-link">How it works <span aria-hidden="true">↓</span></a>
            </div>
            {/* live decision: one call scored and matched to a buyer by its rules; motion.js replays it with new calls.
                It ships in its globe look (avx-dg) so the older chip design never flashes first */}
            <div className="avx-decide avx-decide-pro avx-dg" data-avx-decide="" role="img" aria-label="Live demo: an incoming call is scored by AI for intent and connected to the best buyer">
              <div className="avx-dc-bar">
                <span className="avx-dc-live"><i className="avx-live-dot" />Live decision</span>
                {" "}
                <span className="avx-dc-telecom-chip"><i className="fa-solid fa-server me-1" />SIP · Opus HD</span>
                {" "}
                <span className="avx-dc-clock" data-dc="clock">14:02:51 UTC</span>
                {" "}
                <span className="avx-dc-time">Decided in <b data-dc="ms">85ms</b></span>
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
                  <span className="avx-fc-verified"><i className="fa-solid fa-shield-check text-primary" style={{ color: "#2563eb" }} /> Verified (99.4%)</span>
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
                    <span className="avx-fc-b-bid"><b>$64.00</b> <span className="avx-fc-win-pill">MATCHED</span></span>
                  </li>
                  <li className="avx-lose">
                    <span className="avx-fc-b-main"><i>MH</i><span className="avx-fc-b-name">Meridian Health</span></span>
                    <span className="avx-fc-b-bid avx-fc-b-why">Cap reached</span>
                  </li>
                  <li className="avx-lose">
                    <span className="avx-fc-b-main"><i>NB</i><span className="avx-fc-b-name">Northwind Benefits</span></span>
                    <span className="avx-fc-b-bid avx-fc-b-why">Closed now</span>
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
                  <i className="fa-solid fa-scale-balanced me-1 text-info" /> Rule match: <span data-dc="why">Intent above 0.80 · licensed in IL · open capacity</span>
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
            <div><b className="avx-proof-num">$0</b><span>Onboarding fees</span></div>
          </div>
          <p className="avx-logos-label">Works with the carriers and ad platforms you already run</p>
          <ul className="avx-logos">
            {WORKS_WITH.map(([file, name, w, h]) => (
              <li key={file}><img alt={name} src={`/assets/avx-site/img/mono/${file}.webp`} width={w} height={h} loading="lazy" decoding="async" /></li>
            ))}
          </ul>
        </div>
      </section>
      {/* the people on both ends of the line: photos from Unsplash, call details are demo overlays */}
      <section className="mktg-section avx-people" id="people" data-avx-people="">
        <div className="container">
          <div className="avx-people-grid">
            <div className="avx-people-copy">
              <p data-r="" style={{ "--r": 0 }} className="avx-eyebrow">Real calls, real people</p>
              <h2 data-r="" style={{ "--r": 1 }} className="fw-bold">Behind every call is someone ready to talk</h2>
              <p data-r="" style={{ "--r": 2 }} className="avx-people-lead">Avortyx gets them to the right person on the first ring.</p>
              <ul data-r="" style={{ "--r": 3 }} className="avx-people-points">
                <li><i className="fa-solid fa-phone" aria-hidden="true" />Callers reach a buyer who can help</li>
                <li><i className="fa-solid fa-headset" aria-hidden="true" />Agents get qualified calls, not spam</li>
                <li><i className="fa-solid fa-chart-line" aria-hidden="true" />You see what every call earned</li>
              </ul>
              <div data-r="" style={{ "--r": 4 }}><More id="more-people">
                <p>Every call is screened, scored and routed in about 85ms. Callers wait less, buyers talk to people who are ready to act, and you see the revenue behind every connected call.</p>
              </More></div>
            </div>
            <div className="avx-people-mosaic" data-ph="mosaic">
              <figure className="avx-ph avx-ph-a">
                <img src="/assets/avx-site/img/people/smiling-call-2000.webp" srcSet="/assets/avx-site/img/people/smiling-call-1200.webp 1200w, /assets/avx-site/img/people/smiling-call-2000.webp 2000w, /assets/avx-site/img/people/smiling-call-2800.webp 2800w" sizes="(min-width: 992px) 720px, 130vw" alt="A smiling man in a white shirt on a phone call at his laptop" width="2000" height="1333" loading="lazy" fetchPriority="low" decoding="async" />
                <span className="avx-ph-chip"><i className="avx-live-dot" />Live call · <b data-ph="clock">0:42</b></span>
                {/* what the agent sees about the caller, as in the product (demo data) */}
                <span className="avx-ph-profile">
                  <span className="avx-ph-profile-head">
                    <span className="avx-ph-av" aria-hidden="true">DR</span>
                    <span className="avx-ph-who"><b>Daniel R.</b><small>Chicago, IL · Mobile</small></span>
                  </span>
                  <span className="avx-ph-tags">
                    <span><i className="fa-solid fa-shield-halved" aria-hidden="true" />Verified</span>
                    <span>Medicare</span>
                    <span>Age 65+</span>
                  </span>
                  <span className="avx-ph-sent">
                    <small>Sentiment</small>
                    <span className="avx-ph-sent-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>
                    <b>Positive</b>
                  </span>
                </span>
                {/* the call's story on a loop (site.js): scoring, then the buyer rules, then connected.
                    Without script it rests on the last step */}
                <span className="avx-ph-card" data-ph="card" data-step="2">
                  <span className="avx-ph-step" data-s="0">
                    <b><i className="avx-ph-spin" aria-hidden="true" />Scoring intent…</b>
                    <small>Google Ads · Medicare</small>
                  </span>
                  <span className="avx-ph-step" data-s="1">
                    <b><i className="fa-solid fa-filter" aria-hidden="true" />Checking buyer rules</b>
                    <small>Caps, hours and licensing</small>
                  </span>
                  <span className="avx-ph-step" data-s="2">
                    <b><i className="fa-solid fa-circle-check" aria-hidden="true" />Connected to Apex Insurance</b>
                    <small>Intent 0.91 · Ready to enroll</small>
                  </span>
                  <span className="avx-ph-progress" aria-hidden="true"><i /></span>
                </span>
                <span className="avx-ph-pay" aria-hidden="true">+$64.00</span>
              </figure>
              <figure className="avx-ph avx-ph-b">
                <img src="/assets/avx-site/img/people/caller-laptop-1400.webp" srcSet="/assets/avx-site/img/people/caller-laptop-900.webp 900w, /assets/avx-site/img/people/caller-laptop-1400.webp 1400w, /assets/avx-site/img/people/caller-laptop-2000.webp 2000w" sizes="(min-width: 992px) 380px, 70vw" alt="A woman on her phone at a desk with a laptop" width="1400" height="933" loading="lazy" fetchPriority="low" decoding="async" />
                <span className="avx-ph-chip"><i className="fa-solid fa-phone" aria-hidden="true" />Caller · Google Ads</span>
                <span className="avx-ph-quote">
                  <small><i className="fa-solid fa-wave-square" aria-hidden="true" />Live transcript</small>
                  “Hi, I’m looking to switch my Medicare plan before the deadline.”
                </span>
              </figure>
              <figure className="avx-ph avx-ph-c">
                <img src="/assets/avx-site/img/people/agent-desk-1400.webp" srcSet="/assets/avx-site/img/people/agent-desk-900.webp 900w, /assets/avx-site/img/people/agent-desk-1400.webp 1400w, /assets/avx-site/img/people/agent-desk-2000.webp 2000w" sizes="(min-width: 992px) 380px, 70vw" alt="An agent in glasses taking a call at his desk" width="1400" height="933" loading="lazy" fetchPriority="low" decoding="async" />
                <span className="avx-ph-chip"><i className="fa-solid fa-headset" aria-hidden="true" />Agent · Warm transfer<span className="avx-ph-eq" aria-hidden="true"><i /><i /><i /><i /></span></span>
                <span className="avx-ph-whisper">
                  <small><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />AI whisper</small>
                  <b>Medicare lead · ready to enroll</b>
                </span>
              </figure>
              {/* caller to agent: the call runs down the line through the AI node between them */}
              <span className="avx-ph-route" aria-hidden="true">
                <span className="avx-ph-wire"><i /></span>
                <span className="avx-ph-node"><i className="fa-solid fa-bolt" />AI · 85ms</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mktg-section avx-lf-sec" id="how-it-decides">
        <div className="container text-center">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">How it decides</p>
            <h2 className="fw-bold">From first ring to closed revenue</h2>
            <p className="text-muted">Three steps before a buyer’s phone rings.</p>
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
              <More id="more-signal">
                <ul>
                  <li>Caller ID and line type</li>
                  <li>Source, campaign and keyword</li>
                  <li>Geo, time and day</li>
                  <li>The caller’s first words</li>
                </ul>
              </More>
            </div>
            <div className="avx-how-link" aria-hidden="true"><i /></div>
            <div className="avx-how-step">
              <span className="avx-how-n">02</span>
              {" "}
              <i className="avx-how-ic fa-solid fa-brain" aria-hidden="true" />
              <h3>Score</h3>
              <p>The call is screened and scored before anyone is dialed.</p>
              <More id="more-score">
                <ul>
                  <li>Intent and sentiment</li>
                  <li>Spam and duplicate checks</li>
                  <li>TCPA, DNC and VOIP screening</li>
                  <li>State rules and consent</li>
                </ul>
              </More>
            </div>
            <div className="avx-how-link" aria-hidden="true"><i /></div>
            <div className="avx-how-step">
              <span className="avx-how-n">03</span>
              {" "}
              <i className="avx-how-ic fa-solid fa-route" aria-hidden="true" />
              <h3>Route</h3>
              <p>The best eligible buyer wins the call.</p>
              <More id="more-route">
                <ul>
                  <li>Buyer match rules</li>
                  <li>Priority, weight and payout</li>
                  <li>Caps, hours and concurrency</li>
                  <li>Failover if a buyer misses</li>
                </ul>
              </More>
            </div>
          </div>
          <p className="avx-how-note"><b>85ms</b> average routing time, from first ring to buyer.</p>
        </div>
      </section>
      <section className="mktg-section avx-proof avx-shield-sec" id="trust">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">AI at the core</p>
            <h2 className="fw-bold">AI on every call</h2>
            <p className="text-muted">Split-second AI decisions on every call.</p>
            <More id="more-trust"><p>High-volume call operations run on split-second decisions. Avortyx scores every caller’s intent, screens for spam and compliance, and routes to the best eligible buyer at the center of every call.</p></More>
          </div>

          {/* Ringba-inspired AI 3D Core Stage */}
          <div className="avx-ringba-stage" data-avx-hub="" role="region" aria-label="Ringba-inspired AI 3D Core Architecture">
            
            {/* SVG Connecting Conduits for Desktop */}
            <svg className="avx-ringba-conduits" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
              <path id="avx-line-0" d="M 300 110 C 390 110, 420 220, 480 240" className="avx-conduit-path avx-path-blue avx-on" />
              <path id="avx-line-1" d="M 300 390 C 390 390, 420 280, 480 260" className="avx-conduit-path avx-path-blue" />
              <path id="avx-line-2" d="M 700 110 C 610 110, 580 220, 520 240" className="avx-conduit-path avx-path-blue" />
              <path id="avx-line-3" d="M 700 390 C 610 390, 580 280, 520 260" className="avx-conduit-path avx-path-blue" />
              <circle className="avx-conduit-packet" r="5" />
            </svg>

            {/* Left Flank: Ringba Spheres 1 & 2 */}
            <div className="avx-ringba-flank avx-flank-left" tabIndex={0} role="region" aria-label="AI capabilities, part 1">
              {/* Pod 1: AI call scoring */}
              <div className="avx-sphere-card avx-sphere-blue avx-active" data-hub-node="0">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-azure">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-brain" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <h3 className="avx-sphere-title">AI call scoring</h3>
                  <p className="avx-sphere-desc">Intent and sentiment scored on every call.</p>
                </div>
              </div>

              {/* Pod 2: Smart routing */}
              <div className="avx-sphere-card avx-sphere-blue" data-hub-node="1">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-azure">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-route" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <h3 className="avx-sphere-title">Smart routing</h3>
                  <p className="avx-sphere-desc">Each call goes to the best eligible buyer.</p>
                </div>
              </div>
            </div>

            {/* Center Stage: The 3D AI Intelligence Core */}
            <div className="avx-ringba-center">
              <div className="avx-3d-core-chassis avx-aura-blue">
                {/* Orbital animated rings */}
                <div className="avx-core-orbit avx-orbit-1" aria-hidden="true"><span className="avx-orbit-node" /></div>
                <div className="avx-core-orbit avx-orbit-2" aria-hidden="true"><span className="avx-orbit-node" /></div>
                <div className="avx-core-orbit avx-orbit-3" aria-hidden="true" />
                <div className="avx-core-glow-aura" />

                {/* 3D Visual Frame */}
                <div className="avx-core-viewport">
                  {/* motion.js draws the AI here in 3D (WebGL depth mesh, scripts/build-agent-3d.py) */}
                  <div className="avx-3d-core-img avx-agent3d" data-avx-agent3d="" role="img" aria-label="Avortyx AI: a female android with a glass circuit cranium, turning in 3D as it scores and routes calls" />

                  {/* Holographic HUD Overlays */}
                  <div className="avx-core-hud-top">
                    <div className="avx-hud-chip">
                      <span className="avx-hud-dot" />
                      <b>AVORTYX AI</b>
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Flank: Ringba Spheres 3 & 4 */}
            <div className="avx-ringba-flank avx-flank-right" tabIndex={0} role="region" aria-label="AI capabilities, part 2">
              {/* Pod 3: Carrier Screening */}
              <div className="avx-sphere-card avx-sphere-blue" data-hub-node="2">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-azure">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <h3 className="avx-sphere-title">Compliance screening</h3>
                  <p className="avx-sphere-desc">Spam, DNC and TCPA checks before any ring.</p>
                </div>
              </div>

              {/* Pod 4: Instant Caller Profile */}
              <div className="avx-sphere-card avx-sphere-blue" data-hub-node="3">
                <div className="avx-sphere-icon-wrap">
                  <div className="avx-3d-sphere avx-sphere-azure">
                    <span className="avx-sphere-glare" />
                    <i className="fa-solid fa-id-card" />
                  </div>
                </div>
                <div className="avx-sphere-info">
                  <h3 className="avx-sphere-title">Caller insights</h3>
                  <p className="avx-sphere-desc">Source, location and intent on every call.</p>
                </div>
              </div>
            </div>

          </div>

          {/* three plain facts under the AI */}
          <div className="avx-ringba-telemetry-bar avx-core-facts">
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-white">24/7</span>
              <span className="avx-rb-stat-lbl">Every call scored by AI</span>
            </div>
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-azure">5</span>
              <span className="avx-rb-stat-lbl">Checks before each ring</span>
            </div>
            <div className="avx-rb-stat">
              <span className="avx-rb-stat-num text-emerald">85ms</span>
              <span className="avx-rb-stat-lbl">To the right buyer</span>
            </div>
          </div>

          {/* the AI at work, in the same section: ask, live transcript, screening (motion.js initAiAtWork) */}
          <div className="avx-ai avx-ai-merged" data-avx-ai="">
            <p className="avx-ai-merged-lead">See it work: ask your calls a question, watch a live transcript, or screen a call.</p>
            <div className="avx-tour-tabs avx-ai-tabs" role="tablist" aria-label="AI demos">
              <button type="button" className="avx-tour-tab avx-on" role="tab" aria-selected="true" aria-controls="avx-ai-ask" id="avx-ai-tab-ask" data-ai="ask">
                <span><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" /> Ask Avortyx</span>
              </button>
              {" "}
              <button type="button" className="avx-tour-tab" role="tab" aria-selected="false" aria-controls="avx-ai-listen" id="avx-ai-tab-listen" data-ai="listen" tabIndex="-1">
                <span><i className="fa-solid fa-wave-square" aria-hidden="true" /> Live transcript</span>
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
        </div>
      </section>
      <section className="mktg-section avx-feat avx-platform" id="platform" data-avx-platform="">
        <div className="container">
          <div className="mktg-section-header text-center">
            <p className="avx-eyebrow">Unified Call Platform</p>
            <h2 className="fw-bold">Every Tool You Need to Track, Route, and Scale</h2>
            <p className="text-muted">Three tools, one real-time dashboard.</p>
            <More id="more-platform"><p>Three enterprise-grade systems united under one real-time dashboard. Eliminate disparate point solutions and command your entire call lifecycle from a single glasspane.</p></More>
          </div>
          <div className="avx-tour-tabs avx-ai-tabs avx-plat-tabs" role="tablist" aria-label="Core tools">
            {PLATFORM_TABS.map(([key, label, icon], i) => (
              <button key={key} type="button" className={i ? 'avx-tour-tab' : 'avx-tour-tab avx-on'} role="tab" id={`plat-tab-${key}`} aria-controls={`plat-${key}`} aria-selected={i ? 'false' : 'true'} tabIndex={i ? -1 : 0}>
                <span><i className={`fa-solid ${icon}`} aria-hidden="true" /> {label}</span>
              </button>
            ))}
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
                      <span><strong>Smart Routing</strong> — Route by tier, weight, or EPC</span>
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
                <More id="more-tracking">
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Tier/weight priority with capacity caps</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Simultaneous ring — first to answer wins</li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Question & Answer flows that qualify and route callers
                  </li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Whisper messages and answering-machine detection
                  </li>
                </ul>
                </More>
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
                <p className="text-muted">Turn web leads into live calls with automated SMS, email, and calls.</p>
                <More id="more-automation">
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />SMS, email, and outbound call sequences</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Conditional branching and retry logic</li>
                  <li className="mb-2">
                    <i className="fa-solid fa-check text-success me-2" aria-hidden="true" />
                    Scheduled callbacks with daylight-hours awareness
                  </li>
                </ul>
                </More>
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
                <More id="more-agent">
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Interview and qualify callers</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Transfer to buyers or other agents</li>
                  <li className="mb-2"><i className="fa-solid fa-check text-success me-2" aria-hidden="true" />Disposition calls and schedule callbacks</li>
                </ul>
                </More>
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
                  <div className="avx-mv-line avx-mv-caller"><span>“I need to switch my Medicare plan before Friday.”</span></div>
                  <div className="avx-mv-line avx-mv-ai"><i className="avx-mv-who">AI</i><span>Intent 0.93 · ready to enroll</span></div>
                  <div className="avx-mv-tag"><i className="fa-solid fa-route" aria-hidden="true" />Routed → Meridian Health</div>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">AI Call Scoring</h3>
                  <p className="text-muted small mb-3">Every call transcribed, summarized and scored for intent.</p>
                  <a href="/features/transcriptions" className="avx-more-link mt-auto">
                    Explore AI Transcriptions{" "}
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
                  <p className="text-muted small mb-3">Live dashboards that rank campaigns by the revenue they bring in.</p>
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
                  <div className="avx-mapi-req"><b>POST</b> /v1/calls <em>201 · 85 ms</em></div>
                  <pre className="avx-mapi-res"><code>{"{\n  "}<i>{"\"id\""}</i>{": "}<s>{"\"call_8f2k1x\""}</s>{",\n  "}<i>{"\"buyer\""}</i>{": "}<s>{"\"Apex Insurance\""}</s>{",\n  "}<i>{"\"payout\""}</i>{": "}<u>{"45.00"}</u>{"\n}"}</code></pre>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">REST API</h3>
                  <p className="text-muted small mb-3">Run Avortyx from your own tools over a clean REST API.</p>
                  <a href="/features/api" className="avx-more-link mt-auto">Explore the REST API <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>
          <a href="/features" className="avx-more-link avx-caps-all">See all features <span aria-hidden="true">→</span></a>
          <div className="avx-int-merged" id="integrations">
            <h3 className="h5 fw-bold mb-2">Works with the tools you already use</h3>
            <ul className="avx-int-grid">
              {INTEGRATION_ROWS.flat().map(([file, name, href, w, h]) => (
                <li key={file}>
                  <a href={href} className="avx-int-tile"><img alt={name} src={logo(file)} width={w} height={h} loading="lazy" decoding="async" /></a>
                </li>
              ))}
            </ul>
            <p className="avx-int-voip-note">
              <b>Bring your own VoIP.</b> Use your preferred telephony provider, or any SIP-compatible carrier.{" "}
              <a href="/features/integrations" className="avx-more-link">All integrations <span aria-hidden="true">→</span></a>
            </p>
          </div>
        </div>
      </section>
      <section className="mktg-section avx-blog-home" id="blog">
        <div className="container">
          <div className="avx-caps-head">
            <div>
              <h2 className="fw-bold">Field Intelligence &amp; Playbooks</h2>
              <p>Playbooks and routing breakdowns from the team.</p>
            </div>
            <a href="/blog" className="avx-more-link">All posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="avx-blog-grid">
            {[
              postBySlug['planning-for-after-hours-calls'],
              postBySlug['sizing-a-dynamic-number-pool'],
              postBySlug['carrying-campaign-tokens-into-a-call']
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
          <h2 className="marketing-cta-band__title">Ready to route your first call?</h2>
          <p className="marketing-cta-band__subtitle">Point a number at Avortyx and start routing on the first ring.</p>
          <div className="avx-cta-pair avx-cta-pair-center">
            <a href="/request-access" className="btn btn-cta-primary fw-semibold avx-ra-cta"><Bolt />Request Access</a>
            {" "}
            <a href="/p/request_demo" className="avx-cta-quiet">or book a demo <span aria-hidden="true">→</span></a>
          </div>
          <p className="avx-price-hint">
            <span><i className="fa-solid fa-circle-check" aria-hidden="true" />No onboarding fees</span>
            <span><i className="fa-solid fa-circle-check" aria-hidden="true" />Usage-based rates with volume discounts</span>
            <span><i className="fa-solid fa-circle-check" aria-hidden="true" />Phone, chat, email and video support</span>
            <a href="/pricing" className="avx-more-link">See pricing <span aria-hidden="true">→</span></a>
          </p>
        </div>
      </section>
      <Testimonials />
      {/* phones: sign-up stays one tap away once the hero has scrolled off (motion.js shows it) */}
      <div className="avx-mcta" data-avx-mcta="">
        <a href="/request-access" className="btn btn-td-green fw-semibold"><Bolt />Request Access</a>
        <a href="/p/request_demo" className="btn btn-outline-td-green fw-semibold">Request Demo</a>
      </div>
    </main>
  )
}
