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

module.exports = middle;