// Write a Program to Count the Number of Vowels in a String using Regex

var string = prompt("Please Enter a String");
var reg = /[aeiou]/gi;
var chars = string.match(reg);
console.log(chars.join(","));
console.log(chars.length);
