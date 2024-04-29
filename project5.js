// Write a Program to Swap Values

// var a = prompt("Please Enter the Value of A", "");
// var b = prompt("Please Enter the Value of B", "");
// console.log(`The value of A is ${a} and The Value of B is ${b}`);

// var temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`After Swapping \n The value of A is ${a} and The Value of B is ${b}`);

// 2nd Method of Swapping Values
var a = parseInt(prompt("Please Enter the Value of A", ""));
var b = parseInt(prompt("Please Enter the Value of B", ""));
console.log(`The value of A is ${a} and The Value of B is ${b}`);

a = a + b;
b = a - b;
a = a - b;
console.log(
  `After Swapping \nThe value of A is ${a} and The Value of B is ${b}`
);
