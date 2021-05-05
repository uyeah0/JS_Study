/*선언함수 화살표함수*/
"use strict";

let n1 = +prompt("숫자 1 : ");
let n2 = +prompt("숫자 2 : ");



function pow(a,n){
    let result =a;
    for(let i =1; i < n;i++){
        result*=a;
    }
    return alert(result);
}

pow(n1,n2);

let age = prompt("나이 : ",'');
let welcome = (age<18)?
() => alert('안녕'):
() => alert("안녕하세요!");

welcome();