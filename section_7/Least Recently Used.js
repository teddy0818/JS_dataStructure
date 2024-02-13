function solution(inputs, size) {
  let results = [];
  for (let input of inputs) {
    // Cache Miss - 새로운 입력값 -> 추가
    if (!results.includes(input)) {
      if (results.length === size) {
        results.pop();
        results.unshift(input);
      } else {
        results.unshift(input);
      }
      // Cache Hit - 기존의 입력값 -> 정렬
    } else if (results.includes(input)) {
      for (let i = results.indexOf(input); i >= 0; i--) {
        if (i === 0) {
          results[i] = input;
        } else {
          results[i] = results[i - 1];
        }
      }
    }
    console.log(results);
  }

  return null;
}

console.log(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5));

/*
        <Tip>
        - 삽입 정렬 응용
        
  */

/*
        <정답> 
        function solution(size, arr){
                let answer=Array.from({length:size}, ()=>0);
                arr.forEach(x => {
                    let pos=-1;
                    for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
                    if(pos===-1){
                        for(let i=size-1; i>=1; i--){
                            answer[i]=answer[i-1];
                        }
                    }
                    else{
                        for(let i=pos; i>=1; i--){
                            answer[i]=answer[i-1];
                        }
                    } 
                    answer[0]=x;  
                });

                return answer;
            }

            let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
            console.log(solution(5, arr));

    */
