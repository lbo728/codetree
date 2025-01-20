const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let result;

if(b > a && b < c) {
    result = 1;
} else {
    result = 0;
}

console.log(result);