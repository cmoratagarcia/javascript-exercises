const sumAll = function (a, b) {
  let sum = 0;
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return "ERROR";
  }
  if (a < b) {
    while (a <= b) {
      sum += a;
      a++;
    }
  } else {
    while (b <= a) {
      sum += b;
      b++;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
