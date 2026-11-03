"""Optional delivery audit; no Python or tests are required on the classroom PC."""
import argparse, hashlib, json, re, struct, subprocess, zipfile
from pathlib import Path, PurePosixPath
from urllib.parse import unquote
import xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parent.parent
parser=argparse.ArgumentParser();parser.add_argument('--write-manifest',action='store_true');parser.add_argument('--package');parser.add_argument('--extract');args=parser.parse_args()
sha=lambda b:hashlib.sha256(b).hexdigest()
s=(ROOT/'game.js').read_text(encoding='utf-8');a=s.index('const CONTENT = ');b=s.index(';\n',a);content=json.loads(s[a+16:b])
assert sha(json.dumps(content,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode())=='52f7f0db58132f66db02c16491890f1084213ec3bfe49041afe2ba6345de2612','Approved teaching data changed'
# Read the original DOCX, including unnumbered continuation paragraphs within P8/P9.
original={};n=None
with zipfile.ZipFile(ROOT/'The_Way_to_Rainy_Mountain_Numbered text.docx') as z:
 root=ET.fromstring(z.read('word/document.xml'));ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
 for p in root.findall('.//w:body/w:p',ns):
  t=''.join(p.itertext());m=re.match(r'^(\d{2})\.\s+(.*)',t,re.S)
  if m:n=int(m[1]);original[n]=[m[2]]
  elif n and t.strip():original[n].append(t)
assert len(original)==15
for n,parts in original.items():assert ' '.join('\n'.join(parts).split())==' '.join(content['paragraphs'][str(n)].split()),f'Original paragraph {n} mismatch'
protected=json.loads((ROOT/'tests/protected-sha256.json').read_text())
for rel,digest in protected.items():assert sha((ROOT/rel).read_bytes())==digest,f'Original asset/document modified: {rel}'
# Preserve vocabulary, mappings, objectives and approved presentation templates as well.
approved=json.loads((ROOT/'tests/approved-teaching-sha256.json').read_text())
for marker,record in approved.items():
 start=s.index(marker);end=s.index(record['end'],start+len(marker));assert sha(s[start:end].encode())==record['sha256'],f'Approved teaching section changed: {marker}'
runtime=['index.html','styles.css','game.js','annotations.js']+sorted(str(p.relative_to(ROOT)) for p in (ROOT/'assets').glob('*.png'))
assert len(runtime)==15
texts={f:(ROOT/f).read_text(encoding='utf-8') for f in runtime if not f.endswith('.png')}
refs=set()
for f,t in texts.items():
 assert not re.search(r'\b(?:fetch|XMLHttpRequest|WebSocket|EventSource|importScripts)\s*\(',t),f'Network API found in {f}'
 assert not re.search(r'<script[^>]+type=[\'"]module',t),f'Module script found in {f}'
 assert not re.search(r'@import\b|@font-face\b',t),f'External font/import needs review in {f}'
 for value in re.findall(r'https?://[^\s\'"<>]+',t):assert value=='http://www.w3.org/2000/svg',f'Nonlocal URL in {f}: {value}'
 refs.update(re.findall(r'(?:src|href)=[\'"]([^\'"]+)[\'"]',t))
 refs.update(re.findall(r'url\([\'"]?([^\)\'"\s]+(?:\s+[^\)\'"]+)*)[\'"]?\)',t))
for ref in refs:
 if '${' in ref:continue # Dynamic lock names are independently checked by the protected asset list.
 rel=unquote(ref.split('#')[0]);path=PurePosixPath(rel)
 assert rel and not path.is_absolute() and not re.match(r'^[a-zA-Z]:',rel) and '\\' not in rel,ref
 assert '..' not in path.parts,ref
 actual=ROOT
 for part in path.parts:
  assert part in [x.name for x in actual.iterdir()],f'Missing or case-mismatched path: {ref}'
  actual=actual/part
 assert actual.is_file(),ref
for name in ['background-stage1.png','background-stage 2.png','background-stage 3.png']:
 data=(ROOT/'assets'/name).read_bytes();assert data[:8]==b'\x89PNG\r\n\x1a\n';assert struct.unpack('>II',data[16:24])==(1672,941),name
manifest=''.join(f'{sha((ROOT/f).read_bytes())}  {f}\n' for f in runtime)
if args.write_manifest:(ROOT/'RUNTIME_SHA256.txt').write_text(manifest,encoding='utf-8')
assert (ROOT/'RUNTIME_SHA256.txt').read_text(encoding='utf-8')==manifest,'Runtime manifest is missing/outdated'
files=sorted(p for p in ROOT.rglob('*') if p.is_file() and '.git' not in p.relative_to(ROOT).parts and '__pycache__' not in p.parts)
relative=[str(p.relative_to(ROOT)) for p in files]
assert len(set(x.casefold() for x in relative))==len(relative),'Case collision on Windows'
if args.package:
 prefix='Rainy-mountain-adventure-3-stages-work/'
 with zipfile.ZipFile(args.package,'w',zipfile.ZIP_DEFLATED) as z:
  for p,rel in zip(files,relative):z.write(p,prefix+rel)
 with zipfile.ZipFile(args.package) as z:
  assert z.testzip() is None
  for f in runtime:assert z.read(prefix+f)==(ROOT/f).read_bytes()
  if args.extract:
   z.extractall(args.extract);dest=Path(args.extract)/prefix
   for f in runtime:assert (dest/f).read_bytes()==(ROOT/f).read_bytes()
   print('EXTRACTED_ROOT='+str(dest))
 print('ZIP verified:',args.package,'files:',len(files))
print('PASS: 4 runtime files, 11 original PNGs, original Word documents, 15 verbatim numbered paragraphs (whitespace normalized), approved teaching fingerprints, exact-case relative paths, UTF-8 sources, no remote runtime dependencies, Windows case-collision check and runtime SHA-256 manifest.')
