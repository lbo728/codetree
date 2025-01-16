const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

const sum = a+b+c;
const avr = Math.trunc((a+b+c)/3);
const total = sum - avr;

console.log(sum);
console.log(avr);
console.log(total);