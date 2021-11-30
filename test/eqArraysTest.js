const eqArrays = require('../eqArrays');

console.log(eqArrays([5, 6, 7], [6, 7]));
console.log(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]));
console.log(eqArrays([5, 6, 7], [5, 6, 7]));
console.log(eqArrays([], [2]));