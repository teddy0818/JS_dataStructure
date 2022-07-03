
function solution(day, arr){         
    let answer = 0;
    
    for (let val of arr) {
        let str = String(val);
        let final_num = str.charAt(str.length-1);

        if(day == final_num) {
            answer++;
        }
    }
   
    
    return answer;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
let arr2 = [12, 20, 54, 30, 87, 91, 30];


console.log(solution(5, arr));
console.log(solution(0, arr2));

/*
    <Tip>

    어떤 숫자든지 10으로 나누면 일의 자리가 나온다
    ex) 10 % 2567 : 결과값은 7

*/
    

/*
    <답안>
    
              function solution(day, arr){
                let answer=0;
                for(let x of arr){
                    if(x%10==day) answer++;
                }
                
                return answer;
            }
            
            arr=[25, 23, 11, 47, 53, 17, 33];
            console.log(solution(3, arr));
    

*/