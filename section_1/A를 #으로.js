
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



*/
    

/*
    <답안>
    

    

*/