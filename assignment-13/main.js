function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    let end = zName.indexOf(" ");
    end += 2;
    // return ` Hello ${zName.substr(0,end).toUpperCase()}`;
    return `Hellow ${zName.slice(0, zName.indexOf(" "))} ${zName
      .slice(end - 1, end)
      .toUpperCase()} `;
  }
  namePattern();
  function ageWithMessage() {
    return ` Your Age Is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    return ` You Live In  ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  countryTwoLetters();
  function fullDetails() {
    return `${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt")); // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria")); // Hello Ahmed A., Your Age Is 32, You Live In SY

console.log(`-------------------------------------------------`);

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate=(protocol, web, tld)=>`${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log(`-------------------------------------------------`);

let checker=(zName)=>(status)=>(salary)=>status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
   
console.log(`--------------------------------------------------`);

function specialMix(...data) {
  let c=0;
  for (let i = 0; i < data.length; i++) {
    if(isNaN(parseInt(data[i]))===false)
      c+=parseInt(data[i]);
  }
  if(c===0)
    return `All Is Strings`;

  return c;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

console.log(`--------------------------------------------------`);









