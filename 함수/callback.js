// 콜백함수
"use strict";

function ask(question, yes, no){ 
    if(confirm(question)) yes(); 
    else no();
}

function showOk(){
    alert("동의하셨습니다.")
}
function showNo(){
    alert("동의하지 않았습니다.");
}

ask("동의하십니까?", showOk, showNo); // ask의 인수 showOk와 showNo가 콜백함수이다