
function solution(k, arr) {
    /*
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        let curSum = 0;
        for(let j = i; j < i+k; j++){
            curSum += arr[j];
            if(answer < curSum) {
                answer = curSum;
            }
        }
    }
    */

    let answer = 0;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(i < k) {
            sum += arr[i];
            continue;
        }
        sum += arr[i] - arr[i-k];
        if(sum > answer) {
            answer = sum;
        }
    }


    return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

/*

    <Tip>
    - 이중포문이 아닌 슬라이딩 윈도우 활용해서 풀어야 함
   
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