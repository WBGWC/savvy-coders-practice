// const fruits = ["apple", "kiwi", "pineapple", "jackfruit"];

// const moreFruits = ["dragonfruit", "pineapple", "mango", "guava", "strawberry"];

// console.log("fruits is", fruits);
// console.log("moreFruits is", moreFruits);

// // concat joins arrays together
// const allTheFruits = fruits.concat(moreFruits);
// console.log("allTheFruits is", allTheFruits);

// // concat is not mutating
// console.log("fruits is still", fruits);
// console.log("moreFruits is still", moreFruits);

// const popped = fruits.pop();
// console.log(popped);
// console.log(fruits);

// const pushed = fruits.push("orange");

// console.log(pushed);
// console.log(fruits);

const fruits = [
  "apple",
  "kiwi",
  "pineapple",
  "jackfruit", // index is 3
  "dragonfruit",
  "pineapple",
  "mango",
  "guava", // index is 7
  "strawberry"
];

const jackfruitIndex = fruits.indexOf("jackfruit");
const guavaIndex = fruits.indexOf("guava");

console.log(jackfruitIndex, guavaIndex);

const spliceReturns = fruits.splice(3, 3, "raspberries");
console.log(spliceReturns);

fruits.splice(3, 3, "raspberries");
console.log(fruits.splice);
// slice(start, end)
// splits an array into smaller pieces

const smallerArray = fruits.slice(jackfruitIndex);
console.log("fruits is", fruits);
//console.log('smallerArray is', smallerArray);
console.log(smallerArray);
//Includes the start but excludes the ending
const bestFruits = fruits.slice(jackfruitIndex, guavaIndex + 2);
console.log("bestFruits are", bestFruits);

// includes returns true or false depending on
// whether or not the argument is in the array
const mysteryValue = fruits.includes("dragonfruit");
console.log(mysteryValue);

// indexOf returns the index of the first occurence
// of our argument in the array
console.log(fruits.indexOf("pineapple"));

// indexOf returns the index of the last occurence
// of our argument in the array
console.log(fruits.lastIndexOf("pineapple"));
