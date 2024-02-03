function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
      arr[j + 1] = temp;
    }
  }

  console.log(arr);

  return arr;
}

console.log(solution([8, 5, 6, 2, 4]));

/*
        <Tip>
        - 삽입 정렬
        
  */

/*
        <정답> 
       

    */
