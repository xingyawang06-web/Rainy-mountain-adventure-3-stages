/* Complete UI journeys. Rehearsal never enables Teacher Access, including Stage 1/2. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path');
const offline=require('./offline-harness.cjs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 for(const mode of ['rehearsal','teacher']){
  const context=await browser.newContext({viewport:{width:1366,height:768},offline:true});await offline.install(context,path.resolve(__dirname,'..'));
  const p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>errors.push(r.url()));
  await p.goto(offline.url);const act=n=>p.locator(`[data-action="${n}"]`).first().click();
  async function menu(){if(await p.locator('#adventure-menu').isHidden())await p.locator('#menu-toggle').click();}
  async function stage(n){await menu();await p.locator(`[data-stage="${n}"]`).click();}
  await menu();await p.locator(mode==='rehearsal'?'#teacher':'#presenter').check();await p.locator('#menu-close').click();
  await p.evaluate(()=>{window.accessChanges=0;document.querySelector('#presenter').addEventListener('change',()=>accessChanges++);});
  await act('begin');
  for(let i=0;i<9;i++){if(!(await p.locator('[data-sheet="vocabulary"]').evaluate(e=>e.open)))await p.locator('[data-sheet="vocabulary"] summary').click();await p.locator(`[data-phrase="${i}"]`).click();await p.locator(`[data-hotspot="${i}"]`).click();}
  if(!(await p.locator('[data-sheet="field-notes"]').evaluate(e=>e.open)))await p.locator('[data-sheet="field-notes"] summary').click();
  await p.locator('#landscape-fire').fill('Leaves twist as if burning in the summer heat.');await p.locator('#landscape-brittle').fill('Dry grass cracks underfoot.');
  for(let i=0;i<4;i++)await p.locator(`[data-reconstruction="${i}"][value="0"]`).check();await act('reconstruct');await p.locator('#landscape-overall').fill('Isolation, scale, weather and wildlife awaken the imagination.');assert(await p.evaluate(()=>state().stage1));
  await stage(1);
  for(let gate=0;gate<5;gate++){
   await p.locator(`[data-checkpoint="${gate}"]`).first().click();
   const questions=await p.evaluate(i=>CONTENT.checkpoints[i].challenges,gate);
   for(const q of questions){if(q.type==='blanks'){for(let i=0;i<q.answers.length;i++)await p.locator(`[data-route="${i}"]`).fill(q.answers[i]);}else for(const a of q.answers)await p.locator(`[data-answer="${a}"]`).check();await act('check-answer');assert.equal(await p.locator('#evidence-response').count(),0);await act('confirm-evidence');}
   assert(await p.locator('.clue-card').isVisible());await act('continue-journey');await p.waitForFunction(()=>!state().mapWalk);
  }
  assert.equal(await p.evaluate(()=>state().checkpoints.filter(c=>c.complete).length),5);await stage(2);
  for(let key=0;key<3;key++){
   assert(await p.locator('.complete-gate').isVisible());assert.equal(await p.locator('.door-lock').count(),3);
   await p.locator(`[data-open-key="${key}"]`).click();const selector=key===0?'.knowledge-branch':'.synthesis-card',count=key===2?2:3;
   assert.equal(await p.locator(selector).count(),0);assert.equal(await p.locator('.synthesis-answer').count(),0);
   for(let i=0;i<count;i++){
    assert(await p.locator('[data-action="reveal-key-meaning"]').isDisabled());
    await p.evaluate(()=>{ACTIONS['reveal-key-meaning']();ACTIONS['award-key']();});assert(!(await p.evaluate(k=>state().keys[k].unlocked,key)));
    await act(key===0?'reveal-land-branch':'reveal-key-clue');assert.equal(await p.locator(selector).count(),i+1);
    const before=await p.evaluate(()=>JSON.stringify(state()));await p.locator(`${selector} [data-text-refs]`).last().click();assert(await p.locator('.original-passage').isVisible());await act('back-evidence');assert.equal(await p.evaluate(()=>JSON.stringify(state())),before);
    await p.waitForTimeout(60);assert.equal(await p.locator(selector).count(),i+1);
   }
   await act('reveal-key-meaning');assert.equal(await p.locator('.synthesis-answer h3').innerText(),['ANCESTRAL LAND','TRIBAL HISTORY','FAMILY MEMORIES'][key]);assert(!(await p.evaluate(k=>state().keys[k].unlocked,key)));
   await act('award-key');assert.equal(await p.evaluate(()=>state().keys.filter(k=>k.unlocked).length),key+1);
  }
  assert.equal(await p.locator('.phase3-opening').count(),0);await act('open-gate');await p.locator('.phase3-opening').waitFor();await p.locator('.arrival-celebration').waitFor();
  assert.equal(await p.locator('#arrival-title').innerText(),'Congratulations, Explorers!');assert.equal(await p.locator('#arrival-message').innerText(),'You’ve made it to Rainy Mountain!');assert.equal(await p.locator('.phase3-art').count(),0);
  await p.evaluate(()=>{ACTIONS['start-roots']();ACTIONS['reveal-root']();});assert.equal(await p.evaluate(()=>state().roots),0);assert.equal(await p.evaluate(()=>toneVoices.size),0); // default muted
  await p.evaluate(()=>render());assert(await p.locator('.arrival-celebration').isVisible());await act('continue-journey-arrival');assert.equal(await p.locator('.arrival-celebration').count(),0);
  await p.locator('#home').click();await stage(2);assert.equal(await p.locator('.arrival-celebration').count(),0);
  await act('start-roots');for(let i=0;i<3;i++){await act('reveal-root');assert.equal(await p.locator('.phase3-root').count(),i+1);assert.equal(await p.locator('.identity-trunk').count(),0);}await act('reveal-trunk');assert.equal(await p.locator('.identity-trunk').count(),1);await act('start-growth');for(let i=0;i<2;i++){await act('reveal-canopy');assert.equal(await p.locator('.phase3-leaf').count(),i+1);}
  await act('show-assignment');assert(await p.locator('.assignment-screen').isVisible());assert(await p.evaluate(()=>state().complete));
  if(mode==='rehearsal'){assert.equal(await p.evaluate(()=>presenter),false);assert.equal(await p.evaluate(()=>accessChanges),0);assert.equal(await p.evaluate(()=>studentState.keys.filter(k=>k.unlocked).length),0);}
  assert.deepEqual(errors,[]);console.log('PASS complete three-stage journey:',mode,'progressive keys, celebration, roots/trunk/canopy, assignment; no external requests or JS errors');await context.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
