// '!' is a UNARY OPERATOR that means NOT! if something is true, it will become false and vice versa.

//UNARY operators considers whether there is either Something or Nothing within the set. Whether there is something of value or not.

// Worthless primitives are 'falsey'
//All collections, such as arrays and objects, will remain true.
console.log(!true);

function initFizzBuzz(num1, num2) {
  return function() {
    // 24 % (4 * 6)
    // If I divided by num1 * num 2 is 0, then the number is divisible by both.
  for (let i = 1; i <= 100; i += 1) {
    if(i % (num1 * num2) === 0) {
      console.log('FizzBuzz');
    } else if (!i % num1) {
      console.log('buzz');

      //Else-if there is not any remainder (i % num2 === 0)
    } else if (!i % num2) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
};
}

console.log(!(6 % 3));
console.log(Boolean(undefined)); //Comes out as false
console.log(Boolean(null)); //Comes out as false

const fizzBuzz46 = initFizzBuzz(4, 6);

fizzBuzz46();


//***** HW 5 Solution below******************************** */

function initFizzBuzz(num1, num2) {
  return function() {
  for (let i = 1; i <= 100; i += 1) {
    if(i % num1 === 0 && i % num2 === 0) {
      console.log('FizzBuzz');
    } else if (i % num1 === 0) {
      console.log('buzz');
    } else if (i % num2 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
};
}




const fizzBuzz46 = initFizzBuzz(4, 6);

fizzBuzz46();
