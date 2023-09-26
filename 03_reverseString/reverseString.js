const reverseString = function (string) {
  let strArray = string.split("");
  let resultArray = [];
  for (let i = 0; i < strArray.length; i++) {
    resultArray.unshift(strArray[i]);
  }
  return resultArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
