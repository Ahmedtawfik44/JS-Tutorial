// Test Case 1
let num = 9; // "009"
if (num < 10) console.log(`0 0 ${num}`);

// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) console.log(`0${num2}`);

// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) console.log(num3);

//------------------------------------------
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) 
    console.log("{num1} Is The Same Value As {str}");

if (num1 == str && num1!==str)
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");

if(num1 != str2 || typeof num1 === typeof +str2 )
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");

if(typeof str === typeof str2 && str!==str2)
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");

//---------------------------------------------
let num11 = 10;
let num22 = 30;
let num33 = "30";

if(num33>num11 && typeof num33 !== typeof num11 && num33 !== num22 && num33!==num11 ){
// Needed Output
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

//---------------------------------------------
// Edit What You Want Here

let nums1 = 15;
let nums2 = 1;
let nums3 = +"15";
let nums4 = 50;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (nums1 > nums2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (nums1 > nums2 && nums1 < nums4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (nums1 > nums2 && nums1 === nums3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((nums1 + nums2) < nums4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((nums1 + nums3) < nums4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((nums1 + nums2 + nums3) < nums4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (nums4 - (nums1 + nums3) + nums2 === 21) {
  console.log("True");
} else {
  console.log("False");
}