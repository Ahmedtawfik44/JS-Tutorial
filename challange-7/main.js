let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "https://www.youtube.com/watch?v=_n_oiZRqH_k&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=146";
let url7 = "https://elzero.org/javascript-2021-regular-expression-challenge/";

let re = /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\D+\w+\D+)?(\/\D+\d+\D+\d+)?(\/\D+\d+\D+)?/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));


