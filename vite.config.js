import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const ENTRY = '/src/entry-server.jsx'

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

export default defineConfig({
  plugins: [react(), renderPages()],
})
