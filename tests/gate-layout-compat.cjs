// Modern Chromium plus CSS-declaration removal simulating older layout support.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const offline=require('./offline-harness.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 for(const size of [[1280,720],[1366,768],[1920,1080],[375,812]]) for(const legacy of [false,true]) {
  const context=await browser.newContext({viewport:{width:size[0],height:size[1]},offline:true});
  await offline.install(context,require('node:path').resolve(__dirname,'..'));
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  if(legacy) await context.route('**/styles.css',async route=>{
   const css=require('node:fs').readFileSync(require('node:path').resolve(__dirname,'../styles.css'),'utf8');
   // Remove unsupported declarations before parsing so earlier fallbacks survive.
   await route.fulfill({contentType:'text/css',body:css.replace(/(?:aspect-ratio|inset)\s*:[^;}]+;?/g,'').replace(/(?:width|height)\s*:(?:min|clamp)\([^;]+;?/g,'')});
  });
  await page.goto(offline.url);
  for(const mode of ['student','presenter','rehearsal']) {
   await page.evaluate(mode=>{teacher=mode==='rehearsal';presenter=mode==='presenter';state().checkpoints.forEach(c=>c.complete=true);currentStage=2;keyActivity=false;render();},mode);
   const before=await page.evaluate(()=>JSON.stringify(state()));
   const scene=await page.locator('.final-gate-scene').boundingBox();
   assert(scene.height>150);assert(Math.abs(scene.width/scene.height-1672/941)<.01);
   assert(await page.locator('.complete-gate').evaluate(e=>e.complete&&e.naturalWidth===1672));
   for(let i=0;i<3;i++) {
    const lock=page.locator(`[data-open-key="${i}"]`);const box=await lock.boundingBox();
    assert(box.width>=30&&box.height>=30);assert(box.y>=scene.y&&box.y+box.height<=scene.y+scene.height);
    await lock.click();assert(await page.locator('.knowledge-map').isVisible());
    assert.equal(await page.evaluate(()=>activeKey),i);
    assert.equal(await page.evaluate(()=>JSON.stringify(state())),before);
    await page.evaluate(()=>{keyActivity=false;render();});
   }
  }
  assert.deepEqual(errors,[]);console.log('PASS gate layout',size.join('x'),legacy?'legacy CSS simulation':'native');await context.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
