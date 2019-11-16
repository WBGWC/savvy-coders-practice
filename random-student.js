const students = [1, "man", true, null]; //* can put any value in this array

const students = [["Andrew","Billy","George","Heather","Madison","Marque","Martin","Nikki","Oscar","RhondaLyn","Sidney","Tracie","Wallat"]]

console.log(myArr[0].length) //This is for when an array is nested like the above to access the length of the inner array.


//* The application we are making ************************************
const students = ["Andrew","Billy","George","Heather","Madison","Marque","Martin","Nikki","Oscar","RhondaLyn","Sidney","Tracie","Wallat"];

//arr can be any array of names
function getMs(namesArr) {
  const mNames = [];
  for(let i = 0; i < namesArr.length; i += 1) {
    if (namesArr[i].startsWith("M")) {
      mNames.push(namesArr[i]);
    }
  }
  return mNames;
}

// Used the URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(students[getRandomInt(0, students.length - 1)]);
console.log(getMs(students));

//* End of Web Application ******************************************






console.log(Math.floor(Math.random() * 1000))

Math.floor() //* rounds down
Math.ceiling() //* rounds up

const myObj = {};

myObj.name = "Manav";

myObj["age"] = 34; //* This is a bracket notation and can use this to reference it.

myArr[0] = "hello";
