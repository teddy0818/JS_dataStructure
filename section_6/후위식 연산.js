function solution(input) {
  let stack = [];

  for (val of input) {
    // 파연산자
    if (!isNaN(val)) {
      let parsedVal = Number(val);
      stack.push(parsedVal);
      // 연산자
    } else {
      let result = 0;
      let rightNumber = stack.pop();
      let leftNumber = stack.pop();
      if (val == "+") {
        result = leftNumber + rightNumber;
      } else if (val == "-") {
        result = leftNumber - rightNumber;
      } else if (val == "*") {
        result = leftNumber * rightNumber;
      } else if (val == "/") {
        result = leftNumber / rightNumber;
      }
      stack.push(result);
    }
  }

  return stack[0];
}

let input = "352+*9-";
console.log(solution(input));

/*
        <Tip>
        - Stack 이용해서 다시 풀기
        - 피연산자는 stack에 저장
        - 연산자는 stack 에서 피연산자를 꺼내서 계산 후 다시 스택에 저장
  
  */

/*
    
        <정답> 
        function solution(s){  
            let answer;
            let stack=[];
            for(let x of s){
                if(!isNaN(x)) stack.push(Number(x));
                else{
                    let rt=stack.pop();
                    let lt=stack.pop();
                    if(x==='+') stack.push(lt+rt);
                    else if(x==='-') stack.push(lt-rt);
                    else if(x==='*') stack.push(lt*rt);
                    else if(x==='/') stack.push(lt/rt);
                }
            }
            answer=stack[0];
            return answer;
        }

        let str="352+*9-";
        console.log(solution(str));
        
    */
