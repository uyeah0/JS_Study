"use strict"

function sumInput(){
    let str = [];
    let sum =0;
    while(true){
        let a = prompt("숫자 입력");
        if(a === "" || a === null || !(isFinite(a))) break;
        str.push(+a);
    }
    for(let i of str){
        sum += i;
    }
    return sum;
}

alert(sumInput());
