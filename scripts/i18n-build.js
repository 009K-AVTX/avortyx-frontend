// Builds the /ru, /ja and /zh pages from the English HTML, and adds the language menu links and
// hreflang alternates to every page. Used by scripts/prerender.js and the dev server.
// Translations: src/i18n/<lang>/*.json as { "English key": "translation" } (keys: scripts/i18n.js).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { parseHTML } from 'linkedom'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
// (the query makes a long-running dev server pick up edits to core.js)
const coreFile = join(root, 'public/assets/avx-i18n/core.js')
await import(pathToFileURL(coreFile).href + '?v=' + statSync(coreFile).mtimeMs)
const { translate, template } = globalThis.AVXI18N

export const LANGS = ['ru', 'ja', 'zh']
const HTML_LANG = { en: 'en', ru: 'ru', ja: 'ja', zh: 'zh-Hans' }
const SITE = 'https://avortyx-prototype.vercel.app'

export function loadDict(lang) {
  const dir = join(root, 'src/i18n', lang)
  const dict = {}
  if (!existsSync(dir)) return dict
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) Object.assign(dict, JSON.parse(readFileSync(join(dir, f), 'utf8')))
  // a string with numbers also matches the same string with other numbers (animated counters)
  const plain = (s) => s.replace(/<[^>]*>/g, '')
  const count = (s) => (template(s).match(/\{#\}/g) || []).length
  for (const [k, v] of Object.entries(dict)) {
    if (!/\d/.test(plain(k)) || /\{#\}/.test(k)) continue
    const tk = template(k)
    if (dict[tk] === undefined && count(k) === count(v)) dict[tk] = template(v)
  }
  return dict
}

// the strings scripts add at runtime (scripts/i18n.js record), as the browser dictionary
export function runtimeScript(lang, dict) {
  const file = join(root, 'src/i18n/runtime-keys.json')
  const keys = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : []
  const out = {}
  for (const k of keys) if (dict[k] !== undefined) out[k] = dict[k]
  // number templates for short strings only: counters and labels animate, paragraphs do not
  for (const k of Object.keys(dict)) if (k.includes('{#}') && k.length < 160) out[k] = dict[k]
  return `window.AVX_DICT=${JSON.stringify(out)};\n`
}

// "/pricing.html" -> "/pricing", "/" -> "/"
const cleanPath = (route) => route.replace(/\/index\.html$/, '/').replace(/\.html$/, '')
export const langPath = (lang, route) => {
  const p = cleanPath(route)
  return lang === 'en' ? p : p === '/' ? `/${lang}` : `/${lang}${p}`
}
// internal page links get the language prefix; assets, anchors, mail and other sites do not
const INTERNAL = /^\/(?!\/|assets\/|favicon|apple-touch|og-image|robots|(?:ru|ja|zh)(?:\/|$))/

function finish(document, route, lang) {
  document.documentElement.setAttribute('lang', HTML_LANG[lang])
  for (const a of document.querySelectorAll('a[data-avx-lang]')) {
    const code = a.getAttribute('data-avx-lang')
    a.setAttribute('href', langPath(code, route))
    if (code === lang) a.setAttribute('aria-current', 'true')
    else a.removeAttribute('aria-current')
  }
  const head = document.querySelector('head')
  for (const code of ['en', ...LANGS]) {
    const l = document.createElement('link')
    l.setAttribute('rel', 'alternate')
    l.setAttribute('hreflang', HTML_LANG[code])
    l.setAttribute('href', SITE + langPath(code, route))
    head.appendChild(l)
  }
  const x = document.createElement('link')
  x.setAttribute('rel', 'alternate')
  x.setAttribute('hreflang', 'x-default')
  x.setAttribute('href', SITE + langPath('en', route))
  head.appendChild(x)
  return '<!DOCTYPE html>\n' + document.documentElement.outerHTML
}

// the English page with its language menu and alternates filled in
export function englishPage(html, route) {
  const { document } = parseHTML(html)
  return finish(document, route, 'en')
}

// the page in `lang`; `missing` collects keys with no translation yet
export function localize(html, route, lang, dict, missing) {
  const { document } = parseHTML(html)
  const miss = translate(document, dict, true)
  if (missing) miss.forEach((k) => missing.add(k))
  for (const a of document.querySelectorAll('a[href]')) {
    const h = a.getAttribute('href')
    if (INTERNAL.test(h) && !a.hasAttribute('data-avx-lang')) a.setAttribute('href', `/${lang}${h.replace(/^\/(?=$|[#?])/, '')}`)
  }
  const canon = document.querySelector('link[rel="canonical"]')
  if (canon) canon.setAttribute('href', SITE + langPath(lang, route))
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', SITE + langPath(lang, route))
  // the language and its runtime dictionary load before core.js and runtime.js
  const core = document.querySelector('script[src^="/assets/avx-i18n/core.js"]')
  const set = document.createElement('script')
  set.textContent = `window.AVX_LANG=${JSON.stringify(lang)};`
  const dictTag = document.createElement('script')
  dictTag.setAttribute('src', `/assets/avx-i18n/${lang}.js`)
  // deferred like core.js and runtime.js: the page is already translated, so the dictionary (only
  // for text scripts add later) never holds up the first paint; defer keeps the three in order
  dictTag.setAttribute('defer', '')
  core.parentNode.insertBefore(set, core)
  core.parentNode.insertBefore(dictTag, core)
  return finish(document, route, lang)
}
