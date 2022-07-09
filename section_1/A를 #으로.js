
function solution(str){         
    let answer = '';

    for(let i=0; i<str.length; i++) {
        if(str[i] == 'A') {
            answer += '#';
        } else {
            answer += str[i];
        }
    }

    return answer;
}

let str = 'BANANA';
console.log(solution(str));


/*
    <Tip>

    - 정규식 활용


*/
    

/*
    <답안>

         function solution(s){
                let answer = s;
                answer = answer.replace(/A/g, '#');
                return answer;
            }
            
            let str="BANANA";
            console.log(solution(str));

    

*/