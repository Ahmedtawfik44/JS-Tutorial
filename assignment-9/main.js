let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 2
myFriends.pop();
console.log( myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 1
myFriends.length=num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//-----------------------------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

//----------------------------------------------
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

 // Write One Single Line Of Code
finalArr=arrTwo.slice(2).concat(arrOne.reverse() , arrTwo.slice(0,2).reverse());
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//-------------------------------------------
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toLocaleUpperCase()); // ZERO

//------------------------------------------------
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle))
    console.log("found")

if(haystack.indexOf(needle)!= -1)
    console.log("found")

if(haystack.lastIndexOf(needle) !=-1)
    console.log("found")

//------------------------------------------

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr2.shift();
arr2.shift();
let f=arr2.shift();
let y=arr2.shift()
let x=arr1.pop();
allArrs=f.toLocaleLowerCase().concat(x.toLocaleLowerCase(),y.toLocaleLowerCase())
console.log(allArrs); // fxy