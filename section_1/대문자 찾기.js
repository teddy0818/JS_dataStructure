
function solution(str){         
    let answer = 0;

    for(let i=0; i<str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) answer++;
    }

    return answer;
}

console.log(solution('KoreaTimeGood'));


/*
    <Tip>



*/
    

/*
    <답안>

    function solution(s){         
        let answer="";
        for(let x of s){
            let num=x.charCodeAt();
            if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
            else answer+=x;

            //if(x===x.toLowerCase()) answer+=x.toUpperCase();
            //else answer+=x;
        }

        return answer;

    }

*/