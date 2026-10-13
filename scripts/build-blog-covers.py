#!/usr/bin/env python3
"""Render a unique cover for every blog post into public/assets/avx-blog/.

Every cover is in the avortyx.com blue theme: the post's title set large on the left, and on
the right an illustration drawn for that post's topic (an appointment calendar, a leaking
funnel, an auction, a checklist...), over a deep navy stage with a perspective grid floor.
Writes <slug>.webp (1200x630, also the share image) and <slug>-600.webp (card thumbnail).
Bump COVER_VERSION in src/blog/posts.js after re-rendering (covers are cached for a week).

Needs: pip install pillow numpy fonttools brotli
Run:   python3 scripts/build-blog-covers.py   (after adding a post to src/blog/posts.js and a
       motif for it in MOTIFS below)
"""
import colorsys
import io
import json
import math
import re
import subprocess
from pathlib import Path

import numpy as np
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public/assets/avx-blog'
W, H, SS = 1200, 630, 2  # supersampled 2x, then scaled down
MX, MY = 905, 318         # center of the illustration, in 1x pixels
DEEP_HUE = 217.2          # avortyx.com's blue, #3b82f6, for every cover


def posts():
    # read the post list straight from the JS module with node
    code = "import('%s').then(m=>console.log(JSON.stringify(m.POSTS.map(p=>({slug:p.slug,title:p.title,icon:p.icon,hue:p.hue,category:p.category})))))" % (ROOT / 'src/blog/posts.js').as_uri()
    return json.loads(subprocess.check_output(['node', '-e', code], text=True))


def ttf(woff2):
    f = TTFont(woff2)
    f.flavor = None
    buf = io.BytesIO()
    f.save(buf)
    buf.seek(0)
    return buf


def font(weight, size):
    # Poppins, the site face (static weights, self-hosted in avx-fonts)
    return ImageFont.truetype(ttf(ROOT / 'public/assets/avx-fonts' / f'poppins-{weight}-latin.woff2'), int(size * SS))


def icon_codes():
    css = (ROOT / 'public/assets/avx-icons/icons.css').read_text()
    return {m.group(1): chr(int(m.group(2), 16)) for m in re.finditer(r'\.fa-([a-z0-9-]+)\{--fa:"\\([0-9a-f]+)"\}', css)}


class Pen:
    """Draws in 1x coordinates on a supersampled RGBA layer, in shades of the post's blue."""

    def __init__(self, hue):
        self.hue = hue
        self.img = Image.new('RGBA', (W * SS, H * SS))
        self.d = ImageDraw.Draw(self.img)

    def c(self, l, a=255, s=.9):
        r, g, b = colorsys.hls_to_rgb(self.hue / 360, l, s)
        return (int(r * 255), int(g * 255), int(b * 255), int(a))

    @staticmethod
    def p(*xy):
        return [v * SS for v in xy]

    def line(self, pts, fill, width=2):
        self.d.line([v * SS for xy in pts for v in xy], fill=fill, width=int(width * SS), joint='curve')

    def circle(self, x, y, r, fill=None, outline=None, width=2):
        self.d.ellipse(self.p(x - r, y - r, x + r, y + r), fill=fill, outline=outline, width=int(width * SS))

    def rect(self, x0, y0, x1, y1, radius=10, fill=None, outline=None, width=2):
        self.d.rounded_rectangle(self.p(x0, y0, x1, y1), radius=radius * SS, fill=fill, outline=outline, width=int(width * SS))

    def panel(self, x0, y0, x1, y1, radius=18):
        self.rect(x0, y0, x1, y1, radius, fill=(12, 22, 52, 225), outline=self.c(.62, 140), width=2)

    def poly(self, pts, fill=None, outline=None):
        self.d.polygon([v * SS for xy in pts for v in xy], fill=fill, outline=outline)

    def text(self, x, y, s, f, fill, anchor='la'):
        self.d.text((x * SS, y * SS), s, font=f, fill=fill, anchor=anchor)

    def check(self, x, y, size, fill, width=3):
        self.line([(x - size * .45, y), (x - size * .1, y + size * .35), (x + size * .5, y - size * .4)], fill, width)

    def sphere(self, x, y, r, glyph=None, fonts=None):
        # a glossy blue sphere: shaded body, rim light and a highlight, with an optional icon
        for k in range(int(r), 0, -1):
            t = k / r
            l = .14 + .42 * (1 - t) ** .8
            self.circle(x - r * .28 * (1 - t), y - r * .32 * (1 - t), k, fill=self.c(l, 255, .85))
        self.circle(x, y, r, outline=self.c(.78, 170), width=2)
        self.d.ellipse(self.p(x - r * .55, y - r * .72, x - r * .05, y - r * .42), fill=(255, 255, 255, 70))
        if glyph:
            self.text(x, y, glyph, fonts['icons'], (255, 255, 255, 245), 'mm')

    def ring(self, x, y, r, width=6):
        # Ringba's neon torus
        self.circle(x, y, r, outline=self.c(.6, 255), width=width)
        self.circle(x, y, r - width * .6, outline=self.c(.85, 200), width=1.5)


