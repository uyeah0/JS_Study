let obj = {      //객체도 변환가능 
        name : "Lee",
        age : 20, 
        alive : true, 
        hobby:['music', 'tennis']
    }
    let todo = [    //배열도 변화 가능
        {id:1, content:'HTML'}, 
        {id:2, content:'CSS'}, 
        {id:3, content:'JavaScript'} 
    ];
    let json = JSON.stringify(obj);
    console.log(typeof json, json);
    let todos = JSON.stringify(todo);
    console.log(typeof todos, todos);
    
    //space 로 가독성을 높인다. 
    let prettyJson = JSON.stringify(obj, null, 2); //2칸씩 들여쓰기 한다. 
    console.log(prettyJson);
    //값의 type이 Number이면 필터링되어 반환되지 않는다. 
     function filter(key, value){
         return typeof value === 'number' ? undefined : value;
     }
    // replacer 로 원하는 프로퍼티만 변환 가능 
    let filterObj = JSON.stringify(obj, filter, 2);
    console.log(filterObj);
    