function addBinary(a, b) {
    var sum = a + b,
      binary = "";
    while (sum > 0) {
      binary = (sum % 2) + binary;
      sum = Math.floor(sum / 2);
    }
    return binary;
  }

console.log(addBinary(2,3)) // Returns 101
console.log(addBinary(11,8)) // Returns 10011
console.log(addBinary(345,88)) // Returns 110110001