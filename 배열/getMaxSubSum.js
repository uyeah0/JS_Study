"use strict"

function getMaxSubSum(arr){
    let max =0;
    let sum =0;
    for(let i of arr){
        sum += i;
        if( max < sum ) {
            max = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
   
    return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); //5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11