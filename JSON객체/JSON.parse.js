"use strict";
let obj = {
    name : "Lee",
    age : 20, 
    alive : true, 
    hobby:['music', 'tennis']
}
let todo = [
    {id:1, content:"HTML"}, 
    {id:2, content:'CSS'}, 
    {id:3, content:'JavaScript'} 
];
let json = JSON.stringify(obj); 
console.log(typeof json, json);
let parsed1 = JSON.parse(json); 
console.log(typeof parsed1, parsed1);
let json2 = JSON.stringify(todo);
console.log(typeof json2, json2);
let parsed2 = JSON.parse(json2); 
console.log(typeof parsed2, parsed2);
