const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let sum = 0;

if(a > b) {
    for(i = b; i <= a; i++) {
        if(i % 5 === 0) {
            sum += i;
        }
    }
} else {
    for(i = a; i <= b; i++) {
        if(i % 5 === 0) {
            sum += i;
        }
    }
}

console.log(sum);