"use strict";

let list = {value:1};
list.next = {value:2};
list.next.next = {value:3};
list.next.next.next = {value:4};
list.next.next.next.next = null;

function print(list){
    console.log(list.value);
    if(list.next) {
        print(list.next);
    }
}
print(list);