function solution(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    console.log(arr);
  }

  return arr;
}

console.log(solution([7, 4, 5, 1, 3]));

/*
        <Tip>
        - 버블정렬

  
  */

/*
    
        <정답> 


    */
