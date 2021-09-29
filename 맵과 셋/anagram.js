"use strict"

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));

function aclean(arr){
    let map = new Map();
    for(let item of arr){
        let sorted = item // PAN
                    .toLowerCase() // pan
                    .split('') // [p,a,n]
                    .sort() // ['a', 'n', 'p'] 
                    .join(''); // sorted는 하나의 형식으로 정리된 값
        map.set(sorted,item); // 동일한 키가 있는 경우 덮어쓰게 한다.
    }
    return Array.from(map.values()); // 값을 추출한다
}