def glow(layer, radius):
    g = layer.filter(ImageFilter.GaussianBlur(radius * SS))
    out = Image.new('RGBA', layer.size)
    out.alpha_composite(g)
    out.alpha_composite(g)
    out.alpha_composite(layer)
    return out


def background(hue, seed):
    w, h = W * SS, H * SS
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    top, bottom = np.array([5, 8, 22]), np.array([9, 17, 44])
    img = top * (1 - (yy / h)[..., None]) + bottom * (yy / h)[..., None]
    r, g, b = colorsys.hls_to_rgb(hue / 360, .45, .9)
    glow_ = np.exp(-(((xx - MX * SS) / (.36 * w)) ** 2 + ((yy - MY * SS) / (.6 * h)) ** 2) * 2)[..., None]
    img = img + glow_ * np.array([r, g, b]) * 255 * .34
    canvas = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).convert('RGBA')
    # a perspective grid floor under the illustration, its spacing varied per post
    pen = Pen(hue)
    rng = np.random.default_rng(seed)
    horizon, vx = 470, MX + rng.uniform(-40, 40)
    for k in range(-16, 17):
        a = max(0, 70 - abs(k) * 4)
        pen.line([(vx + k * 6, horizon), (vx + k * 95, H + 10)], pen.c(.6, a), 1)
    step = rng.uniform(.62, .72)
    yv, gap = horizon + 4, 6
    while yv < H:
        pen.line([(MX - 520, yv), (MX + 520, yv)], pen.c(.6, min(90, 20 + (yv - horizon) * .6)), 1)
        gap /= step
        yv += gap
    canvas.alpha_composite(pen.img)
    return canvas


# ---------- the illustrations, one per post ----------

def m_healthcare(p, g, ic):
    # an appointment calendar with booked days, a heartbeat line running across it
    p.panel(735, 150, 1075, 470)
    p.rect(735, 150, 1075, 205, 18, fill=p.c(.45, 230))
    for x in (800, 1010):
        p.rect(x - 7, 136, x + 7, 168, 6, fill=p.c(.85, 255))
    booked = {(0, 1), (1, 3), (2, 0), (2, 2), (3, 4), (1, 1), (3, 1)}
    for r in range(4):
        for c in range(5):
            x, y = 760 + c * 62, 222 + r * 60
            on = (r, c) in booked
            p.rect(x, y, x + 46, y + 44, 9, fill=p.c(.55, 255) if on else (255, 255, 255, 18), outline=None if on else p.c(.6, 60), width=1)
            if on:
                p.check(x + 23, y + 22, 18, (255, 255, 255, 255), 3)
    pts = [(690, 400), (800, 400), (825, 360), (850, 445), (872, 330), (895, 400), (1120, 400)]
    p.line(pts, p.c(.86, 255), 4)


