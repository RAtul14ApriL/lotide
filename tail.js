let array = [];
const tail = function(array){
  array.pop()
  return array;
}
const assertEqual = function(a, b){
  if(a === b){
    console.log('Passed');
  } else {
    console.log('Failed');
  }
}

assertEqual(head([5, 6, 7]), [6, 7]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(head([5, 6, 7]), 6);