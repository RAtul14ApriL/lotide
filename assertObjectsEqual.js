const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length !== array2.length) {
      return false;
    } else if (array1[i] !== array2[i]) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
      } else if (Array.isArray(object1[i]) && Array.isArray(object2[j])) {
        if (eqArrays(object1[i], object2[j]) === false) {
          return false;
        } else if (object1[i] === object2[j]) {
          return true;
        }
      }
    }
  }
  return true;
};
const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

//Test Codes
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); //pass

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); //fail

const ef = { a: 1, c: 2, b: [3, 4] };
const gh = { a: 1, c: 2, b: [3, 4] };
assertObjectsEqual(ef, gh);//pass

const fe = { b: [3, 4], a: [2, 1, 4] };
assertObjectsEqual(ef, fe);//fail