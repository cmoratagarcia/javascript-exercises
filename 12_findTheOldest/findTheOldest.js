const findTheOldest = function (array) {
  let currentYear = new Date().getFullYear();
  for (let person of array) {
    if (!person.yearOfDeath) {
      person.yearOfDeath = currentYear;
    }
  }
  let agesArray = array.sort((a, b) =>
    a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1
  );

  return agesArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
