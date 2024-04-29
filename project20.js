// Write a Program to the Number of Occurrences of a character in a String using for Loop

var string = prompt("Please enter a String");
var letter = prompt("Please enter a Letter");
let strLen = string.length;

var counter = 0;
for (var i = 0; i < strLen; i++) {
  if (string[i] == letter) {
    counter++;
  }
}
console.log(`${string} => ${letter} = ${counter}`);
