"use strict"

function meetAt(y,m,d){
    if(d != undefined){
        return y+'/'+ m + '/' +d;
    }else if(m !=undefined){
        return y+'년 '+ m + '월';
    }else {
        return y +"년"
    }
}
console.log(meetAt(2022)); // 결과 --> "2022년"
console.log(meetAt(2032, 3)); // 결과 --> "2032년 3월"
console.log(meetAt(1987, 10, 28)); // 결과 --> "1987/10/28"