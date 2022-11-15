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

// Math.max() expects numbers as arguments and returns the largest number from the supplied arugments.
// console.log(Math.max(1, 3, 4));
// What if you have an array of numbers and want to supply it to Math.max()?
// const listOfNumbers = [1, 3, 4];
// console.log(Math.max(listOfNumbers)); // returns NaN! Since Math.max() expects individual numbers as arguments not a array of numbers.
// Math.max(listOfNumbers[0], listOfNumbers[1]); // This this the correct way.
// This gets ugly, since sometimes we won't know the number of numbers present inside the list.
// We can use the ... spread operator which expands an iterable object `into a list of arguments`.
// Spread synatax combined with normal values...
// const a = [1, 3, 4];
// const b = [3, 4, 5];
// console.log(Math.max(1, ...a, 2, ...b));
// Spread syntax can be used to merge iterables too...
// const c = [...a, ...b];

// Any iterable can be spread, for example.
// const name = "shibi";
// console.log(...name);
// Note this is equivalent to console.log('s', 'h', 'i', 'b', 'i'); that is, the characters of the string gets passed as arguments to console.log()!
// console.log([...name]);
// Note ...name returns each and every character present inside of `name` as arguments to the array initializer.
// The spread syntax uses iterators to gather elements of an iterable... The same way as the `for of` loop does.

// Note that not every iterable is an array.
// Example 1) Strings
// const name = "shibi";
// name.forEach((c) => console.log(c)); // Says forEach is not a function of name.
// But this works.
// for (c of name) {
//   console.log(c);
// }

// Example 2) Array like objects
// function sum() {
//   console.log(arguments); // Prints  { '0': 1, '1': 2, '2': 3, '3': 4 }
//   // arguments.forEach((a) => console.log(a)); // Throws an error.
//   // This works.
//   for (a of arguments) {
//     console.log(a);
//   }
// }
// sum(1, 2, 3, 4);

// To convert an iterable or an array-like object to an array use Array.from().
// const obj = {
//   0: "shibi",
//   1: "suriya",
//   length: 3,
//   // Length is important :) if length supplied is more than the number of properties present in the object then Array.from
//   // shall fill the array with `undefined` to compensate for the  difference.
//   // If the length supplied is less than the number of properties present in the object then
//   // the extra properties get discarded.
// };
// Throws error, since `obj` is just a regular object, its not an iterable, nor an Array.
// for (o of obj) {
//   console.log(o)
// }
// obj.forEach(o => console.log(o))
// const arrayObj = Array.from(obj)

// But note that Array.from() can work with `array - likes` and iterables, but `...` works with only iterables, so this
// won't work... 
// const arrayObj = [...obj]
// Note that an `Array-like` object may or may not be an iterable.
// An iterable may or may not be an array.
// An array is iterable.

// Using spread operators with objects.
// const obj = {
//   name: 'shibi',
//   age: '24'
// }
// Note that obj is just a regular object and not an iterable, and we can't use the ... operator on an non-iterable!

// const newObj = [...obj];  // Will generate an error since we are trying to iterate over an non iterable! 
// And this obiviously doesn't make sense since we are trying to spread a key-value pair into an array. But the error
// thrown is `can't iterator over a non-iterable`!

// But somehow this is normal in js, being able spread a non-iterable inside '{}'!!!! 
// const newObj = {...obj} 

// Two modes of ... spread operator:
// 1) Spreading an iterator.
// 2) Spreading an object inside {}.