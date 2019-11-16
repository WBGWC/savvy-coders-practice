/*
 * Attempted Code for HW3 ******************
 * const numberSummerMachine = {
 *   startingNumber: 0,
 *    endingNumber: 23,
 * }
 *  numberSummerMachine.sumDaNumbers = function(startingNumber, endingNumber){
 *   while(startingNumber <= 23) {
 *      endingNumber += startingNumber;
 *      startingNumber += 1;
 *    }
 * }
 * console.log(endingNumber);
 */


//THE CODE BELOW IS FROM MANAV FOR HW3
const me = {
  name: "manav",
  name: 'mark',
  age: 3,
    homework: {
      hw1: "passed",
      hw2: "failed",
  },
  // Method
  checkDrinkingAge: function() {
    // Functions should have an EXPLICIT RETURN
    // Comparison operator - always return boolean
    return this.age >= 21;
  },
  checkHomework1: function() {
    // Getter
    return this.homework.hw1;
  }
};

 // Chaining
me.homework.hw2 = 'passed';

 // console.log(me.checkDrinkingAge());

 // COERCION
let x = 32;
let y = false;

//The bottom notations are for crossing something out.
 // // JS defaults to coercing numbers into Strings

// console.log(x === y);
 //Concatenation and coercion
console.log(x + Number(y));


// THESE ARE NEW NOTES FROM HEATHER NOTES*****
// create a loop that starts at 1 and ends at 10.
//keep track of the current count.
// keep track of the total
let currentTotal = 0;
let currentNum = 0;
//expression that evaluates to a boolean
while (currentNum <= 10) {
    currentTotal += currentNum;
    currentNum += 1; //currentNum = currentNum + 1;
}
console.log(currentTotal);
//refactoring - rewriting the code for better readability or performance w/o affecting the functionality
let newTotal = 0;
//initializer; exit condition; iterator
for (let i = 1; i <= 10; i += 1) {
    newTotal += i; //newTotal = newTotal +i
}
console.log(newTotal);
//add function
// named parameters allow functions to receive additional information to complete a task
function numberSummer(startingValue = 0, endingValue = 10) {
    let otherTotal = 0;
    for (let i = startingValue; i <= endingValue; i += 1) {
        otherTotal += i;
    }
    return otherTotal;
} //we invoke functions and can pass in arguments that 'match up' to the named parameters
console.log(numberSummer());

// HW 3 Solution******** HIGHLY IMPORTANT

/*Create an object literal. This object literal could be named numberSummerMachine .
*numberSummerMachine should have 🔑s for startingNumber and endingNumber . numberSummerMachine *should have a method - perhaps called sumDaNumbers . This method should use the current value of *its startingNumber and endingNumber and it should use looping (either while or for ) to return the *'sum of the numbers.'
*
*Note that `startingNumber` and `endingNumber` can be set as whatever values you want, but it's *just done 'manually.'

*HINT: You will need to use this inside of the function to access the properly scoped 🔑s.
*/
//doesn't need a scope of name parameters, so doesn't need startingNumber and endingNumber in the functions brackets.

// This is called Encapsulation
const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 123,
  sumDaNumbers: function() {
    let total  = 0;

    for(let i = this.startingNumber; i <= this.endingNumber; i+=1) {
      total += i;
    }
    return total;
  },
  // This setter allows for updating of the 'local data'
  //the bottom is a function without saying : function
  setStartingNumber(num) {
    this.startingNumber = num;
  }
};
//This makes the starting number 5
numberSummerMachine.setStartingNumber(5);

console.log(numberSummerMachine.sumDaNumbers());
