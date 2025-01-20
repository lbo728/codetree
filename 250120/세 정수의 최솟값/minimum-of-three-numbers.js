const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let minimum;

if(a <= b && a <= c) {
    minimum = a;
} else if (b <= c && b <= a) {
    minimum = b;
} else {
    minimum = c;
}

console.log(minimum);