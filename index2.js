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


