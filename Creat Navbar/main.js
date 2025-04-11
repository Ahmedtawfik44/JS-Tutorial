//creat element
let creat = (e) => document.createElement(`${e}`);
let container = creat("div");
let ul = creat("ul");
let a = ["Home", "About", "Service", "Concat"];
for (let i = 0; i < 4; i++) {
  let li = creat("li");
  li.textContent = a[i];
  if (i !== 3) {
    li.style.cssText =
      "list-style: none;font-size: 25px;display: flex;justify-content: center; align-items: center;margin-bottom: 15px;border-bottom: 1px solid #eee;padding-bottom: 15px;";
  } else {
    li.style.cssText =
      "list-style: none;font-size: 25px;display: flex;justify-content: center; align-items: center;margin-bottom: 15px;";
  }
  ul.appendChild(li);
}

container.appendChild(ul);
document.body.appendChild(container);

//css
document.body.style.margin = "0";
document.body.style.padding = "0";
ul.style.padding = "0";

container.style.cssText =
  "width: 250px;background-color: cadetblue; color: white;height: 100vh;box-sizing: border-box;padding: 20px;";

container.style.display = "none";

//creat bottom to hide
let open = creat("bottom");
let close = creat("bottom");
open.textContent = "Open";
close.textContent = "Close";

document.body.appendChild(open);
document.body.appendChild(close);

//css bottom
close.style.cssText =
  "display: none;position: absolute;left: 256px;top: 5px;color: white;background-color: red; padding: 10px 15px;border-radius: 6px; cursor:pointer;";
open.style.cssText =
  "position: absolute;left: 20px; top: 20px;background-color: black;color: white;font-size: 20px;padding: 8px 15px;border-radius: 6px; cursor:pointer;";

//Event
open.addEventListener("click", () => {
  container.style.display = "block";
  close.style.display = "block";
  open.style.display = "none";
  // container.classList.toggle("hide");
});

close.addEventListener("click", () => {
  container.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
});
