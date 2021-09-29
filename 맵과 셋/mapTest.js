"use strict"

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 150],
    ['onion', 50],
]);

for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

for(let price of recipeMap.values()){
    console.log(price);
}

for(let entry of recipeMap.entries()){
    console.log(entry);
}

//recipeMap.forEach(value, key, map)
recipeMap.forEach((value, key)=>{
    console.log(`${key} : ${value}`);
})