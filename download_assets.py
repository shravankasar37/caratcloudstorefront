import urllib.request
import os

base_url = "https://cloud-jewel.preview.emergentagent.com/"

files_to_download = [
    "favicon.svg",
    "favicon.ico",
    "manifest.json",
    "img/necklace.jpg",
    "img/earrings.jpg",
    "img/tower.jpg",
    "img/apartment.jpg",
    "img/reel.jpg",
    "img/towers.jpg",
    "img/jewellery-set.jpg"
]

os.makedirs("public/img", exist_ok=True)

for path in files_to_download:
    url = base_url + path
    local_path = os.path.join("public", path)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            with open(local_path, "wb") as f:
                f.write(content)
            print(f"Downloaded: {path} ({len(content)} bytes)")
    except Exception as e:
        print(f"Failed {path}: {e}")
