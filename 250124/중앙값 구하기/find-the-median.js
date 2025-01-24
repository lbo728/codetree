const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let mid;

if(a > b && b > c && a > c)  {
    mid = b;
} else if (b > c && c > a && a < b) {
    mid = c;
}  else if (a > b && b < c && a > c ) {
    mid = c;
}
else {
    mid = a;
}


// if(a > b && b > c && a > c)  {
//     mid = b;
// } else if (b > c && c > a && a < b) {
//     mid = c;
// } else if (b > a && b < c ) {
//     mid = b;
// }  else if (a > b && b < c ){
//     mid = c;
// }   else if (a > b && b < c)   {
//     mid = a;
// }
// else {
//     mid = a;
// }


console.log(mid);
