// Write a Program to make Simple Calculator using Switch Case Statement

var num1 = prompt("Please enter a 1st Number");
var num2 = prompt("Please enter a 2nd Number");
var opr = prompt("Please Select the Operator");

switch (opr) {
  case "+":
    var res = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${res}`);
    break;
  case "-":
    var res = parseFloat(num1) - parseFloat(num2);
    console.log(`${num1} - ${num2} = ${res}`);
    break;
  case "x":
    var res = parseFloat(num1) * parseFloat(num2);
    console.log(`${num1} x ${num2} = ${res}`);
    break;
  case "/":
    var res = parseFloat(num1) / parseFloat(num2);
    console.log(`${num1} / ${num2} = ${res}`);
    break;
  default:
    console.log("Invalid Operator");
}
