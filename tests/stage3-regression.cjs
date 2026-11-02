const {chromium}=require('playwright');const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});const p=await b.newPage({viewport:{width:1280,height:720},hasTouch:true});const errors=[];p.on('pageerror',e=>errors.push(e.message));
const act=n=>p.locator(`[data-action="${n}"]`).first().click();await p.goto(process.env.GAME_URL||require('node:url').pathToFileURL(require('node:path').resolve(__dirname,'../index.html')).href);await p.locator('#teacher').check();await p.locator('[data-stage="2"]').click();await p.locator('#presenter').check();
// Reach Phase 3 through the preserved three-key synthesis flow.
for(let i=0;i<3;i++){
 await p.locator(`[data-open-key="${i}"]`).click();
 if(i===0)for(let j=0;j<3;j++)await act('reveal-land-branch');
 const before=await p.evaluate(()=>JSON.stringify(state()));await p.locator('.text-return').first().click();await act('back-evidence');assert.equal(await p.evaluate(()=>JSON.stringify(state())),before);
 await act('reveal-key-meaning');await act('award-key');
}
await p.locator('.landscape-only').waitFor();await act('start-roots');for(let i=0;i<3;i++)await act('reveal-root');await act('reveal-trunk');await act('start-growth');for(let i=0;i<4;i++)await act('reveal-canopy');
// Image-aligned ink on the tree persists through original-text access.
await p.locator('#annotation-toggle').click();await p.locator('#ink-tool').selectOption('pen');await p.locator('.phase3-art').scrollIntoViewIfNeeded();let r=await p.locator('.phase3-art').boundingBox();const x=r.x+r.width*.25,y=r.y+r.height*.7;await p.mouse.move(x,y);await p.mouse.down();await p.mouse.move(x+55,y+15,{steps:5});await p.mouse.up();assert.equal(await p.evaluate(()=>Annotations.count()),1);
await p.locator('#ink-tool').selectOption('interact');await p.locator('[data-text-refs="15"]').click();await act('back-evidence');assert.equal(await p.evaluate(()=>Annotations.count()),1);
// Drawing works on challenge screens too; Interact releases all controls.
await p.locator('[data-stage="1"]').click();await p.locator('[data-checkpoint="0"]').first().click();await p.locator('#ink-tool').selectOption('pen');r=await p.locator('.challenge-question').boundingBox();await p.mouse.move(r.x+8,r.y+20);await p.mouse.down();await p.mouse.move(r.x+100,r.y+25,{steps:5});await p.mouse.up();assert.equal(await p.evaluate(()=>Annotations.count()),1);await p.locator('#ink-hide').click();await p.locator('[data-answer="0"]').check();await act('check-answer');assert(await p.locator('#evidence-response').isVisible());
// Smaller layouts and reduced motion do not overflow.
await p.emulateMedia({reducedMotion:'reduce'});await p.setViewportSize({width:390,height:844});
for(const n of [0,1,2]){await p.locator(`[data-stage="${n}"]`).click();assert(!(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)),`Overflow stage ${n}`);}
// Real touch input through Chromium's input protocol (whiteboard hardware still needs a manual check).
await p.locator('[data-stage="0"]').click();await p.locator('#annotation-toggle').click();await p.locator('#ink-tool').selectOption('highlighter');await p.locator('.landscape-scene').scrollIntoViewIfNeeded();r=await p.locator('.landscape-scene').boundingBox();const tx=r.x+r.width*.5,ty=r.y+r.height*.5;
const cdp=await p.context().newCDPSession(p);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:tx,y:ty}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:tx+50,y:ty+10}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});assert.equal(await p.evaluate(()=>Annotations.count()),1);
await p.locator('#ink-tool').selectOption('interact');await p.locator('#home').click();assert(await p.locator('.welcome').isVisible());assert.deepEqual(errors,[]);await p.screenshot({path:'/tmp/rainy-phase1/mobile.png',fullPage:true});await b.close();console.log('PASS: Phase 3 keys, doors and progressive tree; map/evidence state preservation; tree and challenge ink; touch drawing; Interact mode navigation; mobile layouts; reduced motion.');})().catch(e=>{console.error(e);process.exit(1)});
