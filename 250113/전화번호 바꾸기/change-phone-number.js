const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("-");

let front = Number(input[1]);
let back = Number(input[2]);

console.log(`010-${back}-${front}`);