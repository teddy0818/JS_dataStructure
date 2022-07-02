
function solution(arr){         
    let answer = arr[0];

    for(let i=1; i<arr.length; i++) {
        if (answer > arr[i]) {
            answer = arr[i];
        }
    }
   
    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));

/* 

Number.MAX_SAFE_INTEGER - 숫자 중 최댓값

*/
/* 

     function solution(arr){         
                let answer, min=Number.MAX_SAFE_INTEGER;
                for(let i=1; i<arr.length; i++){
                    if(arr[i]<min) min=arr[i];
                }
                answer=min;
                return answer;

            }

            let arr=[5, 7, 1, 3, 2, 9, 11];
            console.log(solution(arr));

*/