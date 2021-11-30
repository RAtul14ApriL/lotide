const eqArrays = require('../eqArrays');

const eqArraysTest = function(array1, array2){
  if(eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}
eqArraysTest([5, 6, 7], [6, 7]);
eqArraysTest(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]);
eqArraysTest([5, 6, 7], [5, 6, 7]);
eqArraysTest([], [2]);