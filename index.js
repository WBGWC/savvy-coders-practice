const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add1(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}
function odds(n) {
  return n % 2;
}

// function add1AndDouble(n) {
//   return double(add1(n));
// }

// function doubleAndAdd1(n) {
//   return add1(double(n));
// }

// const numsAddedOneAndDoubles = nums.map(num => add1AndDouble(num));

//My Solution
// const add1Thing = nums.map(num => add1(num));
// const doubleIt = nums.map(num => double(num));

// //proper solution:

// // console.log(nums.map(num => add1(num)).map(num => double(num)));

// // function add1AndDoubleEachNum

// // console.log(numsAddedOneAndDoubles);
// console.log(add1Thing);
// console.log(doubleIt);

// const oddNums = nums.filter(num => odds(num));

// console.log(oddNums);

// //proper solution

const results = nums
  .filter(num => num % 2 === 1)
  .map(num => add1(num))
  .map(num => double(num));

console.log(results);
