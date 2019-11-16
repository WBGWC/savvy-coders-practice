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