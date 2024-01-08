
function solution(n, m, arr) {

    let answer = 0;
    let sum = 0;
    let lt = 0;

    for(let rt=0; rt<n; rt++) {
        sum += arr[rt];
        if(sum<m) {
            answer++;
        }
        if(rt!=0 && arr[rt]<=m) {
            answer++;
        }
        while(sum>=m) {
            sum -= arr[lt++];
            if(sum<=m) {
                answer++;
            }
        }
    }

    
    return answer;
}

console.log(solution(5, 5, [1, 3, 1, 2, 3]));

/*
    <Tip>
   
*/
    

/*
    <정답> 
   
    
        
*/