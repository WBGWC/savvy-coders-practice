// class User{
// constructor(fname, lname, email, currentlvl, exptonxtlvl) {
//   this.fname = fname;
//   this.lname = lname;
//   this.email = email;
//   this.currentlvl = currentlvl;
//   this.exptonxtlvl = exptonxtlvl;
// }

// get bio() {
//     return `I am Player ${this.fullName()}. `;
//   }

// get level() {
//   if (this.currentlvl < 100) {
//     return `Exp to next level: ${this.exptonxtlvl}`;
//   }
// return "You still need keep training";
// }

// get fullName() {
//   return `Your name is ${this.fname} ${this.lname}`;
// }

// /**
//    * @param {any} newLName
//    */
// set changeName(newLName) {
//   if(newLName) {
//   this.lname = newLName;
//   } else {
//     console.error("bad name received");
//   }
// }
// }
// const u = new User('Mike', 'Johnson', 'WBGWC@mail.umsl.edu', 18, 100)
// u.changeName = "Matt"
// console.log(u);

// class WarriorPlayer extends User {
//   constructor(fname, lname, email, currentlvl, exptonxtlvl, warriorid){
//     super(fname, lname, email, currentlvl, exptonxtlvl);
//     this.id = warriorid;
// };
// get bio() {
//   return "Welcome to the game!";
// }

// get warriorid() {
//   return `Your Player id is ${this.id}`;
// }
// set warriorid(id) {
//   this.id = id;
// }
// }
// const war = new WarriorPlayer("Elton", "John", "ABC@gmail.com", 1, 100, 2310);
// war.warriorid = 2309
// console.log(war);
// console.log(war.bio)
// console.log(war.warriorid)

// // //Getter

// // Person.prototype.getFaveGames = function() {
// //   //Just create some string here that we can update
// //   let gamesList = `Here are the favorite games for ${this.fullName()}`;

// //   for (let i = 0; i <this.favGames.length; i+= 1) {
// //     //Just concatenate the string same as we can do with the numbers.
// //     gameList += `$(i + 1) - ${this.favGames[i]}`;
// //   }
// //   return gamesList;
// // }

// // function User(fname, lname, currentlvl, exptonxtlvl) {
// //   this.fname = fname,
// //   this.lname = lname,
// //   this.currentlvl = currentlvl,
// //   this.exptonxtlvl = exptonxtlvl;

// // }

// // User.prototype.setSkills = function(newSkill) {

// //   this.userSkills = newSkill

// // };

// // User.prototype.getSkills = function() {
// //   let skillsList = `Here are my skills `
// //   for(let i = 0; i < this.userSkills.length; i+=1){
// //     skillsList += `${this.userSkills [i]}
// //     `;
// //   }
// //   return skillsList
// // }

// // // this.canLvl = function() {
// // //   if(this.currentlvl <= 100) {
// // //     return `Exp to next level: ${this.exptonxtlvl}`;
// // //   }

// // // this.getFullName = function() {
// // //   return `${this.fname} ${this.lname}`;
// // //   };
// // // }

// // const pla = new User("WBGWC", "Asin", 10,  1218);
// // console.log(pla);
// // const skills = ["highjump", "roll"]
// // pla.setSkills(skills)
// // console.log(pla);
// // console.log(pla.getSkills());

// // //console.log(pla.getBio())

const numbers = [1, 2, 3, 4, 5, 6];
const strings = [
  "hello",
  "world",
  "It ya boy Tyrone, coming at you live from LA."
];
//concat is ideal b/c it doesn't mutate the original data
const numbersAndStrings = numbers.concat(strings);
//forEach needs to know what it should do for each element - callback fxn
//number is similar to doing numbers[i] in our traditional for loop

//Arrow Syntax DOES NOT have any THIS reference
numbers.forEach(number => {
  console.log("number is", number);
});

strings.forEach(string => {
  console.log("string is", string);
});

function updateNumbersAndStrings(officialArr, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];

  officialArr.forEach(el => {
    console.log("current element is", el);
    if (typeof el === "string") {
      updatedNumbersAndStrings.push((el += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((el += numberUpdate));
    }
  });

  for (let i = 0; i < officialArr.length; i += 1) {
    if (typeof officialArr[i] === "string") {
      updatedNumbersAndStrings.push((officialArr[i] += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((officialArr[i] += numberUpdate));
    }
  }
  return updatedNumbersAndStrings;
}

console.log(updateNumbersAndStrings(numbersAndStrings, "hello", 236));

console.log("numbers is", numbers);
console.log("strings is", strings);
// console.log("arr is", officialArr);
