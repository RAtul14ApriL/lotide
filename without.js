const without = function(source, itemsToRemove) {
let refinedArray = [];
for(let i = 0; i < source.length; i++){
  if(source[i] !== itemsToRemove[i]){
    refinedArray.push(source[i]);
  }
}
return refinedArray;
}

console.log(without([1, 2, 3], [1, 2, 3]));
console.log(without([1, 2, 3], [3, 2, 1]));
console.log(without([1, 2, 3], ['1', 2, 3]));
console.log(without([1, 2, 3, 5, 6], [1, 2, 3, 4]));

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else if (array1.length !== array2.length) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));