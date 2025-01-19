const fs = require('fs');

let input = Number(fs.readFileSync(0).toString().trim().split(" "));

let resultThree, resultFive;

if(input % 3 === 0) {
    resultThree = 'YES';
} else {
    resultThree = 'NO';
}

if(input % 5 === 0){
    resultFive = 'YES';
} else {
    resultFive = 'NO';
}

console.log(resultThree);
console.log(resultFive);

