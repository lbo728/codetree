const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");
let personA = input[0].split(" ");
let personB = input[1].split(" ");

let ageA = Number(personA[0]);
let sexA = personA[1];

let ageB = Number(personB[0]);
let sexB = personB[1];

if(ageA >= 19 && sexA === 'M' || ageB >= 19 && sexB === 'M') {
    console.log(1);
} else {
    console.log(0);
}