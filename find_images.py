import json
import re

with open('bundle.js.map', encoding='utf-8') as f:
    data = json.load(f)

src_map = dict(zip(data.get('sources', []), data.get('sourcesContent', [])))

print("Finding images across all source files:")
for s, content in src_map.items():
    if not content or not s.startswith('/app/frontend/src/'):
        continue
    matches = re.findall(r'(\b[\w\./\-]+\.(?:jpg|jpeg|png|webp|svg|gif)\b)', content, re.IGNORECASE)
    if matches:
        print(f"\n{s}:")
        for m in set(matches):
            print(f"  - {m}")
