"use strict"
//timestemp이요ㅕㅇ
//오늘 하루가 시작된 지 몇 초가 지났는지 반환하는 함수 getSecondsToday( )를 생성하시오.   
// 밀리를 초로

function getSecondsToday(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let a = now - today;

    return Math.round(a/1000);
}
console.log(getSecondsToday());