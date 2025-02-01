const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let leapYear = 0; let commonYear = 0;

for(let i = 1; i <= n; i++) {
    if(i % 4 == 0) {
        if(i % 100 == 0 && i % 400 != 0) {
            commonYear++;
        } else {
            leapYear++;
        }
        
    }
}

console.log(leapYear);
