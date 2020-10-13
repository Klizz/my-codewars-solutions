## PROBLEM
Given a string, replace every letter with its position in the alphabet.

## MY JAVASCRIPT SOLUTION
```
function alphabetPosition(text) {
    // Create empty array
    var result = [];
    // Create variable with alphabet letters
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
      "w", "x", "y", "z"]
    // Replace with pattern, lowercase letters and split string
    text = text.replace(/\W*\d+/g, '').toLowerCase().split('');
    // Loop through string, assign a number to the array of letters and push the number to the empty array.
    for (var i = 0; i < text.length; i++) {
        var j = alphabet.indexOf(text[i]) + 1;
        if (j) result.push(j);
      }
    // Join the array in a single string separated by a space
    return result.join(' ');
  }
```