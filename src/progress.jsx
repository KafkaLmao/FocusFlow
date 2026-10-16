import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import SloshGauge from './components/SloshGauge.jsx';
import './progress.css';

function AssignmentProgress({ completed, total }) {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');
  useEffect(() => {
    const observer = new MutationObserver(() => setDark(document.documentElement.dataset.theme === 'dark'));
    observer.observe(document.documentElement, {attributes:true,attributeFilter:['data-theme']});
    return () => observer.disconnect();
  }, []);
  const percent = total ? Math.round(completed / total * 100) : 0;
  return <section className="overall-progress" aria-label="Overall assignment completion">
    <div className="panel-heading"><h2>Overall progress</h2><span className="muted">All assignments</span></div>
    <div className="overall-progress-body">
      <SloshGauge value={percent} interactive={false} width={100} height={176} radius={12}
        ticks={0} viscosity={0.3} tilt={0.35} splash={0.2}
        liquidColor={dark ? '#ededed' : '#171717'} glassColor={dark ? '#202020' : '#f5f5f5'}
        ariaLabel={`Assignments completed: ${completed} of ${total}`} />
      <div className="overall-progress-copy">
        <strong>{completed}<span> / {total}</span></strong>
        <p>assignments<br />completed</p>
        <small>{total === 0 ? 'Add your first assignment to get started.' : completed === total ? 'All caught up. Well done.' : `${total - completed} left. One step at a time.`}</small>
      </div>
    </div>
  </section>;
}

const host = document.getElementById('assignment-progress');
if (host) {
  const root = createRoot(host);
  window.FocusFlowProgress = {
    update({ completed, total }) {
      const count = Math.max(0, Math.floor(Number(total) || 0));
      const done = Math.max(0, Math.min(count, Math.floor(Number(completed) || 0)));
      root.render(<AssignmentProgress completed={done} total={count} />);
    }
  };
}
