(() => {
  'use strict';
  const gsap = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const icons = {
    day:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 9h18M9 9v12"/>',
    list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01"/>',
    board:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M15 4v16"/>',
    check:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18M7 15h3M14 15h3"/>',
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    moon:'<path d="M20.5 13A9 9 0 0 1 11 3.5 9 9 0 1 0 20.5 13Z"/>',
    keys:'<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 16h8"/>'
  };
  const icon=(target,name)=>{const node=document.querySelector(target);if(node)node.innerHTML=`<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;};
  [['[data-view="today"]>span:first-child','day'],['[data-view="all"]>span:first-child','list'],['[data-view="board"]>span:first-child','board'],['[data-view="completed"]>span:first-child','check'],['.stat-icon.green','day'],['.stat-icon.orange','clock'],['.stat-icon.purple','calendar'],['.search>span','search'],['#theme>span:first-child','moon'],['#shortcuts>span:first-child','keys']].forEach(([s,n])=>icon(s,n));
  document.querySelectorAll('.sidebar [data-view]').forEach(el=>el.setAttribute('aria-label',({today:'My day',all:'All assignments',board:'Priority board',completed:'Completed assignments'})[el.dataset.view]));
  let lenis, tick, context, match, observer;
  function setup(){
    if(!gsap)return;
    match=gsap.matchMedia();
    match.add('(prefers-reduced-motion: no-preference)',()=>{
      if(window.Lenis){
        lenis=new window.Lenis({autoRaf:false,lerp:.12,syncTouch:false,prevent:node=>node.closest?.('.sidebar, dialog, input, textarea, select')});
        tick=seconds=>lenis.raf(seconds*1000);
        gsap.ticker.add(tick);
      }
      context=gsap.context(()=>{
        gsap.timeline({defaults:{ease:'power3.out'}})
          .from('.page-heading',{y:16,opacity:0,duration:.25})
          .from('.stat',{y:15,opacity:0,duration:.25,stagger:.035},'-.15')
          .from('.content-grid',{y:14,opacity:0,duration:.25},'-.15');
      },document.body);
      return ()=>{if(tick)gsap.ticker.remove(tick);lenis?.destroy();lenis=null;tick=null;context?.revert();};
    });
    observer=new MutationObserver(()=>{
      const open=!!document.querySelector('dialog[open]');
      if(open)lenis?.stop();else lenis?.start();
    });
    document.querySelectorAll('dialog').forEach(d=>observer.observe(d,{attributes:true,attributeFilter:['open']}));
  }
  function feedback(e){
    if(!gsap||reduce.matches)return;
    const toggle=e.target.closest('[data-toggle]');
    if(toggle){const id=toggle.dataset.toggle;const card=Array.from(document.querySelectorAll('.task')).find(t=>t.dataset.id===id);if(card)gsap.fromTo(card,{x:3},{x:0,duration:.22,ease:'power2.out',clearProps:'transform',overwrite:'auto'});}
  }
  document.addEventListener('click',feedback);
  setup();
  function cleanup(){match?.revert();observer?.disconnect();document.removeEventListener('click',feedback);}
  window.addEventListener('pagehide',cleanup);
  window.addEventListener('pageshow',e=>{if(e.persisted){document.addEventListener('click',feedback);setup();}});
})();
