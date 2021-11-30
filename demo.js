// object = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }

// const letsFind = function(object){
//   for(let i in object){
//     for(let j in object[i])
//     console.log(i);
//   }
// }

// letsFind(object);

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const findKeyByValue = function (object, value) {
//   let output = "";
//   for (let key in object) {
//     if (object[value] === key)
//       output = key;
//   }
//   return output;
// }

//*****************Test codes *****************************
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
// console.log(bestTVShowsByGenre[The Wire]);
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// // assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);

const getKeyByValue = function (object, value) {
  let result = "";
  for (let key in object) {
    const objectArrayKeys = Object.keys(object);
 
    result = objectArrayKeys.find(key => object[key] === value);

  }
  return result;
}

console.log(getKeyByValue(bestTVShowsByGenre, "The Wire"));