"use strict";

function getSecondsToday(){
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // 차이는 ms
    return Math.round(diff/1000); // 초로 변환
}

console.log(getSecondsToday());