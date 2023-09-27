const removeFromArray = function (array, ...values) {
  let resultArray = [];
  for (item of array) {
    if (!values.includes(item)) {
      resultArray.push(item);
    }
  }
  return resultArray;
};
console.log(removeFromArray([1, "mom", 2, 3], "mom", 2));
// Do not edit below this line
module.exports = removeFromArray;
