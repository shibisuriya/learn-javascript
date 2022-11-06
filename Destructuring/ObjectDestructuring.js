// Study material - https://javascript.info/destructuring-assignment
console.clear();

// Setting default values while object destructuring.
//  Default values can be any expressions or even function calls.
// Renaming variable name + default value...
const user = {
  name: "shibi",
  class: 5,
  school: "kv",
};
// const getAge = () => 25;
// const { name, age: userAge = getAge() } = user;
// console.log(userAge);

// ...rest
// const { name, ...rest } = user;
// console.log(rest);

// Destructureing object into existing variables...

// When js encounters a {} in the main flow, it expects either an Object {user: 'shibi'} or a
// code block { const b = 10; const c = 10 * b; }
// let title, width, height;
// { title, width, height } = { title: "Menu", width: 200, height: 100 }
// In the above code snippet `{ title, width, height }` is a legit code block since `{console.log('shibi'), console.log('suriya)}`
// is also a legit code block, the comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.
// In the above code snippet js thinks `{ title, width, height }` is a  code block and assumes that
// the programmer is trying to assign an object to a code block (Which doesn't make sense)...
// To get around this problem, wrap the destructuring assignment statement using parenthesis.
// This makes js think that the piece of code is an expression and it gets evaluated resulting in
// destructing assignment.

// let title, width, height;
// ({ title, width, height } = { title: "Menu", width: 200, height: 100 });
// console.log(title, width, height);

// Destructuring complex objects.
// The pattern on the left side of the assignment has the same structure to extract values from them:

// destructuring assignment split in multiple lines for clarity
let {
  size: { width, height },
  items: [{ itemName, itemType }, item2], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = {
  size: {
    width: 100,
    height: 200,
  },
  items: [{ itemType: "fruit", itemName: "orange" }, "Donut"],
  extra: true,
};
// Note: The left part looks similar the right part...

// Smart function parameters

// This gives an error since showModal is called without an arguement, so the function will try to destructure
// undefined resulting in error.
// function showModal({ width = 10, height = 20, content = "Hello" }) {}
// showModal();
// To prevent this use,
// showModal({})
// or better change the function defination like this
// function showModal({ width = 10, height = 20, content = "Hello" } = {}) {
//   console.log(width, height, content);
// }
// showModal();
