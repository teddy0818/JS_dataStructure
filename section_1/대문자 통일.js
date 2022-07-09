
function solution(str){         
    let answer = '';

    for(let val of str) {
        answer += val.toUpperCase();
    }

    return answer;
}

console.log(solution('ItisTimeToStudy'));


/*
    <Tip>
    
    - 아스키 코드 이용해서도 풀 수 있음
    - String.fromCharCode(아스키코드) : 아스키코드로 문자를 구하는 함수


*/
    

/*
    <답안>

        function solution(s){  
                let answer="";
                for(let x of s){
                    if(x===x.toUpperCase()) answer+=x.toLowerCase();
                    else answer+=x.toUpperCase();
                }
                return answer;
            }

            console.log(solution("StuDY"));

*/