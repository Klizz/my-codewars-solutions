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