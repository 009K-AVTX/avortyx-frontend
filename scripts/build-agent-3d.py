#!/usr/bin/env python3
"""Builds the AI-core voice agent's 3D assets from scripts/art/avx-agent-src-hd.jpg.

avx-agent-src-hd.jpg is avx-agent-src.png (678x452) upscaled 4x with Real-ESRGAN x4plus.
The android is cut out of its smooth background (modelled from the border pixels), and a depth
map is made from her silhouette: a rounded "pillow" that motion.js uses to push a WebGL mesh
toward the viewer, so the picture turns in real 3D. Both textures are power-of-two squares so
WebGL can mipmap them; motion.js restores the bust's aspect ratio (CROP below).
Writes public/assets/avx-site/img/avx-agent.webp (color + alpha) and avx-agent-depth.webp.

Needs: pip install numpy scipy pillow
Run:   python3 scripts/build-agent-3d.py
"""
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage as nd

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'scripts/art/avx-agent-src-hd.jpg'
OUT = ROOT / 'public/assets/avx-site/img'
BASE_W = 678                # tunings below are in pixels of the original 678px-wide picture
CROP = (120, 0, 540, 452)   # x0, y0, x1, y1: the bust, with room to turn (aspect 420:452)
COLOR_SIZE, DEPTH_SIZE = 1024, 256


def cut_out(a, k):
    h, w, _ = a.shape
    yy, xx = np.mgrid[0:h, 0:w]
    band = np.zeros((h, w), bool)
    band[:int(24 * k), :] = True
    band[:, :int(50 * k)] = True
    band[:, w - int(150 * k):] = True
    band[h - int(20 * k):, :int(120 * k)] = True
    band[h - int(20 * k):, w - int(250 * k):] = True
    # the background is a smooth gradient: fit a quadratic per channel to the border band
    u, v = xx / w, yy / h
    terms = lambda u, v: np.stack([np.ones_like(u), u, v, u * u, v * v, u * v], -1)
    bg = np.zeros_like(a)
    for c in range(3):
        coef, *_ = np.linalg.lstsq(terms(u[band], v[band]), a[..., c][band], rcond=None)
        bg[..., c] = terms(u, v) @ coef
    m = np.sqrt(((a - bg) ** 2).sum(-1)) > 20  # 20 keeps the glass rim, drops its glow
    m = nd.binary_fill_holes(nd.binary_closing(m, iterations=int(3 * k)))
    lab, n = nd.label(m)
    m = lab == (np.argmax(nd.sum(m, lab, range(1, n + 1))) + 1)
    m = nd.binary_fill_holes(nd.binary_opening(m, iterations=int(k)))
    # round off small jaggies in the outline
    m = nd.gaussian_filter(m.astype(np.float64), 2 * k) > 0.5
    return m, bg


def matte(a, m, bg, k):
    """Clean edges: colors from just inside her, alpha solved against the background.

    Edge pixels in the source are part background, which showed as a grey rim on the violet
    stage. Each pixel near the outline takes the color F of the nearest clean pixel inside, and
    its alpha is how far it sits from the background B toward F: alpha = (C-B)·(F-B) / |F-B|².
    """
    core = nd.binary_erosion(m, iterations=int(3 * k))
    ring = nd.binary_dilation(m, iterations=int(k)) & ~core
    _, (iy, ix) = nd.distance_transform_edt(~core, return_indices=True)
    fg = a[iy, ix]
    d = fg - bg
    dd = (d * d).sum(-1)
    est = np.clip(((a - bg) * d).sum(-1) / np.maximum(dd, 1e-6), 0, 1)
    # tucked in a little: where she nears the background's color, the old edge is mostly haze
    soft = nd.gaussian_filter(nd.binary_erosion(m, iterations=int(2 * k)).astype(np.float64), 1.2 * k)
    # where she is nearly the background's color (dark cables) the solve is unstable: use the soft mask
    trust = np.clip((np.sqrt(dd) - 20) / 30, 0, 1)
    alpha = np.where(core, 1.0, np.where(ring, est * trust + soft * (1 - trust), 0.0))
    alpha = np.minimum(alpha, nd.gaussian_filter(ring | core, 0.5 * k) * 1.2)
    alpha = nd.gaussian_filter(alpha, 0.8 * k)
    color = np.where(core[..., None], a, fg)
    return color, alpha


def main():
    a = np.asarray(Image.open(SRC).convert('RGB')).astype(np.float64)
    k = a.shape[1] / BASE_W
    m, bg = cut_out(a, k)
    x0, y0, x1, y1 = (int(round(c * k)) for c in CROP)
    a, m, bg = a[y0:y1, x0:x1], m[y0:y1, x0:x1], bg[y0:y1, x0:x1]
    h = m.shape[0]
    a, alpha = matte(a, m, bg, k)
    alpha *= np.clip((h - 1 - np.arange(h)) / (40.0 * k), 0, 1)[:, None]  # fade out the cut at the bottom
    rgba = np.dstack([a, alpha * 255]).clip(0, 255).astype(np.uint8)
    color = Image.fromarray(rgba, 'RGBA').resize((COLOR_SIZE, COLOR_SIZE), Image.LANCZOS)
    color.save(OUT / 'avx-agent.webp', 'WEBP', quality=88, method=6)
    # depth, worked out at the original scale: distance to the silhouette, rounded like a
    # sphere's edge, then smoothed
    small = np.asarray(Image.fromarray((m * 255).astype(np.uint8)).resize((CROP[2] - CROP[0], CROP[3] - CROP[1]), Image.BILINEAR)) > 127
    dt = nd.distance_transform_edt(nd.gaussian_filter(small.astype(float), 3) > 0.5)
    t = np.clip(dt / 120.0, 0, 1)
    depth = nd.gaussian_filter(np.sqrt(1 - (1 - t) ** 2), 5)
    Image.fromarray((depth * 255).astype(np.uint8), 'L').resize((DEPTH_SIZE, DEPTH_SIZE), Image.BILINEAR) \
        .save(OUT / 'avx-agent-depth.webp', 'WEBP', quality=92, method=6)
    print('wrote', OUT / 'avx-agent.webp', OUT / 'avx-agent-depth.webp')


if __name__ == '__main__':
    main()
