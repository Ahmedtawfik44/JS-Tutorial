let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

 a<10?console.log(10):a >= 10 && a <= 40? console.log("10 To 40"):a>40?console.log("> 40"): console.log("Unknown");

//-------------------------------------------------

 let st = "Elzero Web School";

if ((st.length*2).toString()=== "34") {
  console.log("Good");
}

// W Position May Change
if (st[st.indexOf("W")] === "W") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof Number(st) === "number") { //type op st.length
  console.log("Good");
}

if (st.substr(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}