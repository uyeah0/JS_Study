"use strict"

function findSmallestElement(arr){
    let min = arr[0];
    let a = 0;
    for(let i of arr){
        if(min > i) min = i;
        a =1;
    }
    if( a == 1) return min;
    else return 0;

}

console.log(findSmallestElement([20, 200, 23, 1, 3, 9]));