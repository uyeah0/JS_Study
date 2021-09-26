"use strict"

function readNumber(){
    let r = 0;
    while(1){
        let a = +prompt("수 입력:");
        if( a === undefined || a == null ) r =null; break;
        if( isFinite(a) == true) r = a; break;
    }    
}
