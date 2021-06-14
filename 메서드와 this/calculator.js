"use strict"


let calculator = { 
    read(){
        this.a= +prompt("수 입력 1",);
        this.b= +prompt("수 입력 2",);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
};

calculator.read(); 
alert( calculator.sum() );
alert( calculator.mul() );