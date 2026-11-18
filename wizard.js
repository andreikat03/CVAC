(()=>{
  'use strict';
  const steps=[...document.querySelectorAll('.app-step')];
  const dots=[...document.querySelectorAll('.app-dot')];
  const next=document.getElementById('nextBtn');
  const back=document.getElementById('backBtn');
  const counter=document.getElementById('stepCounter');
  const hint=document.querySelector('.app-hint');
  let current=0;
  const demoVideo=document.getElementById('detaillaneVideo');
  const demoFallback=document.getElementById('demoFallback');
  const videoStatus=document.getElementById('videoStatus');
  let videoPrepared=false;
  let usedVideoFallback=false;

  function setVideoStatus(message){
    if(!videoStatus)return;
    videoStatus.textContent=message;
    videoStatus.hidden=!message;
  }
  function prepareVideo(){
    // Attach the media only after its previously hidden chapter is visible.
    // This avoids initialising the player inside a `hidden` section.
    if(!demoVideo || videoPrepared)return;
    videoPrepared=true;
    demoVideo.preload='metadata';
    demoVideo.src=demoVideo.dataset.videoSrc;
    demoVideo.load();
  }
  if(demoVideo){
    demoVideo.addEventListener('error',()=>{
      // Compatibility with an older, flattened GitHub Pages upload.
      // The FINAL ZIP deliberately uses assets/, so this is a recovery path only.
      if(!usedVideoFallback && demoVideo.dataset.videoAlternative){
        usedVideoFallback=true;
        demoVideo.src=demoVideo.dataset.videoAlternative;
        if(demoFallback)demoFallback.href=demoVideo.src;
        demoVideo.load();
      }else{
        setVideoStatus('Redarea nu este disponibilă aici. Încearcă linkul de deschidere separată.');
      }
    });
    demoVideo.addEventListener('loadedmetadata',()=>setVideoStatus(''));
    demoVideo.addEventListener('playing',()=>setVideoStatus(''));
  }
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
    if(steps[index].id==='proiecte'){
      // A frame ensures the hidden section has been laid out before load().
      requestAnimationFrame(()=>{
        if(steps[current].id==='proiecte')prepareVideo();
      });
    }
    requestAnimationFrame(updateScrollCue);
  }
  const scrollCue=document.getElementById('scrollCue');
  const controls=document.querySelector('.app-controls');
  if(scrollCue && controls)controls.appendChild(scrollCue);
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
    requestAnimationFrame(updateScrollCue);
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
  // Two proposals: first is a SOCIAL MEDIA campaign, second is an optional
  // NGO partnership programme. Receipt selectors only switch documented examples.
  const receipts={
    horror:{img:'assets/bon-horror-vacui.png',title:'Horror Vacui',count:'01 / 03',fact:'504 povești prezentate într-un performance teatral de 7 zile.',after:'În timpul evenimentului a fost prezentat un manifest public. Nu prezentăm solicitările acestuia ca schimbări deja realizate.',url:'https://www.iqads.ro/articol/72900/record-mondial-teatral-la-bucuresti-sub-denumirea-horror-vacui-campanie-de',alt:'Bon demonstrativ Horror Vacui: 504 povești, 7 zile de performance și prezentarea unui manifest.'},
    fem:{img:'assets/bon-fem-network.png',title:'FEM Network',count:'02 / 03',fact:'922 de persoane consultate, 3.305 semnături pentru petiție și 125 de organizații semnatare.',after:'O scrisoare deschisă a fost trimisă Comisiei Europene pe 8 decembrie 2025. Nu afirmăm că recomandările au fost adoptate în legislație.',url:'https://en.artfusion.ro/portfolio/the-fem-network-advocacy-campaign-results-and-impact/',alt:'Bon demonstrativ FEM Network: 922 persoane consultate, 3305 semnături, 125 organizații semnatare.'},
    viitor:{img:'assets/bon-viitor-prin-actiune.png',title:'Viitor prin Acțiune',count:'03 / 03',fact:'Un raport publicat în 2022 analizează implementarea locală a Agendei 2030 în 19 localități.',after:'Raportul rămâne o resursă publică. Impactul ulterior asupra deciziilor locale nu este demonstrat de simpla publicare.',url:'https://artfusion.ro/wp-content/uploads/2023/01/Raport-implementare-ODD-uri.pdf',alt:'Bon demonstrativ Viitor prin Acțiune: 19 localități analizate și raportul de cercetare publicat în 2022.'}
  };
  const receiptImg=document.getElementById('receiptMain');
  const receiptButtons=[...document.querySelectorAll('.receipt-choice')];
  receiptButtons.forEach(button=>button.addEventListener('click',()=>{
    const data=receipts[button.dataset.receipt];
    if(!data)return;
    receiptButtons.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
    receiptImg.src=data.img;receiptImg.alt=data.alt;
    document.getElementById('receiptFull').href=data.img;
    document.getElementById('receiptTitle').textContent=data.title;
    document.getElementById('receiptFact').textContent=data.fact;
    document.getElementById('receiptAfter').textContent=data.after;
    document.getElementById('receiptCount').textContent=data.count;
    document.getElementById('receiptSource').href=data.url;
    requestAnimationFrame(updateScrollCue);
  }));
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
