
function solution(arr){         
    // ... : 전개연산자 - 객체나 배열 앞에 쓰면 전개해준다는 뜻
    // Math.min : 최솟값을 구함
    // Math.max : 최댓값을 구함
    let min = Math.min(...arr);
    let min_apply = Math.min.apply(null, arr)
    let max = Math.max(...arr);
    let max_apply = Math.max.apply(null, arr)

    let answer = `${min}, ${min_apply}, ${max}, ${max_apply}`
    
    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));