const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const key = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const today = key(new Date());
const offset = n => {const d=new Date();d.setDate(d.getDate()+n);return key(d);};
const stamp = new Date().toISOString();
const fixture = [
  {id:'overdue',title:'Overdue essay',subject:'English',deadline:offset(-1),priority:'High',completed:false},
  {id:'due',title:'Due today',subject:'Math',deadline:today,priority:'Medium',completed:false},
  {id:'future',title:'Future research',notes:'Find primary sources',subject:'English',deadline:offset(1),priority:'Low',completed:false},
  {id:'done',title:'Finished today',subject:'Math',deadline:offset(-1),priority:'High',completed:true,completedAt:stamp},
  {id:'legacy',title:'Older completed task',subject:'Math',deadline:today,priority:'Low',completed:true}
];
function boot() {
  const nodes=new Map(),listeners={},windowListeners={},stored=new Map([['focusflow.tasks.v1',JSON.stringify(fixture)]]);
  function $(id) {
    if(!nodes.has(id)) nodes.set(id,{value:'',checked:false,textContent:'',innerHTML:'',dataset:{},hidden:false,childNodes:[{textContent:''}],style:{setProperty(){}},classList:{add(){},remove(){},toggle(){}},attributes:{},setAttribute(k,v){this.attributes[k]=v;},reset(){},focus(){this.focused=true;},showModal(){},close(){}});
    return nodes.get(id);
  }
  const nav=['today','all','board','completed'].map(view=>{const el=$('nav-'+view);el.dataset.view=view;return el;});
  const document={querySelector:s=>s==='dialog[open]'?null:$(s),querySelectorAll:s=>s==='[data-view]'?nav:[],documentElement:{dataset:{},style:{}},addEventListener:(k,f)=>listeners[k]=f};
  const localStorage={getItem:k=>stored.get(k)??null,setItem:(k,v)=>stored.set(k,v)};
  const window={addEventListener:(k,f)=>windowListeners[k]=f};
  const ctx={window,document,localStorage,crypto:require('node:crypto').webcrypto,Date,matchMedia:()=>({matches:false}),setTimeout:()=>1,clearTimeout(){},setInterval(){}};
  for(const file of ['task-data.js','app.js'])vm.runInNewContext(fs.readFileSync(__dirname+'/dist/'+file,'utf8'),ctx);
  const click=(selector,dataset,extra={})=>listeners.click({target:{closest:s=>s===selector?{dataset,...extra}:null}});
  return {$,nav,window,stored,localStorage,click,go:view=>nav.find(el=>el.dataset.view===view).onclick(),tasks:()=>JSON.parse(stored.get('focusflow.tasks.v1'))};
}
const app=boot();
assert.equal(app.$('#list-count').textContent,4); // Overdue, due, done today, legacy target.
app.go('all');assert.equal(app.$('#list-count').textContent,5);
app.go('completed');assert.equal(app.$('#list-count').textContent,2);
app.go('board');assert.equal(app.$('#list-count').textContent,3);
app.go('all');
app.click('[data-plan]',{plan:'future'});
assert.equal(app.tasks().find(t=>t.id==='future').plannedFor,today);
assert.equal(app.tasks().find(t=>t.id==='future').deadline,offset(1));
app.go('today');assert.equal(app.$('#list-count').textContent,5);assert.equal(app.$('#progress-text').textContent,'1 of 3');
app.click('[data-undo]',{});assert.equal(app.tasks().find(t=>t.id==='future').plannedFor,undefined);assert.equal(app.$('#progress-text').textContent,'1 of 2');
app.go('all');app.click('[data-toggle]',{toggle:'future'},{closest:()=>null});
assert.ok(app.tasks().find(t=>t.id==='future').completedAt);
app.go('today');assert.match(app.$('#tasks').innerHTML,/Future research/);
app.click('[data-undo]',{});assert.equal(app.tasks().find(t=>t.id==='future').completedAt,undefined);
app.go('all');app.click('[data-edit]',{edit:'done'});app.$('#task-title').value='Updated completed task';app.$('#task-form').onsubmit({preventDefault(){}});
assert.equal(app.tasks().find(t=>t.id==='done').completedAt,stamp);
const month=app.$('#calendar-title').textContent;app.$('#calendar-prev').onclick();assert.notEqual(app.$('#calendar-title').textContent,month);app.$('#calendar-next').onclick();assert.equal(app.$('#calendar-title').textContent,month);
app.click('[data-date]',{date:offset(1)});assert.equal(app.$('#list-count').textContent,1);assert.match(app.$('#filter-summary').textContent,/Due /);
app.$('#add-task').onclick();assert.equal(app.$('#task-deadline').value,offset(1));
app.$('#clear-filters').onclick();assert.equal(app.$('#list-count').textContent,5);
app.$('#search').oninput({target:{value:'primary sources'}});assert.equal(app.$('#list-count').textContent,1);
app.go('all');assert.equal(app.$('#list-count').textContent,5);assert.equal(app.$('#search').value,'');
app.$('#sort-tasks').onchange({target:{value:'priority'}});assert.ok(app.$('#tasks').innerHTML.indexOf('data-id="overdue"')<app.$('#tasks').innerHTML.indexOf('data-id="future"'));
const model=app.window.FocusFlowModel;
assert.equal(model.validDate('2026-02-31'),false);assert.equal(model.validDate('2028-02-29'),true);
assert.throws(()=>model.parseBackup('{bad json'));
assert.throws(()=>model.parseBackup(JSON.stringify({format:'other',tasks:fixture})));
assert.throws(()=>model.parseBackup(JSON.stringify([fixture[0],fixture[0]])));
const newTask={...fixture[0],id:'imported',title:'Restored assignment'};
const restored=model.parseBackup(JSON.stringify({format:'focusflow',version:1,tasks:[newTask]}));
assert.equal(app.window.FocusFlowData.merge(restored),1);assert.equal(app.tasks().length,6);
assert.equal(app.window.FocusFlowData.merge(restored),0);assert.equal(app.tasks().length,6);
assert.throws(()=>app.window.FocusFlowData.merge([{...newTask,deadline:'2026-02-31'}]));
const before=JSON.stringify(app.window.FocusFlowData.snapshot());
app.localStorage.setItem=()=>{throw new Error('full');};
assert.throws(()=>app.window.FocusFlowData.merge([{...newTask,id:'not-saved'}]));
assert.equal(JSON.stringify(app.window.FocusFlowData.snapshot()),before);
console.log('PASS: daily planning, unchanged deadlines, completion history/undo, all/completed/board scopes, calendar navigation/filtering, notes search, sorting, validation and atomic backup merge.');
