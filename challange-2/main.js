let a=10;
let b="20";
let c=80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// =>[++a] + [+b++] + [+c++] - [+a++]
// value: 11 + 20 + 80 - 11 = 100  
// Explain:pre-increment add unary-post-increment add unary-post-increment Subtraction unary-post-increment

// =>[++a] + [-b] + [+c++] - [-a++] + [+a]
// //value: 13 - 21 + 81 + 13 + 14 = 100   a=14 b=21 c=82
// //Explain:pre-increment add Negative-Unary add unary-post-increment Subtraction Negative-unary-post-increment add Unary

//=>[--c] + [+b] + [--a] * [+b++] - [+b] * [a] + [--a] - [+true]
//value: 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
// pre-increment add unary add pre-increment Multiple unary-post-increment substract Multiple  value add pre-increment substract unary

let d="-100";
let e="20";
let f="30";
let g=true;

// Only use variable value && Dont use variable twice
console.log( -d * e )//2000
console.log( ++e * ++g + ++f + -d )//173
