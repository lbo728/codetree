const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");
let midResult = Number(input[0]);
let finalResult = Number(input[1]);

if(midResult >= 90) {
     if(finalResult >= 95 ) {
        console.log(100000);
    } else if(finalResult >= 90) {
        console.log(50000);
    } else {
        console.log(0);
    }
} else {
    console.log(0);
}

