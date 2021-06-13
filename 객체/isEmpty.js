"use strict"

function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

let scheldule = {};

console.log(isEmpty(scheldule)); // true

scheldule["8:30"] = "get up";

console.log( isEmpty(scheldule) ) // false