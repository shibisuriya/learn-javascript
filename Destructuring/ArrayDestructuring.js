// Learning material - https://javascript.info/destructuring-assignment
// Array destructuring works well when combined with `split` or other array-returning methods.
const [firstName, , lastName] = "shibi lazy suriya".split(" "); // Avoiding the middle name.
console.log(firstName);
console.log(lastName);

// Array destructuring works with any iterable on the right-side.
const [firstLetter, , secondLetter] = "abc";
console.log(firstLetter, secondLetter);

// We can use any “assignables” on the left side.
const user = {};
[user.firstName, user.lastName] = " shibi suriya ".trim().split(" "); // Note: Here keyword `const` is missing.
console.log(`First name -> ${user.firstName}, Last name -> ${user.lastName}`);

// Object.entries() returns an array not an object.
const user = {
  name: "shibi",
  age: 25,
  surname: "suriya",
};
for (const [key, value] of Object.entries(user)) {
  console.log(`key -> ${key}, value -> ${value}`);
}

// Tricks to swap variables...
// We can swap more than two variables this way.
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
console.log(`${guest}, ${admin}`);

// ...rest
let [name1, name2, ...abc] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(abc);

// default values
// Default values can be more complex expressions or even function calls.
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(name);
console.log(surname);

console.clear();
