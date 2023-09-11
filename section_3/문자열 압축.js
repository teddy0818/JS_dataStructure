
function solution(input) {
    let answer = "";
    let num = 1;
    let temp = "";

    for(s of input) {
        // 현 문자가 전 문자랑 같다면
        if(s === temp) {
            num++;
        }
        // 현 문자가 전 문자가 다르다면
        else {
            answer += num + s;
            num = 1;
        }
        temp = s;
    }

    // 문자열 "1" 제거
    answer = answer.replace("1","");
    return answer;
}

let input = "KKHSSSSSSSE";
console.log(solution(input));

/*
    <Tip>
   
*/
    

/*
   <정답>
   function solution(s){
        let answer="";
        let cnt=1;
        s=s+" ";
        for(let i=0; i<s.length-1; i++){
            if(s[i]===s[i+1]) cnt++;
            else{
                answer+=s[i];
                if(cnt>1) answer+=String(cnt);
                cnt=1;
            }
        }
        return answer;
    }
    
    let str="KKHSSSSSSSE";
    console.log(solution(str));
*/