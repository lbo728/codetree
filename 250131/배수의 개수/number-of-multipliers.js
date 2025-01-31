// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let threeCnt = 0;
let fiveCnt = 0;


for (let i = 0; i < 10; i++) {
    let x = Number(input[i]);
    if (x % 3 == 0) {
        threeCnt++;
    } 
    if(x % 5 == 0) {
        fiveCnt++;
    }
}

console.log(`${threeCnt} ${fiveCnt}`);
