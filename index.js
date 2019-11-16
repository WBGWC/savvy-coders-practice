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