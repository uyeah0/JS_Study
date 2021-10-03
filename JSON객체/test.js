"use strict";
let obj = {     //객체도 가능 
    name : "Lee",
    age : 20, 
    alive : true, 
    hobby:['music', 'tennis']
}
let todo = [   //배열도 가능 
    {id:1, content:'HTML'}, 
    {id:2, content:'CSS'}, 
    {id:3, content:'JavaScript'} 
];
let json = JSON.stringify(obj);
console.log(typeof json, json);
let todos = JSON.stringify(todo);
console.log(typeof todos, todos);
