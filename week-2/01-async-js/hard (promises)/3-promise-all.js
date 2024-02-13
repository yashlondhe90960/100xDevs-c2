/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function waitOneSecond() {
    return new Promise((res) => {
      res();
    }, 1000);
  }
  
  function waitTwoSecond() {
    return new Promise((res) => {
      res();
    }, 2000);
  }
  
  function waitThreeSecond() {
    return new Promise((res) => {
      res();
    }, 3000);
  }
  
  function calculateTime() {}