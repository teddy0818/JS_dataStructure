
function solution(n, k, numArr) {
    
    let answer = 0;
    let sumArr = [];
    
    // 합의 경우의수 만큼 더하기
    for(let i=0; i<n; i++) {
        // 첫번재 숫자
       let sum1 = numArr[i];
       for(let j=i+1; j<n; j++) {
            // 두번재 숫자
            let sum2 = sum1 + numArr[j];
            for(let k=j+1; k<n; k++) {
                // 세번재 숫자
                let sum3 = sum2 + numArr[k];
                sumArr.push(sum3);
                sum3 = 0;
            }
            sum2 = 0;
       }
       sum1 = 0;
    }

    // 중복값 제거
    let filterArr = sumArr.filter((element, index) => {
        return sumArr.indexOf(element) === index;
    });

    // 정렬
    filterArr.sort((a,b) => b-a);

    // k번째 큰 수 
    answer = filterArr[k-1];

    return answer;
}

console.log(solution(10, 3, [13,15,34,23,45,65,33,11,26,42]));

/*
    <Tip>
    - Set 자료구조 이용 - 중복값은 안들어감
   
*/
    

/*
   <정답>
    function solution(n, k, card){
        let answer;
        let tmp = new Set();
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                for(let k=j+1; k<n; k++){
                    tmp.add(card[i]+card[j]+card[k]);
                }
            }
        }
        let a=Array.from(tmp).sort((a, b)=>b-a);
        answer=a[k-1];
        return answer;
    }
    
    let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
    console.log(solution(10, 3, arr));
        
*/