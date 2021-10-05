"use strict";

function formatDate(date){
    let diff= new Date() - date;

    if( diff < 1000){ // 1초 미만
        return '현재';
    }

    let sec = Math.floor(diff/1000);

    if(sec < 0){
        return sec + '초 전';
    }

    let min = Math.floor(diff/60000);
    if(min < 60){
        return min + '분 전';
    }

    


}

console.log(formatDate());