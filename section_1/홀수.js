
function solution(arr){         

    let answer = '';
    let oddSum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let i=0; i<arr.length; i++) {
        // 홀수 
        if(arr[i] % 2 == 1) {
            if (min > arr[i]) {
                min = arr[i];
            }
            oddSum += arr[i];
        }
    }

    answer = oddSum + '\n' + min;
    
    return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(arr));

/*

 - 코딩 인터뷰 할땐 최대한 통일성 있게 코드를 짜야한다 ex) '=='만 쓰거나 '==='만 쓰거나
 - for (let 변수 of 배열) { } : 배열 반복문

*/


/*

    function solution(arr){
        let answer=[];
        let sum=0, min=1000;
        for(let x of arr){
            if(x%2===1){
                sum+=x;
                if(x<min) min=x;
            }
        }
        answer.push(sum);
        answer.push(min);     
        return answer;
    }
            
    arr=[12, 77, 38, 41, 53, 92, 85];
    console.log(solution(arr));

*/