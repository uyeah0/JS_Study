<<<<<<< HEAD
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
=======
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
>>>>>>> 45e38830e0ca9d75e08128978e6afa50de664c3b
alert( "Mul=" + calculator.mul() );