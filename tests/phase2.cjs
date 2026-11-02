/* Focused Phase 2 checks. Phase 1's suite separately earns all five clues through UI. */
const {chromium}=require('playwright');const assert=require('node:assert/strict');const {resolve}=require('node:path');const {pathToFileURL}=require('node:url');
(async()=>{
 const b=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});const p=await b.newPage({viewport:{width:1920,height:1080}}),errors=[],external=[];
 const url=process.env.GAME_URL||pathToFileURL(resolve(__dirname,'../index.html')).href;p.on('pageerror',e=>errors.push(e.message));p.on('requestfailed',r=>errors.push(r.url()));p.on('request',r=>{if(!r.url().startsWith('file:')&&!r.url().startsWith(new URL(url).origin)&&!r.url().startsWith('blob:'))external.push(r.url());});
 const act=name=>p.locator(`[data-action="${name}"]`).first().click();
 await p.goto(url);
 // Fixture: completed student gates for focused synthesis tests (not a substitute for Phase 1 tests).
 await p.evaluate(()=>{studentState.stage1=true;studentState.checkpoints.forEach(c=>c.complete=true);render();});await p.locator('[data-stage="2"]').click();
 assert.equal(await p.locator('.complete-gate').getAttribute('src'),'assets/whole%20gate.png');assert.equal(await p.locator('.original-leaf img').count(),2);assert.equal(await p.locator('.door-lock').count(),3);assert.equal(await p.locator('.lock-row').count(),0);
 for(const name of ['Ancestral Land','Tribal History','Family Memories'])assert(!(await p.locator('main').innerText()).includes(name));
 const geometry=await p.locator('.door-lock').evaluateAll(nodes=>{const scene=nodes[0].parentElement.getBoundingClientRect();return nodes.map(n=>{const r=n.getBoundingClientRect();return {x:(r.x+r.width/2-scene.x)/scene.width,y:(r.y+r.height/2-scene.y)/scene.height,width:r.width/scene.width};});});for(const g of geometry){assert(g.x>.25&&g.x<.75);assert(g.y>.145&&g.y<.935);assert(g.width<.1);}
 await p.screenshot({path:'/tmp/rainy-phase2-gate.png'});
 await p.locator('[data-open-key="0"]').click();assert.equal(await p.locator('.challenge-question').innerText(),'What makes Rainy Mountain more than a place?');assert.equal(await p.locator('[data-key-field],#key-name,.key-fields').count(),0);assert.equal(await p.locator('.knowledge-branch').count(),0);assert.equal(await p.locator('[data-action="reveal-key-meaning"]').count(),0);
 // Guards hold even if a reveal action is called outside the UI.
 await p.evaluate(()=>ACTIONS['reveal-key-meaning']());assert.equal(await p.evaluate(()=>state().keys[0].answerShown),false);
 await p.locator('#presenter').check();assert.equal(await p.locator('.knowledge-branch').count(),0);
 for(let i=0;i<3;i++){await act('reveal-land-branch');assert.equal(await p.locator('.knowledge-branch').count(),i+1);assert.equal(await p.locator('.synthesis-answer').count(),0);}
 // Real ink on the map, plus exact reader round trips for every Key 1 branch.
 await p.locator('#annotation-toggle').click();await p.locator('#ink-tool').selectOption('pen');const box=await p.locator('.knowledge-branch h3').first().boundingBox();await p.mouse.move(box.x+5,box.y+12);await p.mouse.down();await p.mouse.move(box.x+70,box.y+14,{steps:5});await p.mouse.up();assert.equal(await p.evaluate(()=>Annotations.count()),1);await p.locator('#ink-tool').selectOption('interact');
 async function evidenceRoundTrip(refs){const before=await p.evaluate(()=>JSON.stringify(state()));await p.locator(`[data-text-refs="${refs.join(',')}"]`).last().click();for(let i=0;i<refs.length;i++){assert.equal(await p.locator('.original-passage').textContent(),await p.evaluate(n=>CONTENT.paragraphs[n],refs[i]));if(i<refs.length-1)await act('text-next');}await act('back-evidence');assert.equal(await p.evaluate(()=>JSON.stringify(state())),before);}
 for(const refs of [[1],[2,15],[1,5,15]])await evidenceRoundTrip(refs);assert.equal(await p.evaluate(()=>Annotations.count()),1);assert.equal(await p.locator('.knowledge-branch').count(),3);
 await p.locator('#ink-hide').click();await p.waitForTimeout(600);await p.screenshot({path:'/tmp/rainy-phase2-key1.png'});await act('reveal-key-meaning');assert.equal(await p.locator('.synthesis-answer h3').innerText(),'ANCESTRAL LAND');assert.equal(await p.evaluate(()=>state().keys.filter(k=>k.unlocked).length),0);
 await act('award-key');assert.equal(await p.locator('.door-lock.is-unlocked').count(),1);assert(await p.locator('.door-lock.just-unlocked').isVisible());assert.equal(await p.locator('.tree-art').count(),0);assert.equal(await p.evaluate(()=>state().gateOpen),false);
 await p.locator('[data-open-key="0"]').click();assert.equal(await p.locator('.knowledge-branch').count(),3);assert.equal(await p.evaluate(()=>Annotations.count()),1);assert.equal(await p.locator('[data-action="award-key"]').count(),0);await act('back-gate');
 for(const key of [1,2]){
  await p.locator(`[data-open-key="${key}"]`).click();assert.equal(await p.locator('.synthesis-card').count(),key===1?3:2);assert.equal(await p.locator('.synthesis-answer').count(),0);assert.equal(await p.locator('input[data-key-field],#key-name').count(),0);
  await p.locator('#annotation-toggle').click();await p.locator('#ink-tool').selectOption(key===1?'underline':'ellipse');
  const inkBox=await p.locator('.challenge-question').boundingBox();await p.mouse.move(inkBox.x+8,inkBox.y+12);await p.mouse.down();await p.mouse.move(inkBox.x+90,inkBox.y+32,{steps:5});await p.mouse.up();await p.locator('#ink-tool').selectOption('interact');
  const refs=key===1?[[4],[4,6,7,8],[3,4,9]]:[[3,5,9],[8,10,11,12,13]];for(const r of refs)await evidenceRoundTrip(r);
  assert.equal(await p.evaluate(()=>Annotations.count()),1);await p.locator('#ink-hide').click();
  // All clue cards appear together before any answer reveal.
  const cards=await p.locator('.card-content').allTextContents();assert.equal(cards.length,key===1?3:2);assert(cards.every(c=>c.trim()));
  await p.waitForTimeout(600);await p.screenshot({path:`/tmp/rainy-phase2-key${key+1}.png`});await act('reveal-key-meaning');assert.equal(await p.locator('.synthesis-answer h3').innerText(),key===1?'TRIBAL HISTORY':'FAMILY MEMORIES');await act('award-key');
 }
 assert.equal(await p.locator('.door-lock.is-unlocked').count(),3);assert.equal(await p.locator('.earned-keys span').count(),3);assert.equal(await p.locator('.tree-art,.knowledge-map').count(),0);assert.equal(await p.locator('.final-gate-scene.legacy-open').count(),0);assert.equal(await p.evaluate(()=>state().gateOpen),false);
 // Any lock is independently accessible; none resets another key's progress.
 for(const i of [2,0,1]){await p.locator(`[data-open-key="${i}"]`).click();assert.equal(await p.locator('.synthesis-answer').count(),1);await act('back-gate');}
 await p.locator('#presenter').uncheck();assert.equal(await p.locator('.teacher-notes').count(),0);
 for(const n of [0,1,2]){await p.locator(`[data-stage="${n}"]`).click();assert(await p.locator('main h2').first().isVisible());}
 await p.locator('#home').click();await p.locator('[data-stage="2"]').click();assert.equal(await p.locator('.door-lock.is-unlocked').count(),3);
 // Fresh teacher rehearsal can use cards without pretending the student earned them.
 await p.locator('#teacher').check();await p.locator('[data-stage="2"]').click();await p.locator('[data-open-key="2"]').click();assert.equal(await p.locator('.reference-label').count(),2);assert.equal(await p.locator('.synthesis-card').count(),2);assert.equal(await p.evaluate(()=>teacherState.checkpoints.filter(c=>c.complete).length),0);
 await p.locator('#teacher').uncheck();assert.equal(await p.evaluate(()=>studentState.keys.filter(k=>k.unlocked).length),3);
 await p.setViewportSize({width:1280,height:720});await p.locator('[data-stage="2"]').click();assert(!(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)));
 await p.emulateMedia({reducedMotion:'reduce'});await p.setViewportSize({width:390,height:844});assert(!(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)));await p.locator('[data-open-key="1"]').click();assert.equal(await p.locator('.synthesis-card').count(),3);assert(!(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)));
 await p.locator('#restart').click();await p.locator('#cancel-restart').click();assert.equal(await p.evaluate(()=>state().keys.filter(k=>k.unlocked).length),3);await act('back-gate');await p.locator('#restart').click();await p.locator('#confirm-restart').click();assert.equal(await p.evaluate(()=>state().keys.filter(k=>k.unlocked).length),0);
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);await b.close();console.log('PASS: original closed gate/attached locks, progressive teacher-led Key 1, simultaneous Clue Cards for Keys 2–3, exact evidence including P1/P5/P15, map/annotation persistence, key awards and unlock animation, hidden student answers, teacher rehearsal, navigation, mobile/reduced motion, no automatic tree transition, no runtime/resource errors or external requests.');
})().catch(e=>{console.error(e);process.exit(1)});
