
function solution(arr){   
    let answer = [];

    for(let i=0; i<arr.length; i++) {
        let cnt = 1;
        for (let j=0; j<arr.length; j++) {
            if (arr[i] < arr[j]) {
                cnt++;
            }
        }
        answer.push(cnt);
    }

    return answer;
}

console.log(solution([90, 90, 60, 100, 70]));


/*
    <Tip>
    길이가 같은 배열을 미리 만들어서 바로 값을 변경시켜도됨


    <답안>
    function solution(arr){  
        let n=arr.length;
        let answer=Array.from({length:n}, ()=>1);
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(arr[j]>arr[i]) answer[i]++;
            }
        }             
        return answer;
    }

    let arr=[87, 89, 92, 100, 76];
*/
