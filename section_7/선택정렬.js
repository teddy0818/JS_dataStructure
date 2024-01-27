function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // 최소값 찾기
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // arr[i] 가 최솟값일 경우
    if (i === minIndex) {
      continue;
    }

    // 자리 바꾸기
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    console.log(arr);
  }

  return arr;
}

// console.log(solution([13, 5, 11, 7, 23, 15]));
console.log(solution([9, 6, 7, 3, 5]));

/*
        <Tip>
        - 선택정렬

  
  */

/*
    
        <정답> 


    */
