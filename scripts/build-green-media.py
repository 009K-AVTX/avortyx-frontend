#!/usr/bin/env python3
"""Make green copies of the landing page's blue pictures and hero film in public/assets/avx-green/.

The home page is green (scripts/green.js): its stylesheets and scripts snap every blue to the
matching pwa.group colour. Pictures can't snap pixel by pixel without banding, so here the same
idea runs smoothly: blue pixels turn pwa.group's green hue (#74EB59 / #37C61C / #2B9E12, hue 109)
with lightness matched the same way, greyish blues turn neutral, every other colour is untouched.
It is baked into one 3D colour table, used for the pictures (Pillow) and the film (ffmpeg lut3d).
Each copy keeps its path under assets/, so scripts/green.js finds it and points the home page at it.

Needs: pip install pillow numpy imageio-ffmpeg
Run:   python3 scripts/build-green-media.py   (again after changing one of the SOURCES)
"""
import os, re, subprocess, tempfile
import numpy as np
from PIL import Image, ImageFilter
import imageio_ffmpeg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, 'public/assets')
OUT = os.path.join(ASSETS, 'avx-green')

# the blue pictures and film the home page shows (photos and the AI are tinted by CSS, already green)
SOURCES = ['avx-site/video/hero-blue-poster.webp', 'avx-site/video/hero-blue-480.mp4', 'avx-site/video/hero-blue-720.mp4',
           'avx-ringba/icon-sphere--blue.webp', 'avx-site/img/constellation-light.svg',
           'favicon.svg']  # the mark in the ask demo's avatar (the tab icon itself stays as it is)
# every blog card cover: the home page shows the newest three
SOURCES += sorted('avx-blog/' + f for f in os.listdir(os.path.join(ASSETS, 'avx-blog')) if f.endswith('-600.webp'))

GREEN_HUE, GREEN_SAT = 109, 0.79
# Tailwind blue's lightness -> pwa.group green's (the table in scripts/green.js)
L_MAP = np.array([[0, 0], [0.21, 0.10], [0.33, 0.20], [0.40, 0.23], [0.48, 0.27], [0.53, 0.35], [0.60, 0.44],
                  [0.68, 0.64], [0.78, 0.80], [0.93, 0.89], [0.97, 0.95], [1, 1]])


def smooth(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


def green(rgb):
    """rgb: (..., 3) floats 0..1 -> the green version"""
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    mx, mn = rgb.max(-1), rgb.min(-1)
    c, l = mx - mn, (mx + mn) / 2
    safe = np.where(c == 0, 1, c)
    h = np.where(mx == r, ((g - b) / safe) % 6, np.where(mx == g, (b - r) / safe + 2, (r - g) / safe + 4)) * 60 % 360
    s = np.where(c == 0, 0, c / np.maximum(1e-6, 1 - np.abs(2 * l - 1)))
    w = np.where(c == 0, 0, smooth(165, 188, h) * (1 - smooth(262, 285, h)))
    vivid = smooth(0.06, 0.2, c)
    nh = (GREEN_HUE + (h - 220) * 0.15) % 360
    ns = np.minimum(s, GREEN_SAT) * vivid
    nl = l + (np.interp(l, L_MAP[:, 0], L_MAP[:, 1]) - l) * vivid
    # hsl -> rgb
    cc = (1 - np.abs(2 * nl - 1)) * ns
    x = cc * (1 - np.abs((nh / 60) % 2 - 1))
    m = nl - cc / 2
    seg = (nh // 60).astype(int)
    z = np.zeros_like(cc)
    parts = [(cc, x, z), (x, cc, z), (z, cc, x), (z, x, cc), (x, z, cc), (cc, z, x)]
    out = np.zeros_like(rgb)
    for i, (a, bb, d) in enumerate(parts):
        k = seg == i
        out[..., 0][k], out[..., 1][k], out[..., 2][k] = a[k], bb[k], d[k]
    out = out + m[..., None]
    return np.clip(rgb + (out - rgb) * w[..., None], 0, 1)


N = 33
grid = np.linspace(0, 1, N)
# the table, red fastest (the order of both Pillow's Color3DLUT and the .cube format)
bb, gg, rr = np.meshgrid(grid, grid, grid, indexing='ij')
TABLE = green(np.stack([rr, gg, bb], -1).reshape(-1, 3))


# scripts/green.js greenRgb: a blue becomes the pwa.group green (or neutral) of matching lightness
GREENS = ['EEFDE8', 'D7FACD', 'B1F6A0', '74EB59', '37C61C', '2B9E12', '1F7813', '1E5F15', '1C5116', '0B2D06', '051A03']
NEUTRALS = ['F6F6F6', 'E7E7E7', 'D1D1D1', 'B0B0B0', '888888', '6D6D6D', '5D5D5D', '4F4F4F', '454545', '3D3D3D',
            '232323', '1F1F1F', '1B1B1B', '171717', '131313', '0C0C0C']


def snap(h):
    rgb = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    mx, mn = max(rgb), min(rgb)
    c, l = mx - mn, (mx + mn) / 2
    if not c:
        return h
    r, g, b = rgb
    hue = (((g - b) / c) % 6 if mx == r else (b - r) / c + 2 if mx == g else (r - g) / c + 4) * 60 % 360
    if hue < 176 or hue > 274:
        return h
    light = lambda x: (max(int(x[i:i + 2], 16) for i in (0, 2, 4)) + min(int(x[i:i + 2], 16) for i in (0, 2, 4))) / 510
    if c >= 0.17:
        return min(GREENS, key=lambda x: abs(light(x) - np.interp(l, L_MAP[:, 0], L_MAP[:, 1])))
    return min(NEUTRALS, key=lambda x: abs(light(x) - l))


def out_path(src):
    p = os.path.join(OUT, src)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    return p


def picture(src):
    im = Image.open(os.path.join(ASSETS, src))
    alpha = im.getchannel('A') if im.mode == 'RGBA' else None
    rgb = im.convert('RGB').filter(ImageFilter.Color3DLUT(N, TABLE.flatten().tolist()))
    if alpha:
        rgb.putalpha(alpha)
    rgb.save(out_path(src), quality=88, method=6)


def svg(src):
    path = os.path.join(ASSETS, src)
    text = open(path if os.path.exists(path) else os.path.join(ROOT, 'public', src)).read()

    # SVG colours are flat, so they snap to pwa.group's exact codes like the stylesheets do
    def hexmap(m):
        h = m.group(2)
        h = ''.join(ch * 2 for ch in h) if len(h) == 3 else h
        return m.group(1) + snap(h).lower()
    text = re.sub(r'(#)([0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?![0-9a-fA-F\w])', hexmap, text)
    open(out_path(src), 'w').write(text)


def film(src):
    with tempfile.NamedTemporaryFile('w', suffix='.cube', delete=False) as f:
        f.write(f'LUT_3D_SIZE {N}\n' + '\n'.join('%.6f %.6f %.6f' % tuple(v) for v in TABLE) + '\n')
    subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-loglevel', 'error', '-i', os.path.join(ASSETS, src),
                    '-vf', f'lut3d={f.name}:interp=tetrahedral', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27',
                    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out_path(src)], check=True)
    os.unlink(f.name)


for src in SOURCES:
    {'.mp4': film, '.svg': svg}.get(os.path.splitext(src)[1], picture)(src)
    print(src, round(os.path.getsize(os.path.join(OUT, src)) / 1024), 'KB')
