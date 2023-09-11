
function solution(input) {
    let answer = 0;
    let maxSum = 0;

    for(num of input) {
        let sum = 0;

        let sNum = String(num);
        for(s of sNum) {
            let digit = parseInt(s);
            sum += digit
        }

        if (maxSum < sum) {
            maxSum = sum;
            answer = num;
        }
        else if (maxSum === sum && answer < num) {
            answer = num;
        }
    }
   
    return answer;
}

let input = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(input));

/*
    <Tip>
   
*/
    

/*
   <정답>
            function solution(n, arr){
                let answer, max=Number.MIN_SAFE_INTEGER;
                for(let x of arr){
                    let sum=0, tmp=x;
                    while(tmp){
                        sum+=(tmp%10);
                        tmp=Math.floor(tmp/10);
                    }
                    if(sum>max){
                        max=sum;
                        answer=x;
                    }
                    else if(sum===max){
                        if(x>answer) answer=x;
                    }
                }
                return answer;
            }
            
            let arr=[128, 460, 603, 40, 521, 137, 123];
            console.log(solution(7, arr));
*/