
function solution(arr){         
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for(let val of arr) {
        if(val > maxNumber) {
            maxNumber = val;
        }
    }


    return maxNumber;
}

console.log(solution([2, 3, 4, 5, 10, 7]));


/*
    <Tip>



*/
    

/*
    <답안>


*/