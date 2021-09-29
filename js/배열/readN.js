"use strict"

function sumInput(){
    let arr = [];
    while(1){
        let a = prompt("수");
        if(a === null || a === undefined || isFinite(a)==false || a ==' ') break;
        arr.push(+a);
    }
    let sum =0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}

alert(sumInput());