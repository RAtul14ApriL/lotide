const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] !== array2[j]) {
        return false;
      } else if (array1.length !== array2.length) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]))

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function (array) {
  const arrayLength = array.length;
  const midIndex = Math.floor(arrayLength / 2);
  const middleElement = [];
  if (arrayLength % 2 !== 0) {
    middleElement.push(array[midIndex]);
    return middleElement;
  } else {
    middleElement.push(array[midIndex - 1], array[midIndex]);
    return middleElement;
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["Lighthouse", "Lab", "Bootcamp"]), ["Lab"]);