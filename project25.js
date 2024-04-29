// Write a Program to find Armstrong number between Interval
var a = prompt("Please enter lower Number");
var b = prompt("Please enter Upper Number");

for (var i = a; i <= b; i++) {
  var temp = i;
  var sum = 0;
  var nod = i.toString().length;
  while (temp > 0) {
    var digit = temp % 10;
    temp = parseInt(temp / 10);
    sum += digit ** nod;
  }
  if (sum == i) {
    console.log(i);
  }
}
