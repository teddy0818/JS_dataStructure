
function solution(arr){     
    let answer = [];

    for (let i=0; i<arr.length; i++) {
        if(i == 0){
            answer.push(arr[i]);
        }

        if (arr[i] < arr[i+1]) {
            answer.push(arr[i+1]);
        }
    }

    return answer;
}

console.log(solution([7, 3, 9 ,5 ,6, 12]));
 
테스트22

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