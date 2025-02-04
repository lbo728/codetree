const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

let sum = 0;
let cnt = 0;
let avr = 0;

for(i = 1; i <= n; i++) {
    let x = Number(input[i]);
    sum += x;
    cnt++;
}

avr = (sum/cnt).toFixed(1);

console.log(`${sum} ${avr}`);


