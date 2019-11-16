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




//*HW 4 Solution

//*11/14/2019***********
function initGreeting(name,greeting) {
  return function(time) {
    return `${name} ${greeting} The time is ${time}` //This is a template literal and is much more useful. You can put anything in between the first $ and bracket and second one.
  }
}

const helloWallat = initGreeting("Wallat" , "Evening");

const time = new Date(Date.now());
console.log(helloWallat(`{time.getHours()}:${time.getMinutes()}`))

//***********Create a loop of 'All work and no play makes jack a dull boy, 100 times.
function writePsychoBook(num){
  let str = "";
  for(let i = 0; i <= num; i+=1){
      str += "All work and no play makes jack a dull boy!" ;
    }
    return str;
  }

  //RECURSION
function writePsychoBook(n) {
  if(n === 0) {
    return "";
  }

  return `All work and no play makes jack a dull boy ${writePsychoBook(n - 1)}`;
}

console.log(writePsychoBook(99));

console.log(Math.pow(2, 3)); //* This is a exponential function for 2 * 2 * 2


//*Exponentials

//* This is a function returning 8 using a For loop.
function myPow(num, exp) {
  let ret = num
  for (let i = 1; i < exp; i += 1) {
    ret *= num;
  }
  return ret;
}

console.log(myPow(2, 3));

 //* The below is a recursion returning 8
function myPow(num, exp) {
  if(ret === 2) {
    ret *= num;
  }
  return `${myPow(2, 3)}`;
}
console.log(myPow(2, 3));

//* Correct Recursion Solution

function myPow(num, exp) {
  if (exp === 0) {
    return 1;
  }
  return (num *= myPow(num, exp - 1));
}

console.log(myPow(2, 3));


//* Factorial - num * num - 1 * num - 2...all the way to num === 0
// 4 * 3 * 2 * 1:

//*This one is recursion solution
function factorial(num) {
  if(num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(4));


//* this is For loop solution
function factorial(num) {
  let ret = 1;
  for (let i = num i >= 1; i -= 1) {
    ret += i;
  }
  return ret;
}

console.log(factorial(4));

//* Pass by reference and pass by value


//*****This is a Pass by Value example */
let x = 3;
let y = x;

function add1(n) {
  return n + 1;
}

// Primitives CANNOT be mutated
//Primitives are passed by value AKA pass by copy

// x Throws away its 3 and gets a whole new value of 4;

x = add1(x);
console.log(y)

//****** This is a Pass by Reference example and its where the two values are the same */

//* Objects CAN BE MUTATED */
const me = {
  name: "Mark",
  age: 23
}

const me2 = me;

function nameChanger(obj, newName) {
  obj.name = newName;
}

//or could use:

me.name = "Fred"; // Does the same thing

nameChanger(me, "Fred");
console.log(me);
console.log(me2);

//**This if Fizz Buzz
//* If we pass a number that is divisible by 5 and 3, log 'fizzBuzz'
//* if only divisible by 3, log 'fizz'
//* if only divisible by 5, log 'buzz'
//* Loop over the numbers from 1 to 99

function fizzBuzz(number){
for (let i = 1; i <= 100, i += 1) {
  if(i % 3 === 0 && i % 5 ===0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(i);
    }
  }
}


//* 11.15.2019
function initPerson(fname, lname, age) {
  return {
    fname,
    lname,
    age,
    canDrink() {
      age >= 21;
    }
  };
}

const me = initPerson("manav", "misra", 13);
console.log(me);
console.log(me.canDrink());


