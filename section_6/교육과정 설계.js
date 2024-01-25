function solution(input1, input2) {
  let answer = "YES";
  let queue = input1.split("");
  console.log(queue);

  for (val of input2) {
    if (queue.includes(val)) {
      queue.shift();
    }
  }

  if (queue.length == 0) {
    answer = "YES";
  } else if (queue.length > 0) {
    answer = "NO";
  }

  return answer;
}

let input1 = "CBA";
let input2 = "CBDAGE";
console.log(solution(input1, input2));

/*
        <Tip>
        - Queue 이용해서 다시 풀기

  
  */

/*
    
        <정답> 
        function solution(need, plan){
            let answer="YES";
            let queue=need.split('');
            for(let x of plan){
                if(queue.includes(x)){
                    if(x!==queue.shift()) return "NO";
                }
            }
            if(queue.length>0) return "NO";  
            return answer;
        }

        let a="CBA";
        let b="CBDAGE";
        console.log(solution(a, b));
    */
