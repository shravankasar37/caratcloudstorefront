import json
import re

with open('bundle.js.map', encoding='utf-8') as f:
    data = json.load(f)

src_map = dict(zip(data.get('sources', []), data.get('sourcesContent', [])))
orig_css = src_map.get('/app/frontend/src/index.css', '')

# In webpack css-loader, it does:
# ___CSS_LOADER_EXPORT___.push([module.id, ...])
# Let's extract every push argument.

# Find all occurrences of ___CSS_LOADER_EXPORT___.push([module.id, ...]);
chunks = []
pos = 0
needle = "___CSS_LOADER_EXPORT___.push([module.id,"
while True:
    idx = orig_css.find(needle, pos)
    if idx == -1:
        break
    start = idx + len(needle)
    # Find the matching closing bracket or end of statement
    # Usually it's either "..." or `...`
    # Let's see what character comes next:
    sub = orig_css[start:].lstrip()
    if sub.startswith('"'):
        end_q = sub.find('"', 1)
        # handle escaped quotes if any
        while sub[end_q-1] == '\\':
            end_q = sub.find('"', end_q + 1)
        chunk_str = sub[1:end_q].encode('utf-8').decode('unicode_escape')
        chunks.append(chunk_str)
        pos = start + end_q
    elif sub.startswith('`'):
        end_bt = sub.find('`', 1)
        while sub[end_bt-1] == '\\':
            end_bt = sub.find('`', end_bt + 1)
        chunk_str = sub[1:end_bt]
        chunks.append(chunk_str)
        pos = start + end_bt
    else:
        pos = start + 1

print(f"Total chunks found: {len(chunks)}")
full_css = "\n\n".join(chunks)
print(f"Combined CSS length: {len(full_css)}")
print(f"Has paper: {'paper' in full_css}")
print(f"Has navy: {'navy' in full_css}")
print(f"Has hairline-grid: {'hairline-grid' in full_css}")

with open('src/index.css', 'w', encoding='utf-8') as out:
    out.write(full_css)

print("Saved clean src/index.css successfully!")
