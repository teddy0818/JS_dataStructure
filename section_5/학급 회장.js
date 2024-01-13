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
    function solution(k, arr){
        let answer, sum=0;
        for(let i=0; i<k; i++) sum+=arr[i];
        answer=sum;
        for(let i=k; i<arr.length; i++){
            sum+=(arr[i]-arr[i-k]);
            answer=Math.max(answer, sum);
        }                    
        return answer;
    }
    
    let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
    console.log(solution(3, a));
        
*/
