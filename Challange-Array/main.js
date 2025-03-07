/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]; //z=0 c=4

console.log(my.slice(++zero,--counter).reverse()); // ["Elham", "Mazero"] // z=1 c=3

console.log(my[--counter][0] + my[counter][1] + my[zero].slice(counter)  ); // "Elzero" //c=2 z=1

console.log(my[zero][(++counter) + zero] + my[counter][--zero] ); // "rO"