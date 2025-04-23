const items=document.querySelectorAll('ul li');
const focus_div=document.querySelector('div');

if(localStorage.getItem('color')){
    focus_div.style.backgroundColor=localStorage.getItem('color');
    items.forEach(r=>{
      r.classList.remove('active');
    });
document.querySelector(`[data-color="${localStorage.getItem('color')}"]`).classList.add('active');
}

items.forEach(e=>{
   e.onclick=()=>{
        items.forEach(r=>{
          r.classList.remove('active');
        });

        e.classList.add('active');
        window.localStorage.setItem('color',`${e.dataset.color}`); // e.style.backgroundcolor
        focus_div.style.backgroundColor=e.dataset.color;
   }
});