def m_realestate(p, g, ic):
    # a small skyline on the floor, two listings pinned, each pin tied to an incoming call
    blocks = [(745, 330, 55), (805, 270, 60), (870, 350, 50), (925, 230, 70), (1000, 300, 60)]
    for x, top, w in blocks:
        p.rect(x, top, x + w, 470, 6, fill=(14, 26, 62, 240), outline=p.c(.6, 150), width=2)
        for wy in range(top + 18, 455, 26):
            for wx in range(x + 12, x + w - 8, 18):
                p.rect(wx, wy, wx + 8, wy + 10, 2, fill=p.c(.75, 120 if (wx + wy) % 3 else 220))
    for x, y in ((830, 205), (960, 165)):
        p.circle(x, y, 26, fill=p.c(.55, 255))
        p.poly([(x - 20, y + 16), (x + 20, y + 16), (x, y + 52)], fill=p.c(.55, 255))
        p.circle(x, y, 10, fill=(255, 255, 255, 255))
        p.circle(x, y + 52, 14, outline=p.c(.75, 150), width=2)
    p.line([(830, 165), (900, 110), (1050, 110)], p.c(.75, 160), 2)
    p.line([(960, 125), (1050, 110)], p.c(.75, 160), 2)
    p.sphere(1080, 110, 34, ic['phone'], g)


def m_agency(p, g, ic):
    # a stack of screened call records, each one checked, under a quality shield
    for i, (x, y) in enumerate(((740, 170), (770, 250), (800, 330))):
        p.panel(x, y, x + 280, y + 66, 14)
        p.circle(x + 34, y + 33, 17, fill=p.c(.5, 255))
        p.check(x + 34, y + 33, 16, (255, 255, 255, 255), 3)
        p.rect(x + 66, y + 20, x + 220 - i * 24, y + 30, 5, fill=p.c(.8, 170))
        p.rect(x + 66, y + 40, x + 170 - i * 18, y + 48, 4, fill=p.c(.6, 120))
    sx, sy = 1060, 330
    p.poly([(sx, sy - 80), (sx + 66, sy - 52), (sx + 58, sy + 30), (sx, sy + 78), (sx - 58, sy + 30), (sx - 66, sy - 52)], fill=p.c(.45, 245))
    p.check(sx, sy, 56, (255, 255, 255, 255), 7)


def m_leaks(p, g, ic):
    # a funnel taking in calls, with margin dripping out of its sides
    p.poly([(745, 160), (1065, 160), (935, 320), (875, 320)], fill=(14, 26, 62, 235), outline=p.c(.65, 255))
    p.rect(875, 318, 935, 420, 6, fill=(14, 26, 62, 235), outline=p.c(.65, 255), width=2)
    for i in range(14):
        x = 770 + (i * 37) % 280
        p.circle(x, 120 + (i * 23) % 40, 6, fill=p.c(.75, 230))
    for (x, y) in ((820, 235), (990, 235), (905, 418)):
        for k in range(4):
            p.circle(x + (-1) ** k * 6, y + 26 + k * 28, 7 - k, fill=p.c(.62, 240 - k * 45))
    p.d.ellipse(p.p(830, 455, 980, 480), fill=p.c(.5, 150))


def m_attribution(p, g, ic):
    # sources on the left, every path traced into the one call it produced
    target = (1050, 318)
    for i, y in enumerate((170, 250, 330, 410, 470)):
        x = 760 + (i % 2) * 40
        hot = i == 2
        p.line([(x + 22, y), ((x + target[0]) / 2, y), (target[0] - 70, target[1])], p.c(.75 if hot else .55, 255 if hot else 120), 4 if hot else 2)
        p.circle(x, y, 22, fill=p.c(.5 if hot else .35, 255), outline=p.c(.75, 200), width=2)
        p.rect(x - 9, y - 4, x + 9, y + 4, 3, fill=(255, 255, 255, 220 if hot else 120))
    p.sphere(target[0], target[1], 62, ic['phone'], g)


