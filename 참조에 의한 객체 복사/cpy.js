"use strict"

let user = {name : "John"};

let permissions1 = {canView: true};
let permissions2 = { canEdit : true};

// permissions1과 permissions2의 프로퍼티를 user로 복사
Object.assign(user, permissions1, permissions2);

// now user = {name: "John", canVew = true, canEdit: true};