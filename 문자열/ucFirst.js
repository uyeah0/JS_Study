"use strict"

function unFirst(str){
    let str2 = str[0].toUpperCase() + str.slice(1);
    return str2;
}

console.log(unFirst("john"));
