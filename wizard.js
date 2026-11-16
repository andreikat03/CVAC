(()=>{
  'use strict';
  const steps=[...document.querySelectorAll('.app-step')];
  const dots=[...document.querySelectorAll('.app-dot')];
  const next=document.getElementById('nextBtn');
  const back=document.getElementById('backBtn');
  const counter=document.getElementById('stepCounter');
  const hint=document.querySelector('.app-hint');
  let current=0;
  function go(index,focus=true,historyMode="push"){
    index=Math.max(0,Math.min(steps.length-1,index));
    if(current!==index){
      const previousVideo=steps[current]?.querySelector('video');
      if(previousVideo&&!previousVideo.paused)previousVideo.pause();
    }
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
    if(location.hash!=='#'+steps[index].id){
      const method=historyMode==='replace'?'replaceState':historyMode==='none'?null:'pushState';
      if(method)history[method]({step:index},'','#'+steps[index].id);
    }
    updateScrollCue();
  }
  const scrollCue=document.getElementById('scrollCue');
  function updateScrollCue(){
    if(!scrollCue)return;
    const step=steps[current];
    scrollCue.hidden=step.scrollHeight-step.clientHeight-step.scrollTop<32;
  }
  steps.forEach(step=>step.addEventListener('scroll',updateScrollCue,{passive:true}));
  window.addEventListener('resize',updateScrollCue);
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
    if(e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA','SELECT','A','BUTTON','VIDEO','AUDIO','IFRAME'].includes(el.tagName)||el.isContentEditable)return;
    if(e.key==='ArrowRight'&&current<steps.length-1){e.preventDefault();go(current+1)}
    if(e.key==='ArrowLeft'&&current>0){e.preventDefault();go(current-1)}
  });
  const tabs=[...document.querySelectorAll('.idea-tab')];
  function selectTab(selectedTab,focus=false){
    tabs.forEach(tab=>{
      const selected=tab===selectedTab;
      tab.classList.toggle('is-selected',selected);
      tab.setAttribute('aria-selected',String(selected));
      tab.tabIndex=selected?0:-1;
      document.getElementById(tab.dataset.panel).hidden=!selected;
    });
    if(focus)selectedTab.focus();
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>selectTab(tab));
    tab.addEventListener('keydown',event=>{
      let nextIndex=null;
      if(event.key==='ArrowRight')nextIndex=(index+1)%tabs.length;
      if(event.key==='ArrowLeft')nextIndex=(index+tabs.length-1)%tabs.length;
      if(event.key==='Home')nextIndex=0;
      if(event.key==='End')nextIndex=tabs.length-1;
      if(nextIndex!==null){event.preventDefault();event.stopPropagation();selectTab(tabs[nextIndex],true);}
    });
  });
  // Campaign: one purposeful interaction, not a fictitious official event.
  const ticketButton=document.getElementById('ticketToggle');
  const ticketImage=document.getElementById('campaignPoster');
  const ticketState=document.getElementById('ticketState');
  if(ticketButton&&ticketImage&&ticketState){
    ticketButton.addEventListener('click',()=>{
      const on=ticketButton.getAttribute('aria-pressed')!=='true';
      ticketButton.setAttribute('aria-pressed',String(on));
      ticketButton.firstChild.textContent=on?'Revino la spectator ':'Schimbă rolul ';
      ticketImage.src=on?'assets/forum-ticket-participant.svg':'assets/forum-ticket-spectator.svg';
      ticketImage.alt=on?'Poster interactiv: biletul și-a schimbat rolul în Participant.':'Poster interactiv: biletul indică rolul Spectator.';
      ticketState.textContent=on?'Biletul tău: participant — poți interveni în scenă.':'Biletul tău: spectator';
    });
  }
  window.addEventListener('hashchange',()=>{
    const index=steps.findIndex(step=>'#'+step.id===location.hash);
    if(index>=0&&index!==current)go(index,false,'none');
  });
  window.addEventListener('popstate',()=>{
    const index=steps.findIndex(step=>'#'+step.id===location.hash);
    go(index<0?0:index,false,'none');
  });
  const start=steps.findIndex(step=>'#'+step.id===location.hash);
  go(start<0?0:start,false,'replace');
  requestAnimationFrame(updateScrollCue);
})();
