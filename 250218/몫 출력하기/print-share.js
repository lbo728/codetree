const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i <= input.length; i++) {
    let x = Number(input[i]);
    if(x % 2 === 1) {
        continue;
    }
    if(x % 2 === 0) {
        console.log(parseInt(x / 2));
    }
}

