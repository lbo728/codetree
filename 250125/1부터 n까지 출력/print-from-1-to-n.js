const fs = require('fs');
let n = fs.readFileSync(0).toString().trim();

let result = "";

for(i = 1; i <= n; i++) {
    result += (i + " ");
}

console.log(result);

