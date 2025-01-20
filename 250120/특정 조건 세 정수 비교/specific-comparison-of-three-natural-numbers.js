const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let minimum = Math.min(a,b,c);
let resultA = a === minimum ? 1 : 0;
let resultB;


if(a == b == c) {
    resultB = 1;
} else {
    resultB = 0;
}


console.log(resultA, resultB);