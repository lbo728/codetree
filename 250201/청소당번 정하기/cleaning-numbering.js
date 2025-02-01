const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let classCnt = 0;
let hallCnt = 0;
let toiletCnt = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        if(i % 3 == 0) {
            if(i % 12 == 0) {
                toiletCnt++;        
            } else {
                hallCnt++;   
            }
        } else {
            classCnt++; 
        }
    } 
    else if(i % 3 == 0) {
        if(i % 12 == 0) {
            toiletCnt++;    
        } else {
            hallCnt++;
        }
    } 
}

console.log(`${classCnt} ${hallCnt} ${toiletCnt}`);