const eqArrays = function(array1, array2) {
  if (array1.length === 0 && array2.length !== 0) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1.length !== array2.length) {
        return false;
      } else if (array1[i] !== array2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};

module.exports = eqArrays;