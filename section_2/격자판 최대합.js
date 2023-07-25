
function solution(arr){     
    let answer = [];
    let sum1 = 0; // 행 
    let sum2 = 0; // 열
    let sum3 = 0; // 대각선 '\'  
    let sum4 = 0; // 대각선 '/'
    
    for(let i=0; i<arr.length; i++) {
        // 초기화
        sum1 = 0;
        sum2 = 0;
        for(let j=0; j<arr.length; j++) {
            // 행 합
            sum1 += arr[i][j];
            // 열 합
            sum2 += arr[j][i];
            // 제일 큰 수
            answer = Math.max(answer, sum1, sum2);
        }
    }

    for(let i=0; i<arr.length; i++) {
        // 대각선 '\' 합
        sum3 += arr[i][i];
        // 대각선 '/' 합
        sum4 += arr[i][arr.length-1-i];
    }

    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
]
console.log(solution(arr));

/*
    <Tip>



*/
    

/*
    <답안>
     function solution(arr){         
                let answer=[];
                answer.push(arr[0]);
                for(let i=1; i<arr.length; i++){
                    if(arr[i]>arr[i-1]) answer.push(arr[i]);
                }
                return answer;
            }

            let arr=[7, 3, 9, 5, 6, 12];
            console.log(solution(arr));

*/