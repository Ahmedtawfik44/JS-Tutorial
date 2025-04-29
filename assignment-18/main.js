let x = prompt("Print Number From - To", "Example: 5-20");
let r = x.split("-").sort((a, b) => a - b);
let s = 0;
for (let i = +r[0]; i <= r[1]; i++) {
  console.log(i);
}

////////////////////////////////////////
let container = document.createElement("div");
let handle = setTimeout(function () {
  let btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.classname = "btn";
  btn.style.cssText =
    "border: none; position: absolute;  right: -5px; top: -8px;  border-radius: 50%;   background: #f00;  color: white;";
  container.innerHTML = `
    <h3>Welcome</h3>
    <p>Welcom to elzero web school</p>
    `;
  container.appendChild(btn);
  container.style.cssText =
    "position: absolute;top: 50%; left: 50%;text-align: center; width: 300px;padding: 10px;   transform: translate(-50%, -50%);background: #eee;";

  // btn.onclick=()=>{
  //     container.remove();
  // }

  document.body.appendChild(container);
}, 5000);

document.onclick = (e) => {
  if (e.target.classname === "btn") 
    container.remove();
};

////////////////////////////////////////////////////////
let interval = document.querySelector(".interval");
let count = () => {
  interval.innerHTML -= 1;
  if (interval.innerHTML === "5")
    window.open(
      "https://www.google.co.uk",
      "_blank",
      "width=300,height=300 ,top=0,left=0"
    );
  if (interval.innerHTML === "0") 
     clearInterval(counter);
  // if(interval.innerHTML==='0')
  //     location.assign('https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/');
};

let counter = setInterval(count, 50);
