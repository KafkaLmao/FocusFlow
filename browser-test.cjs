// Run against isolated, disposable browser profiles; never uses personal task data.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require(process.env.FOCUSFLOW_PLAYWRIGHT || 'playwright');

(async () => {
  const root = path.resolve(__dirname, 'dist');
  const artifacts = path.resolve(__dirname, '.test-artifacts');
  await fs.mkdir(artifacts, {recursive:true});
  const server = http.createServer(async (req, res) => {
    const file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname.replace(/\/$/, '/index.html'));
    if (!file.startsWith(root + path.sep)) {res.writeHead(403).end();return;}
    try {
      const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css'};
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      res.end(await fs.readFile(file));
    } catch {res.writeHead(404).end();}
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  const errors = [];
  try {
    browser = await chromium.launch({channel:'chrome',headless:true});
    const base = `http://127.0.0.1:${server.address().port}`;
    async function setup(options) {
      const context = await browser.newContext({colorScheme:'light',...options});
      // Avoid external font requests so screenshots/checks remain deterministic.
      await context.route('https://fonts.googleapis.com/**', route => route.abort());
      await context.addInitScript(() => {
        if (localStorage.getItem('focusflow.tasks.v1') !== null) return;
        const d = new Date();
        const deadline = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        localStorage.setItem('focusflow.tasks.v1', JSON.stringify([
          {id:'essay',title:'Draft the literature essay',notes:'Outline the argument and find supporting passages.',subject:'English',deadline,priority:'High',completed:false},
          {id:'math',title:'Finish the calculus problem set',subject:'Mathematics',deadline,priority:'High',completed:false},
          {id:'bio',title:'Read the cell division chapter',subject:'Biology',deadline,priority:'Low',completed:false}
        ]));
      });
      const page = await context.newPage();
      page.on('pageerror', e => errors.push(e.message));
      await page.goto(base);
      await page.waitForSelector('.slosh-gauge');
      return {context,page};
    }
    const priority = (page,id) => page.evaluate(id => window.FocusFlowData.snapshot().find(t=>t.id===id).priority,id);
    const savedPriority = (page,id) => page.evaluate(id => JSON.parse(localStorage.getItem('focusflow.tasks.v1')).find(t=>t.id===id).priority,id);
    async function noOverflow(page,label) {
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth),true,label);
    }
    async function beginMouse(page,id) {
      const grip = page.locator(`[data-drag-handle="${id}"]`);
      await grip.scrollIntoViewIfNeeded();
      const box = await grip.boundingBox();
      const x=box.x+box.width/2,y=box.y+box.height/2;
      await page.mouse.move(x,y);await page.mouse.down();await page.mouse.move(x+20,y+14,{steps:4});
      await page.waitForSelector('.priority-drop-bar:not([hidden])');
      assert.ok((await page.locator('.drag-preview .task-info').boundingBox()).width>100,'lifted note text needs readable width');
      assert.ok((await page.locator('.drag-preview').boundingBox()).height<450,'lifted note should keep its card proportions');
    }
    const frames = (page,count=8) => page.evaluate(count=>new Promise(resolve=>{
      const tick=()=>--count>0?requestAnimationFrame(tick):resolve();requestAnimationFrame(tick);
    }),count);
    async function checkDragLock(page) {
      const before=await page.evaluate(()=>scrollY);
      const binBox=await page.locator('.priority-drop-bar').boundingBox();
      const viewport=page.viewportSize();
      assert.ok(Math.abs(binBox.y+binBox.height/2-viewport.height/2)<2,'bins should be vertically centered');
      assert.ok(Math.abs(binBox.x+binBox.width/2-viewport.width/2)<10,'bins should be horizontally centered');
      assert.equal(await page.locator('.priority-bin svg').count(),3);
      assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).overflow),'hidden');
      assert.equal(await page.locator('html').evaluate(el=>el.classList.contains('lenis-stopped')||matchMedia('(prefers-reduced-motion: reduce)').matches),true);
      await page.mouse.move(viewport.width-30,viewport.height-2);
      await page.mouse.wheel(0,650);await page.keyboard.press('PageDown');
      await frames(page);
      assert.equal(await page.evaluate(()=>scrollY),before,'wheel, keyboard and bottom edge must not scroll during drag');
      await page.mouse.move(viewport.width-30,2);await frames(page);
      assert.equal(await page.evaluate(()=>scrollY),before,'top edge must not scroll during drag');
    }
    async function mouseDrop(page,id,next,board=false) {
      await beginMouse(page,id);
      const selector = board ? `.board-column[data-priority="${next}"]` : `.priority-drop-bar [data-drop-priority="${next}"]`;
      const box = await page.locator(selector).boundingBox();
      await page.mouse.move(box.x+box.width/2,box.y+Math.min(60,box.height/2),{steps:10});
      await page.waitForSelector(selector+'.drag-over');
      await page.mouse.up();
      await page.waitForFunction(({id,next})=>window.FocusFlowData.snapshot().find(t=>t.id===id).priority===next,{id,next});
      assert.equal(await savedPriority(page,id),next);
      assert.equal(await page.locator('.drag-preview').count(),0);
    }

    const {context:desktop,page} = await setup({viewport:{width:1440,height:1000}});
    assert.equal(await page.locator('#ambient-toggle').getAttribute('aria-pressed'),'false');
    assert.equal(await page.locator('#ambient-background canvas').count(),0);
    const gauge = await page.locator('.slosh-gauge').boundingBox();
    assert.equal(gauge.width,64);assert.equal(gauge.height,108);
    assert.equal(await page.locator('.priority.High').first().evaluate(el=>getComputedStyle(el).color),'rgb(169, 47, 47)');
    assert.equal(await page.locator('.priority.Low').first().evaluate(el=>getComputedStyle(el).color),'rgb(25, 113, 60)');
    await noOverflow(page,'desktop bulletin overflow');
    await page.screenshot({path:path.join(artifacts,'desktop-light.png'),fullPage:true});
    await page.locator('#mobile-theme').click();
    assert.equal(await page.locator('.priority.High').first().evaluate(el=>getComputedStyle(el).color),'rgb(244, 160, 154)');
    await page.screenshot({path:path.join(artifacts,'desktop-dark.png'),fullPage:true});
    await page.locator('#mobile-theme').click();

    await mouseDrop(page,'essay','Medium'); // Daily bulletin to floating bar.
    await page.locator('[data-undo]').click();assert.equal(await priority(page,'essay'),'High');
    await page.locator('[data-view="board"]').click();
    await mouseDrop(page,'essay','Low',true); // Real pointer capture to a board column.
    await page.reload();assert.equal(await priority(page,'essay'),'Low');
    await page.locator('[data-view="board"]').click();
    await page.locator('#priority-filter').selectOption('High');
    await mouseDrop(page,'math','Medium');
    assert.equal(await page.locator('#priority-filter').inputValue(),'');
    await beginMouse(page,'math');await checkDragLock(page);
    await page.screenshot({path:path.join(artifacts,'desktop-priority-bins.png')});
    await page.keyboard.press('Escape');await page.mouse.up();
    assert.equal(await priority(page,'math'),'Medium');
    assert.equal(await page.locator('.drag-preview').count(),0);
    const unlockedY=await page.evaluate(()=>scrollY);
    await page.mouse.wheel(0,150);await frames(page,20);
    assert.ok(await page.evaluate(()=>scrollY)>unlockedY,'wheel scrolling resumes after cancellation');
    await page.locator('[data-drag-handle="math"]').press('ArrowRight');assert.equal(await priority(page,'math'),'Low');
    await page.locator('#dashboard-layout').click();await mouseDrop(page,'essay','High');
    await noOverflow(page,'desktop list overflow');
    await page.locator('[data-toggle="essay"]').click();
    await page.waitForSelector('.completion-paper');
    assert.equal((await page.locator('.completion-paper').boundingBox()).width,220);
    await page.waitForSelector('.completion-paper',{state:'hidden'});
    assert.equal(await page.locator('#ring-percent').innerText(),'33%');
    await desktop.close();

    const {context:mobile,page:phone} = await setup({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
    await noOverflow(phone,'mobile bulletin overflow');
    await phone.screenshot({path:path.join(artifacts,'mobile-light.png'),fullPage:true});
    const session = await mobile.newCDPSession(phone);
    const touch = (type,x,y) => session.send('Input.dispatchTouchEvent',{type,touchPoints:type==='touchEnd'?[]:[{x,y}]});
    await phone.locator('[data-drag-handle="essay"]').scrollIntoViewIfNeeded();
    let box=await phone.locator('[data-drag-handle="essay"]').boundingBox();
    await touch('touchStart',box.x+box.width/2,box.y+box.height/2);
    await touch('touchMove',box.x+box.width/2,box.y+box.height/2+25);
    await phone.waitForSelector('.priority-drop-bar:not([hidden])');
    const lockedTouchY=await phone.evaluate(()=>scrollY);
    await touch('touchMove',380,2);await frames(phone);
    assert.equal(await phone.evaluate(()=>scrollY),lockedTouchY,'touch and top edge do not scroll during drag');
    await touch('touchMove',380,840);await frames(phone);
    assert.equal(await phone.evaluate(()=>scrollY),lockedTouchY,'touch and bottom edge do not scroll during drag');
    box=await phone.locator('.priority-drop-bar [data-drop-priority="Low"]').boundingBox();
    await touch('touchMove',box.x+box.width/2,box.y+box.height/2);
    await phone.waitForSelector('.priority-drop-zone.drag-over');
    const previewBox=await phone.locator('.drag-preview').boundingBox();
    const dockBox=await phone.locator('.priority-drop-bar').boundingBox();
    assert.ok(previewBox.y+previewBox.height<=dockBox.y,'lifted card must leave drop targets visible');
    await phone.screenshot({path:path.join(artifacts,'mobile-drag.png')});
    await touch('touchEnd');
    await phone.waitForFunction(()=>window.FocusFlowData.snapshot().find(t=>t.id==='essay').priority==='Low');
    assert.equal(await savedPriority(phone,'essay'),'Low');
    assert.equal(await phone.locator('.drag-preview').count(),0);
    assert.equal(await phone.locator('html').evaluate(el=>el.classList.contains('assignment-dragging')),false);

    // Swiping the body scrolls normally, rather than accidentally dragging.
    await phone.evaluate(()=>scrollTo(0,0));
    await phone.locator('[data-id="math"]').scrollIntoViewIfNeeded();
    box=await phone.locator('[data-id="math"]').boundingBox();
    const startY=Math.min(650,Math.max(250,box.y+130));
    const before=await phone.evaluate(()=>scrollY);
    await touch('touchStart',box.x+60,startY);
    for(let i=1;i<=6;i++)await touch('touchMove',box.x+60,startY-i*22);
    await touch('touchEnd');
    await phone.waitForFunction(before=>scrollY>before+20,before);
    assert.equal(await phone.locator('.priority-drop-bar').isVisible(),false);

    await phone.locator('#mobile-theme').click();
    await phone.screenshot({path:path.join(artifacts,'mobile-dark.png'),fullPage:true});
    await phone.locator('[data-view="board"]').click();await noOverflow(phone,'mobile board overflow');
    await phone.locator('#dashboard-layout').click();await noOverflow(phone,'mobile list overflow');
    await phone.setViewportSize({width:320,height:740});await noOverflow(phone,'320px list overflow');
    await phone.locator('#bulletin-layout').click();await noOverflow(phone,'320px bulletin overflow');
    await beginMouse(phone,'math');await noOverflow(phone,'320px priority bins overflow');
    const compactBins=await phone.locator('.priority-drop-bar').boundingBox();
    assert.ok(compactBins.x>=0&&compactBins.x+compactBins.width<=320,'all priority bins fit on a small phone');
    await phone.screenshot({path:path.join(artifacts,'mobile-small-priority-bins-dark.png')});
    await phone.keyboard.press('Escape');await phone.mouse.up();
    await phone.emulateMedia({reducedMotion:'reduce'});
    await phone.locator('[data-toggle="bio"]').click();
    assert.equal(await phone.locator('.completion-paper').count(),0);
    assert.equal(await phone.locator('#ambient-background canvas').count(),0);
    await mobile.close();
    assert.deepEqual(errors,[],'uncaught browser errors');
    console.log('PASS: Chrome desktop + mobile emulation; centered priority bins, drag scroll locking/unlocking, priority colors, quiet defaults, gauge sizing, mouse/board/touch drag, persistence, Undo, filter handling, Escape, keyboard, native touch scroll, completion, reduced motion and overflow down to 320px.');
    console.log('Screenshots: .test-artifacts/ (physical phone testing is separate).');
  } finally {
    await browser?.close();
    await new Promise(resolve=>server.close(resolve));
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
