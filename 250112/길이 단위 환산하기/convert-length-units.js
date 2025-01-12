const fs = require("fs");

let input = Number(fs.readFileSync(0).toString());
let ft = 30.48;

console.log((input*ft).toFixed(1));