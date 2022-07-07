
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

    - 반복문 for ... of ... 활용할것


*/
    

/*
    <답안>

         function solution(s){
                let answer="";
                for(let x of s){
                    if(x=='A') answer+='#';
                    else answer+=x;
                }
                return answer;
            }
            
            let str="BANANA";
            console.log(solution(str));

    

*/