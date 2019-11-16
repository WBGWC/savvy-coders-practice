//*Exponential

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