const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let result = "";

for(i = 1; i <= n; i++) {
    if(i % 2 === 0) {
        continue;
    }
    if(i % 10 === 5 ) {
        continue;
    }

    if (i % 3 === 0 && i % 9 !== 0) {
        continue;
    }

    result += (i + " ");
}

console.log(result);