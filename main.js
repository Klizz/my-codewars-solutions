console.log("Testing file");

function duplicateEncodeB(word){
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

console.log(duplicateEncodeB("recede"))