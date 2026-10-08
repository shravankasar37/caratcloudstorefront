import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract @import lines
imports = []
for line in content.splitlines():
    if '@import' in line and '___CSS_LOADER_EXPORT___' in line:
        m = re.search(r'(@import url\([^)]+\);)', line)
        if m:
            imports.append(m.group(1))

# Extract backtick template string
start_idx = content.find('`')
end_idx = content.rfind('`')

if start_idx != -1 and end_idx != -1 and start_idx < end_idx:
    css_body = content[start_idx+1:end_idx]
    clean_css = '\n'.join(imports) + '\n\n' + css_body
    with open('src/index.css', 'w', encoding='utf-8') as f:
        f.write(clean_css)
    print('Clean CSS written successfully! Length:', len(clean_css))
else:
    print('Backtick not found in src/index.css')
