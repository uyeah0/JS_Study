//함수 표현식
"use strict";

let a = function(){
    alert("Hello");
}

a();
alert(a); // a의 모습 보임

let b = a;
let c = a;

b();
c();