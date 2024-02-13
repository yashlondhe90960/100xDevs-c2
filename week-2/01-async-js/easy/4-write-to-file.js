const fs = require('fs')

let somethingToWrite = 'Euuuu loo euu laa';
fs.writeFile(
    '01-async-js/easy/last.txt',
    somethingToWrite,
    function(err){
        if(err){
            console.log(err);
        }
    }
);


fs.readFile('01-async-js/easy/last.txt', 'utf-8', function (err, data){
    console.log(data);
});
