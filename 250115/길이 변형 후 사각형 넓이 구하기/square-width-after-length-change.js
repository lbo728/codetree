const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let x = Number(input[0]);
let y = Number(input[1]);

x += 8;
y *= 3;

console.log(x);
console.log(y);
console.log(x*y);