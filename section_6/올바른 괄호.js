function solution(str) {
  /*
  let answer = "YES";
  let leftCnt = 0;
  let rightCnt = 0;

  for (let a of str) {
    if (a === "(") {
      leftCnt++;
    } else {
      rightCnt++;
    }
  }

  if (leftCnt !== rightCnt) {
    answer = "NO";
  }
  */
  console.log(str);

  let answer = "YES";
  let stack = [];

  for (let a of str) {
    if (a === "(") {
      stack.push(a);
    } else {
      if (stack.length === 0) {
        answer = "NO";
        return answer;
      }
      stack.pop(a);
    }
  }

  if (stack.length > 0) {
    answer = "NO";
  }

  return answer;
}

console.log(solution("(()())("));

/*
      <Tip>
      - Stack 이용해서 다시 풀기

*/

/*
  
      <정답> 
      
 */
