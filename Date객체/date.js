"use strict";
let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

let Jan02_1970 = new Date(24 * 60* 60 * 1000);
console.log( Jan02_1970 );

let n = Date.now();
console.log(n);

let date = new Date(Date.parse('2012-02-26T13:51:50.417-07:00'));
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
