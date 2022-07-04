
function solution(arr){         
    let answer = [];
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            let temp = sum - (arr[i] + arr[j]);
            if(temp == 100) {
                arr.splice(i, 1);
                arr.splice(j, 1);
            }
        }
    }

    return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));


/*
    <Tip>

    reduce 함수

    splice 함수

*/
    

/*
    <답안>
    
         function solution(arr){
                let answer=arr;
                let sum=answer.reduce((a, b)=>a+b, 0);
                for(let i=0; i<8; i++){
                    for(let j=i+1; j<9; j++){
                        if((sum-(answer[i]+answer[j]))==100){
                            answer.splice(j, 1);
                            answer.splice(i, 1);
                        }
                    }
                }
                return answer;
            }
            
            let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
            console.log(solution(arr));
  
    

*/