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

const robot = {

  name = "Wally the Robot"
  age = 23
  job: {
    cleaning: true
    organizing: true
  };

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
Refactoring - rewrite the code for better readability or performance w/o affecting the functionality

let currentTotal = 0

//Initializer; Exit Condition; Iterator
for(let i = 1; i <= 10; i += 1) {
  console.log('i is', i)
  currentTotal += 1; //currenTotal = currentTotal + i;
  console.log('currentTotal is', currentTotal);
  }

  return currentTotal;
}
console.log(numberSummer());


//Named Parameters allow functions to receive additional information to complete a task
//We can set Deafualt Values for our Named Parameters
function numberSummer(startingValue = 1, endingValue = 10) {
  let currentTotal = 0;

  //Initializer; Exit Condition; Iterator
  for(let i = startingValue; i <= endingValue; i += 1) {
    currentTotal += i; //currenTotal = currentTotal + i;
    }
    return currentTotal;
  }
  //We invoke Functions and can pass in arguments that 'match up' to the named parameters
  console.log(numberSummer (1, 10));
