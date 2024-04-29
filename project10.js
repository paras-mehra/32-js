// Write a Program to Check If a Number is Odd or Even

var a = parseInt(prompt("Please enter a Number"));

// if (a % 2 == 0) {
//   document.write(`${a} is Even Number`);
// } else {
//   document.write(`${a} is Odd Number`);
// }

// Ternary Operator
var res = a % 2 == 0 ? `${a} is a Even Number` : `${a} is a Odd Number`;
document.write(res);
