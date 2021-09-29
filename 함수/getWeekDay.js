"use strict"
//날짜를 입력하면  ”MON”,”WED”,”THU”,”FRI”,”SA”,”SUN” 
//이라고 출력하는 함수 getWeekDay(date)를 생성하시오. 


function getWeekDay(date){
    let days = ["SON","MON","THU","WED","THU","FRI","SAT"];
    return days[date.getDay()]; // getDaty()는 0123456반환
}
let someday = new Date(2021,1,1); // TUE
console.log(getWeekDay(someday));