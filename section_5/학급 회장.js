function solution(n, str) {
  let answer = "";

  let map = new Map();

  for (let i = 0; i < n; i++) {
    let val = map.get(str[i]);
    if (!val || val == undefined) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], val + 1);
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

console.log(solution(15, "BACBACCACCBDEDE"));

/*

    <Tip>
    - hashMap 사용
   
*/

/*

    <정답> 
    function solution(s){  
        let answer;
        let sH = new Map();
        for(let x of s){
            if(sH.has(x)) sH.set(x, sH.get(x)+1);
            else sH.set(x, 1);
        }
        let max=Number.MIN_SAFE_INTEGER;
        for(let [key, val] of sH){
            if(val>max){
                max=val;
                answer=key;
            }
        }
        return answer;
    }

    let str="BACBACCACCBDEDE";
    console.log(solution(str));
        
*/
