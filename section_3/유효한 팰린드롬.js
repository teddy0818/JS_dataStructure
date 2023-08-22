
function solution(str) {

    // 대소문자 상관없으니 소문자로 변경
    str = str.toLowerCase();
    // 정규식으로 특수 문자 제거
    str = str.replace(/[^a-z]/g,''); // ^: 부정의 의미 (아닌것들)

    let answer = "YES";
    let reverseStr = "";

    for(let i=0; i<str.length; i++)  {
        reverseStr += str.charAt(str.length-1-i);
    }

    if(str !== reverseStr) {
        answer = "NO";
    } 

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";

console.log(solution(str));

/*
    <Tip>

    유효성 검사 (replace 함수) 숙지
   
*/
    

/*
    <답안>
   


*/