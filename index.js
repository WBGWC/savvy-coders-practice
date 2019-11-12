
// Week 2, Day 1
const myName = "Wallat Baban";

// Template Literal
console.log(`Hello World! this is ${myName}`);

//This is an Object Literal
const me = {
  name: "Wallat",
  age: 22,
  isTruth: true,
  maxIq: 160,
  weight: 190

};

//We are using Bracket Notation
console.log(me["name"]);

//This is Dot Notation
console.log(me.age);

/**
 * All of this is going to be a comment
 * No worries as this will never show up in the program
 *
 *
 *
 *
 *
 */

 // Day 2 - Week 3
const robot = {

  name = "Wally the Robot"
  age = 23
  job: {
    cleaning: true
    organizing: true
  };

  // This is a method below
    checkJobCompletion: function() {
      //The bottom is a Getter
      return this.job.cleaning === true;
      //The above is not necessarily useful.
    }
};

checkNetAge


// This is Coercion

let x = 32;
let y = "32";

//*//JS defaults to coercing numbers into strings
////when //*// is used it crosses out the entire thing you wrong.

console.log(x == y);
// This is to coerce for sure and not to make the two completely and definitively equal.

//Adding numbers 1-10
/*
Create a loop that starts at 1 and ends at 10.
Keey track of the current count.
Keep track of the running total
*/

//While Loop
let currentNum = 0;
let currentTotal = 0;

while(currentNum <= 10) {
  currentTotal += currentNum;

  currentNum += 1; //currentNum = currentNum + 1
}

console.log(currentTotal);

//For loops
//Refactoring - rewrite the code for better readability or performance w/o affecting the functionality

let currentTotal = 0

//Initializer; Exit Condition; Iterator
for(let i = 1; i <= 10; i += 1) {
  console.log('i is', i)
  currentTotal += 1; //currenTotal = currentTotal + i;
  console.log('currentTotal is', currentTotal);
  }
  return currentTotal;


//Named Parameters allow functions to receive additional information to complete a task
//We can set Deafualt Values for our Named Parameters
function numberSummer(startingValue = 1, endingValue = 10) {
  let currentTotal = 0;

  //Initializer; Exit Condition; Iterator
  for(let i = startingValue; i <= endingValue; i += 1) {
    currentTotal += i; //currentTotal = currentTotal + i;
    }
    return currentTotal;
  }
  //We invoke Functions and can pass in arguments that 'match up' to the named parameters
  console.log(numberSummer ());

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
  name: "manav"
  name: 'mark',
}		   age: 3,
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
