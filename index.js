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
