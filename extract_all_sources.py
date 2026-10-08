import json
import os

with open('bundle.js.map', encoding='utf-8') as f:
    data = json.load(f)

src_map = dict(zip(data.get('sources', []), data.get('sourcesContent', [])))

extracted_count = 0
for filepath, content in src_map.items():
    if not filepath.startswith('/app/frontend/src/') or not content:
        continue
    
    # Map to relative path
    rel_path = filepath.replace('/app/frontend/', '')
    os.makedirs(os.path.dirname(rel_path), exist_ok=True)
    with open(rel_path, 'w', encoding='utf-8') as out:
        out.write(content)
    extracted_count += 1
    print(f"Extracted: {rel_path}")

print(f"\nTotal extracted source files: {extracted_count}")
