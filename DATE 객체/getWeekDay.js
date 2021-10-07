"use strict";

function getWeekDay(date){
    let days = ['SU', 'MO','TU', 'WE','TH','FR','SA'];

    return days[date.getDay()];
}

let date = new Date(2012, 0, 3); 
console.log(getWeekDay(date));

let date2 = new Date(2014, 0, 3);
console.log(getWeekDay(date2));