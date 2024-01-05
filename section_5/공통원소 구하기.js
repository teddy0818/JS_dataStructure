
function solution(n, arr1, m, arr2) {
    let answer = [];
    let p1 = 0;
    let p2 = 0;

    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b); 

    while(p1<n && p2<m) {
        if(arr1[p1] == arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else {
            if(arr1[p1] < arr2[p2]) {
                p1++;
            } else {
                p2++;
            }
        }
    }

    return answer;
}

console.log(solution(5, [1,3,9,5,2], 5, [3,2,5,7,8]));

/*
    <Tip>
    - 내 생각 : 이중 for문 돌리면서 공토원소 찾기 + 숫자크기 비교 해서 오름차순
    - 정답 : 두 배열 각각 정렬 후 비교. 값이 같을 때 push, 다르면 작은값 포인터 증가
    
*/
    

/*
   <정답>
    function solution(arr1, arr2){
        let answer=[];
        arr1.sort();
        arr2.sort();
        let p1=p2=0;
        while(p1<arr1.length && p2<arr2.length){
            if(arr1[p1]==arr2[p2]){
                answer.push(arr1[p1++]);
                p2++;
            }
            else if(arr1[p1]<arr2[p2]) p1++;
            else p2++;
        }              
        return answer;
    }
    
    let a=[1, 3, 9, 5, 2];
    let b=[3, 2, 5, 7, 8];
    console.log(solution(a, b));
        
*/