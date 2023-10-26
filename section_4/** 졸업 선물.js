
function solution(m, productArr) {

    let answer = 0;
    
    let n = productArr.length;

    // 정렬
    productArr.sort((a, b) => (a[0]+a[1])-(b[0]+b[1]));

    for(let i=0; i<n; i++) {
        let money = m-(productArr[i][0]/2+productArr[i][1]);
        let cnt = 1;
        for(let j=0; j<n; j++) {
            if(j!=i && money<productArr[j][0]+productArr[j][1]) {
                break;
            }
            if(j!=i && money>=productArr[j][0]+productArr[j][1]) {
                cnt++;
                money -= productArr[j][0]+productArr[j][1];
            }
        }
        answer = Math.max(cnt,answer);
    }


    return answer;
}

let input = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, input));

/*
    <Tip>
    1. 어느 상품이 할인을 받으면 제일 많이 살 수 있는지의 기준이 없음
    2. 모든 경우를 탐색해야함
    3. 먼저 합계가 적은 순으로 정렬
   
*/
    

/*
   <정답>
        
*/