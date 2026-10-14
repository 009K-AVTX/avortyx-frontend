// The landing page in green: pwa.group's neon green on neutral black, in place of the blue theme.
// Only the home pages (/, /ru, /ja, /zh) are green. They load green copies of the stylesheets and
// motion.js (made here from the blue sources, so later edits carry over), their inline colours are
// mapped the same way, and they point at green copies of the blue pictures and the hero film
// (public/assets/avx-green/, made by scripts/build-green-media.py with the same mapping).
//
// The mapping uses pwa.group's exact colour codes (its Vuetify theme, primary_* and secondary_*):
// a blue colour becomes the pwa.group green whose lightness matches it (a light blue a light
// green, the main blue #37C61C, a deep blue a deep green); a greyish blue (the navy backgrounds,
// slate text) becomes the matching pwa.group neutral, down to their #0C0C0C black. Colours that
// are not blue (white, reds, ambers) are left alone. Alpha is kept.
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import postcss from 'postcss'

// pwa.group's palette, light to dark
const GREENS = ['#EEFDE8', '#D7FACD', '#B1F6A0', '#74EB59', '#37C61C', '#2B9E12', '#1F7813', '#1E5F15', '#1C5116', '#0B2D06', '#051A03']
const NEUTRALS = ['#F6F6F6', '#E7E7E7', '#D1D1D1', '#B0B0B0', '#888888', '#6D6D6D', '#5D5D5D', '#4F4F4F', '#454545',
  '#3D3D3D', '#232323', '#1F1F1F', '#1B1B1B', '#171717', '#131313', '#0C0C0C']
// Tailwind blue's lightness -> the lightness of the pwa.group green that takes its place
// (blue-400 #60a5fa -> #74EB59, blue-500 #3b82f6 -> #37C61C, blue-600 #2563eb -> #2B9E12, ...)
const L_MAP = [[0, 0], [0.21, 0.10], [0.33, 0.20], [0.40, 0.23], [0.48, 0.27], [0.53, 0.35], [0.60, 0.44],
  [0.68, 0.64], [0.78, 0.80], [0.93, 0.89], [0.97, 0.95], [1, 1]]

const lerp = (a, b, t) => a + (b - a) * t
function mapL(l) {
  for (let i = 1; i < L_MAP.length; i++) {
    const [x0, y0] = L_MAP[i - 1], [x1, y1] = L_MAP[i]
    if (l <= x1) return lerp(y0, y1, (l - x0) / (x1 - x0))
  }
  return 1
}
const rgbOf = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
const lightness = ([r, g, b]) => (Math.max(r, g, b) + Math.min(r, g, b)) / 2
const nearest = (list, l) => list.map(rgbOf).reduce((best, c) => (Math.abs(lightness(c) - l) < Math.abs(lightness(best) - l) ? c : best))
function hueOf(r, g, b) {
  const max = Math.max(r, g, b), d = max - Math.min(r, g, b)
  const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4
  return (h * 60 + 360) % 360
}

// one colour, channels 0..1 -> 0..1
export function greenRgb(r, g, b) {
  const chroma = Math.max(r, g, b) - Math.min(r, g, b)
  if (!chroma) return [r, g, b]
  // blue: from cyan-blue to indigo (teal and purple stay as they are)
  const h = hueOf(r, g, b)
  if (h < 176 || h > 274) return [r, g, b]
  const l = lightness([r, g, b])
  // vivid blues turn green; greyish blues (navy grounds, slate text) turn neutral
  return chroma >= 0.17 ? nearest(GREENS, mapL(l)) : nearest(NEUTRALS, l)
}

const hex2 = (v) => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, '0')
function mapHex(hex) {
  const full = hex.length <= 4 ? [...hex].map((c) => c + c).join('') : hex
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
  const out = greenRgb(r, g, b).map(hex2).join('')
  const alpha = hex.length === 4 ? hex[3] + hex[3] : hex.length === 8 ? hex.slice(6) : ''
  return out + alpha
}
const mapTriple = (r, g, b) => greenRgb(r / 255, g / 255, b / 255).map((v) => Math.round(v * 255))

