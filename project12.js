// Write a Program to Find Largest Number in Three Numbers

// var a = prompt("Please Enter First Number");
// var b = prompt("Please Enter Second Number");
// var c = prompt("Please Enter Third Number");
// var x = Math.max(a, b, c); // If Values are in Minus then Shortest One Will be Largest Number
// console.log(`${a}, ${b}, ${c}: Largest Number = ${x}`);

// user defined Method

const check = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

var a = prompt("Please Enter First Number");
var b = prompt("Please Enter Second Number");
var c = prompt("Please Enter Third Number");
var x = check(a, b, c);
console.log(`${a}, ${b}, ${c}: Largest Number = ${x} `);
