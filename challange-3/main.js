let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;

//find small num and return int

console.log(Math.trunc(Math.min(a,b,c,d)));

//use variable a - d to get output

console.log(Math.pow(a,Math.trunc(d))); //10000

//get integer "2" from d with 4 method

console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(d.toFixed(0));

//use variable b - d to get this value
let e=Math.floor(b) /Math.ceil(d);
console.log(e.toFixed(2).toString()); // 66.67 => string 
let m=Math.floor(b) / Math.ceil(d)
console.log(Math.ceil(b) / Math.ceil(d)); // 67 =>number