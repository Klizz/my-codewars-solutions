function isIsogram(str){
    var arr = str.toLowerCase().split("");
    var inArr = []
    for(var i =0; i<arr.length; i++){
     if(!inArr[arr[i]]){
         inArr[arr[i]] = arr[i];
     }else{
         return false;
     }
    }
    return true;
  }

console.log(isIsogram("hola")) // Returns true
console.log(isIsogram("moose")) // Returns false
console.log(isIsogram("Isogram")) // Returns true
console.log(isIsogram("banana")) // Returns false
console.log(isIsogram("COPYRIGHTABLE")) // Returns true