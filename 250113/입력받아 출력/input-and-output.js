const fs = require('fs');

let arr = fs.readFileSync(0).toString().split("\n");

console.log(arr[0], arr[1]);