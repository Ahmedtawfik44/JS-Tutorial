let font = document.querySelector("#font");

if (localStorage.getItem("font")) {
    document.body.style.fontFamily = localStorage.getItem("font");
    font.value=localStorage.getItem("font");
  }

font.addEventListener("change", (e) => {
  document.body.style.fontFamily = e.target.value;
  localStorage.setItem("font", e.target.value);
});

//[color]
let select_1 = document.querySelector("#one");

if (localStorage.getItem("color")) {
  document.body.style.color = localStorage.getItem("color");
  select_1.value=localStorage.getItem("color");
}

select_1.addEventListener("change", (e) => {
  document.body.style.color = e.target.value;
  localStorage.setItem("color", e.target.value);
});

//[font size]
let select_2 = document.querySelector("#two");

if (localStorage.getItem("size")) {
  document.body.style.fontSize = localStorage.getItem("size");
  select_2.value=localStorage.getItem("size");
}

select_2.addEventListener("change", (e) => {
  document.body.style.fontSize = e.target.value;
  localStorage.setItem("size", e.target.value);
});

//////////////////////////////////////////////////////////////////////////////
let inputs=document.querySelectorAll('form input');
let select_last=document.querySelector('form select');

if(sessionStorage.length>0){
  inputs.forEach((e,i)=>{
     inputs[`${i}`].value= sessionStorage.getItem(`value${i}`);
});
}

inputs.forEach((e,i)=>{
      e.oninput=()=>{
        sessionStorage.setItem(`value${i}`,e.value);
      }
});


if(sessionStorage.getItem('change')){
   select_last.value=sessionStorage.getItem('change');
}

select_last.onchange=(e)=>{
          sessionStorage.setItem('change',e.target.value);
}
