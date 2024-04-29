// Write a Program to find the Factorial of a Number

// factorial of 5 number is equal to 1 * 2 * 3 * 4 * 5 = 120

var number = prompt("Please Enter a Number");
var fact = 1;

if (number == 0) {
  console.log(`The Factorial of ${number} is 1`);
} else if (number < 0) {
  console.log(`The Factorial of -ve Number is not possible`);
} else {
  for (var i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(`The Factorial of ${number} is ${fact}`);
}
