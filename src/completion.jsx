import React, { Component, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PaperCrumple from './components/PaperCrumple.jsx';
import './completion.css';
import './background.js';
import './progress.jsx';

// React is isolated to this effect. Task state is committed by app.js before
// this optional visual runs; loading/WebGL failures can never lose a task.
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const queue = [];
let active = null;
let render = () => {};
let sequence = 0;

export function paperImage(task, dark = document.documentElement.dataset.theme === 'dark') {
  const canvas = document.createElement('canvas');
  canvas.width = 560;
  canvas.height = 560;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = dark ? '#111111' : '#ffffff';
  ctx.fillRect(0, 0, 560, 560);
  ctx.strokeStyle = dark ? '#303030' : '#e5e5e5';
  for (let y = 182; y < 520; y += 42) {
    ctx.beginPath();ctx.moveTo(38, y);ctx.lineTo(522, y);ctx.stroke();
  }
  ctx.fillStyle = dark ? '#a3a3a3' : '#737373';
  ctx.font = '500 17px sans-serif';
  ctx.fillText(task.subject.slice(0, 40).toUpperCase(), 38, 70);
  ctx.fillStyle = dark ? '#ededed' : '#171717';
  ctx.font = '600 30px sans-serif';
  const words = task.title.split(/\s+/);
  let line = '', y = 146, lines = 0;
  for (const word of words) {
    if (ctx.measureText(`${line} ${word}`).width > 465 && line) {
      ctx.fillText(line, 38, y);y += 42;lines++;line = word;
      if (lines === 4) break;
    } else line += (line ? ' ' : '') + word;
  }
  ctx.fillText(line.slice(0, 45), 38, y);
  ctx.font = '400 18px sans-serif';
  ctx.fillStyle = dark ? '#a3a3a3' : '#737373';
  ctx.fillText(`DONE  /  ${task.deadline}`, 38, 515);
  return canvas.toDataURL('image/png');
}

class EffectBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function Fallback({ src, done }) {
  useEffect(() => { const timer = setTimeout(done, 650);return () => clearTimeout(timer); }, [done]);
  return <img className="crumple-fallback" src={src} alt="" />;
}

function Completion({ job, done }) {
  const host = useRef(null);
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');
  const src = useMemo(() => paperImage(job.task, dark), [job.task, dark]);
  useEffect(() => {
    const observer = new MutationObserver(() => setDark(document.documentElement.dataset.theme === 'dark'));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  const [failed, setFailed] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const started = useRef(false);
  const timers = useRef([]);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => { if (media.matches) done(); };
    media.addEventListener('change', change);
    timers.current.push(setTimeout(() => setFailed(true), 2200));
    return () => { timers.current.forEach(clearTimeout);media.removeEventListener('change', change); };
  }, [done]);
  function ready() {
    if (started.current) return;
    started.current = true;
    timers.current.forEach(clearTimeout);
    timers.current = [setTimeout(() => setLeaving(true), 900), setTimeout(done, 1200)];
  }
  const size = Math.min(360, innerWidth - 20);
  const x = Math.max(10, Math.min(innerWidth - size - 10, job.rect.left + job.rect.width / 2 - size / 2));
  const y = Math.max(10, Math.min(innerHeight - size - 10, job.rect.top + job.rect.height / 2 - size / 2));
  const fallback = <Fallback src={src} done={done} />;
  return <div ref={host} className={`completion-paper ${leaving ? 'leaving' : ''}`} style={{left:x,top:y,width:size,height:size}} aria-hidden="true">
    <EffectBoundary fallback={fallback}>
      {failed ? fallback : <PaperCrumple src={src} width={270} height={270} sceneHeight={size}
        autoCrumple onReady={ready} onError={() => setFailed(true)}
        crumpleAmount={1} crumpleDuration={0.5} releaseBehavior="stay"
        draggable={false} detail={32} foldCount={6} paperColor={dark ? '#111111' : '#ffffff'}
        paperTexture={0.06} shadow={false} lightIntensity={1.6} />}
    </EffectBoundary>
  </div>;
}

const host = document.getElementById('paper-effects-root');
if (host) {
  const root = createRoot(host);
  const advance = () => {
    if (reduced()) queue.length = 0;
    active = queue.shift() || null;
    render();
  };
  render = () => root.render(active ? <Completion key={active.key} job={active} done={advance} /> : null);
  window.FocusFlowPaper = {
    complete({ task, rect }) {
      if (reduced()) return;
      try {
        const job = { key:++sequence, id:task.id, rect, task:{...task} };
        queue.push(job);
        if (!active) advance();
      } catch { /* Completion is already saved. Decorative failures are nonfatal. */ }
    },
    cancel(id) {
      for (let i = queue.length - 1; i >= 0; i--) if (queue[i].id === id) queue.splice(i, 1);
      if (active?.id === id) advance();
    }
  };
  function cancelAll() {queue.length=0;active=null;render();}
  window.addEventListener('pagehide', cancelAll);
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAll(); });
}
