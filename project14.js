// Find the Factorial of a Number using Recursion

var number = prompt("Please Enter a Number");
var fact = 1;
// console.log(fact);

function factr(n) {
  if (n > number) {
    return;
  }
  var tmp = fact;
  fact = fact * n;
  n++;
  factr(n);
}
factr(1);

console.log(`The Factorial of ${number} is ${fact}`);
