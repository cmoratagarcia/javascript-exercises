const fibonacci = function (n) {
  let item = Number(n);
  let firstNum = 1;
  let secondNum = 0;
  let containerArr = [];

  if (item < 0) {
    return "OOPS";
  }

  for (let i = 0; i < item; i++) {
    firstNum = firstNum + secondNum;
    containerArr.push(firstNum);
    secondNum = firstNum + secondNum;
    containerArr.push(secondNum);
  }
  return containerArr[item - 1];
};

// Do not edit below this line
module.exports = fibonacci;
