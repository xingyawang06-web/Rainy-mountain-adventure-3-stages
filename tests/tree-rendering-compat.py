"""Pixel-based tree regression. Legacy CSS is simulated, not physical Windows/360."""
from io import BytesIO
from pathlib import Path
import re
from urllib.parse import unquote, urlparse
from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parent.parent
URL='http://rainy-tree.test/index.html'
BASELINE=(ROOT/'tests/fixtures/tree-artwork-before-compat.js').read_text()
SOURCE=(ROOT/'game.js').read_text()
CURRENT=SOURCE[SOURCE.index('function treePiece('):SOURCE.index('function assignmentHTML()')]

def pixels(data):
    return Image.open(BytesIO(data)).convert('RGB')

def changed(a,b):
    diff=ImageChops.difference(a,b)
    red,green,blue=diff.split()
    return sum(ImageChops.lighter(ImageChops.lighter(red,green),blue).histogram()[13:])

with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
    for size in [(1280,720),(1366,768),(1920,1080),(375,812)]:
        for legacy in [False,True]:
            for mode in ['rehearsal','teacher']:
                context=browser.new_context(viewport={'width':size[0],'height':size[1]},offline=True,reduced_motion='reduce')
                requests=[]
                def route(r):
                    u=urlparse(r.request.url)
                    assert u.netloc=='rainy-tree.test',r.request.url
                    file=ROOT/unquote(u.path).lstrip('/')
                    assert file.is_file(),file
                    data=file.read_bytes()
                    if file.suffix=='.css' and legacy:
                        css=data.decode()
                        css=re.sub(r'(?:aspect-ratio|inset|clip-path|-webkit-clip-path|mask[^:;{}]*|animation(?:-[a-z-]+)?)\s*:[^;}]+;?','',css)
                        css=re.sub(r'(?:width|height)\s*:(?:min|clamp)\([^;]+;?','',css)
                        data=css.encode()
                    requests.append(r.request.url)
                    r.fulfill(body=data,content_type={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png'}[file.suffix])
                context.route('**/*',route)
                page=context.new_page();errors=[]
                page.on('pageerror',lambda e:errors.append(str(e)))
                page.goto(URL)
                # Isolate the post-arrival sequence; other suites earn the keys through UI.
                page.evaluate("""mode=>{teacher=mode==='rehearsal';presenter=mode==='teacher';currentStage=2;
                    state().checkpoints.forEach(c=>c.complete=true);state().keys.forEach(k=>k.unlocked=true);
                    state().gateOpen=true;state().presentation='landscape';render();}""",mode)
                page.locator('[data-action="start-roots"]').click()
                # Compare artwork pixels, not changing labels/counters. Keep DOM labels for assertions.
                labels_style=page.add_style_tag(content='.phase3-root,.phase3-trunk-label,.phase3-leaf{visibility:hidden!important}')
                landscape=page.locator('.cultural-landscape')
                before=pixels(landscape.screenshot())
                actions=['reveal-root']*3+['reveal-trunk','start-growth']+['reveal-canopy']*4
                for step,action in enumerate(actions):
                    page.locator(f'[data-action="{action}"]').click()
                    page.wait_for_function('Array.from(document.querySelectorAll(".phase3-layer")).every(e=>e.complete&&e.naturalWidth>0)')
                    bounds=page.evaluate("""()=>{const scene=document.querySelector('.cultural-landscape').getBoundingClientRect(),art=document.querySelector('.phase3-art').getBoundingClientRect();return {height:scene.height,artHeight:art.height,offset:art.top-scene.top,crops:Array.from(document.querySelectorAll('.tree-crop')).map(e=>{const r=e.getBoundingClientRect();return [r.width,r.height];})};}""")
                    assert bounds['height']>100 and bounds['artHeight']>100 and abs(bounds['offset'])<1,bounds
                    assert all(w>0 and h>0 for w,h in bounds['crops']),bounds
                    after=pixels(landscape.screenshot())
                    if action!='start-growth':
                        assert changed(before,after)>40,(size,legacy,mode,step,'click did not reveal artwork')
                    # A native-rendered approved clip-path reference must match every reveal state.
                    if not legacy:
                        reference_style=page.add_style_tag(content='.phase3-layer{top:0;left:0;width:100%;height:100%;object-fit:fill}')
                        page.evaluate('code=>{window.eval(code);render();}',BASELINE)
                        reference=pixels(landscape.screenshot())
                        # Fractional crop boundaries can differ by one antialiased pixel column.
                        assert changed(after,reference)<after.width*after.height*.012,(size,mode,step,'artwork differs from approved masking')
                        page.evaluate('code=>{window.eval(code);render();}',CURRENT)
                        reference_style.evaluate('(e)=>e.remove()')
                    before=after
                assert page.locator('.phase3-root').all_text_contents()==['Ancestral Land','Tribal History','Family Memories']
                assert page.locator('.phase3-trunk-label').text_content()=='CULTURAL IDENTITY'
                assert page.locator('.phase3-leaf').all_text_contents()==['Writing','Storytelling','Language','Cultural Exchange']
                labels_style.evaluate('(e)=>e.remove()')
                if size==(1280,720):page.screenshot(path=f'/tmp/rainy-tree-{mode}-{"legacy" if legacy else "native"}.png')
                page.locator('[data-action="show-assignment"]').click()
                assert page.locator('.assignment-screen').is_visible()
                assert not errors,errors
                if mode=='rehearsal':assert page.evaluate('presenter') is False
                print('PASS visible tree pixels, geometry, progressive labels and assignment:',size,'legacy' if legacy else 'native',mode,flush=True)
                context.close()
    browser.close()
