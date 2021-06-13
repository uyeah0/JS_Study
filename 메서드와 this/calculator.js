"use strict"

let a, b;
let calculator = { 
    read(){
        a= +prompt("수 입력 1");
        b= +prompt("수 입력 2");
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
};

calculator.read(); 
console.log( calculator.sum() );
console.log( calculator.mul() );