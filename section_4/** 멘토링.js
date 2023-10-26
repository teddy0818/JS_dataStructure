
function solution(input) {

    let answer = 0;

    let standardDuplicatedCnt = input.length-1;
    let allCaseArr = [];
    let filteredCaseArr = [];

    // 모든 경우의 수
    for(arr of input) {
        for(let i=0; i<arr.length; i++) {
            for(let j=i+1; j<arr.length; j++) {
                let couple = arr[i].toString() + ',' + arr[j].toString();
                allCaseArr.push(couple);
            }
        }
    }

    // console.log(allCaseArr);

    // n번 중복 된 값만 남기기
    for(let i=0; i<allCaseArr.length; i++) {
        let duplicatedCnt = 0;
        for(let j=i+1; j<allCaseArr.length; j++) {
            if(allCaseArr[i] == allCaseArr[j]) {
                duplicatedCnt++;
                // allCaseArr.splice(j,1);
            }
        }
        if(duplicatedCnt == standardDuplicatedCnt) {
            filteredCaseArr.push(allCaseArr[i]);
            // allCaseArr.splice(i,1);
        }
    }

    // console.log(filteredCaseArr);
    answer = filteredCaseArr.length;
   
    return answer;
}

let input = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(input));

/*
    <Tip>
   
*/
    

/*
   <정답>
   function solution(test){
        let answer=0;
        m=test.length;
        n=test[0].length;
        for(let i=1; i<=n; i++){
            for(let j=1; j<=n; j++){
                let cnt=0;
                for(let k=0; k<m; k++){
                    let pi=pj=0;
                    for(let s=0; s<n; s++){
                        if(test[k][s]===i) pi=s;
                        if(test[k][s]===j) pj=s;
                    }
                    if(pi<pj) cnt++;
                }
                if(cnt===m) answer++;
            }
        }
        return answer;
    }
    
    let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
    console.log(solution(arr));
        
*/