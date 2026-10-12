#!/usr/bin/env python3
"""Render a cover image for every blog post into public/assets/avx-blog/.

Each cover is a 3D scene in the site's style: a perspective sea of light points rolling toward
the viewer, and a glossy sphere in the post's hue with its topic icon, a tilted orbit and a glow.
Writes <slug>.webp (1200x630, also the share image) and <slug>-600.webp (card thumbnail).

Needs: pip install pillow numpy fonttools brotli
Run:   python3 scripts/build-blog-covers.py   (after adding a post to src/blog/posts.js)
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


def posts():
    # read the post list straight from the JS module with node
    code = "import('%s').then(m=>console.log(JSON.stringify(m.POSTS.map(p=>({slug:p.slug,icon:p.icon,hue:p.hue,category:p.category})))))" % (ROOT / 'src/blog/posts.js').as_uri()
    return json.loads(subprocess.check_output(['node', '-e', code], text=True))


def ttf(woff2):
    f = TTFont(woff2)
    f.flavor = None
    buf = io.BytesIO()
    f.save(buf)
    buf.seek(0)
    return buf


def icon_codes():
    css = (ROOT / 'public/assets/avx-icons/icons.css').read_text()
    return {m.group(1): chr(int(m.group(2), 16)) for m in re.finditer(r'\.fa-([a-z0-9-]+)\{--fa:"\\([0-9a-f]+)"\}', css)}


def hsl(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h / 360, l, s)
    return np.array([r, g, b]) * 255


def render(post, icon_font, label_font, glyph):
    w, h = W * SS, H * SS
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    # background: deep navy, a soft glow behind the sphere
    top, bottom = np.array([6, 9, 22]), np.array([10, 18, 42])
    t = (yy / h)[..., None]
    img = top * (1 - t) + bottom * t
    cx, cy, r = 0.7 * w, 0.42 * h, 0.21 * h
    glow = np.exp(-(((xx - cx) / (0.42 * w)) ** 2 + ((yy - cy) / (0.62 * h)) ** 2) * 2.2)[..., None]
    img = img + glow * hsl(post['hue'], .9, .45) * .32

    # the sea: points in perspective, brighter on the crests, fading to every edge
    canvas = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    d = ImageDraw.Draw(canvas, 'RGBA')
    cols, rows = 120, 34
    horizon, near = 0.5 * h, 1.08 * h
    rng = np.random.default_rng(len(post['slug']))
    phase = rng.uniform(0, 6)
    for rr in range(rows):
        dd = rr / (rows - 1)
        depth = .3 + .7 * dd
        for c in range(cols):
            u = c / (cols - 1) - .5
            wave = math.sin(u * 7 + phase + dd * 3.2) * .55 + math.sin(u * 3.1 - phase * .7 + dd * 5.1) * .45
            x = w / 2 + u * w * (.75 + 1.0 * dd)
            y = horizon + (near - horizon) * dd ** 1.35 - wave * h * .05 * depth
            side = max(0, 1 - (abs(u) * 2) ** 2.4)
            a = side * dd ** .9 * min(1, (1 - dd) * 6 + .2)
            if a < .03:
                continue
            lit = .4 + .6 * max(0, wave)
            col = hsl(post['hue'], .9, .55 + .25 * lit)
            s = (1.2 + 3.2 * depth) * SS / 2
            d.ellipse([x - s, y - s, x + s, y + s], fill=(*col.astype(int), int(255 * min(1, a * 1.1 * lit))))

    # shadow of the sphere on the sea
    sh = Image.new('L', (w, h), 0)
    ImageDraw.Draw(sh).ellipse([cx - r * 1.1, cy + r * 1.25, cx + r * 1.1, cy + r * 1.55], fill=150)
    sh = sh.filter(ImageFilter.GaussianBlur(18 * SS))
    canvas = Image.composite(Image.new('RGB', (w, h), (2, 4, 12)), canvas, sh)

    # orbit behind the sphere
    ring = Image.new('RGBA', (w, h))
    rd = ImageDraw.Draw(ring)
    box = [cx - r * 1.75, cy - r * .42, cx + r * 1.75, cy + r * .42]
    rd.ellipse(box, outline=(*hsl(post['hue'], .9, .78).astype(int), 120), width=2 * SS)
    ring = ring.rotate(-14, center=(cx, cy), resample=Image.BICUBIC)
    canvas.paste(ring, (0, 0), ring)

    # the sphere: lit from the top left, darker rim, a specular highlight, inner reflected light
    dx, dy = (xx - cx) / r, (yy - cy) / r
    rr2 = dx ** 2 + dy ** 2
    inside = rr2 <= 1
    nz = np.sqrt(np.clip(1 - rr2, 0, 1))
    light = np.array([-.45, -.55, .7])
    light = light / np.linalg.norm(light)
    lam = np.clip(dx * light[0] + dy * light[1] + nz * light[2], 0, 1)
    base = hsl(post['hue'], .85, .5)
    dark = hsl(post['hue'], .8, .16)
    col = dark + (base - dark) * lam[..., None] ** .9
    spec = np.clip(dx * light[0] + dy * light[1] + nz * light[2], 0, 1) ** 40
    col = col + spec[..., None] * 255 * .75
    rim = np.clip((rr2 - .72) / .28, 0, 1) * np.clip(dy + .4, 0, 1)
    col = col + rim[..., None] * hsl(post['hue'], .9, .75) * .35
    arr = np.asarray(canvas).astype(np.float32)
    edge = np.clip((1 - rr2) * r / (1.5 * SS), 0, 1)[..., None]
    arr = arr * (1 - edge) + np.clip(col, 0, 255) * edge
    canvas = Image.fromarray(arr.astype(np.uint8))

    # the front half of the orbit and its satellite
    front = Image.new('RGBA', (w, h))
    fd = ImageDraw.Draw(front)
    fd.arc(box, 0, 180, fill=(*hsl(post['hue'], .9, .82).astype(int), 200), width=3 * SS)
    sx, sy = cx + r * 1.75 * math.cos(math.radians(40)), cy + r * .42 * math.sin(math.radians(40))
    fd.ellipse([sx - 9 * SS, sy - 9 * SS, sx + 9 * SS, sy + 9 * SS], fill=(230, 240, 255, 255))
    front = front.rotate(-14, center=(cx, cy), resample=Image.BICUBIC)
    halo = front.filter(ImageFilter.GaussianBlur(6 * SS))
    canvas.paste(halo, (0, 0), halo)
    canvas.paste(front, (0, 0), front)

    # the icon on the sphere
    g = Image.new('RGBA', (w, h))
    gd = ImageDraw.Draw(g)
    gd.text((cx, cy), glyph, font=icon_font, fill=(255, 255, 255, 245), anchor='mm')
    gs = g.filter(ImageFilter.GaussianBlur(5 * SS))
    canvas.paste((0, 0, 0), (0, 0), gs.getchannel('A').point(lambda v: v * .35))
    canvas.paste(g, (0, 0), g)

    # category label, top left
    ld = ImageDraw.Draw(canvas)
    label = post['category'].upper()
    tx, ty = 64 * SS, 58 * SS
    tw = ld.textlength(label, font=label_font)
    ld.rounded_rectangle([tx - 16 * SS, ty - 12 * SS, tx + tw + 16 * SS, ty + 34 * SS], radius=22 * SS, outline=tuple(hsl(post['hue'], .9, .7).astype(int)), width=2 * SS, fill=(10, 18, 40))
    ld.text((tx, ty), label, font=label_font, fill=tuple(hsl(post['hue'], .9, .82).astype(int)))

    return canvas.resize((W, H), Image.LANCZOS)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    codes = icon_codes()
    icon_font = ImageFont.truetype(ttf(ROOT / 'public/assets/avx-icons/icons.woff2'), int(110 * SS))
    label_font = ImageFont.truetype(ttf(ROOT / 'public/assets/avx-fonts/inter-latin.woff2'), int(20 * SS))
    label_font.set_variation_by_axes([24, 650])
    for p in posts():
        img = render(p, icon_font, label_font, codes[p['icon'].replace('fa-', '')])
        img.save(OUT / f"{p['slug']}.webp", 'WEBP', quality=84, method=6)
        img.resize((600, 315), Image.LANCZOS).save(OUT / f"{p['slug']}-600.webp", 'WEBP', quality=84, method=6)
        print(p['slug'])


if __name__ == '__main__':
    main()
