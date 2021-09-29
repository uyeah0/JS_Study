"use strict"

let obj = {};
function make(name, age){
     obj = {
        name:name,
        age: age
    };
    return 0;
}
let name = prompt("이름");
let age = prompt("나이");

make(name, age);
alert(obj.name);
alert(obj.age);


