const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];

if(a >= 1.0 && b >= 1.0) {
    console.log('High');
} else if(a >= 0.5 && b >= 0.5) {
    console.log('Middle');
} else {
    console.log('Low');
}



