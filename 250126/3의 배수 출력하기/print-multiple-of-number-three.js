const fs = require('fs');
let n = fs.readFileSync(0).toString().trim();

let i = 1;
let result = "";

while(i <= n) {
    i++;
    if(i % 3 === 0) {
        result += (i + " ");
    }
}

console.log(result);