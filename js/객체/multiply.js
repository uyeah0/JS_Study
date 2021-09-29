"use strict"

let menu = {
    hamburger : 5000,
    potato : 1000,
    cola : 1000
};

function multiply( obj ){
    for(let key in obj){
        if(!isFinite(obj[key])==false) { obj[key] *=2; console.log(typeof(obj[key]))};
    }
    return obj;
}

function printMenu(obj){
    for(let key in obj)
    console.log(obj[key]);
}


printMenu(menu);
menu.option = "선택";
multiply(menu);
printMenu(menu);

