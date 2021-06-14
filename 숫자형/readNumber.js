"use strict"

let a;
function readNumber(){
    let r;
    let msg;
    while(1){
        a = +prompt("수 입력:");
        if( a === null || a === ' ' ){
            msg = null;break;
        } 
        else if( isFinite(a) == true) msg = a; break;
    }    
    return msg;
}
