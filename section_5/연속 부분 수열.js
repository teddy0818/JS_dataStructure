
function solution(n, m, arr) {
    // 다시 풀기

    /*
    let answer = 0;
    let sum = 0;
    let p1 = 0;
    let p2 = 0;

    while(p1<n && p2<n) {
        sum += arr[p2];
        if(sum==m) {
            sum = 0;
            p1++;
            p2 = p1;
            answer++;
        } else if(sum<m) {
            p2++;
        } else if(sum>m) {
            sum = 0;
            p1++;
            p2 = p1;
        }
    }
    */

    let answer = 0;
    let sum = 0;
    let lt = 0;

    for(let rt=0; rt<n; rt++) {
        sum += arr[rt];
        if(sum==m) {
            answer++;
        }
        while(sum>=m) {
            sum -= arr[lt++];
            if(sum==m) {
                answer++;
            }
        }
    }

    
    return answer;
}

console.log(solution(8, 6, [1,2,1,3,1,1,1,2]));

/*
    <Tip>
   - 투 포인터 알고리즘의 정석 문제
*/
    

/*
    <정답> 
    function solution(m, arr){
        let answer=0, lt=0, sum=0;
        for(let rt=0; rt<arr.length; rt++){
            sum+=arr[rt];
            if(sum===m) answer++;
            while(sum>=m){
                sum-=arr[lt++];
                if(sum===m) answer++;       
            }
        }        
        return answer;
    }
    
    let a=[1, 2, 1, 3, 1, 1, 1, 2];
    console.log(solution(6, a));
    
        
*/