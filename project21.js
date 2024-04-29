// Write a Program to Check whether a String Starts with Ends with Certain Characters

var string = prompt("Please Enter a String");
console.log(string);
var testStart = string.startsWith("H");
var testEnds = string.endsWith("D");
if (testStart == true && testEnds == true) {
  console.log(`${string} Starts With 'H' and Ends With 'D'`);
} else if (testStart == true && testEnds == false) {
  console.log(`${string} starts with 'H' but `);
} else if (testStart == false && testEnds == true) {
  console.log(`${string} ends with 'D'`);
} else {
  console.log(`${string} neither Starts with 'H' nor Ends with 'D'`);
}
