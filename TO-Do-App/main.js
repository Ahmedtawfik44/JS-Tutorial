let input = document.querySelector(".input");
let add = document.querySelector(".add");
let container = document.querySelector(".tasks");
let a = JSON.parse(localStorage.getItem("task")) || [];

if (localStorage.length > 0) {
  let items = JSON.parse(localStorage.getItem("task"));
  items.forEach((e, i) => {                                                            
    creat(e);
  });
}

function creat(v) {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let btn = document.createElement("button");
  let txt_span = document.createTextNode(`${v}`);

  span.appendChild(txt_span);
  btn.innerHTML = "Delete";
  btn.className = "btn";
  div.appendChild(span);
  div.appendChild(btn);
  container.appendChild(div);
}

document.addEventListener("click", (e) => {
  if (e.target.className === "btn") {
    let temp = e.target.parentElement;
    let name = e.target.previousElementSibling.innerHTML;
    //UPDATE Array In Local Storage
    let new_a=a.filter((e)=>e!==name);
    a=new_a;
    let local_a = JSON.stringify(new_a);
    localStorage.setItem("task", local_a);
    temp.remove();
  }
});

add.addEventListener("click", (e) => {
  // solve the reload in submit
  e.preventDefault();
  if (input.value.trim() !== "") {
    //push value input in array & convert this in string
    a.push(input.value);
    let local_a = JSON.stringify(a);
    localStorage.setItem("task", local_a);
    creat(input.value);
    input.value = "";
  }
});
