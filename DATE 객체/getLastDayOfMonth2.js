"use strict";

function getLastDayOfMonth(year, month){
    let date = new Date(year, month+1);

    date.setDate(date.getDate()-1);
    return date.getDate();
}


console.log(getLastDayOfMonth(2012,1)); // 29