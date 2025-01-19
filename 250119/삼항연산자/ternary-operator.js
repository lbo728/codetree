const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let result = Number(input[0]);

const grade =  result === 100 ? 'pass' : 'failure';

console.log(grade);