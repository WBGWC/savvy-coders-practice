// Constructor function
​
// What a Constructor function does is lays out the blueprint of an object
​
//Person is NOT an object yet

//Prototypes can be used to as a
​
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}
​
Person.prototype.whatIsName = function() {
  if ( typeof this.name === "string" ) {
    return this.name
  }
  return "This is no name entered"
}
​
Person.prototype.addHobbies = function(array) {
  this.hobbies = array
}
​
const hobbies = ["coding", "music", "video games"];
​
// This is a function
// Creates an instance of the blueprint
const me = new Person("Nick", 23, "Developer")
​
​
console.log(me);
me.whatIsName();
me.addHobbies(hobbies[0]);
console.log(me);
