let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
//عدم طباعه الارقام ولا السماء التي تبدأ بحرف A
while(index<friends.length){
    if( typeof friends[index]==='string' && friends[index].startsWith('A') || typeof friends[index] === 'number'  ){
        index++;
        continue;
    }

    console.log(`" ${++counter} => ${friends[index]} "`);
    index++;
}
// Output "1 => Sayed" "2 => Mahmoud"