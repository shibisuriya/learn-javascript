const randomItem = require("./random-item");
const color = ["green", "red", "purple"];
const powers = ["lighting", "fire", "water", "air"];
const size = ["tiny", "small", "medium", "large"];
const makeDragon = () => {
  return `${randomItem(color)} - ${randomItem(size)} - ${randomItem(
    powers
  )} dragon.`;
};
module.exports = makeDragon;
