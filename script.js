(() => {
  'use strict';
  const config = window.VLARollingConfig || {};
  // Links with no URL stay visually present and communicate "coming soon".
  document.querySelectorAll('[data-link]').forEach((link) => {
    const key = link.dataset.link;
    const url = (config[key] || '').trim();
    if (!url) {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled','true');
      link.setAttribute('title','Link coming soon');
      link.addEventListener('click', (event) => {
        event.preventDefault();
        toast('The ' + (key === 'huggingface' ? 'Hugging Face model' : 'arXiv paper') + ' link is coming soon.');
      });
    } else {
      link.setAttribute('href',url);
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
      const label = link.querySelector('.soon');
      if (label) label.remove();
      if (key !== 'paperPdf') { link.setAttribute('target','_blank'); link.setAttribute('rel','noopener noreferrer'); }
    }
  });
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const activate = (index, focus=false) => {
    tabs.forEach((tab,i) => {
      const on = i===index;
      tab.classList.toggle('active',on);
      tab.setAttribute('aria-selected',String(on));
      tab.tabIndex = on?0:-1;
      const panel = document.getElementById('results-panel-'+i);
      if (panel) panel.hidden=!on;
    });
    if (focus) tabs[index].focus();
  };
  tabs.forEach((tab,i) => {
    tab.addEventListener('click',()=>activate(i));
    tab.addEventListener('keydown',(ev)=>{
      const delta = ev.key==='ArrowRight'?1:ev.key==='ArrowLeft'?-1:0;
      if (delta) {ev.preventDefault();activate((i+delta+tabs.length)%tabs.length,true);}
      if(ev.key==='Home'){ev.preventDefault();activate(0,true)}
      if(ev.key==='End'){ev.preventDefault();activate(tabs.length-1,true)}
    });
  });
  const menu = document.getElementById('menu-button');
  const nav = document.getElementById('nav');
  if (menu && nav) {
    menu.addEventListener('click',()=>{
      const expanded=menu.getAttribute('aria-expanded')==='true';
      menu.setAttribute('aria-expanded',String(!expanded));
      menu.setAttribute('aria-label',expanded?'Open menu':'Close menu');
      nav.classList.toggle('open',!expanded);
    });
    nav.querySelectorAll('a').forEach((a)=>a.addEventListener('click',()=>{
      nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');
    }));
  }
  let toastTimer;
  function toast(message){
    const elem=document.getElementById('toast');
    elem.textContent=message;elem.classList.add('visible');
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>elem.classList.remove('visible'),3500);
  }
  const copy=document.getElementById('copy-bib');
  if(copy)copy.addEventListener('click',async()=>{
    const text=document.getElementById('bibtex').textContent;
    try { await navigator.clipboard.writeText(text); copy.querySelector('span').textContent='Copied'; toast('BibTeX copied to clipboard.'); }
    catch(e){ toast('Please select and copy the BibTeX text manually.'); }
    setTimeout(()=>{copy.querySelector('span').textContent='Copy';},2500);
  });
})();
