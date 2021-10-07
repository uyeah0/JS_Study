"use strict";

function formatDate(date){
    let now = new Date();
    if( now.getSeconds() - date.getSeconds() < 1 ){
        return '현재';
    }else if(now.getSeconds() - date.getSeconds()  <= 60){
        return now.getSeconds() - date.getSeconds() +'초 전';
    }else if(now.getMinutes() - date.getMinutes()  < 60){
        return now.getMinutes() - date.getMinutes() +'분 전';
    }else{
        return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();
    }

}

console.log( formatDate(new Date(new Date - 1)) ); // "현재"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30초 전"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5분 전"

// 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
console.log( formatDate(new Date(new Date - 86400 * 1000)) );