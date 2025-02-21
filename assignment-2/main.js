let num1=10;
let num2=20;

// Ouput
console.log(num1+""+num2); // Normal Concatenate => 1020
console.log(typeof(num1+""+num2)); // Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof(`${num1}${num2}`)); // Template Literals Way => String

console.log(num2+"\n"+num1);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${num2}
${num1}`);
/*
  Template Literals Way
  20
  10
*/

//---------------------------------------------
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//----------------------------------------------
console.log(`\`I'm In /n \\\\ \n love \\\\ """ ''' \n ++ width ++ \n \\"""\"""\n ""js""\`\` `);
//---------------------------------------------
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${a}${b}_${b}`); // _21_2021_2021_2021_20_