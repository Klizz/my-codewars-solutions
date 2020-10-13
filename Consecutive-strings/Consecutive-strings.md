## PROBLEM
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

## MY JAVASCRIPT SOLUTION
```
function longestConsec(strarr, k) {
    var n = strarr.length;
  longest = "";
  str = ''

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  for (var i= 0; i < n; i++) {
    var currentStr = strarr.slice(i, k+i).join('');
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  return str;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]))
```