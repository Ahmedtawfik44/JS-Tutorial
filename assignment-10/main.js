let start = 10;
let end = 100;
let exclude = 40;

for (;;) {
  
  if (start === exclude) {
    start += 10;
    continue;
  }
  console.log(start);
  if (start === end) break;
  start += 10;
}
// Output 10 20 30 50 60 70 80 90 100

console.log("//----------------------------------------");

let start2 = 10;
let end2 = 0;
let stop = 3;

for(let i=start2 ;i>=stop ;i--){
    if(i<start2)
        console.log(`${end2} ${i}`)
    else
    console.log(i);
}

// Output 10 09 08 07 06 05 04 03

console.log("//----------------------------------------");

let start3 = 1;
let end3 = 6;
let breaker = 2;
for(let i=start3 ;i<=end3 ;i++){
    console.log(i);
    for(let j=breaker ;j<(end3 - start3);j+=breaker){
        console.log(`-- ${j}`);
    }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

console.log("//----------------------------------------");

let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
  if(index===(jump + jump))
    break;
  index-=jump;
}

// Output 10 8 6 4

console.log("//----------------------------------------");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let id=letter.length;

for(let i=0;i<friends.length;i++){
    if(friends[i][0]===letter.toUpperCase())
        continue;
    else{
        console.log(`${id} => ${friends[i]}`);
        id++;
    }
}

// Output "1 => Sayed" "2 => Eman" "3 => Mahmoud" "4 => Osama" "5 => Sameh"

console.log("//----------------------------------------");

let start4 = 0;
let swappedName = "elZerO";
let newstring="";

for(let i=start4;i<swappedName.length;i++){
    if(swappedName[i]=== swappedName[i].toLowerCase()){
        newstring+=swappedName[i].toUpperCase();
    }
    else{
        newstring+=swappedName[i].toLowerCase();
    }
        
}
console.log(newstring)


// Output "ELzERo"

console.log("//----------------------------------------");

let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i=mix[start5] ; i<mix.length;i++){
    if(typeof mix[i]==="string")
        continue;
    else
    console.log(mix[i]);
}


// Output 2 3 4
