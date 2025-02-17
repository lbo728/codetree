const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i = 0; i <= input.length; i++) {
    let x = Number(input[i]);

    if(x === 1) {
        console.log('John');
        continue;
    }
    if(x === 2) {
        console.log('Tom');
        continue;
    }
    if(x == 3) {
        console.log('Paul');
        continue;
    }
    if(x == 4) {
        console.log('Sam');
        continue;
    } 
    if(x >= 5) {
        console.log('Vacancy');
        break;
    }
}

