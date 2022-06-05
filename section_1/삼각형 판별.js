function solution(a, b, c){
    // 삼각형 조건 : 두 선의 길이의 합이 가장 큰 길이보다 커야한다

    let answer = "NO"; 
    let sum = a+b+c;
    let long;

    if(a > b) {
        long = a;
    } else {
        long = b;
    }

    if(c > long) {
        long = c;
    }

    if (long <= (sum-long)) {
        answer = "YES"; 
    }
  
    return answer;
}

console.log(solution(3, 4, 5));
console.log(solution(13, 33, 17));
console.log(solution(6, 11, 7));