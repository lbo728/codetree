const fs = require('fs');
let n = fs.readFileSync(0).toString();


let cnt = 1;

while(true) {
    if(n % 2 == 0) {
        n = (n * 3) + 1
    } else {
        n = (n * 2) + 2
    }
    if(n >= 1000) {
        console.log(cnt);
        break;
    }
    cnt++;
}