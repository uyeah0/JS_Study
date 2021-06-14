"use strict"


function Accumulator(startingValue){

    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("더할 수 입력");
    }
}

let accumulator = new Accumulator(1); // 최초값 1
accumulator.read();
accumulator.read();

alert(accumulator.value);