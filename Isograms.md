## PROBLEM
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

## MY SOLUTION IN JAVASCRIPT
```
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
```