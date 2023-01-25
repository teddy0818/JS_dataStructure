
function solution(A, B){   
    // 1:가위 2:바위 3:보
    // 결과 - 1:A 2:B 3:D
    let answer = [];

    for(let i=0; i<5; i++) {
        if(A[i] == 1 && B[i] == 2) {
            answer.push('B');
        } else if(A[i] == 1 && B[i] == 1) {
            answer.push('D');
        } else if(A[i] == 1 && B[i] == 3) {
            answer.push('A');
        } else if(A[i] == 2 && B[i] == 1) {
            answer.push('A');
        } else if(A[i] == 2 && B[i] == 2) {
            answer.push('D');
        } else if(A[i] == 2 && B[i] == 3) {
            answer.push('B');
        } else if(A[i] == 3 && B[i] == 1) {
            answer.push('B');
        } else if(A[i] == 3 && B[i] == 2) {
            answer.push('A');
        } else if(A[i] == 3 && B[i] == 3) {
            answer.push('D');
        }
    }

    return answer;
}

console.log(solution([2,3,3,1,3], [1,1,2,2,3]));

/*
    <Tip>



*/
    

/*
    <답안>
            function solution(a, b){         
                let answer="";
                for(let i=0; i<a.length; i++){
                    if(a[i]===b[i]) answer+="D ";
                    else if(a[i]===1 && b[i]===3) answer+="A ";
                    else if(a[i]===2 && b[i]===1) answer+="A ";
                    else if(a[i]===3 && b[i]===2) answer+="A ";
                    else answer+="B ";
                }
                
                return answer;
            }

            let a=[2, 3, 3, 1, 3];
            let b=[1, 1, 2, 2, 3];
            console.log(solution(a, b));
*/