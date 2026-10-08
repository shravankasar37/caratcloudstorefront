import json
import re

with open('bundle.js.map', encoding='utf-8') as f:
    data = json.load(f)

src_map = dict(zip(data.get('sources', []), data.get('sourcesContent', [])))

print("=== APP SRC FILES ===")
for s in sorted(src_map.keys()):
    if s.startswith('/app/frontend/src/'):
        print(s)

print("\n=== EXTRACTED IMAGE / ASSET URLS ===")
urls = set()
for s, c in src_map.items():
    if c and '/app/frontend/src/' in s:
        for m in re.findall(r'https?://[^\s\"\'\`\)]+', c):
            urls.add(m)

for u in sorted(urls):
    print(u)
