function solution(a, b, c){
    let answer = 0;

     if (a > b) {
        answer = b;
     } else {
        answer = a;
     }

     if(answer > c) {
        answer = c;
     } 

     return answer;

}
    
console.log(solution(2, 5, 1));
console.log(solution(12, 10, 2));