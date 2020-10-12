function solution(number){
  let i;
  let sum = 0;
    for (i = 1; i < number; i++) {
        if((i % 3 === 0) || (i % 5 === 0) || (i % 5 && 3 === 0)){
            sum = sum + i
        }
    }
    console.log(sum)
}

solution(10)