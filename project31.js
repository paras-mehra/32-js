// Write a Program to reverse a string using for Loop

var str = prompt("Please Enter a String");
var strLen = str.length;
var revStr = "";
console.log(str);
// console.log(str[strLen - 1]); // this will give us Last Character of the String

for (var i = strLen - 1; i >= 0; i--) {
  revStr += str[i];
}

console.log(`${str} reverse is ${revStr}`);