def m_pingpost(p, g, ic):
    # a hub pings the buyers, three bids rise, the tallest one wins
    hx, hy = 800, 330
    for r in (90, 125, 160):
        p.d.arc(p.p(hx - r, hy - r, hx + r, hy + r), -50, 50, fill=p.c(.7, 140), width=3 * SS)
    for i, (h, win) in enumerate(((150, False), (230, True), (110, False))):
        x = 960 + i * 58
        p.rect(x, 470 - h, x + 40, 470, 8, fill=p.c(.62 if win else .32, 255), outline=p.c(.75, 200), width=2)
        if win:
            p.circle(x + 20, 470 - h - 30, 16, fill=(255, 255, 255, 255))
            p.check(x + 20, 470 - h - 30, 16, p.c(.4, 255), 3)
    p.sphere(hx, hy, 66, ic['gavel'], g)


def m_conversions(p, g, ic):
    # a closed loop: the call reports back to the ad platform, which sends better calls
    for (a0, a1) in ((200, 340), (20, 160)):
        p.d.arc(p.p(755, 190, 1055, 450), a0, a1, fill=p.c(.68, 255), width=7 * SS)
    for ang in (340, 160):
        t = math.radians(ang)
        x, y = 905 + 150 * math.cos(t), 320 + 130 * math.sin(t)
        d = 1 if ang == 340 else -1
        p.poly([(x + 18 * d, y), (x - 6 * d, y - 18), (x - 6 * d, y + 18)], fill=p.c(.68, 255))
    p.sphere(755, 320, 46, ic['phone'], g)
    p.panel(1010, 280, 1110, 360, 16)
    for i, h in enumerate((22, 38, 52)):
        p.rect(1030 + i * 24, 345 - h, 1046 + i * 24, 345, 4, fill=p.c(.65, 255))


def m_checklist(p, g, ic):
    # a clipboard checklist: consent, DNC, hours, data, every row ticked
    p.panel(760, 140, 1050, 480, 20)
    p.rect(860, 124, 950, 156, 10, fill=p.c(.5, 255))
    for i in range(4):
        y = 200 + i * 66
        p.rect(790, y, 830, y + 40, 9, fill=p.c(.5, 255))
        p.check(810, y + 20, 22, (255, 255, 255, 255), 4)
        p.rect(850, y + 9, 1010 - (i % 2) * 40, y + 19, 5, fill=p.c(.8, 180))
        p.rect(850, y + 26, 960 - (i % 3) * 20, y + 33, 4, fill=p.c(.6, 110))


def m_spam(p, g, ic):
    # a phone screen: the flagged label struck out, the verified name shown instead
    p.rect(820, 120, 990, 500, 30, fill=(10, 18, 44, 245), outline=p.c(.62, 220), width=3)
    p.rect(880, 136, 930, 146, 5, fill=p.c(.4, 200))
    f1, f2 = g['label'], g['small']
    p.rect(842, 190, 968, 250, 14, fill=(255, 255, 255, 14), outline=p.c(.4, 90), width=1)
    p.text(905, 220, 'Scam Likely', f2, (170, 185, 215, 150), 'mm')
    p.line([(850, 222), (960, 218)], p.c(.75, 230), 3)
    p.rect(842, 280, 968, 360, 14, fill=p.c(.45, 245))
    p.text(905, 306, 'Avortyx', f1, (255, 255, 255, 255), 'mm')
    p.text(905, 336, 'Verified caller', f2, (220, 232, 255, 230), 'mm')
    p.circle(875, 430, 24, fill=p.c(.55, 255))
    p.text(875, 430, ic['phone'], g['icons_sm'], (255, 255, 255, 255), 'mm')
    p.circle(935, 430, 24, fill=(255, 255, 255, 30), outline=p.c(.6, 160), width=2)
    for r in (40, 58):
        p.d.arc(p.p(1000 - r, 300 - r, 1000 + r, 300 + r), -40, 40, fill=p.c(.75, 170), width=3 * SS)


