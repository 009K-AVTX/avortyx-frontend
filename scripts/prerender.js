// Writes every page to dist/ as static HTML, next to a copy of public/.
// Runs after `vite build --ssr`, which compiles src/entry-server.jsx into .ssr/.
import { cpSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { transform } from 'esbuild'
import { englishPage, LANGS, loadDict, localize, runtimeScript } from './i18n-build.js'
import { PurgeCSS } from 'purgecss'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const { render, routes } = await import(pathToFileURL(join(root, '.ssr/entry-server.js')).href)

const dicts = Object.fromEntries(LANGS.map((l) => [l, loadDict(l)]))
const missing = Object.fromEntries(LANGS.map((l) => [l, new Set()]))
rmSync(dist, { recursive: true, force: true })
cpSync(join(root, 'public'), dist, { recursive: true })

// every page in English, then in each other language under /ru, /ja and /zh
const pageFile = (lang, route) => join(dist, ...(lang === 'en' ? [] : [lang]), route === '/' ? 'index.html' : route)
const files = []
for (const route of routes) {
  const html = render(route)
  const file = pageFile('en', route)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, englishPage(html, route))
  files.push(file)
  for (const lang of LANGS) {
    const out = pageFile(lang, route)
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, localize(html, route, lang, dicts[lang], missing[lang]))
    files.push(out)
  }
}
rmSync(join(root, '.ssr'), { recursive: true, force: true })
mkdirSync(join(dist, 'assets/avx-i18n'), { recursive: true })
for (const lang of LANGS) writeFileSync(join(dist, 'assets/avx-i18n', `${lang}.js`), runtimeScript(lang, dicts[lang]))
if (process.env.I18N_MISSING) for (const l of LANGS) console.log(l, [...missing[l]])
console.log(`prerendered ${routes.length} pages to dist/, plus ${LANGS.join(', ')} (untranslated strings: ${LANGS.map((l) => `${l} ${missing[l].size}`).join(', ')})`)

// site.css is the full Bootstrap + original marketing stylesheet: ship only the rules the pages
// and scripts use. motion.css and theme.css stay whole (motion.js builds class names at runtime).
const siteCss = join(dist, 'assets/avx-site/site.css')
const before = statSync(siteCss).size
const [purged] = await new PurgeCSS().purge({
  content: [join(dist, '**/*.html'), join(dist, 'assets/**/*.js')],
  css: [siteCss],
})
writeFileSync(siteCss, purged.css)
console.log(`site.css ${Math.round(before / 1024)} KB -> ${Math.round(purged.css.length / 1024)} KB`)

// The hand-written scripts and stylesheets ship minified (the sources in public/ stay readable)
const MINIFY = ['avx-motion/motion.js', 'avx-motion/motion.css', 'avx-theme/theme.css', 'avx-site/site.js', 'avx-site/site.css',
  'avx-icons/icons.css', 'avx-fonts/fonts.css', 'avx-i18n/core.js', 'avx-i18n/runtime.js']
for (const name of MINIFY) {
  const file = join(dist, 'assets', name)
  const code = readFileSync(file, 'utf8')
  const out = await transform(code, { loader: name.endsWith('.css') ? 'css' : 'js', minify: true, legalComments: 'inline' })
  writeFileSync(file, out.code)
  console.log(`${name} ${Math.round(code.length / 1024)} KB -> ${Math.round(out.code.length / 1024)} KB`)
}

// Every page asks for each stylesheet and script by a content hash (?v=…), so a deploy can never
// pair new pages with an old copy a browser or CDN still has cached under the same address
const VERSIONED = [...MINIFY, ...LANGS.map((l) => `avx-i18n/${l}.js`)]
const hashes = Object.fromEntries(VERSIONED.map((name) => [name,
  createHash('sha256').update(readFileSync(join(dist, 'assets', name))).digest('hex').slice(0, 10)]))
const ASSET_URL = /\/assets\/(avx-[a-z0-9]+\/[a-z]+\.(?:css|js))(?:\?v=[\w-]*)?(?=["'])/g
for (const file of files) {
  const html = readFileSync(file, 'utf8')
  writeFileSync(file, html.replace(ASSET_URL, (m, name) => (hashes[name] ? `/assets/${name}?v=${hashes[name]}` : m)))
}
console.log(`versioned ${Object.keys(hashes).length} asset URLs in ${files.length} pages`)
