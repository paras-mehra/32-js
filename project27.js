// Write a Program to Find the Factors of a Number

var number = prompt("Please enter a Number");
for (var i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}
