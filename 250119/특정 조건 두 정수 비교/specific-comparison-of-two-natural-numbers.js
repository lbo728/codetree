const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let isSmaller;
let isEqual;


if (a < b) {
    isSmaller = 1;
} else {
    isSmaller = 0;
} 

if (a === b) {
    isEqual = 1;
} else {
    isEqual = 0;
}

console.log(isSmaller, isEqual);