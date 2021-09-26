"use strict"

function Calculator(){
    this.read = function(){
        this.a = +prompt("수 입력1");
        this.b = +prompt("수 입력2");
    };
    this.sum = function(){
        return this.a+this.b;
    };
    this.mul = function(){
        return this.a*this.b;
    };
}


let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );