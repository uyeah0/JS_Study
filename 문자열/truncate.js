"use strict"

function truncate(str, maxlen){
    let str2 ="";
    if(str.length > maxlen){
        for(let i =0; i < maxlen-1; i++){
            str2 += str[i];
        }
        str2 += "...";
    }else{
        str2 += str.slice();
    }
    return str2;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));