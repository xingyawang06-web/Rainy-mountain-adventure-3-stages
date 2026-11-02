/* Full real-UI Stage 1/2 verification, including measured motion and Web Audio output. */
const {chromium}=require('playwright'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url'),{resolve}=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 for(const [width,height] of [[1280,720],[1920,1080]]){
  const page=await browser.newPage({viewport:{width,height}}),errors=[],external=[];const url=process.env.GAME_URL||pathToFileURL(resolve(__dirname,'../index.html')).href;
  page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()));page.on('request',r=>{if(!r.url().startsWith('file:')&&!r.url().startsWith(new URL(url).origin)&&!r.url().startsWith('blob:'))external.push(r.url());});
  const act=name=>page.locator(`[data-action="${name}"]`).first().click();
  await page.goto(url);await page.locator('[data-stage="0"]').click();
  const words=await page.locator('[data-phrase]').allTextContents();assert.equal(words.length,9);assert(words.includes('steaming foliage seems almost to writhe in fire'));
  const sizes=await page.locator('[data-phrase]').evaluateAll(nodes=>nodes.map(n=>parseFloat(getComputedStyle(n).fontSize)));assert(sizes.every(size=>size>=24&&size<=26));
  await page.locator('[data-phrase="0"]').click();await page.locator('[data-hotspot="1"]').click();assert.match(await page.locator('#announcement').innerText(),/Look again/);
  await page.locator('.text-return').click();assert.equal(await page.locator('.original-passage').textContent(),await page.evaluate(()=>CONTENT.paragraphs[1]));await act('back-evidence');
  await page.locator('#fullscreen').click();assert(await page.evaluate(()=>!!document.fullscreenElement));
  for(let i=0;i<9;i++){await page.locator(`[data-phrase="${i}"]`).click();await page.locator(`[data-hotspot="${i}"]`).click();assert.equal(await page.locator('.hotspot.matched').count(),i+1);}
  await page.locator('#fullscreen').click();assert(!(await page.evaluate(()=>!!document.fullscreenElement)));
  await page.locator('#landscape-fire').fill('The distant leaves seem to twist in intense summer heat as if burning; this is a comparison.');await page.locator('#landscape-brittle').fill('The grass is dry and brown and cracks beneath the feet.');
  for(let i=0;i<4;i++)await page.locator(`[data-reconstruction="${i}"][value="0"]`).check();await act('reconstruct');await page.locator('#landscape-overall').fill('The isolated hill and scattered objects create loneliness. Open space changes proportion and brings the imagination to life.');
  assert(await page.locator('[data-stage="1"]').isEnabled());assert.equal(await page.locator('#teacher').isChecked(),false);assert.equal(await page.locator('.landscape-complete').count(),1);assert(await page.locator('.landscape-complete').evaluate(el=>el.getAnimations().length>0));
  await page.locator('[data-stage="1"]').click();await page.waitForFunction(()=>document.querySelector('#walker-art').naturalWidth>0);await page.waitForTimeout(150);
  const start=await page.locator('#road-explorers').evaluate(el=>{const r=el.getBoundingClientRect();return {top:r.top,bottom:r.bottom,w:r.width,opacity:getComputedStyle(el).opacity};});assert(start.top>=0&&start.bottom<=height);assert(start.w>=80);assert.equal(start.opacity,'1');
  await page.screenshot({path:`/tmp/rainy-verification/start-${width}.png`});
  await act('map-sound');await page.waitForFunction(()=>audio?.state==='running');await page.waitForTimeout(400);
  // Capture the actual generated footstep PCM through an AnalyserNode (not speaker hearing).
  await page.evaluate(()=>{
   window.probe={events:[],rms:[],samples:[],leg:0,analyser:null};const original=audio.createBufferSource.bind(audio);
   audio.createBufferSource=()=>{const source=original(),nativeStart=source.start.bind(source);source.start=(...args)=>{probe.events.push({leg:probe.leg,time:audio.currentTime,elapsed:state().mapWalk?.elapsed,walking:document.querySelector('#road-explorers')?.classList.contains('is-walking'),sound:soundEnabled});if(!probe.analyser){probe.analyser=audio.createAnalyser();probe.analyser.fftSize=512;footstepOutput.connect(probe.analyser);}return nativeStart(...args);};return source;};
   window.probeTimer=setInterval(()=>{
    if(probe.analyser){const data=new Float32Array(probe.analyser.fftSize);probe.analyser.getFloatTimeDomainData(data);const rms=Math.sqrt(data.reduce((s,v)=>s+v*v,0)/data.length);probe.rms.push({leg:probe.leg,time:audio.currentTime,rms,sound:soundEnabled,walking:!!state().mapWalk,paused:!!state().mapWalk?.paused});}
    const el=document.querySelector('#road-explorers'),scene=document.querySelector('.map-scene'),walk=state().mapWalk;if(el&&scene&&walk){const r=el.getBoundingClientRect(),m=scene.getBoundingClientRect();probe.samples.push({leg:probe.leg,time:performance.now(),x:(r.x+r.width/2-m.x)/m.width*100,y:(r.bottom-m.y)/m.height*100,elapsed:walk.elapsed,pose:document.querySelector('#walker-art').style.transform,visible:r.top>=-1&&r.bottom<=innerHeight+1&&r.left>=m.left&&r.right<=m.right,position:state().mapPosition});}
   },35);
  });
  const durations=[];
  for(let gate=0;gate<5;gate++){
   await page.locator(`[data-checkpoint="${gate}"]`).first().click();assert(!/Checkpoint/.test(await page.locator('main').innerText()));
   const questions=await page.evaluate(i=>CONTENT.checkpoints[i].challenges,gate);
   for(let j=0;j<questions.length;j++){
    const q=questions[j];assert.equal(await page.locator('.teacher-notes').count(),0);assert(!/Correct Answer|Expected Textual Evidence|Teacher’s Guiding Question/.test(await page.locator('main').innerText()));
    assert(await page.locator('.challenge-question').evaluate(el=>parseFloat(getComputedStyle(el).fontSize)>=30));
    if(q.type!=='blanks')assert((await page.locator('.option').evaluateAll(nodes=>nodes.map(el=>parseFloat(getComputedStyle(el).fontSize)))).every(n=>n>=26));
    // Real wrong choices, not just an empty submission.
    if(q.type==='blanks'){for(let n=0;n<3;n++)await page.locator(`[data-route="${n}"]`).fill(['north','west','northern'][n]);}
    else {const wrong=q.options.findIndex((_,i)=>!q.answers.includes(i));await page.locator(`[data-answer="${wrong}"]`).check();}
    await act('check-answer');assert.match(await page.locator('#announcement').innerText(),/Dead end|Check Paragraph/);
    const before=await page.evaluate(()=>JSON.stringify(state()));await page.locator('.text-return').click();
    for(let n=0;n<q.refs.length;n++){assert.equal(await page.locator('.original-passage').textContent(),await page.evaluate(n=>CONTENT.paragraphs[n],q.refs[n]));assert(await page.locator('.original-passage').evaluate(el=>parseFloat(getComputedStyle(el).fontSize)>=26-0.5));await page.evaluate(()=>window.scrollTo(0,document.documentElement.scrollHeight));if(n<q.refs.length-1)await act('text-next');}
    await act('back-evidence');assert.equal(await page.evaluate(()=>JSON.stringify(state())),before);
    if(q.type==='blanks'){for(let n=0;n<3;n++)await page.locator(`[data-route="${n}"]`).fill(q.answers[n]);}
    else {if(q.type==='multi')for(const box of await page.locator('[data-answer]').all())await box.uncheck();for(const a of q.answers)await page.locator(`[data-answer="${a}"]`).check();}
    await act('check-answer');await page.locator('#evidence-response').fill('Our team identified the original wording, checked the paragraph reference, and discussed how it supports this interpretation.');await act('confirm-evidence');await act('next-challenge');
   }
   assert.match(await page.locator('main h2').innerText(),new RegExp(`Clue Card for Gate ${gate+1}!`));assert.equal(await page.locator('.clue-card').textContent(),await page.evaluate(i=>CONTENT.checkpoints[i].clue,gate));assert.equal(await page.locator('#checkpoint-final-final').count(),0);
   await page.evaluate(leg=>probe.leg=leg,gate);await act('continue-journey');await page.waitForFunction(()=>document.querySelector('#road-explorers')?.classList.contains('is-walking'));
   assert(await page.locator(`[data-checkpoint="${Math.min(4,gate+1)}"]`).first().isDisabled());
   await page.waitForTimeout(360);const during=await page.evaluate(()=>({events:probe.events.filter(e=>e.leg===probe.leg),walk:state().mapWalk,pose:document.querySelector('#walker-art').style.transform}));assert(during.events.length>0);assert(during.walk.elapsed>0);assert(during.pose.includes('rotate'));
   if(gate===0){
    await act('toggle-walk');assert.equal(await page.evaluate(()=>footstepVoices.size),0);const paused=await page.evaluate(()=>({elapsed:state().mapWalk.elapsed,count:probe.events.length}));await page.waitForTimeout(250);assert.equal(await page.evaluate(()=>state().mapWalk.elapsed),paused.elapsed);assert.equal(await page.evaluate(()=>probe.events.length),paused.count);await act('toggle-walk');
   }
   if(gate===1){
    const before=await page.evaluate(()=>roadPoint(state().mapWalk));await page.setViewportSize({width:width===1280?1920:1280,height:height===720?1080:720});await page.waitForTimeout(100);const after=await page.evaluate(()=>roadPoint(state().mapWalk));assert(Math.hypot(before[0]-after[0],before[1]-after[1])<3);await page.setViewportSize({width,height});
    await act('map-sound');assert.equal(await page.evaluate(()=>footstepVoices.size),0);const events=await page.evaluate(()=>probe.events.length);await page.waitForTimeout(450);assert.equal(await page.evaluate(()=>probe.events.length),events);assert(await page.locator('#road-explorers').evaluate(el=>el.classList.contains('is-walking')));await act('map-sound');
   }
   if(gate===2){await act('map-fullscreen');assert(await page.evaluate(()=>!!document.fullscreenElement));await page.waitForTimeout(160);assert(await page.locator('#road-explorers').evaluate(el=>{const r=el.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}));await act('map-fullscreen');}
   if(gate===3){
    const before=await page.evaluate(()=>state().mapWalk.elapsed);await page.locator('#home').click();assert.equal(await page.evaluate(()=>footstepVoices.size),0);const paused=await page.evaluate(()=>studentState.mapWalk.elapsed);assert(paused>=before);await page.waitForTimeout(180);assert.equal(await page.evaluate(()=>studentState.mapWalk.elapsed),paused);await page.locator('[data-stage="1"]').click();await page.waitForFunction(()=>document.querySelector('#road-explorers').classList.contains('is-walking'));
   }
   await page.screenshot({path:`/tmp/rainy-verification/walk-${width}-${gate+1}.png`});
   const duration=await page.evaluate(()=>state().mapWalk.duration);durations.push(Math.round(duration));await page.waitForFunction(()=>!state().mapWalk,{},{timeout:15000});assert.equal(await page.evaluate(()=>footstepVoices.size),0);const count=await page.evaluate(()=>probe.events.length);await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>probe.events.length),count);
   const stats=await page.evaluate(leg=>({events:probe.events.filter(e=>e.leg===leg),rms:Math.max(...probe.rms.filter(e=>e.leg===leg&&e.walking&&e.sound&&!e.paused).map(e=>e.rms)),samples:probe.samples.filter(s=>s.leg===leg)}),gate);
   assert(stats.events.length>=4);assert(stats.events.every(e=>e.walking&&e.sound));assert(stats.rms>.001,`No rendered audio for leg ${gate+1}`);assert(stats.samples.length>20);assert(stats.samples.every(s=>s.visible),`Explorer left viewport on leg ${gate+1}`);assert(new Set(stats.samples.map(s=>s.pose)).size>4);
   for(let i=1;i<stats.samples.length;i++){const a=stats.samples[i-1],c=stats.samples[i];if(c.time-a.time<120)assert(Math.hypot(c.x-a.x,c.y-a.y)<3,'Movement jumped');}
   assert.equal(await page.evaluate(()=>state().mapPosition),gate+1);assert.equal(await page.evaluate(()=>state().checkpoints.filter(c=>c.complete).length),gate+1);
  }
  // Muted travel must remain visible and silent for an entire additional walk.
  await act('map-sound');await page.locator('[data-checkpoint="3"]').first().click();const mutedStart=await page.evaluate(()=>probe.events.length);await act('continue-journey');await page.waitForFunction(()=>document.querySelector('#road-explorers')?.classList.contains('is-walking'));await page.waitForFunction(()=>!state().mapWalk,{},{timeout:25000});assert.equal(await page.evaluate(()=>probe.events.length),mutedStart);assert.equal(await page.evaluate(()=>footstepVoices.size),0);
  assert.deepEqual(errors,[]);assert.deepEqual(external,[]);console.log(`PASS ${width}×${height}: nine expressions and Stage 2 unlock; 14 real wrong/correct answers; all evidence and five approved clue rewards; visible starting explorers and five road walks (${durations.join('/')}ms); stepping poses; rendered footstep PCM on every leg; pause/mute/unmute/navigation cancellation; resize/fullscreen continuity; zero external requests or runtime/resource errors.`);
  await page.evaluate(()=>clearInterval(probeTimer));await page.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
