//Moduleas operator = %
// Comparison Operators: ===, >=, <=


// Logical Operators are these:
const x = 3;
const y = 5;
const z = 10;

//Logical operators involve AND and OR conditions
// And operator checks both the left and right operands must be true
console.log(x < y && x < z);

// Or operator is if the left operator is true, right is never evaluated.
// || allows us to do short circuiting;
console.log(x < y || x < z);

//*Example of old way to short circuit.
/*function numberSummer(start, end);
/*let s = start || 1;
*/

function  highOrLow(x, y) {
  if (x > y) {
    return "x is more";
  }
//The below is called Short Circuiting :D
  return "y is more";
}
console.log(highOrLow(3, 5));