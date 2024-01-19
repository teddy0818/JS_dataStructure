function solution(s, t) {
  let answer = 0;

  let sH = new Map();
  let tH = new Map();

  // t 단어 hashMap 으로 변환
  for (let x of t) {
    if (tH.has(x)) {
      tH.set(x, tH.get(x) + 1);
    } else {
      tH.set(x, 1);
    }
  }

  // s 문자 이용서 초기값 생성 및 hashMap으로 변환
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i]) + 1);
    } else {
      sH.set(s[i], 1);
    }
  }

  let lt = 0;
  let rt = 0;
  for (rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) + 1);
    } else {
      sH.set(s[rt], 1);
    }
    let isSame = compareMaps(sH, tH);
    if (isSame) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) {
      sH.delete(s[lt]);
    }
    lt++;
  }

  return answer;
}

function compareMaps(map1, map2) {
  console.log(map1);
  console.log(map2);
  console.log("---------");
  if (map1.size !== map2.size) {
    return false;
  }
  for ([key, val] of map1) {
    if (map2.get(key) !== val) {
      return false;
    }
  }
  return true;
}

console.log(solution("bacaAacba", "abc"));

/*

    <Tip>
    
   
*/

/*

    <정답> 
    
        
*/
