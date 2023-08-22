
function solution(str) {
    let answer = "";
    
    for (let i=0; i<str.length; i++) {
        if(!isNaN(str[i])) answer += str[i];
    }

    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";

console.log(solution(str));

/*
    <Tip>
    
    // 수학적으로 접근해서 풀수 있음

     function solution(str){
        let answer=0;
        for(let x of str){
            if(!isNaN(x)) answer = answer*10+Number(x);
        }  
        return answer;
    }
        
    let str="g0en2T0s8eSoft";
    console.log(solution(str));
  
   
*/
    

/*
   

*/