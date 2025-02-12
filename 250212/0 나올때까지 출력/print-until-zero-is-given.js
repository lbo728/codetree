const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let result;

while(true) {
    result = Number(input[index]);
    if(result === 0) {
        break;
    }
    console.log(result);
    index++;   
}