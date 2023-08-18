
function solution(arr) {     
    let answer = 0;

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            // 상하좌우 숫자
            let top = 0;
            let bottom = 0;
            let left = 0;
            let right = 0;

            // 첫번쨰 열 일 때
            if (i == 0) {
                top = 0;
            } else {
                top = arr[i-1][j];
            }
            // 마지막 열 일 때
            if (i == arr.length-1) {
                bottom = 0;
            } else {
                bottom = arr[i+1][j]
            }
            // 첫번째 행 일 때
            if (j == 0) {
                left = 0;
            } else {
                left = arr[i][j-1]
            }
            // 마지막 행 일 때
            if (j == arr.length-1) {
                right = 0;
            } else {
                right = arr[i][j+1]
            }
            

            // 만약 숫자가 상하좌우 중 제일 크다면
            if(arr[i][j] > top && arr[i][j] > bottom && arr[i][j] > left && arr[i][j] > right) {
                answer++;
            }
        }
    }

    return answer;
}

let arr = [
    [5,3,7,2,3],
    [3,7,1,6,1],
    [7,2,5,3,4],
    [4,3,6,4,1],
    [8,7,3,5,2],
]
console.log(solution(arr));

/*
    <Tip>
    
    

*/
    

/*
    <답안>
    function solution(arr){  
                let answer=0;
                let n=arr.length;
                let dx=[-1, 0, 1, 0];
                let dy=[0, 1, 0, -1];
                for(let i=0; i<n; i++){
                    for(let j=0; j<n; j++){
                        let flag=1;
                        for(let k=0; k<4; k++){
                            let nx=i+dx[k];
                            let ny=j+dy[k];
                            if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                                flag=0;
                                break;
                            }
                        }
                        if(flag) answer++;
                    }
                }  
                  
                return answer;
            }

            let arr=[[5, 3, 7, 2, 3], 
                     [3, 7, 1, 6, 1],
                     [7, 2, 5, 3, 4],
                     [4, 3, 6, 4, 1],
                     [8, 7, 3, 5, 2]];
            console.log(solution(arr));


*/