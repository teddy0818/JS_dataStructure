
function solution(sentence, word){         
    let answer = 0;

    for(let i=0; i<sentence.length; i++) {
        if(sentence[i] == word) answer++;
    }

    return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));


/*
    <Tip>

    split 함수(특정 문자 기준으로 문자열을 배열화) 활용해서 문제를 풀수도 있음

*/
    

/*
    <답안>

       function solution(s, t){
            let answer = s.spilt(t).length - 1;
            return answer;
        }
            
        let str="COMPUTERPROGRAMMING";
        console.log(solution(str, 'R'));

*/