"use strict"

function checkSpam(str){
    if(!str) return str;
    let str2 = str.toUpperCase();
    if(str2.includes('XXX') == true || str2.includes('VIAGRA') == true) {
        return true;
    }
    
    else return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
