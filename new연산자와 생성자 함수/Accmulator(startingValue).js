<<<<<<< HEAD
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

=======
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

>>>>>>> 45e38830e0ca9d75e08128978e6afa50de664c3b
alert(accumulator.value);