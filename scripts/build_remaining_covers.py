import io, os, math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import urllib.request

ROOT = Path('/home/KP/work/trackdrive.net-clone-1/trackdrive.net-clone')
SCRATCH = Path('/home/KP/.gemini/antigravity-ide/brain/a8786072-0a6d-41c4-b575-0675250fddb9/scratch')
OUT = ROOT / 'public/assets/avx-blog'
OUT.mkdir(parents=True, exist_ok=True)
SCRATCH.mkdir(parents=True, exist_ok=True)

LOGO_PATH = ROOT / 'public/assets/brand/avortyx-horizontal-white.png'
BOLD_FONT_PATH = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
REG_FONT_PATH = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

def get_bold_font(size):
    return ImageFont.truetype(BOLD_FONT_PATH, size)

def get_reg_font(size):
    return ImageFont.truetype(REG_FONT_PATH, size)

def download_if_missing(url, dest):
    if not dest.exists():
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
                f.write(resp.read())
            print(f"Downloaded {dest.name}")
        except Exception as e:
            print(f"Error fetching {url}: {e}")

# Ensure source backdrops exist
download_if_missing('https://callatlas.io/blog/healthcare-call-tracking-measure-marketing-roi.webp', SCRATCH / 'atlas_healthcare.webp')
download_if_missing('https://callatlas.io/blog/real-estate-call-tracking-track-every-lead.webp', SCRATCH / 'atlas_realestate.webp')
download_if_missing('https://callatlas.io/blog/marketing-agency-call-tracking-success-story.webp', SCRATCH / 'atlas_agency.webp')
download_if_missing('https://callatlas.io/blog/call-routing-lead-response-conversion.webp', SCRATCH / 'atlas_routing.webp')
download_if_missing('https://callatlas.io/blog/pay-per-call-tracking.webp', SCRATCH / 'atlas_ppc.webp')
download_if_missing('https://callatlas.io/blog/marketing-performance-metrics.webp', SCRATCH / 'atlas_metrics.webp')

COVERS = [
    {
        'slug': 'hold-queues-and-failover',
        'source': SCRATCH / 'atlas_routing.webp',
        'title_cyan': 'HOLD QUEUES\n& FAILOVER:',
        'subtitle': 'Never Lose a Qualified Caller\nto an Unanswered or Busy Line'
    },
    {
        'slug': 'web-forms-into-live-calls',
        'source': SCRATCH / 'atlas_realestate.webp',
        'title_cyan': 'FROM WEB FORMS\nTO LIVE CALLS:',
        'subtitle': 'Speed-to-Lead Workflows That Bridge\nInbound Leads in Under 60 Seconds'
    },
    {
        'slug': 'power-dialer-basics',
        'source': SCRATCH / 'atlas_agency.webp',
        'title_cyan': 'POWER DIALER\nMASTERY:',
        'subtitle': 'Double Agent Talk-Time and Skip\nVoicemail with Automated Sequences'
    },
    {
        'slug': 'call-recording-retention-and-access',
        'source': SCRATCH / 'atlas_metrics.webp',
        'title_cyan': 'CALL RECORDINGS\n& AUDIT TRAILS:',
        'subtitle': 'Retention Rules, Role-Based Access\nand PII Redaction Done Right'
    },
    {
        'slug': 'healthcare-call-tracking-measure-marketing-roi',
        'source': SCRATCH / 'atlas_healthcare.webp',
        'title_cyan': 'FROM AD CLICKS\nTO PATIENT CALLS:',
        'subtitle': 'How Healthcare Businesses Use Call\nTracking to Measure True Marketing ROI'
    },
    {
        'slug': 'real-estate-call-tracking-track-every-lead',
        'source': SCRATCH / 'atlas_realestate.webp',
        'title_cyan': 'FROM PROPERTY ADS\nTO PHONE CALLS:',
        'subtitle': 'How Real Estate Agencies Track Every\nInbound Caller from Campaign to Close'
    },
    {
        'slug': 'marketing-agency-call-tracking-success-story',
        'source': SCRATCH / 'atlas_agency.webp',
        'title_cyan': 'FROM CAMPAIGNS\nTO CONVERSIONS:',
        'subtitle': 'A Performance Agency Case Study on\nScaling Inbound Calls and Margins'
    }
]

logo_img = Image.open(LOGO_PATH).convert('RGBA')

W, H = 1920, 1080

for item in COVERS:
    src_file = item['source']
    if not src_file.exists():
        print(f"Skipping {item['slug']}, missing {src_file}")
        continue
    
    base = Image.open(src_file).convert('RGBA').resize((W, H), Image.Resampling.LANCZOS)
    
    # Smooth dark gradient mask on left half
    gradient = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d_grad = ImageDraw.Draw(gradient)
    
    left_w = int(W * 0.52)
    fade_w = int(W * 0.16)
    for x in range(left_w + fade_w):
        if x < left_w:
            alpha = 255
        else:
            t = (x - left_w) / fade_w
            alpha = int(255 * (1 - t * t))
        d_grad.line([(x, 0), (x, H)], fill=(7, 10, 24, alpha))
    
    composed = Image.alpha_composite(base, gradient)
    draw = ImageDraw.Draw(composed)
    
    # Top-Left Logo
    lw = 320
    lh = int(logo_img.height * (lw / logo_img.width))
    logo_resized = logo_img.resize((lw, lh), Image.Resampling.LANCZOS)
    composed.paste(logo_resized, (90, 80), logo_resized)
    
    tag_font = get_reg_font(26)
    draw.text((90, 80 + lh + 14), "Call Tracking & Lead Automation", fill=(148, 163, 184, 255), font=tag_font)
    
    # Cyan all-caps headline
    title_font = get_bold_font(70)
    subtitle_font = get_reg_font(38)
    
    y_pos = 360
    draw.text((90, y_pos), item['title_cyan'], fill=(0, 230, 210, 255), font=title_font, spacing=16)
    
    lines = item['title_cyan'].split('\n')
    y_pos += len(lines) * 88 + 24
    
    # Accent cyan line
    draw.line([(90, y_pos), (310, y_pos)], fill=(0, 230, 210, 255), width=6)
    y_pos += 42
    
    # White subtitle
    draw.text((90, y_pos), item['subtitle'], fill=(255, 255, 255, 240), font=subtitle_font, spacing=14)
    
    final_rgb = composed.convert('RGB')
    
    # 1200x630 standard WebP
    img_1200 = final_rgb.resize((1200, 630), Image.Resampling.LANCZOS)
    img_1200.save(OUT / f"{item['slug']}.webp", 'WEBP', quality=92, method=6)
    
    # 600x315 thumbnail
    img_600 = final_rgb.resize((600, 315), Image.Resampling.LANCZOS)
    img_600.save(OUT / f"{item['slug']}-600.webp", 'WEBP', quality=90, method=6)
    
    print(f"Generated complete cover: {item['slug']}.webp")
