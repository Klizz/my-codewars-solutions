function findOutlier(integers){
    let even = integers.filter(a => a % 2 === 0);
    let odd = integers.filter(a => a % 2 !== 0);
    return even.length ===1 ? even[0] : odd[0];
  }

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // Should return 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // Should return 160