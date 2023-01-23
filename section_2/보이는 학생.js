
function solution(arr){      
    let answer = 0;

    let maxHeight = 0;

    for (let i=0; i<arr.length; i++) {
        if(maxHeight < arr[i]) {
            answer++;
            maxHeight = arr[i];
        }
        
    }

    return answer;
}

console.log(solution([130, 135, 148, 145, 150, 150, 153]));

/*
    <Tip>



*/
    

/*
    <답안>
  
*/