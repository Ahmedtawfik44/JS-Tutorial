let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

let [a, , , , e]=myNumbers;

console.log(a * e); // 5

////////////////////////////////////////////////////////

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

let [h,c,j,[p,py,[d,l]]]=mySkills;

console.log(`My Skills: ${h}, ${c}, ${j}, ${p}, ${py}, ${d}, ${l}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

/////////////////////////////////////////////////////////

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let[s,M,ah]=[arr3[1],arr3[2],arr1[0]];

console.log(`My Best Friends: ${s}, ${M}, ${ah}`);

// My Best Friends: Shady, Mahmoud, Ahmed

////////////////////////////////////////

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
   let {age:ag,working:W,country:co,hobbies:[h1,,h3]}=member;
  
  console.log(`My Age Is ${ag} And Iam ${W? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${co}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

  /////////////////////////////////////

  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  // Write Your Destructuring Assignment/s Here
  let {title:T,developer:D}=game;
  let arr=Object.keys(game.releases);
  let [o,A]=[arr[0],arr[1]];
  let [u,J]=game.releases["Oath In Felghana"];
  let {US:u_price,JAP:j_price}=game.releases["Ark Of Napishtim"];
  let {Origin:or}=game.releases;
  
 
console.log(`My Favourite Games Style Is ${T} Style`);
// // My Favourite Games Style Is YS Style

console.log(`And I Love ${D} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${J}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${A}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
/////////////////////////////////////////////////////

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {
    title,
    age,
    available,
    skills:[,two],
}=myFriends[chosen-1];

available?available="Available":available="Not Available";

console.log(title);
console.log(age);
console.log(available);
console.log(two);