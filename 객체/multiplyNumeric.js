"user strict"

function multiplyNumeric(obj){
    for(let item in obj){
        if(typeof(obj[item]) == 'number'){ 
            // console.log(obj[item]); 반복문에 들어왔는지 확인
            obj[item] *= 2;
        }
    }
}

let menu = {
    width:200,
    height:300,
    title:"My menu"
};

console.log(menu);

multiplyNumeric(menu);

console.log(menu);
