const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let sumVal = 0;
let index = 0;

while(true) {

    if(n === 1) {
        console.log(index);
        break;
    } else {
        if(n % 2 === 0) {
            n  = n / 2
        } else {
            n = (n * 3) + 1;
        }
        index++;
    }    
}
