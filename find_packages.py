import json
import re

with open('bundle.js.map', encoding='utf-8') as f:
    data = json.load(f)

src_map = dict(zip(data.get('sources', []), data.get('sourcesContent', [])))

pkgs = set()
for s, c in src_map.items():
    if c and '/app/frontend/src/' in s:
        for m in re.findall(r'from\s+[\'\"]([^\.\/][^\'\"]*)[\'\"]', c):
            p = m.split('/')[0] if not m.startswith('@') else '/'.join(m.split('/')[:2])
            pkgs.add(p)

print("Identified npm packages:")
for p in sorted(pkgs):
    print(" -", p)