def m_ai(p, g, ic):
    # a voice waveform flowing into an intent gauge that reads high
    for i in range(16):
        x = 730 + i * 12
        h = 14 + 46 * abs(math.sin(i * .9)) * (1 - i / 22)
        p.rect(x, 330 - h, x + 6, 330 + h, 3, fill=p.c(.7, 230))
    cx, cy, r = 990, 360, 105
    p.d.arc(p.p(cx - r, cy - r, cx + r, cy + r), 180, 360, fill=(255, 255, 255, 35), width=18 * SS)
    p.d.arc(p.p(cx - r, cy - r, cx + r, cy + r), 180, 320, fill=p.c(.6, 255), width=18 * SS)
    t = math.radians(320)
    p.line([(cx, cy), (cx + (r - 30) * math.cos(t), cy + (r - 30) * math.sin(t))], (255, 255, 255, 255), 5)
    p.circle(cx, cy, 12, fill=(255, 255, 255, 255))
    p.sphere(cx, cy - 170, 34, ic['brain'], g)


def m_caps(p, g, ic):
    # three buyers' capacity, filling at different rates, each with its cap line
    for i, fill in enumerate((.92, .58, .3)):
        x = 760 + i * 110
        p.rect(x, 170, x + 70, 470, 22, fill=(14, 26, 62, 235), outline=p.c(.62, 200), width=2)
        top = 470 - 300 * fill
        p.rect(x + 6, top, x + 64, 464, 18, fill=p.c(.62 - i * .08, 250))
        for xx in range(x - 10, x + 82, 14):
            p.line([(xx, 200), (xx + 7, 200)], p.c(.85, 230), 2)
    p.sphere(1080, 200, 36, ic['sliders'], g)


def m_queue(p, g, ic):
    # callers waiting in a curved queue, flowing into the buyer who frees up
    pts = [(735 + i * 48, 430 - 30 * math.sin(i * .55)) for i in range(7)]
    p.line(pts + [(1060, 300)], p.c(.55, 140), 2)
    for i, (x, y) in enumerate(pts):
        p.circle(x, y, 10 + i * 2.2, fill=p.c(.4 + i * .06, 255))
    p.ring(1060, 290, 70, 9)
    p.sphere(1060, 290, 44, ic['hourglass-half'], g)


def m_forms(p, g, ic):
    # a submitted web form turning straight into a live call
    p.panel(730, 170, 930, 450, 18)
    for i in range(3):
        y = 205 + i * 58
        p.rect(755, y, 855 + i * 15, y + 10, 5, fill=p.c(.7, 160))
        p.rect(755, y + 18, 905, y + 42, 8, fill=(255, 255, 255, 22), outline=p.c(.55, 120), width=1)
    p.rect(755, 385, 905, 425, 12, fill=p.c(.5, 255))
    for i in range(6):
        p.circle(955 + i * 14, 300 - i * 6, 4, fill=p.c(.8, 120 + i * 22))
    for r in (70, 90):
        p.circle(1060, 280, r, outline=p.c(.65, 150 - (r - 70) * 4), width=2)
    p.sphere(1060, 280, 52, ic['phone'], g)


def m_dialer(p, g, ic):
    # a grid of leads, the dialer lighting the next one as each call ends
    path = [(0, 0), (1, 0), (2, 1), (3, 1), (4, 2)]
    for r in range(4):
        for c in range(5):
            x, y = 750 + c * 62, 190 + r * 62
            on = (c, r) in path
            p.circle(x, y, 14, fill=p.c(.6 if on else .3, 255 if on else 170))
    p.line([(750 + c * 62, 190 + r * 62) for c, r in path], p.c(.8, 230), 3)
    p.sphere(1065, 365, 62, ic['headset'], g)


def m_recordings(p, g, ic):
    # a recording's waveform on a timeline, locked to the people allowed to hear it
    p.panel(725, 205, 1085, 425, 22)
    for i in range(34):
        x = 790 + i * 8.6
        h = 6 + 52 * abs(math.sin(i * .47) * math.cos(i * .13))
        p.rect(x, 315 - h, x + 4, 315 + h, 2, fill=p.c(.72 if i < 21 else .4, 255))
    p.circle(758, 315, 20, fill=p.c(.5, 255))
    p.poly([(752, 304), (752, 326), (768, 315)], fill=(255, 255, 255, 255))
    p.rect(790, 395, 1060, 399, 2, fill=p.c(.4, 200))
    p.rect(790, 395, 970, 399, 2, fill=p.c(.75, 255))
    lx, ly = 1060, 170
    p.d.arc(p.p(lx - 26, ly - 50, lx + 26, ly + 2), 180, 360, fill=p.c(.75, 255), width=7 * SS)
    p.rect(lx - 36, ly - 24, lx + 36, ly + 34, 10, fill=p.c(.5, 255))
    p.circle(lx, ly + 4, 7, fill=(255, 255, 255, 255))


