/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function Random(name, status, age) {
  let a = [name, status, age], n,s,ag;
  for (let i = 0; i < a.length; i++) {
    typeof a[i] === "string"
      ? (n = a[i])
      : typeof a[i] === "number"
      ? (ag = a[i])
      : (s = a[i]);
  }

  s===true?s="You Are Available For Hire":s="You Are Not Available For Hire";
  console.log(`"Hello ${n}, Your Age Is ${ag}, ${s}"`)

}

Random ("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
Random (38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
Random (true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
Random (false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"