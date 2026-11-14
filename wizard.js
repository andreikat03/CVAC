(()=>{
  'use strict';
  const steps=[...document.querySelectorAll('.app-step')];
  const dots=[...document.querySelectorAll('.app-dot')];
  const next=document.getElementById('nextBtn');
  const back=document.getElementById('backBtn');
  const counter=document.getElementById('stepCounter');
  const hint=document.querySelector('.app-hint');
  let current=0;
  function go(index,focus=true){
    index=Math.max(0,Math.min(steps.length-1,index));
    current=index;
    steps.forEach((step,i)=>{
      step.hidden=i!==index;
      step.setAttribute('aria-hidden',String(i!==index));
      step.classList.toggle('is-active',i===index);
      if(i===index)step.scrollTop=0;
    });
    dots.forEach((dot,i)=>{
      dot.classList.toggle('active',i===index);
      if(i===index)dot.setAttribute('aria-current','step');
      else dot.removeAttribute('aria-current');
    });
    back.disabled=index===0;
    next.hidden=index===steps.length-1;
    counter.textContent=String(index+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');
    hint.textContent=index===steps.length-1?'Ai ajuns la final. Mulțumesc!':'Folosește Next pentru a descoperi candidatura · ← →';
    if(focus)steps[index].focus({preventScroll:true});
    if(location.hash!=='#'+steps[index].id)history.replaceState(null,'','#'+steps[index].id);
  }
  next.addEventListener('click',()=>go(current+1));
  back.addEventListener('click',()=>go(current-1));
  dots.forEach(dot=>dot.addEventListener('click',()=>go(Number(dot.dataset.goto))));
  document.getElementById('homeLink').addEventListener('click',e=>{e.preventDefault();go(0)});
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    if(link.id==='homeLink')return;
    link.addEventListener('click',e=>{
      const index=steps.findIndex(step=>'#'+step.id===link.getAttribute('href'));
      if(index!==-1){e.preventDefault();go(index)}
    });
  });
  document.addEventListener('keydown',e=>{
    const el=document.activeElement;
    if(e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA','SELECT'].includes(el.tagName)||el.isContentEditable)return;
    if(e.key==='ArrowRight'&&current<steps.length-1){e.preventDefault();go(current+1)}
    if(e.key==='ArrowLeft'&&current>0){e.preventDefault();go(current-1)}
  });
  const tabs=[...document.querySelectorAll('.idea-tab')];
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    tabs.forEach(t=>{
      const selected=t===tab;
      t.classList.toggle('is-selected',selected);
      t.setAttribute('aria-selected',String(selected));
      document.getElementById(t.dataset.panel).hidden=!selected;
    });
  }));
  window.addEventListener('hashchange',()=>{
    const index=steps.findIndex(step=>'#'+step.id===location.hash);
    if(index>=0&&index!==current)go(index,false);
  });
  const start=steps.findIndex(step=>'#'+step.id===location.hash);
  go(start<0?0:start,false);
})();
