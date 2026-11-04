const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const offline=require('./offline-harness.cjs');
const titles=['Textual Understanding','Understanding Cultural Identity','Chinese Cultural Exploration and Reflection','Transfer to Teaching Practice'];
const descriptions=[
 'Understand key vocabulary, expressions, and complex sentences in the text; identify key information and organize textual clues to interpret the text.',
 'Synthesize textual evidence to identify Momaday’s cultural roots and explain how these roots shape his cultural identity.',
 'Explore one aspect of their own Chinese cultural roots and reflect on its personal significance through lived experiences.',
 'Evaluate the AI-assisted gamified and interactive teaching approaches experienced in class and apply selected strategies in a microteaching activity.'
];
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 for(const [width,height] of [[1280,720],[1366,768],[1920,1080],[390,844]])for(const mode of ['rehearsal','teacher']){
 const c=await browser.newContext({viewport:{width,height},offline:true});await offline.install(c,path.resolve(__dirname,'..'));
 const p=await c.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(offline.url);const act=n=>p.locator(`[data-action="${n}"]`).first().click();
 assert.deepEqual(await p.locator('.objective-title').allTextContents(),titles);assert.deepEqual(await p.locator('.objective-description').allTextContents(),descriptions);
 assert((await p.locator('.objective-description').evaluateAll(es=>es.every(e=>parseFloat(getComputedStyle(e).fontSize)>=25))));
 assert(await p.locator('.learning-objectives li').evaluateAll(es=>es.every(e=>e.scrollHeight<=e.clientHeight+1)));
 assert(!(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)));
 if(mode==='teacher'&&width!==390)await p.screenshot({path:`/tmp/rainy-objectives-${width}.png`,fullPage:true});
 await p.evaluate(mode=>{teacher=mode==='rehearsal';presenter=mode==='teacher';currentStage=2;const s=state();s.checkpoints.forEach(c=>c.complete=true);s.keys.forEach(k=>k.unlocked=true);s.gateOpen=true;s.presentation='landscape';s.roots=3;s.trunk=true;s.presentationStep='growth';render();},mode);
 async function discussion(){const d=p.locator('[data-sheet="discussion"]');if(!(await d.evaluate(e=>e.open)))await d.locator('summary').first().click();}
 await discussion();assert.equal(await p.locator('.presentation-prompt').innerText(),'How can we deepen and develop our cultural identity?');assert(!/four canopy|Writing|Storytelling|Language|Cultural Exchange/.test(await p.locator('.presentation-discussion').innerText()));await p.locator('[data-sheet="discussion"] .close-sheet').click();
 for(let i=0;i<2;i++){await act('reveal-canopy');assert.equal(await p.locator('.phase3-leaf').count(),i+1);assert.equal(await p.locator('.canopy-piece').count(),i+1);assert.equal(await p.locator('[data-action="show-assignment"]').count(),i===1?1:0);}
 assert.deepEqual(await p.locator('.phase3-leaf').allTextContents(),['Cultural Exploration','Cultural Reflection']);assert.equal(await p.locator('[data-action="reveal-canopy"]').count(),0);
 await p.evaluate(()=>ACTIONS['reveal-canopy']());assert.equal(await p.evaluate(()=>state().canopy),2);
 await p.waitForTimeout(900);if(mode==='teacher'&&width!==390)await p.screenshot({path:`/tmp/rainy-crown-${width}.png`});
 await act('show-assignment');assert.equal(await p.locator('.assignment-screen h3').innerText(),'Task 1 — My Chinese Cultural Roots');assert.equal(await p.locator('.assignment-question').innerText(),'Explore one aspect of your Chinese cultural roots.');
 assert.deepEqual(await p.locator('.assignment-screen ol li').allTextContents(),['What specific aspect of your Chinese cultural roots would you like to explore?','How is it connected to your personal experiences and cultural identity?','Why is it meaningful to you?']);
 assert.equal(await p.locator('.assignment-task').innerText(),'Prepare a 2–3-minute personal reflection with specific examples from your own life. Share it in the next class.');assert.equal(await p.locator('.assignment-screen details').count(),0);
 let task1Ink=0;
 if(mode==='teacher'){
  await p.locator('#annotation-toggle').click();await p.locator('#ink-tool').selectOption('pen');const r=await p.locator('.assignment-screen h3').boundingBox();await p.mouse.move(r.x+20,r.y+20);await p.mouse.down();await p.mouse.move(r.x+100,r.y+20,{steps:5});await p.mouse.up();task1Ink=await p.evaluate(()=>Annotations.count());assert.equal(task1Ink,1);await p.locator('#ink-tool').selectOption('interact');await p.locator('#ink-hide').click();
 }
 if(mode==='teacher'&&width!==390)await p.screenshot({path:`/tmp/rainy-task1-${width}.png`,fullPage:true});
 await act('assignment-next');assert.equal(await p.locator('.assignment-screen h3').innerText(),'Task 2 — From Evaluation to Teaching Practice');
 assert.deepEqual(await p.locator('.lesson-steps h4').allTextContents(),['Evaluate & Observe','Collaborative Lesson Design','Microteaching Practice']);
 assert.deepEqual(await p.locator('.lesson-steps p').allTextContents(),['Complete the learning evaluation and classroom observation questionnaire on Chaoxing Learning Platform.','Work in four groups to select a teaching focus from the text, set clear learning objectives, and design a microteaching lesson using AI-assisted gamified learning and interactive teaching approaches.','Deliver a 15-minute group microteaching session in the next class.']);
 assert.equal(await p.locator('.assignment-screen input,.assignment-screen textarea,.assignment-screen details').count(),0);
 if(mode==='teacher'){assert.equal(await p.evaluate(()=>Annotations.count()),0);}
 assert(!(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)));
 assert(await p.locator('.lesson-steps li').evaluateAll(es=>es.every(e=>e.scrollWidth<=e.clientWidth+1)));
 if(mode==='teacher'&&width!==390)await p.screenshot({path:`/tmp/rainy-task2-${width}.png`,fullPage:true});
 await act('assignment-previous');if(mode==='teacher')assert.equal(await p.evaluate(()=>Annotations.count()),task1Ink);
 await act('return-tree');assert.equal(await p.locator('.phase3-root').count(),3);assert.equal(await p.locator('.phase3-leaf').count(),2);
 assert.deepEqual(errors,[]);console.log('PASS requested teaching updates:',width,height,mode);await c.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
