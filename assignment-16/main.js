document.getElementById("elzero");
document.getElementsByClassName("element");
document.querySelector("#elzero");
document.querySelector('[name="js"]');
document.querySelector('div');
document.querySelector(".element");
document.querySelectorAll("#elzero");
document.querySelectorAll(".element");
document.querySelectorAll('[name="js"]');
document.querySelectorAll('div');
document.getElementsByTagName("div")[0];
document.getElementsByName("js");
document.body.firstElementChild;
document.body.children[0];
document.body.childNodes[0];

//--------------------------------------------------------
// let img = document.images;
// let len = img.length;
// for (let i = 0; i < len; i++) {
//   img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   img[i].alt = "Elzero Logo";
// }

//----------------------------------------------
let input = document.querySelector('[type="number"]');
let result=document.querySelector(".result")

input.onkeyup = function () {
  result.innerHTML=`{${input.value}} USD Dollar = {${(input.value*50).toFixed(2)}} Egyptian Pound`
};

//-------------------------------------
let change1 = document.getElementsByClassName("one");
let change2 = document.getElementsByClassName("two");

let temp = change1[0].getAttribute("title");
let temp2 = change1[0].innerHTML;
change1[0].title = change2[0].title;
change2[0].title = temp;
change1[0].innerHTML = change2[0].innerHTML;
change2[0].innerHTML = `${temp2} 2`;

//--------------------------------------
let img2 = document.getElementsByClassName("img-task-2");
let len2 = img2.length;
for (let i = 0; i < len2; i++) {
  if (img2[i].hasAttribute("alt") ){
    img2[i].alt = "Old";
  }
  else{
     img2[i].alt= "Elzero New";
  }
}
//-----------------------------------------

let num = document.querySelector('[name="elements"]');
let txt = document.querySelector('[type="text"]');
let sub = document.querySelector('[type="submit"]');
let typeSelect = document.querySelector('[name="type"]');
let r=document.querySelector(".results");

num.style.display="block";
num.style.borderRadius="8px";
num.style.border="3px solid red";
num.style.width="200px";
num.style.padding="10px";
num.style.margin="auto";
num.style.marginBottom="10px";

txt.style.display="block";
txt.style.padding="10px";
txt.style.margin="auto";
txt.style.marginBottom="10px";
txt.style.width="200px";
txt.style.borderRadius="8px";
txt.style.border="3px solid red";

typeSelect.style.display="block";
typeSelect.style.padding="10px";
typeSelect.style.margin="auto";
typeSelect.style.marginBottom="10px";
typeSelect.style.width="225px";
typeSelect.style.borderRadius="8px";
typeSelect.style.border="3px solid red";

sub.style.display="block";
sub.style.padding="8px";
sub.style.margin="auto";
sub.style.marginBottom="10px";
sub.style.width="225px";
sub.style.borderRadius="8px";
sub.style.background="red";
sub.style.color="white";
sub.style.outline="none";
sub.style.fontSize="18px";

sub.onclick = function (e) {
  e.preventDefault();
  let removeelement=document.querySelectorAll(".old");
  removeelement.forEach(function (element) {
    element.remove(); 
  });
  for (let i = 0; i < num.value; i++) {
    let element=typeSelect.value
    let div = document.createElement(element);
    div.title = "Element";
    div.className = `id-${i + 1} old`;
    div.textContent = txt.value;
    div.style.background="red"
    div.style.color="white"
    div.style.width="fit-content"
    div.style.padding="8px 30px"
    div.style.margin="20px"
    div.style.borderRadius="8px"
    div.style.fontSize="18px";
    r.style.display="flex";
    r.style.flexWrap="wrap";


    r.appendChild(div);
  }
};
