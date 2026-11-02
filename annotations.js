'use strict';
// Local, non-destructive ink. Each screen has its own undo/redo history.
window.Annotations = (() => {
  const NS='http://www.w3.org/2000/svg', screens=new Map();
  let key='', svg=null, main=null, teacher=false, opened=false, tool='interact', draft=null, observer=null, frame=0;
  let anchors=[];
  const byId=id=>document.getElementById(id);
  const history=()=>{if(!screens.has(key))screens.set(key,{items:[],undo:[],redo:[]});return screens.get(key);};
  const copy=value=>JSON.parse(JSON.stringify(value));
  function snapshot(){const h=history();h.undo.push(copy(h.items));h.redo=[];}
  function commit(item){snapshot();history().items.push(item);draw();}
  function settings(){return {color:byId('ink-color').value,size:Number(byId('ink-size').value)};}
  function updateButtons(){const h=history();byId('ink-undo').disabled=!h.undo.length;byId('ink-redo').disabled=!h.redo.length;}
  function selectMode(value){tool=value;byId('ink-tool').value=value;if(svg){svg.style.pointerEvents=teacher&&opened&&value!=='interact'?'all':'none';svg.style.touchAction=value==='interact'?'auto':'none';}byId('annotation-toggle').setAttribute('aria-expanded',String(opened));document.dispatchEvent(new CustomEvent('rainy-ink-mode',{detail:{drawing:teacher&&opened&&value!=='interact'}}));}
  function show(value){opened=value&&teacher;byId('annotation-toolbar').hidden=!opened;document.body.classList.toggle('ink-tools-open',opened);selectMode('interact');}
  function hash(text){let h=2166136261;for(const c of text)h=Math.imul(h^c.charCodeAt(0),16777619);return (h>>>0).toString(36);}
  function prepareAnchors(){
    // Word anchors reflow with the original text. Whitespace and wording are unchanged.
    const used=new Map();
    main.querySelectorAll('p,h2,h3,h4,li,.option > span,.clue-card').forEach(el=>{
      if(el.closest('svg,button,summary')||el.querySelector('input,textarea,select,p,h2,h3,h4,li'))return;
      const base=el.dataset.inkRegion||hash(el.textContent),count=used.get(base)||0;used.set(base,count+1);
      const region=`${base}:${count}`;
      if(el.querySelector('[data-ink-word]'))return;
      const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[];
      while(walker.nextNode())if(walker.currentNode.textContent.trim())nodes.push(walker.currentNode);
      let n=0;for(const node of nodes){const fragment=document.createDocumentFragment();
        for(const part of node.textContent.split(/(\s+)/)){if(!part)continue;if(/^\s+$/.test(part))fragment.append(document.createTextNode(part));else{const span=document.createElement('span');span.dataset.inkWord=`${region}:w${n++}`;span.textContent=part;fragment.append(span);}}
        node.replaceWith(fragment);
      }
    });
    main.querySelectorAll('img').forEach((el,i)=>el.dataset.inkImage=el.id||`${el.getAttribute('src')}:${i}`);
    main.querySelectorAll('.scene,.tree-art,.panel').forEach((el,i)=>el.dataset.inkBlock=`block:${el.id||el.className}:${i}`);
    measureAnchors();
  }
  function measureAnchors(){
    anchors=[...main.querySelectorAll('[data-ink-word],[data-ink-image],[data-ink-block]')].filter(el=>el.getClientRects().length).map(el=>({el,id:el.dataset.inkWord||el.dataset.inkImage||el.dataset.inkBlock,image:!!el.dataset.inkImage,block:!!el.dataset.inkBlock,rect:el.getBoundingClientRect()}));
  }
  function point(event){
    const x=event.clientX,y=event.clientY;measureAnchors();
    // Prefer text near the pointer; use normalized image coordinates elsewhere.
    let best=null,distance=Infinity;
    for(const a of anchors.filter(a=>!a.image&&!a.block)){const r=a.rect;const dx=Math.max(r.left-x,0,x-r.right),dy=Math.max(r.top-y,0,y-r.bottom);const d=dx*dx+dy*dy;if(d<distance){distance=d;best=a;}}
    if(distance>900){const image=anchors.find(a=>a.image&&x>=a.rect.left&&x<=a.rect.right&&y>=a.rect.top&&y<=a.rect.bottom);if(image)best=image;else {const block=anchors.filter(a=>a.block&&x>=a.rect.left&&x<=a.rect.right&&y>=a.rect.top&&y<=a.rect.bottom).sort((a,b)=>a.rect.width*a.rect.height-b.rect.width*b.rect.height)[0];if(block)best=block;else if(distance>10000)best=null;}}
    if(best){const r=best.rect;return {anchor:best.id,u:(x-r.left)/Math.max(1,r.width),v:(y-r.top)/Math.max(1,r.height)};}
    const r=main.getBoundingClientRect();return {anchor:null,u:(x-r.left)/r.width,v:(y-r.top)/Math.max(1,main.scrollHeight)};
  }
  function position(p){
    const base=main.getBoundingClientRect();
    if(p.anchor){const a=anchors.find(a=>a.id===p.anchor);if(!a)return null;const r=a.el.getBoundingClientRect();return {x:r.left-base.left+p.u*r.width,y:r.top-base.top+p.v*r.height};}
    return {x:p.u*base.width,y:p.v*main.scrollHeight};
  }
  function element(name,attrs){const e=document.createElementNS(NS,name);for(const [k,v]of Object.entries(attrs))e.setAttribute(k,String(v));return e;}
  function shape(item,index){
    const points=item.points.map(position).filter(Boolean);if(!points.length)return null;
    const first=points[0],last=points.at(-1),common={stroke:item.color,'stroke-width':item.size,fill:'none','stroke-linecap':'round','stroke-linejoin':'round','data-ink-index':index};
    if(item.tool==='ellipse')return element('ellipse',{...common,cx:(first.x+last.x)/2,cy:(first.y+last.y)/2,rx:Math.max(2,Math.abs(last.x-first.x)/2),ry:Math.max(2,Math.abs(last.y-first.y)/2)});
    if(item.tool==='rectangle')return element('rect',{...common,x:Math.min(first.x,last.x),y:Math.min(first.y,last.y),width:Math.max(2,Math.abs(last.x-first.x)),height:Math.max(2,Math.abs(last.y-first.y))});
    if(item.tool==='underline'){
      const words=anchors.filter(a=>!a.image&&!a.block),start=words.findIndex(a=>a.id===item.points[0].anchor),end=words.findIndex(a=>a.id===item.points.at(-1).anchor);
      if(start>=0&&end>=0&&Math.abs(words[start].rect.top-words[end].rect.top)>5){
        const base=main.getBoundingClientRect(),offset=first.y-(words[start].rect.bottom-base.top),rows=[];
        for(const a of words.slice(Math.min(start,end),Math.max(start,end)+1)){
          const r=a.el.getBoundingClientRect();let row=rows.find(row=>Math.abs(row.y-(r.bottom-base.top+offset))<3);
          if(!row){row={y:r.bottom-base.top+offset,left:r.left-base.left,right:r.right-base.left};rows.push(row);}else{row.left=Math.min(row.left,r.left-base.left);row.right=Math.max(row.right,r.right-base.left);}
        }
        return element('path',{...common,d:rows.map(row=>`M ${row.left} ${row.y} L ${row.right} ${row.y}`).join(' ')});
      }
      return element('path',{...common,d:`M ${first.x} ${first.y} L ${last.x} ${first.y}`});
    }
    if(item.tool==='arrow'){
      const angle=Math.atan2(last.y-first.y,last.x-first.x),length=16+item.size;
      return element('path',{...common,d:`M ${first.x} ${first.y} L ${last.x} ${last.y} M ${last.x-length*Math.cos(angle-.45)} ${last.y-length*Math.sin(angle-.45)} L ${last.x} ${last.y} L ${last.x-length*Math.cos(angle+.45)} ${last.y-length*Math.sin(angle+.45)}`});
    }
    return element('polyline',{...common,points:points.map(p=>`${p.x},${p.y}`).join(' '),opacity:item.tool==='highlighter'?.3:1,'stroke-width':item.tool==='highlighter'?item.size*4:item.size});
  }
  function draw(){
    if(!svg||!svg.isConnected)return;
    svg.setAttribute('width',main.clientWidth);svg.setAttribute('height',main.scrollHeight);svg.replaceChildren();
    history().items.forEach((item,i)=>{const node=shape(item,i);if(node)svg.append(node);});
    if(draft){const node=shape(draft,-1);if(node)svg.append(node);}
    updateButtons();
  }
  function schedule(){cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{if(main&&svg?.isConnected){measureAnchors();draw();}});}
  function erase(event){
    const r=svg.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top;
    // Vector hit testing includes transparent fills for circles/rectangles and widened strokes.
    const nodes=[...svg.children].reverse();
    for(const node of nodes){const p=svg.createSVGPoint();p.x=x;p.y=y;let hit=false;
      if(node.isPointInStroke)hit=node.isPointInStroke(p);
      if(!hit&&node.isPointInFill)hit=node.isPointInFill(p);
      if(!hit){const b=node.getBBox();hit=x>=b.x-8&&x<=b.x+b.width+8&&y>=b.y-8&&y<=b.y+b.height+8&&Math.max(b.width,b.height)<24;}
      if(hit){snapshot();history().items.splice(Number(node.dataset.inkIndex),1);draw();return;}
    }
  }
  function mount(screenKey){
    key=screenKey;main=byId('adventure');observer?.disconnect();draft=null;
    main.querySelector('.annotation-overlay')?.remove();prepareAnchors();
    svg=element('svg',{class:'annotation-overlay','aria-label':'Teacher drawing overlay'});main.append(svg);selectMode('interact');
    svg.addEventListener('pointerdown',event=>{
      if(!teacher||!opened||tool==='interact'||event.button>0)return;event.preventDefault();
      if(tool==='eraser'){erase(event);return;}
      svg.setPointerCapture(event.pointerId);draft={tool,...settings(),points:[point(event)]};draw();
    });
    svg.addEventListener('pointermove',event=>{
      if(!draft)return;event.preventDefault();
      const p=point(event);if(['pen','highlighter'].includes(draft.tool))draft.points.push(p);else draft.points=[draft.points[0],p];draw();
    });
    svg.addEventListener('pointerup',event=>{if(!draft)return;draft.points.push(point(event));const item=draft;draft=null;commit(item);});
    svg.addEventListener('pointercancel',()=>{draft=null;draw();});
    observer=new ResizeObserver(schedule);observer.observe(main);main.querySelectorAll('img').forEach(img=>img.addEventListener('load',schedule,{once:true}));
    main.removeEventListener('toggle',schedule,true);main.addEventListener('toggle',schedule,true);draw();
  }
  function init(){
    document.querySelector('header').append(byId('annotation-toolbar'));
    byId('annotation-toggle').addEventListener('click',()=>show(!opened));byId('ink-hide').addEventListener('click',()=>show(false));
    byId('ink-tool').addEventListener('change',e=>selectMode(e.target.value));
    byId('ink-size').addEventListener('input',e=>byId('ink-size-value').textContent=e.target.value);
    byId('ink-undo').addEventListener('click',()=>{const h=history();if(!h.undo.length)return;h.redo.push(copy(h.items));h.items=h.undo.pop();draw();});
    byId('ink-redo').addEventListener('click',()=>{const h=history();if(!h.redo.length)return;h.undo.push(copy(h.items));h.items=h.redo.pop();draw();});
    byId('ink-clear').addEventListener('click',()=>byId('ink-clear-dialog').showModal());
    byId('ink-clear-cancel').addEventListener('click',()=>byId('ink-clear-dialog').close());
    byId('ink-clear-confirm').addEventListener('click',()=>{snapshot();history().items=[];byId('ink-clear-dialog').close();draw();});
    window.addEventListener('resize',schedule);window.addEventListener('scroll',schedule,true);document.addEventListener('fullscreenchange',schedule);
  }
  document.addEventListener('DOMContentLoaded',init,{once:true});
  return {mount,refresh:schedule,setTeacher(value){teacher=value;if(!value)show(false);},clearJourney(prefix){for(const k of screens.keys())if(k.startsWith(prefix))screens.delete(k);},count(){return history().items.length;}};
})();
