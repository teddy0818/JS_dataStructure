function solution(input) {
  let stack = [];
  let answer = 0;
  let leftBracket = "(";
  let rightBracket = ")";
  let prevVal = "";

  for (let val of input) {
    if (val == leftBracket) {
      stack.push(val);
      // 레이저일 때
    } else if (val == rightBracket && val != prevVal) {
      stack.pop();
      answer += stack.length;
    } else if (val == rightBracket && val == prevVal) {
      // 막대기 끝 일때
      stack.pop();
      answer += 1;
    }
    prevVal = val;
  }

  return answer;
}

let input = "(((()(()()))(())()))(()())";
console.log(solution(input));

/*
        <Tip>
        - Stack 이용해서 다시 풀기

  
  */

/*
    
        <정답> 
         function solution(s){
            let answer=0;
            let stack=[];
            for(let i=0; i<s.length; i++){
                if(s[i]==='(') stack.push('(');
                else{
                    stack.pop(); 
                    if(s[i-1]==='(') answer+=stack.length;
                    else answer++;
                    //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
                }
            }                          
            return answer;
        }
        
        let a="()(((()())(())()))(())";
        console.log(solution(a));
        
    */
