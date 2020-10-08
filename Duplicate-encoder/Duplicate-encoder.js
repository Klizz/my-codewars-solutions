function duplicateEncode(word) {
    // Create empty string
    var string = "";
    // Create emptry object
    var obj = {};
    // Make the words lowercase
    var lowerCaseWord = word.toLowerCase();
    // Loop through the word by length
    for (var i = 0; i < lowerCaseWord.length; i++) {
      if (obj.hasOwnProperty(lowerCaseWord[i])) {
        obj[lowerCaseWord[i]]++;
      } else {
        obj[lowerCaseWord[i]] = 1;
      }
    }
    // Add ) or ( to depending on the results
    for (var j = 0; j < lowerCaseWord.length; j++) {
      if (obj[lowerCaseWord[j]] > 1) {
        string += ")";
      } else {
        string += "(";
      }
    }
    return string;
  }

console.log(duplicateEncode("sea")) // Returns (((
console.log(duplicateEncode("memory")) // Returns )()(((
console.log(duplicateEncode("Javascript")) // Returns ()()((((((
console.log(duplicateEncode("encoder")) // Returns )(((()(
console.log(duplicateEncode("programming")) // Returns ()())())(()