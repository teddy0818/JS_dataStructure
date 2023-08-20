
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
    문자열을 배열로 만들어서 (split 함수 사용)
    reverse 함수 써서 배열을 거꾸로 재배치 후
    join 함수로 다시 문자열을 만들어서 비교하는 것도 가능하다
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