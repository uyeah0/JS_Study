"use strict"
//오늘 하루가 끝날 때까지 몇 초가 남았는지 반환하는 함수 getSecondsToTomorrow( )를 생성하시오. 

function getSecondsToTomorrow(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let a = today - now;

    return Math.round(a/1000);
}

console.log(getSecondsToTomorrow());