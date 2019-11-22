
// Capital A or any letter is a convention, so we must use keyword new when using const output.
function Animal (fname, lname, age, diet) {
  this.fname = fname,
  this.lname = lname,
  this.age = age,
  this.diet = diet;

this.canEat = function() {
  if(this.age <= 2) {
    return "I am a talking animal and i can eat food now!";
  } else
    return "I still like to drink milk";
};

this.getBio = function() {
  return `Hi! My name is ${this.getFullName()}. I am ${
    this.age
  } years old ${this.canEat()}`;
};

this.getFullName = function() {
  return `${this.fname} ${this.lname}`;
  };
};

const ani = new Animal("Brian", "Griffin", 5, "Carnivore");
console.log(ani);


console.log(ani.getBio())