// colour literals in a CSS value or a script: #hex, %23hex (inside data: URIs), rgb()/rgba()
// channel triples (also the half-built 'rgba(59,130,246,' + a + ')' of canvas code)
function mapLiterals(text, short = true) {
  const HEX = short ? /(?<![\w&(/-])(#|%23)([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![\w-])/g : /(?<![\w&(/-])(#|%23)([0-9a-fA-F]{8}|[0-9a-fA-F]{6})(?![\w-])/g
  return text
    .replace(HEX, (m, p, h) => p + mapHex(h))
    .replace(/(rgba?\(\s*)(\d{1,3})(\s*,?\s*)(\d{1,3})(\s*,?\s*)(\d{1,3})/g, (m, a, r, s1, g, s2, b) => {
      const [R, G, B] = mapTriple(+r, +g, +b)
      return a + R + s1 + G + s2 + B
    })
}

export function greenCss(css) {
  const root = postcss.parse(css)
  root.walkDecls((d) => { d.value = mapLiterals(d.value) })
  return root.toString()
}

export function greenJs(js) {
  // only 6- and 8-digit hex in scripts: a selector string such as '#add' is not a colour
  return mapLiterals(js, false)
    // canvas colours kept as [r, g, b] arrays (small index lists like [0, 1, 2] are not colours)
    .replace(/\[(\d{1,3}), (\d{1,3}), (\d{1,3})\]/g, (m, r, g, b) => (Math.max(r, g, b) < 24 ? m : `[${mapTriple(+r, +g, +b).join(', ')}]`))
    // shader colours, vec3(0.23, 0.51, 0.96); values over 1 are HDR boosts, scaled back after
    .replace(/vec3\((\d*\.\d+),(\s*)(\d*\.\d+),(\s*)(\d*\.\d+)\)/g, (m, r, s1, g, s2, b) => {
      const k = Math.max(1, +r, +g, +b)
      const out = greenRgb(r / k, g / k, b / k).map((v) => (v * k).toFixed(3).replace(/0+$/, '').replace(/\.$/, '.0'))
      return `vec3(${out[0]},${s1}${out[1]},${s2}${out[2]})`
    })
}

// pwa.group's buttons, exactly: a #75EB59 -> #0DA64E gradient with #171717 text (their shape is
// not copied; ours stay rounded). Appended to motion-green.css, the last stylesheet on the page.
const BUTTONS = `
html body .btn-td-green, html body .btn-cta-primary, html body .avx-request-access, html body .avx-help-btn,
html body .avx-ask-form button[type=submit], html body .avx-help-form button[type=submit], html body #okClose {
  background: linear-gradient(90deg, #75EB59 0%, #0DA64E 100%) !important;
  border-color: transparent !important;
  color: #171717 !important;
}
html body .btn-td-green:hover, html body .btn-cta-primary:hover, html body .avx-request-access:hover, html body .avx-help-btn:hover,
html body .avx-ask-form button[type=submit]:hover, html body .avx-help-form button[type=submit]:hover, html body #okClose:hover {
  background: linear-gradient(90deg, #75EB59 0%, #0DA64E 100%) !important;
  color: #171717 !important;
  filter: brightness(1.08);
}

/* the Ask Avortyx demo stays subtle: deep pwa.group greens instead of the bright button green */
html body .avx-ask .avx-ask-q {
  background: rgba(55, 198, 28, .12);
  border: 1px solid rgba(116, 235, 89, .22);
  color: #D7FACD;
}
html body .avx-ask .avx-ask-bar i {
  background: linear-gradient(90deg, #1E5F15, #2B9E12);
}
html body .avx-ask .avx-ask-chips button {
  background: rgba(55, 198, 28, .06);
  border-color: rgba(116, 235, 89, .16);
}
html body .avx-ask .avx-ask-form button[type=submit] {
  background: #1E5F15 !important;
  color: #B1F6A0 !important;
}
html body .avx-ask .avx-ask-form button[type=submit]:hover {
  background: #1F7813 !important;
  filter: none;
}
`

// the green copies the home pages load instead of the blue files
export const GREEN_ASSETS = {
  'avx-theme/theme.css': 'avx-theme/theme-green.css',
  'avx-motion/motion.css': 'avx-motion/motion-green.css',
  'avx-motion/motion.js': 'avx-motion/motion-green.js',
  'avx-site/site.css': 'avx-site/site-green.css',
}

// /assets/<path> -> /assets/avx-green/<path> for every picture that has a green copy
function greenMedia(text, publicDir) {
  return text
    .replace(/\/assets\/((?!avx-green\/)[\w/.-]+\.(?:webp|png|jpg|svg|mp4))/g, (m, p) => (existsSync(join(publicDir, 'assets/avx-green', p)) ? '/assets/avx-green/' + p : m))
    // the logo mark drawn into the ask demo's avatar (stylesheets only: the tab icon stays as it is)
    .replace(/url\(\/favicon\.svg\)/g, (m) => (existsSync(join(publicDir, 'assets/avx-green/favicon.svg')) ? 'url(/assets/avx-green/favicon.svg)' : m))
    // the hero film is picked by width in site.js ('<base>-480.mp4' / '<base>-720.mp4')
    .replace(/data-avx-hero-film="\/assets\/avx-site\/video\/hero-blue"/g, (m) => (existsSync(join(publicDir, 'assets/avx-green/avx-site/video/hero-blue-720.mp4')) ? 'data-avx-hero-film="/assets/avx-green/avx-site/video/hero-blue"' : m))
}

// a green copy of one of GREEN_ASSETS' sources; its pictures point at their green copies
export function greenAsset(name, code, publicDir) {
  const out = name.endsWith('.css') ? greenCss(code) + (name === 'avx-motion/motion.css' ? BUTTONS : '') : greenJs(code)
  // motion.js loads the AI agent from BASE_URL + name
  const agent = existsSync(join(publicDir, 'assets/avx-green/avx-site/img/avx-agent.webp'))
  return greenMedia(name.endsWith('.js') && agent ? out.replace("load('avx-agent.webp'", "load('../../avx-green/avx-site/img/avx-agent.webp'") : out, publicDir)
}

// The home page HTML: green stylesheets and scripts, inline colours mapped, green pictures.
export function greenPage(html, publicDir) {
  for (const [blue, green] of Object.entries(GREEN_ASSETS)) html = html.replaceAll(`/assets/${blue}`, `/assets/${green}`)
  html = html
    .replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (m, a, css, b) => a + greenCss(css) + b)
    .replace(/(\sstyle=")([^"]*)(")/g, (m, a, v, b) => a + mapLiterals(v.replaceAll('&quot;', '"')).replaceAll('"', '&quot;') + b)
    .replace(/(\s(?:fill|stroke|stop-color|flood-color|color)=")([^"]*)(")/g, (m, a, v, b) => a + mapLiterals(v) + b)
  return greenMedia(html, publicDir)
}
