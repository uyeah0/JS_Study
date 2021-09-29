<<<<<<< HEAD
"use strict"

function readNumber(){
    let r = 0;
    while(1){
        let a = +prompt("수 입력:");
        if( a === undefined || a == null ) r =null; break;
        if( isFinite(a) == true) r = a; break;
    }    
}
=======
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
>>>>>>> 45e38830e0ca9d75e08128978e6afa50de664c3b
