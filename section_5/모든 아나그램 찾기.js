function solution(input1, input2) {
  let answer = 0;

  let bMap = new Map();
  for (let i = 0; i < input2.length; i++) {
    let bVal = bMap.get(input2[i]);
    if (!bVal || bVal == undefined) {
      bMap.set(input2[i], 1);
    } else {
      bMap.set(input2[i], bVal + 1);
    }
  }
  console.log("input2 map : " + bMap);

  for (let i = 0; i < input1.length - input2.length + 1; i++) {
    let str = "";
    for (let j = i; j < i + input2.length; j++) {
      str += input1[j];
    }
    console.log("str : " + str);

    let aMap = new Map();
    for (let k = 0; k < str.length; k++) {
      let aVal = aMap.get(str[k]);
      if (!aVal || aVal == undefined) {
        aMap.set(str[k], 1);
      } else {
        aMap.set(str[k], aVal + 1);
      }
    }
    console.log("aMap : " + aMap);

    // 아나그램인지 아닌지 판단
    let isConsistence = true;
    for (let [aKey, aVal] of aMap) {
      let bVal = bMap.get(aKey);
      if (aVal != bVal) {
        isConsistence = false;
      }
    }
    if (isConsistence) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));

/*

    <Tip>
    
   
*/

/*

    <정답> 
    
        
*/
