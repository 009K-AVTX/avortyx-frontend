import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { Readable } from 'node:stream'
import { pathToFileURL } from 'node:url'

const ENTRY = '/src/entry-server.jsx'
const loadGreen = () => import(pathToFileURL(resolve('scripts/green.js')).href + '?t=' + Date.now())

// The site is rendered by React on the server: in dev every page request is rendered on the
// fly (static files still come from public/); `npm run build` prerenders them all to dist/.
function renderPages() {
  return {
    name: 'avortyx-render-pages',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          let path = decodeURI(req.url.split(/[?#]/)[0])
          const i18n = await import(pathToFileURL(resolve('scripts/i18n-build.js')).href + '?t=' + Date.now())
          // the home page's green stylesheets and script, made from the blue sources (scripts/green.js)
          const green = await loadGreen()
          const blue = Object.keys(green.GREEN_ASSETS).find((k) => path === `/assets/${green.GREEN_ASSETS[k]}`)
          if (blue) {
            res.setHeader('Content-Type', (blue.endsWith('.css') ? 'text/css' : 'text/javascript') + '; charset=utf-8')
            return res.end(green.greenAsset(blue, readFileSync(resolve('public/assets', blue), 'utf8'), resolve('public')))
          }
          // the browser dictionary for a language, rebuilt from src/i18n on every request
          const dictFile = path.match(/^\/assets\/avx-i18n\/(ru|ja|zh)\.js$/)
          if (dictFile) {
            res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
            return res.end(i18n.runtimeScript(dictFile[1], i18n.loadDict(dictFile[1])))
          }
          // /ru, /ja and /zh pages: the English page, translated
          const langMatch = path.match(/^\/(ru|ja|zh)(?=\/|$)/)
          const lang = langMatch ? langMatch[1] : 'en'
          if (langMatch) path = path.slice(3) || '/'
          // same addresses as production: /, /features.html, and /features as /features.html
          const route = path === '/' || path === '/index.html' ? '/' : path.endsWith('.html') ? path : path.replace(/\/$/, '') + '.html'
          const { render } = await server.ssrLoadModule(ENTRY)
          let html = render(route)
          if (html == null) return next()
          html = lang === 'en' ? i18n.englishPage(html, route) : i18n.localize(html, route, lang, i18n.loadDict(lang))
          if (route === '/') html = (await loadGreen()).greenPage(html, resolve('public'))
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          // reload the browser when a page or component changes
          res.end(html.replace('</body>', '<script type="module" src="/@vite/client"></script>\n</body>'))
        } catch (err) {
          server.ssrFixStacktrace(err)
          next(err)
        }
      })
      server.watcher.on('change', (file) => {
        if (file.includes('/src/')) server.ws.send({ type: 'full-reload' })
      })
    },
  }
}

// /api/<name> runs api/<name>.js in dev the way Vercel runs it in production: the request goes to
// its GET/POST export as a web Request, with the settings from .env.local in process.env.
function apiRoutes() {
  return {
    name: 'avortyx-api-routes',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))
      server.middlewares.use(async (req, res, next) => {
        const name = (req.url.match(/^\/api\/([\w-]+)(?=[?#]|$)/) || [])[1]
        const file = name && resolve('api', name + '.js')
        if (!file || !existsSync(file)) return next()
        try {
          const mod = await server.ssrLoadModule(file)
          const handler = mod[req.method]
          if (!handler) { res.statusCode = 405; return res.end() }
          const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : Readable.toWeb(req)
          const out = await handler(new Request('http://' + req.headers.host + req.url, { method: req.method, headers: req.headers, body, duplex: 'half' }))
          res.statusCode = out.status
          out.headers.forEach((v, k) => res.setHeader(k, v))
          res.end(Buffer.from(await out.arrayBuffer()))
        } catch (err) {
          next(err)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), apiRoutes(), renderPages()],
})
