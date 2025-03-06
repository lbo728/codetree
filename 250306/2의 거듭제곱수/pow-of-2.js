const fs = require('fs');
const input = fs.readFileSync(0).toString();


let n = 1;
let sum = 2;

while(true) {
    if(input == sum) {
        console.log(n);
        break;
    }
    sum*=2;
    n++;
}