function solution(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 앞숫자가 양수고 뒷숫자가 음수면 자리변경
      if (arr[j] > 0 && arr[j + 1] < 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    console.log(arr);
  }

  return arr;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));

/*
        <Tip>
        - Special Sort
        - 버블 정렬 활용
  */

/*
        <정답> 
        
    */
