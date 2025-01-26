const fs = require('fs');
let n = fs.readFileSync(0).toString().trim();

let i = 1;

while(i <= n) {
    console.log("*");
    i++;
}