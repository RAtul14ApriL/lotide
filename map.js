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


//defining map function
//const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const result1 = map(words, word => word[0]);
//console.log(result1);

assertArraysEqual(map(["Lighthouse", "Lab", "Bootcamp"], item => item[0]), ['L', 'L', 'B']);
assertArraysEqual(map(["Canada", "Bangladesh", "India", "Greece", "Spain"], item => item[0]), ["C", "B", "I", "G", "S"]);