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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

//Test Codes
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const ef = { a: 1, c: 2, b: [3, 4] };
const gh = { a: 1, c: 2, b: [3, 4] };

assertEqual(eqObjects(ef, gh), true);

const fe = { b: [3, 4], a: [2, 1, 4] };
assertEqual(eqObjects(ef, fe), false);

const obj1 = {a: [1,2,3]};
const obj2 = {a: [1,2,3]};
assertEqual(eqObjects(obj1, obj2), true);