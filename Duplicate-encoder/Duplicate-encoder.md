## PROBLEM
The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

## MY JAVASCRIPT SOLUTION
```
function duplicateEncode(word) {
  var string = "";
  var obj = {};
  var lowerCaseWord = word.toLowerCase();
  for (var i = 0; i < lowerCaseWord.length; i++) {
    if (obj.hasOwnProperty(lowerCaseWord[i])) {
      obj[lowerCaseWord[i]]++;
    } else {
      obj[lowerCaseWord[i]] = 1;
    }
  }
  for (var j = 0; j < lowerCaseWord.length; j++) {
    if (obj[lowerCaseWord[j]] > 1) {
      string += ")";
    } else {
      string += "(";
    }
  }
  return string;
}
```