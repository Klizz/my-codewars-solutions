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

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // Returns "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")) // Returns "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
