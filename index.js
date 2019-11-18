function initFizzBuzz(num1, num2){
  for (let i = 1; i <= 100; i += 1) {
    if(i % num1 === 0 && i % num2 === 0) {
      console.log('FizzBuzz');
    } else if (i % num2 === 0) {
      console.log('buzz');
    } else if (i % num1 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

const fizzBuzz46 = initFizzBuzz(4, 6);

console.log(fizzBuzz46());


//********* HW 5 Solution */
