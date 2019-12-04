const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //Using return
// const sum = num.reduce((num, total) => {
//   return (total += num);
// });

//Not using return
const sum = nums.reduce((num, total) => (total += num));
console.log(sum);

const names = ["Nikki", "Drew", "Wallat"];
console.log(names.join(" "));
