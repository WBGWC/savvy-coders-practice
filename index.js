// Day 2 - Week 3
const robot = {
  name = "Wally the Robot",
  age = 23,
  job: {
  cleaning: true,
  organizing: true,
},

// This is a method below
  checkJobCompletion: function() {
    //The bottom is a Getter
    return this.job.cleaning === true;
    //The above is not necessarily useful.
  }
};
// This is Coercion

let x = 32;
let y = "32";

//*//JS defaults to coercing numbers into strings
////when //*// is used it crosses out the entire thing you wrong.

console.log(x == y);
// This is to coerce for sure and not to make the two completely and definitively equal.

//Adding numbers 1-10
/*
Create a loop that starts at 1 and ends at 10.
Keep track of the current count.
Keep track of the running total
*/
