const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);

console.log(n);

if (n < 0) {
    return console.log('minus');
}

