const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for(i = 1; i <= (input.length - 1); i++) {
        let x = Number(input[i]);
    if(x % 2 == 1 && x % 3 == 0) {
        cnt += x;
    }
}

console.log(cnt);