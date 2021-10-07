"use strict";

function getLocalDay(date){
    let days = ['MO','TU', 'WE','TH','FR','SA', 'SU'];

    return days[date.getDay()];
}


let date = new Date(2019,11,5);

console.log(getLocalDay(date));

