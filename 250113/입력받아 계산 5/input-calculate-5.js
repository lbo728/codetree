const fs = require('fs');

let input = fs.readFileSync(0).toString();

let [a,b] = input.split(" ");

let numberA = Number(a);
let numberB = Number(b);


console.log(numberA+numberB);