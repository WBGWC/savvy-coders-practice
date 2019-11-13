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
    name = "Wally the Robot",
    age = 23,
    job: {
    cleaning: true,
    organizing: true,
  },

  // This is a method below
    checkJobCompletion: function() {
      //The bottom is a Getter
      return this.job.cleaning === true;
      //The above is not necessarily useful.
    }
};
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
Keep track of the current count.
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
  currentTotal += 1; //currentTotal = currentTotal + i;
  console.log('currentTotal is', currentTotal);
  }
  return currentTotal;


//Named Parameters allow functions to receive additional information to complete a task
//We can set Default Values for our Named Parameters
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



// This is called Encapsulation and for a While Loop
const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 123,
  sumDaNumbers: function() {
    let total  = 0;
    let i = this.startingNumber;

    while (i <= this.endingNumber) {
      total += i;
      i += 1;
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

// Learning About Functions
function doMath(x ,y, mathFxn) {
  console.trace();
  return mathFxn(x, y);
}

function add (x, y) {
  console.trace();
  return x + y;
}

console.log(doMath(add));

// OR for subtraction

function doMath(x, y, mathFxn) {
  console.trace();
  // the function will receive x and y
  return mathFxn(x, y);
}

function subtract(x, y) {
  console.trace();
  return x - y;
}
console.log(doMath(5, 10, subtract));


 //Another Example, however this is a function that returns another function.
//*This is a Function Factory that returns another function
//This Function Factory uses the concept of a closure.

/**
*  * initSportScorer is the OUTER Function
 * it receives pts, but then immediately discards its references to pts.
 * pts remains referenced by the INNER FUNCTION -  this is an example of a CLOSURE
 * a variable loses reference from the original function but has become 'enclosed' with a reference to the INNER FUNCTION
 */
function initSportsScorer(pts) {
  return function(score) {
    return score + pts;
  function initSportScorer(pts)
}
}

const threePointer = initSportsScorer(3);

const touchdown = initSportsScorer(21);

//**
// * function (score) {
// * return score + 3;
//* }
//*/

console.log(threePointer(99));
console.log(touchdown(7))



//* This bottom function is to return an Error
function foo() {
  console.trace();
  bar();
  console.trace();

  return "foo";
}

function bar() {
  console.trace();
  baz();
  console.trace();

  return "bar";
}

function baz() {
  console.trace();

  return "baz";
}

console.log(foo());


// A and B are name parameters in this Function Declaration
function myFunc(a, b) {
  console.log(a, b);
  return "hello" + a + b;
}
// 2 and 3 are arguments that are passed upon function invocation
myFunc(2, 3);

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

//*Example:
/*function numberSummer(start, end);
/*let s = start || 1;
*/
