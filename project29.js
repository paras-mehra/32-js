// Write a Program to Print the Fibonacci sequence

// Fibonacci Sequence 0,1,1,2,3,5,8,13,21

var a = 0;
var b = 1;
console.log(a);
console.log(b);
for (var i = 0; i <= 10; i++) {
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}
