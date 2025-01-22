const fs = require('fs');
let firstInput = fs.readFileSync(0).toString().trim().split(" ");
let secondInput = firstInput[1].split("\n");

let mathA = Number(firstInput[0]);
let engA = Number(secondInput[0]);

let mathB = Number(secondInput[1]);
let engB = Number(firstInput[2]);

if(mathA > mathB) {
    console.log('A');
} else if (mathA == mathB && engA > engB) {
    console.log('A');
} else {
    console.log('B');
}