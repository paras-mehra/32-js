// Write a Program to Find area of a Triangle

// var base = prompt("Please Enter The Base Value","");
// var height = prompt("Please Enter The Height Value","");
// var area = (base * height) / 2;

// console.log("Base: " +base+ " Height: " +height+ " area: " + area);

// 2nd Method

var a = 10;
var b = 10;
var c = 10;
var s = (a + b + c)/2;
var temp = s * (s - a) * (s - b) * (s - c);
var area = Math.sqrt(temp)
console.log(area);
