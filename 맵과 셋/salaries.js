"use strict"

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries){
      let max = 0; // 가장 큰 값
      let maxName = null; // 가장 큰 값을 가진 사람의 이름
      
      for(const [name, salary] of Object.entries(salaries)){ 
          // name과 salary를 salaries객체를 맵으로 변환하여 반복문을 돌린다
          if(max < salary){
              max = salary;
              maxName = name;
          }
      }
      return maxName;
  }

  console.log(topSalary(salaries));