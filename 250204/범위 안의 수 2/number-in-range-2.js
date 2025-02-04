const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;
let cnt = 0;
let avr = 0;

for(i = 0; i <= input.length; i++) {
    let x = Number(input[i]);
    if(x >= 0 && x <= 200) {
        sum += x;
        cnt++;
    }
}

avr = (sum/cnt).toFixed(1);

console.log(`${sum} ${avr}`);
