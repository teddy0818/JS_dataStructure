
// 소수 : 공약수가 1과 본인 뿐인 숫자
// 일단 숫자를 뒤집은 뒤, 그 숫자가 소수일 경우 출력

function solution(input) {
    let answer = [];
    
    outerLoop: for(num of input) {
        // 숫자 뒤집기
        let sNum = String(num);
        let temp = "";
        for (let i=sNum.length-1; i>=0; i--) {
            temp += sNum[i];
        }
        let reverseNum = parseInt(temp);
        // 뒤집힌 숫자가 소수라면
        if (reverseNum == 1) continue
        innerLoop: for (let j=2; j<reverseNum; j++) {
            if (reverseNum % j === 0) {
                continue outerLoop;
            }
        }
        answer.push(reverseNum);
    }
   
    return answer;
}

let input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(input));

/*
 <Tip>
   
 
*/
    

/*
<정답>

function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}
function solution(arr){
    let answer=[];
    for(let x of arr){
        let res=0;
        while(x){
            let t=x%10;
            res=res*10+t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));       

*/