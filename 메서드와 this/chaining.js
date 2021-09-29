<<<<<<< HEAD
"use strict"

let ladder = {
    step:0,
    up(){
        this.step++;
        return this; // 객체 자신 반환
    },
    down(){
        this.step--;
        return this;
    },
    showStep: function(){ // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        console.log(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

=======
"use strict"

let ladder = {
    step:0,
    up(){
        this.step++;
        return this; // 객체 자신 반환
    },
    down(){
        this.step--;
        return this;
    },
    showStep: function(){ // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        console.log(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

>>>>>>> 45e38830e0ca9d75e08128978e6afa50de664c3b
ladder.up().up().down().showStep();