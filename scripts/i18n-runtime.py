"""Records the strings that scripts add to pages at runtime (chat, forms, hero scenes) into
src/i18n/runtime-keys.json, so they get translated too. Needs the dev server on :5199 and
Playwright for Python:  python3 scripts/i18n-runtime.py [chromium executable]"""
import json, os, re, sys
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'http://localhost:5199'
QUESTIONS = ['pricing', 'onboarding fee', 'discount', 'sign up', 'demo', 'support', 'ping post', 'track calls',
             'routing', 'integrations', 'carrier', 'api', 'webhook', 'compliance', 'spam', 'transcripts', 'ai',
             'dialer', 'automation', 'export', 'hold queue', 'uptime', 'blog', 'careers', 'terms', 'hi', 'thanks',
             'zzzz unknown question']
keys = set()

def routes():
    out = []
    for dp, _, fs in os.walk(os.path.join(ROOT, 'dist')):
        rel = os.path.relpath(dp, os.path.join(ROOT, 'dist'))
        if rel.split(os.sep)[0] in ('ru', 'ja', 'zh', 'assets'):
            continue
        for f in fs:
            if f.endswith('.html'):
                p = '/' + os.path.normpath(os.path.join(rel, f)).replace(os.sep, '/')
                out.append('/' if p == '/index.html' else p[:-5])
    return sorted(out)

def js_click(pg, sel):
    try:
        pg.evaluate('s => { const el = [...document.querySelectorAll(s)].pop(); if (el) el.click() }', sel)
        pg.wait_for_timeout(350)
    except Exception as e:
        print('skip', sel, e)

def grab(pg):
    keys.update(pg.evaluate('Object.keys(window.__avxKeys || {})'))

with sync_playwright() as p:
    exe = sys.argv[1] if len(sys.argv) > 1 else None
    b = p.chromium.launch(executable_path=exe) if exe else p.chromium.launch()
    ctx = b.new_context(viewport={'width': 1280, 'height': 900})
    pg = ctx.new_page()
    for r in routes():
        pg.goto(BASE + r + '?i18n-record', wait_until='networkidle')
        pg.wait_for_timeout(2500)
        pg.mouse.wheel(0, 20000); pg.wait_for_timeout(1500)
        grab(pg)
    # the help chat: every topic, the team card and a teammate
    pg.goto(BASE + '/?i18n-record', wait_until='networkidle')
    pg.evaluate("sessionStorage.clear()")
    pg.goto(BASE + '/?i18n-record', wait_until='networkidle')
    js_click(pg, '.avx-help-btn')
    for q in QUESTIONS:
        pg.fill('.avx-help-form input', q); pg.press('.avx-help-form input', 'Enter'); pg.wait_for_timeout(1100)
    js_click(pg, '.avx-help-teamlink')
    for intent in ('sales', 'support'):
        js_click(pg, f'.avx-help-team-cta [data-intent={intent}]')
    js_click(pg, '.avx-help-team [data-pick=milena]')
    grab(pg)
    js_click(pg, '.avx-help-close')
    # email support dialog, with its error message
    js_click(pg, '[data-avx-email]')
    js_click(pg, '.avx-mail-form button[type=submit]')
    grab(pg)
    # request access form errors
    pg.goto(BASE + '/request-access?i18n-record', wait_until='networkidle')
    js_click(pg, 'form button[type=submit]')
    grab(pg)
    # help search with no results, legal menu
    pg.goto(BASE + '/help?i18n-record', wait_until='networkidle')
    try:
        pg.fill('[data-avx-help-search] input', 'qqqqzzz', timeout=3000); pg.wait_for_timeout(500)
    except Exception as e:
        print('skip help search', e)
    grab(pg)
    b.close()

# keep only strings that need a translation and are not already in the static pages; live
# numbers become {#} templates (core.js fills the real numbers back in)
def template(k):
    return re.sub(r'(<[^>]*>)|\d+(?:[.,]\d+)*', lambda m: m.group(1) or '{#}', k)
static = {x['k'] for x in json.load(open(os.path.join(ROOT, 'src/i18n/keys.json'))) if x['page'] != '(runtime)'}
out = sorted({template(k) if re.search(r'\d', re.sub(r'<[^>]*>', '', k)) else k for k in keys if k not in static})
json.dump(out, open(os.path.join(ROOT, 'src/i18n/runtime-keys.json'), 'w'), ensure_ascii=False, indent=1)
print(len(keys), 'runtime strings seen,', len(out), 'not on the static pages')
