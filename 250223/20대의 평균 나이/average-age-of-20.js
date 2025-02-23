const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n");
let n;
let index = 0;
let sumVal = 0;


while (true) {
    n = Number(input[index]);
    if (n < 20 || n >= 30) {
        break;
    }
    sumVal += n;
    index++;
}

console.log((sumVal/index).toFixed(2));