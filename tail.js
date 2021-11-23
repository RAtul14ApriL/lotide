const tail = function(array) {
  array = array.slice(1);
  return array;
};
const assertEqual = function(a, b) {
  if (a === b) {
    console.log('Passed');
  } else {
    console.log('Failed');
  }
};
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([5, 6, 7]), 6);

const arr = [1, 2, 3, 4];
tail(arr);
assertEqual(arr.length, 4);