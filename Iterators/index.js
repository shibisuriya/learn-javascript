const rng = require("random-number");
const makeDragon = require("./make-dragon");
const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const randomNum = rng({ min: 1, max: 10, integer: true });
        if (randomNum >= 5) {
          return {
            value: makeDragon(),
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};
for (dragon of dragonArmy) {
  console.log(dragon);
}
