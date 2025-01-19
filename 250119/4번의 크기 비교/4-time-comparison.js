const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split("\n");
let a = Number(input[0]);

let secondLenght = input[1].split(" ");
let b = Number(secondLenght[0]);
let c = Number(secondLenght[1]);
let d = Number(secondLenght[2]);
let e = Number(secondLenght[3]);

console.log(a > b ? 1 : 0);
console.log(a > c ? 1 : 0);
console.log(a > d ? 1 : 0);
console.log(a > e ? 1 : 0);