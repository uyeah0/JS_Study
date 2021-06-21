"use strict"

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
for(let i =0 ; i < styles.length; i++){
    if(styles.length%2==1){
        styles[styles.length%2] = "Classics";
    }
}
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Reggae");
styles.unshift("Rap");
console.log(styles);