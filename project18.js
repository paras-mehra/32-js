// Write a Program to check Palindrome using Array Methods

// Palindrome : A string is a Palindrome if it is read the same from forward or Backward eg: Dad, Madam

var str = prompt("Please enter a String");
var strArray = str.split("");
var newStr = strArray.reverse().join("");
console.log(strArray);
console.log(newStr);

if (str === newStr) {
  console.log(`${str} is Palindrome String`);
} else {
  console.log(`${str} is not Palindrome String`);
}
