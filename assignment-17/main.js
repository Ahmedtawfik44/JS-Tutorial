let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let parent = document.querySelector(".parent");
let a=[];

if (!parent.children.length)
  parent.innerHTML = `<div class="no">No Classes To Show</div>`;

add.addEventListener("blur", function () {
  let value = this.value;
  a.push(...value.split(" "));
  parent.innerHTML="";
  if (value.trim() != "") {
    a.sort().forEach((element) => {
      if (element === "") {// User You can input (_ == space in this Example) : ____________m =>The Result classes space space m
        this.value = "";
        value = "";
        return;  //continue work only with (for,while) Use return with foreach = continue
      }
      let spans = document.createElement("span");
      spans.innerHTML = element.toLowerCase();
      spans.className = `${element.toLowerCase()}`;
      parent.appendChild(spans);
      this.value = "";
    });
  }
});

remove.addEventListener("blur", function () {
  let value_rm = this.value;
  let span_rm = document.querySelectorAll(".parent span");

  value_rm.split(" ").forEach((e) => {
    for (let i = 0; i < span_rm.length; i++) {
      if (span_rm[i].getAttribute("class") === e.toLowerCase())
        span_rm[i].remove();
    }
    if (!parent.children.length)
        parent.innerHTML = `<div>No Classes To Show</div>`;
    value_rm = "";
    this.value = "";
    
  });
});

///////////////////////////////////////////////////////////////////////////////////////////
let rm=document.querySelector('.remove');
let change=document.querySelector(".our-element");
let before=document.createElement("div");
let after=document.createElement("div");

rm.remove();

function set(a,b){
a.innerHTML=b;
a.className=b;
a.title=`${b} Element`;
a.setAttribute("data-value",b);
}

set(before,"start");
set(after,"end");

change.before(before);
change.after(after);

// append,prpend add element inside div , But before,after add after element or before element

///////////////////////////////////////////////////////////////////////////////////////////////
let search=document.querySelector('.search');
console.log(search.lastChild.nodeValue.trim());//node value remove " "

////////////////////////////////////////////////////////

let last=document.querySelectorAll('.last');
last.forEach(e=> (e.onclick=()=>{console.log(`"this is ${e.localName}"`)}) ) //localname to return tagname
