"use strict"

function truncate(str, maxlen){
    let str2 ="";
    for(let i =0; i < maxlen; i++){
        str2 += str[i];
    }
    str2 += "...";
    return str2;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));