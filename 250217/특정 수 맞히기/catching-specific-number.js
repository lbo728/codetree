const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i <= input.length; i++) {
    let x = Number(input[i]);

    if(x < 25) {
        console.log('Higher');
        continue;
    }
    if(x > 25) {
        console.log('Lower');
        continue;
    }
    if(x == 25) {
        console.log('Good');
        break;
    }
}

