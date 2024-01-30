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

console.log(solution([7, 4, 5, 13, 3]));

/*
        <Tip>
        - 버블정렬

  */

/*
        <정답> 
        function solution(arr){
            let answer=arr;
            for(let i=0; i<arr.length-1; i++){
                for(let j=0; j<arr.length-i-1; j++){
                    if(arr[j]>arr[j+1]){
                        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
                    }
                }   
            } 
            return answer;
        }

        let arr=[13, 5, 11, 7, 23, 15];
        console.log(solution(arr));
    */
