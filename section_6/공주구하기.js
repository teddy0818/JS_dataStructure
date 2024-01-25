function solution(n, k) {
  let answer = 0;
  let queue = [];
  let count = 0;

  // queue 배열 생성
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    count++;
    // count가 k번째가 될 때
    if (count === k) {
      for (let j = 0; j < k - 1; j++) {
        queue.push(queue.shift());
      }
      queue.shift();
      count = 0;
    }
  }

  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));

/*
        <Tip>
        - Queue 이용해서 다시 풀기

  
  */

/*
    
        <정답> 
        function solution(n, k){
            let answer;
            let queue=Array.from({length:n}, (v, i)=>i+1); 
            while(queue.length){
                for(let i=1; i<k; i++) queue.push(queue.shift());
                queue.shift(); answer=queue.shift();
            }  
                if(queue.length===1)
            return answer;
        }

        console.log(solution(8, 3));
        
    */
