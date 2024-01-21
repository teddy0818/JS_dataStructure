function solution(board, moves) {
  let answer = 0;
  let basket = [];

  for (let move of moves) {
    let colIndex = move - 1;
    let test = "";
    for (let j = 0; j < board.length; j++) {
      test += " " + board[j][colIndex];
      console.log(test);
      if (board[j][colIndex] !== 0) {
        if (
          basket.length > 0 &&
          basket[basket.length - 1] == board[j][colIndex]
        ) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(board[j][colIndex]);
        }
        console.log(basket);
        board[j][colIndex] = 0;
        break;
      }
    }
    console.log();
  }

  return answer;
}

const paramBoard = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const paramMoves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(paramBoard, paramMoves));

/*
      <Tip>
      - Stack 이용해서 다시 풀기

*/

/*
  
      <정답> 
     function solution(board, moves){
          let answer=0;
          let stack=[];
          moves.forEach(pos => {
              for(let i=0; i<board.length; i++){
                  if(board[i][pos-1]!==0){
                      let tmp=board[i][pos-1];
                      board[i][pos-1]=0;
                      if(tmp===stack[stack.length-1]){
                          stack.pop();
                          answer+=2;
                      }
                      else stack.push(tmp);
                      break;
                  }
              }
          });
                          
          return answer;
      }
      
      let a=[[0,0,0,0,0],
              [0,0,1,0,3],
              [0,2,5,0,1],
              [4,2,4,4,2],
              [3,5,1,3,1]];

      let b=[1, 5, 3, 5, 1, 2, 1, 4];
      console.log(solution(a, b));
    
 */
