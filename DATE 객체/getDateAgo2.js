"use strict";

function getDateAgo(date, days){
    let answer = new Date(date.getFullYear(), date.getMonth(), date.getDate()-days);
    return answer;
}

let date = new Date(2015, 0, 2); // 2015년 1월 2일


alert( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
alert( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
alert( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)
/*
console.log( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
console.log( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
console.log( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)
*/