const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function (number, power) {
  let result = number;
  for (let i = 1; i < power; i++) {
    result = result * number;
  }
  return result;
};

const factorial = function (number) {
  let result = number;
  let multiplier = number - 1;
  if (number <= 1) {
    result = 1;
  } else {
    for (let i = 1; i < number; i++) {
      result = result * multiplier;
      multiplier--;
    }
  }
  return result;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
