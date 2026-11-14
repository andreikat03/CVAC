document.addEventListener('DOMContentLoaded',()=>{
 const links=[...document.querySelectorAll('a[href^="#"]')];
 links.forEach(link=>link.addEventListener('click',event=>{
   const target=document.querySelector(link.getAttribute('href'));
   if(!target)return;
   event.preventDefault();
   target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
   history.replaceState(null,'',link.getAttribute('href'));
 }));
 if('IntersectionObserver' in window){
   const nav=[...document.querySelectorAll('.nav a[href^="#"]')];
   const observer=new IntersectionObserver(entries=>{
     entries.forEach(entry=>{
       if(entry.isIntersecting)nav.forEach(a=>{
         if(a.getAttribute('href')==='#'+entry.target.id)a.setAttribute('aria-current','location');
         else a.removeAttribute('aria-current');
       });
     });
   },{rootMargin:'-25% 0px -60% 0px'});
   document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
 }
});
