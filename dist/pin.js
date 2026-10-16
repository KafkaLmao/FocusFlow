(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const active = new Set();
  function clear() {
    for (const context of active) context.revert();
    active.clear();
  }
  window.FocusFlowPin = {
    play(id) {
      const note = Array.from(document.querySelectorAll('.sticky-note')).find(el => el.dataset.id === id);
      if (!note) return;
      const rect = note.getBoundingClientRect();
      if (rect.top < 80 || rect.bottom > innerHeight - 20) note.scrollIntoView({block:'nearest',behavior:'instant'});
      const pin = note.querySelector('.note-pin');
      const gsap = window.gsap;
      if (!pin || !gsap || reduced.matches) return;
      // CSS owns the resting rotation. Reverting the context restores it after
      // the paper settles, without leaving inline transforms or hidden pins.
      const context = gsap.context(() => {
        gsap.timeline({onComplete:() => {context.revert();active.delete(context);}})
          .from(note,{y:18,rotation:-3,scale:.98,opacity:.3,duration:.28,ease:'power2.out'})
          .from(pin,{y:-30,x:12,scale:1.5,rotation:20,opacity:0,duration:.22,ease:'power2.in'},.17)
          .to(note,{y:2,rotation:.6,duration:.07,ease:'power1.in'},.38)
          .to(note,{y:0,rotation:-.4,duration:.15,ease:'power2.out'})
          .to(note,{rotation:0,duration:.12,ease:'power2.out'});
      },note);
      active.add(context);
    }
  };
  reduced.addEventListener('change',() => {if(reduced.matches)clear();});
  window.addEventListener('pagehide',clear);
})();
