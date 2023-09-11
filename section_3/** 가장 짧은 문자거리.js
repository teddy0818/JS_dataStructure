
function solution(s, t) {
    let answer = [];
    let pre_tIdx = 0;
    let post_tIdx = 0;
    
    for (let i=0; i<s.length; i++) {
        // t 문자일 떄
        if (t == s[i]) {
            answer.push(0);
            continue;
        }

        // 왼쪽 탐색
        for (let j=0; j<i; j++) {
            if (s[j] == t) {
                pre_tIdx = j;
            }
        }

        // 오른쪽 탐색
        for (let j=i+1; j<s.length; j++) {
            if (s[j] == t) {
                post_tIdx = j;
                break;
            }
        }

        if (i == 0) {
            answer.push(post_tIdx-i);
        } else if (i-pre_tIdx < post_tIdx-i) {
            answer.push(i-pre_tIdx);
        } else {
            answer.push(post_tIdx-i);
        }
        
    }

    return answer;
}

let s = "teachermode";
let t = "e";

console.log(solution(s, t));

/*
    <Tip>
   
*/
    

/*
   <정답>
    function solution(s, t){
        let answer=[];
        let p=1000;
        for(let x of s){
            if(x===t){
                p=0;
                answer.push(p);
            }
            else{
                p++;
                answer.push(p);
            }
        }
        p=1000;
        for(let i=s.length-1; i>=0; i--){
            if(s[i]===t) p=0;
            else{
                p++;
                answer[i]=Math.min(answer[i], p);
            }
        }
        return answer;
    }
    
    let str="teachermode";
    console.log(solution(str, 'e'));
*/