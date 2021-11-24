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

const assertEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [3, 2, 1]);
assertEqual(["Lighthouse", "Lab", "Bootcamp"], ["Lighthouse", "Lab", "Bootcamp"]);