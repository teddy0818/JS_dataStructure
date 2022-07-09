
function solution(num, arr){         
    let answer = '';
    let maxLength = Number.MIN_SAFE_INTEGER;

    for(let val of arr) {
        if (val.length > maxLength)  {
            maxLength = val.length;
            answer = val;
        }
    }

    return answer;
}

console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));


/*
    <Tip>
    


*/
    

/*
    <답안>

     function solution(s){  
                let answer="", max=Number.MIN_SAFE_INTEGER;
                for(let x of s){
                    if(x.length>max){
                        max=x.length;
                        answer=x;
                    }
                }
                return answer;
    }

    let str=["teacher", "time", "student", "beautiful", "good"];
    
    console.log(solution(str));

*/