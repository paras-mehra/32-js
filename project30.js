//  Write a Program to Replace the Characters of strings

var string = "Mr. Red has a red car and a red bike";
console.log(string);

var reg = new RegExp("red", "gi");
var newStr = string.replace(reg, "Blue");
console.log(newStr);
