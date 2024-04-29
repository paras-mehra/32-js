// Write a Function to Print the Table of any Number

var number = prompt("Please Enter a Number to Print the Table");
const table = (number) => {
  for (var i = 1; i <= 10; i++) {
    var t = i * number;
    document.write(`${number} x ${i} = ${t} </br>`);
  }
};

table(number);
