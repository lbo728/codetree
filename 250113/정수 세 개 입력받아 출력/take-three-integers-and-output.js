const fs = require('fs');

// let arr = fs.readFileSync(0).toString().split("\n");
let arr = fs.readFileSync(0).toString().split("\n");

let temp = arr[0].split(" ");

let a = Number(temp[0]);
let b = Number(temp[1]);
let c = Number(arr[1]);



// let a = Number(arr[0]);
// let b = Number(arr[1]);
// let c = Number(arr[2]);

console.log(a,b,c);