
function solution(n){
    let answer = 0;
    answer = Math.ceil(n / 12)
    return answer;
}

console.log(solution(15)); // 2
console.log(solution(178)); // 15
  