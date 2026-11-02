/* Development-only checks; no test runner is needed to open the classroom game. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {resolve}=require('node:path');
const {pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1280,height:720}}),errors=[],external=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()+': '+r.failure()?.errorText));
 const url=process.env.GAME_URL||pathToFileURL(resolve(__dirname,'../index.html')).href;
 page.on('request',r=>{if(!r.url().startsWith('file:')&&!r.url().startsWith(new URL(url).origin)&&!r.url().startsWith('blob:'))external.push(r.url());});
 const act=name=>page.locator(`[data-action="${name}"]`).first().click();
 async function stage(n){await page.locator(`[data-stage="${n}"]`).click();assert(await page.locator('main h2').first().isVisible());}
 await page.goto(url);assert.equal(await page.locator('.teacher-notes').count(),0);assert(await page.locator('#annotation-toggle').isHidden());
 await stage(0);
 for(let i=0;i<9;i++){await page.locator(`[data-phrase="${i}"]`).click();await page.locator(`[data-hotspot="${i}"]`).click();}
 await page.locator('#landscape-fire').fill('The leaves appear to twist in intense heat as if burning.');await page.locator('#landscape-brittle').fill('The dry brown grass cracks beneath the feet.');
 for(let i=0;i<4;i++)await page.locator(`[data-reconstruction="${i}"][value="0"]`).check();await act('reconstruct');
 await page.locator('#landscape-overall').fill('A solitary knoll and isolated objects create loneliness and bring the imagination to life.');
 assert(await page.locator('[data-stage="1"]').isEnabled());assert.equal(await page.locator('#teacher').isChecked(),false);
 await stage(1);assert(await page.locator('#road-explorers').isVisible());assert(await page.locator('[data-checkpoint="1"]').first().isDisabled());
 for(let i=0;i<5;i++){
  await page.locator(`[data-checkpoint="${i}"]`).first().click();
  const questions=await page.evaluate(i=>CONTENT.checkpoints[i].challenges,i);
  for(let j=0;j<questions.length;j++){
   const q=questions[j];assert.equal(await page.locator('.teacher-notes').count(),0);assert(!/Correct Answer|Teacher’s Guiding Question/.test(await page.locator('main').innerText()));
   await act('check-answer');assert.match(await page.locator('#announcement').innerText(),/Dead end|Check Paragraph/);
   const before=await page.evaluate(()=>JSON.stringify(state()));await page.locator('.text-return').first().click();
   for(let k=0;k<q.refs.length;k++){
    assert.equal(await page.locator('.original-passage').textContent(),await page.evaluate(n=>CONTENT.paragraphs[n],q.refs[k]));
    if(k<q.refs.length-1)await act('text-next');
   }
   await act('back-evidence');assert.equal(await page.evaluate(()=>JSON.stringify(state())),before);
   if(q.type==='blanks')for(let k=0;k<3;k++)await page.locator(`[data-route="${k}"]`).fill(q.answers[k]);else for(const a of q.answers)await page.locator(`[data-answer="${a}"]`).check();
   await act('check-answer');await page.locator('#evidence-response').fill('We returned to the original paragraph and discussed how its wording supports our interpretation.');await act('confirm-evidence');await act('next-challenge');
  }
  assert.match(await page.locator('main h2').innerText(),new RegExp(`Congratulations! You’ve earned the Clue Card for Gate ${i+1}!`));
  assert.equal(await page.locator('#checkpoint-final-final').count(),0);await act('continue-journey');
  assert.equal(await page.evaluate(()=>state().checkpoints.filter(c=>c.complete).length),i+1);
  const animation=await page.locator('#road-explorers').evaluate(el=>el.getAnimations().length);assert(animation>0);
 }
 assert.equal(await page.evaluate(()=>CONTENT.checkpoints[3].challenges[0].answers[0]),1);
 assert.deepEqual(await page.evaluate(()=>CONTENT.checkpoints[3].challenges[0].refs),[3]);
 // Preserve old Stage 3 while exercising the shared reader and its corrected branch mappings.
 await stage(2);await page.locator('#presenter').check();const studentBefore=await page.evaluate(()=>JSON.stringify(studentState));
 await page.locator('#annotation-toggle').click();assert(await page.locator('#annotation-toolbar').isVisible());assert.equal(await page.evaluate(()=>JSON.stringify(studentState)),studentBefore);
 await page.locator('#ink-hide').click();
 for(let key=0;key<3;key++){
  if(key>0){await page.locator('#teacher').check();await stage(2);await page.locator(`[data-key-tab="${key}"]`).click();}
  const links=await page.evaluate(k=>[EVIDENCE_LINKS.land,EVIDENCE_LINKS.history,EVIDENCE_LINKS.memory][k],key);
  for(const link of links){
   const before=await page.evaluate(()=>JSON.stringify(state()));const phase=await page.evaluate(()=>activeKey);
   await page.locator(`[data-text-refs="${link.refs.join(',')}"]`).last().click();
   for(let n=0;n<link.refs.length;n++){
    assert.equal(await page.locator('.original-passage').textContent(),await page.evaluate(p=>CONTENT.paragraphs[p],link.refs[n]));if(n<link.refs.length-1)await act('text-next');
   }
   await act('back-evidence');assert.equal(await page.evaluate(()=>JSON.stringify(state())),before);assert.equal(await page.evaluate(()=>activeKey),phase);
  }
 }
 // Annotation tools on an original paragraph, real pointer input, history and persistence.
 await page.locator('[data-text-refs]').first().click();
 await page.locator('#annotation-toggle').click();await page.locator('#ink-tool').selectOption('pen');
 async function stroke(tool,offset=0){await page.locator('#ink-tool').selectOption(tool);const box=await page.locator('.original-passage [data-ink-word]').first().boundingBox();const x=box.x+5,y=box.y+box.height/2+offset;await page.mouse.move(x,y);await page.mouse.down();await page.mouse.move(x+90,y+18,{steps:8});await page.mouse.up();}
 const tools=['pen','highlighter','underline','ellipse','rectangle','arrow'],colors=['#e32636','#2374ee','#198c48','#ffd42a'];
 for(let i=0;i<tools.length;i++){await page.locator('#ink-color').selectOption(colors[i%4]);await page.locator('#ink-size').fill(String(4+i));await stroke(tools[i]);}
 assert.equal(await page.locator('.annotation-overlay [data-ink-index="1"]').getAttribute('opacity'),'0.3');
 assert.equal(await page.locator('.annotation-overlay [data-ink-index="3"]').getAttribute('stroke'),'#ffd42a');
 assert.equal(await page.locator('.annotation-overlay [data-ink-index="5"]').getAttribute('stroke-width'),'9');
 assert.equal(await page.evaluate(()=>Annotations.count()),6);assert.equal(await page.locator('.annotation-overlay [data-ink-index]').count(),6);
 await page.locator('#ink-undo').click();assert.equal(await page.evaluate(()=>Annotations.count()),5);await page.locator('#ink-redo').click();assert.equal(await page.evaluate(()=>Annotations.count()),6);
 await page.locator('#ink-tool').selectOption('eraser');const arrow=page.locator('.annotation-overlay [data-ink-index="5"]');const target=await arrow.evaluate(el=>{const r=el.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2};});await page.mouse.click(target.x,target.y);assert.equal(await page.evaluate(()=>Annotations.count()),5);
 await page.locator('#ink-undo').click();assert.equal(await page.evaluate(()=>Annotations.count()),6);
 await page.locator('#ink-clear').click();await page.locator('#ink-clear-cancel').click();assert.equal(await page.evaluate(()=>Annotations.count()),6);
 await page.locator('#ink-clear').click();await page.locator('#ink-clear-confirm').click();assert.equal(await page.evaluate(()=>Annotations.count()),0);await page.locator('#ink-undo').click();assert.equal(await page.evaluate(()=>Annotations.count()),6);
 await page.locator('#ink-tool').selectOption('interact');await act('back-evidence');await page.locator('[data-text-refs]').first().click();assert.equal(await page.evaluate(()=>Annotations.count()),6);
 // The first stroke's first point remains attached to the first word after reflow/scroll/fullscreen.
 async function offset(){return page.evaluate(()=>{const word=document.querySelector('.original-passage [data-ink-word]').getBoundingClientRect(),poly=document.querySelector('.annotation-overlay polyline'),r=poly.ownerSVGElement.getBoundingClientRect(),p=poly.points.getItem(0);return [(r.x+p.x-word.x)/word.width,(r.y+p.y-word.y)/word.height];});}
 const anchor=await offset();await page.setViewportSize({width:1920,height:1080});await page.waitForTimeout(150);const resized=await offset();anchor.forEach((v,i)=>assert(Math.abs(v-resized[i])<.02));
 await page.evaluate(()=>window.scrollBy(0,300));const scrolled=await offset();anchor.forEach((v,i)=>assert(Math.abs(v-scrolled[i])<.02));
 await page.locator('#fullscreen').click();await page.waitForTimeout(150);const full=await offset();anchor.forEach((v,i)=>assert(Math.abs(v-full[i])<.03));if(await page.evaluate(()=>!!document.fullscreenElement))await page.locator('#fullscreen').click();
 await page.locator('#ink-hide').click();await act('back-evidence');await page.locator('#home').click();assert(await page.locator('main h2').isVisible());
 await page.locator('#teacher').uncheck();await page.locator('#presenter').uncheck();assert(await page.locator('#annotation-toggle').isHidden());assert.equal(await page.locator('.teacher-notes').count(),0);
 for(const n of [0,1,2,1,0])await stage(n);
 await page.locator('#restart').click();await page.locator('#cancel-restart').click();assert.equal(await page.evaluate(()=>studentState.checkpoints.filter(c=>c.complete).length),5);
 await page.locator('#sound').click();await page.locator('#sound').click();
 await page.locator('#restart').click();await page.locator('#confirm-restart').click();assert(await page.locator('[data-stage="1"]').isDisabled());
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);await browser.close();console.log('PASS: Phase 1 sequential flow, 14 questions, rewards, explorer animation, exact evidence and knowledge-map returns, all annotation tools/history, resize/scroll/fullscreen alignment, teacher isolation, navigation, offline resource checks.');
})().catch(e=>{console.error(e);process.exit(1)});
