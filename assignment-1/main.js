document.write("<h1>Elzero</h1>");
document.querySelector('h1').style.color="blue";
document.querySelector('h1').style.fontSize="80px";
document.querySelector('h1').style.fontWeight="bold";
document.querySelector('h1').style.textAlign="center";
document.querySelector('h1').style.fontFamily="Arial";

//----------------------------------------------------------------------------
console.log("%cElzero %cWEb %cSchool","color:red; font-size:40px ","color:green; font-weight:bold; font-size:40px  " , " color:white; background-color:blue; font-size:40px  ");

//------------------------------------------------------------------------------
console.group("Group1");
    console.log("Message one");
    console.log("Message two");
    console.group("Child Group");
    console.log("Message one");
    console.log("Message two");
    console.groupEnd();
    console.group("child three");
    console.log("Message one");
    console.log("Message two");
    console.groupEnd();
console.groupEnd();

console.group("Group 2");
    console.log("Message one");
    console.log("Message two");
console.groupEnd();

//--------------------------------------------------------------------------------
console.table(["Ahmed","Mohamed","tawfik","hassan","seleman","darwish"]);
//-------------------------------------------------------------------------------

// console.log("Iam In Console"); //Hidden using multiple Or single comment
// document.write("Iam In Page");