MOTIFS = {
    'call-tracking-for-healthcare-practices': m_healthcare,
    'real-estate-calls-from-listing-to-showing': m_realestate,
    'agency-playbook-proving-call-quality': m_agency,
    'pay-per-call-margin-leaks': m_leaks,
    'what-is-call-attribution': m_attribution,
    'ping-post-explained': m_pingpost,
    'sending-call-conversions-to-ad-platforms': m_conversions,
    'tcpa-dnc-consent-checklist': m_checklist,
    'spam-labels-and-branded-caller-id': m_spam,
    'what-ai-call-scoring-measures': m_ai,
    'buyer-caps-that-dont-strand-calls': m_caps,
    'hold-queues-and-failover': m_queue,
    'web-forms-into-live-calls': m_forms,
    'power-dialer-basics': m_dialer,
    'call-recording-retention-and-access': m_recordings,
}


def wrap(draw, text, f, width):
    lines, cur = [], ''
    for word in text.split():
        trial = (cur + ' ' + word).strip()
        if draw.textlength(trial, font=f) <= width * SS:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    return lines + [cur]


def render(post, fonts, ic, index):
    canvas = background(DEEP_HUE, index + 3)
    pen = Pen(DEEP_HUE)
    MOTIFS[post['slug']](pen, fonts, ic)
    canvas.alpha_composite(glow(pen.img, 9))

    # the title, left: largest size that fits in four lines
    d = ImageDraw.Draw(canvas)
    title = post['title']
    for size in (50, 46, 42, 38):
        tf = fonts['title%d' % size]
        lines = wrap(d, title, tf, 560)
        if len(lines) <= 4:
            break
    y = 132
    for ln in lines:
        d.text((64 * SS, y * SS), ln, font=tf, fill=(236, 243, 255, 255))
        y += size * 1.16
    lab = Pen(DEEP_HUE)
    label = post['category'].upper()
    tw = d.textlength(label, font=fonts['label']) / SS
    lab.rect(48, 58, 64 + tw + 16, 96, 19, fill=(10, 18, 44, 255), outline=lab.c(.68), width=2)
    lab.text(64, 77, label, fonts['label'], lab.c(.82), 'lm')
    lab.rect(64, y + 22, 128, y + 27, 3, fill=lab.c(.6))
    lab.text(64, H - 56, 'AVORTYX BLOG', fonts['mono'], (150, 170, 210, 200), 'lm')
    canvas.alpha_composite(lab.img)
    return canvas.convert('RGB').resize((W, H), Image.LANCZOS)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    codes = icon_codes()
    icon_file = ROOT / 'public/assets/avx-icons/icons.woff2'
    fonts = {
        'icons': ImageFont.truetype(ttf(icon_file), int(40 * SS)),
        'icons_sm': ImageFont.truetype(ttf(icon_file), int(20 * SS)),
        'label': font(600, 16),
        'small': font(500, 14),
        'mono': font(600, 13),
    }
    for size in (50, 46, 42, 38):
        fonts['title%d' % size] = font(600, size)
    ic = {k: codes[k] for k in ('phone', 'gavel', 'brain', 'headset', 'sliders', 'hourglass-half')}
    for i, p in enumerate(posts()):
        img = render(p, fonts, ic, i)
        img.save(OUT / f"{p['slug']}.webp", 'WEBP', quality=86, method=6)
        img.resize((600, 315), Image.LANCZOS).save(OUT / f"{p['slug']}-600.webp", 'WEBP', quality=86, method=6)
        print(p['slug'])


if __name__ == '__main__':
    main()
