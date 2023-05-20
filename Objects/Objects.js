console.clear();
// A property is a key-value pair, for example,
const user = {
  name: "shibi",
  age: "30",
};
// Here name: 'shibi' is a property.

// Another way to create an Object in js.
// const user = new Object();

// To remove a property from an `Object` use the delete operator.
delete user.name;
console.log(user);

// Using multi-word property names,
const dog = {
  "body color": "brown", // Note: Key must be inside quotes.
};
console.log(dog["body color"]);

// `key` can be any expression.
const key = "body color";
console.log(dog[key]);
