// Translation helper. Reads the English pages in dist/ (run `npm run build` first).
//   node scripts/i18n.js extract   -> src/i18n/keys.json: every translatable string, in page order
//   node scripts/i18n.js status    -> how many strings each language is missing
//   node scripts/i18n.js dump [words] -> the next untranslated strings (about `words` words) as id + key
//   node scripts/i18n.js apply <file> -> merge { id: [ru, ja, zh] } into src/i18n/<lang>/main.json,
//                                       checking each translation keeps its placeholders
// Translations live in src/i18n/<lang>/*.json as { "English key": "translation" }.
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseHTML } from 'linkedom'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
await import(join(root, 'public/assets/avx-i18n/core.js'))
const { collect, LANGS } = globalThis.AVXI18N

export function loadDict(lang) {
  const dir = join(root, 'src/i18n', lang)
  const dict = {}
  if (!existsSync(dir)) return dict
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) Object.assign(dict, JSON.parse(readFileSync(join(dir, f), 'utf8')))
  return dict
}

function englishPages() {
  const out = []
  ;(function walk(d) {
    for (const f of readdirSync(d)) {
      const p = join(d, f)
      if (statSync(p).isDirectory()) { if (d === dist && (LANGS.includes(f) || f === 'assets')) continue; walk(p) }
      else if (f.endsWith('.html')) out.push(p)
    }
  })(dist)
  return out.sort((a, b) => (a.endsWith('/index.html') ? -1 : b.endsWith('/index.html') ? 1 : a.localeCompare(b)))
}

const cmd = process.argv[2]
if (cmd === 'extract') {
  const seen = new Map()
  for (const file of englishPages()) {
    const { document } = parseHTML(readFileSync(file, 'utf8'))
    for (const k of collect(document, true)) if (!seen.has(k)) seen.set(k, relative(dist, file))
  }
  // strings that scripts add at runtime, gathered by scripts/i18n-runtime.py
  const rt = join(root, 'src/i18n/runtime-keys.json')
  if (existsSync(rt)) for (const k of JSON.parse(readFileSync(rt, 'utf8'))) if (!seen.has(k)) seen.set(k, '(runtime)')
  const keys = [...seen].map(([k, page]) => ({ k, page }))
  writeFileSync(join(root, 'src/i18n/keys.json'), JSON.stringify(keys, null, 1))
  console.log(`${keys.length} keys, ${keys.reduce((n, x) => n + x.k.split(/\s+/).length, 0)} words`)
} else if (cmd === 'status') {
  const keys = JSON.parse(readFileSync(join(root, 'src/i18n/keys.json'), 'utf8'))
  for (const lang of LANGS) {
    const dict = loadDict(lang)
    const missing = keys.filter((x) => dict[x.k] === undefined)
    console.log(`${lang}: ${keys.length - missing.length}/${keys.length} translated`)
  }
}

const idOf = (k) => createHash('sha1').update(k).digest('hex').slice(0, 8)
const tokens = (s) => (s.match(/<\/?\d+\/?>|\{#\}/g) || []).sort().join(' ')

if (cmd === 'dump') {
  const budget = +(process.argv[3] || 1500)
  const keys = JSON.parse(readFileSync(join(root, 'src/i18n/keys.json'), 'utf8'))
  const dicts = LANGS.map(loadDict)
  let words = 0
  const out = []
  for (const { k } of keys) {
    if (dicts.every((d) => d[k] !== undefined)) continue
    out.push([idOf(k), k])
    words += k.split(/\s+/).length
    if (words >= budget) break
  }
  const left = keys.filter(({ k }) => dicts.some((d) => d[k] === undefined)).length
  console.log(`# ${out.length} strings, ${words} words (${left} untranslated in all)`)
  for (const [id, k] of out) console.log(JSON.stringify(id) + ': ' + JSON.stringify(k))
} else if (cmd === 'apply') {
  const input = JSON.parse(readFileSync(process.argv[3], 'utf8'))
  const keys = JSON.parse(readFileSync(join(root, 'src/i18n/keys.json'), 'utf8'))
  const byId = Object.fromEntries(keys.map(({ k }) => [idOf(k), k]))
  const files = LANGS.map((l) => join(root, 'src/i18n', l, 'main.json'))
  const dicts = files.map((f) => (existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : {}))
  let ok = 0
  const bad = []
  for (const [id, tr] of Object.entries(input)) {
    const k = byId[id]
    if (!k) { bad.push(`${id}: unknown id`); continue }
    if (!Array.isArray(tr) || tr.length !== LANGS.length) { bad.push(`${id}: needs ${LANGS.length} translations`); continue }
    const want = tokens(k)
    const wrong = tr.map((t, i) => (tokens(t) === want ? null : LANGS[i])).filter(Boolean)
    if (wrong.length) { bad.push(`${id} (${wrong.join(',')}): placeholders differ from ${JSON.stringify(k).slice(0, 80)}`); continue }
    tr.forEach((t, i) => { dicts[i][k] = t })
    ok++
  }
  files.forEach((f, i) => { mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, JSON.stringify(dicts[i], null, 1) + '\n') })
  console.log(`applied ${ok}` + (bad.length ? `, ${bad.length} rejected:\n` + bad.join('\n') : ''))
}
