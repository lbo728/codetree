const fs = require("fs");

let input = fs.readFileSync(0).toString();

let arr= input.split(" ");

let switchArr = [Number(arr[1]), Number(arr[0])]

console.log(switchArr[0], switchArr[1]);
