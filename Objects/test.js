console.clear();
// # Object creations
// Material used = https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=2

// const dog = {
//   sound: "woof",
//   makeSound: () => {
//     console.log(this.sound); // Prints `undefined` lol.
//   },
// };
// const cat = {
//   sound: "meow",
//   makeSound: function () { // Prints "meow".
//     console.log(this.sound);
//   },
// };
// dog.makeSound();
// cat.makeSound();

const dog = {
  sound: "woof",
  makeSound: function () {
    console.log(this.sound);
  },
};
// const makeSound = dog.makeSound
// makeSound() // Prints `undefined`.

// To prevent this, use .bind()
// const makeSound = dog.makeSound.bind(dog)
// makeSound()

// You might think that nobody really assigns a member function to a variable and then calls it...
// But we have scenarios in which this might happen, for example,
setTimeout(dog.makeSound, 2000); // This will print `undefined`! Because of the concept explained above.
setTimeout(dog.makeSound.bind(dog), 3000); // This will print `woof`.

// Material used = https://www.youtube.com/watch?v=PIkA60I0dKU&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=2
