const fs = require('fs');
let N = Number(fs.readFileSync(0).toString().trim());

let sum = 0;
let plusParameter = 0;

for(i = 1; i <= 100; i++) {
    sum += i;
    if(sum >= N) {
        plusParameter = i;
        break;
    }
}

console.log(plusParameter);