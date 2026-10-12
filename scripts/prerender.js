// Writes every page to dist/ as static HTML, next to a copy of public/.
// Runs after `vite build --ssr`, which compiles src/entry-server.jsx into .ssr/.
import { cpSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { transform } from 'esbuild'
import { PurgeCSS } from 'purgecss'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const { render, routes } = await import(pathToFileURL(join(root, '.ssr/entry-server.js')).href)

rmSync(dist, { recursive: true, force: true })
cpSync(join(root, 'public'), dist, { recursive: true })

for (const route of routes) {
  const file = join(dist, route === '/' ? 'index.html' : route)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(route))
}
rmSync(join(root, '.ssr'), { recursive: true, force: true })
console.log(`prerendered ${routes.length} pages to dist/`)

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
  'avx-icons/icons.css', 'avx-fonts/fonts.css']
for (const name of MINIFY) {
  const file = join(dist, 'assets', name)
  const code = readFileSync(file, 'utf8')
  const out = await transform(code, { loader: name.endsWith('.css') ? 'css' : 'js', minify: true, legalComments: 'inline' })
  writeFileSync(file, out.code)
  console.log(`${name} ${Math.round(code.length / 1024)} KB -> ${Math.round(out.code.length / 1024)} KB`)
}
