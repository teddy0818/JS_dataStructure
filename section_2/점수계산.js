
function solution(A, B){   
    let answer = 0;

    // O 이 연속으로 나올때 점수
    let combo = 0;
    
    for(let i=0; i<A; i++) {
        let val = B[i];

        // O 일때 점수 +1
        if(val == 1) {
            // O 이 연속 일 때
            if (i != 0 && B[i-1] == 1) {
                combo += 1;
                answer += combo+1;
            } else {
                answer++;
            }
        } else if(val == 0) {
            combo = 0;
        }
    }

    return answer;
}

// 첫번째값 : 숫자 개수, 두번째값 : OX 여부
console.log(solution(10, [1,0,1,1,1,0,0,1,1,0]));


/*
    <Tip>


    <답안>

    function solution(arr){         
        let answer=0, cnt=0;
        for(let x of arr){
            if(x===1){
                cnt++;
                answer+=cnt;
            }
            else cnt=0;
        }
            
        return answer;
    }

    let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
    console.log(solution(arr));

*/
