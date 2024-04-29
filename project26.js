// Write a Program to find sum of Natural Number using Recursion

function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
    // 5 + 4 + 3 + 2 + 1 + 0 = 15
  } else {
    return num;
  }
}
var res = sum(20);
console.log(res);
