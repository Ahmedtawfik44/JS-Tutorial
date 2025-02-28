
let e = "Elzero";

console.log(e.charAt(0).toLowerCase()); // e
console.log(e[0].toLowerCase()); // e
console.log(e.split("",1)[0].toLowerCase()); // e
console.log(e.substr(0,1).toLowerCase()); // e
console.log(e.substring(0,1).toLowerCase()); // e
console.log(e[0].toLowerCase().repeat(3)); // eee

//--------------------------------------------------------

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True  chek letterZ include string or not
console.log(word.startsWith(letterE.toUpperCase())); // True chek letterE startWith string or not
console.log(word.endsWith(letterO.toLowerCase())); // True chek letterO endsWith string or not