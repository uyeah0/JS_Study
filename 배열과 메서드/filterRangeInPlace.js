"use strict"

function filterRangeInPlace(arr, a, b){
    let arr2 = arr.slice();
    for(let i =0;i < arr2.length; i++){
        if( arr2[i] < a || arr2[i] > b) {
            arr2.splice(i,1);
            i--;
        }
    }

    return arr2;
}

let arr = [5,3,8,1];
console.log(arr);
filterRangeInPlace(arr,1,4);
console.log(arr);