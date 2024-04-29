// Write a Program to check if a number is Prime Number or Not

var number = prompt("Please Enter a Number");

if (number == 1) {
  console.log(`${number} is neither prime nor composite`);
} else if (number < 1) {
  console.log(`${number} is not a Prime Number`);
} else {
  // let say Numbe is 15
  for (var i = 2; i < number; i++) {
    // 15 / 2 = Q:7
    // 15 % 2 = R:1
    if (number % i == 0) {
      var res = `${number} is not a Prime Number`;
      break;
    } else {
      var res = `${number} is a Prime Number`;
    }
  }
  console.log(res);
}
