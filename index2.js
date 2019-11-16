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


