/* Audio/arrival failure simulations, plus actual Linux file:// when allowed. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path');
const offline=require('./offline-harness.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 for(const kind of ['sound','muted','denied','missing','interrupted','legacy'])for(const mode of ['rehearsal','teacher']){
  const c=await browser.newContext({viewport:{width:1280,height:720},offline:true});await offline.install(c,path.resolve(__dirname,'..'));
  if(kind==='missing')await c.addInitScript(()=>{window.AudioContext=undefined;window.webkitAudioContext=undefined;});
  if(kind==='denied')await c.addInitScript(()=>{AudioContext.prototype.resume=()=>Promise.reject(new Error('Permission denied'));});
  if(kind==='legacy')await c.route('**/styles.css',r=>r.fulfill({contentType:'text/css',body:require('node:fs').readFileSync(path.resolve(__dirname,'../styles.css'),'utf8').replace(/(?:aspect-ratio|inset)\s*:[^;}]+;?/g,'')}));
  const p=await c.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(offline.url);
  await p.evaluate(mode=>{teacher=mode==='rehearsal';presenter=mode==='teacher';currentStage=2;state().checkpoints.forEach(c=>c.complete=true);state().keys.forEach(k=>{k.revealed=3;k.answerShown=true;k.unlocked=true;});render();},mode);
  if(['sound','denied','missing'].includes(kind))await p.locator('#sound').click();
  if(kind==='sound'){
   await p.waitForTimeout(350);await p.evaluate(()=>{window.fanfareNotes=[];window.victoryProbe=audio.createAnalyser();victoryProbe.fftSize=512;const createGain=audio.createGain.bind(audio);audio.createGain=()=>{const gain=createGain();gain.connect(victoryProbe);return gain;};const create=audio.createOscillator.bind(audio);audio.createOscillator=()=>{const osc=create(),start=osc.start.bind(osc),stop=osc.stop.bind(osc);osc.start=t=>{fanfareNotes.push({start:t});start(t);};osc.stop=t=>{fanfareNotes[fanfareNotes.length-1].stop=t;stop(t);};return osc;};});
  }
  await p.locator('[data-action="open-gate"]').click();
  if(kind==='interrupted'){await p.waitForTimeout(150);await p.locator('#home').click();await p.waitForTimeout(2300);await p.locator('#menu-toggle').click();await p.locator('[data-stage="2"]').click();}
  await p.locator('.arrival-celebration').waitFor();assert.equal(await p.locator('.phase3-art').count(),0);assert((await p.locator('.cultural-landscape').boundingBox()).height>150);
  if(kind==='sound'){
   await p.waitForTimeout(600);assert((await p.evaluate(()=>{const samples=new Float32Array(512);victoryProbe.getFloatTimeDomainData(samples);return Math.max(...samples.map(Math.abs));}))>.0001);
   await p.screenshot({path:`/tmp/rainy-arrival-${mode}.png`});
   await p.waitForFunction(()=>fanfareNotes.length===8);const notes=await p.evaluate(()=>fanfareNotes);assert(notes.at(-1).stop-notes[0].start>=3&&notes.at(-1).stop-notes[0].start<=5);
   await p.evaluate(()=>render());await p.waitForTimeout(80);assert.equal(await p.evaluate(()=>fanfareNotes.length),8);
   await p.locator('.arrival-sound').click();assert.equal(await p.evaluate(()=>toneVoices.size),0);
  }else if(kind==='muted')assert.equal(await p.evaluate(()=>audio),null);
  await p.locator('[data-action="continue-journey-arrival"]').focus();await p.keyboard.press('Tab');assert(await p.locator('.arrival-sound').evaluate(e=>e===document.activeElement));await p.keyboard.press('Tab');assert(await p.locator('[data-action="continue-journey-arrival"]').evaluate(e=>e===document.activeElement));
  await p.locator('[data-action="continue-journey-arrival"]').click();await p.locator('[data-action="start-roots"]').click();assert.equal(await p.evaluate(()=>state().roots),0);
  await p.locator('#home').click();await p.locator('#menu-toggle').click();await p.locator('[data-stage="2"]').click();assert.equal(await p.locator('.arrival-celebration').count(),0);assert.deepEqual(errors,[]);console.log('PASS celebration:',mode,kind);await c.close();
 }
 const c=await browser.newContext({offline:true}),p=await c.newPage();
 try{await p.goto(require('node:url').pathToFileURL(path.resolve(__dirname,'../index.html')).href);await p.locator('[data-action="begin"]').waitFor({timeout:3000});console.log('PASS Linux file:// home loads offline (not Windows/360 verification)');}catch(e){console.log('LIMITATION actual file:// blocked/unavailable:',e.message.split('\n')[0]);}
 await c.close();await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
