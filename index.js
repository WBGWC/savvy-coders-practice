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
