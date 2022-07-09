
function solution(str){         
    let answer = [];
    let length = str.length;

    // 짝수
    if(length % 2 == 0) {
        let idx = Math.floor(length/2);
        let idx_2 = idx-1;

        answer.push(str[idx])
        answer.push(str[idx_2])

    // 홀수
    } else {
        let idx = Math.floor(length/2);
        answer.push(str[idx]);
    }

    return answer.join('');
}

console.log(solution('study'));
console.log(solution('good'));


/*
    <Tip>
    

*/
    

/*
    <답안>

        function solution(s){  
                let answer;
                let mid=Math.floor(s.length/2)
                if(s.length%2===1) answer=s.substring(mid, mid+1);
                else answer=s.substring(mid-1, mid+1);
                //if(s.length%2===1) answer=s.substr(mid, 1);
                //else answer=s.substr(mid-1, 2);
                return answer;
            }
            console.log(solution("study"));
        </script>

*/