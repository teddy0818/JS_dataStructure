
function solution(arr){         

    let answer = [];

    answer = arr.filter((v, i) => {
        return arr.indexOf(v) == i;
    })

    return answer;

}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good', 'good','teacher', 'time', 'student', 'beautiful', 'beautiful']));


/*
    <Tip>
    
    - filter 함수 숙지

*/
    

/*
    <답안>

       let answer;

        //console.log(s.indexOf("student"));
        answer=s.filter((v, i)=>{
            //console.log(v, i);
            if(s.indexOf(v)===i) return v;
        });

                
        return answer;

*/