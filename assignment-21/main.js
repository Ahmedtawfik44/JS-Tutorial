let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

let a_s = Array.from(setOfNumbers);
console.log(a_s[2]);

console.log("1/////////////////////////////");

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let uniqe = new Set(myFriends);
let sorted = Array.from(uniqe);
console.log(sorted.sort());

console.log("2/////////////////////////////");

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let mapo = new Map(Object.entries(myInfo));
console.log(mapo);
console.log(mapo.size);
console.log(mapo.has("role"));

console.log("3/////////////////////////////");

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

console.log("4 /////////////////////////////");

let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);

console.log("5 /////////////////////////////");

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let nums = chars.filter((e) => !isNaN(parseInt(e)));
let chars_update = chars.filter((e) => isNaN(parseInt(e)));
let temp = [];
for (let i = 0; i < nums.length; i++) {
  if (chars_update.length > i) temp.push(chars_update[i]);
}
let result = [...temp, ...chars_update];
console.log(result); // abcabcde

console.log("6 /////////////////////////////");

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let all = [...numsOne, ...numsTwo];
let all1 = numsOne.copyWithin(numsTwo);
let all2 = numsOne.concat(numsTwo);
numsOne.push(...numsTwo);

console.log(all);
console.log(all1);
console.log(all2);
console.log(numsOne);

console.log("7/////////////////////////////");

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1,...n2].length);