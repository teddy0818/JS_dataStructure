function solution(input) {
  let answer = "";
  let stack = [];
  let leftBracket = "(";
  let rightBracket = ")";

  for ([val, index] of input) {
    stack.push(val);

    if (val === rightBracket) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === leftBracket) {
          stack.pop();
          break;
        } else {
          stack.pop();
        }
      }
    }
  }

  answer = stack.join("");
  return answer;
}
let input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(input));

/*
      <Tip>
      - Stack 이용해서 다시 풀기

*/

/*
  
      <정답> 
      function solution(s){  
          let answer;
          let stack=[];
          for(let x of s){
              if(x===')'){
                  while(stack.pop()!=='(');
              }
              else stack.push(x);
          }
          answer=stack.join('');
          return answer;
      }

      let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
      console.log(solution(str));
 */
