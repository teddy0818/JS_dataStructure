
function solution(n, arr1, m, arr2) {
    let answer = [];
    let p1 = 0;
    let p2 = 0;

    for(let i=0; i<n+m; i++) {
        if (arr1[p1] <= arr2[p2]) {
            answer.push(arr1[p1]);
            p1++;
        } else {
            answer.push(arr2[p2]);
            p2++;
        }
    }

    return answer;
}

console.log(solution(3, [1,3,5], 5, [2,3,6,7,9]));

/*
    <Tip>
    - sort 를 쓰면 시간복잡도가 nlogn 이 돼서 사용하면 안된다
    - 투포인터스 알고리즘 활용해야 함 - 시간복잡도 : o(n+m_0)
   
*/
    

/*
   <정답>
    function solution(arr1, arr2){
        let answer=[];
        let n=arr1.length;
        let m=arr2.length;
        let p1=p2=0;
        while(p1<n && p2<m){
            if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
            else answer.push(arr2[p2++]);
        }
        while(p1<n) answer.push(arr1[p1++]);
        while(p2<m) answer.push(arr2[p2++]); 
        return answer;
    }
    
    let a=[1, 3, 5];
    let b=[2, 3, 6, 7, 9];
    console.log(solution(a, b));
    
        
*/