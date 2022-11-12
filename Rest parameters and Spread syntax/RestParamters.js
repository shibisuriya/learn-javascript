// Learning material = https://javascript.info/rest-parameters-spread
// Note: This is different from ...rest used while destructuring an object or an array.
console.clear();
// const [a, b, c, ...rest] = ["a", "b", "c", "d"];
// console.log(rest);
// const { a, b, ...rest } = {
//   a: "a",
//   b: "b",
//   c: {
//     c: "c",
//   },
// };
// console.log(rest);

// Two possible function definition to calcuate the max of a collection of numbers.
// 1)
// function max(a, b, c) {
//   Calculate the max of a, b or c and return.
// }

// 2)
// function max(listOfNumbers) {
//   listOfNumbers.forEach((number) => {
//     Calculate the the maximum of the array and return it.
//   });
// }

// Problem with Function 1)
// Function 1) takes exact number of arguements.
// a) What if you want to the find max of only two numbers a and b? Use default argument for c?
// But what would be an appropriate default 0 ? // What if we were supplied negative values too?
// c) What if you want to find max of more than 3 numbers a, b, c and d?
// b) Won't take an array as arguments...

// Function 2) won't take multiple arguments... It only accepts one arguement, that is an array.
// So first we have to construct an array using the numbers and then supply that array to the function.

// To support arbitary number of arguments we use ...rest syntax.

// function max(...numbers) {
//   return Math.max(...numbers);
// }
// console.log(max(1, 2, 9, 3, 4));

// In js doing this won't generate an error.
// function sum(a, b) {
//   return a + b;
// }
// sum(1, 2, 3, 4, 5);
// The extra arguements won't be used.

// We can choose to get the first parameters as variables, and gather only the rest.

// function sum(a, ...rest) {
//   let sum = a;
//   for (const num of rest) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3, 4));

// The rest parameters must be at the end.
// This function will generate error.
// function f(arg1, ...rest, arg2) {
// }

// The “arguments” variable
// There is also a `special array like object` named `arguments` which contains all the arguments passed to
// a conventional function.

// function sum() {
//   console.log(arguments);
//   console.log("No. of arguments = ", arguments.length);
// `arguments` are iterable! That is, we can,
// for (argument of arguments) {
//   console.log(argument);
// }
// Note that the variable `arguments` is both array-like (supports arguments.length)
// and iterable but it is not an array!
// So it doesn't support Array.map(), Array.filter(), etc.
//   console.log(typeof(arguments));
// }
// sum(1, 2);

// Note arrow functions don't have the variable `arguments`, if we try to access `arguments` from inside
// of an arrow function then the arrow function will use the `arguments` variable of the function inside which the arrow function is present.

// 1) An conventional function inside of a conventional function.
// function sum() {
//   function test() {
//     console.log(arguments);
//   }
//   test("shibi", "suriya");
// }
// sum("sasi");

// 2) An arrow function inside of an conventional function.
function sum() {
  const test = () => {
    // Display the `arguments` supplied to sum().
    console.log(arguments);
  };
  test("shibi", "suriya");
}
sum("sasi");

// Note arrows functions don't have their own `this` :) ? And neither their own `arguments`.
