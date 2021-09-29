<<<<<<< HEAD
"use strict"

let obj = {};

function A(){
    return obj;
};
function B(){
    return obj;
};

=======
"use strict"

let obj = {};

function A(){
    return obj;
};
function B(){
    return obj;
};

>>>>>>> 45e38830e0ca9d75e08128978e6afa50de664c3b
console.log(new A()==new B);