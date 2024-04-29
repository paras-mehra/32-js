// Write a Program to sort word in Alphabetical Order

var str = prompt("Please Enter a String");
console.log(str);

var newStr = str.split(" ").sort();
console.log(newStr);
console.log(newStr.join(" "));
