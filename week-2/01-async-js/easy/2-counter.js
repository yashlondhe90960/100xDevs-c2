let counter = 0;
setTimeout(increaseCounterByOneSec, 1000);

function increaseCounterByOneSec(){
    counter += 1;
    console.log(counter);
}