const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n");
let x;
let width = 0;
let height = 0;
let string = "";
let area = width * height;

for(i = 0; i <= input.length; i++) {
    let x = input[i].split(" ");
     string= x[2];
     width = x[0];
     height = x[1];
     area = width * height;
     console.log(area);

     if (string === 'C'){
        break
    }
     
    
}
 


