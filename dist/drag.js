(() => {
  'use strict';
  const priorities = ['High', 'Medium', 'Low'];
  const dock = document.createElement('div');
  dock.className = 'priority-drop-bar';
  dock.hidden = true;
  dock.setAttribute('aria-label', 'Drop assignment to change priority');
  dock.innerHTML = '<p>Drop a note into a priority bin <span>Esc to cancel</span></p><div>' +
    priorities.map(p => `<div class="priority-drop-zone" data-drop-priority="${p}" aria-label="${p} priority bin"><div class="priority-bin"><svg viewBox="0 0 140 148" aria-hidden="true"><ellipse class="bin-shadow" cx="70" cy="139" rx="45" ry="5"/><path class="bin-body" d="M24 38h92l-11 91c-22 10-48 10-70 0Z"/><path class="bin-ribs" d="m46 55 5 69m19-67v71m24-73-5 69"/><ellipse class="bin-rim" cx="70" cy="38" rx="48" ry="12"/><ellipse class="bin-opening" cx="70" cy="37" rx="39" ry="6"/><g class="bin-paper"><rect x="55" y="5" width="30" height="38" rx="3"/><path d="M62 16h16m-16 7h16m-16 7h10"/></g></svg><span class="priority ${p}">${p}</span></div><small>Drop note here</small></div>`).join('') + '</div>';
  const status = document.createElement('div');
  status.className = 'drag-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  document.body.append(dock, status);

  let gesture = null;
  let suppressClickUntil = 0;
  let frame = 0;
  const taskFor = id => window.FocusFlowData.snapshot().find(t => t.id === id);

  function targetAt(x, y) {
    return document.elementFromPoint(x, y)?.closest('[data-drop-priority]') || null;
  }

  function highlight(target) {
    if (gesture.target === target) return;
    gesture.target?.classList.remove('drag-over');
    gesture.target = target;
    target?.classList.add('drag-over');
    gesture.preview.dataset.over = target ? 'true' : 'false';
    if (target) status.textContent = `Release to set ${target.dataset.dropPriority.toLowerCase()} priority.`;
  }

  function start() {
    const g = gesture;
    const rect = g.card.getBoundingClientRect();
    const width = Math.min(rect.width, 340, window.innerWidth - 32);
    g.offsetX = Math.min(width - 16, Math.max(16, (g.startX - rect.left) * width / rect.width));
    g.offsetY = Math.min(55, Math.max(16, g.startY - rect.top));
    g.preview = document.createElement('div');
    g.preview.className = 'drag-preview ' + (g.card.classList.contains('sticky-note') ? 'note-grid' : 'board');
    g.preview.style.width = width + 'px';
    g.preview.setAttribute('aria-hidden', 'true');
    g.preview.setAttribute('inert', '');
    const clone = g.card.cloneNode(true);
    clone.removeAttribute('data-id');
    g.preview.append(clone);
    document.body.append(g.preview);
    g.card.classList.add('drag-source');
    document.documentElement.classList.add('assignment-dragging');
    dock.hidden = false;
    g.active = true;
    // Capture on the root so leaving the card or viewport cannot strand a drag.
    document.documentElement.setPointerCapture(g.pointerId);
    status.textContent = `Picked up ${g.title}. Drop onto a priority. Escape cancels.`;
    frame = requestAnimationFrame(tick);
  }

  function tick() {
    const g = gesture;
    if (!g?.active) return;
    const bottom = dock.getBoundingClientRect().top;
    // The page stays still. Keep the lifted note above the centered bins so the
    // destinations stay visible under a pointer or finger.
    const x = Math.max(8, Math.min(window.innerWidth - g.preview.offsetWidth - 8, g.x - g.offsetX));
    const y = Math.max(8, Math.min(bottom - g.preview.offsetHeight - 12, g.y - g.offsetY));
    g.preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    highlight(targetAt(g.x, g.y));
    frame = requestAnimationFrame(tick);
  }

  function finish(commit = false) {
    if (!gesture) return;
    const g = gesture;
    const next = commit && g.active ? targetAt(g.x, g.y)?.dataset.dropPriority : null;
    gesture = null;
    cancelAnimationFrame(frame);
    g.target?.classList.remove('drag-over');
    g.card.classList.remove('drag-source');
    g.preview?.remove();
    dock.hidden = true;
    document.documentElement.classList.remove('assignment-dragging');
    if (document.documentElement.hasPointerCapture(g.pointerId)) {
      document.documentElement.releasePointerCapture(g.pointerId);
    }
    if (!g.active) return;
    suppressClickUntil = performance.now() + 400;
    if (next && window.FocusFlowData.changePriority(g.id, next)) {
      status.textContent = `${g.title} moved to ${next.toLowerCase()} priority.`;
    } else {
      status.textContent = next ? 'Priority unchanged.' : 'Drag cancelled. Priority unchanged.';
    }
    // Saving replaces the task DOM. Restore focus to the new grip when present.
    const grip = Array.from(document.querySelectorAll('[data-drag-handle]')).find(el => el.dataset.dragHandle === g.id);
    grip?.focus({preventScroll: true});
  }

  document.addEventListener('pointerdown', e => {
    if (gesture || e.button !== 0 || !e.isPrimary || document.querySelector('dialog[open]')) return;
    const card = e.target.closest('.task[data-id]');
    if (!card || card.classList.contains('done')) return;
    const grip = e.target.closest('[data-drag-handle]');
    // Touch users scroll from the card body and drag from the dedicated grip.
    if (!grip && (e.pointerType !== 'mouse' || e.target.closest('button, a, input, select, textarea'))) return;
    const task = taskFor(card.dataset.id);
    if (!task || task.completed) return;
    gesture = {card, id: task.id, title: task.title, pointerId: e.pointerId,
      startX: e.clientX, startY: e.clientY, x: e.clientX, y: e.clientY, active: false, target: null};
  });

  document.addEventListener('pointermove', e => {
    if (!gesture || e.pointerId !== gesture.pointerId) return;
    gesture.x = e.clientX;
    gesture.y = e.clientY;
    if (!gesture.active && Math.hypot(e.clientX - gesture.startX, e.clientY - gesture.startY) >= 6) start();
    if (gesture.active) e.preventDefault();
  }, {passive: false});

  document.addEventListener('selectstart', e => {if (gesture) e.preventDefault();});
  function preventScroll(e) {
    if (!gesture?.active) return;
    e.preventDefault();
    e.stopPropagation();
  }
  document.addEventListener('wheel', preventScroll, {passive: false, capture: true});
  document.addEventListener('touchmove', preventScroll, {passive: false, capture: true});

  document.addEventListener('pointerup', e => {
    if (e.pointerId !== gesture?.pointerId) return;
    gesture.x = e.clientX;
    gesture.y = e.clientY;
    finish(true);
  });
  document.addEventListener('pointercancel', e => {if (e.pointerId === gesture?.pointerId) finish();});
  // Touch starts with implicit capture on the grip. Transferring it to the root
  // fires a lost-capture event on the grip; only loss of our root capture cancels.
  document.addEventListener('lostpointercapture', e => {
    if (e.target === document.documentElement && e.pointerId === gesture?.pointerId) finish();
  });
  window.addEventListener('blur', () => finish());
  window.addEventListener('pagehide', () => finish());
  document.addEventListener('visibilitychange', () => {if (document.hidden) finish();});
  // Cancel if filtering, navigation, a new day or another tab replaces the source.
  new MutationObserver(() => {if (gesture && !gesture.card.isConnected) finish();})
    .observe(document.querySelector('#tasks'), {childList: true, subtree: true});

  document.addEventListener('click', e => {
    // Pointer capture retargets the drag's synthesized click to the root. Other
    // clicks (Undo, completion, edit) remain available immediately after a drop.
    if (performance.now() < suppressClickUntil && e.detail !== 0 && e.target === document.documentElement) {
      suppressClickUntil = 0;
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    if (e.target.closest('[data-drag-handle]')) {
      window.FocusFlowData.notify('Drag this grip to a priority, or use the left and right arrow keys.');
    }
  }, true);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && gesture) {
      e.preventDefault();
      e.stopImmediatePropagation();
      finish();
      return;
    }
    if (gesture?.active && [' ', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    const grip = e.target.closest('[data-drag-handle]');
    if (!grip || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const task = taskFor(grip.dataset.dragHandle);
    if (!task || task.completed) return;
    const index = priorities.indexOf(task.priority);
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? 2 : Math.max(0, Math.min(2, index + (e.key === 'ArrowRight' ? 1 : -1)));
    if (window.FocusFlowData.changePriority(task.id, priorities[next])) {
      status.textContent = `${task.title} moved to ${priorities[next].toLowerCase()} priority.`;
      Array.from(document.querySelectorAll('[data-drag-handle]')).find(el => el.dataset.dragHandle === task.id)?.focus({preventScroll: true});
    }
  }, true);
})();
