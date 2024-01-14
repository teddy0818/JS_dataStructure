function solution(a, b) {
  let answer = true;

  let aMap = new Map();
  let bMap = new Map();

  for (let i = 0; i < a.length; i++) {
    let aVal = aMap.get(a[i]);
    if (!aVal || aVal == undefined) {
      aMap.set(a[i], 1);
    } else {
      aMap.set(a[i], aVal + 1);
    }

    let bVal = bMap.get(b[i]);
    if (!bVal || bVal == undefined) {
      bMap.set(b[i], 1);
    } else {
      bMap.set(b[i], bVal + 1);
    }
  }

  for (let [aKey, aVal] of aMap) {
    let bVal = bMap.get(aKey);
    if (aVal != bVal) {
      answer = false;
      return answer;
    }
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

/*

    <Tip>
    - hashMap 사용
   
*/

/*

    <정답> 
    function solution(str1, str2){
        let answer="YES"; 
        let sH = new Map();
        for(let x of str1){
            if(sH.has(x)) sH.set(x, sH.get(x)+1);
            else sH.set(x, 1);
        }
        for(let x of str2){
            if(!sH.has(x) || sH.get(x)==0) return "NO";
            sH.set(x, sH.get(x)-1);
        }
        return answer;
    }
    
    let a="AbaAeCe";
    let b="baeeACA";
    console.log(solution(a, b));

*/
