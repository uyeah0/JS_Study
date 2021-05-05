// 콜백함수 화살표함수
"use strict";

function ask(question, yes, no){ 
    if(confirm(question)) yes(); 
    else no();
}

ask(
    "동의하세요?",
    () => {alert("동의했음");},
    () => {alert("동의안했음");}
);
