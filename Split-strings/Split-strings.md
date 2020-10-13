## PROBLEM
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

## MY JAVASCRIPT SOLUTION
```
function solution(str) {
  if (str.length > 0) {
    let pairs = str.match(/.{1,2}/g);
    let last = pairs[pairs.length - 1];
    if (last.length < 2) {
      let single = pairs.filter((a) => a.length < 2);
      pairs.pop();
      let last = "_";
      let string = single.concat(last).join("");
      pairs.push(string);
      return pairs;
    } else {
      return pairs;
    }
  } else {
      return([])
  }
}
```