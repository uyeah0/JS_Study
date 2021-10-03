<<<<<<< HEAD
"use strict"
function makeCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
=======
"use strict"
function makeCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
>>>>>>> 764dfe12a75660649ac1fb795e520e4d544fc15e
