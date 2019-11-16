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