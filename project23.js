// Write a Program to Convert the First Letter of a String in to Uppercase

var string = prompt("Please Enter a String");
console.log(string);
var first = string.charAt(0);
// console.log(first);
var rem = string.slice(1);
// console.log(rem);
var newStr = first.toUpperCase() + rem;
console.log(`Capitalize: ${newStr}`);
