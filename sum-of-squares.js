// sumOfSquares.js

function sumOfSquares(nums) {
  const squares = nums.map(num => num * num);
  const sum = squares.reduce((total, current) => total + current, 0);
  
  return sum;
}

const nums = [1, 2, 3, 4];
console.log(sumOfSquares(nums));
