// Dynamic Solution

let inputs = document.querySelectorAll("input");
let btn = document.querySelector("buttom");

window.onload = () => {
  inputs[0].focus();
};

inputs.forEach((ele, i) => {
  ele.addEventListener("input", () => {
    const curr = ele;
    const next = curr.nextElementSibling;

    //to add only one number (Handling length)
    if (curr.value.length > 1) {
      curr.value = "";
    }

    //to handle write
    if (curr.value !== "" && next.hasAttribute("disabled") && next !== null) {
      //next!==null عشان اتحقق ان في انبيت اصلا
      curr.blur();
      next.removeAttribute("disabled");
      next.focus();
    }

    // change color button when arrive last input
    // if(inputs[3].value!=="" && !inputs[3].disabled  ){
    //     btn.classList.toggle('active');
    // }
  });

  //Removeee
  ele.addEventListener("keyup", (e) => {
    if (e.key === "Backspace" && ele.previousElementSibling !== null) {
      e.target.blur();
      e.target.value = "";
      e.target.setAttribute("disabled", true);
      e.target.previousElementSibling.focus();
    }
  });
});

// When My first try after To listen event (auto,simulation) , But alt Search To find The dynamic Solution .

// let one=document.querySelector(".one");
// let two=document.querySelector(".two");
// let three=document.querySelector(".three");
// let leninput=document.forms[0].children;

// window.onload=function(){
//     one.focus();
// }

// // one sol

// this.oninput=()=>{
//     if(one.value.length===1){
//         one.blur();
//         two.focus();
//     }

//     if(two.value.length===1){
//         two.blur();
//         three.focus();
//     }

// }

//The Third Solution

// one.oninput=function(){
//    if(one.value.length===1){
//     one.blur();
//     two.focus();
//    }
// }

// two.oninput=function(){
//     if(two.value.length===1){
//      two.blur();
//      three.focus();
//     }
//  }
