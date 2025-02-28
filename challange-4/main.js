let a="Elzero Web School";

//include this method in your solution [slice , charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

//8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); //HHHHHHHH

//Return Array
console.log(a.split(" ",1));// [Elzero]

//Use only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,6) +` ${a.substr(10)}` );// Elzero school

//Solution Must Be Dynamic And string May Change all capital exact last and first letter
console.log(a.charAt(0).toLowerCase() + a.substr(1,15).toUpperCase() + a.substring(a.length - 1).toLowerCase()); //eLZERO WEB SCHOOl
