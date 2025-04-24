let img_click=document.querySelectorAll('.photos img');
let img_hov=document.querySelectorAll('.photos_hov img');
let head=document.querySelector('.head img');

img_click.forEach(e=>{
    e.addEventListener('click',()=>{
       head.src=e.src;
    });
});

img_hov.forEach(e=>{
    e.addEventListener('mouseenter',()=>{
       head.src=e.src;
    });
    e.addEventListener('mouseout',()=>{
       head.src="./img/avatar-01.png";
    });
});

