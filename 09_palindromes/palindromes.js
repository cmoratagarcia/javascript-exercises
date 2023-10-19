const palindromes = function (str) {
  //remove punctuation and spaces
  let cleanStr = str
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "");

  let compareStr = cleanStr.split("").reverse().join("");

  return cleanStr === compareStr;
};

// Do not edit below this line
module.exports = palindromes;
