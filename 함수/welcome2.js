//함수 표현식
"use strict";

let age = prompt("나이 알려주세요");

let welcome = (age < 18)?
    function() {alert("안녕!");}:
    function() {alert("안녕하세요!");};
welcome();