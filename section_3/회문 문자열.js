
function solution(str) {
    // 대소문자 상관없으니 소문자로 변경
    str = str.toLowerCase();

    let answer = "";
    let reverseStr = "";

    for(let i=0; i<str.length; i++)  {
        reverseStr += str.charAt(str.length-1-i);
    }

    if(str === reverseStr) {
        answer = "YES";
    } else {
        answer = "NO";
    }

    return answer;
}

let str = "gooG";

console.log(solution(str));

/*
    <Tip>
    
    

*/
    

/*
    <답안>
    function solution(s){
                let answer="YES";
                s=s.toLowerCase();
                let len=s.length;
                for(let i=0; i<Math.floor(len/2); i++){
                    if(s[i]!=s[len-i-1]) return "NO";
                }
                return answer;
            }
            
            let str="goooG";
            console.log(solution(str));


*/