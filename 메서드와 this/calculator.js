<<<<<<< HEAD
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
=======
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
>>>>>>> 45e38830e0ca9d75e08128978e6afa50de664c3b
alert( calculator.mul() );