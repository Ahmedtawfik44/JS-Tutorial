function sayHello(theName, theGender = "") {
  if (theGender === "Male") console.log(`"Hellow Mr ${theName}`);
  else if (theGender === "Female") console.log(`"Hellow Mrs ${theName}`);
  else console.log(`"Hellow ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("//------------------------------------------");

function calculate(firstNum, secondNum = "null", operation = "add") {
  if (secondNum === "null") console.log(`Second Number Not Found`);
  else if (operation === "add") console.log(firstNum + secondNum);
  else if (operation === "subtract") console.log(firstNum - secondNum);
  else if (operation === "multiply") console.log(firstNum * secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("//------------------------------------------");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let day = theAge * 360;
    let month = day / 30;
    let week = month * 4;
    let hour = 24 * day;
    let minuit = hour * 60;
    let second = minuit * 60;
    console.log(`Day = > ${day}
month= > ${month} 
week = > ${week} 
hour = > ${hour}
minuit = > ${minuit}
second = > ${second}`);
  } else console.log("Age Out Of Range");
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(20); // Months Example => 456 Months

console.log("//------------------------------------------");

function checkStatus(a, b, c) {
  let array = [a, b, c];
  let name, age, stats;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") name = array[i];
    else if (typeof array[i] === "number") age = array[i];
    else if (typeof array[i] === 'boolean') stats = array[i];
  }

  stats === true
    ? (stats = "You Are Available For Hire")
    : (stats = "You Are Not Available For Hire");

  console.log(`"Hello ${name}, Your Age Is ${age},${stats}"`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("//------------------------------------------");

function createSelectBox(startYear, endYear) {
   document.write(`<select>`);
   for (let index = startYear; index <=endYear; index++) {
    document.write(`<option value="${index}">${index}</option>`)
   }
   document.write(`</select>`);
  }
  createSelectBox(2000, 2021);

console.log("//------------------------------------------");

function multiply(...num){
    let r=1;
    for (let index = 0; index < num.length; index++) {
        if(typeof num[index]==='string')
            continue;

        else if(Number.isInteger(num[index])){
            r*=num[index];
        }
        
        else{
        num[index]=Math.trunc(num[index]);
        r*=num[index];
        }
    }
    console.log(r);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000