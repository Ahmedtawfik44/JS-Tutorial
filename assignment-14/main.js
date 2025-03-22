let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let r = mix
  .map((a) => (isNaN(parseInt(a)) ? a : ""))
  .reduce((a, v) => `${a}${v}`);
console.log(r);

// Elzero

console.log("--------------------------------");

let myString = "EElllzzzzzzzeroo";

let r1 = myString
  .split("")
  .filter((a, i)=>myString.indexOf(a)===i)
  .reduce((a, v) =>`${a}${v}`);

console.log(r1);
// // Elzero

console.log("--------------------------------");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let r2 = myArray.reduce((a, v) => `${a}${v}`).replaceAll(",", "");
console.log(r2);

// Elzero

console.log("--------------------------------");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let r3 = numsAndStrings
  .filter((a) => !isNaN(parseInt(a)))
  .map((a) => -a);

  console.log(r3);

// [-1, -10, 10, 20, -5, -3]

console.log("--------------------------------");

let nums = [2, 12, 11, 5, 10, 1, 99];

let c=0;
let r4=nums.reduce((a,v)=>{
    if(v%2==0)
        c=a*v;
    else
    c=a+v;
return c;
},1);

console.log(r4);
// 500

console.log("--------------------------------");
