/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let show=3;

document.write(`<div>We Have ${show} Admins</div>`);

for(let i=0;i<myAdmins.length;i++){
   let index=1

    if(myAdmins[i]==="Stop")
        break;

    document.write(`<hr>`);
    document.write(`<div> </div>The Admin For Team ${i+1} Is ${myAdmins[i]} </div>`);
    document.write(`<h3>Team Member</h3>`);
    
    for(let j=0;j<myEmployees.length;j++){
        if(myAdmins[i][0]===myEmployees[j][0]){
            document.write(`<p>- ${index++} ${myEmployees[j]}</p>`)
        }
    }
}