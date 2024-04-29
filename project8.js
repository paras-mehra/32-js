// Write a Function to Check if a Value is Negative, Positive or Zero

const check = () => {
  var value = document.getElementById("data").value;
  var res = Math.sign(value);
  if (value > 0) {
    res = `${value} is Positive Number`;
  } else if (value < 0) {
    res = `${value} is Negative Number`;
  } else if (value == 0) {
    res = `This ${value} is Zero`;
  } else {
    res = NaN;
  }
  document.getElementById("res").innerHTML = res;
};
