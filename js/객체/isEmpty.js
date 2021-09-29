"use strict"

function isEmpty(obj){
    for(let i in obj){
        return false;
    }
    return true;
};

let student = [];
console.log(isEmpty(student));
student["나미림"] = 2120;
console.log(isEmpty(student));
student["고미림"] = 2121;
console.log(isEmpty(student));