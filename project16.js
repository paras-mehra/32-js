// Write a Program to Check Armstrong Number

var number = prompt("PLease Enter a Number");
var temp = number;
var nod = number.toString().length;
var sum = 0;
while (temp > 0) {
  // 152/10 = 3
  var digit = temp % 10;
  //   console.log(digit);
  sum += digit ** nod;
  //   console.log(sum);
  temp = parseInt(temp / 10);
  //   console.log(temp);
}
if (sum == number) {
  console.log(`${number} is an Armstrong Number`);
} else {
  console.log(`${number} is not an Armstrong Number`);
}
