"use strict";

let date = new Date(2012,0,3);

function getWeekDay(date){
    let days = ['SU', 'MO', 'TU', 'WE', 'FR', 'SA'];
    console.log(date.getDay()); // 0~5 숫자로 요일 알려줌
    return days[date.getDay()];
}

console.log(getWeekDay(date));