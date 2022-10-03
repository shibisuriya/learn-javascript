const randomNumber = require("random-number");
// This function accepts an array and selects a random element of the array and
// returns it.
const randomItem = (array) => {
  if (array && array.length > 0) {
    const randomIndex = randomNumber({
      min: 0,
      max: array.length - 1,
      integer: true,
    });
    return array[randomIndex];
  }
};
module.exports = randomItem;
