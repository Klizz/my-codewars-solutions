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

console.log(solution("abcdef")); // Returns ["ab", "cd", "ef"])
console.log(solution("abcdefg")); // Returns ["ab", "cd", "ef", "g_"]
console.log(solution("")); // Returns []