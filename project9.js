// Generate a Random Number using  Math.random() Method

// Math.random() * ( HighestNumber - LowestNumber ) + LowestNumber

var x = Math.random();
console.log(`Before Calculation X is ${x}`);

z = x * 100;
x = x * 1000 - 1 + 1;
console.log(`After Calculation X is ${x}`);
console.log(`Floor Calculation is ${Math.floor(x)}`);
console.log(`Number Between Given Range ${Math.floor(z)}`);
