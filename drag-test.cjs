// Pointer-controller checks with a minimal DOM. Browser/device rendering is separate.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');

function boot() {
  const handlers={},windowHandlers={},changes=[],frames=new Map(),captures=new Set();
  let time=0,nextFrame=0,hit=null,mutation;
  function node(classes='') {
    const tokens=new Set(classes.split(' ').filter(Boolean));
    return {className:classes,dataset:{},style:{},children:[],isConnected:true,offsetWidth:280,offsetHeight:280,
      classList:{add:x=>tokens.add(x),remove:x=>tokens.delete(x),contains:x=>tokens.has(x)},
      setAttribute(){},removeAttribute(){},append(...nodes){this.children.push(...nodes);},
      remove(){this.isConnected=false;},focus(){this.focused=true;},
      getBoundingClientRect:()=>({left:30,top:200,width:280,height:280}),
      cloneNode:()=>node(classes),closest(){return null;}};
  }
  const root=node(),body=node(),card=node('task sticky-note'),grip=node(),button=node();
  card.dataset.id='assignment';grip.dataset.dragHandle='assignment';
  card.closest=s=>s==='.task[data-id]'?card:null;
  grip.closest=s=>s==='[data-drag-handle]'?grip:s==='.task[data-id]'?card:s==='button, a, input, select, textarea'?grip:null;
  button.closest=s=>s==='.task[data-id]'?card:s==='button, a, input, select, textarea'?button:null;
  root.setPointerCapture=id=>captures.add(id);root.hasPointerCapture=id=>captures.has(id);root.releasePointerCapture=id=>captures.delete(id);
  const document={body,documentElement:root,hidden:false,createElement:()=>node(),
    querySelector:s=>s==='dialog[open]'?null:node(),querySelectorAll:()=>[grip],
    elementFromPoint:()=>hit,addEventListener:(type,fn)=>(handlers[type]??=[]).push(fn)};
  const task={id:'assignment',title:'Write essay',priority:'High',completed:false};
  const window={innerWidth:390,scrollBy(){},addEventListener:(type,fn)=>windowHandlers[type]=fn,
    FocusFlowData:{snapshot:()=>[task],notify(){},changePriority(id,p){if(task.priority===p)return false;changes.push([id,p]);task.priority=p;return true;}}};
  vm.runInNewContext(fs.readFileSync(__dirname+'/dist/drag.js','utf8'),{document,window,performance:{now:()=>time},
    requestAnimationFrame:fn=>{frames.set(++nextFrame,fn);return nextFrame;},cancelAnimationFrame:id=>frames.delete(id),
    MutationObserver:class {constructor(fn){mutation=fn;}observe(){}},console});
  const event=(type,extra={})=>{const e={target:grip,button:0,isPrimary:true,pointerId:1,pointerType:'mouse',clientX:100,clientY:220,preventDefault(){this.prevented=true;},stopImmediatePropagation(){this.stopped=true;},...extra};for(const fn of handlers[type]||[])fn(e);return e;};
  const drop=p=>{hit=node();hit.dataset.dropPriority=p;hit.closest=()=>hit;return hit;};
  return {event,drop,task,card,grip,button,changes,root,captures,body,frames,document,windowHandlers,
    dock:body.children[0],status:body.children[1],mutate:()=>mutation(),
    miss:()=>{hit=null;},advance:()=>{time+=500;},tick:()=>{const batch=[...frames.values()];frames.clear();batch.forEach(fn=>fn());}};
}

test('mouse pickup follows pointer and drops to a highlighted priority',()=>{
  const a=boot();a.event('pointerdown');a.event('pointermove',{clientX:102});
  assert.equal(a.dock.hidden,true); // Small clicks do not start a drag.
  a.event('pointermove',{clientX:150});
  assert.equal(a.dock.hidden,false);assert.equal(a.card.classList.contains('drag-source'),true);
  const target=a.drop('Low');a.tick();
  assert.equal(target.classList.contains('drag-over'),true);
  assert.match(a.body.children[2].style.transform,/translate3d/);
  a.event('pointerup',{clientX:250,clientY:600});
  assert.deepEqual(a.changes,[['assignment','Low']]);assert.equal(a.dock.hidden,true);
  assert.equal(a.card.classList.contains('drag-source'),false);assert.equal(a.frames.size,0);assert.equal(a.captures.size,0);
  assert.equal(a.grip.focused,true);
  const undo=a.event('click',{target:{closest:()=>null},detail:1});assert.equal(undo.prevented,undefined); // The next real action must stay usable.
  const nextAction=a.event('click',{target:a.grip,detail:1});assert.equal(nextAction.prevented,undefined);
  const click=a.event('click',{target:a.root,detail:1});assert.equal(click.prevented,true);assert.equal(click.stopped,true);
});

test('cancel, outside release, lost capture, blur and source removal leave state unchanged',()=>{
  for(const reason of ['escape','pointercancel','outside','lostpointercapture','blur','removed','hidden']) {
    const a=boot();a.event('pointerdown');a.event('pointermove',{clientX:150});a.drop('Low');a.tick();
    if(reason==='escape')a.event('keydown',{key:'Escape'});
    else if(reason==='outside'){a.miss();a.event('pointerup');}
    else if(reason==='blur')a.windowHandlers.blur();
    else if(reason==='removed'){a.card.isConnected=false;a.mutate();}
    else if(reason==='hidden'){a.document.hidden=true;a.event('visibilitychange');}
    else a.event(reason,{target:a.root});
    assert.deepEqual(a.changes,[],reason);assert.equal(a.dock.hidden,true,reason);assert.equal(a.frames.size,0,reason);
    assert.equal(a.captures.size,0,reason);
  }
});

test('touch grip drags, while card body, buttons, completed tasks and secondary pointers stay usable',()=>{
  const a=boot();a.event('pointerdown',{target:a.card,pointerType:'touch'});a.event('pointermove',{clientX:150});assert.equal(a.dock.hidden,true);
  a.event('pointerdown',{target:a.button});a.event('pointermove',{clientX:150});assert.equal(a.dock.hidden,true);
  a.event('pointerdown',{isPrimary:false});a.event('pointermove',{clientX:150});assert.equal(a.dock.hidden,true);
  a.card.classList.add('done');a.event('pointerdown');a.event('pointermove',{clientX:150});assert.equal(a.dock.hidden,true);a.card.classList.remove('done');
  a.event('pointerdown',{pointerType:'touch'});a.event('pointermove',{clientX:150,pointerId:2});assert.equal(a.dock.hidden,true);
  a.event('pointermove',{clientX:150,pointerType:'touch'});
  a.event('lostpointercapture',{target:a.grip});assert.equal(a.dock.hidden,false); // Implicit touch capture transfers to the root.
  a.drop('Medium');a.event('pointerup',{pointerType:'touch'});
  assert.deepEqual(a.changes,[['assignment','Medium']]);
});

test('keyboard priority movement is bounded and restores grip focus',()=>{
  const a=boot();a.event('keydown',{key:'ArrowLeft'});assert.equal(a.changes.length,0);
  const e=a.event('keydown',{key:'ArrowRight'});assert.equal(e.prevented,true);assert.equal(e.stopped,true);
  assert.equal(a.task.priority,'Medium');assert.equal(a.grip.focused,true);
  a.event('keydown',{key:'End'});assert.equal(a.task.priority,'Low');a.event('keydown',{key:'Home'});assert.equal(a.task.priority,'High');
});
