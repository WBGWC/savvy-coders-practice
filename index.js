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