// Write a Program to check if the Numbers Have Same Last Digit

var a = prompt("Please Enter 'a' Number");
var b = prompt("Please Enter 'b' Number");
var c = prompt("Please Enter 'c' Number");

var res1 = a % 10;
var res2 = b % 10;
var res3 = c % 10;

if (res1 == res2 && res1 == res3) {
  console.log(`${a}, ${b}, ${c} are having the same Last Digit`);
} else {
  console.log(`${a}, ${b}, ${c} are not having the same Last Digit`);
}
