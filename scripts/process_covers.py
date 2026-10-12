import os, shutil
from PIL import Image

src_dir = '/home/KP/.gemini/antigravity-ide/brain/a8786072-0a6d-41c4-b575-0675250fddb9'
target_dir = '/home/KP/work/trackdrive.net-clone-1/trackdrive.net-clone/public/assets/avx-blog'
backup_dir = os.path.join(target_dir, 'backup')
os.makedirs(backup_dir, exist_ok=True)

mapping = {
    'sending-call-conversions-to-ad-platforms': 'avx_ad_conversions_1791833890420.jpg',
    'tcpa-dnc-consent-checklist': 'avx_tcpa_checklist_1791833940795.jpg',
    'spam-labels-and-branded-caller-id': 'avx_branded_callerid_1791833994402.jpg',
    'buyer-caps-that-dont-strand-calls': 'avx_buyer_caps_1791834768527.jpg',
}

for slug, img_name in mapping.items():
    img_path = os.path.join(src_dir, img_name)
    if not os.path.exists(img_path):
        print(f'Missing: {img_path}')
        continue
    
    orig_webp = os.path.join(target_dir, f'{slug}.webp')
    orig_600 = os.path.join(target_dir, f'{slug}-600.webp')
    
    if os.path.exists(orig_webp) and not os.path.exists(os.path.join(backup_dir, f'{slug}.webp')):
        shutil.copy2(orig_webp, os.path.join(backup_dir, f'{slug}.webp'))
    if os.path.exists(orig_600) and not os.path.exists(os.path.join(backup_dir, f'{slug}-600.webp')):
        shutil.copy2(orig_600, os.path.join(backup_dir, f'{slug}-600.webp'))
        
    im = Image.open(img_path).convert('RGB')
    im_1200 = im.resize((1200, 630), Image.Resampling.LANCZOS)
    im_600 = im.resize((600, 315), Image.Resampling.LANCZOS)
    
    im_1200.save(orig_webp, 'WEBP', quality=90, method=6)
    im_600.save(orig_600, 'WEBP', quality=90, method=6)
    print(f'Successfully updated: {slug}.webp and {slug}-600.webp')
