const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let personA = input[0].split(" ");
let personB = input[1].split(" ");
let personC = input[2].split(" ");

let achA = personA[0];
let tempA = Number(personA[1]);

let achB = personB[0];
let tempB = Number(personB[1]);

let achC = personC[0];
let tempC = Number(personC[1]);

let emergencyPeopleCount = 0;

if(achA === 'Y' && tempA >= 37) {
    emergencyPeopleCount += 1;
}
if(achB === 'Y' && tempB >= 37) {
    emergencyPeopleCount += 1;
}
if(achC === 'Y' && tempC >= 37) {
    emergencyPeopleCount += 1;
}


if(emergencyPeopleCount >= 2) {
    console.log('E');
} else {
    console.log('N');
}
