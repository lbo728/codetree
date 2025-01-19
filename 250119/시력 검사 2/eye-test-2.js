const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let realNumber = Number(input[0]);


if (realNumber >= 1.0) {
    console.log('High');
} else if (realNumber >= 0.5 ) {
    console.log('Middle');
} else {
    console.log('Low');
}