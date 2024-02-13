const fs = require('fs');

function removeExtraSpaces(data){

    return data.split(' ')
                .filer((val) => val != '')
                .join(' ');

}

fs.readFile(
    '100xdevs cohort 2/assignments/week-2/01-async-js/medium/main.txt', 'utf-8',
    function(err, data){
        const refinedData = removeExtraSpaces(data);

        fs.writeFile(
            '/home/dv1mosh/Desktop/100xDevs/Week 2.1 Async JS and Intro to Backends/async-assignments/medium/main.txt',
            refinedData,
            function (err) {
              if (err) {
                return;
              } else {
                console.log('Successfully Done');
              }
            }
        );
    }
);