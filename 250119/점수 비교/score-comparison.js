const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split("\n");

let A = input[0].split(" ");
let B = input[1].split(" ");

let mathA = Number(A[0]);
let engA = Number(A[1]);

let mathB = Number(B[0]);
let engB = Number(B[1]);


console.log(mathA > mathB && engA > engB ? 1 : 0);