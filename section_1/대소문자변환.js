
function solution(str){         
    let answer = '';

    for(let val of str) {
        // 대문자 -> 소문자로
        if(val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90)  {
            answer += val.toLowerCase();
        // 소문자 -> 대문자로
        } else {
            answer += val.toUpperCase();
        }
    }

    return answer;
}

console.log(solution('StuDY'));


/*
    <Tip>
    


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