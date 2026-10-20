import * as THREE from 'three';
import DOTS from './vendor/vanta/vanta.dots.js';

// One optional Vanta instance, sharing Three.js with the paper animation.
const host = document.getElementById('ambient-background');
const toggle = document.getElementById('ambient-toggle');
if (host && toggle) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false;
  try { enabled = localStorage.getItem('focusflow.ambient') === 'on'; } catch {}
  let instance = null;
  let failed = false;
  let suspended = false;
  function dispose() {
    if (!instance) return;
    const old = instance;
    instance = null;
    const renderer = old.renderer;
    renderer?.domElement?.removeEventListener('webglcontextlost', contextLost);
    // Vanta's base removes the canvas and scene; dispose its renderer as well.
    try { old.destroy(); } catch { host.replaceChildren(); }
    try { renderer?.dispose(); } catch { /* Preserve the static fallback. */ }
  }
  function palette() {
    return document.documentElement.dataset.theme === 'dark'
      ? { color:0x555555, color2:0x555555, backgroundColor:0x111111 }
      : { color:0xbbbbbb, color2:0xbbbbbb, backgroundColor:0xffffff };
  }
  function sync() {
    const animate = enabled && !reduce.matches && !document.hidden && !suspended && !failed;
    toggle.setAttribute('aria-pressed', String(animate));
    toggle.textContent = `Background ${animate ? 'on' : 'off'}`;
    toggle.disabled = reduce.matches || failed;
    toggle.title = reduce.matches ? 'Animation is off because you prefer reduced motion.' : failed ? 'Animated background unavailable on this device.' : 'Toggle animated background';
    if (!animate) {dispose();return;}
    if (instance) return;
    try {
      instance = DOTS({
        el:host, THREE, ...palette(),
        mouseControls:false, touchControls:false, gyroControls:false,
        showLines:false, size:2, spacing:42,
        minWidth:1, minHeight:1, scale:2, scaleMobile:3,
        backgroundAlpha:0
      });
      if (!instance?.renderer || !instance?.starField || !host.querySelector('canvas')) throw new Error('Vanta did not initialize.');
      instance.renderer.domElement.setAttribute('aria-hidden', 'true');
      instance.renderer.domElement.addEventListener('webglcontextlost', contextLost);
    } catch {
      failed = true;
      if (!instance && window.VANTA?.current?.el === host) instance = window.VANTA.current;
      dispose();
      host.replaceChildren();
      sync();
    }
  }
  function contextLost(event) {
    event.preventDefault();
    failed = true;
    sync();
  }
  // DOTS reads the material color at initialization; update that material as
  // well as the base options instead of rebuilding geometry on every theme flip.
  function themeChanged() {
    if (!instance) return;
    const colors = palette();
    instance.setOptions(colors);
    instance.starField.material.color.setHex(colors.color);
  }
  function visibility() { sync(); }
  function click() {
    enabled = !enabled;
    try {localStorage.setItem('focusflow.ambient', enabled ? 'on' : 'off');} catch {}
    sync();
  }
  function storage(event) {
    if (event.key === 'focusflow.ambient') {enabled = event.newValue === 'on';sync();}
  }
  const observer = new MutationObserver(themeChanged);
  const resize = new ResizeObserver(() => instance?.resize());
  observer.observe(document.documentElement, {attributes:true,attributeFilter:['data-theme']});
  resize.observe(host);
  toggle.addEventListener('click', click);
  reduce.addEventListener('change', sync);
  document.addEventListener('visibilitychange', visibility);
  window.addEventListener('storage', storage);
  window.addEventListener('pagehide', () => {suspended = true;dispose();});
  window.addEventListener('pageshow', () => {suspended = false;sync();});
  sync();
}
