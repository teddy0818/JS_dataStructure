/*

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

*/

function solution(a, b, c) {
    
    let NumArr = [a, b, c]

    // 오름차순 정렬
    NumArr.sort((a, b) => {
        if(a < b) return 1;
        if(a === b) return 0;
        if(a > b) return -1;
    })

    // 삼각형이면 YES 아니면 NO
    if(a == (b**2 + c**2) ** (1/2)) {
        console.log("YES");
    } else {
        console.log("NO");
    }

}

solution(5, 4, 3)
solution(13, 33, 17)
