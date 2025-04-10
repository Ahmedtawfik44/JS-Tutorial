let body = document.body;
body.style.cssText =
  "margin:0; font-family: cursive;     background-color: rgb(255, 2555, 255);";

//Creat Header

let header = document.createElement("header");
let h3 = document.createElement("h3");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
header.className = "Website-head";
h3.className = "Logo";
ul.className = "Menue";

h3.innerHTML = "Ahmed Tawfik";
let a = ["Home", "About", "Service", "Concat"];

for (let i = 1; i <= 4; i++) {
  let li = document.createElement("li");
  li.innerHTML = a[i - 1];
  li.style.cssText = "padding:10px; color:#b2b0a7; transition:0.3s";
  ul.appendChild(li);
  li.onmouseover = () => {
    li.style.color = "black";
  };
  li.onmouseout = () => {
    li.style.color = "#b2b0a7";
  };
}

header.style.cssText =
  "display: flex; justify-content: space-between; padding:0 20px; align-items: center;";
h3.style.cssText = "color:#29ac72; font-size:20px;";
ul.style.cssText =
  "display: flex; align-items: center; justify-content: center; list-style: none;";

header.appendChild(h3);
header.appendChild(ul);
document.body.appendChild(header);

//Creat Content

let content = document.createElement("div");
content.className = "Content";
content.style.cssText =
  "background-color: rgb(236, 236, 236);  padding: 20px;margin:0 20px;display: grid;grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));box-sizing: border-box;min-height: calc(100vh - 143px); gap:15px;";

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "padding:20px; display: flex; justify-content: center;align-items: center; flex-direction: column; background-color: white; font-size:13px ;color:gray";

  let span = document.createElement("span");
  span.style.cssText = "font-size:25px ; margin-bottom:5px ;color:black";
  product.appendChild(span);

  span.innerHTML = `${i}`;
  product.innerHTML += "Product";

  content.appendChild(product);
}

document.body.appendChild(content);

//Creat Footer
let footer = document.createElement("footer");
let txt = document.createTextNode("Copyright 2025");
footer.appendChild(txt);

footer.style.cssText =
  "padding: 20px;box-sizing: border-box;text-align: center;background-color: #29ac72;color: white;font-size: 20px;margin: 0 20px;";

document.body.appendChild(footer);
