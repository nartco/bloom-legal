(function(){
  var saved=null; try{saved=localStorage.getItem('bloom-lang');}catch(e){}
  var q=new URLSearchParams(location.search).get('lang');
  var lang=q||saved||((navigator.language||'fr').toLowerCase().indexOf('fr')===0?'fr':'en');
  function set(l){
    document.querySelectorAll('[lang-block]').forEach(function(el){el.hidden=el.getAttribute('lang-block')!==l;});
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l?'true':'false');});
    document.documentElement.lang=l; try{localStorage.setItem('bloom-lang',l);}catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l);});});
  set(lang==='en'?'en':'fr');
})();
