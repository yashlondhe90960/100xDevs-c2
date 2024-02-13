const { log } = require('console');
const fs = require('fs');

fs.readFile('async-assignments/easy/main.txt', 'utf-8', function (err, data){
    console.log(data);
});

// doing an expensive text

let sum =0;
for(let i=0;i<100000000;i++){
    sum += i;
}

console.log(sum);
